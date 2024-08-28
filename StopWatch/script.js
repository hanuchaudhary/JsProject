let h1 = document.querySelector("h1");
let [hours, minutes, seconds] = [0, 0, 0];
let time = null;

function timer() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    h1.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function timerStarts() {
    if (time != null) {
        clearInterval(time);
    }
    time = setInterval(timer, 1000);
}

let start = document.querySelector(".play");

start.addEventListener("click",()=>{
    console.log(1);
});
