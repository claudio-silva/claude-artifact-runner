# Claude Artifact Runner

A template project for easily converting Claude AI’s Artifacts into React applications, ready to run out of the box or extend as needed.

## TL/DR

1. You created a fancy web app or UI component using Claude's Artifacts feature.
2. You want to run it outside of Claude's website, or use it as a base for a larger project.

### The fast way (1 command)
3. Download the Artifact to your local machine, as a `.tsx` or `.jsx` file.
4. Run `npx run-claude-artifact <path-to-file>` to run the Artifact locally and preview it in your browser.
5. Done!
6. When done viewing the Artifact, press `Ctrl+C` on the terminal to stop the development server and discard the temporary project.

> **Note:** If you just want to try out the project and don’t have an Artifact yet, you can just run `npx run-claude-artifact` to see the default demo Artifacts (created with Claude).

### Alternatively
1. Clone, install and run this project.
2. Save your artifact to the correct folder.
3. Run `npm run dev` to start the development server.
4. Open your browser and visit `http://localhost:5173`.
5. Done!
6. When done viewing the Artifact, press `Ctrl+C` on the terminal to stop the development server, or leave it running to continue developing your project and see your changes immediately reflected in the browser.

> See detailed installation and development instructions further below.

### Optional steps
1. Continue developing your project into a full-fledged web application.
2. Generate a release build and publish your finished application to a web server or cloud service.

## Use Cases

1. Run Artifacts on your local machine, on a web server or on a cloud service.
2. Use Artifacts as a starting point for a new project and then extend it with custom code.
3. Create a new web application from scratch and add some Artifacts to it.
4. Or forget about Claude's Artifacts and just use the project as a starting point for your manually coded web application.

## Table of Contents

