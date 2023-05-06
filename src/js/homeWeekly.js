import { getTrendingFilms } from './MoviesAPI';

const weeklyGallery = document.querySelector('.weekly-gallery');

// const moviesApi = new MoviesAPI();
// console.log(moviesApi);

const genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

async function onRenderPage() {
  try {
    const respons = await getTrendingFilms();
    console.log(respons);

    const responsData = respons.results;
    console.log(responsData);
    console.log(responsData.length);

    let responsMovies = [];

    getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

    while (responsMovies.length != 3) {
      let index = getRandomInt(responsData.length);
      responsMovies.push(responsData[index]);
      responsMovies = responsMovies.filter((v, i, arr) => arr.indexOf(v) == i);
    }

    const markup = responsMovies.reduce(
      (markup, responsMovies) => markup + createMovies(responsMovies),
      ''
    );

    updateNewsList(markup);
  } catch (err) {
    console.log(err);
  }
}

console.log(onRenderPage());

function createMovies({
  title,
  release_date,
  poster_path,
  genre_ids,
  vote_average,
}) {
  let year = '';
  if (release_date) {
    year = release_date?.slice(0, 4);
  } else {
    year = first_air_date?.slice(0, 4);
  }

  let tempGenres = [];

  genre_ids.forEach(genre => {
    genres.forEach(({ id, name }) => {
      if (id === genre) {
        tempGenres.push(name);
        // (tempGenres);
      }
    });
  });
  let tempGenresString = tempGenres.join(', ');

  return `
<li class="catalog-list__item">
    <div class='catalog-list__list-wrapper'>
      <div class='catalog-list__info'>
      
      <h2 class='catalog-list__title'>${title}</h2>
        
        <p class='catalog-list__movie-type'>${tempGenresString}
          <span class='catalog-list__movie-year'>${year}</span>
        </p>
        <div class='catalog-list__movie-rating'>${vote_average}</div>
      </div>

      <img
        src='https://image.tmdb.org/t/p/w500${poster_path}'
        alt='${title}'
        width='280'
        height='406'
        class='catalog-list__image'
       />

    </div>
  </li>
`;
}

function updateNewsList(markup) {
  weeklyGallery.innerHTML = markup;
}
