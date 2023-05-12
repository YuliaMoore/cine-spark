export function getPosterForCard(path) {
  return `
         <img
  class="movie__poster"
  ${
    path
      ? `
    srcset="
    https://image.tmdb.org/t/p/w300/${path}      300w,
    https://image.tmdb.org/t/p/w500/${path}      500w,
    https://image.tmdb.org/t/p/w780/${path}      780w,
    https://image.tmdb.org/t/p/w1280/${path}    1280w,
    https://image.tmdb.org/t/p/original/${path} 2000w
  "
  src="https://image.tmdb.org/t/p/w300/${path}"
  sizes="(min-width:1280px) 375px, (min-width:768px) 264px, 100vw"

  
  `
      : `src="https://upload.wikimedia.org/wikipedia/commons/f/f9/No-image-available.jpg"
  `
  }
  alt="Movie title"
/>
`;
}
