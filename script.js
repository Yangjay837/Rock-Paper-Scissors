let choices = ["rock", "paper", "scissors"];

let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');
let resultText = document.getElementById('result-text');

rockButton.addEventListener('click', function() {
    playGame("rock");
});

paperButton.addEventListener('click', function() {
    playGame("paper");
});

scissorsButton.addEventListener('click', function() {
    playGame("scissors");
});

function playGame(userChoice) {
    let computerChoice = getComputerChoice();
    let result = determineWinner(userChoice, computerChoice);
    displayResult(result, userChoice, computerChoice);
}

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if ((userChoice === "rock" && computerChoice === "scissors") ||
               (userChoice === "scissors" && computerChoice === "paper") ||
               (userChoice === "paper" && computerChoice === "rock")) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function displayResult(result, userChoice, computerChoice) {
    resultText.innerHTML = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
}