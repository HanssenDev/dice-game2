/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

To-do
1. Dice roll
2. Player turn
3. Win condition
4. Hold

*/

// Declare constants for buttons
const newGameBtn = document.querySelector(".btn-new");
const rollBtn = document.querySelector(".btn-roll");
const holdBtn = document.querySelector(".btn-hold");

// Declare constants for player scores
const p1Total = document.getElementById("score-0").textContent;
const p1Current = document.getElementById("current-0").textContent;
const p2Total = document.getElementById("score-1").textContent;
const p2Current = document.getElementById("current-1").textContent;

// Event listeners
newGameBtn.addEventListener("click", startGame);
rollBtn.addEventListener("click", rollDice);
holdBtn.addEventListener("click", holdScore);


// Declare functions
const startGame = () => {
    p1Total = 0;
    p2Total = 0;
}

const rollDice = () => {

}


const holdScore = () => {

}

