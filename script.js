let humanScore = 0;
let computerScore = 0;
let currentScore = document.querySelector('#current-score')
let villainPicture = document.querySelector('#villain-img')
let winnerAnnouncementText = document.querySelector('#announcement')
let humanButtons = document.querySelectorAll('.human-selection-buttons button')

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

  // change image of villains
  
  switch (computerChoice) {
    case 'rock':
      villainPicture.src = './img/rock.jpg';
      break;
    case 'paper': 
      villainPicture.src = './img/paper.jpg';
      break;
    case 'scissors':
      villainPicture.src = './img/scissors.jpg';
      break;
  }

  if (humanChoice == computerChoice) {
    winnerAnnouncementText.textContent = ("It's a tie!");
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
}

function tabulateScore() {
  if (humanScore < 5 && computerScore < 5) {
    currentScore.textContent = `Current score - ${humanScore} : ${computerScore}`
  } else if (humanScore >= 5) {
    winnerAnnouncementText.textContent = "You are the winner! Press restart to play again!"
    currentScore.textContent = `Final score - ${humanScore} : ${computerScore}`
    // disable buttons after game over
    humanButtons.forEach(button => {
      button.disabled = true;
    });
  } else {
    winnerAnnouncementText.textContent = "You lost xD! Press restart to play again!"
    currentScore.textContent = `Final score - ${humanScore} : ${computerScore}`
    // disable buttons after game over
    humanButtons.forEach(button => {
      button.disabled = true;
    });
  }
}

function restart() {
  humanScore = 0;
  computerScore = 0;
  tabulateScore()
  villainPicture.src = './img/villains.jpg'

  // enable buttons again
  humanButtons.forEach(button => {
    button.disabled = false;
  })
}
