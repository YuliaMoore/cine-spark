import { onScroll, onToTopBtn, scrollPage } from './scroll';
import { MoviesAPI } from './MoviesAPI';
import { getCatalogCards } from '/src/js/catalog-functions/catalog-cards-get';

import { openModalMovie } from './modal-window/modal-movie';
import {
  pagination,
  createPopularPagination,
  createMoviesByQueryPagination,
  container,
  options,
} from './pagination';

import { searchFormUpdate } from './catalog-functions/search-form-update';

export { moviesAPI, moviesCatalog };

const moviesAPI = new MoviesAPI();
const page = pagination.getCurrentPage();

const searchForm = document.querySelector('.catalog-list__search-form');
const moviesCatalog = document.querySelector('.catalog-list__items-list');

onScroll();
onToTopBtn();

// Функція, яка викликається при першому завантаженні сторінки. Трендові фільми тижня.
async function onRenderCatalogPage(page) {
  try {
    const response = await moviesAPI.getTrendMoviesWeek(page);
    moviesCatalog.innerHTML = getCatalogCards(response.data.results);
    pagination.reset(response.data.total_results);
    container.classList.remove('is-hidden');

    // Попизенко Михайло - додав слухача на картку
    const links = document.querySelectorAll('.catalog-list__list-link');
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        openModalMovie(link.dataset.id);
      });
    });
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

    if (response.data.results.length === 0) {
      container.classList.add('is-hidden');
      searchForm.reset();
      moviesCatalog.innerHTML = `<div class="catalog-list__error"><h2 class="catalog-list__error-title">OOPS...</h2><p class="catalog-list__error-text">We are very sorry!</p><p class="catalog-list__error-text">We don’t have any results due to your search.</p><div>`;
      return;
    }

    if (response.data.results < options.itemsPerPage) {
      container.classList.add('is-hidden');
      moviesCatalog.innerHTML = getCatalogCards(response.data.results);
      searchFormUpdate();

      const links = document.querySelectorAll('.catalog-list__list-link');
      links.forEach(link => {
        link.addEventListener('click', event => {
          event.preventDefault();
          openModalMovie(link.dataset.id);
        });
      });

      return;
    }

    moviesCatalog.innerHTML = getCatalogCards(response.data.results);
    searchFormUpdate();

    const links = document.querySelectorAll('.catalog-list__list-link');
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        openModalMovie(link.dataset.id);
      });
    });

    pagination.reset(response.data.total_results);
    pagination.on('afterMove', createMoviesByQueryPagination);
    scrollPage();
  } catch (err) {
    console.log(err);
  }
}
