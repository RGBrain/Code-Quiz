// ! This file is linked to highscores.html 

// This file only extracts data from local storage and displays to screen 


var scoreBoard = document.getElementById('highscores');
var playerName = localStorage.getItem('initials');
var playerScore = localStorage.getItem('highscore');
// create List item for score
var li = document.createElement('li');
li.textContent = (playerName + ": " + playerScore);
scoreBoard.appendChild(li); 