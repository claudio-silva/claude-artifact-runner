#!/usr/bin/env node
const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const readline = require('readline');

function run(cmd, args, options = {}) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: 'inherit', ...options });
    p.on('exit', code => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} exited with code ${code}`));
    });
  });
}

function askQuestion(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.toLowerCase().trim());
    });
  });
}

async function checkGitAvailable() {
  try {
    await run('git', ['--version'], { stdio: 'pipe' });
    return true;
  } catch (error) {
    return false;
  }
}

async function cleanup(tmpBase, keep, cwd, fileArg, repoDir) {
  try {
    if (keep) {
      const projectName = fileArg ? path.basename(fileArg, path.extname(fileArg)) : 'claude-artifact-demo';
      const dest = path.join(cwd, projectName);
      await fs.promises.rm(dest, { recursive: true, force: true }); // in case the project already exists
      await fs.promises.rename(repoDir, dest);
      await fs.promises.rm(tmpBase, { recursive: true, force: true });

      console.log(`${os.EOL}✅ Project created at ${dest}`);
      console.log(`${os.EOL}🎯 You can run your project again with:`);
      console.log(`   cd ${projectName}`);
      console.log(`   npm run dev`);

      // Interactive workflow for git setup
      try {
        console.log(`${os.EOL}🔗 Git repository setup:`);

        // Ask about making a commit (for any changes made during development)
        const makeCommit = await askQuestion('Do you want to create an initial commit with the current state of your project? (y/n): ');
        if (makeCommit === 'y' || makeCommit === 'yes') {
          try {
            console.log('📝 Creating initial commit...');
            await run('git', ['add', '.'], { cwd: dest });
            await run('git', ['commit', '-m', 'Initial commit - Claude Artifact Runner project'], { cwd: dest });
            console.log('✅ Initial commit created!');
          } catch (commitErr) {
            console.warn('⚠️  Failed to create initial commit, but project is still created.');
          }
        }

        // Ask about remote repository setup
        const setupRemote = await askQuestion('Do you want to connect this project to a remote Git repository? (y/n): ');
        if (setupRemote === 'y' || setupRemote === 'yes') {
          let repoUrl;
          let validUrl = false;

          do {
            repoUrl = await askQuestion('Enter your repository URL (HTTPS or SSH): ');
            const trimmedUrl = repoUrl.trim();

            if (!trimmedUrl) {
              console.log('❌ Repository URL cannot be empty. Please enter a valid URL.');
              console.log('💡 Examples:');
              console.log('   HTTPS: https://github.com/username/repo-name.git');
              console.log('   SSH:   git@github.com:username/repo-name.git');
            } else if (!trimmedUrl.includes('://') && !trimmedUrl.includes('@')) {
              console.log('❌ Invalid URL format. Please enter a complete repository URL.');
              console.log('💡 Examples:');
              console.log('   HTTPS: https://github.com/username/repo-name.git');
              console.log('   SSH:   git@github.com:username/repo-name.git');
            } else {
              validUrl = true;
            }
          } while (!validUrl);

          try {
            console.log('🔗 Setting up remote repository...');
            await run('git', ['remote', 'add', 'origin', repoUrl.trim()], { cwd: dest });
            console.log('✅ Remote repository connected!');

            // Ask about pushing
            const shouldPush = await askQuestion('Push the commit to the remote repository now? (y/n): ');
            if (shouldPush === 'y' || shouldPush === 'yes') {
              try {
                console.log('📤 Pushing to remote repository...');
                await run('git', ['push', '-u', 'origin', 'main'], { cwd: dest });
                console.log('✅ Successfully pushed to remote repository!');
              } catch (pushErr) {
                console.warn('⚠️  Failed to push to remote repository.');
                console.log('💡 You can try pushing later with: git push -u origin main');
              }
            } else {
              console.log('💡 You can push later with: git push -u origin main');
            }
          } catch (remoteErr) {
            console.warn('⚠️  Failed to set up remote repository.');
            console.log('💡 You can try adding the remote later with: git remote add origin <url>');
          }
        }

        console.log(`${os.EOL}🎉 Setup complete! Your project is ready for development.`);
      } catch (interactiveErr) {
        console.warn(`${os.EOL}⚠️  Interactive setup failed, but your project is still created at ${dest}`);
        console.log(`You can manually set up git remotes and push when ready.`);
      }
    } else {
      await fs.promises.rm(tmpBase, { recursive: true, force: true });
      console.log(`${os.EOL}Temporary project removed`);
    }
  } catch (err) {
    console.warn(`${os.EOL}Warning: Failed to cleanup temporary directory:`, err.message);
  }
}

async function main() {
  const args = process.argv.slice(2);

  // Handle help request
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`Claude Artifact Runner - Run Claude AI Artifacts locally

