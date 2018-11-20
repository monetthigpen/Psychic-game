var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterTooguess = ["v","y","e","d","h","k"];
var lettersGuessed = [];



var winsElement = document.getElementById("wins");
var lossesElement = document.getElementById("losses");
var guessesLeftElement = document.getElementById("guessesLeft");
var lettersGuessedElement = document.getElementById("lettersGuessed");
var computerGuess = letterTooguess[Math.floor(Math.random() * letterTooguess.length ) ];

document.onkeyup = function(event){


    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();


   //lettersGuessedElement.textContent = userGuess;
   
   lettersGuessed.push(userGuess);
   lettersGuessedElement.textContent = lettersGuessed.join(", ");
            //console.log(lettersGuessed); 
    //document.getElementById("lettersGuessed").getAttribute("userGuess")

       if(userGuess === computerGuess){
         wins++; 
         winsElement.textContent = wins;
         lettersGuessed = [];
        }
       if (guessesLeft === 0){
            //alert("Opps! You have exceeded the number of guesses. You lose! Try again!")
            losses++ ;
            lossesElement.textContent = losses;
            guessesLeft = 9;
            guessesLeft.reload(
                guessesLeft >= 0);
          for(var i = 0; i < lettersGuessed.length; i++){
              lettersGuessed.clear(
                lettersGuessed[i] = 9)
          };

            

        }

        else {
         guessesLeft-- < 9;
         guessesLeftElement.textContent = guessesLeft;
         
        }
        // .push[]
        


   

};