- [Claude Artifact Runner](#claude-artifact-runner)
  - [TL/DR](#tldr)
    - [The fast way (1 command)](#the-fast-way-1-command)
    - [Alternatively](#alternatively)
    - [Optional steps](#optional-steps)
  - [Use Cases](#use-cases)
  - [Table of Contents](#table-of-contents)
  - [Why is this needed?](#why-is-this-needed)
  - [What this project is not](#what-this-project-is-not)
  - [What this project actually is](#what-this-project-actually-is)
  - [Limitations](#limitations)
  - [What's included?](#whats-included)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Option 1: Use npx - Fast and easy](#option-1-use-npx---fast-and-easy)
    - [Option 2: Clone the repository](#option-2-clone-the-repository)
  - [Installing a single Artifact](#installing-a-single-artifact)
  - [Creating a multi-page application](#creating-a-multi-page-application)
  - [Developing a more complex application](#developing-a-more-complex-application)
    - [Customization](#customization)
    - [Removing unneeded components / libraries](#removing-unneeded-components--libraries)
      - [Unneeded Shadcn UI components:](#unneeded-shadcn-ui-components)
      - [Unneeded packages (ex: Recharts):](#unneeded-packages-ex-recharts)
  - [Project structure](#project-structure)
  - [Building for production](#building-for-production)
  - [Deploying your application](#deploying-your-application)
    - [Local test deployment](#local-test-deployment)
    - [Traditional web hosting](#traditional-web-hosting)
    - [Cloud hosting platforms](#cloud-hosting-platforms)
      - [Netlify](#netlify)
      - [Vercel](#vercel)
      - [GitHub Pages](#github-pages)
      - [Cloudflare Pages](#cloudflare-pages)
  - [Troubleshooting](#troubleshooting)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

## Why is this needed?

After all, doesn't Claude already provide both Copy and Download buttons for you to get the generated code?

Well, if you've created a small web application or component and want to use it outside of Claude's website, you'll be disappointed to find out that Claude will only provide you with a single file containing the main logic of the app, not the full project with all necessary files to run it independently.

> Note that the code loaded by your web browser to run the Artifact is not the same as the code you copy or download from the interface; it is a transpiled, minimized and bundled version that includes all the necessary libraries (e.g., React) required to run it.

If you're unfamiliar with the technologies used on the project, you'll have a hard time assembling and configuring all the required libraries and tooling required to make a running standalone app.

Even if you're an experienced developer, you may just want to save time and effort and get the Artifacts running as easily and as soon as possible.

This template project provides the fastest and easiest way to get your Artifacts up and running on your machine. It includes all the necessary dependencies and configurations to seamlessly transition your Claude-generated Artifacts into a fully functional web application in no time.

## What this project is not

**This is not an Artifact viewer.**

"What??" - you might say.

Well, you **can** use it to view Artifacts, but it's not really intended for that.

If this was just a viewer, it would most probably just display a simple interface with a text box and a panel, where you could paste the Artifact code. Then it would compile it at runtime and display it in the panel.

But that would not be very useful, would it?

## What this project actually is

This project converts Artifacts into actual, production-ready standalone web applications.

This means it has no UI of its own. Your Artifacts will be the application's UI.

You can also blend AI-generated Artifacts with your own custom code, incorporate code generated by other AI tools, such as **v0.dev**, or even build applications without Artifacts at all.

Built with modern web development essentials including TypeScript, Tailwind CSS, Shadcn UI, and file-based routing, this pre-configured setup lets you focus on development rather than configuration. As a standard React application, you have the freedom to extend it with any features you need, from backend services like Supabase to web frameworks such as Express or Fastify.

You'll be able to deploy your app anywhere, whether locally for your own use, in a company intranet or in a public-facing production environment, at the webhosting or cloud provider of your choice.

## Limitations

This project is meant for running Artifacts that are interactive web apps, usually made in React, and for which Claude writes Javascript or Typescript code.

**Mermaid diagrams, SVGs, and other document-type Artifacts are out of the project’s scope.**

Also, Claude's Artifacts run client-side only (i.e. in the browser). As such, they are limited in their capabilities.

If you need a full-stack application (with database, APIs, etc.), I'll be honest, this is not the best project for that, as it does not provide a backend.

Nevertheless, it does provide a good starting point. You can still add a server-side framework to create a full-stack application, or use a cloud Backend service like Supabase or Firebase.

## What's included?

These are the libraries and frameworks this project provides, identical* to those available on Claude's Artifacts environment:

1. **React 18** for building user interfaces.
2. **TypeScript** to support Artifacts written in type-safe Javascript.
3. **Vite** for fast development and building.
4. **Shadcn UI** for pre-built, customizable components.
5. **Tailwind CSS** for compact and expressive embedded styling.
6. **Recharts** for creating dynamic, customizable charts and data visualizations.
7. **Lucide React** for a comprehensive library of open-source icons designed for React applications.

> \* Note that the actual versions of the packages currently in use in the Artifacts environment may differ from the ones installed by this project, as Anthropic may update them from time to time.  
> If a component generated by Claude fails to run properly because of an outdated package, please let me know.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js
  minimum supported version is 20 (lts/iron), tested up to version 23.2, version 22.11 is recommended
- npm (usually comes with Node.js)

## Installation

Start by downloading your Artifact to your local machine, as a `.tsx` or `.jsx` file.

Then you have 2 ways to install your Artifacts into a local project.

### Option 1: Use npx - Fast and easy

```bash
npx run-claude-artifact [<filename>] [--keep]
```

A browser window will open and you'll see your Artifact running.

> **Note:** If no filename is provided, the default demo components will be displayed.

> **Note:** Use `--keep` to install the project, in the current directory, as a folder named after the file (without extension).  
> Without `--keep`, the project is installed in a temporary folder and removed when the preview server exits.

If you used the `--keep` option, you'll be able to continue developing the project.

In that case, continue reading from the [Installing a single Artifact](#installing-a-single-artifact) section.

### Option 2: Clone the repository

1. Clone and degit the repository:
   ```
   git clone https://github.com/claudio-silva/claude-artifact-runner.git
   cd claude-artifact-runner
   rm -rf .git  # Disassociate from the original repository - RECOMMENDED - it's your local project now
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` to see the default app running.

The default app is composed of two demo components: a **login form** and a **signup form**. You can navigate between them by clicking on the link at the bottom of the form.

> These demo pages/components are just for demonstration purposes and can be easily replaced with your own components, either generated by Claude or created by yourself.  
> **This will NOT be the UI of your application.**

## Installing a single Artifact

If you just want to install a single Artifact on the local project, you can follow these simple steps:

1. Follow the [Installation](#installation) steps (option 1 with `--keep` or option 2).
2. Leave the browser open at the initial page and leave the development server running.
3. Delete the files in the `src/artifacts/` directory.
4. Download your Artifact from Claude.ai
5. Move the file to the `src/artifacts/` directory and rename it to `index.tsx`.
6. You'll immediately see your Artifact running on the open browser tab.

> **Note:** You'll be viewing the app in development mode. To generate the final app, ready for production, you'll need to build it first. See the instructions further below.

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

To create a production build, run:

```
npm run build
```

This will generate optimized files in the `dist/` directory, ready for deployment.

## Deploying your application

After running `npm run build`, you'll have a `dist` folder containing the built files (typically an HTML file, a JavaScript file, and a CSS file).

Here are several ways to deploy these files:

### Local test deployment

For local testing of the production build, you can use the `serve` package:

1. Install `serve` globally:
   ```
   npm install -g serve
   ```

2. Navigate to your project directory and run:
   ```
   serve -s dist
   ```

3. Open a browser and go to `http://localhost:3000` (or the URL provided in the terminal).

### Traditional web hosting

If you want to deploy to a shared or dedicated web server:

1. Upload the contents of the `dist` folder to your web server's public HTML directory (often called `public_html`, `www`, or `htdocs`).

Remember to update any necessary configuration files (like `vite.config.ts`) before building your app if it is not being served from the root of your domain.

For example, for `vite.config.ts`, you may configure it like this:
```javascript
export default {
  base: '/subdirectory/', // Set this to the path your app is served from
  // other configurations
};
```

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

I found [Claude-React-Jumpstart](https://github.com/Bklieger/Claude-React-Jumpstart) when looking for a way to run Artifacts outside of [claude.ai](https://claude.ai).

However, it did not fully meet my needs, so I decided to make my own project, as I wanted something that:
   * was completely pre-configured (no need to install or configure additional stuff),
   * was ready to go with a single `npm install`, and
   * included all components and libraries needed to fully replicate the Artifacts environment.

I would also like to thank [IntranetFactory](https://github.com/IntranetFactory) for contributing the routing solution for handling multiple Artifacts.
