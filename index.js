let secretNumber = 20;
let score = 20;
let highestRecord = 0;

document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('.score').textContent = 'Score: ' + score;
  document.querySelector('.message').textContent = 'Your Guess!';
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.record').textContent = 'Highest Score: ' + 0;
  console.log(secretNumber);
});

document.querySelector('.check-btn').addEventListener('click', function () {
  let inputNumber = document.querySelector('.guess-number').value;
  console.log(inputNumber === secretNumber);
  console.log(secretNumber);
  if (inputNumber == secretNumber) {
    document.querySelector('.message').textContent = 'Congratulations!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#62cc67';
    if (score > highestRecord) {
      document.querySelector('.record').textContent =
        'Highest Score: ' + score;
    }
    return;
  } else if (inputNumber < secretNumber) {
    document.querySelector('.message').textContent = 'You guess is too small!';
    score--;
  } else {
    document.querySelector('.message').textContent = 'You guess is too large!';
    score--;
  }
  document.querySelector('.score').textContent = 'Score: ' + score;
});

document.querySelector('.again-btn').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = 'Score: ' + score;
  document.querySelector('.message').textContent = 'Your Guess!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#CB6D52';
});