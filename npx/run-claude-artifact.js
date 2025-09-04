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

async function cleanup(tmpBase, keep, cwd, fileArg, repoDir) {
  try {
    if (keep) {
      const dest = path.join(cwd, path.basename(fileArg, path.extname(fileArg)));
      await fs.promises.rm(dest, { recursive: true, force: true });
      await fs.promises.rename(repoDir, dest);
      await fs.promises.rm(tmpBase, { recursive: true, force: true });
      console.log(`${os.EOL}Project kept at ${dest}`);
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
    console.log(`Usage: run-claude-artifact [filename] [--keep]\n\n[filename]  Path to a .tsx or .jsx file (optional)\n--keep       Keep the cloned project after exit\n\nIf no filename is provided, the default artifact will be displayed.`);
    return;
  }

  const keep = args.includes('--keep');
  const cwd = process.cwd();

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
    console.log('📁 No artifact file provided - running with default content');
  }

  const tmpBase = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'claude-artifact-'));
  const repoDir = path.join(tmpBase, 'repo');
  const repoUrl = 'https://github.com/claudio-silva/claude-artifact-runner';

  try {
    console.log('Cloning project...');
    await run('git', ['clone', repoUrl, repoDir]);

    console.log('Installing dependencies...');
    await run('npm', ['install'], { cwd: repoDir });

    if (!useDefault && absFile) {
      const targetArtifact = path.join(repoDir, 'src', 'artifacts', 'index.tsx');
      console.log('Copying artifact file...');
      await fs.promises.copyFile(absFile, targetArtifact);
    } else {
      console.log('Using default artifact content...');
    }

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
