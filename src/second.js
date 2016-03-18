/*jshint esnext: true*/
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

//The Number.isFinite(number) method....checks if somethins is finite
// console.log(isFinite(10)) //true
// console.log(isFinite(NaN)) //false
// console.log(isFinite(null)) //true
// console.log(isFinite([])) //true
//
// console.log(Number.isFinite(10)) //true
// console.log(Number.isFinite(NaN)) //false
// console.log(Number.isFinite(null)) //false
// console.log(Number.isFinite([])) //false

//the Number.isSafeInteger(number) method
//safe integers are those numbers that are not needed to
//be rounded to some other integer to fit the IEEE 754 representation.


// ////////////////////////////
// ////////////////////////////
// ////////////////////////////
// ////////////////////////////
// ////////////////////////////

//Doing Math

// //Trigonometry operations
// console.log(Math.sinh(0))
// console.log(Math.cosh(0))
// console.log("\u{1F691}");

// codePointAt(index) method
//returns a non-negative integers that is the code point of the character at the given index
// console.log('\uD83D\uDE91'.codePointAt(1));
// console.log('\u{1F691}'.codePointAt(1));
// console.log("hello".codePointAt(2));
// // fromCodePoint() takes a sequence of code points and returns a string
// console.log(String.fromCodePoint(0x61, 0x62, 0x63));
// console.log('\au0061\u0062 ' == String.fromCodePoint(0x61, 0x62));

//repeat(count) method
//string method: constructs and returns a new string, which contains
//the specified number of copies on which it was called.
//concatenated together
// console.log('a'.repeat(6));

//includes(string, index) method
//used to find whether one string may be found in another string. returns true or false

// var str = 'Hi, I am a JS Developer';
// console.log(str.includes('JS')); //true
// console.log(str.includes('S Devel')); //true

//the second optional parameter. position at string from which to begin searching
// console.log(str.includes('JS', 13)) //false
// console.log(str.includes('JS', 5)) //true

//startsWith(string, index) method
// determines whether a string begins with the characters of another string. true/false
// console.log(str.startsWith('Hi, I am')) //true
// console.log(str.startsWith('I am a')) //false

// endsWith(string, index) find whether a string ends with the characters of another string
//also takes an optional index to specify what you consider the "end" of the string
// console.log(str.endsWith("JS Developer")); //true
// console.log(str.endsWith("JS", 13)); //true. 13 is the cut off point

////////////////////////////////////
////////////////////////////////////
//////////////Normalization:////////
////////////////////////////////////
////////////////////////////////////

//Normalization: process of searching and standardizing code points without changing the meaning of a string

//unicode string normalization
// console.log('\u00E9') //output é
// console.log('e\u0301') //output é
// var a = "\u00E9";
// var b = "e\u0301";
// console.log(a == b);//false
// console.log(b); //é
// console.log(a); //é
// console.log(a === b); //false
// console.log(a.length) //1
// console.log(b.length)//2
// var c = a.normalize();
// var d = b.normalize();
// console.log(c==d);//true
// console.log(c.length); //1
// console.log(d.length);//1

// let str1 = `hello!!!` //template string
// let str2 = "hello!!!"
// console.log(str1===str2)//true
// console.log(`${str1} how are you doing?`)

//Multiline Strings
// console.log(`1
// 2
// 3`);

//raw strings
//a normal string in which escaped characters aren't interpreted
// let s = String.raw `xy\n${ 1 + 1 }z`;
// console.log(s) //xy\n2z
//\n is not interpreted as new line character.length of x would be 6.

////////////////////////////////////
////////////////////////////////////
//////////////Arrays:///////////////
////////////////////////////////////
////////////////////////////////////

//ES6 adds new properties to the global Array object and its instances to make working with arrays easier.

//Array.from(iterable, mapFunc, this) method
//creates a new array instance from an iterable object
//second option is a callback. third is option.

// let strtwo = '0123';
// let obj = {number: 1};
// let arr = Array.from(strtwo, function(value) {
//   return parseInt(value) + this.number; //iterate over strtwo, add to each number the value of obj.number
// }, obj);
// console.log(arr); // [1, 2, 3, 4]

//Array.of(values...) method
// //alternative to the Array constructor
// let arr1 = new Array(2); //old way.
// let arr2 = Array.of(2); //new way
// console.log(arr1[0], arr1.length); //undefined 2
// console.log(arr1) //[ , ]because a number as passed through new Array, it created an array of length two, but with no values in those spaces.
// console.log(arr2[0], arr2.length); //2 1
// //use Array.of() when you are constructing new arrays dynamically, esp when you don't know the type of values and the number of elements

