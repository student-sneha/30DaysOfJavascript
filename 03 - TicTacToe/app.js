const boxes = document.querySelectorAll(".box");
const restart = document.querySelector(".restart");
const result = document.querySelector(".result");
const h1 = document.querySelector("#heading");
const body = document.querySelector("body");
const playerTurn = document.querySelector(".turn");

let turnO = true;

const winnerPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [6, 7, 8],
  [3, 4, 5],
];

const showWinner = (winner) => {
  disabledBoxes();
  body.style.background = "#082751";

  result.innerHTML = `🎉 Winner is ${winner}`;

  restart.innerHTML = "Play Again";
  restart.style.background = "#76d5fe";
  restart.style.color = "#082751";

  restart.addEventListener("click", () => {
    window.location.reload();
  });
};
const disabledBoxes = () => {
      boxes.forEach((box) => {
        box.style.display = "none";
      });

      playerTurn.style.display = "none";

      h1.style.display = "none";
};

const restartGame = () => {
  turnO = true;
  enableBox();
};

const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
    box.style.background = "#b1e7ff";
    playerTurn.innerHTML = "";
  }
};

const checkWinner = () => {
  for (let pattern of winnerPatterns) {
    let pos1 = boxes[pattern[0]].innerHTML;
    let pos2 = boxes[pattern[1]].innerHTML;
    let pos3 = boxes[pattern[2]].innerHTML;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      box.style.background = "#0286df";
      turnO = false;
    } else {
      box.innerHTML = "X";
      box.style.background = "#063977";
      turnO = true;
    }
    playerTurn.innerHTML = `Player:  ${box.innerHTML} turn`;
    box.disabled = true;

    checkWinner();
  });
});
restart.addEventListener("click", restartGame);
