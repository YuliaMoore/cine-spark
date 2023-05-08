import { getGenres } from './catalog-genres-get';
import { getStarsRating } from './catalog-rating-get';

export function createUpcomingMovies({
  title,
  release_date,
  backdrop_path,
  poster_path,
  genre_ids,
  vote_average,
  popularity,
  vote_count,
}) {
  return `

    <a href="#">
    <div class="upcoming-img">
      <img
        src="https://image.tmdb.org/t/p/w500${backdrop_path}"
        alt="${title}"
        loading="lazy"
        class="upcoming-image"
      />
    </div>
  </a>

  <div class="upcoming-info-cover">
    
      <h2 class="upcoming-list__title">${title}</h2>

    <div class="upcoming-info">

      <p class="upcoming-data">Release date <span class="upcoming-data-text">${release_date}</span></p>

      <p class="upcoming-vote">Vote/Votes<span class="upcoming-vote-text">${vote_average} / ${vote_count}</span></p>

      <p class="upcoming-rating">Popularity<span class="upcoming-rating-text">${popularity}</span></p>

      <p class="upcoming-genre">Genre<span class="upcoming-genre-text">${getGenres(
        genre_ids
      )}</span></p>
      
    </div>

    <div class="movie-info">
      <h2 class="info-title">About</h2>
      <p class="movie-description">HI</p>
    </div>

    <button type="button" class="upcoming-btn">Remind me</button>
  </div>

`;
}
