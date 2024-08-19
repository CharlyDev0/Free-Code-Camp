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
    text: "You enter the store.",
  },

  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "buttons functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters.",
  },
];
/* Step 71
Add a third object to the locations array. Give it the same properties as the other two objects.

Set name to cave. Set button text to an array with the strings "Fight slime", "Fight fanged beast", and "Go to town square". Set the "button functions" to an array with the variables fightSlime, fightBeast, and goTown. Set the text property to "You enter the cave. You see some monsters."

Paso 71 Agrega un tercer objeto a la matriz de ubicaciones. Asígnale las mismas propiedades que a los otros dos objetos. Establece el nombre en cueva. Establece el texto del botón en una matriz con las cadenas "Lucha contra el slime", "Lucha contra la bestia con colmillos" y "Ve a la plaza del pueblo". Establece las "funciones del botón" en una matriz con las variables fightSlime, fightBeast y goTown. Establece la propiedad de texto en "Entras en la cueva. Ves algunos monstruos".*/

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
  
}

function fightDragon() {
  
}



function buyHealth() {
  
}

function buyWeapon() {

}


function fightSlime() {

}

function fightBeast() {

}
