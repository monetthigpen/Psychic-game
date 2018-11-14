var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterTooguess = ["v","y","e","d","h","k"];

var winsElement = document.getElementById("wins");
var lossesElement = document.getElementById("losses");
var guessesLeftElement = document.getElementById("guessesLeft");
var lettersGuessedElement = document.getElementById("lettersGuessed");
document.onkeyup = function(event){
    var userGuess = event.key;
    userGuessElement.textContent = userGuess;
    var computerGuess = letterTooguess[Math.floor(Math.random() * letterTooguess.length)];
     
    if(userGuess === letterTooguess){
        wins++;
        winsElement.textContent = wins;
    }
    else{
        losses++;
        lossesElement.textContent = losses;

    }

};


