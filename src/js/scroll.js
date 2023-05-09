export { onScroll, onToTopBtn, scrollPage };

const toTopBtn = document.querySelector('.go-to-top');

toTopBtn.addEventListener('click', onToTopBtn);
window.addEventListener('scroll', onScroll);

function onScroll() {
  const scrolled = window.pageYOffset;
  // const coords = document.documentElement.clientHeight;

  if (scrolled > 400) {
    toTopBtn.classList.add('go-to-top--visible');
  }
  if (scrolled < 400) {
    toTopBtn.classList.remove('go-to-top--visible');
  }
}

function onToTopBtn() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
}

function scrollPage() {
  const { height: cardHeight } = document
    .querySelector('.catalog-list__items-list')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 1,
    behavior: 'smooth',
  });
}
