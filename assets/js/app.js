//Create Question
var questions = [
    {
    question : "At Dartmouth College in 1964 John Kemeny and Thomas Kurtz invented ____?", // Basic
    choiceA : "Basic",
    choiceB : "Algol",
    choiceC: "Fortran",
    choiceD: "C",
    correct : "a",
    },
    {
    question : "Who invented C++ ?", // Bjarne Stroustrup
    choiceA : "Larry Wall",
    choiceB : "Anders Hejlsberg",
    choiceC : "Bjarne Stroustrup",
    choiceD : "John Backus",
    correct : "c",
    },
    {
   question : "Which of these is not a functional programming language", // Fortran
   choiceA : "Erlang",
   choiceB : "Fortran",
   choiceC : "APL",
   choiceD : "Miranda",
   correct : "b",

    },
    {
   question : "A true or false statement put into code that the programmer expects to always be true is an ____. ", // assertion
   choiceA : "Exception",
   choiceB : "Expression",
   choiceC : "Harness",
   choiceD : "Assertion",
   correct : "d",
    },
    {
   question : "A section of code that responds to a particular interaction of the user with a gui control is called a ____?", // event handler
   choiceA : "Event Handler",
   choiceB : "Control Structure",
   choiceC : "Exception Handler",
   choiceD : "Dispatch Function",
   correct : "a",
    },
];

var questionTimer = 15;
var startTimer = 0

var question = document.getElementById('question');



var userScore = 0;

var wrongAnswer = 0;

var timer = document.getElementById('timer');

const choiceA = document.getElementById('a');
const choiceB = document.getElementById('b');
const choiceC = document.getElementById('c');
const choiceD = document.getElementById('d');

const lastQuestionIndex = questions.length -1;
let questionIndex = 0;


//Create function
function questionsIndex() {
    var q = questions[questionIndex] ;
    question.innerHTML = "</p>" + q.question + "<p>"
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
};


function counter() {
    if(startTimer <= questionTimer ){
        timer.innerHTML = startTimer;
        startTimer++;
    } else {
        startTimer = 0;
            if(questionIndex <= lastQuestionIndex){
                questionIndex++;
                questionsIndex();
            }
    }
};

var totalScore = (userScore / questions.length) * 100;

function checkanswer(answer) {
    if(questions[questionIndex].correct == answer){
        userScore++;
        console.log('correct')
        document.getElementById('score').innerHTML = userScore;
    } else {
        wrongAnswer++;
        console.log('incorrect')
    }
    if (questionIndex < lastQuestionIndex) {
        startTimer = 0;
        questionIndex++;
        questionsIndex();
    }
}



checkanswer();

setInterval(counter, 1000)
