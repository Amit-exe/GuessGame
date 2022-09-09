'use strict';

var ans = Math.floor(Math.random() * 20) + 1;

console.log(ans);

let message = document.querySelector('.message');
console.log(message.innerHTML);

let score = document.querySelector('.score');
let yourguess = document.querySelector('.guess');
let highScore = document.querySelector('.highscore');
yourguess.value = 0;

function func() {
  console.log(yourguess.value);

  if (yourguess.value == ans) {
    message.textContent = "that's correct";
    document.querySelector('.number').textContent = yourguess.value;
    if (highScore.textContent < score.textContent)
      highScore.textContent = score.textContent;
  } else if (yourguess.value < ans) {
    message.textContent = "that's too low";
    score.textContent--;
  } else {
    message.textContent = "that's too high";
    score.textContent--;
  }
}

function reset() {
  message.textContent = 'Start guessing..';
  yourguess.value = 0;
  score.textContent = 20;
  ans = Math.floor(Math.random() * 20) + 1;
}

// while (true) {
//   func();
// }
