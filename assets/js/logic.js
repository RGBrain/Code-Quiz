// Declare variables
let endScreen = document.getElementById("end-screen");
var startScreen = document.querySelector('#start-screen');
var feedback = document.getElementById("feedback");
var timer = document.querySelector(".timer");
var finalScore = document.getElementById("final-score");
var initialsField = document.getElementById("initials");
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");
var questionsScreen = document.getElementById("questions");
var interval;
// Keep track of current question 
var currentQuestionNumber = 0;

// Removes welcome screen
function clearScreen() 
{
    startScreen.textContent = "";
    var currentQuestionNumber = 0;
    return;
}

// Show when game has finished 
function endGame () 
{
    clearInterval(interval);
    initialsField.innerHTML = "";
    questionsScreen.classList.add("hide");
    //Show endscreen
    endScreen.classList.remove("hide");
    //Clear content
    startScreen.textContent = "";
    // Store score
    localStorage.setItem("highscore", time);  // ! CHANGE THIS, CREATE OBJECT INSTEAD
    // Remove timer
    timer.classList.add("hide");
    // Show score
    if (time > 0) 
    {
        finalScore.textContent = time;
    }
    else 
    {
        finalScore.textContent = "0 ...zero, zip, zilch, nada.  Have another try, and if you can't be right, at least be wrong quicker"
    }
}

// ! This is called when submit button is pressed.
function storeScore (initals) {
        // Store score
        console.log("time is: " + time)
        const playerDetails = {
            initials: "initials",
            highscore: time
        }
        localStorage.setItem("initials", "highscore");
}

//  !When submit button is pressed, need to trigger function (STORESCORE) that calls (at least) 2 functions.  One that is going to.... NEED TO - Empty text field BEFORE this point actually.  Need to grab initials from the field and  create object with initials and score and store in local storage, go to highscores? CHANGE PAGE TO HIGHSCORES

// ? localStorage stores key:value Pairs - need name and score. 

//add event listener to submit score button
var submitScore = document.getElementById('submit');
submitScore.addEventListener('click', storeScore("abc"));

//initialise timer
var time = 75;



function renderQuestion(index) {
    if (currentQuestionNumber >= questions.length) {
        endGame();
    }
    else
    {
    // Remove hide class from questions div
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
}

// grab timer 
var timeDisplay = document.getElementById("time");
timeDisplay.textContent = (time);
// Keep track of time
function myTimer()
{
    interval = setInterval(function () {
        if (time > 0) {
            time--;
            timeDisplay.textContent = time;
        }
        else {
            clearInterval(interval);
            endGame();
        }
    }, 1000)
}

function startButtonClicked() {
    myTimer();
    clearScreen();
    renderQuestion(currentQuestionNumber);
}

// Check if answer is correct and return boolean
function isCorrect (answer) 
{
    if (answer === questions[currentQuestionNumber].answer)
    {
        return true;
    }
    else 
    {
        return false;
    }
}

// Process answer and inform user whether correct or incorrect 
function handleAnswer (event) 
{
    var result = document.createElement("p");
    feedback.innerHTML = "";
    if (isCorrect(event.target.innerText)) 
    {
        // increment question number
        currentQuestionNumber++;
        // Show feedback to user
        feedback.classList.remove("hide");
        var result = document.createElement("p");
        feedback.appendChild(result);
        result.textContent = "Correct";
        // play "right" sound effect
        sfxRight.play();
        // next question
        renderQuestion(currentQuestionNumber);
    }
    else 
    {
        // -10 second time penalty
        time = time - 10;
        // increment question number
        currentQuestionNumber++;
        // Show feedback to user 
        feedback.classList.remove("hide");
        var result = document.createElement("p");
        feedback.appendChild(result);
        result.textContent = "Wrong";
        // play "wrong" sound effect
        sfxWrong.play();
        // next question
        renderQuestion(currentQuestionNumber);
    }
}

var buttons = choices.addEventListener('click', handleAnswer);

// Call function to clear screen when start button is pressed 
var startButton = document.getElementById("start");
startButton.addEventListener("click", startButtonClicked);
