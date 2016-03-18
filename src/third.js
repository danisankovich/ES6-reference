/*jshint esnext: true*/
'use strict';

//ES6 Symbols
//the new primitive type.
//it is a unique and immutable value.
// var s = Symbol();
//they don't have a literal form, so you have to make
//them this way.
//it takes an optional string parameter that represents
//the description of the symbol
//a description of a symbol can be used for debugging, but not to access the symbol itself.
// console.log(s)
// console.log(s)

// let s1 = Window.Symbol('My Symbol')
// let s2 = Window.Symbol('My Symbol')
// console.log(s1 === s2) //false
// var s = Symbol()
// console.log(typeof s) //symbol

//With ES6, strings and now symbols can be used as property keys
// let obj = null;
// let s1 = null;
// (function() {
//   let s2 = Symbol()
//   s1 = s2;
//   obj = {[s2]: "mySymbol"}
//   console.log(obj[s2]);//mySymbol
//   console.log(obj[s2] == obj[s1]);//true
// })();
// console.log("1", obj[s1]); //mySymbol

// Object.getOwnPropertySymbols() method
//cannot Object.getOwnPropertyNames() from es5 cannot
//fetch symbol properties.
//in ES6 we have Object.getOwnPropertySymbols()
// let a = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// }
// console.log(Object.getOwnPropertyNames(a)) //[ 'a', 'b', 'c', 'd' ]
// console.log(Object.getOwnPropertySymbols(a)) //[]

// let obj = {a:12};
// let s1 = Symbol('mySymbol');
// let s2 = Symbol('mySymbol');
// obj[s2] = ""
// Object.defineProperty(obj, s1, {enumerable: false});
// console.log(Object.getOwnPropertySymbols(obj)) //[ Symbol(mySymbol), Symbol(mySymbol) ]


//ITERATION PROTOCOLS
//a set of rules that an object needs to follow for implementing the interface, which wehn used, a loop or a constrcut
//can iterate over a group of values of the object.

//ES6 introduces two new iteration protocols known as the iterable protocol and the iterator protocol

//ITERATOR PROTOCOLS
//any object that implements the iterator protocol is known as an iterator. According to the iterator protocol, an object needs to
//provide a next() method that returns the next item in the sequence of a group of items.

// let obj = {
//   array: [1, 2, 3, 4, 5],
//   nextIndex: 0,
//   next: function() {
//     return this.nextIndex < this.array.length ? {
//       value: this.array[this.nextIndex++], done: false
//     }: {done: true};
//   }
// };
// console.log(obj.next().value) //1
// console.log(obj.next().value) //2
// console.log(obj.next().value)//3
// console.log(obj.next().value)//4
// console.log(obj.next().value)//5
// console.log(obj.next().done)//true

// console.log(obj.next().value) //1
// console.log(obj.next().value) //2
// console.log(obj.next().value)//3
// console.log(obj.next().value)//4
// console.log(obj.next().done)//false //there are still more to go.
// console.log(obj.next().value)//undefined //cause done

//done property returns true if the ieterator has finished iterating over the collection of values.
//otherwise it returns false.
//teh value property: value of the current item in the collection. it is ommited when done === true

//ITERABLE PROTOCOL
//Any object that implements teh ieterable protocol is known as an iterable.
//an object needs to provide the @@iterator method --> it must have the Symbol.iterator symbol as a property key.
//The @@iterator method must return an iterator object

let obj = {
  array: [1, 2, 3, 4, 5],
  nextIndex: 0,
  [Symbol.iterator] : function() {
    return {
      array: this.array,
      nextIndex: this.nextIndex,
      next: function() {
        return this.nextIndex< this.array.length? {
          value: this.array[this.nextIndex++],
          done: false } : {done: true};
      }
    };
  }
};
let iterable = obj[Symbol.iterator]()
console.log(iterable.next().value);//1
console.log(iterable.next().value);//2
console.log(iterable.next().value);//3
console.log(iterable.next().value);//4
console.log(iterable.next().value);//5
console.log(iterable.next().done);//true
