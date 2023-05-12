function renderSpiner() {
  const film = document.querySelector('.films');
  const spiner = document.createElement('div');
  spiner.classList.add('loader');
  spiner.textContent = 'Loading...';
  film.prepend(spiner);

  setTimeout(() => spiner.remove(), 400);
}

renderSpiner();
