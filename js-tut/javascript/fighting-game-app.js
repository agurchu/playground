// ** Fighting game

/*

create an updateGame() function that will update the DOM with the state of thr game
=================================================================

- updateGame()

2 classes to create and their methods
=====================================

class Player {
    - strike()
    - heal()
}

class Game {
    - play()
    - checkIsOver()
    - declareWinner()
    - reset
}

*/

// grabs elements from DOM

const playBtn = document.getElementById("play");
const resultEl = document.getElementById("result");
const p1Name = document.querySelector(".p1__name");
const p2Name = document.querySelector(".p2__name");
const p1HealthEl = document.getElementById("p1__health");
const p2HealthEl = document.getElementById("p2__health");

// ** Player Class which create a player with all its attributes & methods
// Kat = Player("Kat", 100, 7)
// kat.health 100
// kat.attackDmg 7

class Player {
  constructor(name, health, attackDamage) {
    this.name = name;
    this.health = health;
    this.attackDmg = attackDamage;
  }

  // ** Attack an enemy with a random number from 0 to attacking bonus
  strike(player, enemy, attackDmg) {
    // get a random num 1 to attackDmg be damageAmount
    const damageAmount = Math.ceil(Math.random() * attackDmg);
    if (player.health > 0 && game.isOver == false) {
      // substract the enemy health with damageAmount
      enemy.health -= damageAmount;
      document.getElementById("punch").play();
    }

    // update the DOM with updateGame()
    updateGame(player1, player2, game.isOver);
    return `${player.name} attacks ${enemy.name} for ${damageAmount} damage!`;
  }

  heal(player) {
    //random number 0 to 5
    const hpAmount = Math.ceil(Math.random() * 5);
    if (player.health > 0 && player.health <= 95 && game.isOver == false) {
      player.health += hpAmount;
      document.getElementById("p1heal").play();
    }

    // update the DOM with updateGame()
    updateGame(player1, player2, game.isOver);
    return `${player.name} heals  for ${hpAmount} HP!`;
  }
}

class Game {
  constructor() {
    this.isOver = false;
  }

  // ** if the game is over and  a player has 0 health declare the winner
  declareWinner(isOver, p1, p2) {
    let msg = " Tie ";

    //if isOver is true and P1 health <=0 update P2 wins

    if (isOver == true && p1.health <= 0) {
      resultEl.innerText = `${p2.name} WINS!`;
      msg = resultEl.innerText;
    } else if (isOver == true && p2.health <= 0) {
      resultEl.innerText = `${p1.name} WINS!`;
    }
    document.getElementById("urinal").play();
    return msg;
  }

  reset(p1, p2) {
    p1.health = 100;
    p2.health = 100;
    this.isOver = false;
    resultEl.innerText = "";
    updateGame(p1, p2, this.isOver);
  }

  play(p1, p2) {
    // reset to make sure player health is back to full
    this.reset(p1, p2);

    while (this.isOver) {
      p1.strike(p1, p2, p1.attackDmg);
      p2.heal(p2);
      p2.strike(p2, p1, p2.attackDmg);
      p1.heal(p1);
    }
    return this.declareWinner(this.isOver, p1, p2);
  }
}

const updateGame = (p1, p2, gameState) => {
  // update the DOM with names and latest health
  p1Name.innerText = p1.name;
  p2Name.innerText = p2.name;
  p1HealthEl.innerText = p1.health;
  p2HealthEl.innerText = p2.health;

  //if either player health is <= 0 then set isOver to true and declareWinner()

  if (p1.health <= 0 || p2.health <= 0) {
    game.isOver = true;
    gameState = game.isOver;
    resultEl.innerText = "";
    game.declareWinner(game.isOver, p1, p2);
    return gameState;
  }
};

const player1 = new Player("Kat", 100, 10);
const player2 = new Player("Ritmo", 100, 10);
const game = new Game();

playBtn.onclick = () => {
  resultEl.innerText = game.play(player1, player2);
};

// ** player 1 controls

document.addEventListener("keydown", (e) => {
  if (e.key == "q") {
    player1.strike(player1, player2, player1.attackDmg);
    document.getElementById("p1punch").play();
  } else if (e.key == "a") {
    player1.heal(player1);
  }
});

// ** player 2 controls

document.addEventListener("keydown", (e) => {
  if (e.key == "p") {
    player1.strike(player2, player1, player2.attackDmg);
    document.getElementById("p2punch").play();
  } else if (e.key == "l") {
    player2.heal(player2);
  }
});

// document.addEventListener("keydown", (e) => {
//   if (e.key == "a" && player1.health > 0 && game.isOver == false) {
//     player1.heal(player1);
//   }
// });

updateGame(player1, player2, game.isOver);
game.declareWinner(game.isOver, player1, player2);
