t1 = gsap.timeline();

t1.from("h2", {
  y: -20,
  duration: 1.5,
  opacity: 0,
});

t1.from("#nav-bar a", {
  y: -20,
  duration: 1.5,
  // delay: 0.5,
  opacity: 0,
  stagger: 0.3,
});

t1.from("h1", {
  y: -20,
  duration: 1.5,
  opacity: 0,
});
