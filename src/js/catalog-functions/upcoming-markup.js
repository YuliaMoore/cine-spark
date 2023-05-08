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
  overview,
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
    
      <h2 class="upcoming-info-title">${title}</h2>

    <div class="upcoming-info">

      <ul class="upcoming-info-list">
        <li class="list-info">
          <ul class="info-list">
            <li class="upcoming-list__title">Release date</li>
            <li class="upcoming-list__value-data">${release_date}</li>
          </ul>
        <li>

        <li class="list-info">
          <ul class="info-list">
            <li class="upcoming-list__title">Vote / Votes</li>
            <li class="upcoming-list__value">
              <span class="upcoming-value-text averange">${vote_average}</span>
                /
              <span class="upcoming-value-text count">${vote_count}</span>
            </li>
          </ul>
        </li>

        <li class="list-info">
          <ul class="info-list">
            <li class="upcoming-list__title">Popularity</li>
            <li class="upcoming-list__value">${popularity}</li>
          </ul>
        </li>

        <li class="list-info">
          <ul class="info-list">
            <li class="upcoming-list__title">Genre</li>
            <li class="upcoming-list__value">${getGenres(genre_ids)}</li>
          <ul>
        <li>
      </ul>
    </div>

    <div class="movie-info">
      <h2 class="info-title">About</h2>
      <p class="movie-description">${overview}</p>
    </div>

    <button type="button" class="upcoming-btn">Remind me</button>
  </div>

`;
}
