let computerScore = 0;
let playerScore = 0;

const result = document.querySelector("#result");
const options = ['Rock', 'Paper', 'Scissor']
const finalResult = document.querySelector('#finalResult');
const scoreBoard = document.querySelector('#scoreBoard');

// GUI
function presentOptions() {

    resetButtons();
    reset();

    options.forEach(option => {
        const button = document.createElement('button');
        button.id = option.toLowerCase();
        button.className = 'button options';
        button.textContent = option + '!';
        button.onclick = onclickOption;
        result.before(button)
    })
}

function resetButtons() {

    const buttons = document.querySelectorAll('button')

    Array.from(buttons).forEach((button) => button.remove())
}

function mainScreen() {
    const playButton = document.createElement('button')
    playButton.id = 'play'
    playButton.textContent = 'Play!'
    playButton.className = 'button'
    playButton.onclick = presentOptions 

    result.before(playButton)
}

// Game
function onclickOption(action) {
    const outcome = play(action.target.id, getComputerChoice())
    result.textContent = outcome
}

function updateScore() {
    const player = document.querySelector('#player')
    const computer = document.querySelector('#computer')

    player.textContent = 'Player: ' + playerScore
    computer.textContent = 'Computer: ' + computerScore

    checkForWinner();
}

function reset() {
    computerScore = 0;
    playerScore = 0;
    updateScore();

    result.textContent = ''
    finalResult.textContent = ''
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)

    switch(choice) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissor"
    }
}

function play(playerSelection, computerSelection){

    let result;

    if(playerSelection == "rock" && computerSelection == "scissor" || playerSelection == "scissor" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock"){
    result = "You win!"
    } else if(playerSelection == "scissor" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "scissor" || playerSelection == "rock" && computerSelection == "paper"){
        result = "You lose!"
    } else{
        result = "It's a tie"
    }

    if(result.slice(4, 5) == "w") {
        playerScore++;
        result += ` ${playerSelection} beats ${computerSelection}`
    }
    else if(result.slice(4, 5) == "l") {
        computerScore++;
        result += ` ${computerSelection} beats ${playerSelection}`
    }

    updateScore();

    return result
}

function checkForWinner() {
    if(playerScore == 5){
        finalResult.textContent = 'You win the game!'
        resetButtons();
        mainScreen();
    }
    if(computerScore == 5){
        finalResult.textContent = 'You lose the game!'
        resetButtons();
        mainScreen();
    }
}

mainScreen();
updateScore();