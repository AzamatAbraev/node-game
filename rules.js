class GameRules {
  constructor(moves) {
    this.moves = moves;
  }

  getWinner(playerMove, computerMove) {
    const movesLength = this.moves.length;
    const winDistance = movesLength / 2;
    const playerIndex = this.moves.indexOf(playerMove);
    const computerIndex = this.moves.indexOf(computerMove);

    if (playerIndex === computerIndex) return "Draw";
    if ((playerIndex - computerIndex + movesLength) % movesLength <= winDistance)
      return "Player wins!";
    return "Computer wins!";
  }
}

module.exports = GameRules;