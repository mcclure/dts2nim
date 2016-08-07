
let QTALKTOME = 2
let QTALKTOME2 = "OK"

function QADDONE(x:number) {
	return x + 1
}

class QDEK1 {
	ONE:number
	TWO:string

	FUNC(x:number) { return x + 2 }
}

class QDEK2 extends QDEK1 {
	THREE:number
	FOUR:string
	constructor(ok:string) {
		super()
		this.THREE = 3
		this.FOUR = ok
	}
	FUNC2(y:string) { return this.FOUR + y }
}

let QDEKZ = new QDEK2("3")

function QCONSOLELOG(s:string) {
	console.log(s)
}

let XGY : QDEK1[]

class XQ1<T> {
	T x;
}

let XQ2 : XQ1<number>