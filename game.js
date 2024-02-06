const prompt = require("prompt-sync")({ sigint: true });

const GameRules = require("./rules");
const SecurityKey = require("./hmac");
const HelpTable = require("./table");

class Game {
  constructor(moves) {
    this.moves = moves;
    this.rules = new GameRules(moves);
    this.key = SecurityKey.generateKey();
    this.helpDisplay = new HelpTable(moves);
  }

  play() {
    const computerMove =
      this.moves[Math.floor(Math.random() * this.moves.length)];
    const hmac = SecurityKey.calculateHmac(this.key, computerMove);
    console.log(`HMAC: ${hmac}`);

    this.promptPlayer(computerMove);
  }

  promptPlayer(computerMove) {
    this.key = SecurityKey.generateKey();

    this.displayMenu();

    let playerChoice = prompt("Enter your move: ");
    if (playerChoice !== "0") {
      this.handlePlayerChoice(playerChoice, computerMove);
      console.log(`HMAC key: ${this.key}`);
    } else {
      console.log("Game exited.");
    }
  }

  handlePlayerChoice(playerChoice, computerMove) {
    if (playerChoice === "?") {
      this.helpDisplay.showHelp();
      setTimeout(() => this.promptPlayer(computerMove), 1000);
    } else {
      try {
        const choiceIndex = parseInt(playerChoice, 10) - 1;
        if (choiceIndex >= 0 && choiceIndex < this.moves.length) {
          const playerMove = this.moves[choiceIndex];
          const result = this.rules.getWinner(playerMove, computerMove);
          console.log(
            `Your move: ${playerMove}\nComputer move: ${computerMove}\n${result}`,
          );
          console.log(`Original key: ${this.key}`);
        } else {
          console.log("Invalid choice, please try again.");
        }
      } catch (error) {
        console.log(
          "Invalid input, please enter a number corresponding to your move.",
        );
      }
      setTimeout(() => this.promptPlayer(computerMove), 1000);
    }
  }

  displayMenu() {
    console.log("Available moves:");
    this.moves.forEach((move, i) => {
      console.log(`${i + 1} - ${move}`);
    });
    console.log("0 - exit\n? - help");
  }
}

module.exports = Game;
