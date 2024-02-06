class HelpTable {
  constructor(moves) {
    this.moves = moves;
  }

  showHelp() {
    const movesLength = this.moves.length;
    const half = Math.floor(movesLength / 2);

    const createDashedLine = (length, withPlus = false) => {
      let line = withPlus ? "+" : "-";
      for (let i = 0; i < length; i++) {
        line += "--------" + (withPlus ? "+" : "-");
      }
      return line;
    };

    let header = "Move |";
    this.moves.forEach((move) => {
      header += ` ${move.padEnd(7)}|`;
    });

    let helpTable = `${createDashedLine(
      movesLength,
      true,
    )}\n${header}\n${createDashedLine(movesLength, true)}\n`;

    for (let i = 0; i < movesLength; i++) {
      let row = `${this.moves[i].padEnd(7)}|`;
      for (let j = 0; j < movesLength; j++) {
        let cellContent;
        if (i === j) {
          cellContent = " Draw ";
        } else {
          const difference = (j - i + movesLength) % movesLength;
          cellContent = difference <= half ? " Win  " : " Lose ";
        }
        row += ` ${cellContent}|`;
      }
      helpTable += row + "\n";
      if (i < movesLength - 1) {
        helpTable += createDashedLine(movesLength, true) + "\n";
      }
    }

    helpTable += createDashedLine(movesLength, true);

    console.log(helpTable);
  }
}

module.exports = HelpTable;
