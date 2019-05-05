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
    question.innerHTML = "</p>" + q.question + "<p>";
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
        startTimer == 15;
            //Increment through questions
            if(questionIndex <= lastQuestionIndex){
                questionIndex++;
                //change new question and Image 
                questionsIndex();
            }
    }
};

// Counter Interval



// console.log(counter())


// Math for displaying Total Score
// var totalScore = (userScore / questions.length) * 100;

var totalString = "YOU SCORED A "

function result() {
    document.getElementById('question').innerHTML = "";
    document.getElementById('timer').innerHTML = "";
    document.getElementById('answers').innerHTML = "";
    document.getElementById('score').innerHTML = "";
    var totalScore = (userScore / questions.length) * 100;
    document.getElementById('result').innerHTML = totalString + totalScore + '%';
}


// Check if User Guess is == answer
function checkanswer(answer) {
    //Checking if guess is correct
    if(questions[questionIndex].correct == answer){
        //Increment User Score
        userScore++;
        // console.log('correct')
        // appened user score to DOM
        document.getElementById('score').innerHTML = userScore;
        //else == incorrect
    } else if (questions[questionIndex].correct != answer){
        console.log('incorrect')
    }
    // starting
    if (questionIndex <= lastQuestionIndex) {
        questionsIndex();
        startTimer = 15;
        questionIndex++;
    }
}


function game(){
    if (questionIndex <= lastQuestionIndex){
        console.log('checking answer')
        checkanswer();
    } else {
        console.log('should be the end')
    }
}

game();

setInterval(counter, 1000);




