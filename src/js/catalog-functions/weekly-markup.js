import { getGenres } from './catalog-genres-get';
import { getStarsRating } from './catalog-rating-get';

export function createMovies({
  title,
  release_date,
  poster_path,
  genre_ids,
  vote_average,
}) {
  return `
    <li class="weekly-item">
  <a href="#" class="weekly-link">
    <div class="weekly-wrapper">

      <div class="weekly-info">
        <h2 class="weekly-info__title">${title}</h2>

        <div class="catalog-list__additional-info">
          <p class="weekly-info__genres__data">${getGenres(
            genre_ids
          )} | ${release_date.slice(0, 4)}
        </p>

          <div class="weekly-rating">${getStarsRating(vote_average)}</div>
        </div>
      </div>

      <img
        src="https://image.tmdb.org/t/p/w500${poster_path}"
        alt="${title}"
        
        class="weekly-img"
      />
    </div>
  </a>
</li>
`;
}
