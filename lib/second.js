'use strict';

//binary notation
//in es6 you can prefix the numeric constants using the 0b token to make Javascript interpret binary

// let a = 0b00001111;
// let b = 15;
// console.log(a, b) // 15, 15
// console.log(a === b) //true

//the octal notation (base 8)
//in es5, start with a 0
// var a = 017
// var b = 15
// console.log(a, b)
// console.log(a === b)

//in es6, start with 0o
// var a = 0o17
// var b = 15
// console.log(a, b)
// console.log(a === b)

//The Number.isInteger(number) Method
//in ES6, there is a new method in Number object called isInteger(),
//which takes a number and returns true or false.

// let a = 17.0;
// let b = 1.2;
// console.log(Number.isInteger(a)) //true
// console.log(Number.isInteger(b)) //false

//The Number.isNaN(value) method : is it NaN (a string will be false)
// let a = "NaN"
// let b = NaN
// let c = "hello"
// let d = 12
// console.log(Number.isNaN(a)) //false
// console.log(Number.isNaN(b)) //true
// console.log(Number.isNaN(c)) //false
// console.log(Number.isNaN(d)) //false
// // es5 isNaN tests if something is or is not a number
// console.log(isNaN(a)) //true
// console.log(isNaN(b)) //true
// console.log(isNaN(c)) //true
// console.log(isNaN(d)) //false

//The Number.isFinite(number) method

console.log(isFinite(10)); //true
console.log(isFinite(NaN)); //false
console.log(isFinite(null)); //true
console.log(isFinite([])); //true

console.log(Number.isFinite(10)); //true
console.log(Number.isFinite(NaN)); //false
console.log(Number.isFinite(null)); //false
console.log(Number.isFinite([])); //false