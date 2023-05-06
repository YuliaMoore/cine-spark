import { MoviesAPI } from './MoviesAPI';

import SubtractDesktopDark from '../images/subtract_desktop_dark.png';
import SubtractTabletDark from '../images/subtract-tablet-dark.png';

const moviesAPI = new MoviesAPI();

const refs = {
  container: document.querySelector('.hero-decription'),
  hero: document.querySelector('.hero'),
};

takeTrendMovieDay();

async function takeTrendMovieDay() {
  try {
    const response = await moviesAPI.getTrendMoviesDay();
    changeHeroMarkup(response.results[4]);
  } catch (err) {
    console.log(err);
  }
}

// Додаємо розмітку на Hero
function changeHeroMarkup({ backdrop_path, title, overview, vote_average }) {
  refs.container.innerHTML = `<h1 class="hero-title">${title}</h1><span class='hero-vote'>Vote average: ${vote_average}</span><p class="hero-text hero-text-API">${overview}</p>
      <button type="button" class="btn hero-btn">Watch trailer</button>`;

  // Перевіряємо ширину сторінки на додаємо відповідний фон
  if (window.matchMedia('(min-width: 1200px)').matches) {
    refs.hero.style.backgroundImage = `url('${SubtractDesktopDark}'), url('https://image.tmdb.org/t/p/w1280${backdrop_path}')`;
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    refs.hero.style.backgroundImage = `url('${SubtractTabletDark}'), url('https://image.tmdb.org/t/p/w1280${backdrop_path}')`;
  } else {
    refs.hero.style.backgroundImage = `linear-gradient(
      87.8deg,
      #0e0e0e 15.61%,
      rgba(14, 14, 14, 0) 60.39%
    ), url('https://image.tmdb.org/t/p/w1280${backdrop_path}')`;
  }

  window.addEventListener('resize', onResizePageWidth);
  // Відслуховуємо зміну ширини сторінки та змінюємо на відповідний фон
  function onResizePageWidth(events) {
    const currentPageWidth = events.currentTarget.innerWidth;

    if (currentPageWidth >= 1200) {
      refs.hero.style.backgroundImage = `url('${SubtractDesktopDark}'), url('https://image.tmdb.org/t/p/w1280${backdrop_path}')`;
    } else if (currentPageWidth >= 768) {
      refs.hero.style.backgroundImage = `url('${SubtractTabletDark}'), url('https://image.tmdb.org/t/p/w1280${backdrop_path}')`;
    } else {
      refs.hero.style.backgroundImage = `linear-gradient(
      87.8deg,
      #0e0e0e 15.61%,
      rgba(14, 14, 14, 0) 60.39%
    ), url('https://image.tmdb.org/t/p/w1280${backdrop_path}')`;
    }
  }
}
