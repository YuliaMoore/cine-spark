import { MoviesAPI } from './MoviesAPI';
import imgForModal from '../images/error.png';

const refs = {
  heroModal: document.querySelector('.hero-modal'),
  overlay: document.querySelector('.hero-overlay'),
  modalContainer: document.querySelector('.hero-modal-container'),
  closeBtn: document.querySelector('.hero-close-btn'),
};

refs.closeBtn.addEventListener('click', onCloseHeroModal);
refs.overlay.addEventListener('click', onClickOverlay);

const moviesAPI = new MoviesAPI();

let savedId;

// Відкриття модального вікна
export function onOpenHeroModal() {
  if (refs.modalContainer.innerHTML === '') {
    getCurrentFilmVideo(savedId);
  }
  window.addEventListener('keydown', onEscKeyPress);
  refs.heroModal.classList.add('active');
  refs.overlay.classList.add('active');
}
// Закриття модального вікна по кнопці
function onCloseHeroModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.heroModal.classList.remove('active');
  refs.overlay.classList.remove('active');
  refs.modalContainer.innerHTML = '';
}

// Закриття модального вікна по кліку на бекдроп
function onClickOverlay(event) {
  if (event.target === event.currentTarget) {
    onCloseHeroModal();
  }
}

// Закриття модального вікна по кнопці Esc
function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseHeroModal();
  }
}

// Отримуємо ID фільму дня
function getFilmOfDayId(id) {
  savedId = id;
  getCurrentFilmVideo(id);
}

// Отримуємо всі відео по фільму
async function getCurrentFilmVideo(id) {
  try {
    const response = await moviesAPI.getFilmVideo(id);
    searchOfficialTrailer(response.results);
  } catch (err) {
    addBasicHeroModalMarkup();
  }
}

// Шукаємо в переліку відео офіційний трейлер
function searchOfficialTrailer(videos) {
  const OfficialTrailer = videos.find(video => video.type === 'Trailer');

  if (OfficialTrailer) {
    addTrailerOnModal(OfficialTrailer);
  } else {
    addBasicHeroModalMarkup();
  }
}

// Якщо знаходить трейлер, додаємо його в модалку
function addTrailerOnModal({ key }) {
  const modalMarkup = `<iframe class='player'
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/${key}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>`;

  refs.modalContainer.innerHTML = modalMarkup;
}

// Якщо не знаходить трейлер, відмальовуємо базову розмітку
function addBasicHeroModalMarkup() {
  const modalMarkup = `<div class="hero-modal-box">
      <p class="hero-modal-text">OOPS...</p>
      <p class="hero-modal-text">We are very sorry!</p>
      <p class="hero-modal-text">But we couldn’t find the trailer.</p>
    </div>
    <img class="hero-modal-img" src="${imgForModal}" alt="Cinema" />
  </div>`;

  refs.modalContainer.innerHTML = modalMarkup;
}

export { onOpenHeroModal, getFilmOfDayId };
