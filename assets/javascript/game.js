
// create an array with the possible choices
var letterChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
console.log(letterChoices)

//var choice = math.floor(math.random()*26)

//Set baseline -intial values
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesChosen = [];
var computerChoice = generateLetter();


/* 0: Display game data on the page.
    id="wins"
    id="losses"
    id="guesses-left"
    id="guesses-so-far"
*/
document.querySelector("#wins").textContent = wins
document.querySelector("#losses").textContent = losses
document.querySelector("#guesses-left").textContent = guessesLeft
document.querySelector("#guesses-so-far").textContent = guessesChosen.join(", ")

// 1: generate a random letter a-z. 
function generateLetter() {
    // create a random number from 0 - 25
    // use the number as an index to select a letter from letterChoices array. 
    var choice = Math.floor(Math.random() * letterChoices.length);
    return letterChoices[choice]
    
}

/*
2: capture the user input (guess).

    2.1: normalize and validate the input. (change to lower case, make sure its a letter etc.)   
*/
//event is the user pressing the key.
document.onkeydown = function(event) {
    //resets the alert
    document.querySelector("#alert-message").textContent = ""
    //converts any user key in caps to lowercase.
    var letter = event.key.toLowerCase();
    //limits the acceptable keys to letters only (no symbols or numbers).
    if(letter>="a" && letter<= "z") { 
        evaluateUserInput(letter)

    } else { 
        //gives an alert if a non letter key is pushed.
        document.querySelector("#alert-message").textContent = "Please select a letter"
    }
}

/* 
3: evaluate the user's input. (check if it is equal to the random computer choice). 
    3.1: check that the user hasn't already guessed the letter. 
    3.2: If they haven't guessed the letter and it is incorrect, need to reduce the guess count by 1. 
    3.3: Add the letter to the chosen guesses array. 
    3.4: Check if the user has guesses remaining. 
    3.5: If user choses correctly, then need to alert user and reset the game, and increment wins by one. 
    3.6: If user loses game, need to increment losses by one and game resets. 

*/
function evaluateUserInput(letter) {
    // if the chosen key by the user equals the ranom comptuter choice.
    if(letter === computerChoice) {
        //the user wins (increased by one)
        wins++;
        //records a win.
        document.querySelector("#wins").textContent = wins;
        // updates the alert on the page with winning message. 
        document.querySelector("#alert-message").textContent = "You won!!" ;
        //resets the game using the reset function from below. 
        reset()
    } else {
        // else - meaning if the players chosen letter does not equal the computer choice.
        if(guessesChosen.includes(letter)){
            // if the user picks the same letter a second choice, then the below alert appears on the page:
            document.querySelector("#alert-message").textContent = "you have already picked this letter, pick another!" ;
        } else {
            //if it is not a letter the user has chosen before:
            guessesChosen.push(letter);
            //the number of guesses (10 allowed) reduces by one"
            guessesLeft--;
            // this updates the text for the guesses left amount:
            document.querySelector("#guesses-left").textContent = guessesLeft
            // thie places the guesses on the page in the guesses chosen array in the format ", ".
            document.querySelector("#guesses-so-far").textContent = guessesChosen.join(", ")
            if (guessesLeft === 0) {
                //once the number of guesses is reduced to zero it becomes a loss. and the number of losses increase by one. 
                losses++;
                //records the loss
                document.querySelector("#losses").textContent = losses;
                // updates the alert message on the page to show the loss.
                document.querySelector("#alert-message").textContent = "You Lost!";
                reset()
            }
        } 
    }

}


//4: Create a game reset. Reset all variables back to initial values (except for wins/losses) and then redisplay game data. 

function reset() {
    guessesLeft = 10;
    guessesChosen = [];
    computerChoice = generateLetter();

}

// Initial pseudocode: 
// the player will guess the letter. 
 // define an event of a keytouch of letter and push to guessesChosen [];


//The player has 10 guesses to guess the letter.
// need to add some sort of count up to 10 guesses.  

// If the player guesses the correct letter they win. 

    // if guessChosen == Computer Choice {
    // increase the wins by one. 
    //alert ("you win!")
    // }

// if they player doesnt guess the correct letter in 10 guesses they lose the game.
    // if guessChosen !== Computer Choice {
    // increase losses by one. 
    // alert you lose!
   // }


// if the player wins or loses the game will reset to play again. 
    // need to reset the game to zeros, but keep the wins and losses tally going. 

// we need to track the number of losses and wins and show in html text to reflect Wins, Losses, Remaning Guesses, and Guesses chosen so far. 