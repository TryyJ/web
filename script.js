// ... your existing code ...

// Update tagline to reference BO7 ranked
const taglines = [
  "BO7 Ranked Meta: M15 Mod 0 & Dravec 45 dominating CDL lobbies!",
  "Elite squad – lock in your meta classes and climb ranks.",
  "ARC COD-Elite: Where pros share the current BO7 meta.",
  "No campers. Pure skill. Join the fight!"
];
const taglineEl = document.getElementById('tagline');
taglineEl.textContent = taglines[Math.floor(Math.random() * taglines.length)];

// Optional: Pulse the meta section on load
const metaSection = document.querySelector('.meta');
setTimeout(() => {
  metaSection.style.opacity = '0';
  metaSection.style.transition = 'opacity 1.5s';
  setTimeout(() => { metaSection.style.opacity = '1'; }, 100);
}, 800);
