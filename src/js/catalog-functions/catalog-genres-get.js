import genresFromLocaleFile from '/src/data/genres.json'; // Це локальний json з жанрами фільмів

export function getGenres(ids) {
  const genresLocalList = genresFromLocaleFile.genres;
  //   console.log(genresLocalList[0].name);

  const genres = genresLocalList.filter(genre => ids.includes(genre.id));
  //   console.log(genres);

  const genresNames = genres.slice(0, 2).map(genre => genre.name);
  // console.log(genresNames);

  return genresNames;
}
