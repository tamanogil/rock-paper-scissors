let choices = ["rock", "paper", "scissors"]
function getComputerChoice(){
let choice = choices[Math.floor(Math.random() * choices.length)]
return choice
}
function getPlayerChoice(){
    let validatedInput = false;
    while (validatedInput == false){
        const inputChoice = prompt("rock paper scissors");
            if(inputChoice == null){
                continue;
        }
        const choiceInLower = inputChoice.toLowerCase()
        if(choices.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower
    }
}
}
function playGame(playerChoice, computerChoice){
    if(playerChoice == computerChoice){
        return "Tie"
    }
    else if((playerChoice == "rock" && computerChoice == "paper") ||
    (playerChoice == "scissors" && computerChoice == "rock") ||
    (playerChoice == "paper" && computerChoice == "scissors"))
    {
        return "Computer"
    }
    else {return "Player"}
}
function displayResult(playerChoice, computerChoice){
    const result = playGame(playerChoice, computerChoice)
    if(result === "Tie"){
        return `It's a tie!`
    }
    else if(result === "Player"){
        return `Player wins! ${playerChoice} beats ${computerChoice}`
    }
    else{
        return `Computer wins! ${computerChoice} beats ${playerChoice}`
    }
}

function startGame(){
    for(let i = 0 ; i < 5; i++){
const computerChoice = getComputerChoice()
const playerChoice = getPlayerChoice()
console.log(displayResult(computerChoice,playerChoice))}}
startGame()