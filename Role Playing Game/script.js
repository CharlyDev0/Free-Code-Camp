let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");



const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");


const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: 'You are in the town square. You see a sign that says "Store".',
  },
  {
    name: "store",
    "button text": [
      "Buy 10 health (10 gold)",
      "Buy weapon (30 gold)",
      "Go to town square",
    ],
    "buttons functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  },
];
/* function button (goStore, goCave , fightDragon) */

function goStore() {
  console.log("Going to store.");
}
function goCave() {
  console.log("Going to cave.");
}
function fightDragon() {
  console.log("Fighting dragon.");
}

// initialize buttons


button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

/* Step 63
The locations array contains two locations: the "town square" and the "store". Currently you are passing that entire array into the update function.

Pass in only the first element of the locations array by adding [0] at the end of the variable. For example: myFunction(arg[0]);.

This is called bracket notation. Values in an array are accessed by index. Indices are numerical values and start at 0 - this is called zero-based indexing. arg[0] would be the first element in the arg array. */

function update(location) {button1.innerText = "Go to store";
button2.innerText = "Go to cave";
button3.innerText = "Fight dragon";
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
text.innerText =
  'You are in the town square. You see a sign that says "Store".';}

function goTown() {
  update(locations[0]);
}

function goStore() {
  
}

function goCave() {
  
}

function fightDragon() {
  
}



function buyHealth() {
  
}

function buyWeapon() {

}

