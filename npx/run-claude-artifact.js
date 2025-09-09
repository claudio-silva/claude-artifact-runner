#!/usr/bin/env node
const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

function run(cmd, args, options = {}) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: 'inherit', ...options });
    p.on('exit', code => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} exited with code ${code}`));
    });
  });
}

// Build using a temporary Vite config that always enables single-file output
async function buildWithSingleFileConfig(repoDir) {
  const configFileName = 'vite.single.config.ts';
  const configPath = path.join(repoDir, configFileName);
  const configContents = `import { defineConfig, mergeConfig } from 'vite';
import baseConfig from './vite.config';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig((env) => {
  const base = typeof baseConfig === 'function' ? (baseConfig)(env) : baseConfig;
  return mergeConfig(base, {
    plugins: [...(base.plugins || []), viteSingleFile()]
  });
});
`;

  await fs.promises.writeFile(configPath, configContents, 'utf8');
  // Ensure vite-plugin-singlefile is available in the cloned template
  const pluginPath = path.join(repoDir, 'node_modules', 'vite-plugin-singlefile');
  if (!fs.existsSync(pluginPath)) {
    await run('npm', ['install', 'vite-plugin-singlefile@^2.3.0'], { cwd: repoDir });
  }
  try {
    await run('node_modules/.bin/vite', ['build', '-c', configFileName], { cwd: repoDir });
  } finally {
    try {
      await fs.promises.unlink(configPath);
    } catch (_) {
      // ignore cleanup errors
    }
  }
}

// Deploy build output to specified directory
async function deployLocally(buildDir, deployDir) {
  try {
    console.log(`📦 Deploying build output to ${deployDir}...`);

    // Ensure deploy directory exists
    await fs.promises.mkdir(deployDir, { recursive: true });

    // Copy all files from build directory to deploy directory
    const files = await fs.promises.readdir(buildDir);
    for (const file of files) {
      const srcPath = path.join(buildDir, file);
      const destPath = path.join(deployDir, file);

      const stat = await fs.promises.stat(srcPath);
      if (stat.isDirectory()) {
        await fs.promises.cp(srcPath, destPath, { recursive: true });
      } else {
        await fs.promises.copyFile(srcPath, destPath);
      }
    }

    console.log(`✅ Successfully deployed to ${deployDir}`);
  } catch (error) {
    throw new Error(`Deployment failed: ${error.message}`);
  }
}

async function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    subcommand: 'run', // Default subcommand
    filename: null,
    build: false, // For run subcommand - build and preview instead of dev
    strict: false, // For run and build subcommands - strict checking during build
    expanded: false, // For run and build subcommands - multi-file instead of single-file
    deployDir: null, // For build subcommand
    projectDir: null, // For create subcommand
    remote: null, // For create subcommand
    push: false // For create subcommand
  };

  // Handle help request
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`Claude Artifact Runner v2.0.0 - Run Claude AI Artifacts locally

Usage: npx run-claude-artifact [run|view|build|create] <src-file> [options]

Arguments:
  <src-file>     Path to a .tsx/.jsx file (for run/build/create) or .html file/directory (for view)

Subcommands:
  run (default)  Run artifact in development server
  view           Serve a built HTML file or directory
  build          Build and output files
  create         Create full editable project

Options by Subcommand:
  Run Subcommand Options:
    --build              Build project and run preview server instead of dev server
    --strict             Enable strict TypeScript checking during build (requires --build for run)
    -e, --expanded       Create multi-file build instead of single-file (requires --build)

  Build Subcommand Options:
    -e, --expanded       Create multi-file deployment instead of single HTML
    --deploy-dir <path>  Output directory for built files
    --strict             Enable strict TypeScript checking during build

  Create Subcommand Options:
    --project-dir <path> Target directory for the project
    --remote <url>       Git remote repository URL
    --push               Push to remote repository after creation

  Global Options:
    -h, --help           Show this help message

Examples:
  # Run Artifact (Default)
  npx run-claude-artifact my-app.tsx              # Run dev server (default)
  npx run-claude-artifact run my-app.tsx          # Same as above
  npx run-claude-artifact run my-app.tsx --build  # Build single-file and run preview
  npx run-claude-artifact run my-app.tsx --build --expanded  # Build multi-file and run preview
  npx run-claude-artifact run my-app.tsx --build --strict  # Build with strict checking

