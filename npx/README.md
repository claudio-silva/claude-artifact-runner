# run-claude-artifact

This npm package exposes the `run-claude-artifact` command for use with `npx`.

It clones the [claude-artifact-runner](https://github.com/claudio-silva/claude-artifact-runner) project, injects your artifact and launches Vite, so you can preview it without manually installing the project.

## Usage

```bash
npx run-claude-artifact <filename> [--keep]
```

- `<filename>`: Path to a `.tsx` or `.jsx` component file.
- `--keep`: If provided, the cloned project is moved to a folder named after the file (without extension).

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