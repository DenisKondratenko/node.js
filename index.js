function test() {
  console.log("Привет урок 2");
}
test();

var printSomething = function() {
	console.log("Просто текст");
}
printSomething();

function call (func) {
	func();
}

call(printSomething);