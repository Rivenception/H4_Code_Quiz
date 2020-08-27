var timerEl = document.querySelector("#navbar-text");
var startBtn = document.querySelector("#button");

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

startBtn.addEventListener("click", function() {
    var twoMinutes = 60 * 2,
        display = timerEl;
    startTimer(twoMinutes, display);
});

var x = setInterval(function() {
    var timer = 60;
    for (x = 60; x > 0; x--); 
        timer--;
        $("navbar-text").html(timer);
}, 1000);

startBtn.addEventListener("click", function(){
    var timer = 60;
    for (x = 60; x > 0; x--); 
        timer--;
        $("navbar-text").html(timer);
});

$("#button").on("click", function() {
    window.location.href='./test.html';
    var x = setInterval(function() {
    var timer = 60;
    for (x = 60; x > 0; x--); 
        timer--;
        $("navbar-text").html(timer);
}, 1000);
});

var timerEl = document.getElementsByClassName("navbar-text");
var startBtn = document.querySelector("button");
var timer = 60;


var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

function startTimer() {
    var minutes = 2;
    clearInterval(interval);
    totalSeconds = minutes * 60;

    // We only want to start the timer if totalSeconds is > 0
    if (totalSeconds > 0) {
    /* The "interval" variable here using "setInterval()" begins the recurring increment of the
        secondsElapsed variable which is used to check if the time is up */
        interval = setInterval(function() {
        secondsElapsed++;

        // So renderTime() is called here once every second.
        secondsDisplay.textContent = getFormattedSeconds();
        }, 1000);
    }
}

function getFormattedSeconds() {
    var secondsLeft = (totalSeconds - secondsElapsed) % 60;

    var formattedSeconds;

    if (secondsLeft < 10) {
        formattedSeconds = "0" + secondsLeft;
    } else {
        formattedSeconds = secondsLeft;
    }

    return formattedSeconds;
    }

    startBtn.addEventListener("click", startTimer);