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

  let remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
  /* Step 79
You need to know if the user is in a caloric surplus or deficit. A caloric surplus is when you consume more calories than you burn, and a caloric deficit is when you burn more calories than you consume. Burning as many calories as you consume is called maintenance, and can be thought of as a surplus or deficit of 0, depending on your goals.

Declare a surplusOrDeficit variable. Then use a ternary operator to set surplusOrDeficit to the string "Surplus" or "Deficit" depending on whether remainingCalories is less than 0. If it is less than 0, then surplusOrDeficit should be "Surplus". Otherwise, it should be "Deficit".
 */
  const surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";
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

