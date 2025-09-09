# run-claude-artifact

This npm package exposes the `run-claude-artifact` command for use with `npx`.

It clones the [claude-artifact-runner](https://github.com/claudio-silva/claude-artifact-runner) project, injects your artifact and launches Vite for building it or previewing it, and optionally creates a permanent project.

For detailed usage instructions, workflow explanation, and complete examples, please see the [main project README](https://github.com/claudio-silva/claude-artifact-runner#readme) in the Git repository.

## Quick Usage

```bash
npx run-claude-artifact [run|build|create|view] <file> [options]
```

- `<file>`: Path to a `.tsx`/`.jsx` file (for `run`/`build`/`create`) or `.html` file (for `view`)

## Subcommands

| Subcommand | Description |
|------------|-------------|
| `run` | Run artifact (default, optional) |
| `build` | Build artifact |
| `create` | Create full editable project |
| `view` | View previously built artifact |

## Options

| Option | Applicable To | Description |
|--------|---------------|-------------|
| `--dev` | `run` | Use development server instead of production preview |
| `--expanded, -e` | `build` | Create multi-file deployment instead of single HTML |
| `--deploy-dir <path>` | `build` | Output directory for built files |
| `--project-dir <path>` | `create` | Target directory for the permanent project |
| `--remote <url>` | `create` | Git remote repository URL |
| `--push` | `create` | Push to remote repository after creation |
| `--help, -h` | All | Show help message |

## Examples

```bash
# Run artifact (default subcommand)
npx run-claude-artifact my-app.tsx          # Run artifact (default)
npx run-claude-artifact run my-app.tsx      # Same as above
npx run-claude-artifact my-app.tsx --dev    # Run with dev server

# Build artifact
npx run-claude-artifact build my-app.tsx              # Single HTML file
npx run-claude-artifact build my-app.tsx --expanded   # Multi-file deployment
npx run-claude-artifact build my-app.tsx --deploy-dir /var/www  # Custom location

# View previously built artifact
npx run-claude-artifact view my-app.html    # For single-file artifacts
npx run-claude-artifact view my-app         # For multi-file artifacts, specify the directory, not the HTML file

# Create project
npx run-claude-artifact create my-app.tsx                        # Create editable project, with local git repository
npx run-claude-artifact create my-app.tsx --remote <url> --push  # Create + git + push to remote repository
```

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