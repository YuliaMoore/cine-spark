import symboldefs from '../../images/symbol-defs.svg';
import { MoviesAPI } from '../MoviesAPI';

const modalEl = document.querySelector('.modal-card');

export async function openModalMovie(id) {
  const moviesAPI = new MoviesAPI();
  try {
    const response = await moviesAPI.getMovieDetails(id);
    console.log(response);
    modalEl.classList.add('modal-movie--show');
    modalEl.innerHTML = `
     <svg class="close-btn js-modal-close" type="button">
    <use href="${symboldefs}#close-outline"></use>
     </svg>
      <div class="modal__card">
        <img class="modal-poster" src="https://image.tmdb.org/t/p/w500${response.data.poster_path}" alt="${response.data.title}" width="248" height="315">
        <div class="modal-container__info">
          <h2 class="modal-title">${response.data.original_title}</h2>
          <div class="modal-container__details">
            <ul class="modal-details__list list">
              <li class="modal-details__item">
                <p class="modal-details__name">Vote / Votes</p>
                <p class="modal-details__value">
                  <span class="points">${response.data.vote_average}</span> 
                  <span class="slash">/</span>
                  <span class="amount">${response.data.vote_count}</span>
                </p>
              </li>
              <li class="modal-details__item">
                <p class="modal-details__name">Popularity</p>
                <p class="modal-details__value">${response.data.popularity}</p>
              </li>
              <li class="modal-details__item">
                <p class="modal-details__name">Genre</p>
                <p class="modal-details__value">${response.data.genres[0].name}</p>
              </li>
            </ul>
            <p class="modal-details__about">ABOUT</p>
            <p class="modal-details__story">${response.data.overview}</p>
          </div>
          <button class="btn-add-remove">Add to my library</button>
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

  modalEl.classList.remove('modal-movie--show');
  modalEl.innerHTML = '';

  document.removeEventListener('keydown', event => {
    if (event.keyCode === 27) {
      closeModal();
    }
  });
}
