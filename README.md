# Claude Artifact Runner

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) [![Node >= 20](https://img.shields.io/badge/Node-%3E%3D20-339933?logo=node.js&logoColor=white)](https://nodejs.org/) [![React 18](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/) [![Vite 7](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/) [![TypeScript 5.9](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Tailwind CSS 3](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) [![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-ready-000?logo=radixui&logoColor=white)](https://ui.shadcn.com/) [![npm](https://img.shields.io/npm/v/run-claude-artifact?label=npx%20run-claude-artifact)](https://www.npmjs.com/package/run-claude-artifact) [![GitHub stars](https://img.shields.io/github/stars/claudio-silva/claude-artifact-runner?style=social)](https://github.com/claudio-silva/claude-artifact-runner)

**From Claude Artifact to deployable React app — in seconds!**

Zero‑config `npx` tool, project template, and optional Docker image, to **run**, **build**, or **create** full projects from Claude AI Artifacts.

- Run an Artifact in seconds, without having to create a project first and build it
- Build single‑file or multi‑file outputs ready to deploy anywhere
- Create a full React + TypeScript + Vite + Tailwind + Shadcn UI project
- Includes additional libraries when needed: Recharts, Three.js, and more
- Combine multiple Artifacts into a multi‑page app (file‑based routing)
- Run locally or deploy to any web hosting service

**Quick start:**

```bash
# Run an Artifact
npx run-claude-artifact my-app.tsx

# Build for deployment (single-file by default)
npx run-claude-artifact build my-app.tsx

# Create a full editable project
npx run-claude-artifact create my-app.tsx

# Run an artifact using Docker instead of npx
docker run --rm -p 5173:5173 -v $(pwd):/w -w /w claudiombsilva/claude-artifact-runner my-app.tsx
```

## Table of Contents

- [Claude Artifact Runner](#claude-artifact-runner)
  - [Table of Contents](#table-of-contents)
  - [What are Artifacts and why this project?](#what-are-artifacts-and-why-this-project)
  - [Use Cases](#use-cases)
  - [Quick Start](#quick-start)
    - [If you want to just run an Artifact](#if-you-want-to-just-run-an-artifact)
    - [If you want to build an Artifact](#if-you-want-to-build-an-artifact)
    - [If you want to view a previously built Artifact](#if-you-want-to-view-a-previously-built-artifact)
    - [If you want to create a full project for one or more Artifacts](#if-you-want-to-create-a-full-project-for-one-or-more-artifacts)
    - [Using Docker instead of npx](#using-docker-instead-of-npx)
  - [Limitations](#limitations)
  - [What's included?](#whats-included)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Command Syntax](#command-syntax)
    - [Subcommands](#subcommands)
    - [Basic Usage](#basic-usage)
      - [Run Artifact (Default)](#run-artifact-default)
      - [Build Artifact](#build-artifact)
      - [View Built Artifact](#view-built-artifact)
      - [Create Project](#create-project)
    - [Options by Subcommand](#options-by-subcommand)
      - [Run Subcommand Options](#run-subcommand-options)
      - [Build Subcommand Options](#build-subcommand-options)
      - [Create Subcommand Options](#create-subcommand-options)
      - [Global Options](#global-options)
    - [All Command Line Options](#all-command-line-options)
    - [Execution Workflow](#execution-workflow)
      - [`run` Subcommand (default)](#run-subcommand-default)
      - [`build` Subcommand](#build-subcommand)
      - [`view` Subcommand](#view-subcommand)
      - [`create` Subcommand](#create-subcommand)
    - [Subcommand Flow Matrix](#subcommand-flow-matrix)
    - [Deployment Directory Logic (for `build` subcommand)](#deployment-directory-logic-for-build-subcommand)
    - [Notes](#notes)
  - [Alternative Methods of Installation](#alternative-methods-of-installation)
    - [Using GitHub CLI](#using-github-cli)
    - [Create from a GitHub Template](#create-from-a-github-template)
    - [Fork and Clone (Not Recommended)](#fork-and-clone-not-recommended)
  - [After installation](#after-installation)
  - [Installing a single Artifact](#installing-a-single-artifact)
  - [Creating a multi-page application](#creating-a-multi-page-application)
  - [Developing a more complex application](#developing-a-more-complex-application)
    - [Customization](#customization)
    - [Removing unneeded components / libraries](#removing-unneeded-components--libraries)
      - [Unneeded Shadcn UI components:](#unneeded-shadcn-ui-components)
      - [Unneeded packages (ex: Recharts):](#unneeded-packages-ex-recharts)
  - [Project structure](#project-structure)
  - [Building for production](#building-for-production)
    - [Single file deployment](#single-file-deployment)
    - [Building with strict checking](#building-with-strict-checking)
    - [Multi-file deployment](#multi-file-deployment)
      - [Why would you want to do build this way, instead of building a single file?](#why-would-you-want-to-do-build-this-way-instead-of-building-a-single-file)
    - [Multi-file deployment with strict checking](#multi-file-deployment-with-strict-checking)
  - [Deploying your application](#deploying-your-application)
    - [Local test deployment](#local-test-deployment)
    - [Traditional web hosting](#traditional-web-hosting)
      - [Deploying to the root directory](#deploying-to-the-root-directory)
      - [Deploying to a subdirectory](#deploying-to-a-subdirectory)
    - [Cloud hosting platforms](#cloud-hosting-platforms)
      - [Netlify](#netlify)
      - [Vercel](#vercel)
      - [GitHub Pages](#github-pages)
      - [Cloudflare Pages](#cloudflare-pages)
  - [Available npm Scripts](#available-npm-scripts)
    - [Build Types](#build-types)
  - [Troubleshooting](#troubleshooting)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

## What are Artifacts and why this project?

Artifacts are interactive web applications created by [Claude AI](https://claude.ai), and they are a great way to get started with web development.

They are typically created in a web browser at Claude's website, and then saved as a single file containing the main logic of the app.

Claude already provides both **Copy** and **Download** buttons for you to get the Artifact code, but it **does not provide** either:
* the **final files** that are needed to run the Artifact independently,
* or the **full project** needed to develop it further.

> Note that the code loaded by your web browser to run the Artifact is not the same as the code you copy or download from the web interface; the former is a transpiled, minimized and bundled version that includes all the necessary libraries (e.g., React) required to run it (i.e. the files that result from a build process); the latter is the raw code that you can copy and paste into your own project.

If you're unfamiliar with the technologies used on the project, you'll have a hard time assembling and configuring all the required libraries and tooling required to make a running standalone app.

Even if you're an experienced developer, you may just want to save time and effort and get the Artifacts running as easily and as soon as possible.

This template project, and the accompanying `npx` command, provide the **fastest** and **easiest** way to get your Artifacts up and running on your machine.

It includes all the necessary dependencies and configurations to seamlessly transition your Claude-generated Artifacts into a fully functional web application in no time.

## Use Cases

1. Run Artifacts on your local machine, on a web server or on a cloud service.
2. Use Artifacts as a starting point for a new project and then extend it with custom code.
3. Create a new web application and add some Artifacts to it.
4. Develop an Artifact Creator web application and use the `npx` command to dynamically run or download them.
5. Use the `npx` command as part of a CI/CD build pipeline.
6. Or don't use Artifacts at all and just use the project as a starting point for your custom coded web application.

## Quick Start

### If you want to just run an Artifact
1. Download the Artifact to your local machine, as a `.tsx` or `.jsx` file.
2. **Run it:** On the terminal, run `npx run-claude-artifact <path-to-file>`
3. Wait a few seconds. A browser window or tab will open and you'll see your Artifact running. When finished, press `Ctrl+C` on the terminal to stop the preview server.

If you don't have an Artifact to run yet, and just want to try out the project, run `npx run-claude-artifact` with no arguments to see a demo.

### If you want to build an Artifact
1. Download the Artifact to your local machine, as a `.tsx` or `.jsx` file.
2. **Build it:** On the terminal, run `npx run-claude-artifact build <path-to-file>`

The tool outputs an HTML file in your current directory, which contains all the code for running the application (HTML, CSS, JavaScript and a *favicon*).

This file can be deployed to any **static** web hosting service or cloud platform.

### If you want to view a previously built Artifact

There are two build types, with different preview methods:

- Single-file builds (e.g., `npx run-claude-artifact build <file>`, as explained above):
  - Can be opened directly from the filesystem (double-click the HTML file or open the URL `file://path/to/file.html`).
  - Multiple pages are supported via HashRouter, so navigation works under `file://`.

- Multi-file builds (e.g., `npx run-claude-artifact build <file> -e`):
  - Require a local web server to view them because additional files (like CSS and JavaScript files) cannot be loaded from the filesystem directly (`file://` URLs) because of browser security restrictions.
  - Use the `view` subcommand to preview locally:
    - `npx run-claude-artifact view artifact-directory-name` (serve the directory)
    - The tool launches a temporary web server and opens your browser. Press `Ctrl+C` to stop.

### If you want to create a full project for one or more Artifacts

Instead of just viewing or building an Artifact, you may create a full project for further development, and optionally push it to your own Git repository.

Built with modern web development essentials including **TypeScript**, **Tailwind CSS**, **Shadcn UI**, and **file-based routing**, this pre-configured setup lets you focus on development rather than configuration. As a standard **React** application, you have the freedom to extend it with any features you need, from backend services like **Supabase** to web frameworks such as **Express**, **Fastify** or **Hono**.

You can blend AI-generated Artifacts with your own custom code, incorporate code generated by other AI tools, such as **v0.dev**, or even build applications **without any Artifacts at all** and just start with a base project template to power your custom development.

You'll be able to deploy your app anywhere, whether locally for your own use, in a company intranet or in a public-facing production environment, at the webhosting or cloud provider of your choice.

See the [Installation](#installation) section below for detailed installation instructions and advanced options.

### Using Docker instead of npx

**Best for:** Running artifacts without installing Node.js locally, or in CI/CD pipelines.

Instead of using `npx run-claude-artifact`, you can use the Docker image:

```bash
# Run an artifact (mount current directory as workspace)
docker run --rm -p 5173:5173 -v $(pwd):/w -w /w claudiombsilva/claude-artifact-runner my-app.tsx

# Build an artifact
docker run --rm -v $(pwd):/w -w /w claudiombsilva/claude-artifact-runner build my-app.tsx

# Create a project
docker run --rm -v $(pwd):/w -w /w claudiombsilva/claude-artifact-runner create my-app.tsx
```

**Note:** The `-v $(pwd):/w -w /w` flags mount your current directory into the container so the tool can:
- Read your artifact files (`.tsx`/`.jsx`) from your local directory
- Write output files back to your local directory (built HTML files, created projects)

For the `run` subcommand, use `-p 5173:5173` to map the Vite dev server port to your host, so you can access it at `http://localhost:5173/`.

The tool clones the template repository to a temporary directory inside the container, so you also don't need git installed on the host.

The container automatically passes `--no-open` to prevent browser opening attempts inside the container. When the server starts, you'll see a message with the URL to open in your browser.

For more details on building and publishing the Docker image, see the [npx/README.md](npx/README.md#docker) documentation.

## Limitations

This project is meant for running Artifacts that are interactive web apps, usually made in React, and for which Claude writes Javascript or Typescript code.

**Mermaid diagrams, SVGs, and other document-type Artifacts are out of the project’s scope.**

Also, Claude's Artifacts run client-side only (i.e. in the browser). As such, they are limited in their capabilities.

If you need a full-stack application (with database, APIs, etc.), I'll be honest, this is not the best project for that, as it does not provide a backend.

Nevertheless, it does provide a good starting point. You can still add a server-side framework to create a **full-stack application**, or **use a cloud Backend service** like **Supabase** or **Firebase**.

## What's included?

These are the libraries and frameworks this project provides, identical* to those available on Claude's Artifacts environment:

1. **React 18** for building user interfaces.
2. **TypeScript** to support Artifacts written in type-safe Javascript.
3. **Vite** for fast development and building.
4. **Shadcn UI** for pre-built, customizable components.
5. **Tailwind CSS** for compact and expressive embedded styling.
6. **Recharts** for creating dynamic, customizable charts and data visualizations.
7. **Lucide React** for a comprehensive library of open-source icons designed for React applications.
8. **Three.js** for creating 3D graphics and animations.

> \* Note that the actual versions of the packages currently in use in the Artifacts environment may differ from the ones installed by this project, as Anthropic may update them from time to time.  
> If a component generated by Claude fails to run properly because of an outdated package, please let me know.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js
  minimum supported version is 20 (lts/iron), tested up to version 23.2, version 22.11 is recommended
- npm (usually comes with Node.js)
- npx (comes with npm 5.2+ and higher)
- git (required for project creation and optional repository creation)

## Installation

Start by downloading your Artifact to your local machine, as a `.tsx` or `.jsx` file.

### Command Syntax

```bash
npx run-claude-artifact [run|view|build|create] <src-file> [options]
```

**Arguments:**
- `<src-file>`: Path to a `.tsx`/`.jsx` file (for `run`/`build`/`create`) or `.html` file/directory (for `view`)

**Subcommands:**
- `run` (default): Run artifact in development server
- `view`: Serve a built HTML file or directory
- `build`: Build and output files
- `create`: Create full editable project

### Subcommands

| Subcommand | Description |
|------------|-------------|
| `run` (default) | Run artifact in development server |
| `view` | Serve a built HTML file or directory |
| `build` | Build and output files |
| `create` | Create full editable project |

### Basic Usage

#### Run Artifact (Default)
```bash
npx run-claude-artifact my-app.tsx                         # Run dev server (default)
npx run-claude-artifact run my-app.tsx                     # Same as above
npx run-claude-artifact run my-app.tsx --build             # Build single-file and run preview
npx run-claude-artifact run my-app.tsx --build --expanded  # Build multi-file and run preview
npx run-claude-artifact run my-app.tsx --build --strict    # Build with strict checking
```

#### Build Artifact
```bash
npx run-claude-artifact build my-app.tsx                        # Single HTML file (no strict checking)
npx run-claude-artifact build my-app.tsx --strict               # Single HTML file (with strict checking)
npx run-claude-artifact build my-app.tsx --expanded             # Multi-file deployment
npx run-claude-artifact build my-app.tsx --deploy-dir /var/www  # Custom output location
```

#### View Built Artifact
```bash
npx run-claude-artifact view my-app.html  # Serve single-file application
npx run-claude-artifact view my-app       # Serve directory with multi-file application
```

#### Create Project
```bash
npx run-claude-artifact create my-app.tsx                        # Create editable project
npx run-claude-artifact create my-app.tsx --remote <url> --push  # Create + git + push
```

### Options by Subcommand

#### Run Subcommand Options
- `--build`: Build project and run preview server instead of dev server
- `--strict`: Enable strict TypeScript checking during build (requires --build)
- `-e, --expanded`: Create multi-file build instead of single-file (requires --build)

#### Build Subcommand Options
- `-e, --expanded`: Create multi-file deployment instead of single HTML
- `--deploy-dir <path>`: Output directory for built files
- `--strict`: Enable strict TypeScript checking during build

#### Create Subcommand Options
- `--project-dir <path>`: Target directory for the project
- `--remote <url>`: Git remote repository URL
- `--push`: Push to remote repository after creation

#### Global Options
- `-h, --help`: Show this help message

### All Command Line Options

| Option | Applicable To | Description |
|--------|---------------|-------------|
| `--build` | `run` | Build project and run preview server instead of dev server |
| `--strict` | `run`, `build` | Enable strict TypeScript checking during build |
| `--expanded, -e` | `run`, `build` | Create multi-file build instead of single-file |
| `--deploy-dir <path>` | `build` | Output directory for built files |
| `--project-dir <path>` | `create` | Target directory for the project |
| `--remote <url>` | `create` | Git remote repository URL |
| `--push` | `create` | Push to remote repository after creation |
| `--help, -h` | All | Show help message |

### Execution Workflow

The script follows different sequences based on the subcommand:

#### `run` Subcommand (default)
1. **Clone & Setup** → Clone template, remove .git/npx, copy your artifact
2. **Run/Preview** → Start dev server (or build + preview if `--build` used), open in browser, block until Ctrl+C
3. **Cleanup** → Remove temporary directory

#### `build` Subcommand
1. **Clone & Setup** → Clone template, remove .git/npx, copy your artifact
2. **Build** → Build project (with `--expanded` affecting build type) - abort on failure
3. **Deploy** → Copy built files to output directory
4. **Cleanup** → Remove temporary directory

#### `view` Subcommand
1. **Start Server** → Launch web server to serve the specified HTML file
2. **Block** → Run until Ctrl+C

#### `create` Subcommand
1. **Clone & Setup** → Clone template, remove .git/npx, copy your artifact
2. **Create Project** → Move full project to target directory
3. **Git Setup** → Initialize repository, add remote, commit, push if requested
4. **Cleanup** → Remove temporary directory

### Subcommand Flow Matrix

| Subcommand | Input | Output | Server | Blocks? | Purpose |
|------------|-------|--------|--------|---------|---------|
| `run` (default) | `.tsx`/`.jsx` | ❌ | ✅ Dev/Preview | ✅ | Interactive testing |
| `build` | `.tsx`/`.jsx` | ✅ Files | ❌ | ❌ | Generate deployment files |
| `view` | `.html` | ❌ | ✅ Static | ✅ | Serve built files |
| `create` | `.tsx`/`.jsx` | ✅ Project | ❌ | ❌ | Development workspace |

### Deployment Directory Logic (for `build` subcommand)

| Build Type | --deploy-dir | Default Path | Output |
|------------|-------------|--------------|--------|
| Single file | ❌ | Current Working Directory | `CWD/my-app.html` |
| Single file | ✅ | `/path/to/deploy` | `/path/to/deploy/my-app.html` |
| Multi-file | ❌ | CWD + filename | `CWD/my-app/index.html` + `CWD/my-app/assets/` |
| Multi-file | ✅ | `/path/to/deploy` | `/path/to/deploy/index.html` + `/path/to/deploy/assets/` |

### Notes
- **Git is always required** (for initially cloning the template)
- Single-file builds embed the favicon as a data URL; multi-file builds keep `public/favicon.ico` in the output and reference it normally

## Alternative Methods of Installation

### Using GitHub CLI
```bash
gh repo create my-project-name --template claudio-silva/claude-artifact-runner --private --clone
cd my-project-name
# Replace the demo artifact with your own
cp path/to/your-artifact.tsx src/artifacts/index.tsx
npm run dev
```

### Create from a GitHub Template

**Best for:** Creating a GitHub repository for your project without using the `npx` command.

1. Go to [github.com/claudio-silva/claude-artifact-runner](https://github.com/claudio-silva/claude-artifact-runner)
2. Click the green "Use this template" button
3. Choose "Create a new repository"
4. Name your repository and choose visibility settings
5. Clone your new repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   npm install
   npm run dev
   ```

### Fork and Clone (Not Recommended)

**Note:** Forking is generally not recommended unless you plan to contribute back to the original project, as it maintains a connection to the upstream repository.

If you do fork:
1. Fork the repository on GitHub
2. Clone your fork
3. Consider unlinking from upstream if you don't plan to contribute back:
   ```bash
   git remote remove upstream  # Remove connection to original repo
   ```


## After installation

The default app is composed of two demo components: a **login form** and a **signup form**. You can navigate between them by clicking on the link at the bottom of the form.

> These demo pages/components are just for demonstration purposes and can be easily replaced with your own components, either generated by Claude or created by yourself.  
> **This will NOT be the UI of your application.**

## Installing a single Artifact

If you have created a project and you want to install or update an Artifact on it, you can follow these simple steps:

1. Make sure the development server is running. If not, start it by running `npm run dev`.
2. Leave the browser open at the initial page and leave the development server running.
3. Delete the files in the `src/artifacts/` directory.
4. Download your Artifact from Claude.ai
5. Move the file to the `src/artifacts/` directory and rename it to `index.tsx`.
6. You'll immediately see your Artifact running on the open browser tab.

You'll be viewing the app in **development** mode. To generate the final app, ready for production, you'll need to build it first:
* Use `npm run build` to generate the release files.
* Or use `npm run build:single` to generate a single file containing the entire application.
* You'll find the built files in the `dist/` directory.

## Creating a multi-page application

If you want to create a multi-page application, you can follow these steps:

1. Follow the previous section's steps.
2. Generate more Artifacts using Claude and download them to the `src/artifacts/` directory.
5. Give each file it a unique name, such as `your-component.tsx`. Each component you add will be a new page accessible at `http://localhost:5173/your-component-name` (without the `.tsx` extension).
6. If you have `npm run dev` running in the background, the new pages will be ready to display immediately. If a page is already open when being updated, it will refresh automatically.
7. You can link Artifacts to each other to build a multi-page application.
   > **It's easy:** on each Artifact page, just add links that navigate to the other Artifacts, by specifying their names without the `.tsx` extension.  
   E.g. `<a href="my-component">Go to My Component</a>`
8. You can also use the `useNavigate` hook to navigate to a specific page.
9. Finally, to create a release build and publish your finished application, follow the instructions further below.

## Developing a more complex application

If you intend to create a more advanced application, you'll probably want to customize its visual appearance by changing styles, adding images and new components, creating a base layout with a top header and a sidebar with the main navigation menu, etc.

This section is intended for advanced users only, and is not required for simple applications.

### Customization

- For styling:
  - Prefer using Tailwind classes directly in components.
  - Use `src/index.css` only for Tailwind configuration and critical global styles.
  - For component-specific styles, use CSS Modules (*.module.css).
  - For complex styling needs (such as dynamic styles), consider styled-components or other CSS-in-JS solutions.
  - Modify `tailwind.config.mjs` to customize the Tailwind CSS theme.
- Place static assets (such as images) in the `public` folder.
- Update `main.tsx` to change the overall layout of the app (e.g. adding a navigation bar).
- Add or modify components in the `src/components/` directory.
  > **Note:** Shadcn UI components installed via `npx` are automatically placed in `src/components/ui`. All components come pre-installed by default, but if you remove some and later want to reinstall any, you may simply run `npx shadcn-ui@latest add <your-component>`.

### Removing unneeded components / libraries

The **Recharts** library and ALL **Shadcn UI** components come pre-installed, so that all code that Claude may generate will run *out-of-the-box*.

If you just want to run the Artifact locally, you may leave things as they are, but if you want to deploy the application or use it as a base for a larger project, you may want to optimize the application's bundle size.

To do that, you may remove the pre-installed components or libraries that are not required by your application.

#### Unneeded Shadcn UI components:
  Just delete the component's files from `src/components/ui`.

#### Unneeded packages (ex: Recharts):
  Use `npm remove` to uninstall them.

## Project structure

| Directory/File                             | Description                                           |
|--------------------------------------------|-------------------------------------------------------|
| `dist/`                                    | Compiled output                                       |
| `public/`                                  | Standalone static assets                              |
| `src/`                                     | Contains the source code for the application          |
| `src/artifacts/`                           | **The Artifacts generated by Claude should be placed here** |
| `src/assets/`                              | Static assets for the build system                    |
| `src/components/`                          | Bundled Shadcn UI components                          |
| `src/lib/utils.ts`                         | Utility functions and helpers                         |
| `src/index.css`                            | Tailwind styles                                       |
| `src/main.tsx`                             | Entry point of the application                        |
| `src/vite-env.d.ts`                        | Type definitions for Vite                             |
| `.eslintrc.cjs`                            | ESLint configuration                                  |
| `components.json`                          | Shadcn UI components configuration                    |
| `index.html`                               | Entry HTML file                                       |
| `jsconfig.json`                            | JSON configuration                                    |
| `postcss.config.js`                        | PostCSS configuration                                 |
| `tailwind.config.mjs`                      | Tailwind CSS configuration                            |
| `tsconfig.app.json`, `tsconfig.json`, `tsconfig.node.json` | TypeScript configuration              |
| `package.json`                             | All the required packages are registered here         |
| `vite.config.ts`                           | Vite configuration                                    |

## Building for production

### Single file deployment

For smaller applications with one page, or just a few pages, you may build the application as a single file. Run:

```
npm run build:single
```

This will generate a single file in the `dist/` directory, ready for deployment.

### Building with strict checking

If you want to build a single file with rigorous code validation, run:
```
npm run build:single:strict
```

This will catch more errors and warnings during the build process, but sometimes, **it may also flag valid code as errors** if code is not written in a specific way.

> **Disabled by default**, since many AI-generated artifacts fail strict checks, despite working fine in normal mode.

You can also catch more potential errors if you run a linter before building. Run:
```
npm run lint
```

### Multi-file deployment

To create a production build as a set of separate files for each asset and each page, run:

```
npm run build
```

This will generate optimized files in the `dist/` directory, ready for deployment.

> Remember that you cannot run a multi-file application by opening the `dist/index.html` file directly from the filesystem to view it, as the browser will block it due to security restrictions. You need to use a local web server (e.g. run `npx serve dist`).

#### Why would you want to do build this way, instead of building a single file?

Because a multi-file build offers several advantages for larger applications:
1. Faster initial load times - Only the required files for the current page are loaded
2. Better caching - Shared resources (like common libraries) are cached separately
3. Progressive loading - Users can interact with parts of the app while other resources load
4. Smaller updates - When making changes, only modified files need to be redeployed
5. Better error isolation - Issues in one page won't block the entire application

### Multi-file deployment with strict checking

If you want to build a multi-file application with rigorous code validation, run:
```
npm run build:strict
```

You can even catch more potential errors if you run a linter before building. Run:
```
npm run lint
```

## Deploying your application

After running `npm run build`, you'll have a `dist` folder containing the built files (typically an HTML file, a JavaScript file, and a CSS file).

Here are several ways to deploy these files:

### Local test deployment

For local testing of the production build, you can also use the `serve` npx package:

1. Navigate to your project directory and run:
   ```
   npx serve -s dist
   ```

2. Open a browser and go to `http://localhost:3000` (or the URL provided in the terminal).

### Traditional web hosting

If you want to deploy to a shared or dedicated web server:

#### Deploying to the root directory

1. Build your application:
   ```
   npm run build:single
   ```
   or
   ```
   npm run build
   ```

2. Upload the contents of the `dist` folder to your web server's public HTML directory (often called `public_html`, `www`, or `htdocs`).

#### Deploying to a subdirectory

If your app will be served from a subdirectory (e.g., `https://mydomain.com/a/b/c/`), you need to configure the base path **before building**:

1. **Configure the base path** in `vite.config.ts`:
   ```typescript
   export default defineConfig(() => {
     return {
       base: '/a/b/c/', // Set this to match your deployment path
       plugins: [
         // ... your plugins
       ],
       // ... other configurations
     }
   })
   ```
   
   > **Important:** The base path must:
   > - Start with `/`
   > - End with `/`
   > - Match exactly where your files will be deployed (e.g., if deploying to `/a/b/c/`, use `base: '/a/b/c/'`)

2. **Build your application**:
   ```
   npm run build:single
   ```
   or
   ```
   npm run build
   ```

3. **Upload the contents** of the `dist` folder to the corresponding subdirectory on your web server.

   For example, if `base: '/a/b/c/'` is configured:
   - Upload `dist/index.html` to `public_html/a/b/c/index.html`
   - Upload any other files from `dist/` to `public_html/a/b/c/` accordingly

> **Note:** If you forget to configure the `base` path, the app will attempt to auto-detect it from the URL. However, **configuring it explicitly is recommended** for proper asset loading and optimal performance. The auto-detection is a fallback that may not work in all scenarios.

### Cloud hosting platforms

Here are some popular free cloud hosting platforms and how to deploy your app to them:

> Remember to run `npm run build` before deploying to ensure you're uploading the latest version of your app.

#### Netlify

1. Install the Netlify CLI:
   ```
   npm install -g netlify-cli
   ```

2. Run the following command in your project directory:
   ```
   netlify deploy
   ```

3. Follow the prompts. When asked for the publish directory, enter `dist`.

4. For production deployment, use:
   ```
   netlify deploy --prod
   ```

#### Vercel

1. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Run the following command in your project directory:
   ```
   vercel
   ```

3. Follow the prompts. Vercel will automatically detect that it's a Vite project and use the correct settings.

#### GitHub Pages

1. If you haven't already, create a GitHub repository for your project.

2. Install the `gh-pages` package:
   ```
   npm install gh-pages --save-dev
   ```

3. Add these scripts to your `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Run:
   ```
   npm run deploy
   ```

5. Set up GitHub Pages in your repository settings to use the `gh-pages` branch.

#### Cloudflare Pages

You can deploy to Cloudflare Pages either through the Cloudflare dashboard or using the `wrangler` CLI tool. Here's how to do it using `wrangler`, which is often the most straightforward method:

1. **Install Wrangler:**
   ```
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**
   ```
   wrangler login
   ```

3. **Deploy your project:**
   ```
   wrangler pages deploy dist
   ```

   This command will prompt you to create a new project if one doesn't exist, and then deploy your `dist` folder to Cloudflare Pages.

4. **Configure your project (optional):**
   If you need more control over your deployment, you can create a `wrangler.toml` file in your project root:

   ```toml
   name = "my-react-app"
   compatibility_date = "2024-07-16" # Replace with the current date

   [site]
   bucket = "./dist"
   ```

   Note: The `account_id` and `workers_dev` fields are typically not needed for Cloudflare Pages deployments.

5. **Custom domain and production settings:**
   To use a custom domain or configure production settings, you can use the Cloudflare Pages dashboard. There, you can set up your domain, configure environment variables, and manage other deployment settings.

## Available npm Scripts

When working with the project directly (not using the npx command), you can use these npm scripts:

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build multi-file artifact (separate JS/CSS files) |
| `npm run build:single` | Build single-file artifact (inlined assets) |
| `npm run build:strict` | Build multi-file with TypeScript strict checking |
| `npm run build:single:strict` | Build single-file with TypeScript strict checking |
| `npm run preview` | Preview built artifacts locally |
| `npm run lint` | Run ESLint |

### Build Types

- **Multi-file builds** (`build`, `build:strict`): Create separate HTML, JS, and CSS files in the `dist/` directory
- **Single-file builds** (`build:single`, `build:single:strict`): Create a single self-contained HTML file with all assets inlined
- **Strict builds** (`build:strict`, `build:single:strict`): Include TypeScript type checking before building
- **Regular builds** (`build`, `build:single`): Skip TypeScript checking for faster builds

## Troubleshooting

If you encounter any issues, try the following:

1. Clear your browser cache and restart the development server.
2. Delete the `node_modules` folder and run `npm install` again.
3. Make sure your Node.js version is compatible with the project requirements.
4. Check for any error messages in the console and search for solutions online.

If problems persist, please open an issue on this project's GitHub repository.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

Thanks to [IntranetFactory](https://github.com/IntranetFactory) for contributing the routing solution for handling multiple Artifacts.
