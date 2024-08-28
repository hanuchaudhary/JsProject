let rect = document.querySelector("#rectangle")

rect.addEventListener("mousemove",(dets)=>{
    let rectLocation = rect.getBoundingClientRect();
    console.log(dets.clientX - rectLocation.left);
})