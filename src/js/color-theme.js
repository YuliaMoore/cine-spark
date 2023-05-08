// const btnn = document.querySelector('#btnn');
// const root = document.querySelector(':root');

// const themes = {
//   default: {
//     '--dark-bg': '#111111',
//     '--white-txt-color': '#ffffff',
//     '--seconday-txt-color': '#f8f8f8',
//     '--grey-txt-color': '#b7b7b7',
//   },

//   white: {
//     '--light-bg': '#ffffff',
//     '--darck--txt-color': '#282828',
//     '--light-grey-txt-color': '#595959',
//   },
// };

// if (!localStorage.getItem('isWhiteTheme')) {
//   localStorage.setItem('isWhiteTheme', false);
// }

// let isWhiteTheme = JSON.parse(localStorage.getItem('isWhiteTheme'));
// changeTheme(isWhiteTheme);

// btnn.addEventListener('click', btnHandler);

// function btnHandler(e) {
//   e.preventDefault();
//   isWhiteTheme = !isWhiteTheme;
//   localStorage.setItem('isWhiteTheme', isWhiteTheme);
//   changeTheme(isWhiteTheme);
// }

// function changeTheme(isWhiteTheme) {
//   const theme = isWhiteTheme ? 'white' : 'default';
//   Object.entries(themes[theme]).forEach(([key, value]) => {
//     root.style.setProperty(key, value);
//   });
// }

function whitemode() {
  const body = document.body;
  const wasWhitemode = localStorage.getItem('whitemode') === 'true';

  localStorage.setItem('whitemode', !wasWhitemode);
  body.classList.toggle('white-mode');
}

document.querySelector('.switch__input').addEventListener('click', whitemode);
