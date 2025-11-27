let humanScore = 0
let computerScore = 0

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]
  const randomChoice = Math.floor(Math.random() * choices.length)
  return choices[randomChoice]
}

function getHumanChoice() {
  let choice = prompt("Choose Rock, Paper or Scissors")
  return choice.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
  console.log(humanChoice, computerChoice)

  if ((humanChoice == 'rock') && (computerChoice == 'scissors')) {
    return humanScore += 1
  }

  else
    if ((humanChoice == 'scissors') && (computerChoice == 'paper')) {
    return humanScore += 1
  }

  else
    if ((humanChoice == 'paper') && (computerChoice == 'rock')) {
    return humanScore += 1
  }

  else
    if ((humanChoice == computerChoice)) {
    return
  }

  else{
    return computerScore += 1
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log ('You win!')
  }

  else if (computerScore > humanScore) {
    console.log ('You Lose!')
  }

  else {
    console.log ('You tied!')
  }

}

playGame()