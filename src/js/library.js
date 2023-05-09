
import { onScroll, onToTopBtn } from './scroll';

onScroll();
onToTopBtn();

//добавить импорт модалки..

import { addAndRemoveToLocalStorage, getFromStorage } from './localStorage';
import { createUpcomingMovies } from './catalog-functions/upcoming-markup';
import { getCatalogCards } from './catalog-functions/catalog-cards-get';
import { formToJSON } from 'axios';
// export {  };
function addMovieToLibrary(movieId) {
  getMovieById2(movieId).then(movie => {
    movie.genre_names = movie.genres
      .map(genre => {
        return genre.name;
      })
      .slice(0, 2)
      .join(',');
    if (movie.release_date) {
      movie.release_date = movie.release_date.slice(0, 4);
    }
    let libraries = JSON.parse(localStorage.getItem(librariesKey));
    if (!libraries) {
      libraries = {};
    }
    libraries[movie.id] = movie;
    localStorage.setItem(librariesKey, JSON.stringify(libraries));
  });
}

function removeMovieFromLibrary(movieId) {
  let libraries = JSON.parse(localStorage.getItem(librariesKey));
  delete libraries[movieId];
  localStorage.setItem(librariesKey, JSON.stringify(libraries));
}

const remindMeBtn = document.querySelector('.upcoming-btn');
remindMeBtn.addEventListener('click', addToLibrary);

function addToLibrary(event) {
  const movieId = event.target.dataset.movieid;
  console.log(event);
}

import { onScroll, onToTopBtn, scrollPage } from './scroll';

onScroll();
onToTopBtn();

