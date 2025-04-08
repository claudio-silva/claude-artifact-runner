#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# --- Helper Functions ---

print_status() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

print_success() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

print_error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

print_info() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

cleanup() {
    print_status "Running cleanup..."
    # Ensure we are back on the main branch if possible
    current_branch=$(git rev-parse --abbrev-ref HEAD || echo "unknown")
    if [[ "$current_branch" != "main" && "$current_branch" != "unknown" ]]; then
        print_status "Switching back to main branch..."
        git checkout main || print_error "Failed to checkout main branch during cleanup."
    fi
    
    # Restore package files if backups exist
    if [[ -f package.json.backup && -f package-lock.json.backup ]]; then
        print_status "Restoring package files..."
        mv package.json.backup package.json
        mv package-lock.json.backup package-lock.json
    else
        print_status "No backup files found to restore."
    fi
    print_status "Cleanup finished."
}

# Trap EXIT signal to ensure cleanup runs
trap cleanup EXIT

run_single_test() {
    local pr_number=$1
    local test_passed=true

    print_info "--- Testing PR #$pr_number ---"
    
    print_status "Checking out PR #$pr_number..."
    if ! gh pr checkout $pr_number; then
        print_error "Failed to checkout PR #$pr_number. Skipping."
        git checkout main # Attempt to return to main
        return 1
    fi

    print_status "Installing dependencies for PR #$pr_number..."
    if ! npm ci; then # Use npm ci for cleaner installs
        print_error "npm ci failed for PR #$pr_number."
        test_passed=false
    fi

    if $test_passed; then
        print_status "Running linting for PR #$pr_number..."
        if ! npm run lint; then
            print_error "Linting failed for PR #$pr_number."
            test_passed=false
        fi
    fi

    if $test_passed; then
        print_status "Running build for PR #$pr_number..."
        if ! npm run build; then
            print_error "Build failed for PR #$pr_number."
            test_passed=false
        fi
    fi

    if $test_passed; then
        print_success "PR #$pr_number passed tests!"
    else
        print_error "PR #$pr_number failed tests."
    fi
    
    print_status "Returning to main branch..."
    git checkout main
    
    # Decide return status (0 for success, 1 for failure)
    if $test_passed; then
        return 0
    else
        return 1
    fi
}

# --- Main Execution ---

# Check prerequisites
if ! command -v gh &> /dev/null; then
    print_error "GitHub CLI ('gh') could not be found. Please install it."
    exit 1
fi

if ! gh auth status &> /dev/null; then
    print_error "Not logged into GitHub CLI ('gh auth status' failed). Please log in."
    exit 1
fi

if [ ! -f "package.json" ]; then
    print_error "Script must be run from the project root directory (where package.json exists)."
    exit 1
fi

print_status "Starting PR tester..."

# Stash any local changes to prevent conflicts
print_status "Stashing any local changes..."
if ! git stash push -m "Temporary stash for PR testing" > /dev/null; then
    print_error "Failed to stash local changes. Please commit or stash your changes manually before running this script."
    exit 1
fi

# Ask user what type of PRs to test
print_info "What type of PRs would you like to test?"
echo "1) All open PRs"
echo "2) Only Dependabot PRs"
read -p "Enter your choice (1 or 2): " pr_type_choice

# Set the author filter based on user choice
author_filter=""
if [ "$pr_type_choice" = "2" ]; then
    author_filter="--author app/dependabot"
    print_status "Testing only Dependabot PRs..."
else
    print_status "Testing all open PRs..."
fi

# Create backups *once*
print_status "Creating backups of package files..."
cp package.json package.json.backup
cp package-lock.json package-lock.json.backup

# Fetch open PRs based on user choice
print_status "Fetching open PRs..."
# Get PRs into an array using standard array assignment
pr_options=()
while IFS= read -r line; do
    pr_options+=("$line")
done < <(gh pr list $author_filter --state open --json number,title --jq '.[] | "#\(.number): \(.title)"')

if [ ${#pr_options[@]} -eq 0 ]; then
    print_error "No open PRs found."
    # Restore stashed changes
    git stash pop > /dev/null
    # Cleanup will run automatically on exit
    exit 1
fi

# Store the number of PRs for later use
num_prs=${#pr_options[@]}

# Add options for Test All and Quit
pr_options+=("Test All" "Quit")

# Present the menu
print_info "Please select a PR to test:"
PS3="Enter your choice: "
select opt in "${pr_options[@]}"; do
    case $opt in
        "Test All")
            print_status "Selected: Test All"
            all_passed=true
            # Extract numbers using standard array assignment
            pr_numbers=()
            while IFS= read -r number; do
                pr_numbers+=("$number")
            done < <(gh pr list $author_filter --state open --json number --jq '.[].number')
            
            for pr_num in "${pr_numbers[@]}"; do
                if ! run_single_test $pr_num; then
                    all_passed=false
                    print_error "Testing stopped due to failure in PR #$pr_num. You may need manual intervention."
                    # You might want to change this to 'continue' if you want to test remaining PRs even if one fails
                    break 
                fi
            done
            if $all_passed; then
                print_success "All tested PRs passed!"
            else
                print_error "One or more PRs failed tests."
                # Restore stashed changes before exiting
                git stash pop > /dev/null
                exit 1 # Exit with error if any PR failed
            fi
            break
            ;;
        "Quit")
            print_status "Exiting."
            break
            ;;
        *) 
            # Check if the choice is a valid PR option
            if [[ "$REPLY" =~ ^[0-9]+$ ]] && [ "$REPLY" -le "$num_prs" ]; then
                # Extract PR number from the selected option (e.g., "#123: Title")
                pr_string=${pr_options[$(($REPLY-1))]}
                pr_number=$(echo "$pr_string" | sed -n 's/^#\([0-9]*\):.*/\1/p')
                print_status "Selected: Test PR #$pr_number"
                if run_single_test $pr_number; then
                     print_success "Testing for PR #$pr_number completed successfully."
                else
                     print_error "Testing for PR #$pr_number failed."
                     # Restore stashed changes before exiting
                     git stash pop > /dev/null
                     exit 1 # Exit with error if the selected PR failed
                fi
                break
            else
                print_error "Invalid option. Please try again."
            fi
            ;;
    esac
done

# Restore stashed changes
print_status "Restoring local changes..."
git stash pop > /dev/null

# Cleanup will run automatically via trap EXIT
print_status "Script finished."
exit 0 # Explicitly exit with success if we reached here 