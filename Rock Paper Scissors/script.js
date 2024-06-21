// Array of possible choices in the game
let choices = ["rock", "paper", "scissors"];

// Variables to keep track of the scores and the number of rounds played
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

// Function to capitalize first letter of user choice for visual purposes
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to play a single round of the game
function playRound(humanChoice) {
    // If 5 rounds have already been played, exit the function
    if (roundCount === 5) {
        return;
    }

    // Increment the round count
    roundCount++;

    // Get the computer's choice
    let computerChoice = getComputerChoice();
    let result;

    // Determine the result of the round
    if (humanChoice === computerChoice) {
        result = "It's a tie!";
        humanScore++;
        computerScore++;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        humanScore++;
    } else {
        result = "You lose!";
        computerScore++;
    }

    // Display the result of the round
    let roundResult = result + " You chose " + capitalize(humanChoice) + ", computer chose " + capitalize(computerChoice);
    document.getElementById("roundResults").innerHTML += "<p>Round " + roundCount + ": " + roundResult + "</p>";

    // If 5 rounds have been played, display the final result of the game
    if (roundCount === 5) {
        displayFinalResult();
    }
}

// Function to randomly select the computer's choice
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to display the final result of the game
function displayFinalResult() {
    if (humanScore > computerScore) {
        document.getElementById("finalResult").innerHTML = "🎉🏆 You win the game! Your score: " + humanScore + ", Computer score: " + computerScore;
    } else if (humanScore < computerScore) {
        document.getElementById("finalResult").innerHTML = "😞 You lose the game! Your score: " + humanScore + ", Computer score: " + computerScore;
    } else {
        document.getElementById("finalResult").innerHTML = "🤝 It's a tie game! Your score: " + humanScore + ", Computer score: " + computerScore;
    }

    // Show the restart button to allow the user to play again
    document.getElementById("restartButton").style.display = "block";
}

// Function to reset the game to its initial state
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
    document.getElementById("roundResults").innerHTML = "";
    document.getElementById("finalResult").innerHTML = "";

    // Hide the restart button again
    document.getElementById("restartButton").style.display = "none";
}
