import { MoviesAPI } from './MoviesAPI';
import { getStarsVote } from '/src/js/hero-rating';
import { onOpenHeroModal, takeFilmOfDayId } from '/src/js/hero-modal.js';

import subtractDesktopDark from '../images/subtract_desktop_dark.png';
import subtractDesktopLight from '../images/subtract-desktop-ligth.png';
import subtractTabletDark from '../images/subtract-tablet-dark.png';
import subtractTabletLight from '../images/subtract-tablet-ligth.png';
import basicHeroBGI from '../images/home_desktop.jpg';

const moviesAPI = new MoviesAPI();

const refs = {
  container: document.querySelector('.hero-decription'),
  hero: document.querySelector('.hero'),
};

let currentSubtractDesktop;
let currentSubtractTablet;

document.addEventListener('DOMContentLoaded', onloadHero);

function onloadHero() {
  if (document.body.classList.contains('white-mode')) {
    currentSubtractDesktop = subtractDesktopLight;
    currentSubtractTablet = subtractTabletLight;
  } else {
    currentSubtractDesktop = subtractDesktopDark;
    currentSubtractTablet = subtractTabletDark;
  }
}

takeTrendMovieDay();

async function takeTrendMovieDay() {
  try {
    const response = await moviesAPI.getTrendMoviesDay();
    const randomFilmOfDay = Math.floor(Math.random() * response.results.length);

    addHeroMarkup(response.results[randomFilmOfDay]);

    takeFilmOfDayId(response.results[randomFilmOfDay].id);
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
      <button type="button" class="btn hero-btn">Watch trailer</button>`;

  const WatchTrailerBtn = document.querySelector('.hero-btn');
  WatchTrailerBtn.addEventListener('click', onOpenHeroModal);

  changeHeroBackground(urlHeroBGI);

  document
    .querySelector('.switch__input')
    .addEventListener('click', onChakboxMode);

  function onChakboxMode() {
    onloadHero();
    changeHeroBackground(urlHeroBGI);
  }
}

// Додаємо базову розмітку на Hero
function addHeroBasicMarkup() {
  refs.container.innerHTML = `<h1 class="hero-title">Let’s Make Your Own Cinema</h1><p class="hero-text">Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers.<span class="hero-text-more">Decorate your space, choose your films, and stock up on snacks for the full experience.</span></p><a href="../catalog.html"" class="btn hero-btn">Get Started</a>`;

  changeHeroBackground(basicHeroBGI);

  document
    .querySelector('.switch__input')
    .addEventListener('click', onChakboxMode);

  function onChakboxMode() {
    onloadHero();
    changeHeroBackground(basicHeroBGI);
  }
}

function changeHeroBackground(BGI) {
  // перевіряємо ширину екрану при завантаженні сторінки та додаємо відповідний фон
  if (window.matchMedia('(min-width: 1280px)').matches) {
    refs.hero.style.backgroundImage = `url('${currentSubtractDesktop}'), url('${BGI}')`;
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    refs.hero.style.backgroundImage = `url('${currentSubtractTablet}'), url('${BGI}')`;
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
      refs.hero.style.backgroundImage = `url('${currentSubtractDesktop}'), url('${BGI}')`;
    } else if (currentPageWidth >= 768) {
      refs.hero.style.backgroundImage = `url('${currentSubtractTablet}'), url('${BGI}')`;
    } else if (currentPageWidth < 768) {
      refs.hero.style.backgroundImage = `linear-gradient(
      87.8deg,
      #0e0e0e 15.61%,
      rgba(14, 14, 14, 0) 60.39%
    ), url('${BGI}')`;
    }
  }
}
