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
    /** There are 3*3= 9 outcomes so list them all one by one ig*/

    if(playerSelection == "rock" && computerSelection == "scissor" || playerSelection == "scissor" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock"){
    return "You win!"
    } else if(playerSelection == "scissor" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "scissor" || playerSelection == "rock" && computerSelection == "paper"){
        return "You lose!"
    } else{
        return "It's a tie"
    }
}

function game() {
    
    let playerSelection;
    let computerSelection;
    let computer = 0;
    let player = 0;

    for(; ;) {
        playerSelection = prompt("Choose: ").toLowerCase();
        computerSelection = getComputerChoice();

        while(playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissor') {
            playerSelection = prompt("Choose between rock, paper and scissor: ").toLowerCase();
        }

        let result = play(playerSelection, computerSelection);
        

        if(result.slice(4, 5) == "w") {
            player++;
            result += ` ${playerSelection} beats ${computerSelection}`
        }
        else if(result.slice(4, 5) == "l") {
            computer++;
            result += ` ${computerSelection} beats ${playerSelection}`
        }

        console.log(result);

        if(player == 5){
            console.log("You win the game!");
            break;
        }
        if(computer == 5){
            console.log("Computer wins the game!");
            break;
        }
    }
}