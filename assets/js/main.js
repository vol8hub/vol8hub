/* ═══════════════════════════════════════════════════════════════════════
   VOL8HUB — Shared JavaScript
   ═══════════════════════════════════════════════════════════════════════ */

// ─── MOBILE NAV ────────────────────────────────────────────────────────
const ham = document.getElementById('ham');
const nav = document.getElementById('nav');
if (ham && nav) {
  ham.addEventListener('click', () => nav.classList.toggle('open'));
  // Close on outside click
  document.addEventListener('click', e => {
    if (!ham.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
    }
  });
}

// ─── SCROLL REVEAL ─────────────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => io.observe(el));
}

// ─── ACTIVE NAV LINK ───────────────────────────────────────────────────
(function markActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();
