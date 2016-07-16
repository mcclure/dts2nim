# Start by running: npm install -g typescript typings && npm install

tools/dts2nim.js: tools/typings/index.d.ts tools/dts2nim.ts
	tsc -p tools

tools/typings/index.d.ts: tools/typings.json
	cd tools && typings install

clean:
	rm -f tools/dts2nim.js
