// script.js
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// Initialize AOS animations
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    once: true,
  });
});
gsap.to(".word", {
  y: 0,
  opacity: 1,
  duration: 1,
  ease: "power2.out",
  stagger: 0.3,
  delay: 0.2
});
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.registerPlugin(ScrollTrigger);

const paragraph = document.getElementById('para');
const rawHTML = paragraph.innerHTML; // contains <br>
paragraph.innerHTML = ''; // clear existing content

// Split by <br> but keep the <br> tag
const parts = rawHTML.split(/(<br\s*\/?>)/i); // keeps the <br> tag in the array

parts.forEach((part, i) => {
  if (part.match(/<br\s*\/?>/i)) {
    // If it's a <br> tag, just add it directly
    paragraph.appendChild(document.createElement('br'));
  } else {
    // Otherwise treat it as a sentence chunk
    const sentences = part.match(/[^.!?]+[.!?]*/g); // keep trailing punctuation
    if (sentences) {
      sentences.forEach((sentence, j) => {
        const span = document.createElement('span');
        span.className = 'sentence';
        span.innerHTML = sentence + ' ';
        paragraph.appendChild(span);

        gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: (i + j) * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: span,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        });
      });
    }
  }
});



ScrollSmoother.create({
  smooth: 3, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

// Optional: Add scroll-to-top button logic (if needed later)
// Optional: Add sticky nav behavior or dynamic scroll effects here

// Example: Add smooth scroll fallback (if CSS doesn't cover older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
