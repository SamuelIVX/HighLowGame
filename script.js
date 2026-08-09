let targetNum = Math.floor(Math.random()*100+1);
//Tells You what the random number chosen by the computer
console.log(targetNum);

let guesses = new Array;

// uncomment the below code if you want to execute function when the user hits the ENTER key
// document.addEventListener('keypress', ({key}) => key === 'Enter' && checkValue());

function checkValue(){
   let result = parseInt($(".form-control").val());

  guesses.push(result);
  /* take the result and insert it inside <ul class="previousGuesses"..> element as a list element */
  $(".previousGuesses").append(`<li class="fs-2"> ${result} </li>`);


   if ( result > targetNum){
   

   $("#result").css("color","crimson");
   $("#result").text("Too high!");
 } 
 else if (result < targetNum) {
 

   $("#result").css("color","darkgoldenrod");
   $("#result").text("Too low!");
 } 
 else if(result == targetNum) {
 

   $("#result").css("color","green");
   $("#result").text("You got it!");
   
    $("#playerFeedback").html(`<h3>Nice job!<br/><br/>You guessed <u class="fw-bold text-primary">${guesses.length}</u>time(s) before you won!<br/><br/>Refresh the page to play again.<h3>`);

 }
 else {
  $("#result").css("color","brown");
   $("#result").text("Invalid entry. Please enter an actual number.");
 }
  console.log(guesses);
};
