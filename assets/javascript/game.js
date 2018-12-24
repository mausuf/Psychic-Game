var userLettersGuessed = []; //Memory to hold user letters guessed
var guessesLeft = 10; //Number of guess remaining
var wins = 0; //Number of wins
var losses = 0; //Number of losses
var computerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


document.onkeyup = function(event) {

    var userGuess = event.key;
    var computerGuess = computerLetters[Math.floor(Math.random() * computerLetters.length)];

    var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


    if (options.indexOf(userGuess) > -1) {
        if (userGuess == computerGuess) {
            wins++;
            guessesLeft = 10;
            userLettersGuessed = [];
            alert("You Win! :)");
        }
        else {
            if (userLettersGuessed.includes(userGuess)) {
                alert("Letter already guessed!");
            }
            else {
                guessesLeft--;
                userLettersGuessed.push(userGuess);
            }
            if (guessesLeft == 0) {
                alert("You Lost! :(");
				guessesLeft = 10;
				losses ++;
				userLettersGuessed = [];
            }
        }
    }
    document.getElementById("userGuesses").innerHTML = userLettersGuessed;
    document.getElementById("numberOfWins").innerHTML = wins;
    document.getElementById("numberOfLosses").innerHTML = losses;
    document.getElementById("numberOfGuessesLeft").innerHTML = guessesLeft;
}

