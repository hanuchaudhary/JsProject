function locomotiveScroll() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });
}
locomotiveScroll()

function navAnim() {
    gsap.to(".navp1 svg", {
        transform: "translateY(-100%)",
        scrollTrigger: {
            trigger: ".page1",
            scroller: "main",
            start: "top 0",
            end: "top -10%",
            scrub: true,
        }
    })

    gsap.to(".navp2 a", {
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger: {
            trigger: ".page1",
            scroller: "main",
            start: "top 0",
            end: "top -10%",
            scrub: true,
        }
    })
}
navAnim()

function loadingAnim() {
    let h1 = document.querySelectorAll(".titles h1")
    let book = document.querySelector(".page1 img")
    gsap.from(h1, {
        y: 30,
        opacity: 0,
        duration: .6,
        delay: .5,
        stagger: .3
    })
    gsap.from(book, {
        y: 30,
        opacity: 0,
        duration: .6,
        delay: 1,
        stagger: .3
    })
}
loadingAnim()

function bookAnim() {
    let container = document.querySelector(".imageContainer");
    let buy = document.querySelector(".cursor2");
    container.addEventListener("mouseenter", function () {
        gsap.to(buy, {
            opacity: .6,
            scale: 1
        })
    })
    container.addEventListener("mouseleave", function () {
        gsap.to(buy, {
            opacity: 0,
            scale: 0
        })
    })
    container.addEventListener("mousemove", function (dets) {
        gsap.to(buy, {
            left: dets.x,
            top: dets.y
        })
    })
}
bookAnim()

function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to(".cursor", {
            left: dets.x,
            top: dets.y,
        });
    });
    // document.querySelector("#child1").addEventListener("mouseenter",function(){

    // })

    // document.querySelector("#child1").addEventListener("mouseleave",function(){
    //   gsap.to("#cursor",{
    //     transform: 'translate(-50%,-50%) scale(0)'
    //   })
    // })
    document.querySelectorAll(".shop .item").forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            // alert("hey")
            gsap.to(".cursor", {
                transform: "translate(-50%,-50%) scale(1)",
            });
        });
        elem.addEventListener("mouseleave", function () {
            gsap.to(".cursor", {
                transform: "translate(-50%,-50%) scale(0)",
            });
        });
    });
}
cursorAnimation();

// document.querySelectorAll(".dets").forEach(function(elem){
//     elem.addEventListener("mouseover",function(){
        
//     })
// })

