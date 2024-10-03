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


function addEntry() {
   const targetInputContainer = document.querySelector(
     `#${entryDropdown.value} .input-container`
   );
   const entryNumber =
     targetInputContainer.querySelectorAll('input[type="text"]').length +1;
     const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input type="number" min="0"  id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories" />`;
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
  }
  /* Step 63
Browsers have a built in alert() function, which you can use to display a pop-up message to the user. The message to display is passed as the argument to the alert() function.

Using a template literal, in your if block, call the alert() function to tell the user "Invalid Input: ", followed by the first value in the invalidInputMatch array.
 */
  function getCaloriesFromInputs (list){
    let calories = 0;
    for (const item of list) {
      const currVal = cleanInputString(item.value);
      let invalidInputMatch = isInvalidInput(currVal);
      if (invalidInputMatch) {
        alert(`Invalid Input: ${invalidInputMatch[0]}`);
      }
    }
  };
  addEntryButton.addEventListener("click", addEntry);

