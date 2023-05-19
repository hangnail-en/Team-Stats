const team = {
  _players: [
    {firstName: 'Joe', lastName: 'Swanson', age: 45},
    {firstName: 'Bruce', lastName: 'Wayne', age: 33},
    {firstName: 'Peter', lastName: 'Griffin', age: 53}
  ],
  
  _games: [
    {opponent: 'Springfield', teamPoints: 12, opponentPoints: 2},
    {opponent: 'Man. U.', teamPoints: 40, opponentPoints: 5},
    {opponent: 'Argentina', teamPoints: 12, opponentPoints: 0}
  ],
  
  get players() {
    return (this._players);
  },
  
  get games() {
    return (this._games);
  },

  // Method with possibly better input validation ???
  addPlayer(newFirstName, newLastName, newAge) {
    if (typeof newFirstName === 'string' && typeof newLastName === 'string' && typeof newAge === 'number') {
          this._players.push({firstName: newFirstName, lastName: newLastName, age: newAge});
          console.log(this._players);
    } else {
      console.log('Name or point entry is invalid!');
    }
  },

  // Simpler method with no input validation (the Titans can score 'yes' amount of points without any error)
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    game = this._games.push({opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints});
    console.log(this._games);
  },
};

team.addPlayer('Bugs', 'Bunny', 72);
team.addGame('Titans', 100, 98);
