

console.log("Target Number:", targetNumber);
var form = document.getElementById("form");
var targetNumber = Math.floor(Math.random()*100+1);
console.log(targetNumber);
var guessCount = 0;

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var userNumber = parseInt(document.getElementById("number").value);
    var img = document.querySelector("img")
    if (userNumber !== targetNumber) {
        guessCount++;
        if (userNumber < targetNumber) {
            document.querySelector("h1").innerHTML = "Too low!";
            img.outerHTML = `<img src="https://th.bing.com/th/id/OIG.Pvi1EUld6fBh4R55vj9y?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="">`
        } else if (userNumber > targetNumber) {
            document.querySelector("h1").innerHTML = "Too high!";
            img.outerHTML = `<img src="https://th.bing.com/th/id/OIG._wWcVAVJdick578rkVha?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="">`
        }
    } else {
        document.querySelector("h1").innerHTML = "Correct! It took you " + guessCount + " guesses.";
    }
});