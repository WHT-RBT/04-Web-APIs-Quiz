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

    document.getElementById("question-prompt").innerHTML = questionBank[currentQuestion].prompt;

  var choices = questionBank[currentQuestion].answers;
  var answersHolder = document.getElementById("answers-holder");
  for (var i = 0; i < choices.length; i++) {
    var choicesElement = document.createElement("button");
    choicesElement.textContent = choices[i];
    choicesElement.setAttribute('value', choices[i]);
    choicesElement.addEventListener("click",isCorrectAnswer);
    answersHolder.append(choicesElement);
  }
}
// correct answer function
function isCorrectAnswer(event) {
  console.log(event.target);
  var buttonEl = event.target;

//sound effects for wrong or correct answers
const correctaudio = new Audio("./Assets/audio/correctaudio.wav");
const wrongaudio = new Audio("./Assets/audio/wrongaudio.wav");

// variable/event target for incorrect
  if (buttonEl.value === questionBank[currentQuestion].correctAnswer[0]) {
    alert("Correct! Good Job! +5 seconds!");
    correctaudio.play();
    addTime(); // add 5 seconds if the answer is correct
  score += 10; // update the score if the answer is correct
  } else {
  alert("INCORRECT! -10 SECONDS!");
  wrongaudio.play();
  removeTime(); // remove 10 seconds if the answer is incorrect
}
userScore.innerHTML = score; 
}
function addTime() {
  secondsRemaining += 5;
}

function removeTime() {
  secondsRemaining -= 10;
  if (secondsRemaining < 0) {
    secondsRemaining = 0; // set secondsRemaining to zero if it becomes negative
  }
}

// next question function

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questionBank.length) {
    currentQuestion = questionBank[currentQuestion];
  }
}

// end quiz function
function endQuiz() {
  // redirect/reload??
}

//function to get the users score
function getScore() {
  return secondsRemaining;
}

//function to save the users score in local storage
function saveScore() {
  const name = prompt("Please enter your name:");
  if (name) {
    const scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.push({ name, score: getScore() });
    localStorage.setItem("scores", JSON.stringify(scores));
    displayHighScores(); 
  }
}

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
