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