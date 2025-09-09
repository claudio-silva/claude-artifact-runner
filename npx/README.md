# run-claude-artifact v2.0.0

This npm package exposes the `run-claude-artifact` command for use with `npx`.

It clones the [claude-artifact-runner](https://github.com/claudio-silva/claude-artifact-runner) project, injects your artifact and launches Vite for building it or previewing it, and optionally creates a permanent project.

For detailed usage instructions, workflow explanation, and complete examples, please see the [main project README](https://github.com/claudio-silva/claude-artifact-runner#readme) in the Git repository.

## Quick Usage

```bash
npx run-claude-artifact [run|view|build|create] <src-file> [options]
```

- `<src-file>`: Path to a `.tsx`/`.jsx` file (for `run`/`build`/`create`) or `.html` file/directory (for `view`)

## Subcommands

| Subcommand | Description |
|------------|-------------|
| `run` (default) | Run artifact in development server |
| `view` | Serve a built HTML file or directory |
| `build` | Build and output files |
| `create` | Create full editable project |

## Options by Subcommand

### Run Subcommand Options
- `--build`: Build project and run preview server instead of dev server
- `--strict`: Enable strict TypeScript checking during build (requires --build)
- `-e, --expanded`: Create multi-file build instead of single-file (requires --build)

### Build Subcommand Options
- `-e, --expanded`: Create multi-file deployment instead of single HTML
- `--deploy-dir <path>`: Output directory for built files
- `--strict`: Enable strict TypeScript checking during build

### Create Subcommand Options
- `--project-dir <path>`: Target directory for the project
- `--remote <url>`: Git remote repository URL
- `--push`: Push to remote repository after creation

### Global Options
- `-h, --help`: Show this help message

## Examples

```bash
# Run Artifact (Default)
npx run-claude-artifact my-app.tsx          # Run dev server (default)
npx run-claude-artifact run my-app.tsx      # Same as above
npx run-claude-artifact run my-app.tsx --build  # Build single-file and run preview
npx run-claude-artifact run my-app.tsx --build --expanded  # Build multi-file and run preview
npx run-claude-artifact run my-app.tsx --build --strict  # Build with strict checking

# Build Artifact
npx run-claude-artifact build my-app.tsx                        # Single HTML file (no strict checking)
npx run-claude-artifact build my-app.tsx --strict               # Single HTML file (with strict checking)
npx run-claude-artifact build my-app.tsx --expanded             # Multi-file deployment
npx run-claude-artifact build my-app.tsx --deploy-dir /var/www  # Custom output location

# Viewing Built Artifacts

# Single-file builds (default):
# - open the resulting HTML file directly (double-click or use navigate to file://path/to/file.html)

# Multi-file builds (-e, --expanded):
npx run-claude-artifact view my-app  # Serve directory of multi-file app via a local web server

# Create Project
npx run-claude-artifact create my-app.tsx                        # Create editable project
npx run-claude-artifact create my-app.tsx --remote <url> --push  # Create + git + push
```

## Execution Workflow

- **`run` (default)**: Clone Template → Setup → Run Development Server (blocks until Ctrl+C)
- **`build`**: Clone Template → Setup → Build → Deploy → Cleanup
- **`view`**: Start Preview Server (blocks until Ctrl+C)
- **`create`**: Clone Template → Setup → Git Setup → Move to target directory

## CI/CD Usage

This `npx` command is suitable for CI/CD and other automated workflows.

> **Note:** The `run` and `view` subcommands block execution while running the server, so they're not suitable for automated workflows.

## Developing this package locally

To experiment with the CLI before publishing, link it globally:
   ```bash
   npm link
   run-claude-artifact path/to/file.tsx
   ```
   Or execute it directly with Node:
   ```bash
   node run-claude-artifact.js path/to/file.tsx
   ```

## Publishing

1. Sign in to npm if needed:
   ```bash
   npm login
   ```
2. Publish the package from this directory:
   ```bash
   npm publish --access public
   ```

After publishing, anyone can run an artifact with:

```bash
npx run-claude-artifact my-artifact.tsx
```

> Of course the name `run-claude-artifact` is already taken by the author of this project, so you'll need to change the package name on your fork if you want to publish your own version.