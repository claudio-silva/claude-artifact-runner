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

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    console.log(`Usage: run-claude-artifact <filename> [--keep]\n\n<filename>  Path to a .tsx or .jsx file\n--keep      Keep the cloned project after exit`);
    return;
  }
  const fileArg = args[0];
  const keep = args.includes('--keep');
  const cwd = process.cwd();
  const absFile = path.resolve(cwd, fileArg);
  if (!fs.existsSync(absFile)) {
    console.error(`File not found: ${absFile}`);
    process.exit(1);
  }
  if (!/(\.tsx|\.jsx)$/i.test(absFile)) {
    console.error('File must have .tsx or .jsx extension');
    process.exit(1);
  }

  const tmpBase = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'claude-artifact-'));
  const repoDir = path.join(tmpBase, 'repo');
  const repoUrl = 'https://github.com/claudio-silva/claude-artifact-runner';

  console.log('Cloning project...');
  await run('git', ['clone', repoUrl, repoDir]);

  console.log('Installing dependencies...');
  await run('npm', ['install'], { cwd: repoDir });

  const targetArtifact = path.join(repoDir, 'src', 'artifacts', 'index.tsx');
  await fs.promises.copyFile(absFile, targetArtifact);

  console.log('Building artifact...');
  await run('npx', ['vite', 'build'], { cwd: repoDir });

  console.log('Starting preview server... (press Ctrl+C to stop)');
  const preview = spawn('npx', ['vite', 'preview'], { cwd: repoDir, stdio: 'inherit' });
  process.on('SIGINT', () => preview.kill('SIGINT'));

  preview.on('exit', async () => {
    if (keep) {
      const dest = path.join(cwd, path.basename(fileArg, path.extname(fileArg)));
      await fs.promises.rm(dest, { recursive: true, force: true });
      await fs.promises.rename(repoDir, dest);
      await fs.promises.rm(tmpBase, { recursive: true, force: true });
      console.log(`Project kept at ${dest}`);
    } else {
      await fs.promises.rm(tmpBase, { recursive: true, force: true });
      console.log('Temporary project removed');
    }
  });
}

main().catch(err => {
  console.error(err.message);
  process.exit(1);
});
