import { MoviesAPI } from './MoviesAPI';

import { getStarsVote } from '/src/js/hero-rating';

import SubtractDesktopDark from '../images/subtract_desktop_dark.png';
import SubtractTabletDark from '../images/subtract-tablet-dark.png';
import basicHeroBGI from '../images/home_desktop.jpg';

const moviesAPI = new MoviesAPI();

const refs = {
  container: document.querySelector('.hero-decription'),
  hero: document.querySelector('.hero'),
};

takeTrendMovieDay();

async function takeTrendMovieDay() {
  try {
    const response = await moviesAPI.getTrendMoviesDay();

    addHeroMarkup(response.results[0]);
  } catch (err) {
    addHeroBasicMarkup();
  }
}

// Додаємо розмітку на Hero з API
function addHeroMarkup({ backdrop_path, title, overview, vote_average }) {
  const urlHeroBGI = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  refs.container.innerHTML = `<h1 class="hero-title">${title}</h1><div class='hero-vote'>${getStarsVote(
    vote_average
  )}</div><p class="hero-text hero-text-API">${overview}</p>
      <button type="button" class="btn hero-btn js-open-modal" data-modal="movie-card">Watch trailer</button>`;

  changeHeroBackground(urlHeroBGI);
}

// Додаємо базову розмітку на Hero
function addHeroBasicMarkup() {
  refs.container.innerHTML = `<h1 class="hero-title">Let’s Make Your Own Cinema</h1><p class="hero-text">Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers.<span class="hero-text-more">Decorate your space, choose your films, and stock up on snacks for the full experience.</span></p><a href="/src/catalog.html" class="btn hero-btn">Get Started</a>`;

  changeHeroBackground(basicHeroBGI);
}

function changeHeroBackground(BGI) {
  // перевіряємо ширину екрану при завантаженні сторінки та додаємо відповідний фон
  if (window.matchMedia('(min-width: 1280px)').matches) {
    refs.hero.style.backgroundImage = `url('${SubtractDesktopDark}'), url('${BGI}')`;
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    refs.hero.style.backgroundImage = `url('${SubtractTabletDark}'), url('${BGI}')`;
  } else {
    refs.hero.style.backgroundImage = `linear-gradient(
      87.8deg,
      #0e0e0e 15.61%,
      rgba(14, 14, 14, 0) 60.39%
    ), url('${BGI}')`;
  }

  // Відслуховуємо зміну ширини сторінки...
  window.addEventListener('resize', onResizePageWidth);
  // ... та змінюємо на відповідний фон при зміні ширини екрану
  function onResizePageWidth(events) {
    const currentPageWidth = events.currentTarget.innerWidth;
    if (currentPageWidth >= 1280) {
      refs.hero.style.backgroundImage = `url('${SubtractDesktopDark}'), url('${BGI}')`;
    } else if (currentPageWidth >= 768) {
      refs.hero.style.backgroundImage = `url('${SubtractTabletDark}'), url('${BGI}')`;
    } else if (currentPageWidth < 768) {
      refs.hero.style.backgroundImage = `linear-gradient(
      87.8deg,
      #0e0e0e 15.61%,
      rgba(14, 14, 14, 0) 60.39%
    ), url('${BGI}')`;
    }
  }
}
