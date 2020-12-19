#!/usr/bin/env node
const { exec } = require('child_process');
const path = require("path");

let executingProcess;

switch(process.argv[2]){
	case "start":
		executingProcess = exec(`npx webpack-dev-server --config "${path.join(__dirname, "webpack/development.js")}"`);
		
		break;
	case "build":
		executingProcess = exec(`npx webpack --config "${path.join(__dirname, "webpack/production.js")}"`);
		
		break;
	
	default: 
		throw new Error("Unknown script");
}

executingProcess.stdout.pipe(process.stdout);
executingProcess.stderr.pipe(process.stderr);
  
executingProcess.on('exit', function (code) {
	process.exit(code);
});