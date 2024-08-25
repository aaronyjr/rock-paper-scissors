let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const res = Math.floor(Math.random() * 3);

  switch (res) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice(choice) {
  const humanChoice = prompt(
    "Please type 'rock' or 'paper' or 'scissors'"
  ).toLowerCase();

  if (
    humanChoice == "rock" ||
    humanChoice == "paper" ||
    humanChoice == "scissors"
  ) {
    return humanChoice;
  } else {
    getHumanChoice();
  }
}

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  let winnerAnnouncementText = document.querySelector('#announcement')

  if (humanChoice == computerChoice) {
    winnerAnnouncementText.textContent = ("It's a tie!");
    computerScore += 1;
    humanScore += 1;
  } else if (humanChoice == "rock") {
    if (computerChoice == "paper") {
      winnerAnnouncementText.textContent = "Paper beats rock, you lose!";
      computerScore += 1;
    } else if (computerChoice == "scissors") {
      winnerAnnouncementText.textContent = ("Rock beats scissors, you win!");
      humanScore += 1;
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "scissors") {
      winnerAnnouncementText.textContent = ("Scissors beats paper, you lose!");
      computerScore += 1;
    } else if (computerChoice == "rock") {
      winnerAnnouncementText.textContent = ("Paper beats rock, you win!");
      humanScore += 1;
    }
  } else if (humanChoice == "scissors") {
    if (computerChoice == "paper") {
      winnerAnnouncementText.textContent = ("Scissors beats paper, you win!");
      humanScore += 1;
    } else if (computerChoice == "rock") {
      winnerAnnouncementText.textContent = ("Rock beats scissors, you lose!");
      computerScore += 1;
    }
  }

  tabulateScore();
  // console.log(`Score - ${humanScore} : ${computerScore}`);
}

function tabulateScore() {

}

// Tabulate score
// Restart logic
// Change image of villain aft each round

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//   }
//   if (humanScore > computerScore) {
//     console.log("You win!");
//   } else if (computerScore > humanScore) {
//     console.log("You lose!");
//   } else {
//     console.log("It's a tie!");
//   }
//   console.log(`Final score - ${humanScore} : ${computerScore}`);
// }

// playGame();
