import { onScroll, onToTopBtn } from './scroll';
import { MoviesAPI } from './MoviesAPI';
import { getCatalogCards } from '/src/js/catalog-functions/catalog-cards-get';

import {
  pagination,
  createPopularPagination,
  createMoviesByQueryPagination,
  container,
  options,
} from './pagination';

export { moviesAPI, moviesCatalog };

const moviesAPI = new MoviesAPI();
const page = pagination.getCurrentPage();

// const searchInput = document.querySelector('.catalog-list__search-input');
const searchForm = document.querySelector('.catalog-list__search-form');
const moviesCatalog = document.querySelector('.catalog-list__items-list');

onScroll();
onToTopBtn();

// Функція, яка викликається при першому завантаженні сторінки. Трендові фільми тижня.
async function onRenderCatalogPage(page) {
  try {
    const response = await moviesAPI.getTrendMoviesWeek(page);
    moviesCatalog.innerHTML = getCatalogCards(response.data.results);
    // console.log(response.data.results);
    pagination.reset(response.data.total_results);
    // console.log(response.data.total_results);
    container.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
  }
}

pagination.on('afterMove', createPopularPagination);
onRenderCatalogPage();

// Ставимо слухача на Сабміт форми
searchForm.addEventListener('submit', onSearchFormSubmit);

// Функція, яка викликається при сабміті форми. Фільми по пошуковому запиту.
async function onSearchFormSubmit(e) {
  e.preventDefault();

  pagination.off('afterMove', createPopularPagination);
  pagination.off('afterMove', createMoviesByQueryPagination);

  const searchQuery = e.currentTarget.elements['searchQuery'].value.trim();
  moviesAPI.query = searchQuery;
  // console.log(searchQuery);

  // let query = searchInput.value;
  // const page = 1;
  if (!searchQuery) {
    //Якщо в полі пошуку нічого не введено - не робимо ніяких запитів і виводимо помилку
    container.classList.add('is-hidden');
    moviesCatalog.innerHTML = `
    <div class="catalog-list__error">
    <h2 class="catalog-list__error-title">OOPS...</h2>
    <p class="catalog-list__error-text">Enter search query, please!</p>
    <div>`;
    return;
  }

  try {
    const response = await moviesAPI.getSearchMovies(page);
    // console.log(response.data.results);
    console.log(response.data.results.length);
    // console.log(options.itemsPerPage);
    // console.log(page);
    // console.log(response.data.results);

    if (response.data.results.length === 0) {
      container.classList.add('is-hidden');
      searchForm.reset();
      // const modalError = document.querySelector('#error');
      moviesCatalog.innerHTML = `<div class="catalog-list__error"><h2 class="catalog-list__error-title">OOPS...</h2><p class="catalog-list__error-text">We are very sorry!</p><p class="catalog-list__error-text">We don’t have any results due to your search.</p><div>`;
      return;
      // return alert('Вибачте, по вашому запису нічого не знайдено ');
    }

    if (response.data.results < options.itemsPerPage) {
      container.classList.add('is-hidden');
      moviesCatalog.innerHTML = getCatalogCards(response.data.results);
      return;
    }

    // if (response.total_results < 1) {
    //Якщо результатів пошуку немає - виводимо помилку
    // const modalError = document.querySelector('#error');
    // moviesCatalog.innerHTML = `<div class="catalog-list__error"><h2 class="catalog-list__error-title">OOPS...</h2><p class="catalog-list__error-text">We are very sorry!</p><p class="catalog-list__error-text">We don’t have any results due to your search.</p><div>`;
    // } else {
    // Тут виводяться результати пошуку, якщо вони. Тут же треба буде включати пейджинг, якщо результатів більше, ніж 20.

    moviesCatalog.innerHTML = getCatalogCards(response.data.results);
    pagination.reset(response.data.total_results);
    pagination.on('afterMove', createMoviesByQueryPagination);
    scrollPage();
  } catch (err) {
    console.log(err);
  }
}

// плавний скрол
function scrollPage() {
  const { height: cardHeight } = document
    .querySelector('.catalog-list__items-list')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 1,
    behavior: 'smooth',
  });
}
