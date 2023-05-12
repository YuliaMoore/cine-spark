(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open-btn'),
    // closeMenuBtn: document.querySelector('.menu-close-btn'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.body.addEventListener('click', closeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    refs.body.classList.toggle('has-backdrop');
  }

  function closeMenu(event) {
    if (!event.target.closest('.mob-menu') && !event.target.closest('.menu-open-btn')) {
      refs.menu.classList.add('is-hidden');
      refs.body.classList.remove('no-scroll');
      refs.body.classList.remove('has-backdrop');
    }
  }

  function onKeyPress(event) {
    if (event.code === 'Escape') {
      toggleMenu();
    }
  }

  document.addEventListener('keydown', onKeyPress);
})();
