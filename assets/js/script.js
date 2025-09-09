// // script.js
// const hamburger = document.getElementById('hamburger');
// const navLinks = document.getElementById('nav-links');

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');

//   // Toggle with curly braces included
//   if (navLinks.classList.contains('active')) {
//     hamburger.textContent = "{ Close }";
//   } else {
//     hamburger.textContent = "{ Menu }";
//   }
// });

// // ✅ Initialize AOS animations
// document.addEventListener("DOMContentLoaded", function () {
//   AOS.init({
//     duration: 1000,
//     once: true,
//   });
// });

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// gsap.registerPlugin(ScrollTrigger);

// const paragraph = document.getElementById('para');
// const rawHTML = paragraph.innerHTML; // preserves <br>
// paragraph.innerHTML = '';

// const tempDiv = document.createElement('div');
// tempDiv.innerHTML = rawHTML;

// const paragraphs = tempDiv.querySelectorAll('p');

// paragraphs.forEach((p, i) => {
//   const styleClass = p.className; // "Regular", "Light", etc.
//   const text = p.innerHTML;

//   const sentences = text.match(/[^.!?]+[.!?]+/g); // split into sentences
//   if (sentences) {
//     sentences.forEach((sentence) => {
//       const span = document.createElement('span');
//       span.className = `sentence ${styleClass}`; // preserve font class
//       span.innerHTML = sentence + ' ';
//       paragraph.appendChild(span);

//       gsap.to(span, {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         delay: i * 0.2,
//         ease: 'power2.out',
//         scrollTrigger: {
//           trigger: span,
//           start: 'top 90%',
//           toggleActions: 'play none none none'
//         }
//       });
//     });
//   }

//   // Add <br><br> after each paragraph
//   if (i < paragraphs.length - 1) {
//     paragraph.appendChild(document.createElement('br'));
//     paragraph.appendChild(document.createElement('br'));
//   }
// });


// ScrollSmoother.create({
//   smooth: 3, // how long (in seconds) it takes to "catch up" to the native scroll position
//   effects: true, // looks for data-speed and data-lag attributes on elements
//   smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
// });

// // Optional: Add scroll-to-top button logic (if needed later)
// // Optional: Add sticky nav behavior or dynamic scroll effects here

