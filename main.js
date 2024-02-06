const Game = require("./game");

const moves = process.argv.slice(2);

if (moves.length < 3 || moves.length % 2 === 0) {
  console.error(
    "Error: Please provide an odd number of moves greater than or equal to 3.",
  );
  process.exit(1);
} 

const game = new Game(moves);
game.play();
