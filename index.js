 'use strict' ;

 var secretNumber = math.trunc(Math.random()*20+1);
 const number = document.querySelector('.number');
 
 
 
 const btnCheck = document.querySelector('.check');
 
//  console.log(secretNumber);

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