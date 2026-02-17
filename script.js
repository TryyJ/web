document.addEventListener('DOMContentLoaded', () => {
  // 1. Typewriter effect on title
  const h1 = document.querySelector('h1');
  const fullText = h1.textContent;
  h1.textContent = '';
  let i = 0;

  function typeWriter() {
    if (i < fullText.length) {
      h1.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeWriter, 80);
    }
  }

  // Start typing after short delay
  setTimeout(typeWriter, 600);

  // 2. Random tagline
  const taglines = [
    "Drop in hot. No mercy. Pure skill.",
    "Elite squad. Legends only.",
    "ARC COD-Elite: Where warriors are born.",
    "Lock, load, dominate.",
    "One shot. One kill. One community.",
    "Join the fight. Become the legend."
  ];
  const taglineEl = document.getElementById('tagline');
  const randomTag = taglines[Math.floor(Math.random() * taglines.length)];
  taglineEl.textContent = randomTag;

  // 3. Button interaction
  const btn = document.getElementById('arena-btn');
  btn.addEventListener('click', (e) => {
    // Optional: prevent navigation temporarily for effect
    // e.preventDefault();

    btn.textContent = "Entering Arena...";
    btn.style.transform = "scale(1.15)";
    btn.style.boxShadow = "0 0 60px #ff1122";

    setTimeout(() => {
      btn.textContent = "Start the Arena";
      btn.style.transform = "scale(1)";
      btn.style.boxShadow = "0 0 25px rgba(255, 17, 34, 0.6)";
    }, 1800);

    // If you want real navigation, remove e.preventDefault() above
  });

  // 4. Glitch effect on hover
  const neon = document.querySelector('.neon');
  neon.addEventListener('mouseenter', () => {
    neon.classList.add('glitch-active');
  });
  neon.addEventListener('mouseleave', () => {
    neon.classList.remove('glitch-active');
  });

  console.log("ARC COD-Elite initialized 🔥");
});
