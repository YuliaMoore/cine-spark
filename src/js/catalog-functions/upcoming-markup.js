import { getGenres } from './catalog-genres-get';

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

     <picture class='upcoming-images'>
        <source srcset="https://image.tmdb.org/t/p/original/${backdrop_path}" media="(min-width: 1280px)" class='upcoming-images-desktop' />
      <source srcset="https://image.tmdb.org/t/p/original/${backdrop_path}" media="(min-width: 768px)" class='upcoming-images-tablet' />
      <source srcset="https://image.tmdb.org/t/p/original/${poster_path}" media="(min-width: 480px)" />
      <img src="https://image.tmdb.org/t/p/original/${poster_path}" alt="Movie Poster" class="upcoming-image"/>
      
    </picture>

    </div>
  </a>

  <div class="upcoming-info-cover">
    
      <h2 class="upcoming-info-title">${title}</h2>

    <div class="upcoming-info">

      <div class="info-box-r">
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
        </div>

        <div class="info-box-l">
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
    </div>

    <div class="movie-info">
      <h2 class="info-title">About</h2>
      <p class="movie-description">${overview}</p>
    </div>

    <button type="button" class="upcoming-btn">Remind me</button>
  </div>

`;
}

// function changeUpcomingImg(BGI) {
//   // перевіряємо ширину екрану при завантаженні сторінки та додаємо відповідний фон
//   if (window.matchMedia('(min-width: 1280px)').matches) {
//     refs.hero.style.backgroundImage = `url('${SubtractDesktopDark}'), url('${BGI}')`;
//   } else if (window.matchMedia('(min-width: 768px)').matches) {
//     refs.hero.style.backgroundImage = `url('${SubtractTabletDark}'), url('${BGI}')`;
//   } else {
//     refs.hero.style.backgroundImage = `linear-gradient(
//       87.8deg,
//       #0e0e0e 15.61%,
//       rgba(14, 14, 14, 0) 60.39%
//     ), url('${BGI}')`;
//   }

//   // Відслуховуємо зміну ширини сторінки...
//   window.addEventListener('resize', onResizePageWidth);
//   // ... та змінюємо на відповідний фон при зміні ширини екрану
//   function onResizePageWidth(events) {
//     const currentPageWidth = events.currentTarget.innerWidth;
//     if (currentPageWidth >= 1280) {
//       refs.hero.style.backgroundImage = `url('${SubtractDesktopDark}'), url('${BGI}')`;
//     } else if (currentPageWidth >= 768) {
//       refs.hero.style.backgroundImage = `url('${SubtractTabletDark}'), url('${BGI}')`;
//     } else if (currentPageWidth < 768) {
//       refs.hero.style.backgroundImage = `linear-gradient(
//       87.8deg,
//       #0e0e0e 15.61%,
//       rgba(14, 14, 14, 0) 60.39%
//     ), url('${BGI}')`;
//     }
//   }
// }

// {
/* <img
  src="https://image.tmdb.org/t/p/w500${backdrop_path}"
  alt="${title}"
  loading="lazy"
  class="upcoming-image"
/> */
// }

// {
/* <img
  src="https://image.tmdb.org/t/p/original/${poster_path}"
  alt="Movie Poster"
  style="width: 805px"
/>; */
// }

// {
/* <source srcset="https://image.tmdb.org/t/p/original/${poster_path}" media="(min-width: 320px)" />
      <img srcset="https://image.tmdb.org/t/p/original/${
        (backdrop_path, poster_path)
      }"  style='width: 280px'/> */
// }
