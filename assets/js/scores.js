// Creates highschores list 

var scoreBoard = document.getElementById('highscores');
var playerName = localStorage.getItem('initials');
var playerScore = localStorage.getItem('highscore');
// create List item for score
var li = document.createElement('li');
li.textContent = (playerName + ": " + playerScore);
scoreBoard.appendChild(li); 

// Why is the new high score replacing the old one?

// Why are the last initials staying in the field?