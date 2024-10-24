function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const dynamicText = document.getElementById('dynamic-text');
const texts = ['Software Engineer', 'Fullstack Developer'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[textIndex];
  dynamicText.innerText = currentText.substring(0, charIndex);

  let speed = isDeleting ? 100 : 150;

  if (!isDeleting && charIndex === currentText.length) {
    speed = 1000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    speed = 500; 
  }

  if (isDeleting) {
    charIndex--; 
  } else {
    charIndex++;
  }

  setTimeout(type, speed);
}

document.addEventListener('DOMContentLoaded', () => type());

