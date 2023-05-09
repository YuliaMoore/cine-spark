// перезаписування в локальне сховище
function addAndRemoveToLocalStorage(key, value) {
  try {
    if (typeof value === 'string') {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    console.error(error);
  }
}
// витягування з локал. сховища
function getFromStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(error);
  }
}

// експорт ф-ції перезаписування з локального сховища та витягування з локального сховища
export { addAndRemoveToLocalStorage, getFromStorage };
