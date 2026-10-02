gsap.registerPlugin(ScrollTrigger);

// Page load animation
gsap.from(".heading", { opacity: 0, y: -30, duration: 1 });

gsap.from(".stat", {
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.3,
  delay: 0.5
});

// Scroll animation: car scroll ke saath neeche jayegi
gsap.to(".car", {
  y: 500,
  scale: 1.3,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=2000",
    pin: true,
    scrub: 1
  }
});