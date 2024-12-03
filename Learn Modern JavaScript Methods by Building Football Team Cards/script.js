
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
/* Step 23
The next step is to create a new array that will be responsible for adding the player card information to the page.

Inside the setPlayerCards function, start by adding the map method to arr that will take in an empty callback function. Then, use the addition assignment += operator to assign the new array to playerCards.innerHTML.

Remember that the innerHTML property gets, or in this case, sets the HTML markup for the playerCards element.*/

const setPlayerCards = (arr = players) => {playerCards.innerHTML += arr.map(() => {})};