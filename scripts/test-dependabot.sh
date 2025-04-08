#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print status messages
print_status() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

# Function to print success messages
print_success() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

# Function to print error messages
print_error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "Please run this script from the project root directory"
    exit 1
fi

# Create a backup of package.json and package-lock.json
print_status "Creating backups of package files..."
cp package.json package.json.backup
cp package-lock.json package-lock.json.backup

# Function to restore backups
restore_backups() {
    print_status "Restoring package files..."
    mv package.json.backup package.json
    mv package-lock.json.backup package-lock.json
}

# Function to run tests
run_tests() {
    print_status "Running tests..."
    
    # Install dependencies
    print_status "Installing dependencies..."
    npm install
    
    # Run linting
    print_status "Running linting..."
    if ! npm run lint; then
        print_error "Linting failed"
        return 1
    fi
    
    # Run build
    print_status "Running build..."
    if ! npm run build; then
        print_error "Build failed"
        return 1
    fi
    
    print_success "All tests passed!"
    return 0
}

# Main execution
print_status "Starting Dependabot PR test..."

# Run tests with current dependencies
print_status "Testing with current dependencies..."
if ! run_tests; then
    print_error "Current dependencies test failed"
    restore_backups
    exit 1
fi

# Get the latest Dependabot PR
print_status "Fetching latest Dependabot PR..."
PR_NUMBER=$(gh pr list --author app/dependabot --limit 1 --json number --jq '.[0].number')

if [ -z "$PR_NUMBER" ]; then
    print_error "No Dependabot PRs found"
    restore_backups
    exit 1
fi

print_status "Found Dependabot PR #$PR_NUMBER"

# Get the PR changes
print_status "Applying PR changes..."
gh pr checkout $PR_NUMBER

# Run tests with updated dependencies
print_status "Testing with updated dependencies..."
if ! run_tests; then
    print_error "Updated dependencies test failed"
    restore_backups
    exit 1
fi

# Restore original state
print_status "Restoring original state..."
git checkout main
restore_backups

print_success "Dependabot PR test completed successfully!" 