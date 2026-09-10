const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    siteNav.classList.toggle('is-open', !isOpen);
  });
}

document.querySelectorAll('[data-current-year]').forEach((year) => {
  year.textContent = new Date().getFullYear();
});

document.querySelector('.print-button')?.addEventListener('click', () => window.print());

const filterButtons = document.querySelectorAll('[data-filter]');
const resourceCards = document.querySelectorAll('[data-category]');
const emptyState = document.querySelector('.empty-state');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
    resourceCards.forEach((card) => {
      const isVisible = filter === 'all' || card.dataset.category === filter;
      card.hidden = !isVisible;
      visibleCount += Number(isVisible);
    });

    if (emptyState) emptyState.hidden = visibleCount > 0;
  });
});