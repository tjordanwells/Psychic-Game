// Array of all possible options
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables for Wins, Losses, Guesses Left, Letters Guessed

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    

    if (userGuess === computerGuess) {
        wins++;
        lettersGuessed = [];
        guessesLeft = 10;
    }

    if (userGuess != computerGuess) {
        guessesLeft--;
        lettersGuessed.push(userGuess);

    }

    if (guessesLeft === 0) {
        losses++;
        lettersGuessed = [];
        guessesLeft = 10;
    }

    var html = 
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your Guesses So Far: " + lettersGuessed + "</p>";

    document.querySelector("#game").innerHTML = html;
    
}

