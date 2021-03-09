#!/usr/bin/env node
const { exec } = require('child_process');
const path = require("path");

let executingProcess;

const file = process.argv.length > 3 ? process.argv[3] : null;

switch(process.argv[2]){
	case "start":
		executingProcess = exec(`npx webpack serve ${file === null ? "" : `--entry ${path.join(__dirname, `../../../src/${file}`)}`} --config "${path.join(__dirname, "webpack/development.js")}"`);
		
		break;
	case "build":
		executingProcess = exec(`npx webpack ${file === null ? "" : `--entry ${path.join(__dirname, `../../../src/${file}`)}`} --config "${path.join(__dirname, "webpack/production.js")}"`);
		
		break;
	
	default: 
		throw new Error("Unknown script");
}

executingProcess.stdout.pipe(process.stdout);
executingProcess.stderr.pipe(process.stderr);
  
executingProcess.on('exit', function (code) {
	process.exit(code);
});