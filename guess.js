function gambler(){
var randomNumber = Math.floor(Math.random() * 10 + 1);
var guess;
var allGuesses = [];

    for(var i = 0; i < 4; i++){
      guess = prompt("Please guess a number from 1 to 10!");
      if(guess === null){
        alert("That makes me sad =(");
        break;
      } else if (isNaN(guess)){
        alert("The instructions seemed clear!\nGuess a number, not a string!\nWanna try again?");
        break;
      }
      allGuesses[i] = Number(guess);
      if(Number(guess) === randomNumber){
        alert("Good job! The number was indeed " + Number(guess) + "!\nYou are some sort of computer mind reader!");
        break;
      } else {
        if(i < 2){
          alert("Try again! You have " + (3 - i) + " guesses left.\nYour already tried : \n" + allGuesses.join("-"));
        } else if(i === 2){
          alert("Try again! You have one guess left.\nYour already tried : \n" + allGuesses.join("-"));
        }else if(i === 3) {
          alert("Game over! The number was " + randomNumber + ".\nYou guessed: " + allGuesses.join("-") + ".");
        }
      }
    }
}

gambler();