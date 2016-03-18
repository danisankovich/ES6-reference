/*jshint esnext: true*/
'use strict';

//ES6 Symbols
//the new primitive type.
//it is a unique and immutable value.

var s = Symbol();
//they don't have a literal form, so you have to make
//them this way.
//it takes an optional string parameter that represents
//the description of the symbol
//a description of a symbol can be used for debugging, but not to access the symbol itself.
console.log(s);
console.log(s);