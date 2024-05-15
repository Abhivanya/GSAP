gsap.from("#page1 #box", {
  rotate: 360,
  delay: 1,
  duration: 1,
});

gsap.from("#page2 #box", {
  rotate: 720,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body", // start according to
    markers: true,
    start: "top 50%",
    end: "top 10%",
    scrub: 2, //true,false , 1-5 rough - > very smooth
  },
});

gsap.from("#page3 #box", {
  rotate: 360,
  x: 400,
  delay: 1,
  duration: 1,
  scrollTrigger: "#page3 #box", //one line scrollTringer
});

gsap.from("#page4 #box", {
  rotate: 739,
  duration: 2,
  scrollTrigger: {
    trigger: "#page4 #box",
    scroller: "body",
    start: "top 50%",
    end: "top 40%",
    scrub: 2,
    markers: true,
  },
});
