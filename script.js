
 function getComputerChoice() {
    let randomnumber = Math.floor(Math.random() * 3 + 1);

    if (randomnumber === 1) {
        return "rock";
    }
    else if (randomnumber === 2) {
        return "paper";
    }
    else if (randomnumber === 3) {
        return "scissors";
    }
}
const rockbutton = document.querySelector('.rockbutton');
const scissorbutton = document.querySelector('.scissorbutton');
const paperbutton = document.querySelector('.paperbutton');
const outcome = document.querySelector('.outcome');
const resetbutton = document.querySelector('.resetbutton')

 function playRound(playerSelection, computerSelection) {
    const outcomeDiv = document.querySelector('.outcome');

     
    if (playerSelection === "rock" && computerSelection === "paper") {
        const p = document.createElement('p');
        p.innerText =  "You lose!" + " " + "Your score is" + " " + playerScore + "Computer Score is" + " " + ++computerScore;
        outcomeDiv.appendChild(p);
    }

    else if (playerSelection === "rock" && computerSelection === "rock") {
        const p = document.createElement('p');
        p.innerText = "Hey, it is a tie game!"+ " " + "Your score is" + " " + playerScore + "Computer Score is" + " " + computerScore;
        outcomeDiv.appendChild(p);
    }

    else if (playerSelection === "rock" && computerSelection === "scissors") {
        const p = document.createElement('p')
        p.innerText = "Hey you won! Rock beats scissors!" +  "Your score is" + " " + ++playerScore + "Computer Score is" + " " + computerScore;
        outcomeDiv.appendChild('p')
    }
     
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        const p = document.createElement('p')
        p.innerText = "You lose! Scissors beats paper!" + " " + "Your score is" + " " + playerScore + "Computer Score is" + " " + ++computerScore;
        outcomeDiv.appendChild(p)
    }

    else if (playerSelection === "paper" && computerSelection === "rock") {
        const p = document.createElement('p')
        p.innerText = "You win! Rock beats paper!" + "Your score is" + " " + ++playerScore + "Computer Score is" + " " + computerScore;
        outcomeDiv.appendChild(p)
    }

    else if (playerSelection === "paper" && computerSelection === "paper") {
        const p = document.createElement('p')
        p.innerText = "Hey it is a tie game!" + "Your score is" + " " + playerScore + "Computer Score is" + " " + computerScore;
        outcomeDiv.appendChild(p)
    }

    else if (playerSelection === "scissors" && computerSelection === "paper") {
        const p = document.createElement('p')
        p.innerText = "Hey you won! Scisors beats paper!" + "Your score is" + " " + ++playerScore + "Computer Score is" + " " + computerScore;
        outcomeDiv.appendChild(p)
    }

    else if (playerSelection === "scissors" && computerSelection === "rock") {
        const p = document.createElement('p');
        p.innerText = "Hey you lost! Rock beats scissors!" +  " " + "Your score is" + " " + playerScore + "Computer Score is" + " " + ++computerScore;
        outcomeDiv.appendChild(p)
    }

    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        const p = document.createElement('p')
        p.innerText = "hey, it is a tie game!" + "Your score is" + " " + playerScore + "Computer Score is" + " " + computerScore;
        outcomeDiv.appendChild(p)
    }


}



 function declareWinner() {
    if (playerScore === computerScore) {
        return "Hey it is a tie game!";
    }
    else if (playerScore < computerScore) {
         return "Hey you lose!"
    }
    else if (playerScore > computerScore) {
        return "Hey you win!"
    }
 }
 
 function UserInput() {
    
    computerSelection = getComputerChoice();
    if (playerSelection.toLowerCase() == 'rock') {
        console.log(playRound(playerSelection, computerSelection));
    }
    else if (playerSelection.toLowerCase() == 'paper') {
        console.log(playRound(playerSelection, computerSelection));
    }
    else if (playerSelection.toLowerCase() == "scissors") {
        console.log(playRound(playerSelection, computerSelection));
    }

 }
 let playerScore = 0;
 let computerScore = 0;
 //function game() {
    //console.log(UserInput());
    //console.log(declareWinner());
 //}

 function finalScoreWinner() {
    const outcomeDiv = document.querySelector('.outcome');
    if (playerScore == 5) {
        const p = document.createElement('p');
        p.innerText = "Hey you reached 5 points! You win. Click Reset"
        outcomeDiv.appendChild(p)
    }
    else if (computerScore == 5) {
        const p = document.createElement('p');
        p.innerText = "Hey computer reached 5 points! You lost. Click Reset"
        outcomeDiv.appendChild(p)
    }
    else {
        const p = document.createElement('p');
        p.innerText = "Continue, play your next turn";
        outcomeDiv.appendChild(p)
    }
 }
 


rockbutton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    finalScoreWinner();
})

scissorbutton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    finalScoreWinner();
})

paperbutton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    finalScoreWinner();
})

resetbutton.addEventListener('click', () => {
    computerScore = 0;
    playerScore = 0;
})

 

 