function whitemode() {
  const body = document.body;
  const wasWhitemode = localStorage.getItem('whitemode') === 'true';

  localStorage.setItem('whitemode', !wasWhitemode);
  body.classList.toggle('white-mode');
}

document.querySelector('.switch__input').addEventListener('click', whitemode);
