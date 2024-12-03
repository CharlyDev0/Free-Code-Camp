
const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");



const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  team: "Argentina",
  sport: "Football",
  year: 1986,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },
  players: [
    {
      name: "Sergio Almirón",
      position: "forward",
      number: 1,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      number: 2,
      isCaptain: false,
      nickname: null,
    },
  ],
};

const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;

worldCupYear.textContent = year;
headCoach.textContent = coachName;
/* Step 22
Function parameters can be initialized with default values. If a function is called without an argument, then the default value will be used:

Example Code
const greeting = (name = "Anonymous") => {
  return "Hello " + name;
} 

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
Add a new parameter to your setPlayerCards function called arr and assign it a default value of players. Remember that you destructured the players variable from the myFavoriteFootballTeam object on line 175.*/

const setPlayerCards = (arr = players) => {};