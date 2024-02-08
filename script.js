let choices = ["rock", "paper", "scissors"]
function getComputerChoice(){
let choice = choices[Math.floor(Math.random() * choices.length)]
return choice
}
function playGame(){
    if(playerChoice === computerChoice){
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
let computerChoice = getComputerChoice()
let playerChoice = "rock"
console.log(playGame())