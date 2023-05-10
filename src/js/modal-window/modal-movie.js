import symboldefs from '../../images/symbol-defs.svg';
import { MoviesAPI } from '../MoviesAPI';

const modalEl = document.querySelector('.modal-card');

export async function openModalMovie(id) {
  const moviesAPI = new MoviesAPI();

  try {
    const response = await moviesAPI.getMovieDetails(id);
    modalEl.classList.add('modal-movie--show');
    modalEl.innerHTML = `
     <svg class="close-btn js-modal-close" type="button">
    <use href="${symboldefs}#close-outline"></use>
     </svg>
      <div class="modal__card">
      <div class="modal-card__wrapper">
        <img class="modal-poster" src="https://image.tmdb.org/t/p/w500${response.data.poster_path}" alt="${response.data.title}" width="248" height="315">
        <div class="modal-container__info">
          <h2 class="modal-title">${response.data.original_title}</h2>
          <div class="modal-container__details">
            <ul class="modal-details__list list">
              <li class="modal-details__item">
                Vote / Votes
              </li>
              <li class="modal-details__item">Popularity</li>
              <li class="modal-details__item">Genre</li>
            </ul>
            <ul class="modal-details__value-list list">
            <li class="modal-details__value> <span class="vote">${response.data.vote_average}</span>
  <span class="slash">/</span>
  <span class="vote">${response.data.vote_count}</span></span>
</p></li>
            <li class="modal-details__value>${response.data.popularity}</li>
            <li class="modal-details__value>${response.data.genres[0].name}</li>
            </ul>
            </div>
            <p class="modal-details__about">ABOUT</p>
            <p class="modal-details__story">${response.data.overview}</p>
          
          <button class="btn-add-remove">Add to my library</button>
        </div>
      </div>
      </div>
    `;

    const closeModalBtn = modalEl.querySelector('.js-modal-close');
    closeModalBtn.addEventListener('click', closeModal);

    document.addEventListener('keydown', event => {
      if (event.keyCode === 27) {
        closeModal();
      }
    });
  } catch (error) {
    console.log(error);
  }
}

function closeModal() {
  if (modalEl) {
    modalEl.classList.remove('modal-movie--show');
    modalEl.innerHTML = '';
  }

  // modalEl.classList.remove('modal-movie--show');
  // modalEl.innerHTML = '';

  document.removeEventListener('keydown', event => {
    if (event.keyCode === 27) {
      closeModal();
    }
  });
}
