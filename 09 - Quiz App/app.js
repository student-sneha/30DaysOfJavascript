const container = document.querySelector(".container");
const choicesBox = document.querySelector(".choices");
const questionBox = document.querySelector(".question");
const nextbtn = document.querySelector(".nextbtn");
const scoreBoard = document.querySelector(".score");
const alert = document.querySelector(".alert");
const startBtn = document.querySelector(".startBtn");
const timer = document.querySelector(".timer");
const heading = document.querySelector("h1");

// Make an array of object that stores question, choices of question and answer
const quiz = [
  {
    question:
      "What type of CSS is generally recommended for designing large web pages?",
    choices: ["Inline", "Internal", "External", "None of the above"],
    answer: "External",
  },
  {
    question: "In JavaScript, what is a block of statement?",
    choices: [
      "Conditional block",
      "block that contains a single statement",
      "both conditional block and a single statement",
      "block that combines a number of statements into a single compound statement",
    ],
    answer:
      "block that combines a number of statements into a single compound statement",
  },
  {
    question: 'The "function" and "var" are known as ?',
    choices: ["Keywords", "Data types", "Declararion statements", "Prototypes"],
    answer: "Declararion statements",
  },
  {
    question:
      "Which of the following number object function returns the value of the number?",
    choices: ["toString()", "valueOf()", "toLocaleString()", "toPrecision()"],
    answer: "valueOf()",
  },
  {
    question: "In JavaScript the x===y statement implies that:",
    choices: [
      "Both x and y are equal in value, type and reference address as well.",
      "Both are x and y are equal in value only.",
      "Both are equal in the value and data type.",
      "Both are not same at all.",
    ],
    answer: "Both are equal in the value and data type.",
  },
];

// variable to track quiz state
let currentQuestionIdx = 0;
let score = 0;
let quizOver = false;
let timeLeft = 10;
let timeId = null;

// start button to s
startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    container.style.display = "block";
    startQuiz();
  });

// function to start quiz
const startQuiz = () => {
  timeLeft = 10;
  timer.style.display = "flex";
  nextbtn.style.display='none';
  restart();
  shuffleQuestion();
};

// Arrow function to show Questions
const showQuestion = () => {
  const questionDetails = quiz[currentQuestionIdx];
  let questionNum = currentQuestionIdx + 1;
  questionBox.textContent = `${questionNum}. ${questionDetails.question}`;
    
  choicesBox.textContent = "";

  questionDetails.choices.forEach((option) => {
    const button = document.createElement("div");
    button.innerText = option;
    button.classList.add("choice");
    choicesBox.appendChild(button);

    button.addEventListener("click", function () {
      checkAnswer(option);
    });
  });
  if (currentQuestionIdx < quiz.length) {
    startTimer();
  }
};

// function to check answer
const checkAnswer = (selectedChoice) => {
  const currentQuestion = quiz[currentQuestionIdx];

  // Check if the selected answer is correct
  if (selectedChoice === currentQuestion.answer) {
    displayAlert("Correct Answer");
    score++;
  } else {
    displayAlert(
      `Wrong answer!!  ${currentQuestion.answer} is the correct answer!`
    );
  }

  timeLeft = 10;
  currentQuestionIdx++;
  if (currentQuestionIdx < quiz.length) {
    showQuestion();
  } else {
    showScore();
    stopTimer();
  }
};

// function to show score
const showScore = () => {
  displayAlert("You have Compeleted Your Quiz!!😊");
  scoreBoard.innerHTML = `You Score <b>${score}</b> out of <b>${quiz.length}</b>!`;
  scoreBoard.style.fontsize ="4rem";
  resetGame();
};


const resetGame = () => {
  questionBox.textContent = "";
  choicesBox.textContent = "";
  nextbtn.style.display='block';
  nextbtn.textContent = "Play Again";
  nextbtn.style.background = "green";
  nextbtn.style.fontsize = "2rem";
  quizOver = true;
  timer.style.display = "none";
  heading.style.display = "none";
};

// function to show alert
const displayAlert = (msg) => {
  alert.style.display = "block";
  alert.textContent = msg;

  setTimeout(() => {
    alert.style.display = "none";
  }, 2000);
};

// function to Start timer
const startTimer = () => {
  clearInterval(timeId); //check for any exist timer
  timer.textContent = timeLeft;

  const countDown = () => {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft === 0) {
      const confirmUser = confirm(
        "Time Up! Do you want to play the quiz again"
      );
      if (confirmUser) {
        timeLeft = 10;
        startQuiz();
      } else {
        startBtn.style.display = "block";
        container.style.display = "none";
        return;
      }
    }
  };
  timeId = setInterval(countDown, 1000);
};

// function to stop the timer
const stopTimer = () => {
  clearInterval(timeId);
};

//function to shuffle question
const shuffleQuestion = () => {
  for (let i = quiz.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
  }
  currentQuestionIdx = 0;
  showQuestion();
};

const restart = () => {
    heading.style.display= "block";
};

nextbtn.addEventListener("click", () => {
  if (quizOver) {
    scoreBoard.textContent = "";
    currentQuestionIdx = 0;
    quizOver = false;
    score = 0;
    startQuiz();
  } else {
    checkAnswer();
  }
});