Usage: run-claude-artifact [filename] [--keep]

Arguments:
  [filename]  Path to a .tsx or .jsx file (optional)
              If not provided, demo artifacts will be displayed

Options:
  --keep      Create a permanent project with fresh git history
              Project will be named after the file (without extension)
              Without this flag, creates a temporary preview that's removed on exit
  --help, -h  Show this help message

Examples:
  npx run-claude-artifact                    # Preview demo artifacts
  npx run-claude-artifact my-app.tsx         # Temporary preview of my-app.tsx
  npx run-claude-artifact my-app.tsx --keep  # Create permanent project 'my-app'

The --keep option creates a clean, independent project ready for development
with a fresh git repository initialized. After development, you'll be prompted to
create an initial commit, set up a remote repository, and push your code.`);
    return;
  }

  const keep = args.includes('--keep');
  const cwd = process.cwd();

  // Check if Git is available
  const gitAvailable = await checkGitAvailable();
  if (!gitAvailable) {
    console.error('❌ Git is required to run this command. Please install Git and try again.');
    console.error('Installation instructions: https://git-scm.com/downloads');
    process.exit(1);
  }

  let absFile = null;
  let fileArg = null;
  let useDefault = false;

  if (args.length > 0 && !args[0].startsWith('--')) {
    // Filename provided
    fileArg = args[0];
    absFile = path.resolve(cwd, fileArg);
    if (!fs.existsSync(absFile)) {
      console.error(`File not found: ${absFile}`);
      process.exit(1);
    }
    if (!/(\.tsx|\.jsx)$/i.test(absFile)) {
      console.error('File must have .tsx or .jsx extension');
      process.exit(1);
    }
  } else {
    // No filename provided - use default
    useDefault = true;
    console.log('📁 No artifact file provided - running with demo artifacts');
  }

  if (keep) {
    const projectName = fileArg ? path.basename(fileArg, path.extname(fileArg)) : 'claude-artifact-demo';
    console.log(`🏗️  Creating permanent project '${projectName}' with fresh git history...`);
  } else {
    console.log('👀 Creating temporary preview (use --keep to create permanent project)...');
  }

  const tmpBase = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'claude-artifact-'));
  const repoDir = path.join(tmpBase, 'repo');
  const repoUrl = 'https://github.com/claudio-silva/claude-artifact-runner';

  try {
    console.log('🔄 Cloning Claude Artifact Runner...');
    await run('git', ['clone', repoUrl, repoDir]);

    // Initialize fresh git repository BEFORE copying artifact
    if (keep && gitAvailable) {
      console.log('🔄 Initializing fresh git repository...');
      await fs.promises.rm(path.join(repoDir, '.git'), { recursive: true, force: true });
      await run('git', ['init'], { cwd: repoDir });
    }

    console.log('📦 Installing dependencies...');
    await run('npm', ['install'], { cwd: repoDir });

    if (!useDefault && absFile) {
      const artifactsDir = path.join(repoDir, 'src', 'artifacts');

      // Clear artifacts directory
      console.log('🧹 Clearing existing artifacts...');
      const files = await fs.promises.readdir(artifactsDir);
      for (const file of files) {
        await fs.promises.unlink(path.join(artifactsDir, file));
      }

      const targetArtifact = path.join(artifactsDir, 'index.tsx');
      console.log('📋 Installing your artifact...');
      await fs.promises.copyFile(absFile, targetArtifact);
    } else {
      console.log('🎨 Using demo artifacts...');
    }

    // Remove npx folder
    if (keep) {
      console.log('🗂️  Removing npx folder...');
      await fs.promises.rm(path.join(repoDir, 'npx'), { recursive: true, force: true });
    }

    // Note: Initial commit will be created later during interactive setup if user chooses

    // Start vite
    const preview = spawn('npx', ['vite', '--open'], { cwd: repoDir, stdio: 'inherit' });

    let shuttingDown = false;
    process.on('SIGINT', () => {
      if (shuttingDown) return;
      shuttingDown = true;
      console.error(`${os.EOL}🛑 Stopping development server...`);
      preview.kill('SIGINT');
    });

    preview.on('exit', async () => {
      await cleanup(tmpBase, keep, cwd, fileArg, repoDir);
    });
  } catch (err) {
    console.error('Error:', err.message);
    await cleanup(tmpBase, false, cwd, fileArg, repoDir);
    process.exit(1);
  }
}

main();
