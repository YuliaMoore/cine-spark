import { moviesAPI, moviesCatalog } from './catalog-list';
import { getCatalogCards } from '/src/js/catalog-functions/catalog-cards-get';
import Pagination from 'tui-pagination';
import { openModalMovie } from './modal-window/modal-movie';

export { pagination, createPopularPagination, createMoviesByQueryPagination, container, options };

const container = document.getElementById('tui-pagination-container');

const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}"></span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}"></span>' +
      '</span>',
    moreButton: '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">...</a>',
  },
};

const pagination = new Pagination(container, options);

function onToTopPagination() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
}

const createPopularPagination = async event => {
  try {
    const currentPage = event.page;
    moviesAPI.page = currentPage;
    const response = await moviesAPI.getTrendMoviesWeek(currentPage);
    moviesCatalog.innerHTML = getCatalogCards(response.data.results);

    // const links = document.querySelectorAll('.catalog-list__list-link');
    // links.forEach(link => {
    //   link.addEventListener('click', event => {
    //     event.preventDefault();
    //     openModalMovie(link.dataset.id);
    //   });
    // });

    onToTopPagination();
  } catch (err) {
    console.log(err);
  }
};

const createMoviesByQueryPagination = async event => {
  try {
    const currentPage = event.page;
    moviesAPI.page = currentPage;
    const response = await moviesAPI.getSearchMovies(currentPage);
    moviesCatalog.innerHTML = getCatalogCards(response.data.results);

    const links = document.querySelectorAll('.catalog-list__list-link');
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        openModalMovie(link.dataset.id);
      });
    });

    onToTopPagination();
  } catch (err) {
    console.log(err);
  }
};
