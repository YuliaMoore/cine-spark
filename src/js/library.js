import { onScroll, onToTopBtn } from './scroll';

onScroll();
onToTopBtn();

//добавить импорт модалки..
import { openModalMovie } from './modal-window/modal-movie';

// import { addAndRemoveToLocalStorage, getFromStorage } from './localStorage';
// import { createUpcomingMovies } from './catalog-functions/upcoming-markup';
import { getCatalogCards } from './catalog-functions/catalog-cards-get';
// import { formToJSON } from 'axios';
// export {  };
// function addMovieToLibrary(movieId) {
//   getMovieById2(movieId).then(movie => {
//     movie.genre_names = movie.genres
//       .map(genre => {
//         return genre.name;
//       })
//       .slice(0, 2)
//       .join(',');
//     if (movie.release_date) {
//       movie.release_date = movie.release_date.slice(0, 4);
//     }
//     let libraries = JSON.parse(localStorage.getItem(librariesKey));
//     if (!libraries) {
//       libraries = {};
//     }
//     libraries[movie.id] = movie;
//     localStorage.setItem(librariesKey, JSON.stringify(libraries));
//   });
// }

// function removeMovieFromLibrary(movieId) {
//   let libraries = JSON.parse(localStorage.getItem(librariesKey));
//   delete libraries[movieId];
//   localStorage.setItem(librariesKey, JSON.stringify(libraries));
// }

export async function onRenderLibraryCards() {
  const moviesContainer = document.querySelector('.library-list');
  let savedMovies = JSON.parse(localStorage.getItem('libraryFilm')) || [];
  // Ставим ослухача на кнопку Loud more
  const loadMoreBtn = document.querySelector('.btn-load-more');
  // loadMoreBtn.classList.remove('is-hidden');
  // console.log(savedMovies);
  let page = 1;
  let perPage = 10;
  const lastPage = Math.ceil(savedMovies.length / perPage);
  // console.log(lastPage);
  // console.log(savedMovies.length);

  // Функція loadPartMovies(page) приймає масив об’єктів фільмів і повертає фільми вказаної сторінки
  function loadPartMovies(page) {
    let startIndex = page * perPage - perPage;
    let endIndex = page * perPage;
    // console.log('startIndex (page * perPage - perPage = )', startIndex);
    // console.log('endIndex (page * perPage = )', endIndex);
    let partMovies = savedMovies.slice(startIndex, endIndex);
    // console.log(`startIndex, endIndex: `, startIndex, endIndex);
    // console.log(`partMovies: `, partMovies);
    return partMovies;
  }

  if (10 <= savedMovies.length < 0) {
    const moviesMarkUp = await getCatalogCards(savedMovies);
    // console.log(moviesMarkUp);
    moviesContainer.innerHTML = moviesMarkUp;
    // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

    // Встановлюємо слухача на всі посилання карток товарів
    const links = document.querySelectorAll('.catalog-list__list-link');
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        openModalMovie(link.dataset.id);
      });
    });
    // Виключаємо кнопку Показати ще
    loadMoreBtn.classList.add('is-hidden');
  }
  // ---------------------------------------------------------------------------------------------------------
  else if (savedMovies.length > 10) {
    // const moviesMarkUp = await getCatalogCards(savedMovies);
    // console.log(moviesMarkUp);
    // moviesContainer.innerHTML = moviesMarkUp;

    const parMovies = loadPartMovies(page);
    const moviesMarkUp = getCatalogCards(parMovies);
    // console.log(moviesMarkUp);
    moviesContainer.insertAdjacentHTML('beforeend', moviesMarkUp);

    // Встановлюємо слухача на всі посилання карток товарів
    const links = document.querySelectorAll('.catalog-list__list-link');
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        openModalMovie(link.dataset.id);
      });
    });

    // Включаємо кнопку Показати ще
    loadMoreBtn.classList.remove('is-hidden');

    // Слухач на кнопку, рендеримо список і додаємо beforeend
    loadMoreBtn.addEventListener('click', function () {
      const parMovies = loadPartMovies(page);
      const moviesMarkUp = getCatalogCards(parMovies);
      // console.log(moviesMarkUp);
      moviesContainer.insertAdjacentHTML('beforeend', moviesMarkUp);
      page += 1;

      if (page >= lastPage) {
        loadMoreBtn.classList.add('is-hidden');
      }
    });
  }
  // ---------------------------------------------------------------------------------------------------------
  else {
    // console.log('Бачу ЕЛС');
    // Виключаємо кнопку Показати ще
    loadMoreBtn.classList.add('is-hidden');
    return (moviesContainer.innerHTML = `<div class="container library-container-mistake">
      <p class="library-empty__mistake">OOPS... <br> We are very sorry! <br> You don't have any movies at your library.</p>
      <button class="btn btn-library" onclick="window.location.href='catalog.html'"><a class="btn-library__link">Search movie</a></button>
    </div>`);
  }
}

onRenderLibraryCards();

// const librariesKey = 'libraryFilm';
// let page = 1;
// let perPage = 9;

// const loadMoreBtn = document.querySelector('.btn-load-more');

// loadMoreBtn.addEventListener('click', () => {
//   page += 1;
//   onRenderLibraryCards();
// });

// loadMoreBtn.classList.remove('is-hidden');
// if (allMovies.length > page * perPage) {
//   loadMoreBtn.classList.add('is-hidden');
// }
// return markup;
// if (perPage < 9) {
//   loadMoreBtn.classList.add('is-hidden');
//   return;
// }

// loadMoreBtn.classList.remove('is-hidden');
