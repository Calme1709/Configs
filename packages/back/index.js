#!/usr/bin/env node
const { exec } = require('child_process');
const path = require("path");

let executingProcess;

switch(process.argv[2]){
	case "start":
		executingProcess = exec(`npx ts-node-dev --trace-warnings -r tsconfig-paths/register --no-deps --project ./tsconfig.json ./src/index.ts`);
		
		break;
	case "build":
		executingProcess = exec(`npx webpack --config "${path.join(__dirname, "webpack.js")}"`);
		
		break;
	
	default: 
		throw new Error("Unknown script");
}

executingProcess.stdout.pipe(process.stdout);
executingProcess.stderr.pipe(process.stderr);
  
executingProcess.on('exit', function (code) {
	process.exit(code);
});