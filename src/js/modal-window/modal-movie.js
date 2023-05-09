// const modal = document.querySelector('.modal-movie');
// const overlay = document.querySelector('.overlay');

import { MoviesAPI } from '../MoviesAPI';

const modalEl = document.querySelector('.movie-card__wrapper');
// const overlay = document.querySelector('.overlay');

export async function openModalMovie(id) {
  console.log(id);
  const moviesAPI = new MoviesAPI();
  try {
    const response = await moviesAPI.getMovieDetails(id);
    console.log(response);
    // modalEl.classList.add('modal-movie--show');
    modalEl.innerHTML = `
      <div class="modal__card">
        <img class="modal-poster" src="${response.data.poster_path}" alt="${response.data.title}" width="248" height="315">
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
    // console.log();
    // const btnCloseModalMovie = document.querySelector('.close-modal-movie-btn');
    // btnCloseModalMovie.addEventListener('click', closeModalMovie);
  } catch (error) {
    console.log(error);
  }
}

// function closeModalMovie() {
//   // modalEl.classList.remove('modal-movie--show');
//   modalEl.classList.add('hidden');
//   overlay.classList.add('hidden');
// }
// overlay.addEventListener('click', closeModalMovie);
// document.addEventListener('keydown', e => {
//   if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
//     modalClose();
//   }
// });


// window.addEventListener('click', e => {
//   if (e.target === modalEl) {
//     closeModalMovie();
//   }
// });

// window.addEventListener('keydown', e => {
//   if (e.keyCode === 27) {
//     closeModalMovie();
//   }
// });
