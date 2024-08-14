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

/* Step 62
Now it is time to use your update function. Pass in your locations array into the update function call.

You pass arguments by including them within the parentheses of the function call. For example, calling myFunction with an arg argument would look like:

Código de ejemplo
myFunction(arg)
Pass your locations array into the update call. */

function update(location) {button1.innerText = "Go to store";
button2.innerText = "Go to cave";
button3.innerText = "Fight dragon";
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
text.innerText =
  'You are in the town square. You see a sign that says "Store".';}

function goTown() {
  update(locations);
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

