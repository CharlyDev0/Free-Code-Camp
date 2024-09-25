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
/* Step 36
When you open the console, you should see this result:

Example Code
[ '1e3', index: 0, input: '1e3', groups: undefined ]
The match method returns an array with any matches found in the string.

Here is a complete breakdown of that information:
The match method returns an array with any matches found in the string.

Here is a complete breakdown of that information:

"1e3" is the matched value against the /\d+e\d+/i regex.
index: 0 is the index of the matched value in the string.
input: '1e3' is the original string that was matched.
groups: undefined are the matched groups, which are not used in this case. You will learn more about groups in a later project.
Now it is time to test for a valid input. Update your console statement to the following: console.log(isInvalidInput("10")).

Open up the console to see the result. You will learn more about what this result means in the next step.*/

function isInvalidInput(str){
  const regex = /\d+e\d+/i;
  return str.match(regex);
};
console.log(isInvalidInput("10"));