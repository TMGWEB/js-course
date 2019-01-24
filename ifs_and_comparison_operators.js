/////////////// SECTION 2 LECTURE 15 - IF STATEMENTS & COMPARISON OPERATORS ///////////////

const id = 100;

// EQUAL TO (DOESN'T DISTINGUISH BETWEEN NUMBERS AND STRINGS)
if(id == 100){
  console.log('CORRECT');
} else { 
  console.log('INCORRECT');
}

// //  NOT EQUAL TO
if(id != 101){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// EQUAL TO DATA AND TYPE
if(id === 100){
  console.log('CORRECT');
} else { 
  console.log('INCORRECT');
}

// NOT EQUAL TO DATA AND TYPE
if(id !== 100){
  console.log('CORRECT');
} else { 
  console.log('INCORRECT');
}


// TEST IF UNDEFINED
if(typeof id !== 'undefined'){
  console.log(`The id is ${id}`);
} else {
  console.log('NO ID');
}

// GREATER OR LESS THAN
if(id <= 100){
  console.log('CORRECT');
} else { 
  console.log('INCORRECT');
}

//  IF ELSE

const color = 'yellow';

if (color === 'red') {
  console.log('Color is red');
} else if (color === 'blue'){
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}

// LOGICAL OPERATORS

const name = 'Steve';
const age = 2;

// AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in the race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if(id === 100)
  console.log('CORRECT');
else 
  console.log('CORRECT');