// // Smooth scroll for anchor links using GSAP ScrollSmoother if available
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener("click", function (e) {
//     const href = this.getAttribute("href");
//     if (href && href.length > 1 && href.startsWith("#")) {
//       e.preventDefault();
//       const target = document.querySelector(href);
//       if (target) {
//         // Use GSAP ScrollSmoother if available
//         if (window.ScrollSmoother && window.ScrollSmoother.get) {
//           const smoother = window.ScrollSmoother.get();
//           if (smoother) {
//             smoother.scrollTo(target, true, "top top");
//           } else {
//             target.scrollIntoView({ behavior: "smooth", block: "start" });
//           }
//         } else {
//           target.scrollIntoView({ behavior: "smooth", block: "start" });
//         }
//       }
//     }
//   });
// });

// gsap.registerPlugin(ScrollTrigger);

// // Infinite scroll effect
// const galleryTrack = document.querySelector('.gallery-track');
// const galleryItems = gsap.utils.toArray('.gallery-track img');


// // Duplicate items for seamless loop
// // galleryItems.forEach(item => {
// //   let clone = item.cloneNode(true);
// //   galleryTrack.appendChild(clone);
// // });

// // Get total width of items
// // let totalWidth = galleryTrack.scrollWidth / 2; 

// // Create infinite loop tween
// // let loopTween = gsap.to(galleryTrack, {
// //   x: -totalWidth,
// //   ease: "none",
// //   duration: 20,  
// //   repeat: -1
// // });

// // Speed control on scroll
// // ScrollTrigger.create({
// //   trigger: ".gallery-section",
// //   start: "top bottom",
// //   end: "bottom top",
// //   onUpdate: (self) => {
// //     const scrollVelocity = self.getVelocity();
// //     const newSpeed = gsap.utils.clamp(0.3, 3, Math.abs(scrollVelocity) / 500);
// //     loopTween.timeScale(newSpeed);
// //   }
// // });

// gsap.registerPlugin(SplitText, ScrollTrigger);

// function setupWordAnimation(selector) {
//   document.querySelectorAll(selector).forEach((el) => {
//     // Clear any previous split if exists (for hot reloads or refresh issues)
//     if (el._split) {
//       el._split.revert(); // This undoes the SplitText change
//     }

//     const split = new SplitText(el, { type: "words" });
//     el._split = split; // Store reference for cleanup later

//     split.words.forEach((word, index) => {
//       // Wrap word content
//       const wrapper = document.createElement("span");
//       wrapper.classList.add("word-wrapper");

//       const inner = document.createElement("span");
//       inner.textContent = word.textContent;

//       wrapper.appendChild(inner);
//       word.replaceWith(wrapper);

//       gsap.fromTo(inner,
//         { y: "100%", opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.8,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: wrapper,
//             start: "top 85%",
//             toggleActions: "play none none reverse",
//             once: false,    
//           },
//           delay: index * 0.15,
//         });
//     });
//   });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   setupWordAnimation(".reveal-text");
// });

// document.getElementById("viewMoreBtn").addEventListener("click", function (e) {
//   e.preventDefault(); // stop scrolling to top

//   const hiddenSection = document.getElementById("more-menu-items");
//   hiddenSection.classList.toggle("hidden");

//   if (hiddenSection.classList.contains("hidden")) {
//     this.innerHTML = `View More`;
//   } else {
//     this.innerHTML = `View Less`;
//   }
// });

//  document.getElementById("whatsappForm").addEventListener("submit", function (e) {
//     e.preventDefault();

//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let message = document.getElementById("message").value;

//     // WhatsApp number (no spaces, include country code)
//     let phone = "919744803767"; 

//     // Format the message
//   let whatsappMessage = `Hey there! You’ve got a new message %0A%0A I’m *${name}*%0A My Email: ${email}%0A Message:%0A "${message}"%0A%0A Can’t wait to hear back from you!`;

//     // Open WhatsApp with prefilled message
//     let whatsappURL = `https://wa.me/${phone}?text=${whatsappMessage}`;
//     window.open(whatsappURL, "_blank");
//   });

// script.js
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  // Toggle with curly braces included
  if (navLinks.classList.contains('active')) {
    hamburger.textContent = "{ Close }";
  } else {
    hamburger.textContent = "{ Menu }";
  }
});

// ✅ Initialize AOS animations
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    once: true,
  });
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function animateSentences(container) {
  const rawHTML = container.innerHTML.trim();
  container.innerHTML = "";

  // Split by <br> so intro breaks correctly
  const parts = rawHTML.split(/<br\s*\/?>/i);

  parts.forEach((part, i) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = part.trim();

    const nodes = Array.from(tempDiv.childNodes);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    nodes.forEach((node, j) => {
      if (node.nodeType === 3) {
        // ✅ FIX: trim text so it's not just whitespace
        const cleanText = node.textContent.trim();
        if (!cleanText) return;

        const sentences =
          cleanText.match(/[^.!?]+[.!?]*\s*/g) || [cleanText];

        sentences.forEach((sentence, k) => {
          const span = document.createElement("span");
          span.className = "sentence";
          span.innerHTML = sentence + " ";
          container.appendChild(span);

          gsap.set(span, { opacity: 0, y: 20 });

          timeline.to(
            span,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            j * 0.4 + k * 0.3 // stagger
          );
        });
      } else if (node.nodeType === 1 && node.tagName === "IMG") {
        // Animate <img>
        container.appendChild(node);

        gsap.set(node, { opacity: 0, y: 30 });
        timeline.to(
          node,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          j * 0.4
        );
      }
    });

    if (i < parts.length - 1) {
      container.appendChild(document.createElement("br"));
    }
  });
}

// Add a new timeline to animate the intro-text container itself
const introContainerTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro-text h2",
    start: "top 90%",
    toggleActions: "play none none none",
  },
});

// Set initial state for the entire h2 and then animate its opacity
gsap.set(".intro-text h2", { opacity: 0 });
introContainerTimeline.to(".intro-text h2", { opacity: 1, duration: 1.5, ease: "power2.out" });

// Apply to intro
const introText = document.querySelector("#intro h2");
if (introText) animateSentences(introText);

