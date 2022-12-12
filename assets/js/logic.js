let endScreen = getElementById(end-screen);



// Removes welcome screen
function clearScreen() 
{
    var startScreen = document.querySelector('#start-screen');
    startScreen.textContent = "";
    var currentQuestionNumber = 0;
    return;
}

//initialise timer
var time = 75;

// store sounds as variables
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function renderQuestion(index) {

    // Remove hide class from questions div
    var questionsScreen = document.getElementById("questions");
    questionsScreen.classList.remove("hide");
    
    // grab question elements 
    var questionTitle = document.getElementById("question-title");
    var answers = document.getElementById("choices");
    
    // Remove previous answer buttons
    answers.innerHTML = "";

    // Add question
    questionTitle.textContent = questions[index].title;

    // add answer buttons 
    for (j = 0; j < questions[index].choices.length; j++) 
    {
        var choice = document.createElement("button");
        choice.textContent = questions[index].choices[j];
        answers.appendChild(choice);
        answers.classList.add("answers");
    }
}

// Keep track of current question 
var currentQuestionNumber = 0;

// grab timer 
var timeDisplay = document.getElementById("time");
timeDisplay.textContent = (time);
// Keep track of time
function myTimer()
{
    var interval = setInterval(function () {
        if (time > 0) {
            time--;
            timeDisplay.textContent = time;
        }
        else {
            clearInterval(interval);
        }
    }, 1000)
}

function startButtonClicked() {
    myTimer();
    clearScreen();
    renderQuestion(currentQuestionNumber);
}

// Check if answer is correct and return boolean
function isCorrect (answer) {
    if (answer === questions[currentQuestionNumber].answer)
    {
        return true;
    }
    else 
    {
        return false;
    }
}

function handleAnswer (event) {
    if (isCorrect(event.target.innerText)) {
        currentQuestionNumber++;
        renderQuestion(currentQuestionNumber);
        // play "right" sound effect
        sfxRight.play();
        // TODO Show 'Correct'
    }
    else {
        time = time - 10;
        currentQuestionNumber++;
        renderQuestion(currentQuestionNumber);
        // play "wrong" sound effect
        sfxWrong.play();
        // TODO Show 'wrong'
    }
}

function endGame () {

}

var buttons = choices.addEventListener('click', handleAnswer);

// Call function to clear screen when start button is pressed 
var startButton = document.getElementById("start");
startButton.addEventListener("click", startButtonClicked);
