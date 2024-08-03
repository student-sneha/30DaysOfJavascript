let playerScore = 0;
let computerScore =0;
let moves =0;

const choices = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
const playScoreBoard = document.querySelector(".p-count");
const compScoreBoard = document.querySelector(".c-count");

/*-----------------------Generate Random computer choice--------------------------*/
const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random() *3);
    return options[ranIdx];
}

/*-------------------------Draw Game--------------------------------*/
const drawGame = () => {
    result.innerHTML = "It's a tie";
    result.style.color = "#696175";
}

/*------------------------ Show Winner --------------------------------*/
const showWinner = (userWin,playerChoice,computerChoice) =>{
    if(userWin) {
        playerScore++;
        playScoreBoard.innerHTML = playerScore;
        result.innerHTML = `You win!😊`;
        result.style.color ="green";
    }else{
        computerScore++;
        compScoreBoard.innerHTML = playerScore;
        result.innerHTML = "You lose!😔";
        result.style.color ="red";
    }
}

/*-------------------------PlayGame --------------------------------*/

const playGame = (playerChoice) =>{
        const computerChoice = genCompChoice();
        document.querySelector(".computerChoice").innerHTML = `Computer Choice ${computerChoice}`;

      if(playerChoice === computerChoice) {
        drawGame();
      }else {
       
        let userWin = true;
        if(playerChoice === "rock") {
          userWin = computerChoice === "paper" ? false : true;
        }else if(playerChoice === "paper"){
            userWin = computerChoice === "scissors" ? false :true;
        }else{
            userWin = computerChoice === "rock" ? false: true;
        }
        showWinner(userWin,playerChoice,computerChoice);
      }
};

/*------------------------Game over-------------------------------*/

const gameOver = (playerChoice,moveleft) =>{
    const move= document.querySelector(".move");
    const movesleft = document.querySelector(".movesleft");
    const comDisplay = document.querySelector(".computerChoice");
    const reload = document.querySelector('.reload');

    move.innerHTML = "GameOver!!😑";
    move.style.fontSize= "4rem";
    movesleft.style.display= "none";

    comDisplay.style.display ='none';

    choices.forEach(btn => {
        btn.style.display ='none';
})  
reload.style.display= 'flex';
       
reload.addEventListener('click', () =>{
    window.location.reload();
})

};

/*-------------------------Access the buttons--------------------------------*/
choices.forEach((btn) =>{
    btn.addEventListener("click", () => {
        const playerChoice = btn.getAttribute('id');
       
        const moveleft = document.querySelector(".movesleft");
        moves++;
        moveleft.innerHTML = `Moves Left : ${10 -moves}`;
       
        playGame(playerChoice);

        if(moves == 10){
            gameOver(playerChoice,moveleft);
        }
    });
});