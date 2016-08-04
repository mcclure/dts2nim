import tsGlue

let two* {.exportc.} = QTALKTOME
let twoString* {.exportc.} = QTALKTOME2

let three* {.exportc.} = QADDONE(QTALKTOME)

QCONSOLELOG("two plus one is " & $three)

QDEKZ.ONE = 3
QCONSOLELOG("three plus two is " & $QDEKZ.FUNC(QDEKZ.ONE))

let four : QDEK1 = newQDEK1()
let five : QDEK2 = newQDEK2("Concat ")

QCONSOLELOG("two plus three is " & $four.FUNC(3))

QCONSOLELOG(five.FUNC2("working"))
