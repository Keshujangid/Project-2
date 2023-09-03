let playerPoints = document.querySelector('.player-points');
let computerPoints = document.querySelector('.computer-points');
let cp = 0, up = 0;
const resetBtn = document.createElement('button');
resetBtn.classList.add('restart');
resetBtn.textContent = 'play again';
const result = document.querySelector('.result');
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')
    ) {
        playerPoints.textContent = `Point: ${++up}`;
        if (up === 5) {
            result.appendChild(resetBtn);
            return 'Player Won 🥳';
        }
        return playerSelection + ' beats ' + computerSelection;
    } else {

        computerPoints.textContent = `Point: ${++cp}`
        if (cp === 5) {
            result.appendChild(resetBtn);
            return 'Computer Won 🤖';
        }
        return computerSelection + ' beats ' + playerSelection;
    }
}

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        return 'paper';
    } else if (computerSelection === 1) {
        return 'rock';
    } else {
        return 'scissor';
    }
}

function game(playerSelection) {


    if (up === 5 || cp === 5) {
        
        return;
    }
    const computerSelection = getComputerChoice();
    const userEntered = document.querySelector('.player-score > .score');
    userEntered.textContent = `${playerSelection} \t`;
    const computerEntered = document.querySelector('.computer-score > .score');
    computerEntered.textContent = `${computerSelection} \t`;
    const resultText = document.querySelector('.result > .result-text');
    resultText.textContent = `${playRound(playerSelection, computerSelection)} \t`


}


resetBtn.addEventListener('click', function () {
    location.reload(); // Refreshes the page
});
const btnRock = document.querySelector('.btnRock');
btnRock.addEventListener('click', function () {
    game('rock')
});
const btnPaper = document.querySelector('.btnPaper');
btnPaper.addEventListener('click', function () {
    game('paper')
});
const btnScissor = document.querySelector('.btnScissor');
btnScissor.addEventListener('click', function () {
    game('scissor')
});

