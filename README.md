# Rock-Paper-Scissors-Lizard-Spock Game

The game is designed to be played against the computer in a command-line interface, utilizing cryptographic techniques to ensure fairness and transparency in gameplay.

## Features

- **Cryptographic Fairness**: Utilizes HMAC (Hash-based Message Authentication Code) with SHA3-256 to guarantee the computer's move is fair and unchanged.
- **Extended Gameplay**: In addition to Rock, Paper, and Scissors, includes Lizard and Spock to make the game more challenging and fun.
- **Interactive CLI**: Easy-to-use command-line interface for selecting moves and viewing game outcomes.
- **Verification**: Players can verify the computer's move using the revealed HMAC key after each round.