// Apply to story
const storyPara = document.getElementById("para");
if (storyPara) {
  const paragraphs = storyPara.querySelectorAll("p");
  paragraphs.forEach((p) => animateSentences(p));
}

ScrollSmoother.create({
  smooth: 3, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

// Smooth scroll for anchor links using GSAP ScrollSmoother if available
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href && href.length > 1 && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        // Use GSAP ScrollSmoother if available
        if (window.ScrollSmoother && window.ScrollSmoother.get) {
          const smoother = window.ScrollSmoother.get();
          if (smoother) {
            smoother.scrollTo(target, true, "top top");
          } else {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        } else {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  });
});
gsap.registerPlugin(ScrollTrigger);

// Infinite scroll effect
const galleryTrack = document.querySelector('.gallery-track');
const galleryItems = gsap.utils.toArray('.gallery-track img');


// Duplicate items for seamless loop
// galleryItems.forEach(item => {
//   let clone = item.cloneNode(true);
//   galleryTrack.appendChild(clone);
// });

// Get total width of items
// let totalWidth = galleryTrack.scrollWidth / 2; 

// Create infinite loop tween
// let loopTween = gsap.to(galleryTrack, {
//   x: -totalWidth,
//   ease: "none",
//   duration: 20,  
//   repeat: -1
// });

// Speed control on scroll
// ScrollTrigger.create({
//   trigger: ".gallery-section",
//   start: "top bottom",
//   end: "bottom top",
//   onUpdate: (self) => {
//     const scrollVelocity = self.getVelocity();
//     const newSpeed = gsap.utils.clamp(0.3, 3, Math.abs(scrollVelocity) / 500);
//     loopTween.timeScale(newSpeed);
//   }
// });

gsap.registerPlugin(SplitText, ScrollTrigger);

function setupWordAnimation(selector) {
  document.querySelectorAll(selector).forEach((el) => {
    // Clean up previous SplitText and triggers
    if (el._split) {
      el._split.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger && el.contains(st.trigger)) {
          st.kill();
        }
      });
    }

    const split = new SplitText(el, { type: "words" });
    el._split = split;

    // Wrap words more efficiently
    split.words.forEach((word) => {
      const wrapper = document.createElement("span");
      wrapper.classList.add("word-wrapper");

      const inner = document.createElement("span");
      inner.textContent = word.textContent;

      wrapper.appendChild(inner);
      word.replaceWith(wrapper);
    });

    // Animate all words with a single GSAP call (uses stagger instead of per-loop delay)
    gsap.fromTo(
      el.querySelectorAll(".word-wrapper span"),
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power4.out",
        stagger: 0.15, // replaces index * 0.15
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
          once: false,
        },
      }
    );
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setupWordAnimation(".reveal-text");
});


