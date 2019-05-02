//Create Questions
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

//End Of Timer
var questionTimer = 0;
//Starting Timer
var startTimer = 15;

//Getting Question Div form DOM
var question = document.getElementById('question');
// timer ID from DOM
var timer = document.getElementById('timer');
// Current User Score
var userScore = 0;
// Choice A
const choiceA = document.getElementById('a');
// Choice B
const choiceB = document.getElementById('b');
// Choice C
const choiceC = document.getElementById('c');
// Choice D
const choiceD = document.getElementById('d');

// last Question of Object Model
const lastQuestionIndex = questions.length -1;
//Setting Current State of Question
var questionIndex = 0;

// Function for printing Question and Choices to DOM
function questionsIndex() {
    // Short hand for question
    var q = questions[questionIndex] ;
    //appending Question to DOM
    question.innerHTML = "</p>" + q.question + "<p>"
    //Appeneding Choice A
    choiceA.innerHTML = q.choiceA;
    //Appeneding Choice B
    choiceB.innerHTML = q.choiceB;
    //Appeneding Choice C
    choiceC.innerHTML = q.choiceC;
    //Appeneding Choice D
    choiceD.innerHTML = q.choiceD;
};

// Counter Function
function counter() {
    // If End Timer is Less than start timer
    if(questionTimer <= startTimer ){
        //Appened Timer Value to DOM
        timer.innerHTML = startTimer;
        //Decrement startTimer by one
        startTimer--;

    } else {
        //When Start Timer is Equal to zero
        startTimer == 0;
            if(questionIndex <= lastQuestionIndex){
                questionIndex++;
                questionsIndex();
            }
    }
};

setInterval(counter, 1000);

console.log(counter())

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

