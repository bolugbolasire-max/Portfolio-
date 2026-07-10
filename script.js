const words = [
    "Full-Stack Developer",
    "Web Developer",
    "JavaScript Developer",
    "Information Technology Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){
        typing.textContent = currentWord.substring(0,charIndex++);
    }else{
        typing.textContent = currentWord.substring(0,charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if(charIndex === currentWord.length + 1){
        deleting = true;
        speed = 1500;
    }

    if(charIndex === 0){
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});