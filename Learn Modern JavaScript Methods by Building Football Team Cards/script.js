
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
/* Step 30
Below your existing paragraph elements, add another paragraph element with the text Nickname: .*/

const setPlayerCards = (arr = players) => {playerCards.innerHTML += arr.map(
  ({ name, position, number, isCaptain, nickname }) => {
    `<div class="player-card"><h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
    <p>Position:${position}</p>
    <p>Number:${number}</p>   
    <p>Nickname: </p> 
  </div>`;    
  }
);};