// ? When the start button is pressed what will it do?
// clear screen 
function clearScreen() 
{
    var startScreen = document.querySelector('#start-screen');
    startScreen.textContent = "";
    return;
}

// TODO Split up the renderQuestion funtion 
// Use a for loop to pass i to function as argument 

function renderQuestion(index) {
    // Remove hide class from questions 
    var questionsScreen = document.getElementById("questions");
    questionsScreen.classList.remove("hide");
    // grab question elements 
    var questionTitle = document.getElementById("question-title");
    var answers = document.getElementById("choices");
    // add answer buttons 
    questionTitle.textContent = questions[index].title;
    for (j = 0; j < questions[index].choices.length; j++) 
    {
        var choice = document.createElement("button");
        choice.textContent = questions[index].choices[j];
        answers.appendChild(choice);
        
    }

}

var currentQuestionNumber = 0;

function startButtonClicked() {
    clearScreen();
    renderQuestion(currentQuestionNumber);
}

// TODO Event listener on buttons 

// TODO verify if correct 
// set time if wrong by -15 seconds 
// TODO NEED TO INCREMENT THIS AFTER CLICKED ANSWER
// call startButtonClicked function again (as current question number will be incremented)




// Call function to clear screen when start button is pressed 
var startButton = document.getElementById("start");
startButton.addEventListener("click", startButtonClicked);


// It will bring the first question on the page


// It will start the timer on the side of the screen


// How will it do ?
// We can target the button with document.querySelector
// We will have to add an event listener to the button when it is clicked
// We will target the element that holds the existing tags
// And make its textContent="" // as empty strings
// Now we will have to add the first question, In order to do that we will have to create few elements with the help of document.createElement()
// Then give each of them some value with textContent
// Finally add them to the page with appendChild()


// Now user can click either right or wrong answer.
// If they click wrong then reduce the remaining time by 15 seconds.



// Break everything in small chunks
// Divide responsibilities to functions
// For example:  one function for creating a question and rendering it to the page. 
// 			It can take an object as a parameter an extract data from that parameter and populate your question tags with data.