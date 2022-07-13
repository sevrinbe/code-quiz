
var timeLeft = 89;
var element = document.getElementById("timer");
var timerId;
const startButton = document.getElementById("start-button")
const questionContainerEl = document.getElementById("question-container");
const questionBox = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer");
answerButtons.forEach(function (button){
    button.addEventListener("click", selectAnswer);
});
const introContent = document.getElementById("introduction-content");
var score = 0;
var currentQuestion = -1;
var timer;
var question;
var questions = [
    {
        questionText: "How to declare a variable in JavaScript?",
            answers: [
                {text: "Var", correct: true}, 
                {text: "For", correct: false}, 
                {text: "While", correct: false}, 
                {text: "If", correct: false}
            ]   
    },
    {
        questionText: "How many data types are there?",
            answers: [           
                {text: "5", correct: true}, 
                {text: "for", correct: false}, 
                {text: "while", correct: false}, 
                {text: "if", correct: false}
            ]
    },
    {
        questionText: "How is a function called?",
            answers: [           
                {text: "()", correct: true}, 
                {text: "for", correct: false}, 
                {text: "while", correct: false}, 
                {text: "if", correct: false}
            ]
    },
    {
        questionText: "What do you use to generate a random number in JavaScript?",
            answers: [
                {text: "Math.random", correct: true}, 
                {text: "for", correct: false}, 
                {text: "while", correct: false}, 
                {text: "if", correct: false}
            ]
    }
];
var resultText = document.querySelector(".result");

function endGame() {
    console.log("All done!")
    score = timeLeft;
    window.localStorage.setItem("score", timeLeft);
    location.href = "/scores.html";
}

function countdown() {
    if (timeLeft < 0) {
        clearInterval(timerId);
        endGame();
    } else {
        element.innerHTML = "Timer: " + timeLeft;
        timeLeft--;
    }
}

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("Started!");
    startButton.classList.add("hide");
    timerId = setInterval(countdown, 1000); 
    questionContainerEl.classList.remove("hide")
    introContent.classList.add("hide");
    setNextQuestion()
}

function setNextQuestion() {
    question = questions[++currentQuestion];
    if (question != undefined) {
        var answers = question.answers;
        var i=0; 
        console.log(answers);
        answers.forEach(function (answer){
        answerButtons[i++].innerHTML = answer.text;
        });
        questionBox.innerHTML = question.questionText;
    } else {
        endGame();
    }
}

function selectAnswer(event) {
    var answerText = event.target.innerHTML;
    var answers = question.answers;
    var correctAnswer;
    answers.forEach(function(answer){
        if (answer.correct === true) {
            correctAnswer = answer;      
        }
    });
    console.log(correctAnswer + " " + answerText)
    if (correctAnswer.text === answerText) {
        correct(); 
    } else {
        incorrect();
    }
    setNextQuestion();
}

function correct() {
    resultText.innerHTML = "Correct!";
}

function incorrect () {
    timeLeft -=25;
    resultText.innerHTML = "Wrong";
}

