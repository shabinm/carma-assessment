
# Questions

 ## 1. What is the result of this code in the console

		for (var i = 0; i < 100; i++) {
			setTimeout(function() {
				console.log(i);
			}, 200);
		}
### Answer
This will print '100' hundred times in the console after an initial delay of 100 ms.

## 2. What is the result of this code in the console

	(async function() {
		function waitForMe() {
			return new Promise(function(resolve, reject) {	
				setTimeout(function() {
					resolve("hello");
				}, 200);
			});
		}
		const result = await waitForMe();
		console.log(result);
	})();
### Answer
This will print 'hello' in the console after a delay of 200 ms;

## 3. Explain the difference

Explain the difference between those:
	var a;
	let b;
	const c;

### Answer 
A variable declare with 'var' outside a function in globally scoped. If declared within a function, the scope is limited to the function.

A variable declared with 'let' is block scoped, i.e., the variaale is available within he blocks (`{  }`) it is declared in. Also, these variables cannot be re-declared withing the same block.

A variable declared with const is same as let, but values cannot be re-assigned to it.

## 4 What is the result of this code in the console

We got a module "test.js":

	var arr = [];
	module.exports = arr;
We got a module using it:

	var test = require("./test");
	test.push("hello");
	console.log(JSON.stringify(test));

We got another module using it later:

	var test = require("./test");
	test.push("another");
	console.log(JSON.stringify(test));

### Answer 
This will print the below in console
["hello"]
["hello","another"]
