let choices = ["rock", "paper", "scissors"]
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a Tie"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You win!" 
                : "You Lose";
            break;
            case "paper":
                result = (computerChoice === "rock") ? "You win!" 
                : "You Lose";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You win!" 
                : "You Lose";
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}` ; 
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
    
    resultDisplay.classList.remove("greenText", "redText")
    switch(result){
        case "You win!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore
            break;
        case "You Lose":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore
            break;
    }
}
