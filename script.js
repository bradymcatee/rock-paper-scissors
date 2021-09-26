let count = 0;
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    const randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
        default:
            console.log('Random number is not between 0-2');
    }
}

function determineWinner(playerScore, computerScore){
    if (playerScore > computerScore){
        return 'You Win!';
    }
    else if(computerScore > playerScore){
        return 'Computer Wins!';
    }
    else{
        return 'It\'s a tie!';
    }

}

function updateScore(winner, score){

    if (winner === 'player'){
        player.textContent = 'Player : ' + score;
    }
    else if (winner === 'computer'){
        computer.textContent = 'Computer: ' + score;
    }

}

function playRound(playerSelection, computerSelection){

    if (count === 1){
        winner.textContent = '';
    }
    else if (count === 5){
        winner.textContent = determineWinner(playerScore, computerScore);
        count = 0;
        restartGame();
        return;
    }

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return 'It\'s a Tie!';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        updateScore('player', playerScore);
        return 'You win! Rock beats Scissors';
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        updateScore('computer', computerScore);
        return 'You lose! Paper beats Rock';
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        updateScore('player', playerScore);
        return 'You win! Paper beats Rock';
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        updateScore('computer', computerScore);
        return 'You lose! Scissors beats Paper';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++;
        updateScore('player', playerScore);
        return 'You win! Scissors beats Paper';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        updateScore('computer', computerScore);
        return 'You lose! Rock beats Scissors';
    }

    else {
        return 'Oops! Please enter either Rock, Paper, or Scissors';
    }
}

function restartGame(){  

    playerScore = 0;
    computerScore = 0;
    count = 0;
    result.textContent = '';
    player.textContent = 'Player: 0';
    computer.textContent = 'Computer: 0';
}

const buttons = document.querySelectorAll('.selection');
const result = document.querySelector("#results")
const winner = document.querySelector('#winner');
const computer = document.querySelector('#computer-score');
const player = document.querySelector('#player-score');

buttons.forEach( (button) => {
    button.addEventListener('click', () => {
        count++;
        result.textContent = (playRound(button.id, computerPlay()));
    });
});


