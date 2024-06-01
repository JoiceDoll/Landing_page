const sectionTwo = document.querySelector('#section-two');

sectionTwo.addEventListener("transitionend", () => {
    window.scrollTo({top:0, behavior: 'smooth'});
});