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
    document.querySelector('body').style.backgroundColor = '#59CE8F';
    if (highScore.textContent < score.textContent)
      highScore.textContent = score.textContent;
  } else if (yourguess.value < ans) {
    message.textContent = "that's too low";
    score.textContent--;
  } else {
    message.textContent = "that's too high";
    score.textContent--;
  }

  changebackground();
}

function reset() {
  message.textContent = 'Start guessing..';
  yourguess.value = 0;
  score.textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  ans = Math.floor(Math.random() * 20) + 1;
}

function changebackground() {
  let color_changer = 110 - (20 - score.textContent) * 10;

  let color_text = `rgb(255, ${color_changer}, 26)`;
  console.log(color_text);
  if (color_changer < 0) color_changer = 0;
  if (score.textContent == 0) {
    document.querySelector('.number').textContent = 'game over';
    document.querySelector('.number').style.width = '30rem';
  }
  if (score.textContent < 0) {
    reset();
  }
  document.querySelector('body').style.backgroundColor = color_text;
}
