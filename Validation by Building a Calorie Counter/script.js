const calorieCounter = document.getElementById("calorie-counter");



const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const  output = document.getElementById("output");
let isError = false;


function cleanInputString(str) {
  
  /* console.log("original string: ", str); */
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}
/* Step 37
When you open the console, you should see the result of null. The match method returns null when no match is found. In this case, the isInvalidInput function should return null when the input is a valid number without any scientific notation.

null in JavaScript is a special primitive that represents the intentional absence of a value. In a boolean context, null is considered falsy which evaluates to false in a conditional statement.

Now that you have finished testing your isInvalidInput function, you can remove the console.log statement.*/

function isInvalidInput(str){
  const regex = /\d+e\d+/i;
  return str.match(regex);
};