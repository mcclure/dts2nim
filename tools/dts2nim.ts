import ts = require("typescript")

console.log("Processing", process.argv.slice(2))

let program = ts.createProgram(process.argv.slice(2), {})

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
