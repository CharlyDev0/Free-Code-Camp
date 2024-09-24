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
/* Step 35
Now it is time to test your isInvalidInput function. For this test, you want to check if the function can detect scientific notation like 1e3 or 10e2. While this is a valid way to represent numbers, it is not a valid input for your calorie counter project.

Below your isInvalidInput function, add a console statement. Inside that console statement, call the isInvalidInput function with an argument of "1e3".

Open up the console to see the result. In the next step, you will learn more about what that result means.*/

function isInvalidInput(str){
  const regex = /\d+e\d+/i;
  return str.match(regex);
};
console.log(isInvalidInput("1e3"));