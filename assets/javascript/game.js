// Array for computer options
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables for counters
var wins = 0;
var losses = 0;
var guessCount = 9;
var guesses = "";
var count = 0;

document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guessCount").innerHTML = guessCount;

// Function for gameplay
document.onkeyup = function(event) {

    // User guess
    var userGuess = event.key;

    // Random computer choice
    var comp = letters[Math.floor(Math.random() * letters.length)];

    // Display results and increment counters
    if (userGuess === comp) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        guessCount = 9;
        document.getElementById("guessCount").innerHTML = guessCount;
        guesses = "";
        document.getElementById("guesses").innerHTML = guesses;
        // INSERT CODE HERE FOR RELOAD
    }

    else if (userGuess !== comp) {
        if (count < 8) {
            document.getElementById("guesses").innerHTML += userGuess + "  ";
            guessCount--;
            document.getElementById("guessCount").innerHTML = guessCount;
            count++;
        }
        else if (count === 8) {
            losses++;
            document.getElementById("losses").innerHTML = losses;
            guessCount = 9;
            document.getElementById("guessCount").innerHTML = guessCount;
            guesses = "";
            document.getElementById("guesses").innerHTML = guesses;
            // INSERT CODE HERE FOR RELOAD
        }
        
    }

}