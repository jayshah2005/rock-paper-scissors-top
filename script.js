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
    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()) return "Tie!"
}