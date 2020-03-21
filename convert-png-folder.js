#! /usr/bin/env node
const fs = require('fs');
const { execSync } = require('child_process');
const files = fs.readdirSync(process.cwd()).filter(f => f.includes(".png"));

console.log("Files to Convert:", files);

files.forEach(file => {
  const command = `png-to-puml ${file}`;
  console.log("Executing Command:", command)
  execSync(
    command,
    { stdio: 'inherit' }
  );
});