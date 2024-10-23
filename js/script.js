document.addEventListener("DOMContentLoaded", function() {
  const burgerBtn = document.querySelector('.burger-btn');
  const burgerMenu = document.querySelector('.burger-menu');
  const closeBtn = document.querySelector('.close-btn');

  if (burgerBtn && burgerMenu && closeBtn) {
    burgerBtn.addEventListener('click', function() {
      const isExpanded = burgerBtn.getAttribute('aria-expanded') === 'true';
      burgerBtn.setAttribute('aria-expanded', String(!isExpanded));
      burgerMenu.classList.toggle('active');
    });

    closeBtn.addEventListener('click', function() {
      burgerMenu.classList.remove('active');
      burgerBtn.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('click', function(event) {
      const target = event.target;

      if (!burgerMenu.contains(target) && !burgerBtn.contains(target)) {
        if (burgerMenu.classList.contains('active')) {
          burgerMenu.classList.remove('active');
          burgerBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });
  } else {
    console.error('Элементы не найдены в DOM.');
  }
});
