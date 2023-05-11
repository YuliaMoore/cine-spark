// import { addAndRemoveToLocalStorage } from './localStorage';
// import { MoviesAPI } from './MoviesAPI';
// const moviesAPI = new MoviesAPI();

// import { createUpcomingMovies } from '/src/js/catalog-functions/upcoming-markup';

// const upcomingCard = document.querySelector('.upcoming-cover');

// async function onRenderNewMovie() {
//   try {
//     const responsNewMovie = await moviesAPI.getUpcomingFilms();
//     // console.log(respons);

//     const responsDataMovie = responsNewMovie.results;
//     // console.log(responsDataMovie);
//     // console.log(responsData.length);

//     // отримуємо один рамдомний фільм
//     let randomNewMovie = [];

//     const getRandomFilm = max => Math.floor(Math.random() * Math.floor(max));

//     while (randomNewMovie.length != 1) {
//       let index = getRandomFilm(responsDataMovie.length);
//       randomNewMovie.push(responsDataMovie[index]);
//       randomNewMovie = randomNewMovie.filter(
//         (v, i, arr) => arr.indexOf(v) == i
//       );
//     }

//     const markupNewMovie = randomNewMovie.reduce(
//       (markup, randomNewMovie) => markup + createUpcomingMovies(randomNewMovie),
//       ''
//     );

//     updateNewMovies(markupNewMovie);
//   } catch (err) {
//     console.log(err);
//   }
// }

// onRenderNewMovie();
// // console.log(onRenderPage());

// function updateNewMovies(markup) {
//   upcomingCard.innerHTML = markup;
// }
