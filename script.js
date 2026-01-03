// Get computer choice
function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS']
    let randomNumber = Math.floor(Math.random() * 3)
    let computerChoice = choices[randomNumber]
    return computerChoice
}

// Get human choice
function getHumanChoice() {
    let humanChoice = prompt('ROCK, PAPER, or Scissors?').toUpperCase()
    return humanChoice
}

// Declare score variables

let computerScore = 0
let humanScore = 0

// Logic for single round



function playRound(humanChoice, computerChoice) {

    if (((humanChoice === 'ROCK') & (computerChoice === 'SCISSORS')) ||
        ((humanChoice === 'SCISSORS') & (computerChoice === 'PAPER')) ||
        ((humanChoice === 'PAPER') & (computerChoice === 'ROCK'))) {
        console.log (`${humanChoice} beats ${computerChoice}. You win this round!`)
        humanScore++
    }
    else if (humanChoice === computerChoice) {
        console.log (`You both chose ${humanChoice}. This round is a Tie!`)
    }
    else {
        console.log (`${computerChoice} beats ${humanChoice}. You lose this round!`)
        computerScore++
    }
    console.log(`===SCOREBOARD===`)
    console.log(`Player: ${humanScore}`)
    console.log(`Computer: ${computerScore}`)
}

// logic to play entire game

function playGame() {

    for (let round = 0; round < 5; round++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }

    if (computerScore > humanScore) {
        console.log('COMPUTER WINS THE GAME')
    }
    else if (humanScore > computerScore) {
        console.log('PLAYER WINS THE GAME!')
    }
    else {
        console.log('THE GAME WAS TIED!')
    }

}

playGame()