// import { getUpcomingFilms } from './MoviesAPI';

import { MoviesAPI } from './MoviesAPI';
const moviesAPI = new MoviesAPI();

import { createUpcomingMovies } from '/src/js/catalog-functions/upcoming-markup';

const upcomingCard = document.querySelector('.upcoming-cover');

async function onRenderPage() {
  try {
    const respons = await moviesAPI.getUpcomingFilms();
    // console.log(respons);

    const responsData = respons.results;
    // console.log(responsData);
    // console.log(responsData.length);

    let responsMovies = [];

    getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

    while (responsMovies.length != 1) {
      let index = getRandomInt(responsData.length);
      responsMovies.push(responsData[index]);
      responsMovies = responsMovies.filter((v, i, arr) => arr.indexOf(v) == i);
    }

    // const getRandomMovie =
    //   responsData[Math.floor(Math.random() * responsData.length)];

    // const markup = responsMovies.reduce(
    //   (markup, responsMovies) => markup + createMovies(responsMovies),
    //   ''
    // );
    const markup = responsMovies.reduce(
      (markup, responsMovies) => markup + createUpcomingMovies(responsMovies),
      ''
    );

    updateNewsList(markup);
  } catch (err) {
    console.log(err);
  }
}

onRenderPage();
// console.log(onRenderPage());
// console.log(onInfo());

function updateNewsList(markup) {
  upcomingCard.innerHTML = markup;
}
