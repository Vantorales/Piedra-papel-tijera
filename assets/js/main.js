let player = 0
let computer = 0

const roundResult = document.querySelector('.roundResult')

const btns = document.querySelectorAll('button')

btns.forEach(btn => btn.addEventListener('click', () => playGame(btn.className)))

function playGame(playerChoice) {
    if (player < 5 && computer < 5) {
        const combos = [["piedra", "tijera"], ["papel", "piedra"], ["tijera", "papel"]]
        let computerChoice = getComputerChoice()

        if (playerChoice === computerChoice) {
            roundResult.textContent = "EMPATE"

        } else {
            for (const i of combos) {
                if (playerChoice === i[0] && computerChoice ===  i[1]) {
                    ++player
                    roundResult.textContent = `Vos ganás! ${capitalizeWord(i[0])} gana a ${capitalizeWord(i[1])}. Vamo! `
                    updateScore("p")

                } else if (computerChoice === i[0] && playerChoice ===  i[1]) {
                    ++computer
                    roundResult.textContent = `Vos perdés! ${capitalizeWord(i[0])} gana a ${capitalizeWord(i[1])}. Nop.`
                    updateScore("c")
                }
            }
        }
        
    } else if (player === 5) {
        roundResult.textContent = 'Ganaste crack!'
    } else if (computer === 5) {
        roundResult.textContent = "Perdiste :c sorry"
    }
}


function updateScore(roundWinner) {
    const playerScore = document.querySelector('.player')
    const compScore = document.querySelector('.comp')

    if (roundWinner === "p") {
        playerScore.textContent = player
    } else if (roundWinner === "c") {
        compScore.textContent = computer
    }
}


function getComputerChoice() {
    const choices = ["piedra", "papel", "tijera"]
    const randomNumber = Math.floor((Math.random() * 3))
    return choices[randomNumber]
}


function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}