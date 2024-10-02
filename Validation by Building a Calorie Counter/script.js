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

function isInvalidInput(str){
  const regex = /\d+e\d+/i;
  return str.match(regex);
};
/* Step 52
The addEventListener method takes two arguments. The first is the event to listen to. (Ex. 'click') The second is the callback function, or the function that runs when the event is triggered.

Call the .addEventListener() method on the addEntryButton. Pass in the string "click" for the first argument and the addEntry function for the second argument.

Note that you should not call addEntry, but pass the variable (or function reference) directly.
 */

function addEntry() {
   const targetInputContainer = document.querySelector(
     `#${entryDropdown.value} .input-container`
   );
   const entryNumber =
     targetInputContainer.querySelectorAll('input[type="text"]').length;
     const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input type="number" min="0"  id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories" />`;
  targetInputContainer.innerHTML += HTMLString;
  }
  addEntryButton.addEventListener("click", addEntry);

