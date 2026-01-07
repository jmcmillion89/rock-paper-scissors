const btns = document.querySelectorAll('button')

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        playRound(e.target.className.toString().toUpperCase())
    })
})


// Get computer choice
function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS']
    let randomNumber = Math.floor(Math.random() * 3)
    let computerChoice = choices[randomNumber]
    return computerChoice
}

// Declare score variables

const computerScoreDiv = document.querySelector('.computerscore')
const playerScoreDiv = document.querySelector('.playerscore')


// Logic for single round

    let computerScore = 0
    let playerScore = 0

function playRound(humanChoice) {
    let computerChoice = getComputerChoice()
    const scoreBoard = document.querySelector('.scoreboard')


    if (((humanChoice === 'ROCK') & (computerChoice === 'SCISSORS')) ||
        ((humanChoice === 'SCISSORS') & (computerChoice === 'PAPER')) ||
        ((humanChoice === 'PAPER') & (computerChoice === 'ROCK'))) {
        console.log (`${humanChoice} beats ${computerChoice}. You win this round!`)
        playerScore++
    }
    else if (humanChoice === computerChoice) {
        console.log (`You both chose ${humanChoice}. This round is a Tie!`)
    }
    else {
        console.log (`${computerChoice} beats ${humanChoice}. You lose this round!`)
        computerScore++
    }

    if ((computerScore === 5) || (playerScore === 5)) {
        if (computerScore === 5) {
            scoreBoard.textContent = `COMPUTER WINS THE GAME`
        }
        else {
            scoreBoard.textContent = 'PLAYER WINS THE GAME'
        }
        
    }
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`
    playerScoreDiv.textContent = `Player Score: ${playerScore}`
}