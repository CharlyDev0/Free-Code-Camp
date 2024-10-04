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
  /* Step 69
Your function needs to get the values from the entries the user has added.

Declare a breakfastNumberInputs variable, and give it the value of calling document.querySelectorAll() with the selector #breakfast input[type='number']. This will return any number inputs that are in the #breakfast element.
 */
function calculateCalories(e) {
  e.preventDefault();
  isError = false;
  let breakfastNumberInputs = document.querySelectorAll(
    "#breakfast input[type=number]"
  );
}
  function getCaloriesFromInputs (list){
    let calories = 0;
    for (const item of list) {
      const currVal = cleanInputString(item.value);
      let invalidInputMatch = isInvalidInput(currVal);
      if (invalidInputMatch) {
        alert(`Invalid Input: ${invalidInputMatch[0]}`);
        isError = true;
        return null;
      }
      calories += Number(currVal);
    }
    return calories;
  };
  addEntryButton.addEventListener("click", addEntry);

