function checkPassword() {
  const password = document.getElementById("password-input").value;
  if (password === "01112022") {
    document.getElementById("password-section").style.display = "none";
    document.getElementById("birthday-music").play();
    showGifSection();
    createFloatingElements();
  } else {
    document.getElementById("error-message").style.display = "block";
  }
}

function showGifSection() {
  const container = document.getElementById("content-container");
  container.innerHTML = `
    <div id="gif-section" class="section">
      <h1>Happy Birthday, My Love!</h1>
      <div class="centered-content">
        <img src="./resources/images/hbd.gif" alt="Surprise GIF">
        <button onclick="showMemories()">See Our Memories</button>
      </div>
    </div>
  `;
}

function showMemories() {
  const container = document.getElementById("content-container");
  container.innerHTML = `
    <div id="memories-section" class="section">
      <h1>Our Beautiful Memories Together</h1>
      <div class="centered-content">
        <div class="memory-slideshow">
          <div class="memory-slide active">
            <img src="./resources/images/memory1.jpg" alt="Our Memory 1">
            <div class="memory-caption">The day we first met ❤️</div>
          </div>
          <div class="memory-slide">
            <img src="./resources/images/memory1.jpg" alt="Our Memory 2">
            <div class="memory-caption">Our first date was magical ✨</div>
          </div>
          <div class="memory-slide">
            <img src="./resources/images/memory1.jpg" alt="Our Memory 3">
            <div class="memory-caption">That amazing vacation together 🌴</div>
          </div>
          <div class="memory-slide">
            <img src="./resources/images/memory1.jpg" alt="Our Memory 4">
            <div class="memory-caption">Celebrating our anniversary 🥂</div>
          </div>
          <div class="memory-slide">
            <img src="./resources/images/memory1.jpg" alt="Our Memory 5">
            <div class="memory-caption">That silly moment we'll never forget 😂</div>
          </div>
          <div class="controls">
            <button class="prev-btn" onclick="changeMemory(-1)">❮</button>
            <div class="slide-indicators"></div>
            <button class="next-btn" onclick="changeMemory(1)">❯</button>
          </div>
        </div>
        <button onclick="showWish()">Read My Birthday Wish</button>
      </div>
    </div>
  `;
  
  // Initialize slideshow
  initSlideshow();
}

let currentMemoryIndex = 0;
let memoryInterval;

function initSlideshow() {
  const slides = document.querySelectorAll('.memory-slide');
  const indicators = document.querySelector('.slide-indicators');
  
  // Create indicators
  slides.forEach((_, i) => {
    const indicator = document.createElement('span');
    indicator.classList.add('indicator');
    if (i === 0) indicator.classList.add('active');
    indicator.onclick = () => goToMemory(i);
    indicators.appendChild(indicator);
  });
  
  // Start automatic slideshow
  memoryInterval = setInterval(() => {
    changeMemory(1);
  }, 5000); // Change memory every 5 seconds
}

function changeMemory(direction) {
  const slides = document.querySelectorAll('.memory-slide');
  const indicators = document.querySelectorAll('.indicator');
  
  // Remove active class from current slide
  slides[currentMemoryIndex].classList.remove('active');
  indicators[currentMemoryIndex].classList.remove('active');
  
  // Calculate new index
  currentMemoryIndex = (currentMemoryIndex + direction + slides.length) % slides.length;
  
  // Add active class to new slide
  slides[currentMemoryIndex].classList.add('active');
  indicators[currentMemoryIndex].classList.add('active');
}

function goToMemory(index) {
  const slides = document.querySelectorAll('.memory-slide');
  const indicators = document.querySelectorAll('.indicator');
  
  // Remove active class from current slide
  slides[currentMemoryIndex].classList.remove('active');
  indicators[currentMemoryIndex].classList.remove('active');
  
  // Set new index
  currentMemoryIndex = index;
  
  // Add active class to new slide
  slides[currentMemoryIndex].classList.add('active');
  indicators[currentMemoryIndex].classList.add('active');
  
  // Reset the automatic slideshow timer
  clearInterval(memoryInterval);
  memoryInterval = setInterval(() => {
    changeMemory(1);
  }, 5000);
}

function showWish() {
  // Clear the memory slideshow interval
  clearInterval(memoryInterval);
  
  const container = document.getElementById("content-container");
  container.innerHTML = `
    <div id="wish-section" class="section">
      <h1>Happy Birthday, Darling!</h1>
      <div class="centered-content">
        <p>On this special day, I want to remind you how much you mean to me. Every moment with you is a treasure, and I can't wait to create more memories together. You light up my world with your smile, and my heart is full of love for you. Wishing you all the happiness, love, and joy in the world. I love you more than words can say!</p>
        <div class="cake-container">
          <div class="cake">
            <div class="cake-base"></div>
            <div class="frosting"></div>
            <div class="frosting-drip"></div>
            <div class="sprinkles"></div>
            <div class="candle">
              <div class="flame"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function createFloatingElements() {
  // Create floating hearts
  for (let i = 0; i < 5; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 3}s`;
    heart.style.animationDelay = `${Math.random() * 2}s`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }

  // Create floating balloons - reduced to just 3
  for (let i = 0; i < 3; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.animationDuration = `${Math.random() * 4 + 4}s`;
    balloon.style.animationDelay = `${Math.random() * 2}s`;
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
    document.body.appendChild(balloon);
    setTimeout(() => balloon.remove(), 6000);
  }
  
  // Create floating emojis
  const emojis = ['❤️', '✨', '🥰', '🎂', '🎉', '🎁', '🥳', '😘', '💖', '🎈'];
  for (let i = 0; i < 8; i++) {
    const emoji = document.createElement("div");
    emoji.classList.add("floating-emoji");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = `${Math.random() * 100}vw`;
    emoji.style.animationDuration = `${Math.random() * 5 + 5}s`;
    emoji.style.animationDelay = `${Math.random() * 2}s`;
    emoji.style.fontSize = `${Math.random() * 20 + 20}px`;
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 7000);
  }
}

// Initialize floating elements
setInterval(createFloatingElements, 5000);

// Add this to your createFloatingElements function or somewhere appropriate
function createCandleSmoke() {
  const smoke = document.createElement("div");
  smoke.classList.add("smoke");
  const candle = document.querySelector('.candle');
  if (candle) {
    candle.appendChild(smoke);
    setTimeout(() => {
      if (smoke.parentNode) {
        smoke.parentNode.removeChild(smoke);
      }
    }, 4000);
  }
}

// Start creating smoke periodically
setInterval(createCandleSmoke, 800);