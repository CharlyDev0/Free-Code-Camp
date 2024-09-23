const calorieCounter = document.getElementById("calorie-counter");

/* Step 20
The current pattern will match the exact text "hello", which is not the desired behavior. Instead, you want to search for +, -, or spaces. Replace the pattern in your regex variable with \+- to match plus and minus characters.

Note that you need to use the backslash \ character to escape the + symbol because it has a special meaning in regular expressions. */

const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const  output = document.getElementById("output");
let isError = false;


function cleanInputString(str) {}
const regex = /\+-\s/;