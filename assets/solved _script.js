// ELEMENTS
var timerEl = document.getElementById("timeleft");
var startBtn = document.getElementById("start");
var footer = document.querySelectorAll(".graded");

// CARD ELEMENTS
var startcardEl = document.getElementById("startcard");
var leaderboardEl = document.getElementById("leadergrades");
var viewScoresEl = document.getElementById("viewscores");
var quizcardEl = document.getElementById("quizcard");
var qTwoEl = document.getElementById("quizcard2");
var qThreeEl = document.getElementById("quizcard3");
var qFourEl = document.getElementById("quizcard4");
var qFiveEl = document.getElementById("quizcard5");
var qBonusEl = document.getElementById("quizcard6");
var finalscoreEl = document.getElementById("finalscore");
var highscoreEl = document.getElementById("leaderboard");

// NEXT QUIZ CARD BUTTONS
var q1nextBtnEl = document.getElementById("A5");
var q2nextBtnEl = document.getElementById("A10");
var q3nextBtnEl = document.getElementById("A15");
var q4nextBtnEl = document.getElementById("A20");
var q5nextBtnEl = document.getElementById("A25");
var q6nextBtnEl = document.getElementById("A30");
var submitBtnEl = document.getElementById("A31");
var goBackBtnEl = document.getElementById("A32");
var clearScoresBtnEl = document.getElementById("A33");


// ANSWER BUTTONS
document.getElementById("A1").addEventListener("click", isWrong);
document.getElementById("A2").addEventListener("click", isCorrect);
document.getElementById("A3").addEventListener("click", isWrong);
document.getElementById("A4").addEventListener("click", isWrong);
document.getElementById("A6").addEventListener("click", isWrong);
document.getElementById("A7").addEventListener("click", isWrong);
document.getElementById("A8").addEventListener("click", isWrong);
document.getElementById("A9").addEventListener("click", isCorrect);
document.getElementById("A11").addEventListener("click", isCorrect);
document.getElementById("A12").addEventListener("click", isWrong);
document.getElementById("A13").addEventListener("click", isWrong);
document.getElementById("A14").addEventListener("click", isWrong);
document.getElementById("A16").addEventListener("click", isCorrect);
document.getElementById("A17").addEventListener("click", isWrong);
document.getElementById("A18").addEventListener("click", isWrong);
document.getElementById("A19").addEventListener("click", isWrong);
document.getElementById("A21").addEventListener("click", isWrong);
document.getElementById("A22").addEventListener("click", isWrong);
document.getElementById("A23").addEventListener("click", isWrong);
document.getElementById("A24").addEventListener("click", isCorrect);
document.getElementById("A26").addEventListener("click", isTrick);
document.getElementById("A27").addEventListener("click", isTrick);
document.getElementById("A28").addEventListener("click", isTrick);
document.getElementById("A29").addEventListener("click", isTrick);
document.getElementById("A30").addEventListener("click", finalScore);
document.getElementById("A31").addEventListener("click", finalScore);

// CORRECT or INCORRECT COUNTERS
var ifCorrect = 0;
var ifWrong = 0;

// Timer Variables
var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

// TIMER FUNCTIONS
function startTimer() {
    setTimer();
    if (totalSeconds > 0) {
        interval = setInterval(function () {
            secondsElapsed++;
            renderTimer();
            if (secondsElapsed >= totalSeconds) {
                clearInterval(interval);
            }
        }, 1000);
    }
}

function setTimer() {
    totalSeconds = 2 * 60;
};

function resetTimer() {
    clearInterval(interval);
    totalSeconds = 2 * 60;
    secondsElapsed = 0;
    renderTimer();
};

function formatMinutes() {
    var secondsLeft = totalSeconds - secondsElapsed;
    var minutesLeft = Math.floor(secondsLeft / 60);
    var formattedMinutes;
    if (minutesLeft < 10) {
        formattedMinutes = "0" + minutesLeft;
    } else {
        formattedMinutes = minutesLeft;
    }
    return formattedMinutes;
};

