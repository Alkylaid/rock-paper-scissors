function computerPlay() {
    randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0: 
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }

}

function playRound(playerSelection, computerSelection) {
    

    if (playerSelection === computerSelection) {
        return `Draw! Player: ${playerScore} Computer: ${computerScore}`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}. Player: ${playerScore} Computer: ${computerScore}`
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}. Player: ${playerScore} Computer: ${computerScore}`
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}. Player: ${playerScore} Computer: ${computerScore}`
    }
    

}

function game() {
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = window.prompt("Rock, Paper, Scissors?");
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

        
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore === computerScore) {
        return "Draw!";
    } else if (playerScore > computerScore) {
        return "Player wins!";
    } else {
        return "Computer Wins!";
    }
}


let playerScore = 0;
let computerScore = 0;


console.log(game());