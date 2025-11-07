#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function getCurrentVersion() {
  const packageJsonPath = path.join(__dirname, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  return packageJson.version;
}

function updatePackageJson(version) {
  const packageJsonPath = path.join(__dirname, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  packageJson.version = version;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n', 'utf8');
  console.log(`✅ Updated package.json to version ${version}`);
}

function getReadmeVersion() {
  const readmePath = path.join(__dirname, 'README.md');
  const readmeContent = fs.readFileSync(readmePath, 'utf8');
  const match = readmeContent.match(/^# run-claude-artifact v(\d+\.\d+\.\d+)/m);
  return match ? match[1] : null;
}

function updateReadme(version) {
  const readmePath = path.join(__dirname, 'README.md');
  let readmeContent = fs.readFileSync(readmePath, 'utf8');
  readmeContent = readmeContent.replace(/^# run-claude-artifact v\d+\.\d+\.\d+/m, `# run-claude-artifact v${version}`);
  fs.writeFileSync(readmePath, readmeContent, 'utf8');
  console.log(`✅ Updated README.md to version ${version}`);
}

function hasGitChanges() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8', cwd: path.join(__dirname, '..') });
    return status.trim().length > 0;
  } catch (err) {
    return false;
  }
}

function getChangedFiles() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8', cwd: path.join(__dirname, '..') });
    return status.trim().split('\n').filter(line => line.trim().length > 0);
  } catch (err) {
    return [];
  }
}

async function main() {
  try {
    // Step 1: Get current version
    const currentVersion = getCurrentVersion();
    console.log(`📦 Current version: ${currentVersion}`);

    // Step 2: Ask user to confirm or change version
    const userInput = await question(`\nEnter new version (press Enter to keep ${currentVersion}): `);
    const newVersion = userInput.trim() || currentVersion;

    if (newVersion !== currentVersion) {
      // Step 3: Update package.json
      updatePackageJson(newVersion);
    }

    // Step 4: Check and update README.md if needed
    const readmeVersion = getReadmeVersion();
    if (readmeVersion && readmeVersion !== newVersion) {
      updateReadme(newVersion);
    }

    // Step 5: Check for git changes
    const repoRoot = path.join(__dirname, '..');
    process.chdir(repoRoot);
    
    if (hasGitChanges()) {
      const changedFiles = getChangedFiles();
      console.log('\n📝 Changed files:');
      changedFiles.forEach(file => {
        console.log(`   ${file}`);
      });

      const commitAnswer = await question('\nDo you want to commit these changes? (y/n): ');
      if (commitAnswer.toLowerCase() === 'y' || commitAnswer.toLowerCase() === 'yes') {
        const suggestedMessage = `npx package updated to v${newVersion}`;
        const commitMessage = await question(`\nCommit message (press Enter for "${suggestedMessage}"): `);
        const finalMessage = commitMessage.trim() || suggestedMessage;

        // Stage all changes
        execSync('git add .', { stdio: 'inherit' });
        
        // Commit
        execSync(`git commit -m "${finalMessage}"`, { stdio: 'inherit' });
        console.log(`✅ Committed with message: "${finalMessage}"`);

        // Push
        const pushAnswer = await question('\nDo you want to push to remote? (y/n): ');
        if (pushAnswer.toLowerCase() === 'y' || pushAnswer.toLowerCase() === 'yes') {
          execSync('git push', { stdio: 'inherit' });
          console.log('✅ Pushed to remote');
        }
      }
    }

    // Step 6: Check if version already exists on npm
    console.log('\n🔍 Checking if version already exists on npm...');
    try {
      const npmViewOutput = execSync(`npm view ${require('./package.json').name}@${newVersion} version`, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: __dirname 
      });
      if (npmViewOutput.trim() === newVersion) {
        console.log(`⚠️  Version ${newVersion} already exists on npm.`);
        const continueAnswer = await question('Do you want to publish anyway? (y/n): ');
        if (continueAnswer.toLowerCase() !== 'y' && continueAnswer.toLowerCase() !== 'yes') {
          console.log('❌ Publishing cancelled.');
          process.exit(0);
        }
      }
    } catch (err) {
      // Version doesn't exist, which is fine - we can proceed
      console.log(`✅ Version ${newVersion} is available for publishing.`);
    }

    // Step 7: Run npm publish
    console.log('\n🚀 Publishing to npm...');
    process.chdir(__dirname);
    // Use --ignore-scripts to prevent npm from running lifecycle hooks that might cause loops
    execSync('npm publish --access public --ignore-scripts', { stdio: 'inherit' });
    console.log('\n✅ Published successfully!');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

main();

