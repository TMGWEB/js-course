/////////////// SECTION 2 LECTURE 8 - TYPE CONVERSION ///////////////

let val;

Number to string
val = String(555);
val = String(4+4);

Boolean to string
val = String(true);

Date to string
val = String(new Date());

Array to string
val = String([1,2,3,4]);

toString()
val = (5).toString();
val = (true).toString();

String to number
val = Number('5');

Bool to number
val = Number(true);
val = Number(false);

Doesn't work
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);

val = parseInt('100'); // Does not accept decimals
val = parseFloat('100.30');

Output
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(2));


const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);