# Build Artifact
npx run-claude-artifact build my-app.tsx                        # Single HTML file (no strict checking)
npx run-claude-artifact build my-app.tsx --strict               # Single HTML file (with strict checking)
npx run-claude-artifact build my-app.tsx --expanded             # Multi-file deployment
npx run-claude-artifact build my-app.tsx --deploy-dir /var/www  # Custom output location

  # View Built Artifact
  npx run-claude-artifact view my-app.html        # Serve built HTML file
  npx run-claude-artifact view my-app             # Serve multi-file directory

  # Create Project
  npx run-claude-artifact create my-app.tsx                        # Create editable project
  npx run-claude-artifact create my-app.tsx --remote <url> --push  # Create + git + push

Notes:
  - Built artifacts require a web server to run correctly
  - For multi-file artifacts, specify the directory, not the HTML file
  - --remote and --push require 'create' subcommand
  - Default deployment: single file to CWD, multi-file to CWD/filename/dist
`);
    return { help: true };
  }

  // Parse subcommand
  if (args.length > 0 && !args[0].startsWith('-')) {
    const potentialSubcommand = args[0].toLowerCase();
    if (['run', 'view', 'build', 'create'].includes(potentialSubcommand)) {
      options.subcommand = potentialSubcommand;
      args.shift(); // Remove subcommand from args
    }
  }

  // Parse remaining arguments
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (!arg.startsWith('-') && !options.filename) {
      options.filename = arg;
    } else if (arg === '--build') {
      if (options.subcommand !== 'run') {
        console.error('❌ --build is only valid with run subcommand');
        process.exit(1);
      }
      options.build = true;
    } else if (arg === '--strict') {
      if (options.subcommand !== 'run' && options.subcommand !== 'build') {
        console.error('❌ --strict is only valid with run or build subcommands');
        process.exit(1);
      }
      options.strict = true;
    } else if (arg === '-e' || arg === '--expanded') {
      if (options.subcommand !== 'run' && options.subcommand !== 'build') {
        console.error('❌ --expanded is only valid with run or build subcommands');
        process.exit(1);
      }
      options.expanded = true;
    } else if (arg === '--deploy-dir') {
      if (options.subcommand !== 'build') {
        console.error('❌ --deploy-dir is only valid with build subcommand');
        process.exit(1);
      }
      if (i + 1 < args.length) {
        options.deployDir = args[i + 1];
        i++; // Skip next arg
      } else {
        console.error('❌ --deploy-dir requires a path argument');
        process.exit(1);
      }
    } else if (arg === '--project-dir') {
      if (options.subcommand !== 'create') {
        console.error('❌ --project-dir is only valid with create subcommand');
        process.exit(1);
      }
      if (i + 1 < args.length) {
        options.projectDir = args[i + 1];
        i++; // Skip next arg
      } else {
        console.error('❌ --project-dir requires a path argument');
        process.exit(1);
      }
    } else if (arg === '--remote') {
      if (options.subcommand !== 'create') {
        console.error('❌ --remote is only valid with create subcommand');
        process.exit(1);
      }
      if (i + 1 < args.length) {
        options.remote = args[i + 1];
        i++; // Skip next arg
      } else {
        console.error('❌ --remote requires a URL argument');
        process.exit(1);
      }
    } else if (arg === '--push') {
      if (options.subcommand !== 'create') {
        console.error('❌ --push is only valid with create subcommand');
        process.exit(1);
      }
      options.push = true;
    } else {
      console.error(`❌ Unknown option: ${arg}`);
      process.exit(1);
    }
  }

  // Validate required arguments
  if (!options.filename) {
    console.error('❌ Source file is required');
    process.exit(1);
  }

  // Validate subcommand-specific requirements
  if (options.subcommand === 'run' && options.strict && !options.build) {
    console.error('❌ --strict requires --build with run subcommand');
    process.exit(1);
  }
  if (options.subcommand === 'run' && options.expanded && !options.build) {
    console.error('❌ --expanded requires --build with run subcommand');
    process.exit(1);
  }
  if (options.subcommand === 'create' && options.push && !options.remote) {
    console.error('❌ --push requires --remote');
    process.exit(1);
  }

  return options;
}

// Function to serve files using npx serve
async function serveFile(filePath, isSingleFile = false, fileName = null) {
  const serveDir = filePath; // filePath is already the directory to serve
  const displayPath = isSingleFile && fileName ? `${filePath}/${fileName}` : filePath;
  console.log(`🌐 Serving ${isSingleFile ? 'single file' : 'directory'}: ${displayPath}`);

  const serveArgs = ['serve', '-s', '-L', serveDir];
  const serveProcess = spawn('npx', serveArgs, {
    stdio: 'inherit'
  });

  // Wait for server to start before opening browser
  const url = isSingleFile && fileName ? `http://localhost:3000/${fileName}` : 'http://localhost:3000';
  console.log(`🚀 Opening browser at: ${url}`);

  // Give server time to start
  await new Promise(resolve => setTimeout(resolve, 3000));

  // Try to open browser (cross-platform)
  try {
    const openCmd = process.platform === 'darwin' ? 'open' :
                   process.platform === 'win32' ? 'start' : 'xdg-open';
    await run(openCmd, [url]);
  } catch (error) {
    console.log(`ℹ️  Please open your browser and navigate to: ${url}`);
  }

  process.on('SIGINT', () => {
    console.log(`${os.EOL}🛑 Stopping server...`);
    serveProcess.kill('SIGINT');
    process.exit(0);
  });

  // Wait for the process to exit
  await new Promise((resolve) => {
    serveProcess.on('exit', resolve);
  });
}