function formatSeconds() {
    var secondsLeft = (totalSeconds - secondsElapsed) % 60;
    var formattedSeconds;
    if (secondsLeft < 10) {
        formattedSeconds = "0" + secondsLeft;
    } else {
        formattedSeconds = secondsLeft;
    }
    return formattedSeconds;
};

function renderTimer() {
    timerEl.innerHTML = "Timer: " + formatMinutes() + ":" + formatSeconds();
};

function isTrick() {
    footer.forEach(element => {
        element.textContent = "Trick Question! They are all excellent!";
    });
};

// CHECK IF ANSWER IS CORRECT/WRONG FUNCTIONS
function isCorrect() {
    ifCorrect++;
    footer.forEach(element => {
        element.textContent = "Correct!";
    });
};

function isWrong() {
    ifWrong++;
    footer.forEach(element => {
        element.textContent = "Wrong!";
    });
};

function clearFooter() {
    footer.forEach(element => {
        element.textContent = "";
    });
};

function finalScore() {
    var totalPoints = ifCorrect + ifWrong;
    var grade = Math.round((ifCorrect / totalPoints) * 100);
    document.getElementById("finalgrade").textContent = "Final Score: " + grade;
    return grade;
}

// NEXT BUTTON FUNCTIONS
startBtn.addEventListener("click", function () {
    countFrom = 60;
    startTimer();
    timerEl.innerHTML = renderTimer();
    startcardEl.style.display = "none";
    quizcardEl.style.display = "block";
});

q1nextBtnEl.addEventListener("click", function () {
    clearFooter();
    quizcardEl.style.display = "none";
    qTwoEl.style.display = "block";
});

q2nextBtnEl.addEventListener("click", function () {
    clearFooter();
    qTwoEl.style.display = "none";
    qThreeEl.style.display = "block";
});

q3nextBtnEl.addEventListener("click", function () {
    clearFooter();
    qThreeEl.style.display = "none";
    qFourEl.style.display = "block";
});

q4nextBtnEl.addEventListener("click", function () {
    clearFooter();
    qFourEl.style.display = "none";
    qFiveEl.style.display = "block";
});

q5nextBtnEl.addEventListener("click", function () {
    clearFooter();
    qFiveEl.style.display = "none";
    qBonusEl.style.display = "block";
});

q6nextBtnEl.addEventListener("click", function () {
    clearFooter();
    qBonusEl.style.display = "none";
    finalscore.style.display = "block";
});

q6nextBtnEl.addEventListener("click", function () {
    clearFooter();
    qBonusEl.style.display = "none";
    finalscoreEl.style.display = "block";
    resetTimer();
});

submitBtnEl.addEventListener("click", function () {
    clearFooter();
    finalscoreEl.style.display = "none";
    highscoreEl.style.display = "block";
    renderLeaderboard();
    ifCorrect = 0;
    ifWrong = 0;
});

goBackBtnEl.addEventListener("click", function () {
    clearFooter();
    highscoreEl.style.display = "none";
    startcardEl.style.display = "block";
});

clearScoresBtnEl.addEventListener("click", function () {
    localStorage.clear();
    leaderboardEl.textContent = "";
});

viewScoresEl.addEventListener("click", function () {
    highscoreEl.style.display = "block";
    startcardEl.style.display = "none";
    quizcardEl.style.display = "none";
    qTwoEl.style.display = "none";
    qThreeEl.style.display = "none";
    qFourEl.style.display = "none";
    qFiveEl.style.display = "none";
    qBonusEl.style.display = "none";
    finalscoreEl.style.display = "none";
    resetTimer();
});

// LOCAL STORAGE

function storedScore () {
    var userID = document.querySelector("#inputname").value;
    localStorage.setItem("user", userID);
    localStorage.setItem("grade", finalScore());
};

// RENDER LEADERBOARD

function renderLeaderboard () {
    storedScore ();
    var name = localStorage.getItem("user");
    var userGrade = localStorage.getItem("grade");
    var newUser = document.createElement("span");
    var newScore = document.getElementById("userscore").cloneNode(true);
    leaderboardEl.appendChild(newUser);
    leaderboardEl.appendChild(newScore);
    leaderboardEl.appendChild(document.createElement("br"));
    newUser.textContent = name;
    newScore.textContent = userGrade;
};
