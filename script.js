// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Typing effect
const typingText = document.querySelector('.typing');
const phrases = ["Building cool things with code", "Turning ideas into pixels", "Crafting digital experiences"];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;

function type() {
  typingText.textContent = currentPhrase.join('');
  
  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
  }
  
  if (isDeleting && j >= 0) {
    currentPhrase.pop();
    j--;
  }
  
  if (j === phrases[i].length + 1) {
    isDeleting = true;
    setTimeout(type, 1500);
    return;
  }
  
  if (isDeleting && j === -1) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
    j = 0;
    currentPhrase = [];
  }
  
  setTimeout(type, isDeleting ? 50 : 80);
}

setTimeout(type, 1000);

// Form submission (demo)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Message sent! (This is a demo — connect Formspree or your backend for real emails)");
  this.reset();
});

// Theme toggle (for fun)
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.style.background = document.body.style.background === 'rgb(10, 10, 10)' ? '#f0f0f0' : '#0a0a0a';
  alert("Light mode coming soon! 🌞");
});