async function main() {
  const options = await parseArgs();

  if (options.help) {
    return;
  }

  const cwd = process.cwd();

  // Handle view subcommand - special case that doesn't require cloning
  if (options.subcommand === 'view') {
    const absPath = path.resolve(cwd, options.filename);
    if (!fs.existsSync(absPath)) {
      console.error(`❌ Path not found: ${absPath}`);
      process.exit(1);
    }

    const stat = await fs.promises.stat(absPath);
    if (stat.isDirectory()) {
      // Serve directory (multi-file artifact)
      await serveFile(absPath, false);
    } else if (path.extname(absPath) === '.html') {
      // Serve single HTML file
      const parentDir = path.dirname(absPath);
      const fileName = path.basename(absPath);
      await serveFile(parentDir, true, fileName);
    } else {
      console.error('❌ For view subcommand, file must be .html or a directory');
      process.exit(1);
    }
    return;
  }

  // For other subcommands, validate artifact file
  const absFile = path.resolve(cwd, options.filename);
  if (!fs.existsSync(absFile)) {
    console.error(`❌ File not found: ${absFile}`);
    process.exit(1);
  }
  if (!/(\.tsx|\.jsx)$/i.test(absFile)) {
    console.error('❌ File must have .tsx or .jsx extension');
    process.exit(1);
  }

  // Determine project directory
  const defaultProjectName = path.basename(options.filename, path.extname(options.filename));
  const projectDir = options.projectDir || path.join(cwd, defaultProjectName);

  // Determine deploy directory for build subcommand
  let deployDir = null;
  if (options.subcommand === 'build') {
    deployDir = options.deployDir; // Use custom deploy dir if specified
  }

  console.log(`🏗️  Processing artifact: ${path.basename(options.filename)}`);

  const tmpBase = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'claude-artifact-'));
  const repoDir = path.join(tmpBase, 'repo');
  const repoUrl = 'https://github.com/claudio-silva/claude-artifact-runner';

  try {
    console.log(`
⬇️  Cloning Claude Artifact Runner template...`);
    await run('git', ['clone', repoUrl, repoDir]);

    console.log(`
🔄 Setting up project...`);
    // Initialize git repository if needed
    if (options.subcommand === 'create') {
      await fs.promises.rm(path.join(repoDir, '.git'), { recursive: true, force: true });
      await run('git', ['init'], { cwd: repoDir });
    }

    await run('npm', ['install'], { cwd: repoDir });

    // Copy artifact file
    const artifactsDir = path.join(repoDir, 'src', 'artifacts');
    const files = await fs.promises.readdir(artifactsDir);
    for (const file of files) {
      await fs.promises.unlink(path.join(artifactsDir, file));
    }

    const targetArtifact = path.join(artifactsDir, 'index.tsx');
    await fs.promises.copyFile(absFile, targetArtifact);

    // Copy favicon for Vite plugin (if it exists in the source project)
    const sourceFavicon = path.join(cwd, 'public', 'favicon.ico');
    const targetFavicon = path.join(repoDir, 'public', 'favicon.ico');

    if (fs.existsSync(sourceFavicon)) {
      await fs.promises.mkdir(path.dirname(targetFavicon), { recursive: true });
      await fs.promises.copyFile(sourceFavicon, targetFavicon);
    }

    // Remove npx folder
    await fs.promises.rm(path.join(repoDir, 'npx'), { recursive: true, force: true });

    // Handle different subcommands
    if (options.subcommand === 'run') {
      if (options.build) {
        console.log(`
🔨 Building project for preview...`);
        const isSingleFile = !options.expanded;
        try {
          if (options.strict) {
            // Run TypeScript checking first, then Vite build
            console.log('🔍 Running TypeScript type checking...');
            await run('node_modules/.bin/tsc', ['-b'], { cwd: repoDir });
            if (isSingleFile) {
              console.log('🏗️  Building single-file artifact...');
              await buildWithSingleFileConfig(repoDir);
            } else {
              console.log('🏗️  Building multi-file artifact...');
              await run('node_modules/.bin/vite', ['build'], { cwd: repoDir });
            }
          } else {
            // Skip TypeScript checking, run only Vite build
            console.log('⏭️  Skipping TypeScript strict checking...');
            if (isSingleFile) {
              console.log('🏗️  Building single-file artifact...');
              await buildWithSingleFileConfig(repoDir);
            } else {
              console.log('🏗️  Building multi-file artifact...');
              await run('node_modules/.bin/vite', ['build'], { cwd: repoDir });
            }
          }
          console.log('✅ Build successful');
        } catch (buildError) {
          console.error('❌ Build failed - aborting');
          throw buildError;
        }

        console.log(`${os.EOL}🎬 Running artifact in preview mode...`);
        const runProcess = spawn('node_modules/.bin/vite', ['preview', '--open'], {
          cwd: repoDir,
          stdio: 'inherit'
        });

        // Show helpful message after server starts
        setTimeout(() => {
          console.log(`${os.EOL}💡 Press Ctrl+C to stop the preview server`);
        }, 5000);

        process.on('SIGINT', () => {
          console.log(`${os.EOL}🛑 Stopping artifact...`);
          runProcess.kill('SIGINT');
        });

        await new Promise((resolve) => {
          runProcess.on('exit', resolve);
        });

        // Cleanup temp directory after process ends
        console.log('🧹 Cleaning up...');
        await fs.promises.rm(tmpBase, { recursive: true, force: true });
      } else {
        console.log(`${os.EOL}🎬 Running artifact in development mode...`);
        const runProcess = spawn('node_modules/.bin/vite', ['--open'], {
          cwd: repoDir,
          stdio: 'inherit'
        });

        // Show helpful message after server starts
        setTimeout(() => {
          console.log(`${os.EOL}💡 Press Ctrl+C to stop the development server`);
        }, 5000);

        process.on('SIGINT', () => {
          console.log(`${os.EOL}🛑 Stopping artifact...`);
          runProcess.kill('SIGINT');
        });

        await new Promise((resolve) => {
          runProcess.on('exit', resolve);
        });

        // Cleanup temp directory after process ends
        console.log('🧹 Cleaning up...');
        await fs.promises.rm(tmpBase, { recursive: true, force: true });
      }

    } else if (options.subcommand === 'build') {
      console.log('🔨 Building project...');
      const isSingleFile = !options.expanded;
      try {
        if (options.strict) {
          // Run TypeScript checking first, then Vite build
          console.log('🔍 Running TypeScript type checking...');
          await run('node_modules/.bin/tsc', ['-b'], { cwd: repoDir });
          if (isSingleFile) {
            console.log('🏗️  Building single-file artifact...');
            await buildWithSingleFileConfig(repoDir);
          } else {
            console.log('🏗️  Building multi-file artifact...');
            await run('node_modules/.bin/vite', ['build'], { cwd: repoDir });
          }
        } else {
          // Skip TypeScript checking, run only Vite build
          console.log('⏭️  Skipping TypeScript strict checking...');
          if (isSingleFile) {
            console.log('🏗️  Building single-file artifact...');
            await buildWithSingleFileConfig(repoDir);
          } else {
            console.log('🏗️  Building multi-file artifact...');
            await run('node_modules/.bin/vite', ['build'], { cwd: repoDir });
          }
        }
        console.log('✅ Build successful');
      } catch (buildError) {
        console.error('❌ Build failed - aborting');
        throw buildError;
      }

      console.log('📦 Deploying build output...');
      const buildOutputDir = path.join(repoDir, 'dist');

      if (options.deployDir) {
        // Deploy to custom directory
        await deployLocally(buildOutputDir, deployDir);
      } else {
        // Deploy to current directory
        if (options.expanded) {
          // Multi-file deployment
          const outputDirName = `${defaultProjectName}`;
          const outputDir = path.join(cwd, outputDirName);
          await fs.promises.cp(buildOutputDir, outputDir, { recursive: true });
          console.log(`✅ Multi-file deployment created: ${outputDir}`);
        } else {
          // Single file deployment
          const htmlFile = path.join(buildOutputDir, 'index.html');
          const outputFileName = `${defaultProjectName}.html`;
          const outputPath = path.join(cwd, outputFileName);

          if (fs.existsSync(htmlFile)) {
            await fs.promises.copyFile(htmlFile, outputPath);
            console.log(`✅ Single file created: ${outputPath}`);
          } else {
            throw new Error('HTML file not found in build output');
          }
        }
      }

      // Cleanup temp directory for build command
      console.log('🧹 Cleaning up...');
      await fs.promises.rm(tmpBase, { recursive: true, force: true });

    } else if (options.subcommand === 'create') {
      console.log(`📁 Creating project at ${projectDir}...`);
      await fs.promises.rm(projectDir, { recursive: true, force: true });
      await fs.promises.rename(repoDir, projectDir);

      // Ensure created project has single-file config and scripts
      const pkgPath = path.join(projectDir, 'package.json');
      try {
        const pkg = JSON.parse(await fs.promises.readFile(pkgPath, 'utf8'));
        // update scripts
        pkg.scripts = pkg.scripts || {};
        pkg.scripts['build'] = 'vite build';
        pkg.scripts['build:single'] = 'vite build -c vite.single.config.ts';
        pkg.scripts['build:strict'] = 'tsc -b && vite build';
        pkg.scripts['build:single:strict'] = 'tsc -b && vite build -c vite.single.config.ts';
        await fs.promises.writeFile(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
      } catch (_) {
        // ignore if package.json missing/unreadable
      }

      const singleConfigPath = path.join(projectDir, 'vite.single.config.ts');
      const singleConfigContent = `import { defineConfig, mergeConfig } from 'vite';
import baseConfig from './vite.config';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig((env) => {
  const base = typeof baseConfig === 'function' ? (baseConfig as any)(env) : (baseConfig as any);
  return mergeConfig(base, {
    plugins: [...(base.plugins || []), viteSingleFile()]
  });
});
`;
      try {
        await fs.promises.writeFile(singleConfigPath, singleConfigContent, 'utf8');
      } catch (_) {}

      console.log('💾 Creating initial commit...');
      await run('git', ['add', '.'], { cwd: projectDir });
      await run('git', ['commit', '-m', 'Initial commit'], { cwd: projectDir });
      console.log('✅ Initial commit created');

      if (options.remote) {
        console.log('🔗 Setting up remote repository...');
        await run('git', ['remote', 'add', 'origin', options.remote], { cwd: projectDir });
        console.log('✅ Remote repository configured');

        if (options.push) {
          console.log('📤 Pushing to remote repository...');
          await run('git', ['push', '-u', 'origin', 'main'], { cwd: projectDir });
          console.log('✅ Successfully pushed to remote repository');
        }
      }

      console.log(`${os.EOL}✅ Project created at ${projectDir}`);
      console.log(`${os.EOL}🎯 You can run your project with:`);
      console.log(`   cd ${path.basename(projectDir)}`);
      console.log(`   npm run dev`);

      // Cleanup temp directory for create command
      console.log('🧹 Cleaning up...');
      await fs.promises.rm(tmpBase, { recursive: true, force: true });
    }

  } catch (err) {
    console.error('❌ Error:', err.message);

    // Cleanup temp directory on error (if it exists)
    try {
      if (tmpBase && fs.existsSync(tmpBase)) {
        console.log('🧹 Cleaning up after error...');
        await fs.promises.rm(tmpBase, { recursive: true, force: true });
      }
    } catch (cleanupError) {
      console.error('⚠️  Failed to cleanup temporary directory:', cleanupError.message);
    }

    process.exit(1);
  }
}

main();
