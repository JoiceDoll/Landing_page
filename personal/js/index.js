document.addEventListener("DOMContentLoaded", registerScrollAnimations);

function registerScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#image_session_two_container", {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#image_session_two_container",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from("#text_session_two_container", {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#text_session_two_container",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".session_four_flex", {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".session_four_flex",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".card", {
    scale: 0.5, 
    opacity: 0, 
    duration: 0.5, 
    scrollTrigger: {
      trigger: ".card", 
      start: "top 80%", 
      toggleActions: "play none none none", 
    }
  });
}
