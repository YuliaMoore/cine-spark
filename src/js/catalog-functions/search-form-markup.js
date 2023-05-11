// import { MoviesAPI } from '../MoviesAPI';
// const moviesAPI = new MoviesAPI();

// import { getSearchMoviesAddParams } from '../MoviesAPI';

// const formEl = document.querySelector('.catalog-list__search-form');
// const searchInputEl = document.querySelector('.catalog-list__search-input');
// let searchFormIsOpen = false;

// export async function replaceSearchForm() {
//   if (!searchFormIsOpen) {
//     searchFormIsOpen = true;
//     // console.log('Замінюю Іннер ХТМЛ');
//     const markup = `
//     <select name="year" class="catalog-list__select-year">
//         <option value="">Select Year</option>
//         <option value="2023">2023</option>
//         <option value="2022">2022</option>
//         <!-- Опції з роками -->
//     </select>

//     <select name="genre" class="catalog-list__select-genre">
//         <option value="">Select Genre</option>
//         <option value="action">Action</option>
//         <option value="comedy">Comedy</option>
//         <!-- Опції з жанрами -->
//     </select>

//     <select name="country" class="catalog-list__select-country">
//         <option value="">Select Country</option>
//         <option value="usa">USA</option>
//         <option value="uk">UK</option>
//         <!-- Опції з країнами -->
//     </select>
//     `;
//     searchInputEl.insertAdjacentHTML('afterend', markup);
//   } else {
//     try {
//       const response = await moviesAPI.getSearchMoviesAddParams(
//         page,
//         'Harry Potter',
//         2021,
//         'Fantasy',
//         'US'
//       );
//       console.log(response.data.results);
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }

// // https://api.themoviedb.org/3/search/movie?api_key=cca79e12b25cdd9f67fc795a1689f5d9&language=en-US&query=mavka&page=1&include_adult=false&region=IO&year=2020

// // https://api.themoviedb.org/3/configuration/countries?api_key=cca79e12b25cdd9f67fc795a1689f5d9

// // https://api.themoviedb.org/3/genre/movie/list?api_key=cca79e12b25cdd9f67fc795a1689f5d9&language=en-US
