
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
/* Step 12
The rest of the data for the myFavoriteFootballTeam.players array has been filled out for you.

The next step is to ensure that you can't modify this object by adding or removing any properties. We are going to use a method called Object.freeze(obj) which will freeze this object and prevent any changes being made to it.

Use the Object.freeze() method to freeze the myFavoriteFootballTeam object.
*/
Object.freeze(myFavoriteFootballTeam);
