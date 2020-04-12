// Array for computer options
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Random letter computer choice
var comp = letters[Math.floor(Math.random() * letters.length)];

// Variables for counters/outputs
var wins = 0;
var losses = 0;
var guessCount = 9;
var guesses = "";
var count = 0;

// Update HTML span tags to vars for starting values
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guessCount").innerHTML = guessCount;

// Function for gameplay
document.onkeyup = function(event) {

    // User guess
    var userGuess = event.key;

    // For correct guesses
    if (userGuess === comp) {
        // Increment wins and update HTML
        wins++;
        document.getElementById("wins").innerHTML = wins;
        // Reset guesses remaining count and update HTML
        guessCount = 9;
        document.getElementById("guessCount").innerHTML = guessCount;
        // Reset user guesses list and update HTML
        guesses = "";
        document.getElementById("guesses").innerHTML = guesses;
        // Start counter over
        count = 0;
        // Comp picks a new random letter
        comp = letters[Math.floor(Math.random() * letters.length)];
    }

    // For wrong guesses
    else if (userGuess !== comp) {
        // If user has guesses remaining
        if (count < 8) {
            // Add user guess to guesses list and update HTML
            document.getElementById("guesses").innerHTML += userGuess + "  ";
            // Decrement guesses remaining count and update HTML
            guessCount--;
            document.getElementById("guessCount").innerHTML = guessCount;
            // Increment counter
            count++;
        }
        // If user has used all their guesses
        else if (count === 8) {
            // Increment losses and update HTML
            losses++;
            document.getElementById("losses").innerHTML = losses;
            // Reset guesses remaining count and update HTML
            guessCount = 9;
            document.getElementById("guessCount").innerHTML = guessCount;
            // Reset user guesses list and update HTML
            guesses = "";
            document.getElementById("guesses").innerHTML = guesses;
            // Start counter over
            count = 0;
            // Comp picks a new random letter
            comp = letters[Math.floor(Math.random() * letters.length)];
        }
        
    }

}