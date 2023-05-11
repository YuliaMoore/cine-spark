import { MoviesAPI } from './MoviesAPI';
import { createMovies } from '/src/js/catalog-functions/weekly-markup';
import { createUpcomingMovies } from '/src/js/catalog-functions/upcoming-markup';
import { onScroll, onToTopBtn } from './scroll';
import { addAndRemoveToLocalStorage } from './localStorage';
import { openModalMovie } from './modal-window/modal-movie';

const moviesAPI = new MoviesAPI();
const weeklyGallery = document.querySelector('.weekly-list');

// скрол
onScroll();
onToTopBtn();

async function onRenderPage() {
  try {
    const respons = await moviesAPI.getTrendMoviesWeeks();

    const responsData = respons.results;

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
    // скрол
    // scrollPage();
  } catch (err) {
    console.log(err);
  }
}
onRenderPage();
// console.log(onRenderPage());

function updateNewsList(markup) {
  weeklyGallery.innerHTML = markup;
}

// ===секція "нові фільми"===

const upcomingCard = document.querySelector('.upcoming-cover');

async function onRenderNewMovie() {
  try {
    const responsNewMovie = await moviesAPI.getUpcomingFilms();
    // console.log(respons);

    const responsDataMovie = responsNewMovie.results;
    // console.log(responsDataMovie);
    // console.log(responsData.length);

    if (!responsDataMovie) {
      return alert(
        'Вибачте! Нових фільмів не знайдено/Sorry! No new movies found'
      );
    }

    // отримуємо один рамдомний фільм
    let randomNewMovie = [];
    // console.log(randomNewMovie);

    const getRandomFilm = max => Math.floor(Math.random() * Math.floor(max));

    while (randomNewMovie.length != 1) {
      let index = getRandomFilm(responsDataMovie.length);
      randomNewMovie.push(responsDataMovie[index]);
      randomNewMovie = randomNewMovie.filter(
        (v, i, arr) => arr.indexOf(v) == i
      );
    }

    const markupNewMovie = randomNewMovie.reduce(
      (markup, randomNewMovie) => markup + createUpcomingMovies(randomNewMovie),
      ''
    );

    updateNewMovies(markupNewMovie);

    // Додаємо слухача на кнопку Remind me і при кліку на цю кнопку викликаємо функцію addToLibrary (запис в локальне сховище)
    const movieObject = randomNewMovie[0];
    // console.log(randomNewMovie[0]);
    const remindMeBtn = document.querySelector('.upcoming-btn');
    remindMeBtn.addEventListener('click', function () {
      addToLibrary(movieObject);
    });

    // }, 2000);

    // скрол
    // scrollPage();
  } catch (err) {
    console.log(err);
  }
}

onRenderNewMovie();
// console.log(onRenderPage());

function updateNewMovies(markup) {
  upcomingCard.innerHTML = markup;
}

//скрол
// function scrollPage() {
//   const { height: cardHeight } = document
//     .querySelector('.main')
//     .firstElementChild.getBoundingClientRect();

//   window.scrollBy({
//     top: cardHeight * 1,
//     behavior: 'smooth',
//   });
// }
