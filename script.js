// Declaring global variables
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var counter = document.getElementById("counter");
var quizBox = document.getElementById("quiz-box")
var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var scoreContainer = document.getElementById("scoreContainer");
var choiceContainer = document.getElementById("choices");
var timer = document.getElementById("timer");
var timeLeft = 60;
var score =0;
var highScores = JSON.parse(localStorage.getItem("scoreContainer")) || [];

var questions = [
    {
        question: "What is a block statement in JavaScript?",
        choiceA:  "Conditional Block",
        choiceB:"block that contains a single statement",
        choiceC:"block that combines a number of statements into a single compound statement",
        answer: "block that combines a number of statements into a single compound statement"
    },
    {
        question: "Which type of JavaScript language is ___?",
        choiceA:  "Object-Oriented",
        choiceB:"Object-Based",
        choiceC:"Assembly-language",
        answer: "Object-Based"
    },
    {
        // prompt: "Which one of the following also known as Conditional Expression?\n(a) If-then-else statement\n\ (b) Alternative to if-else\n\ (c) Switch statement\n\ (d) immediate if",
        question: "Which one of the following also known as Conditional Expression?",
        choiceA:  "If-then-else statement",
        choiceB:"Alternative to if-else",
        choiceC:"immediate if",
        answer: "immediate if"
    }
]
var finalQuestionIndex = questions.length - 1;
var runQuestionIndex =0;
var quest = questions[runQuestionIndex];
// a function to intake high scores
function saveHighScore(){
    preventeventDefault();

    var hScore = {
        scoreContainer: Math.floor(Math.random())
    }
    highScores.push(hScore);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(3);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("/");
}

// a function to intake rendering the questions to the buttons
function renderQuestion(){
    if(runQuestionIndex >= questions.length){
        endQuiz();
    } else {
        var quest = questions[runQuestionIndex];
        question.innerHTML = "<p>" + quest.question + "<p>";
        choiceA.innerHTML = quest.choiceA;
        choiceB.innerHTML = quest.choiceB;
        choiceC.innerHTML = quest.choiceC;
    }

}
// function checks the users response to see if it is correct or incorrect
function checkAnswer(event){
    var selectedChoice = event.target.textContent;
    console.log(selectedChoice)
    if(selectedChoice === quest.answer){
        score++;
        console.log("correct!")
    } else {
        console.log("false")
    }
    runQuestionIndex++;
    renderQuestion();
}

function endQuiz(){
    document.getElementById("timerContainer").style.display="none";
    quizBox.style.display= "none";
}

function timerControl (){
    var timerInterval = setInterval(function(){
        timer.textContent=timeLeft;
        timeLeft --;
        if(timeLeft === 0){
            clearInterval(timerInterval);
            endQuiz();
        }
    },1000);
}

// function scoreRender (){
//     scoreContainer.style.display= "block";
//     var scoreShow = math.round(100 * score / questions.length);
//     scoreContainer.innerHTML = "<p>" + scoreShow + "%<p>"
// }


choiceContainer.addEventListener("click", checkAnswer)


start.addEventListener("click", function(){
    quizBox.style.display= "block";
    start.style.display="none";
    renderQuestion();
    timerControl();
})











// var score = 0
// var buttons = document.getElementById("list-items");
// var screen = document.getElementById("entire-page")
// // var jsQuestions= document.getElementById("question")
// var startGame = window.alert("Start Quiz")
// var timer = setTimeout()
 
// for(var i=0; i < questions.length; i++) {
//     var answer =window.prompt(questions[i.prompt])
//     if(answer == questions[i].answer){
//         score++;
//         alert("Correct!");
//     } else {
//         alert ("Wrong!")
//     }
// }
// alert("you got " + score + "/" + questions.length)





// // buttons.addEventListiner("click", function()) 

