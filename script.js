function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)

    switch(choice) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissor"
    }
}

function play(playerSelection, computerSelection){
    /** There are 3*3= 9 outcomes so list them all one by one ig*/

    if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissor"){
        return "You win! Rock beats scissor"
        
    }
    if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "paper"){
        return "You win! Scissor beats Paper"
    }
    if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        return "You win! Paper beats Rock"
    }

    if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "rock"){
        return "You lose! Rock beats scissor"
    }
    if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissor"){
        return "You lose! Paper beats scissor"
    }
    if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        return "You lose! Paper beats rock"
    }

    return "It's a tie"
}

function game() {
    
    let playerSelection;
    let computerSelection;
    let computer = 0;
    let player = 0;

    for(; ;) {
        playerSelection = prompt("Choose: ");
        computerSelection = getComputerChoice();

        let result = play(playerSelection, computerSelection);
        console.log(result)

        if(result.slice(4, 5) == "w") player++;
        else if(result.slice(4, 5) == "l") computer++;

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