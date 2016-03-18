/*jshint esnext: true*/
'use strict';
///////////////////////////
///////////////////////////
//////////Object///////////
///////////////////////////
///////////////////////////
//ES6 standardizes the __proto__ property of an object
//and adds new properties to the gloval Object object

//__proto__ property
//the prototype is the object it inherits.

//ES5
// var x = {x: 12};
// var y = Object.create(x, {y: {value: 13}});
// console.log(y.x) //12
// console.log(y.y) //13
//
// //in ES6
// let a = {a: 12, __proto__: {b: 13}};
// console.log(a.a) //12
// console.log(a.b) //13

//Object.is(value1, value2) method
//determines whether two values are equal or not.
//is is similar to the === operator, but there are
//some special cases for the Object.is()

// console.log(Object.is(0, -0)); //false
// console.log(0 === -0); //true
// console.log(Object.is(NaN, 0/0)); //true
// console.log(NaN === 0/0); //false
// console.log(Object.is(NaN, NaN)); //true
// console.log(NaN === NaN); //false

//Object.setPrototypeOf(object, prototype) method
//this method is just another way to assign the prototype property of an object.
// let x={x:12};
// let y={y:13};
// Object.setPrototypeOf(y, x)
// console.log(y.x)
// console.log(y.y) //it inherits x:12 from x

//Object.assign(targetObj, sourceObjs...) method
//this method is used to copy the values of all enumerable
//own properties from one or more source objects to a target object
//this will return the target object

let x = {x:12};
let y = {y:13, __proto__: x};
let z = {z:14, get b() {
  return 2;
}, 1: {}};
Object.defineProperty(z, "z", {enumerable: false});
let m = {};
Object.assign(m, y, z);
console.log(m.y)// 13
console.log(m.z)//undefined
console.log(m.b)//2
console.log(m.x)//undefined
console.log(m.q == z.q)//true
