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

<<<<<<< HEAD
document.querySelector('.again-btn').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = 'Score: ' + score;
  document.querySelector('.message').textContent = 'Your Guess!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#CB6D52';
});
=======
const msg= document.querySelector(.msg)
 btnCheck.addEventListener('click', function(){
    const guess =Number( document.querySelector('.guess').value);
   if (guess > 0){
       console.log(` number is ${guess}`);
   else{
           console.log('provide right input');

       }
       msg.textContent = 'Provide Right Input' ;
   }
    // const usrInput = Number(guess.Value);
   
    // console.log(usrInput);
    //  console.log(typeof (usrInput))
 })

 var myAge=25;

 if (myAge >=18 && <=30){
        document.write("welcome my bro")
 }
 else{
     document.write("sorry not for you bro..")
 }
>>>>>>> 3c801515a65c1690a95e371b6ff0da0de5f55a0c
