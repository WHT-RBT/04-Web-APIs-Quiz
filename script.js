// variables
let secondsRemaining;
let currentQuestion;
var score = 0;
const userScore = document.getElementById("score");
const highscoresButton = document.getElementById("highScores");
const instructions = document.getElementsByClassName("instructions");


//start quiz
function startQuiz() {
  console.log("Starting")
  hide()
  secondsRemaining = 25
  startTimer()
  currentQuestion = 0
  displayQuestion()
}

//WHEN start button is clicked, high score/start/instructions is hidden and ticking timer begins audio loop
function hide() {
  startButton.classList.add("hide")
  highscoresButton.style.display = "none"
  instructions[0].classList.add("hide")
}
function startTimer() {
  const tickingTimer = new Audio("./Assets/audio/tickingtimer.mp3");
  const timerDisplay = document.getElementById("timer");
  timer = setInterval(function () {
    secondsRemaining -= 1;
    timerDisplay.textContent = secondsRemaining;
  tickingTimer.play()
    if (secondsRemaining <= 0) {
      clearInterval(timer);
      endQuiz(); 
      console.log();
    }
  }, 1000);
}

//Display of quiz questions
function displayQuestion() {

    document.getElementById("question-prompt").innerHTML = questionBank[currentQuestion].prompt

  var choices = questionBank[currentQuestion].answers;
  var answersHolder = document.getElementById("answers-holder")
  for (var i = 0; i < choices.length; i++) {
    var choicesElement = document.createElement("button");
    choicesElement.textContent = choices[i];
    choicesElement.addEventListener("click",isCorrectAnswer)
    answersHolder.append(choicesElement)
  }
}

//10 seconds removed for incorrect answers
//userScore and save/display scoresit comm
function isCorrectAnswer(event) {
  console.log(event.target);

//need to add sound effects for wrong or correct answers
const correctaudio = new Audio("./Assets/audio/correctaudio.wav");
const wrongaudio = new Audio("./Assets/audio/wrongaudio.wav");

// create a variable that is going to hold the text content of event target
// compare that git variable to what the correct answer is

  if (event) {
    alert("Correct! Good Job! +5 seconds!");
    correctaudio.play();
  }
  else {
    alert("INCORRECT! -10 SECONDS!");
    wrongaudio.play();
  }
}
// function addTime() {
//   secondsRemaining += 5;
// }
// function removeTime() {
//   secondsRemaining -= 10;
// }
// function getScore() {
//   return secondsRemaining;
// }
// localStorage.setItem("Score", secondsRemaining);

// function getUserInfo() {
// }
// function saveScore() {
// }

let questionBank = [
  {
    prompt: "How do you print 'Hello World' in the console?",
    answers: ["msgbox.('Hello World')", "alertbox.('Hello World')", "log('Hello World').console", "console.log('Hello World')"],
    correctAnswer: ["console.log('Hello World')"],
  },
  {
  prompt: "What type of Pop up boxes are available in JavaScript?",
  answers: ["Alert", "Confirm", "Prompt", "All of the above"],
  correctAnswer: ["All of the above"],
  },
  {
  prompt: "Commonly used data types DO NOT include:",
  answers: ["Booleans", "Strings", "Alerts", "Numbers"],
  correctAnswer: ["Booleans"],
  },
  {
  prompt: "Inside which file do we use to style our webpage?",
  answers: ["JavaScript file", "HTML file", "CSS file", "None of the above"],
  correctAnswer: ["CSS file"],
  },
  {
  prompt: "Arrays in JavaScript can be used to store ____.",
  answers: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
  correctAnswer: ["All of the above"],
  },
];

const startButton = document.querySelector("#startQuiz");
startButton.addEventListener("click", startQuiz)