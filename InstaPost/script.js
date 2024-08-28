let follow = document.querySelector(".post-title h4 span")
flag =0 
follow.addEventListener('click', () => {
    if(flag === 0){
        follow.innerHTML = 'Following'
        
        flag = 1
    }
    else{
        follow.innerHTML = 'Follow'
        follow.style.color = "#3578E5"
        follow.style.opacity = 1
        flag=0
    }


})

let like = document.querySelector(".like")
l = 0
like.addEventListener("click",()=>{
if (l==0) {
    like.style.color = "crimson"
    l=1
}
else{
    like.style.color = "#fff"
    l=0
}
})


let myArr = [
    {
        dp:"https://imgs.search.brave.com/dGj7aP3_7E5Vq97OrzejpLDzEBxWLkZX3epV5I8YcBQ/rs:fit:860:0:0/g:ce/aHR0cDovL21vb2Rv/ZmZkcC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDYv/bmFydXRvLXNoaXBw/dWRlbi13YWxscGFw/ZXItbmFydXRvLXdh/bGxwYXBlci1zYXN1/a2UtNTc1eDEwMjQu/anBn",
        story:"https://imgs.search.brave.com/vBq0xG1cXtbk0FmTBYblaWmWxN6iNOEfHQH4vD8YDo4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzZXQuY29t/L3cvZnVsbC9iLzYv/Yy82NzkwOS5qcGc",
        name: "naruto_og"
    },
    {
        dp:"https://imgs.search.brave.com/57vEEBBsyhQa2-FhGddGziRyg7WOKOdaEI0lcmM9m4w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzVlLzg0/L2QzLzVlODRkMzNj/MzZmOTExYmVlMmUx/OTAyYTAzMTE3NTEz/LS1vbmUtcGllY2Ut/bWFuZ2EtY2hvcHBl/ci5qcGc",
        story:"https://imgs.search.brave.com/-FrM0Xtcmtt-7Js14JxeKmyzPSp3aNs_OQjWu0LMTUk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZjLzc5/LzFjL2ZjNzkxY2Fm/MjIzYzViNjBiZWIz/ODgwMDFlZDJlMTA0/LmpwZw",
        name: "choppa"
    },
    {
        dp:"https://imgs.search.brave.com/Qn9NiNxAzGjo2h38kNEoMdcmdWOLIzeoYRZ9xXkU2k0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAyL2U0/LzM3LzAyZTQzN2Ey/Y2JjYjNjN2ViZmY3/NjhjZWRlMzUxZDg0/LS1pdGFjaGktYWth/dHN1a2ktc2FzdWtl/LXVjaGloYS5qcGc",
        story:"https://imgs.search.brave.com/ta8EZNHXuHp8tRqHDk6utuydov_r6IfHObDisW5Vb5o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU2LzE2/LzA4LzU2MTYwODNj/ZGFkMDA3MGQ5ODJj/M2ZkNWMyZDY4ZjM5/LS1uYXJ1dG8tY3V0/ZS1zYXN1a2UtYW5k/LWl0YWNoaS5qcGc",
        name: "itachi_uchiha"
    },
    {
        dp:"https://imgs.search.brave.com/hNQMpGJhm43s1YyoEYu7VhmLYb3koJlJC7-T7fQC29w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcXVvdGV0/aGVhbmltZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDcvR29qby0yLmpw/Zw",
        story:"https://imgs.search.brave.com/ogK6p7JYsBY_13AG8OGIRtlID0dpg-_O2Gr8zHNrbgs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9vdGFr/dWhlcm1pdC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDMvSnVqdXRzdS1L/YWlzZW4tR29qby12/cy1Ub2ppLmpwZw",
        name: "gojo_sataru"
    },
    {
        dp:"https://imgs.search.brave.com/0FPUVTjQnAGOYmM6RPo6A27tUv-NSBL1KojCcsWOJCQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zMy56/ZXJvY2hhbi5uZXQv/MjQwLzA0LzAyLzI5/NzUxMDQuanBn",
        story:"https://imgs.search.brave.com/KvMxoESCD0T1nQsGPpDDnglnqWyjYAB-E-oijUa1Ers/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzUzLzJl/L2FkLzUzMmVhZDI1/NGFiZDI4MWIxODNh/MTI0ZmNhN2ZhZGVi/LS1sdWZmeS1hbmQt/aGFuY29jay1vbmUt/cGllY2UtYm9hLWhh/bmNvY2suanBn",
        name: "boa_hancock"
    },
    {
        dp:"https://imgs.search.brave.com/Gc4KV9asfQrNEqPgkzMyDhLQBaaUcwjmbXbuRKSkcY0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q0L2Iw/LzE1L2Q0YjAxNThi/ZWYwZTdiZGIxZjY5/YWYxNDg1NGMyOGQ4/LS1zYWl0YW1hLW9u/ZS1wdW5jaC1tYW4u/anBn",
        story:"https://imgs.search.brave.com/yBGENVnZgP89UvFoIBS4t5mcANcRiOeIKNFEdItYEnk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2MwLzEw/Lzk0L2MwMTA5NDhi/YzE0ZGMzMjdmZjUy/NDA5OTc2MjM0Yjdi/LS1tYW5nYS1wb3Nl/cy1hbmltZS1ib3lz/LmpwZw",
        name: "saitama"
    },
    {
        dp:"https://imgs.search.brave.com/ncIIBK0fSocT6D_VQylAkP6hua-aRB9XmNIo9OG53Ek/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZmL2E5/LzhkL2ZmYTk4ZDI0/OGExY2RkMTE2ZTdi/NmQ5YzM3ZmM0YThi/LmpwZw",
        story:"https://imgs.search.brave.com/PVX_IuufZESkzFOUz11ACBHklqwjs8QXYnYRd8wZUp4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2IzLzgx/LzNkL2IzODEzZDk3/ODE4Nzg0OWFjZWE1/OWZmZjkwNzRiZWIz/LS1jaG9wcGVyLWFu/aW1lLWNvbWljcy5q/cGc",
        name: "law"
    },
    {
        dp:"https://imgs.search.brave.com/kbvcTIvcAs8adzmbdM5W5weToG8AO6F9KgHYadTauxM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzkyLzM0/LzRjLzkyMzQ0YzE5/ZTI3YTQyMWQxOTU4/YjQ5NzA2MWNkZjli/LmpwZw",
        story:"https://imgs.search.brave.com/0gR1-UJV1YrnJXjAxrk78dYZpVGooKjoVvfu9uV_EqQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9leHRl/cm5hbC1wcmV2aWV3/LnJlZGQuaXQvOTVi/R080ME5Ub2RZTkdy/cDNFMVJWUkZ5MzJ5/S3FCcldUS0NEbHhr/bURNTS5qcGc_YXV0/bz13ZWJwJnM9ZDE4/YWFhODEwNjAxMjMw/YmVhOWJmN2FkMmU4/MTBkYmUzZWMxNTU2/Mg",
        name: "shanks"
    },
    {
        dp:"https://imgs.search.brave.com/poqFjB8na11wsnrKm9Gww60oBvITPZEXE0nUvL6bFi0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9iZXN0/cHJvZmlsZXBpY3R1/cmVzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNi9a/ZW5pdHN1LVByb2Zp/bGUtSW1hZ2UtMTAw/NXgxMDI0LmpwZw",
        story:"https://imgs.search.brave.com/JgRImwc-84aVLHEOvlZHRihvhNHKUJBGgYAgjjRMVhE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzcyL2Q3/L2UyLzcyZDdlMmFj/MDU1NjU0YzlmM2Zk/MDJmNzU1MDAzNzEz/LmpwZw",
        name: "thunder"
    },
    {
        dp:"https://i.pinimg.com/564x/ad/35/81/ad3581384b9dcbd65639f107e95fa1cc.jpg",
        story:"https://i.pinimg.com/564x/01/3c/46/013c469910712e7c3387a542f4711669.jpg",
        name: "kakashi"
    },

]

