import symboldefs from '../../images/symbol-defs.svg';
import { MoviesAPI } from '../MoviesAPI';
import { addToLibrary } from './add-to-library';
import { removeFromLibrary } from './remove-from-my-library';
import { onRenderLibraryCards } from '../library';
import { onOpenHeroModal, getFilmOfDayId } from '/src/js/hero-modal.js';

const modalEl = document.querySelector('.modal-card');

const backdropEl = document.createElement('div');
backdropEl.classList.add('modal-backdrop');
document.body.appendChild(backdropEl);

export async function openModalMovie(id) {
  const moviesAPI = new MoviesAPI();

  try {
    const response = await moviesAPI.getMovieDetails(id);
    modalEl.classList.add('modal-movie--show');
    backdropEl.classList.add('backdrop--show');
    document.body.classList.add('modal-open');
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
    <li class="modal-details__item">Vote / Votes</li>
    <li class="modal-details__item">Popularity</li>
    <li class="modal-details__item">Genre</li>
  </ul>
  <ul class="modal-details__value-list list">
    <li class="modal-details__value">
      <span class="vote">${response.data.vote_average}</span>
      <span class="slash">/</span>
      <span class="vote">${response.data.vote_count}</span>
    </li>
    <li class="modal-details__value">${response.data.popularity}</li>
    <li class="modal-details__value">${response.data.genres[0].name}</li>
  </ul>
</div>

            <p class="modal-details__about">ABOUT</p>
            <p class="modal-details__story">${response.data.overview}</p>
          <div class="block-watch-btn">
          <button class="btn-add-remove">Add to my library</button>
          <button class="watch-btn-modal">Watch trailer</button>
          </div>
        </div>
      </div>
      </div>
    `;

    // Функція виклику функції для додавання / видалення кнопок / фільму з локального сховища-----------------------------------------

    function modalButtonCreation() {
      const addRemoveLibraryButton = document.querySelector('.btn-add-remove');
      const movieObject = response.data;

      let libraryFilms = JSON.parse(localStorage.getItem('libraryFilm')) || [];
      // console.log(`movieObject`, movieObject);
      // console.log(libraryFilms.flat());

      if (libraryFilms.flat().some(value => value.id === movieObject.id)) {
        // console.log('Фільм є в Locale Storage');
        // console.log('Нова назва кнопки + слухач з функцією видалення.');
        addRemoveLibraryButton.textContent = 'Remove from library';
        addRemoveLibraryButton.classList.add('remove');
        addRemoveLibraryButton.addEventListener('click', function () {
          removeFromLibrary(movieObject.id);
          // console.log('Видалили з Locale Storage.');
          // Якщо ми на сторінці my-library - запускаємо новий рендер сторінки onRenderLibraryCards()
          if (window.location.pathname.includes('my-library')) {
            // console.log('My-library is OPENED');
            onRenderLibraryCards();
          }
          modalButtonCreation();
        });
      } else {
        // console.log('Фільму немає в Locale Storage');
        // console.log('Нова назва кноки іслухач з функцію додавання');
        addRemoveLibraryButton.textContent = 'Add to library';
        addRemoveLibraryButton.classList.remove('remove');
        addRemoveLibraryButton.addEventListener('click', function () {
          addToLibrary(movieObject);
          // console.log(`movieObject (from modal-movie.js)`, movieObject);
          // console.log('Вийшов з функції додавання Locale Storage', movieObject);
          // Якщо ми на сторінці my-library - запускаємо новий рендер сторінки onRenderLibraryCards()
          if (window.location.pathname.includes('my-library')) {
            // console.log('My-library is OPENED');
            onRenderLibraryCards();
          }
          modalButtonCreation();
        });
      }
      //Відкриття трейлера
      const opanTrailerModal = document.querySelector('.watch-btn-modal');
      opanTrailerModal.addEventListener('click', onOpenTrailerModal);

      function onOpenTrailerModal() {
        getFilmOfDayId(id);
        onOpenHeroModal();
      }
    }
    modalButtonCreation();

    // -----------------------------------------------------------------------------------------

    const closeModalBtn = modalEl.querySelector('.js-modal-close');
    closeModalBtn.addEventListener('click', closeModal);
    backdropEl.addEventListener('click', closeModal);

    document.addEventListener('keydown', event => {
      if (event.keyCode === 27) {
        closeModal();
      }
    });
  } catch (error) {
    console.log(error);
  }
}

export function closeModal() {
  modalEl.classList.remove('modal-movie--show');
  modalEl.innerHTML = '';
  backdropEl.classList.remove('backdrop--show');
  document.body.classList.remove('modal-open');
}
