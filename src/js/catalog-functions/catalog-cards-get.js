import { getGenres } from './catalog-genres-get';
import { getStarsRating } from './catalog-rating-get';
import posterNoPhoto from '/src/images/nophoto.jpg';

export function getCatalogCards(backendQuery) {
  const catalogCardsMarkup = backendQuery

    .map(
      ({ title, genre_ids, release_date, vote_average, poster_path, id }) => {
      
      if (poster_path) {
        poster_path = `https://image.tmdb.org/t/p/w500${poster_path}`;
      } else {
        poster_path = posterNoPhoto;
      }
      return `
    <li class='catalog-list__item'>
        <a href='#' class='catalog-list__list-link' data-id="${id}" data-modal="movie-card">
            <div class='catalog-list__list-wrapper'>
                <div class='catalog-list__info'>
                    <h2 class='catalog-list__title'>${title}</h2>
                    <div class='catalog-list__additional-info'>
                        <p class='catalog-list__movie-type'>${getGenres(
                          genre_ids
                        )} | ${release_date.slice(0, 4)}</p>
                        <div class='catalog-list-rating'>${getStarsRating(vote_average)}
                        </div>
                    </div>
                </div>
                <img
                    src='${poster_path}'
                    alt='${title}'
                    width='280'
                    height='406'
                    class='catalog-list__image'
                />
            </div>
        </a>
    </li> `;
      }
    )
    .join('');
  // console.log(catalogCardsMarkup);
  return catalogCardsMarkup;
}
