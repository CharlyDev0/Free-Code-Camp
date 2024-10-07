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
  /* Step 77
It is time to start preparing your calculations. Start by declaring a consumedCalories variable, and assign it the sum of breakfastCalories, lunchCalories, dinnerCalories, and snacksCalories (note that order matters for the tests). Be sure to do this after your if statement.
 */
function calculateCalories(e) {
  e.preventDefault();
  isError = false;
  const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
  const breakfastNumberInputs = document.querySelectorAll(
    "#breakfast input[type=number]"
  );
  const lunchNumberInputs = document.querySelectorAll(
    "#lunch input[type='number']"
  );

  const dinnerNumberInputs = document.querySelectorAll(
    "#dinner input[type='number']"
  );

  const snacksNumberInputs = document.querySelectorAll(
    "#snacks input[type='number']"
  );

  const exerciseNumberInputs = document.querySelectorAll(
    "#exercise input[type='number']"
  );
  let breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  let lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  let dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  let snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  let exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
  if (isError) return;
let consumedCalories =
  breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
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

