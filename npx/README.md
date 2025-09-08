# run-claude-artifact

This npm package exposes the `run-claude-artifact` command for use with `npx`.

It clones the [claude-artifact-runner](https://github.com/claudio-silva/claude-artifact-runner) project, injects your artifact and launches Vite for preview or creates a permanent project.

## Usage

```bash
npx run-claude-artifact [filename] [--keep]
```

- `[filename]`: Path to a `.tsx` or `.jsx` component file (optional - uses demo if not provided).
- `--keep`: Create a permanent project with fresh git history, named after the file (without extension).

## Examples

```bash
# Preview demo artifacts temporarily
npx run-claude-artifact

# Preview your artifact temporarily  
npx run-claude-artifact my-app.tsx

# Create permanent project with clean git history
npx run-claude-artifact my-app.tsx --keep
```

The `--keep` option creates a clean, independent project ready for development with a fresh git repository and optional initial commit.

## Developing locally

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