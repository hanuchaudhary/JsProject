let hrs = document.querySelector(".hours")
let mins = document.querySelector(".mins")
let secs = document.querySelector(".secs")

setInterval(()=>{
    let date = new Date()
    var hours = addZero(date.getHours());
    var minutes = addZero(date.getMinutes());
    var seconds = addZero(date.getSeconds());
    function addZero(i){
        if (i<10) {i = '0' + i}
        return i
    }

    hrs.innerHTML = hours
    mins.innerHTML = minutes
    secs.innerHTML = seconds

},1000)

addZero()