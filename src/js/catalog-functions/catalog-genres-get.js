import genresFromLocaleFile from '/src/data/genres.json'; // Це локальний json з жанрами фільмів

// Функція отримання жанрів з файлу '/src/data/genres.json
export function getGenres(ids) {
  const genresLocalList = genresFromLocaleFile.genres;
  //   console.log(genresLocalList[0].name);

  const genres = genresLocalList.filter(genre => ids.includes(genre.id));
  //   console.log(genres);

  const genresNames = genres
    .slice(0, 2)
    .map(genre => genre.name)
    .join(', ');
  // console.log(genresNames);

  return genresNames;
}

// import { MoviesAPI } from '../MoviesAPI';
// export const moviesAPI = new MoviesAPI();

// // Функція отримання жанрів з АПІ
// export async function getGenres(ids) {
//   try {
//     const genresFromApi = await moviesAPI.getGenresList();
//     // console.log(genresFromApi.data.genres);
//     const genres = genresFromApi.data.genres.filter(genre =>
//       ids.includes(genre.id)
//     );
//     let genresText = '';
//     // console.log(genres.length);
//     if (genres.length > 1) {
//       genresText = `${genres[0].name}, ${genres[1].name}`;
//     } else {
//       genresText = `${genres[0].name}`;
//     }
//     console.log(genresText);
//     return genresText;
//   } catch (err) {
//     console.log(err); // В консоль потрапляє, а в список фільмів ні
//   }
// }
