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
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store.",
  },

  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."
  },
];



// initialize buttons


button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;



function update(location) {
button1.innerText = location["button text"][0];
button2.innerText = location["button text"][1];
button3.innerText = location["button text"][2];
button1.onclick = location["button functions"][0];
button2.onclick = location["button functions"][1];
button3.onclick = location["button functions"][2];
text.innerText = location.text;
}


function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function fightDragon() {
  console.log("Fighting dragon.");
}

/*Step 76
Now that you are updating the gold and health variables, you need to display those new values on the game screen. You have retrieved the healthText and goldText elements in a prior step.

After your assignment lines, assign the innerText property of goldText to be the variable gold. Use the same pattern to update healthText with the health variable.

You can test this by clicking your "Go to store" button, followed by your "Buy Health" button.

Note: Your answer should only be two lines of code. */

function buyHealth() {
  /* gold = gold - 10;
  health = health + 10; */
  gold -= 10;
  health += 10;
  healthText.innerText = health;
  goldText.innerText = gold;
}

function buyWeapon() {

}


function fightSlime() {

}

function fightBeast() {

}
