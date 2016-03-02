'use strict';
// let a = 0;
// let a = 1; //this will throw a typeerror
//
// function myFunction() {
//   let b = 2;
//   let b = 3 //typeerror
//
//   if(true) {
//     let c = 4;
//     let c = 5 //typeerror
//   }
// }
// myFunction()

// const g = 2.80991
// // g = 5 //error
// console.log(g)
//
// const a = {
//   name: 'Mike'
// }
// console.log(a.name)
// a.name = "John" //this works.
// console.log(a.name)
// a = {} //this doesn't
// console.log(a)

//const holds the object, but the properties that object holds are not constant, so you can
// change the properties, but not the object

//////////////////////
//we also get some default values in function parameters
// function myFunction(x = 1, y = 2, z = 3) {
//   console.log( x, y, z); // Output "6 7 3"
// }
// myFunction(6,7);


///////////////////
//////////////////
//////////////////
//////////////////

//spread operator (...) is used for iterable objects (like arrays). spreads
//it into the arguments of a function


// function myFunction(a, b) {
//   return a + b;
// }
// var data = [1, 4];
// var result = myFunction.apply(null, data); //apply takes the values of the array, extracts them, and applies them to the function
// console.log(result)

//doing it with es6 using spread operator
// function myFunction(a, b) {
//   return a + b
// }
// let data = [1, 4];
// let result = myFunction(...data); //...is the spread operator
// console.log(result)
//
// //making array values a part of another array
// //it can be used to make the array values a part of another array.
// let array1=[2, 3, 4];
// let array2=[1, ...array1, 5, 6, 7];
// console.log(array2) //outputs [1, 2, 3, 4, 5, 6, 7]

//pushing the values of an array into another array.
// let array3 = [2, 3, 4];
// let array4 = [1];
// Array.prototype.push.apply(array4, array3);
// console.log(array4)
//with es6 and the spread operator though
// let array3 = [2, 3, 4];
// let array4 = [1];
// array4.push(...array3)//pushes each of array3 into array4
// console.log(array4)

//an it works with multiple arrays on a single line of expression

// let array1 = [1]
// let array2 = [2]
// let array3 = [...array1, ...array2, ...[3, 4]];
// let array4 = [5]
// function myFunction(a, b, c, d, e) {
//   return a+b+c+d+e
// }
// let result = myFunction(...array3, ...array4) //iterate over array3, iterate over array4 for parameters
// console.log(result)

///////////////////
//////////////////
//////////////////
//////////////////

//the REST PARAMETER
// it is also represented by ... : array type which contains the rest of the parameters of a function
// when the number of arguments exceeds the number of named parameters
// used to capture a variable number of the function arguments from within a function

//the old way
// function myFunction(a, b) {
//   var args = Array.prototype.slice.call(arguments, myFunction.length);
//   console.log(args)
// }
// myFunction(1, 2, 3, 4, 5)

// the ES6 way
// function myFunction(a, b, ...args) {
//   console.log(args) //args is whatever comes after the ..., so if argjjj, it would be for ...argjjj
// }
// myFunction(1, 2,3, 4, 5)
//this makes it easier because argugments is not an array, but this is an array object

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//The DESTRUCTURING ASSIGNMENT

//it is an expression that allows you to assign the values or properties of an iterable or objcet to the variables using
//a syntax that looks similar to the array or object construction literals respectively

//makes it easy to extract data from iterables.
//Two kinds. the array and object destructuring assignment.

// let myArray = [1, 2, 3]
// let a, b, c;
// [a, b, c] = myArray //destructuring syntax
// console.log(a, b, c)
// let [e, , f] = myArray //this will ignore the second argument in the array
// console.log(e, f)
//
// //using the rest symbol
// let [g, ...h] = [1, 2, 3, 4, 5 ,6];
// console.log(g) // 1
// console.log(Array.isArray(h)) //true (array of all the rest)
// console.log(h) // the values of the rest stored as an array

//default values
// let [a, b, c = 3] = [1, 2];
// console.log(c)

//nested array destructuring
//can extract values from a multidimensional array and assign them to variables
// let [a, b, [c, d]] = [1, 2, [3, 4]]
// console.log(a, b, c, d)
// //a = 1, b = 2, c = 3, d = 4

//use destructuring assignment as a parameter
// function myFunction([a, b, c = 3] = [1, 2, 3]) {
//   console.log(a, b, c)
// }
// myFunction()

//object destructuring
//used to extract property values

//old way
// var object = {
//   'name' : 'John',
//   'age' : 23,
// }
// var name = object.name
// var age = object.age

// let object = {
//   "name" : "John",
//   "age" : 23
// };
// let name, age;
// ({name, age} = object)
// console.log(name, age) //variable names must be the same as the property names

//

// let object = {
//   "name" : "John",
//   "age" : 23
// };
// // let x, y;
// // ({name: x, age: y} = object);
// // console.log(x, y)
// //
// //or
// //
// let {name: x, age: y} = {
//   "name": "John",
//   "age" : 23
// };
// // console.log(name, age, x, y) //errors
// console.log(x, y)

//default values

// let {a, b, c = 3} = {a: "1", b: "2"};
// console.log(a, b, c)

//Destructuring computed property names
// let {["first"+"Name"]: x} = {
//   firstName: "Eden"
// };
// console.log(x)

//Destructuring nested objects
//can extract values from nested objects (objects in objects).
// var {name, otherInfo: {age}} =
// {name: "Eden", otherInfo: {age: 23}};
// console.log(name, age)


//Using the object destructuring assignment as a parameter
// function myFunction({name = 'Eden', age = 23, profession = "Designer"} = {}) {
//   console.log(name, age, profession);
// }
// myFunction({name: "John", age: 23});
//we passed an empty object as a default parameter value, which will be used as a default object if undefined is passed as an argument

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

//Arrow Functions (arrow functions are the anonymous functions)

// let circleArea = (pi, r) => {
//   let area = pi * r * r;
//   return area;
// };
// let result = circleArea(3.14, 3);
// console.log(result);

//if an arrow function contains just one statement, then you don't have to use
//the {} brackets to wrap the code.

// let circleArea = (pi, r) => pi * r * r;
// let result = circleArea(3.14, 3);
// console.log(result)

//value of 'this' in an arrow function
//in the arrow functions, the value of this keyword is the same as the value of this
//keyword of the enclosing scope(the global or function scope)

//traditional "this"
// var object = {
//   f1: function() {
//     console.log(this);
//     var f2 = function() {
//       console.log(this);
//     }
//     f2();
//     setTimeout(f2, 2000);
//   }
// };
// object.f1();
// //output = Object Window Window

//ES6 arrow functions this
// var object = {
//   f1: () => {
//     console.log(this);
//     var f2 = () => {
//       console.log(this);
//     }
//     f2();
//     setTimeout(f2, 2000)
//   }
// }
// object.f1();
//outpute = Window Window Window
//this inside the f1 functions copies the this value of the global scope, as f1 lies in the global scope
//this inside f2 copies the this value of f1, as f2 lies in the f1 scope.

//Other differences between the arrow and traditional functions
//the arrow funcitons cannot be used as object constructors (new operator cannot be applied on them.)

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

//The Enhanced Object Literals

//Defining properties
