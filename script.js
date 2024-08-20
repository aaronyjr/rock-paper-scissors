let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const res = Math.floor(Math.random() * 3)
    
    switch (res) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Please type 'rock' or 'paper' or 'scissors'").toLowerCase()

    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
        return humanChoice
    }
    else {
        getHumanChoice()
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a tie!")
        computerScore += 1
        humanScore += 1
    } 

    else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("Paper beats rock, you lose!")
            computerScore += 1
        } else if (computerChoice == "scissors") {
            console.log("Rock beats scissors, you win!")
            humanScore += 1
        }
    }
    
    else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log("Scissors beats paper, you lose!")
            computerScore += 1
        } else if (computerChoice == "rock") {
            console.log("Paper beats rock, you win!")
            humanScore += 1
        }
    }

    else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            console.log("Scissors beats paper, you win!")
            humanScore += 1
        } else if (computerChoice == "rock") {
            console.log("Rock beats scissors, you lose!")
            computerScore += 1
        }
    }

    console.log(`Score - ${humanScore} : ${computerScore}`)

}



function playGame() {
    for (let i = 0; i <= 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }
    if (humanScore > computerScore) {
        console.log("You win!")
    } else if (computerScore > humanScore) {
        console.log("You lose!")
    } else {
        console.log("It's a tie!")
    }
    console.log(`Final score - ${humanScore} : ${computerScore}`)
}

playGame()