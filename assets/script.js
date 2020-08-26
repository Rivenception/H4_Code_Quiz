var timerEl = document.querySelector("#navbar-text");
var startBtn = document.querySelector("#button");

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