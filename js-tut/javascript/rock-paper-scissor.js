/*
 ** Rock paper scissor ** 
 ========================
 >for loops
 >DOM Manipulation
 >Variables
 >Conditionals (if else if)
 >Template Literals
 >Event Listener
 >higher oder function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock `paper `scissor and returns that string **
// getComputerChoice() "rock"
// getComputerChoice() "scissors"

const totalScore = { playerScore: 0, computerScore: 0 };

const getComputerChoice = () => {
  const btnArray = ["rock", "scissor", "paper"];
  const randomBtn = Math.floor(Math.random() * btnArray.length);
  return btnArray[randomBtn];
};

// ** getResult compares playerChoice & computerChoice and returns the score accordingly**
// human wins - getResult('rock', 'Scissor') => 1
// human loses - getResult( 'Scissor', 'rock') => -1
// human draws - getResult( 'rock', 'rock') => 0

const getResult = (playerChoice, computerChoice) => {
  let score;
  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice === "rock" && computerChoice === "scissor") {
    score = 1;
  } else if (playerChoice === "scissor" && computerChoice === "paper") {
    score = 1;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    score = 1;
  } else {
    score = -1;
  }
  return score;
};

/** showResult updates the DOM to "You win!" or "You lose!" or "it's A Draw!"
based on  the score. also shows player choice vs computerchoice */

const showResult = (score, playerChoice, computerChoice) => {
  const result = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScore = document.getElementById("player-score");
  if (score === 1) {
    result.innerText = "You Win!";
    result.style.color = "green";
  } else if (score === -1) {
    result.innerText = "You Lose!";
    result.style.color = "red";
  } else {
    result.innerText = "It's A Draw!";
    result.style.color = "orange";
  }

  handsDiv.innerText = `${playerChoice} VS ${computerChoice}`;
  playerScore.innerText = `Your Score: ${totalScore["playerScore"]}`;
};

// **
const onClickRPS = (playerChoice) => {
  const computerChoice = getComputerChoice();

  const score = getResult(playerChoice, computerChoice);
  totalScore["playerScore"] += score;
  showResult(score, playerChoice, computerChoice);
};

// ** Make the rps buttons actively listen for a click and do something once a click is detectedS

const playGame = () => {
  // use\
  const rpsBtns = document.querySelectorAll(".rpsButton");
  const endGameBtn = document.getElementById("endGameButton");

  rpsBtns.forEach((rpsBtn) => {
    rpsBtn.onclick = () => onClickRPS(rpsBtn.value);
  });

  endGameBtn.onclick = () => endGame(totalScore);
};

const endGame = (totalScore) => {
  totalScore["playerScore"] = 0;
  totalScore["computerScore"] = 0;
  const result = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScore = document.getElementById("player-score");

  result.innerText = "";
  handsDiv.innerText = "";
  playerScore.innerText = "";
};

playGame();
