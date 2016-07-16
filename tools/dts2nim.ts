import ts = require("typescript")
let commander = require("commander")
let error = require('commander.js-error')

commander
	.version("0.0.1")
	.arguments("<file>")
	.parse(process.argv)

if (commander.args.length < 1)
	error("No file specified")

if (commander.args.length > 1)
	error("Too many files specified, at the moment the limit is 1")

console.log("Processing", commander.args)

let program = ts.createProgram(commander.args, {})

let sourceFiles = program.getSourceFiles()

let typeChecker = program.getTypeChecker()

for (let sourceFile of sourceFiles) {
	console.log(sourceFile.fileName)
	for (let sym of typeChecker.getSymbolsInScope(sourceFile.endOfFileToken, 0xFFFFFFFF)) {
		if (sym.name[0] != "Q")
			continue
		console.log("\t" + sym.name + ": " +
    		//typeChecker.typeToString(typeChecker.getTypeOfSymbolAtLocation(sym, sourceFile.endOfFileToken) ));
			"", sym)
	}
}
