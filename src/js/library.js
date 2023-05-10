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

async function onRenderLibraryCards() {
  const moviesContainer = document.querySelector('.library-list');
  if (localStorage.getItem('libraryFilm')) {
    const savedMovies = JSON.parse(localStorage.getItem('libraryFilm')).flat();
    // console.log(savedMovies);
    const moviesMarkUp = await getCatalogCards(savedMovies);
    // console.log(moviesMarkUp);
    moviesContainer.innerHTML = moviesMarkUp;
  } else {
    return (moviesContainer.innerHTML = `<div class="container library-container-mistake">
      <p class="library-empty__mistake">OOPS... <br> We are very sorry! <br> You don't have any movies at your library.</p>
      <button class="btn btn-library" onclick="window.location.href='catalog.html'"><a class="btn-library__link">Search movie</a></button>
    </div>`);
  }
}

onRenderLibraryCards();
