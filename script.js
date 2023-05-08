// variables
var question = 
var answers = 
var correctNotification = Audio("Assets\audio\correctanswer.wav")
var wrongNotification = Audio("Assets\audio\wronganswer.wav")
var tickingTimer = Audio("Assets\audio\tickingtimer.mp3")


startQuiz.onclick = startTimer;

function startTimer() {
  displayQuestion();

timer = setInterval(function() {
  secondsRemaining -= 1;
  console.log(secondsRemaining);

var timerDisplay = document.getElementById("theTimer");
  timerDisplay.textContent = secondsRemaining;

if (secondsRemaining === 0) {
  clearInterval(timer);
  window.location.href = "highscore.html";
  }
  }, 1000);
}

//quiz questions
var questions = [
  {
  question: "How do you print 'Hello World' in the console?",
  answers: {
  a: "msgbox.('Hello World')",
  b: "alertbox.('Hello World')",
  c: "log('Hello World').console",
  d: "console.log('Hello World')",
  correctAnswer: "d",
  },
  {
  question: "What type of Pop up boxes are available in JavaScript?",
  a: "Alert",
  b: "Confirm",
  c: "Prompt",
  d: "All of the above",
  correctAnswer: "c",
  },
  {
  question: "Commonly used data types DO NOT include:",
  a: "Booleans",
  b: "Strings",
  c: "Alerts",
  d: "Numbers",
  correctAnswer: "a",
  },
  {
  question: "Inside which file do we use to style our webpage?",
  a: "JavaScript file",
  b: "HTML file",
  c: "CSS file",
  d: "None of the above",
  correctAnswer: "c",
  },
  {
  question: "Arrays in JavaScript can be used to store ____.",
  a: "Numbers and strings",
  b: "Other arrays",
  c: "Booleans",
  d: "All of the above",
  correctAnswer: "d",
  },
];

// display questions
function displayQuestion() 
  document.getElementById("question").innerHTML ="";

  var question = document.createElement("h2");
  var currentQuestion = questions[currentIndex].title;
  titleElement.textContent = currentQuestion;

  var choices = questions[currentIndex].choices;

for (var i = 0; i < choices.length; i++) {
  var choicesElement = document.createElement("button");
  choicesElement.textContent = choices[i];
  choicesElement.onclick = isCorrectAnswer;
  }

// sound effects for wrong or correct answers
if (isCorrect) {
  ("#feedback").html("Correct! Good Job!").show();
  correctNotification.play();
}
else {
  ("#feedback").html("WRONG! Better luck on the next one.").show();
  wrongNotification.play();
}

//10seconds removed for incorrect answers
function isCorrectAnswer() {
  var answer = questions[currentIndex].answer;
  userAnswer = this.innerHTML;

function addTime() {
  secondsRemaining += 10;
}
function removeTime() {
  secondsRemaining -= 10;
}
function getScore() {
  return secondsRemaining;
}
localStorage.setItem("Score", secondsRemaining);

function getUserInfo() {
}
function saveScore() {
}
}