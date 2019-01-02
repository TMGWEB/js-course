/////////////////////////// Log to console
/*
console.log('Hello World');
console.log('123');
console.log(true);
var greeting = "Hello";
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2});

console.error('This is some error');
console.clear();
console.warn('This is a warning');

console.time('Hello');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.timeEnd('Hello');
*/


//////////////// VAR
/* 
var name = "John Doe";
console.log(name);
name = "Steve Smith";
console.log(name);

// init var
var greeting;
console.log(greeting);
greeting = "Hello";
console.log(greeting);

// letters, numbers, _, $
// Cannot start with a number

// Multi word vars
var firstName = "John"; // Camel case
var first_name = "Sara"; // Underscore
var FirstName = 'Tom'; // Pascal cacse
var firstname;
*/

///////////////////LET
/* 
let name = "John Doe";
console.log(name);
name = "Steve Smith";
console.log(name);
*/

///////////////// CONST
/*
const name = "John Doe";
console.log(name);
Cannot reassign
name = "Steve Smith";
Have to assign a value
const greeting;

const person = {
  name: 'John',
  age: 30
}

person.name = 'Sara';
person.age = 32;

// console.log(person);

const numbers =[1,2,3,4,5];
numbers.push(6);

console.log(numbers);
*/

///////////////////// Data Types
/*
PRIMITIVE

// Strings
const name = 'John Doe';
// Number
const age = 45;
// Boolean
const hasKids = true;
//  Null 
const car = null;
//  Undefined
let test;
//  Symbol
const sym = Symbol();


// REFERENCE
// Array
const hobbies = ['movies', 'music'];
// Object literal
const address = {
  city: 'Orlando',
  state: 'FL'
}
// Date
const today = new Date();
console.log(today);
console.log( typeof today);
*/

/////////////// SECTION 2 LECTURE 8 ///////////////

// let val;

// Number to string
// val = String(555);
// val = String(4+4);

// Boolean to string
// val = String(true);

// Date to string
// val = String(new Date());

// Array to string
// val = String([1,2,3,4]);

// toString()
// val = (5).toString();
// val = (true).toString();

// String to number
// val = Number('5');

// Bool to number
// val = Number(true);
// val = Number(false);

// Doesn't work
// val = Number(null);
// val = Number('hello');
// val = Number([1,2,3]);

// val = parseInt('100'); // Does not accept decimals
// val = parseFloat('100.30');

// Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));


// const val1 = String(5);
// const val2 = 6;
// const sum = Number(val1 + val2);

// console.log(sum);
// console.log(typeof sum);

/////////////// SECTION 2 LECTURE 9 ///////////////

// const num1 = 100;
// const num2 = 50;
// let val;

// Simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// Math object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.5);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2,33,4,1,55,6,3);
// val = Math.max(2,33,4,1,55,6,3);
// val = Math.random();

// val = Math.floor(Math.random() * 20 + 1);

// console.log(val);

/////////////// SECTION 2 LECTURE 10 ///////////////

// const firstName = "William";
// const lastName = 'Johnson';
// const age = 26;
// const str = 'Hello there my name is Tyler';
// const tags = 'web design, web development, cheese nachos';

// let val;

// val = firstName + lastName;

// Concatenation
// val = firstName + ' ' + lastName;

// Append
// val = 'Tyler ';
// val += 'Griffiths';

// val = "Hello, my name is " + firstName + ' and I am ' + age;

// Escaping
// val = 'That\'s awesome, I can\'t wait';

//  Length
// val = firstName.length;

// concat
// val = firstName.concat(' ', lastName);

// Change case

// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[0];

// indexOf()
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// chartAt()
// val = firstName.charAt('2');
// Get last char
// val = firstName.charAt(firstName.length - 1);

// substring()
// val = firstName.substring(0, 4);

// Slice
// val = firstName.slice(0,4);
// val = firstName.slice(-3);

// Split()
// val = str.split(' '); 
// val = tags.split(',');

// replace()
// val = str.replace('Tyler', 'Alex');

// includes()
// val = str.includes('foo');

// console.log(val);

/////////////// SECTION 2 LECTURE 11 ///////////////