import { moviesAPI } from './catalog-list';
import { getCatalogCards } from '/src/js/catalog-functions/catalog-cards-get';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

export const container = document.getElementById('tui-pagination-container');

export const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

export const pagination = new Pagination(container, options);
export const page = pagination.getCurrentPage();

export const createPopularPagination = async event => {
  try {
    const currentPage = event.page;
    const response = await moviesAPI.getSearchMovies(currentPage);
    moviesCatalog.innerHTML = getCatalogCards(response.results);
  } catch (err) {
    console.log(err);
  }
};

export const createPhotosByQueryPagination = async event => {
  try {
    const currentPage = event.page;
    const response = await moviesAPI.getTrendMoviesWeek(currentPage);
    moviesCatalog.innerHTML = getCatalogCards(response.results);
  } catch (err) {
    console.log(err);
  }
};
