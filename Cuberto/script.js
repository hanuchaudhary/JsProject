function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("main"),
      smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("main").style.transform
        ? "transform"
        : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
locomotiveAnimation();

let names = ["Instagram", "LinkedIn", "Dribble", "GitHub", "YouTube", "Behance", "Twitter"];
let socialHandles = document.querySelector(".socialHandles");
function socialElements(name) {
    let elements = document.createElement("div");
    elements.classList.add("elements")
    elements.innerHTML = `<div class="heading">
    <h1>${name}</h1>
    <i class="ri-arrow-right-up-line"></i>
    </div>
    <div class="movingHandles">
    <h1>${name}<i class="ri-arrow-right-up-line"></i></h1>
    <h1>${name}<i class="ri-arrow-right-up-line"></i></h1>
    <h1>${name}<i class="ri-arrow-right-up-line"></i></h1>
    <h1>${name}<i class="ri-arrow-right-up-line"></i></h1>
    <h1>${name}<i class="ri-arrow-right-up-line"></i></h1>
    <h1>${name}<i class="ri-arrow-right-up-line"></i></h1>
    <h1>${name}<i class="ri-arrow-right-up-line"></i></h1>
    <h1>${name}<i class="ri-arrow-right-up-line"></i></h1>
    </div>`
    socialHandles.appendChild(elements);
}
names.forEach((e) => {
    console.log(e);
    socialElements(e);
})

function cursorAnimation() {
    let container = document.querySelector(".container")
    container.addEventListener("mousemove", function (dets) {
        gsap.to(".cursor", {
            left: dets.x,
            top: dets.y,
        });
    });
}
cursorAnimation();

gsap.from(".page1Content h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.4,
    stagger: 0.3,
})

gsap.from(".page1Content .videoH1 video", {
    x: 110,
    opacity: 0,
    delay: 0.5,
    duration: 0.4,
})

gsap.from(".page3Headings h1", {
    transform: "translateY(100%)",
    opacity:0,
    scrollTrigger: {
        trigger: ".page3",
        scroller: "main",
        start: "top 60%",
        end: "top 0%",
        scrub: true,
        // markers : true
    }
})

// gsap.from(".cardsLeft .card", {
//     transform: "translateY(100%)",
//     duration: .5,
//     opacity:0,
//     scrollTrigger: {
//         trigger: ".page3",
//         scroller: "main",
//         start: "top 0%",
//         end: "top 0%",
//         scrub: 3,
//         markers: true
//     }
// })

let cards = document.querySelectorAll(".cardsLeft .card")
cards.forEach((e)=>{
    gsap.from(e, {
        transform: "translateY(100%)",
        delay: .5,
        stagger: .4,
        // opacity:0,
        scrollTrigger: {
            trigger: ".page3",
            scroller: "main",
            start: "top 10%",
            end: "top -50%",
            scrub: 3,
            // markers: true
        }
    })
})

let cards2 = document.querySelectorAll(".cardsRight .card")
cards2.forEach((e)=>{
    gsap.from(e, {
        transform: "translateY(100%)",
        stagger: .4,
        scrollTrigger: {
            trigger: ".page3",
            scroller: "main",
            start: "top 10%",
            end: "top -50%",
            scrub: 3,
            // markers: true
        }
    })
})



