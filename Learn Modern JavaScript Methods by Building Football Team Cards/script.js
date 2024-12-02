
const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");

/* Step 10
Inside that players array, create a new object with the following properties:

Example Code
name: "Sergio Almirón"
position: "forward"
number: 1
isCaptain: false
nickname: null
NOTE: The numbers for the team are organized alphabetically by last name. This differs from conventional numbering where the numbers correspond with what is on the player's jerseys.*/

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
  ],
};
