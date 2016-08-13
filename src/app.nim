import tsGlue

# POST

var failed = false
try:
  testAssert(false, "Expecting to fail")
except:
  failed = true
testAssert(failed, "Self-test of test script")

# Actual tests

let QBbackflow* {.exportc.} = 543

testAssert(QBnumber == 2,    "Number variable")
testAssert(QBstring == "OK", "String variable")

testAssert(QFaddone(5) == 6, "Call function")

testAssert(QIchild.num3 == 3, "Check instance")

QIchild.num3 = 11
testAssert(QIchild.num3 == 11, "Write instance")

QIChild.addNum(5)
testAssert(QIchild.num3 == 16, "Read instance 2")

let inst1 : QCbase  = newQCbase()
let inst2 : QCbase  = newQCchild("glow")
let inst3 : QCgrand = newQCgrand("black")
let inst4 = newQCorder()

testAssert(inst1.add2(17) == 19, "Call method")
testAssert(inst2.add2(19) == 21, "Call method 2")
testAssert(inst3.addStr("light") == "blacklight", "Inherit constructor")
testAssert(inst4.grand.addStr("fish") == "silverfish", "Inherit constructor 2")

var inner : float = 0
proc cb(x: float) : float =
  inner = x + 1
  return inner + 1
let outer = QFvarcallback(20, cb)
testAssert(inner == 22, "Callback")
testAssert(outer == 24, "Callback 2")

testAssert(QFbackflow() == 543, "Exportc")
