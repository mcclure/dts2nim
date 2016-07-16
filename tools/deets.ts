import ts = require("typescript")

console.log("Processing", process.argv.slice(2))

//console.log(ts.createLanguageService)
//class LanguageServiceHost implements ts.LanguageServiceHost {
	
let program = ts.createProgram(process.argv.slice(2), {})

let sourceFiles = program.getSourceFiles()

let typeChecker = program.getTypeChecker();

let QTALKTOME = 2

class QDEK1 {
	ONE:number
	TWO:string
}

class QDEK2 extends QDEK1 {
	THREE:number
	constructor(ok:string) {
		super()
	}
}

let QDEKZ:QDEK1

//console.log("SourceFiles", sourceFiles)

//console.log("Symbols", )

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
