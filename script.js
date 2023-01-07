
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


 function playRound(playerSelection, computerSelection) {
     
     
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose!" + " " + "Your score is" + " " + playerScore + "Computer Score is" + " " + ++computerScore;
    }

    else if (playerSelection === "rock" && computerSelection === "rock") {
        return "Hey, it is a tie game!"+ " " + "Your score is" + " " + playerScore + "Computer Score is" + " " + computerScore;
    }

    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Hey you won! Rock beats scissors!" +  "Your score is" + " " + ++playerScore + "Computer Score is" + " " + computerScore;
    }
     
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper!" + " " + "Your score is" + " " + playerScore + "Computer Score is" + " " + ++computerScore;
    }

    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Rock beats paper!" + "Your score is" + " " + ++playerScore + "Computer Score is" + " " + computerScore;
    }

    else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Hey it is a tie game!" + "Your score is" + " " + playerScore + "Computer Score is" + " " + computerScore;
    }

    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Hey you won! Scisors beats paper!" + "Your score is" + " " + ++playerScore + "Computer Score is" + " " + computerScore;
    }

    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Hey you lost! Rock beats scissors!" +  " " + "Your score is" + " " + playerScore + "Computer Score is" + " " + ++computerScore;
    }

    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "hey, it is a tie game!" + "Your score is" + " " + playerScore + "Computer Score is" + " " + computerScore;
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
    playerSelection = "rock";
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
 function game() {
    
    for (let i = 0; i < 5 ; i++) {
        console.log(UserInput())
    }
    console.log(declareWinner());
 }
 
 console.log(game())
 
 