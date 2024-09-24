const calorieCounter = document.getElementById("calorie-counter");



const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const  output = document.getElementById("output");
let isError = false;


function cleanInputString(str) {
  
  console.log("original string: ", str);
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}
/* Step 26
To see the results from the cleanInputString function, you will need to add a console.log() statement. Inside that console statement, call the cleanInputString function with the string value of "+-99" as an argument.

Open up the console and you should see the original string followed by the cleaned string value with the +- removed. */
console.log(cleanInputString("+-99"));