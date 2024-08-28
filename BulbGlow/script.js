let btn = document.querySelector("button")
let bulb = document.querySelector('#bulb')

let flag = 0

btn.addEventListener('click',()=>{
    if (flag == 0){
        bulb.style.backgroundColor = 'yellow'
        btn.innerHTML = 'OFF'
        flag =1
        console.log('jali na');
    }
    else{
        bulb.style.backgroundColor = "transparent"
        btn.innerHTML = 'ON'
        flag = 0
        console.log('bhuji na');
    }
})