//fill(value, startIndex, endIndex) method
// fills all the elements of the array from the startIndex to and endIndex(not including endIndex) with a given value
// startIndex and endIndex are optional. if not provided, whole array is filled. end index would be defaulted to length of array -1
//if startIndex is negative then it's treated as length of array plus startIndex. if endIndex is negative, it is treated as length of array plus endIndex
// let arr1 = [1, 2, 3, 4];
// let arr2 = [1, 2, 3, 4];
// let arr3 = [1, 2, 3, 4];
// let arr4 = [1, 2, 3, 4];
// let arr5 = [1, 2, 3, 4];
// arr1.fill(5);
// arr2.fill(5, 1, 2);
// arr3.fill(5, 1, 3);
// arr4.fill(5, -3, 2);//start here === 1
// arr5.fill(5, 0, -2); //end here === 2
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// console.log(arr4)
// console.log(arr5)



//find(testingFunc, this) method
//the find() method of an array returns an array element, if it satisfies the provided testing function.
//otherwise returns undefined

//first argument: testing function.
//second argument: value of this in testing function optional
//testing function has three parameters.
//--first: array element being process
//--second: index of the current element being processed
//--third: array on which find() is called upon

//testing function needs to return true to satisfy a value. the find method returns the first element which satisfies the providing test function.
// var x = 12;
// var arr = [11, 12, 13];
// var result = arr.find(function(value, index, array) {
//   if(value == this) {
//     return true;
//   }
// }, 12);
// console.log(result); // 12 passed in value == 12. find 12.
//
// var y = 16;
// var arr = [11, 12, 13];
// var result = arr.find(function(value, index, array) {
//   if(value == this) {
//     return true;
//   }
// }, y);
// console.log(result); // undefined, cause y not found


//findIndex(testingFunc, this) method
//returns the index of the satisfied array element instead of the element itself
// let x = 12;
// let arr = [11, 12, 13];
// let result = arr.findIndex(function(value, index, array) {
//   if(value == this) {
//     return true;
//   }
// }, x)
// console.log(result) //1
// let y = 16;
// // let arr = [11, 12, 13];
// let result2 = arr.findIndex(function(value, index, array) {
//   if(value == this) {
//     return true;
//   }
// }, y)
// console.log(result2) //-1



//copyWithin(targetIndex, startIndex, endIndex) function
//method of an array, used to copy the sequence of values to a different position in the array
//first argument: target index to copy to.
//second: start position of copy from.
//third: where to end copy from (optional)
//--if not provided, defaults to length -1.
//if start index is negative, it's calculated as length + start index.
//if end index is negative, it's calculated as length + end index.

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 2, 3, 4, 5];
// let arr3 = [1, 2, 3, 4, 5];
// let arr4 = [1, 2, 3, 4, 5];
// arr1.copyWithin(1, 2, 4); //put the item at position 2-4 at index[1] [1, 3, 4, 4, 5]
// arr2.copyWithin(0, 1); //[2, 3, 4, 5, 5] //copy to the index[0], everything from [1 - end]
// arr3.copyWithin(1, -2); // [1, 4, 5, 4, 5]
// arr4.copyWithin(1, -2, -1);// [1, 4, 3, 4, 5]
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// console.log(arr4)


//the entries(), keys(), and values() methods
//entries() array method returns an iterable object that contains key/value pairs for each index of the array.
//keys() returns iterable object that contains keys for each of the indexes in the array
//values() returns and iterable object that contains values of the array
//returned object is not an array.
// let arr = ['a', 'b', 'c'];
// let entries = arr.entries();
// let keys = arr.keys();
// let values = arr.values();
// console.log(...entries); //[ 0, 'a' ] [ 1, 'b' ] [ 2, 'c' ]
// console.log(entries) //{}
// console.log(...keys); // 0, 1, 2
// console.log(...values)// a, b, c


////////////////////////////////////
////////////////////////////////////
//////////////Collections://////////
////////////////////////////////////
////////////////////////////////////
//a collection is any object that stores multiple elements as a sing unit.
//array is the only collectin unit in ES5. ES6 introduced
//array buffers, typed arrays, sets, and maps, which are built in collection objects.

//Array buffers
//elements of arrays can be of any type. arrays can grow dynamically. but they are slow in terms of execution time. occupy more memory.
//array buffers help tackle their slowness.
//array buffer is a collection of 8-bit memory blocks. every block is an array buffer element.
//the size of an array buffer needs to be decided while creating.
//it therefore cannot grow dynamically.
//Array buffers can only store numbers.
//all blocks initialized to number 0 on creation of an array buffer.
//array buffer object created using ArrayBuffer constructor

