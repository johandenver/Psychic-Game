document.onload = function(){



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
    document.onkeydown = function(event) {
        document.querySelector("#alert-message").textContent = ""
        var letter = event.key.toLowerCase();
        if(letter>="a" && letter<= "z") { 
            evaluateUserInput(letter)

        } else { 
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
        if(letter === computerChoice) {
            wins++;
            document.querySelector("#wins").textContent = wins;
            document.querySelector("#alert-message").textContent = "You won!!" ;
            reset()
        } else {
            if(guessesChosen.includes(letter)){
                document.querySelector("#alert-message").textContent = "you have already picked this letter, pick another!" ;
            } else {
                guessesChosen.push(letter);
                guessesLeft--;
                document.querySelector("#guesses-left").textContent = guessesLeft
                document.querySelector("#guesses-so-far").textContent = guessesChosen.join(", ")
                if (guessesLeft === 0) {
                    losses++;
                    document.querySelector("#losses").textContent = losses;
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

}


//function randomAnswer () {
 //   var char = "abcdefghijklmnopqrstuvwxyz";
   //  return chars.substr( Math.floor(Math.random() * 26), 1);
//} 

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