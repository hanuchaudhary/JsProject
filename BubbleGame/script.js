var score = 0;
var hitrn = 0;
var timer = 60;

function bubbleMaking() {
    let panelBottom = document.querySelector(".panelBottom")
    let clutter = "";
    for (i = 1; i < 161; i++) {
        let rnum = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rnum}</div>`
    }

    panelBottom.innerHTML = clutter
}

function Runtimer() {
    var ti = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector(".timer").innerHTML = timer
        }
        else {
            clearInterval(ti);
            document.querySelector(".panelBottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

function hit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector(".hit").innerHTML = hitrn
}

function scoreInc() {
    document.querySelector(".score").innerHTML = score += 10
}

document.querySelector(".panelBottom").addEventListener("click",(details)=>{
    var clickedNumber = Number(details.target.textContent)
    console.log(clickedNumber)
    if(clickedNumber === hitrn){
        scoreInc();
        hit();
        bubbleMaking();
    }
})

bubbleMaking();
Runtimer();
hit();
