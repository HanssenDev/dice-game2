/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

To-do
1. Dice roll - DONE
2. Player turn
3. Win condition
4. Hold
5. If player rolls 1

*/

// Declare constants for buttons and dies
const newGameBtn = document.querySelector(".btn-new");
const rollBtn = document.querySelector(".btn-roll");
const holdBtn = document.querySelector(".btn-hold");
const dice = document.querySelectorAll(".dice");

document.querySelector(".dice");

// Declare constants for player scores
const player1 = document.querySelector(".player-0-panel").children;
const player2 = document.querySelector(".player-1-panel").children;

let p1Total = player1[1];
let p1Current = player1[2].children[1].textContent;
let p2Total = player2[1];
let p2Current = player2[2].children[1].textContent;

let gamePlaying = false;

const players = ["Player 1", "Player 2"];
let activePlayer = players[0];

// Declare functions
const startGame = () => {
  gamePlaying = true;
  p1Total.textContent = 0;
  p2Total.textContent = 0;

  dice.forEach((die) => {
    die.style.display = "none";
  });
};

const rollDice = () => {
  if (gamePlaying) {
      
    // Make random dice image appear
    dice.forEach((die) => {
      die.style.display = "block";
      die.src = `/img/dice-${Math.floor(Math.random() * 6) + 1}.png`;
    });
  }
};

const holdScore = () => {
 p1Total.textContent >= 100 ? player1[0].textContent = "WINNER!" : null
 p2Total.textContent >= 100 ? player2[0].textContent = "WINNER!" : null
}

const roll1 = () => {};

// Event listeners
newGameBtn.addEventListener("click", startGame);
rollBtn.addEventListener("click", rollDice);
holdBtn.addEventListener("click", holdScore);
