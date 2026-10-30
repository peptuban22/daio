const menuButton = document.querySelector('.menu-toggle');
const sidebarBackdrop = document.querySelector('.sidebar-backdrop');

function setNavigationOpen(isOpen) {
  document.body.classList.toggle('nav-open', isOpen);
  if (menuButton) {
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  }
}

if (menuButton) {
  menuButton.addEventListener('click', () => {
    setNavigationOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });
}

if (sidebarBackdrop) {
  sidebarBackdrop.addEventListener('click', () => setNavigationOpen(false));
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setNavigationOpen(false);
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => setNavigationOpen(false));
});