window.addEventListener("mousemove", (dets) => {
  var rectangle = document.querySelector(".rect");
  var Xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + rectangle.getBoundingClientRect().width / 2,
    window.innerWidth - rectangle.getBoundingClientRect().width / 2,
    dets.clientX
  );

  gsap.to(rectangle, {
    left: Xval,
    ease: Power3,
  });
});
