const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -24px' });

document.querySelectorAll('.reveal, .feature, .compare, .plans article, .comparison-table').forEach((element) => {
  element.classList.add('reveal');
  observer.observe(element);
});

const glow = document.querySelector('.cursor-glow');
if (glow && matchMedia('(pointer: fine)').matches) {
  window.addEventListener('pointermove', (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }, { passive: true });
}

const menuButton = document.querySelector('.menu');
const mobileNav = document.querySelector('.mobile-nav');
if (menuButton && mobileNav) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    document.body.classList.toggle('menu-open', !isOpen);
  });
  mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('keydown', (event) => event.key === 'Escape' && closeMenu());
}

document.querySelectorAll('.toggle button').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.toggle button').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
}));

document.querySelectorAll('.accordion details').forEach((item) => item.addEventListener('toggle', () => {
  if (item.open) {
    document.querySelectorAll('.accordion details').forEach((other) => {
      if (other !== item) other.open = false;
    });
  }
}));

const waitlistForm = document.querySelector('#waitlistForm');
if (waitlistForm) {
  waitlistForm.addEventListener('submit', (event) => {
    event.preventDefault();
    waitlistForm.classList.add('submitted');
    waitlistForm.querySelector('.form-success')?.focus();
  });
}

  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'));
}, { threshold: 0.12 });
document.querySelectorAll('.reveal, .feature, .compare, .plans article').forEach(el => {
  el.classList.add('reveal'); observer.observe(el);
});
const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => { glow.style.left = `${e.clientX}px`; glow.style.top = `${e.clientY}px`; });
const source = document.querySelector('#source');
const count = document.querySelector('.char-count');
source.addEventListener('input', () => count.textContent = `${source.value.length} / 1,000`);
document.querySelector('#clear').addEventListener('click', () => { source.value = ''; count.textContent = '0 / 1,000'; source.focus(); });
document.querySelector('#translateBtn').addEventListener('click', () => {
  const result = document.querySelector('#result');
  result.style.opacity = '0'; result.style.transform = 'translateY(5px)';
  setTimeout(() => { result.textContent = source.value ? 'Hey, please reschedule tomorrow’s meeting. I won’t be available.' : 'Your natural translation will appear here.'; result.style.transition = '.4s'; result.style.opacity = '1'; result.style.transform = 'none'; }, 250);
});
document.querySelector('#copy').addEventListener('click', async (e) => { await navigator.clipboard?.writeText(document.querySelector('#result').textContent); e.currentTarget.textContent = '✓'; setTimeout(() => e.currentTarget.textContent = '▢', 1200); });
document.querySelectorAll('.toggle button').forEach(btn => btn.addEventListener('click', () => { document.querySelectorAll('.toggle button').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }));
document.querySelectorAll('.accordion details').forEach(item => item.addEventListener('toggle', () => { if(item.open) document.querySelectorAll('.accordion details').forEach(other => { if(other !== item) other.open = false; }); }));
>>>>>>> origin/main
