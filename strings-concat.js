/////////////// SECTION 2 LECTURE 10 - STRINGS & CONCATENATION ///////////////

const firstName = "William";
const lastName = 'Johnson';
const age = 26;
const str = 'Hello there my name is Tyler';
const tags = 'web design, web development, cheese nachos';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Tyler ';
val += 'Griffiths';

val = "Hello, my name is " + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// Change case

val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// chartAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// Slice
val = firstName.slice(0,4);
val = firstName.slice(-3);

// Split()
val = str.split(' '); 
val = tags.split(',');

// replace()
val = str.replace('Tyler', 'Alex');

// includes()
val = str.includes('foo');

console.log(val);