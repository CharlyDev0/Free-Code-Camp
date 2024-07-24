/* Step 20 */
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);
rows[1]=10;
console.log(rows);

/* Step 21 */
rows[2] = 10;
console.log(rows);

/* Step 22 */
rows[rows.length - 1] = 10;

/* Step 23 */
let cities = ["London", "New York", "Mumbai"];
console.log(cities);
cities[cities.length - 1] = "Mexico City";
console.log(cities);

/* Step 26 */

let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
console.log(rows);

/* Step 33 */

let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
let popped = rows.pop();
console.log(popped);

/* Step Loop For */
// for ("iterator"; "condition"; "iteration") {}

/* Step 34 */
for (let i = 0; "condition"; "iteration") {}

/* Step 35 */
for (let i = 0; i < count; "iteration") {}

for (let i = 0; i < count; i++) {  
}

/* Step 36 */
for (let i = 0; i < count; i = i + 1) {}

/* Learn Introductory JavaScript by Building a Pyramid Generator
script.jsEditor */

// https://sss.instasaverpro.com

/* Step 37 */
for (let i = 0; i < count; i = i + 1) {
console.log(i);
}

/* Step 38 */
for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

/* Step 41 */
for (const row of rows) {
}

/* Step 42 */
for (const row of rows) {
  result = result + rows;
}

/* Step 43 */
for (const row of rows) {
  result = result + "\n" + row;
}

/* Step 44 */
for (let i = 0; i < count; i = i + 1) {
  rows.push(character);
}

/* Step 45 */
for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i));
}

/* Step 47 */
function padRow() {}

/* Step 51 */
function padRow() {
  return "Hello!";
}

/* Step 55 */
function addTwoNumbers(a, b) {
  return a + b;
}

let sum = addTwoNumbers(5, 10);
console.log(sum);

/* Step 57 */

function padRow(name) {
  return character + name;
}

/* Step 58 */


function padRow(name) {
  return character + name;
  const test = "Testing";
}
console.log(test);



// Function definition
function padRow() {
  const test = "Testing";
  return test;
}

/* Step 60 */

function padRow(name) {
  const test = "Testing";
  console.log("This works!");
  return test;
  console.log("This works!");
} 

/* Step 64 */

function padRow(rowNumber, rowCount) {}

/* Step 65 */

function padRow(rowNumber, rowCount) {
  return character.repeat(rowNumber);
}

/* Step 78 */
if (condition) {
  
}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}

/* const numbers = [1, 2, 3];
const shifted = numbers.shift();
console.log(shifted);
const unshifted = numbers.unshift(5);
console.log(unshifted);
console.log(numbers);*/


// ultimo ejercicio
const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);