var clutter =''
myArr.forEach(function(elem,idx){
    clutter+=`<div class="story">
    <div class="storyImg">
        <img id = "${idx}" src="${elem.dp}"
            alt="">
    </div>
    <p>${elem.name}</p>
</div>`
})

let main = document.querySelector("main")
let container = document.querySelector(".container")


document.querySelector(".stories").innerHTML = clutter
document.querySelector(".stories").addEventListener("click",function(dets){
    document.querySelector(".fullscreen").style.display = "block"
    document.querySelector(".fullscreen").style.transition = "all ease .3s"
    container.style.filter = "blur(1.5rem)"
    document.querySelector(".fullscreen").style.backgroundImage = `url(${myArr[dets.target.id].story})`
    // let time = setTimeout(()=>{
    //     document.querySelector(".fullscreen").style.display = "none"
    //     container.style.filter = "blur(0)"
    // },3000)

})
let screen = document.querySelector(".fullscreen")
let btn = document.querySelector("button")
btn.addEventListener("click",()=>{
    screen.style.display = 'none'
    container.style.filter = "blur(0)"
})

let popBtn = document.querySelector('.pop')
let post = document.querySelector(".post-main")
post.addEventListener("dblclick",()=>{
    popBtn.style.transform = "translate(-50%,-50%) scale(1)"
    setTimeout(()=>{
        popBtn.style.transform = "translate(-50%,-50%) scale(0)"
    },1000)
})