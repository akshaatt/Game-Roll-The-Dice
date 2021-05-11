'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
let player0El = document.getElementById('player--0');
let player1El = document.getElementById('player--1');

score0El.textContent = 0;
score1El.textContent = '0';
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
// Rolling The Dice Functionality

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  //Displaying The Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //Checking Weather dice is 1 or else
  if (dice !== 1) {
    //Add dice to current score

    currentScore = currentScore + dice;
    document.querySelector(
      `#current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    player0El.classList.remove('.player--active');
    player1El.classList.toggle('.player--active');
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // document.querySelector('.player').style.background = '';
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
  }
});
