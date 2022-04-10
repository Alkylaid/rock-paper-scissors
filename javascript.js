let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const score = document.querySelector('.score');
const results = document.querySelector('.results');
const body = document.querySelector('body');
updateScore();
game();

function computerPlay() {
    randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0: 
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }

}

function playRound(playerSelection, computerSelection) {
    

    if (playerSelection === computerSelection) {
        updateRoundResults("draw");
        updateScore();
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        updateRoundResults("win");
        updateScore();
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        updateRoundResults("win");
        updateScore();
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        updateRoundResults("win");
        updateScore();
    } else {
        computerScore++;
        updateRoundResults("lose");
        updateScore();
    }
    

}




function game() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button.getAttribute('class'), computerPlay());


        })
    })
}

function updateScore() {
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    if (playerScore >= 5 || computerScore >= 5) {
        gameOver();

    }
}

function updateRoundResults(result) {
    switch (result){
        case "draw":
            results.textContent = 'Draw!';
            break;
        case "win":
            results.textContent = `You win the round!`;
            break;
        case "lose":
            results.textContent = 'You lost the round!';
            break;

    }
}

function gameOver() {
    buttons.forEach((button) => {
        button.disabled = true;
    })
    const gameOverMessage = document.createElement('div');
    gameOverMessage.style.cssText = 'color: red; font-size: 36px; font-weight: bold; margin-top: 20px;'
    gameOverMessage.classList.add('Game-Over');
        if (playerScore > computerScore) {
            gameOverMessage.textContent = "You win the game!";
        } else {
            gameOverMessage.textContent = "The computer wins the game!";
        }
        body.appendChild(gameOverMessage);
        playAgain();

}

function playAgain() {
    const playAgain = document.createElement('button');
    playAgain.textContent = 'Play Again';
    body.appendChild(playAgain);
    playAgain.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playAgain.remove();
    clearMessages();
    updateScore();
    buttons.forEach((button) => {
        button.disabled = false;
    })
    })
}

function clearMessages() {
    const gameOverMessage = document.querySelector('.Game-Over');
    gameOverMessage.remove();
    results.textContent = '';
}

