export function addToLibrary(movieObject) {
  // Отримати поточний список фільмів з Locale Storage
  let libraryFilms = JSON.parse(localStorage.getItem('libraryFilm')) || [];
  // Всі консоль логи нижче праюють тільки тоді, коли в
  // console.log(`libraryFilms: `, libraryFilms);
  // console.log(`libraryFilms.flat(): `, libraryFilms.flat());
  // console.log(`libraryFilms[0].id: `, libraryFilms[0].id);
  // console.log(`movieObject: `, movieObject);
  // Перевірка чи такого фільму ще немає в Locale Storage
  if (libraryFilms.flat().some(value => value.id === movieObject.id)) {
    // Якщо фільм вже є, тоді поки що нічого не робимо
    console.log('Фільм вже додано в Locale Storage');
    return;
  } else {
    console.log('Такого фільму ще немає в Locale Storage, додаємо');
    // Додаємо новий запис до масиву.
    libraryFilms.push(movieObject);
    console.log('libraryFilms: ', libraryFilms);
  }
  // Зберегти оновлений список фільмів у Locale Storage
  localStorage.setItem('libraryFilm', JSON.stringify(libraryFilms));
}
