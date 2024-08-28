let mode = document.querySelector('.mode')
let light = document.querySelector('.light')
let dark = document.querySelector('.dark')
let body =  document.querySelector("body")
let box =  document.querySelector(".box")
let btn =  document.querySelectorAll("button")

flag =0

mode.addEventListener("click",function(){
    if(flag==0){
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
        box.style.border = '1px solid white'
        light.style.visibility = 'visible'
        dark.style.visibility = 'hidden'
        btn[0].style.border = '1px solid white'
        btn[0].style.color = 'white'
        btn[1].style.border = '1px solid white'
        btn[1].style.color = 'white'
        flag = 1
    }

    else{
        body.style.backgroundColor = 'white'
        box.style.border = '1px solid #222'
        body.style.color = 'black'
        light.style.visibility = 'hidden'
        dark.style.visibility = 'visible'
        btn[0].style.border = '1px solid black'
        btn[0].style.color = 'black'
        btn[1].style.border = '1px solid black'
        btn[1].style.color = 'black'
        flag = 0
    }
})