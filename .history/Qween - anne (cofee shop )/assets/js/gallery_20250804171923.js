const bigImage = document.getElementById('bigImage');
const minimap = document.getElementById('minimap');
const previewIndex = document.getElementById('previewIndex'); // 👈 index display element

// Generate thumbnails
for (let i = 1; i < 24; i++) {
  const thumb = document.createElement('img');
  thumb.src = 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png';
  thumb.dataset.index = i;
  minimap.appendChild(thumb);
}

// Query all thumbnails after appending
const thumbnails = document.querySelectorAll('#minimap img');

// Add hover events
thumbnails.forEach((thumb, i) => {
  if (i === 0) thumb.classList.add('active');

  thumb.addEventListener('mouseenter', () => {
    const index = thumb.dataset.index;
    previewIndex.textContent = `${String(index).padStart(3, '0')}`; // ✅ Correct

    if (!thumb.classList.contains('active')) {
      bigImage.classList.add('fade-out');

      setTimeout(() => {
        bigImage.src = thumb.src;
        bigImage.classList.remove('fade-out');
      }, 150);

      thumbnails.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    }
  });
});

// Allow horizontal scroll with mouse wheel
minimap.addEventListener('wheel', (e) => {
  if (e.deltaY !== 0) {
    e.preventDefault();
    minimap.scrollLeft += e.deltaY;
  }
}, { passive: false });

gsap.registerPlugin(SplitText, ScrollTrigger);

function setupWordAnimation(selector) {
  document.querySelectorAll(selector).forEach((el) => {
    // Clear any previous split if exists (for hot reloads or refresh issues)
    if (el._split) {
      el._split.revert(); // This undoes the SplitText change
    }

    const split = new SplitText(el, { type: "words" });
    el._split = split; // Store reference for cleanup later

    split.words.forEach((word, index) => {
      // Wrap word content
      const wrapper = document.createElement("span");
      wrapper.classList.add("word-wrapper");

      const inner = document.createElement("span");
      inner.textContent = word.textContent;

      wrapper.appendChild(inner);
      word.replaceWith(wrapper);

      gsap.fromTo(inner,
        { y: "100%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: wrapper,
            start: "top 85%",
            toggleActions: "play none none reverse",
            once: false,
          },
          delay: index * 0.15,
        });
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setupWordAnimation(".reveal-text");
});
