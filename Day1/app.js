let moves = 0;
let playerScore = 0;
let comScore = 0;

const options = document.querySelectorAll(".btn");
const move = document.querySelector(".moves-left");
const result = document.querySelector(".result");
const playerScoreBoard = document.querySelector(".p-count");
const comScoreBoard = document.querySelector(".c-count");
const compChoiceDisplay =  document.querySelector(".com-choice");
const choiceweapon = document.querySelector(".move");
const restart  = document.querySelector(".restart");

const getChoice = () => {
  let option = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * 3);
  return option[random];
};

const winner = (playerScore,comScore)=>{
    if(playerScore > comScore){
        result.innerText = "User Win!!😊";
        result.style.background ="#58386a";
        result.style.color="#fff";
    }
    else if(playerScore < comScore){
        result.innerText = "Computer Win!!😔";
        result.style.background ="#994891";
        result.style.color="#fff";
    }
    else {
        result.innerText ="It's a Tie, Play Again";
        result.style.background ="#25222c";
        result.style.color="#fff";
    }
};


const gameOver = (playerChoice,move) =>{
   hideBtn();
 
   winner(playerScore,comScore);

   choiceweapon.innerText = "GAME OVER!!";
   choiceweapon.style.fontsize='4rem';

   restart.innerText = "Play Again";
   restart.style.margin="2rem";
   
   restart.addEventListener("click" ,()=>{
    window.location.reload();
   });
   
}

// to hide all the btns when game is complete
const hideBtn = ()=>{
    move.style.display='none';
  
    options.forEach(btn => {
        btn.style.display ='none';
    });
   
    compChoiceDisplay.style.display='none';
};


// Play Game 
const playGame = (playerChoice) => {

    //function to random computer choice
    const compChoice = getChoice();
    
    // computerChoice Display
    compChoiceDisplay.innerHTML = `Computer Choose ${compChoice}`;

    if(playerChoice == compChoice){
        result.innerText ="It's a Tie";
    }
    else{
        if(playerChoice == "rock"){  
            if(compChoice== "paper"){
                result.innerText = "Computer win😊";
                comScore++;
                comScoreBoard.innerText = comScore;
            }else{
                result.innerText = "User win😊";
                playerScore++;
                playerScoreBoard.innerText = playerScore;
            }
        }else if(playerChoice == "paper") { 
            if(compChoice== "scissor"){
                result.innerText = "Computer win😊";
                comScore++;
                comScoreBoard.innerText = comScore;
            }else{
                result.innerText = "User win😊";
                playerScore++;
                playerScoreBoard.innerText = playerScore;
            }
        }
        else  { 
            if(compChoice== "rock"){
                result.innerText = "Computer win😊";
                comScore++;
                comScoreBoard.innerText = comScore;
            }else{
                result.innerText = "User win😊";
                playerScore++;
                playerScoreBoard.innerText = playerScore;
            }
        }
    }
};

options.forEach((btn) => {
  btn.addEventListener("click", () => {
    const playerChoice = btn.getAttribute("id");

    moves++;
    move.innerHTML = `Moves left :${10 - moves}`;

    playGame(playerChoice);

    if (moves == 10) {
      console.log("Game Over!!");
      gameOver(playerChoice,move);
    }
    restart.addEventListener("click" ,()=>{
        window.location.reload();
    });    
  });
});
