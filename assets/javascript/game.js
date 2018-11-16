var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterTooguess = ["v","y","e","d","h","k"];

 var winsElement =html.getElementById("wins");
 var lossesElement = html.getElementById("losses");
 var guessesLeftElement = html.getElementById("guessesLeft");
 var lettersGuessedElement = html.getElementById("lettersGuessed");
 var computerGuess = letterTooguess[Math.floor(Math.random() * letterTooguess.length ) ];

document.onkeyup = function(event){
   
    
    var userGuess = event.key;
    //var userGuessElement.textContent = userGuess;
    
    
        if(userGuess === computerGuess){
            wins++; 
            winsElement.textContent = wins;
        }
        else{
            losses++;
            lossesElement.textContent = losses;

        }  
   

};


