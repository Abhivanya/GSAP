gsap.to("#box1", {
  x: 1200,
  duration: 1,
  delay: 1,
  rotate: 180,
  saggle: 1,
  yoyo: true,
  repeat: 1,
});
gsap.from("#box2", {
  x: 1200,
  duration: 1,
  delay: 1,
  rotate: 180,
  saggle: 1,
  repeat: -1,
  yoyo: true,
});
