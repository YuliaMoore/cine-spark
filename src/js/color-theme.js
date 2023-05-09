// function whitemode() {
//   const body = document.body;
//   const wasWhitemode = localStorage.getItem('whitemode') === 'true';

//   localStorage.setItem('whitemode', !wasWhitemode);
//   body.classList.toggle('white-mode');
// }

// document.querySelector('.switch__input').addEventListener('click', whitemode);

// function onload() {
//   document.body.classList.toggle('white-mode', localStorage.getItem('whitemode') === 'true');
// }

// document.addEventListener('DOMContentLoaded', onload);

const checkBoxEl = document.querySelector('.switch__input');
let checkBoxWhitemode = localStorage.getItem('whitemode');
const bodyTag = document.body;

function whitemode() {
  if (checkBoxEl.checked) {
    localStorage.setItem('whitemode', 'true');
    bodyTag.classList.add('white-mode');
  } else {
    localStorage.setItem('whitemode', 'false');
    bodyTag.classList.remove('white-mode');
  }
}

checkBoxEl.addEventListener('click', whitemode);

function onload() {
  if (checkBoxWhitemode === 'true') {
    checkBoxEl.checked = true;
    bodyTag.classList.add('white-mode');
  } else {
    checkBoxEl.checked = false;
    bodyTag.classList.remove('white-mode');
  }
}

document.addEventListener('DOMContentLoaded', onload);
