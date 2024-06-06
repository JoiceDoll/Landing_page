document.addEventListener("DOMContentLoaded", registerScrollAnimations);

function registerScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#grid_services", {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#grid_services",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from("#gallery", {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#gallery",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
}
