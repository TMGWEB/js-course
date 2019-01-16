/////////////// SECTION 2 LECTURE 14 - DATES & TIMES///////////////

let val;

const today = new Date();
let birthday = new Date('9-10-1981');
birthday = new Date('September 10 1981');
birthday = new Date('1/17/2019');

val = today.getMonth(); //Zero based, Jan = 0, Feb = 1, etc
val = today.getDate(); //Day of the month
val = today.getDay(); //Zero based, Represented as day of the week 0-6
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);