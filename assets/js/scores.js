document.getElementById("return-to-index").addEventListener("click", function(){location.href = "/index.html";
});
var score = localStorage.getItem("score");
var scores = JSON.parse(localStorage.getItem('scores'));
if (scores === null){
    scores = new Array();
};
var initials = localStorage.getItem("initials");
document.getElementById("clear-button").addEventListener("click", clearScores);
localStorage.removeItem("score");
document.getElementById("submit-form").addEventListener("submit", function(event){
    event.preventDefault()
    saveScore();  
});

if (score != undefined) {
    document.querySelector(".enter-score").classList.remove("hide");    
};

function saveScore() {
    var initials = document.getElementById("input-initials").value;
    document.querySelector(".enter-score").classList.add("hide");
    scores.push({initials, score});
    localStorage.setItem('scores', JSON.stringify(scores));
    displayScores();
};


function displayScores() {
    var tableBody = document.getElementById("score-body");
    while(tableBody.hasChildNodes()) {
        tableBody.removeChild(tableBody.firstChild);
    }
    scores.forEach(score => {
        var row = tableBody.insertRow();
        var initialsCell = row.insertCell();
        var scoreCell = row.insertCell();
        scoreCell.innerHTML = score.score;
        initialsCell.innerHTML = score.initials;
        });
};



function clearScores() {
    var tableBody = document.getElementById("score-body");
    while(tableBody.hasChildNodes()) {
        tableBody.removeChild(tableBody.firstChild);
    }
    localStorage.clear();
    const clearScore = document.getElementById("clear-button");
};