// let buffer = new ArrayBuffer(80);
//reading from and writing values into an array buffer objects
//can be done using a DateView object.
//writing/reading to an array buffer object.
// let buffer = new ArrayBuffer(80);
// let view = new DataView(buffer);
// view.setInt32(8, 22, false); //using 32 bits to store provided number
// //all DataView methods take three arguments
// //--first: represents the offset: the byte we want to write the number to.
// //--second: represents the number to be stored.
// //--third: Boolean type, represents the endian. false represents a big-endian
// var number = view.getInt32(8, false);
// console.log(number)
// console.log(view)

//Typed Arrays
//let us read and write to an array buffer object, just like with normal arrays.
//acts like a wrapper for an array buffer object. treats the data of the array buffer
//object as a sequence of n-bit numbers. the n value depends on how we createdteh typed array.

//creation, with rading and writing.
// var buffer = new ArrayBuffer(80);
// var typed_array = new Float64Array(buffer);
// typed_array[4] = 11;
// console.log(typed_array.length); //10
// console.log(typed_array[4]) //11
// console.log(typed_array) // Float64Array {
  // '0': 0,
  // '1': 0,
  // '2': 0,
  // '3': 0,
  // '4': 11,
  // '5': 0,
  // '6': 0,
  // '7': 0,
  // '8': 0,
  // '9': 0
// }
//they have all the methods used by normal Javascript objects


//Set
//a Set is a collection of unique values of any data type.values in a Set are arranged in insertion order. created using Set constructor.
//they are used when you want to maintain a collection of values and check if a value exists instead of retrieving a value
//a good alternative to an array if you only use the indexOf() method in your code to check if a value exists
// let set1 = new Set();
// let set2 = new Set("Hello!!!");
// //set 1 is an empty Set
// //set 2 is a set created using values of an iterable object (characters of a string which was not empty.)
// console.log(set1)
// console.log(set2) // Set {'H', 'e', 'l', 'o', '!'} --only unique values, so it only gives the first of each

// let set = new Set('Hello!!!');
// set.add(12);//inserts this to the end.
// console.log(set) //logs the object
// console.log(set.has("!")) //true
// console.log(set.size) //6 (length)
// set.delete(12); //removes that value
// set.delete('e') //removes that value
// // set.delete(12, 'e') //only removes the first value (12)
// console.log(...set); //logs the iterated values
// set.clear(); //clears the set
// console.log(set); //logs the now empty set

//WeakSet
//Differences between Set and WeakSet objects:
//Set: can store primitive types and object references. Weakset can only store object references.
//WeakSet object are not garbage collected.
//WeakSet object is not enumerable. You can't find its size. It also doesn't implement iterable protocol
//Otherwise it behaves the same way as a Set.

//created using the WeakSet constructor.
// let weakset = new WeakSet();
// (function() {
//   let a = {};
//   weakset.add(a);
// })();
// //'a' is garbage collected from weakset.
// console.log(weakset.size); //'undefined'
// // console.log(...weakset) //error
// weakset.clear() // no such function


//Map
//a collection of key/value pairs
//keys and values of a Map can be of any data type.
// the key / value pairs are arranged in insertion order.
// let map = new Map();
// let o = {n:1};
// map.set(o, "A"); //add
// map.set("2", 9);
// console.log(map) //Map { { n: 1 } => 'A', '2' => 9 }
// console.log(map.has("2")) //true
// console.log(map.get(o)); //'A'
// console.log(...map); // [{n:1}, 'A']['2', 9]
// map.delete('2');
// console.log(map) //Map { { n: 1 } => 'A' }
// map.clear()
// console.log(map) // Map {}

//create Map from iterable object
// let map_1 = new Map([[1, 2], [4, 5]]);
// console.log(map_1.size); // number of keys === 2
// console.log(map_1)

//WeakMap
//differences between Map and WeakMap
//Keys of a Map object can be primitive types or object refernces. WeakMap, only object references.
//One important feature of WeakMap object is that if there is no other refernce to an object that
//is referenced to an object that is referenced by a key, then the key is garbage colleted
//WeakMap object is not enumerable.

// let weakmap = new WeakMap();
// (function() {
//   let o = {n:1};
//   weakmap.set(o, "A");
// })();
// // 'o' key is garbage collected
// let s = {m: 1};
// weakmap.set(s, "B");
// console.log(weakmap.get(s)); //"B"
// // console.log(...weakmap);//error (no iterables)
// weakmap.delete(s);
// console.log(weakmap)// Map {}
// // weakmap.clear(); //no such function
// let weakmap_1 = new WeakMap([[{}, 2], [{}, 5]]);
// console.log(weakmap_1) //WeakMap {}
// console.log(weakmap_1.size) //undefined
