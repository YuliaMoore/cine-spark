import { MoviesAPI } from './MoviesAPI';
const moviesAPI = new MoviesAPI();

import { createMovies } from '/src/js/catalog-functions/weekly-markup';

const weeklyGallery = document.querySelector('.weekly-list');

async function onRenderPage() {
  try {
    const respons = await moviesAPI.getTrendMoviesWeek();
    // console.log(respons);

    const responsData = respons.results;
    // console.log(responsData.movie_id);

    //  отримуємо три рамдомних фільми
    let responsMovies = [];

    const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

    while (responsMovies.length != 3) {
      let index = getRandomInt(responsData.length);
      responsMovies.push(responsData[index]);
      responsMovies = responsMovies.filter((v, i, arr) => arr.indexOf(v) == i);
    }

    const markup = responsMovies.reduce(
      (markup, responsMovies) => markup + createMovies(responsMovies),
      ''
    );

    // console.log(markup.length);

    updateNewsList(markup);
  } catch (err) {
    console.log(err);
  }
}
onRenderPage();
// console.log(onRenderPage());

function updateNewsList(markup) {
  weeklyGallery.innerHTML = markup;
}
