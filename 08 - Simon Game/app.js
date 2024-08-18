let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "purple", "green", "red"];

let level = 0;
let gameStart = false;
let highestScore = 0;

let heading = document.querySelector("#heading");
let h2 = document.querySelector("h2");

document.addEventListener("keypress", () => {
  if (gameStart == false) {
    console.log("Game is started!");
    gameStart = true;

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function UserFlash(btn) {
  btn.classList.add("user");
  setTimeout(function () {
    btn.classList.remove("user");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerHTML = `Level ${level}`;

  // random btn
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over!!`;
    let p = document.createElement("p");
    p.innerHTML =`Your score was <b>${level}</b> <br>Press any key to start`;
    p.classList.add("score");
  
    h2.append(p);
    h2.classList.add("game");
   
    document.querySelector("body").style.background = "red";
    setTimeout(function () {
      document.querySelector("body").style.background = "white";
    }, 150);
    reset();
  }
 
}

function btnPress() {
  let btn = this;
  UserFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  // last btn
  checkAns(userSeq.length - 1);
}

let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  gameStart = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}


