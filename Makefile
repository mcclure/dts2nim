
tools/deets.js: typings/index.d.ts tools/deets.ts
	tsc

typings/index.d.ts: typings.json
	typings install
