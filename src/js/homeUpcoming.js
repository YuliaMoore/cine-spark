import { getUpcomingFilms } from './MoviesAPI';

const upcomingCard = document.querySelector('.upcoming-container');

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
    const respons = await getUpcomingFilms();
    console.log(respons);

    const responsData = respons.results;
    console.log(responsData);
    console.log(responsData.length);

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

//! =====================================================

// async function onInfo() {
//   try {
//     const respons = await getInfoFilms();
//     console.log(respons);

//     const responsData = respons.results;
//     console.log(responsData);
// console.log(responsData.length);

// let responsMovies = [];

// getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

// while (responsMovies.length != 3) {
//   let index = getRandomInt(responsData.length);
//   responsMovies.push(responsData[index]);
//   responsMovies = responsMovies.filter((v, i, arr) => arr.indexOf(v) == i);
// }

// const markup = responsMovies.reduce(
//   (markup, responsMovies) => markup + createMovies(responsMovies),
//   ''
// );

// updateNewsList(markup);
//   } catch (err) {
//     console.log(err);
//   }
// }

// !========================================================

console.log(onRenderPage());
// console.log(onInfo());

function createUpcomingMovies({
  title,
  release_date,
  backdrop_path,
  poster_path,
  genre_ids,
  vote_average,
}) {
  //   let year = '';
  //   if (release_date) {
  //     year = release_date?.slice(0, 4);
  //   } else {
  //     year = first_air_date?.slice(0, 4);
  //   }

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
   <a href="#">

    <div class='upcoming-img'>
      <img
        src='https://image.tmdb.org/t/p/w500${backdrop_path}'
        alt='${title}' loading="lazy"
        
        class='upcoming-image'
       />
    </div>
    </a>
 
      <div class='upcoming-info'>
      
      <h2 class='upcoming-list__title'>${title}</h2>

        <p class='upcoming-genre'>${tempGenresString}
          <span class='upcoming-year'>${release_date}</span>
        </p>
         <p class='upcoming-rating'>${vote_average}</p>
      </div>

      <div class='movie-info'>
      <h2 class='info-title'>About</h2>
      <p class='movie-description'></p>
   
      </div>

      <button type='button' class='upcoming-btn'>Remind me</button>

      

 
  
`;
}

function updateNewsList(markup) {
  upcomingCard.innerHTML = markup;
}
