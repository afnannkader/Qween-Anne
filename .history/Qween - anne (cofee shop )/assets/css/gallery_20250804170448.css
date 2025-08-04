<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hover Preview with Fade and Scrollable Minimap</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <!-- Preview Area -->
    <div class="main-preview">
      <div class="preview-index" id="previewIndex">0000</div>
      <div class="preview-inner">
        <img id="bigImage" src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="Preview">
      </div>
    </div>

    <!-- Thumbnail Minimap -->
    <div class="minimap-wrapper">
      <div class="minimap" id="minimap">
        <!-- Thumbnails will be inserted by JavaScript -->
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>




* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: sans-serif;
  height: 100vh;
  overflow: hidden;
}

.container {
  display: flex;
  width: 100%;
  height: 100%;
}

.main-preview {
  width: 55%;
/*   background: #fff; */
  padding: 12rem 0px 32px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.preview-index {
  position: absolute;
  top: 10rem;
  right: 2rem;
  font-size: 1.25rem;
  color: #333;
  z-index: 10;
}

.preview-inner {
/*   background: #000; */
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
  position: absolute;
}

.preview-inner img.fade-out {
  opacity: 0;
}

.minimap-wrapper {
  width: 45%;
/*   background: #f0f0f0; */
  padding: 1rem 1rem 1rem .5rem;
  display: flex;
  align-items: flex-end;       /* Align to bottom */
  justify-content: flex-end;   /* Align to right */
}



.minimap {
  display: flex;
  gap: .2rem;
  overflow-x: auto;
  padding-bottom: 8px;
  scroll-behavior: smooth;
  padding-left: 2px;
  max-width: 100%;         /* Ensure it doesn't overflow */
}


.minimap img {
  height: 100px;
  width: 100px;           /* 👈 Make width same as height */
  object-fit: cover;      /* 👈 Ensures the image fills the box */
  flex-shrink: 0;
  cursor: pointer;
  border: 2px solid transparent;
/*   transition: border 0.2s; */
}

.minimap img.active,
.minimap img:hover {
  border: 2px solid #333;
}

.minimap::-webkit-scrollbar {
  height: 8px;
}

.minimap::-webkit-scrollbar-thumb {
  background: #aaa;
  border-radius: 4px;
}




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
    previewIndex.textContent = ${String(index).padStart(3, '0')}; // 👈 update index display

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