document.getElementById("viewMoreBtn").addEventListener("click", function (e) {
  e.preventDefault(); // stop scrolling to top

  const hiddenSection = document.getElementById("more-menu-items");
  hiddenSection.classList.toggle("hidden");

  if (hiddenSection.classList.contains("hidden")) {
    this.innerHTML = `View More`;
  } else {
    this.innerHTML = `View Less`;
  }
});

 document.getElementById("whatsappForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // WhatsApp number (no spaces, include country code)
    let phone = "966 50 259 9777"; 

    // Format the message
  let whatsappMessage = `Hey there! You’ve got a new message %0A%0A I’m *${name}*%0A My Email: ${email}%0A Message:%0A "${message}"%0A%0A Can’t wait to hear back from you!`;

    // Open WhatsApp with prefilled message
    let whatsappURL = `https://wa.me/${phone}?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
  });



async function loadHero() {
  try {
    const res = await fetch("https://romantic-boat-069c786bab.strapiapp.com/api/hero?populate=*");
    const data = await res.json();
    const hero = data.data; // 👈 keep it consistent with Strapi’s structure
console.log("Hero data:", hero);
    const leftImage = hero.HeroImageLeft?.url;
    const rightImage = hero.HeroImageRight?.url;

if (leftImage) {
  document.querySelector(".hero-bg-left").innerHTML =
    `<img src="${leftImage}" alt="Left Hero">`;
}

if (rightImage) {
  document.querySelector(".hero-bg-right").innerHTML =
    `<img src="${rightImage}" alt="Right Hero">`;
}
  } catch (error) {
    console.error("Error loading hero images:", error);
  }
}

async function loadIntro() {
  try {
    const res = await fetch("https://romantic-boat-069c786bab.strapiapp.com/api/intro?populate=*");
    const data = await res.json();
    const intro = data.data.Image;

    // Set image dynamically
    document.getElementById("introImage").src =
      intro.url;
  } catch (error) {
    console.error("Error loading intro image:", error);
  }
}

async function loadOurStory() {
  try {
    const res = await fetch("https://romantic-boat-069c786bab.strapiapp.com/api/our-story?populate=*");
    const data = await res.json();
    const intro = data.data.Image;

    // Set image dynamically
    document.getElementById("OurStoryImage").src =
        intro.url;
  } catch (error) {
    console.error("Error loading intro image:", error);
  }
}

async function loadGallery() {
  try {
    const res = await fetch("https://romantic-boat-069c786bab.strapiapp.com/api/galleries?populate=*");
    const data = await res.json();
    const gallery = data.data;
    const galleryTrack = document.getElementById("galleryTrack");
    console.log("Gallery data:", gallery);

    galleryTrack.innerHTML = ""; // clear placeholder images

    // ✅ Append Strapi images
    gallery.forEach(item => {
      const imgUrl = item.Image?.url; // adjust if Strapi nests deeper
      if (imgUrl) {
        const img = document.createElement("img");
        img.src =  imgUrl;
        img.alt = "Gallery Image";
        galleryTrack.appendChild(img);
      }
    });

    // ✅ Get all current images
    const galleryItems = gsap.utils.toArray('#galleryTrack img');

    // ✅ Duplicate items for seamless looping
    galleryItems.forEach(item => {
      let clone = item.cloneNode(true);
      galleryTrack.appendChild(clone);
    });

    // ✅ Recalculate total width AFTER duplication
    let totalWidth = galleryTrack.scrollWidth / 2;

    // ✅ Create infinite loop tween
    let loopTween = gsap.to(galleryTrack, {
      x: -totalWidth,
      ease: "none",
      duration: 20,  // larger number = slower scroll
      repeat: -1
    });

    // ✅ Scroll speed control
    ScrollTrigger.create({
      trigger: ".gallery-section",
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const scrollVelocity = self.getVelocity();
        const newSpeed = gsap.utils.clamp(0.3, 3, Math.abs(scrollVelocity) / 500);
        loopTween.timeScale(newSpeed);
      }
    });

  } catch (error) {
    console.error("Error loading gallery:", error);
  }
}

async function loadMenu() {
  try {
    const res = await fetch("https://romantic-boat-069c786bab.strapiapp.com/api/menu-items?populate=*");
    const data = await res.json();

    const menuGrid = document.getElementById("menuGrid");
    menuGrid.innerHTML = "";

    const items = data.data;
    const initialItems = items.slice(0, 4);
    const hiddenItems = items.slice(4);

    // Render first 4
    initialItems.forEach(item => {
      menuGrid.innerHTML += createMenuItem(item);
    });

    // Create hidden section
    const hiddenDiv = document.createElement("div");
    hiddenDiv.classList.add("menu-grid", "hidden");
    hiddenDiv.id = "more-menu-items";

    hiddenItems.forEach(item => {
      hiddenDiv.innerHTML += createMenuItem(item);
    });

    // Insert after menuGrid
    menuGrid.insertAdjacentElement("afterend", hiddenDiv);

  } catch (err) {
    console.error("Error loading menu:", err);
  }
}

function createMenuItem(item) {
  const title = item.Name;
  const price = item.Price;
  const imageUrl = item.Image?.url 
    ? item.Image.url
    : "placeholder.jpg";

  return `
    <div class="menu-item">
      <div class="menu-text"><span>${title}</span></div>
      <img src="${imageUrl}" alt="${title}" />
      <div class="menu-text"><span class="price">${price} SAR</span></div>
    </div>
  `;
}




// Call both loaders after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  loadIntro();
  loadHero();
  loadOurStory();
  loadGallery();
  loadMenu();
});