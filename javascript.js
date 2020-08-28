let playerScore = 0;
let computerScore = 0;
let htmlPlayerScore = document.getElementById("player-score");
let htmlComputerScore = document.getElementById("computer-score");
let results = document.querySelector("#results");
let tied = document.createElement("p");
let roundResult = document.createElement("p");
let roundElements = [tied, roundResult];

function computerPlay() {
    randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber <= 2) {
        return "rock";
    } else if (randomNumber <= 5 && randomNumber > 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

/*
function game() {
    let result;
    for (let i = 0; i < 5; i++) {
        result = playRound(prompt("Rock, paper, or scissors?"), computerPlay());
        if (result === -1) {
            alert("Picked the same thing, try again.")
            i--;
        } else {
            console.log(result);
        }
    }
}
*/

function playRound(playerSelection, computerSelection) {
    removeRoundElements();

    if (playerSelection === computerSelection) {
        tied.textContent = "You tied this round! Try again.";
        results.appendChild(tied);
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        playerWin(playerSelection, computerSelection);
    } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        playerLose(playerSelection, computerSelection);
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        playerWin(playerSelection, computerSelection);
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        playerLose(playerSelection, computerSelection);
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        playerWin(playerSelection, computerSelection);
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        playerLose(playerSelection, computerSelection);
    }
}

function playerWin(playerSelection, computerSelection) {
    playerScore++;
    htmlPlayerScore.textContent = "Player score: " + playerScore;
    roundResult.textContent = `You win this round! ${playerSelection} beats ${computerSelection}.`;
    results.appendChild(roundResult);
    checkGameOver();
}

function playerLose(playerSelection, computerSelection) {
    computerScore++;
    htmlComputerScore.textContent = "Computer score: " + computerScore;
    roundResult.textContent = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
    results.appendChild(roundResult);
    checkGameOver();
}

function removeRoundElements() {
    if (results.contains(tied)) {
        results.removeChild(tied);
    }
    if (results.contains(roundResult)) {
        results.removeChild(roundResult);
    }
}

function checkGameOver() {
    if (playerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        htmlPlayerScore.textContent = "Player score: " + playerScore;
        htmlComputerScore.textContent = "Computer score: " + computerScore;
        alert("Game over! You win!");
    }
    if (computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        htmlPlayerScore.textContent = "Player score: " + playerScore;
        htmlComputerScore.textContent = "Computer score: " + computerScore;
        alert("Game over! You lose!");
    }
}

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", function() {
        playRound(button.id, computerPlay())
    });
});