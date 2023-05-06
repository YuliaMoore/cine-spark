import { onScroll, onToTopBtn } from './scroll';
import { MoviesAPI } from './MoviesAPI';
const moviesAPI = new MoviesAPI();

import compiledMoviesCards from '/src/templates/catalog-list-item.hbs';

// В списку фільмів є рік, місяць і число, а нам потрібен тільки рік, для цього створюємо хелпер
import Handlebars from 'handlebars';
Handlebars.registerHelper('releaseYear', function (date) {
  return date.slice(0, 4);
});

// Присвоюємо змінні елементам верстки
const searchInput = document.querySelector('.catalog-list__search-input');
const searchForm = document.querySelector('.catalog-list__search-form');
const moviesCatalog = document.querySelector('.catalog-list__items-list');

onScroll();
onToTopBtn();

// Функція, яка викликається при першому завантаженні сторінки. Трендові фільми тижня.
async function onRenderCatalogPage() {
  try {
    const response = await moviesAPI.getTrendMoviesWeek();
    // console.log(response.results);
    // console.log(moviesAPI.getGenres(28, 12, 16));
    moviesCatalog.innerHTML = compiledMoviesCards(response.results);
  } catch (err) {
    console.log(err);
  }
}
onRenderCatalogPage();

// Ставимо слухача на Сабміт форми
searchForm.addEventListener('submit', onSearchFormSubmit);

// Функція, яка викликається при сабміті форми. Фільми по пошуковому запиту.
async function onSearchFormSubmit(e) {
  e.preventDefault();
  let query = searchInput.value;
  const page = 1;
  if (query === '') {
    //Якщо в полі пошуку нічого не введено - не робимо ніяких запитів і виводимо помилку
    moviesCatalog.innerHTML = `<h2 class="catalog-list__error-title">OOPS...</h2><p class="catalog-list__error-text">Enter search query, please!</p>`;
  } else {
    try {
      const response = await moviesAPI.getSearchMovies(query, page);
      if (response.total_results < 1) {
        //Якщо результатів пошуку немає - виводимо помилку
        moviesCatalog.innerHTML = `<h2 class="catalog-list__error-title">OOPS...</h2><p class="catalog-list__error-text">We are very sorry!</p><p class="catalog-list__error-text">We don’t have any results due to your search.</p>`;
      } else {
        // Тут виводяться результати пошуку, якщо вони. Тут же треба буде включати пейджинг, якщо результатів більше, ніж 20.
        moviesCatalog.innerHTML = compiledMoviesCards(response.results);
      }
    } catch (err) {
      console.log(err);
    }
  }
}

function scrollPage() {
  const { height: cardHeight } = document
    .querySelector('.catalog-list__items-list')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
