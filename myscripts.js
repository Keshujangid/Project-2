function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "match is tie";
    } else if (
        (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissor') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') ||
        (playerSelection.toLowerCase() === 'scissor' && computerSelection === 'paper')
    ) {
        return 'user won ' + playerSelection + ' beats ' + computerSelection;
    } else {
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    }
}

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        return 'paper';

    } else if (computerSelection === 1) {
        return 'rock';
    } else {
        return 'scisscor';
    }
    // console.log(computerSelection);
}

function game() {
    for (let i = 1; i <= 5; i++) {
        alert(`round ${i} \n`);
        let playerSelection = prompt('Enter rock/paper/scisscor', 'rock');
        if (playerSelection === null) {
            return console.log('game over');
        }
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissor') {
            alert('Invalid input. Please enter rock, paper, or scissor.');
            i--; // Decrement the loop counter to repeat the same round
            continue;
        }
        const computerSelection = getComputerChoice();
        console.log('User entered ' + playerSelection);
        console.log('Computer entered ' + computerSelection);
        console.log(playRound(playerSelection, computerSelection) + '\n');
    }
}

game();

