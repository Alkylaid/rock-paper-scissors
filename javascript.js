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
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    

}
