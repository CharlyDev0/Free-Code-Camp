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