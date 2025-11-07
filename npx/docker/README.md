## Docker image for the claude-artifact-runner tool

The project includes a Docker image that can be used as an alternative to `npx run-claude-artifact`. This is useful for CI/CD pipelines or environments where you don't want to install Node.js locally.

### Building the Docker Image

Run the build script:

```bash
npx/docker/build
```

The script will:
- Build the Docker image with both version and `latest` tags
- Read the version from `npx/package.json`
- Display the created tags

The Dockerfile installs Node.js v23.11.0 (which includes npx) and the `run-claude-artifact` npm package globally.

### Publishing to Docker Hub

Use the provided publish script to publish the image:

```bash
npx/docker/publish
```

The script will:
- Check if the image exists (builds it if not found)
- Verify Docker Hub login
- Push both version and `latest` tags to Docker Hub

**Note:** Make sure to run `docker login` before publishing.

### Using the Docker Image

The Docker image works exactly like `npx run-claude-artifact`, but you need to mount your workspace directory:

```bash
# Run an artifact (with port mapping for dev server)
docker run --rm -p 5173:5173 -v $(pwd):/w -w /w claudiombsilva/claude-artifact-runner my-app.tsx

# Build an artifact
docker run --rm -v $(pwd):/w -w /w claudiombsilva/claude-artifact-runner build my-app.tsx

# Create a project
docker run --rm -v $(pwd):/w -w /w claudiombsilva/claude-artifact-runner create my-app.tsx
```

**Important:** The `-v $(pwd):/w -w /w` flags mount your current directory into the container, allowing the tool to:
- Read your artifact files (`.tsx`/`.jsx`) from the host
- Write output files back to your host machine (built HTML files, created projects)

For the `run` subcommand, use `-p 5173:5173` to map the Vite dev server port to your host, so you can access it at `http://localhost:5173/`.

The tool clones the template repository to a temporary directory inside the container, so git operations happen entirely within the container and don't require host filesystem access.

The container automatically passes `--no-open` to prevent browser opening attempts inside the container. When the server starts, you'll see a message with the URL to open in your browser.