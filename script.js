'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct the Number 🥰';
// document.querySelector('.number').textContent = '$';
// document.querySelector('.score').textContent = 102;
// document.querySelector('.guess').value = 45;
// console.log(document.querySelector('.guess').value);

let enteredLogs = [];
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function incorrectGuess(message, scoreHere) {
  document.querySelector('.message').textContent = message;
  document.querySelector('.score').textContent = scoreHere;
}

// again button
let againButton = document.querySelector('.again');
againButton.addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = null;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  enteredLogs = [];
});

// check button
let checkButton = document.querySelector('.check');
checkButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  enteredLogs.push(guess);
  console.log(enteredLogs);

  //   when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number';

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
    // high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      incorrectGuess(guess > secretNumber ? '📈 To high' : '📉 To low', score);
    } else {
      incorrectGuess('😭 lost the game', 0);
    }
  }
});
