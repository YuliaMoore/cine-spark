export function removeFromLibrary(movieId) {
  //   console.log('Функція видалення фільму з локального сховища');
  // Отримати поточний список фільмів з локального сховища
  let libraryFilms = JSON.parse(localStorage.getItem('libraryFilm')) || [];
  //   console.log(movieId);
  //   console.log(libraryFilms.flat());
  // Видаляємо запис з libraryFilms по ІД фільму
  libraryFilms = libraryFilms.flat().filter(value => value.id !== movieId);
  // console.log(libraryFilms);
  // Зберегти оновлений список фільмів у локальному сховищі
  localStorage.setItem('libraryFilm', JSON.stringify(libraryFilms));
}
