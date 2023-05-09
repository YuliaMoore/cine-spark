function renderSpiner() {
  const film = document.querySelector('.films');
  console.log(film);
  const spiner = document.createElement('div');
  console.log(spiner);
  spiner.classList.add('loader');
  spiner.textContent = 'Loading...';
  film.prepend(spiner);
  console.log(spiner);

  setTimeout(() => spiner.remove(), 400);
}

renderSpiner();
