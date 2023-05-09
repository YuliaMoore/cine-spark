// // підключаємо бібліотеку axios
// import axios from 'axios';

// export class MoviesAPI {
//   // Приватні властивості
//   #BASE_URL = 'https://api.themoviedb.org';
//   #API_KEY = 'cca79e12b25cdd9f67fc795a1689f5d9';
//   #query = '';

//   //для відображення рандомних фільмів у каталозі
//   getTrendingFilms(page) {
//     return axios.get('${this.#BASE_URL}/3/trending/movie', {
//       params: {
//         query: 'random',
//         page,
//         per_page: 10,
//         movie_id: this.#API_KEY,
//       },
//     });
//   }

//   // для відображення фільмів у каталозі за пошуком
//   fetchFilmsByQuery(page) {
//     return axios.get(`${this.#BASE_URL}/search/movie`, {
//       params: {
//         query: this.#query,
//         page,
//         per_page: 10,
//         movie_id: this.#API_KEY,
//       },
//     });
//   }

//   set query(newQuery) {
//     this.#query = newQuery;
//   }

//   // Романчук Володимир "ставлю свої поки що, потім розберемось"...
//   // Три функції: тренди дня, тижня і пошуковий запит.

//   // Лучкевич Віталій додав функцію запиту нових фільмів getUpcomingFilms

//   async getTrendMoviesDay() {
//     try {
//       const response = await axios.get(
//         `${this.#BASE_URL}/3/trending/movie/day?api_key=${this.#API_KEY}`
//       );
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response.status);
//     }
//   }

//   async getTrendMoviesWeek() {
//     try {
//       const response = await axios.get(
//         `${this.#BASE_URL}/3/trending/movie/week?api_key=${
//           this.#API_KEY
//         }&append_to_response=videos`
//       );
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response.status);
//     }
//   }

//   async getUpcomingFilms() {
//     try {
//       const response = await axios.get(
//         `${this.#BASE_URL}/3/movie/upcoming?api_key=${this.#API_KEY}`
//       );
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response.status);
//     }
//   }

//   async getSearchMovies(searchQuery, page) {
//     try {
//       const response = await axios.get(
//         `${this.#BASE_URL}/3/search/movie?api_key=${
//           this.#API_KEY
//         }&query=${searchQuery}&language=en-US&page=${page}&include_adult=false`
//       );
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response.status);
//     }
//   }

//   // Функція для отримання 2-х жанрів фільмів по вказаних ids
//   // Але зробити не вдалось, оскільки з Handlesbar не підтримує асинхронні функції в хелперах, тому звичайний масив локатоно зберігаємо.
//   // async getGenres(...ids) {
//   //   try {
//   //     const response = await axios.get(
//   //       `${this.#BASE_URL}/3/genre/movie/list?api_key=${
//   //         this.#API_KEY
//   //       }&language=en-US`
//   //     );
//   //     const genres = response.data.genres.filter(genre =>
//   //       ids.includes(genre.id)
//   //     );
//   //     let genresText = '';
//   //     // console.log(genres.length);
//   //     if (genres.length > 1) {
//   //       genresText = `${genres[0].name}, ${genres[1].name}`;
//   //     } else {
//   //       genresText = `${genres[0].name}`;
//   //     }
//   //     // console.log(genresText);
//   //     return genresText;
//   //   } catch (error) {
//   //     throw new Error(error.response.status);
//   //   }
//   // }
// }

import axios from 'axios';

export class MoviesAPI {
  // Приватні властивості
  #BASE_URL = 'https://api.themoviedb.org';
  #API_KEY = 'cca79e12b25cdd9f67fc795a1689f5d9';
  #query = '';

  constructor() {
    this.currentPage = 1;
    this.lang = 'en';
    this.allGenres = [];
  }

  getTrendMoviesWeek(page) {
    return axios.get(
      `${this.#BASE_URL}/3/trending/movie/day?api_key=${this.#API_KEY}`,
      {
        params: {
          page: this.currentPage,
        },
      }
    );
  }

  getSearchMovies(page) {
    return axios.get(
      `${this.#BASE_URL}/3/search/movie?api_key=${this.#API_KEY}`,
      {
        params: {
          page: this.currentPage,
          query: this.#query,
          language: this.lang,
          include_adult: false,
        },
      }
    );
  }

  get page() {
    return this.currentPage;
  }

  set page(newPage) {
    this.currentPage = newPage;
  }

  get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }

  // Отримати тренди тижня
  async getTrendMoviesWeeks() {
    const response = await axios.get(
      `${this.#BASE_URL}/3/trending/movie/week?api_key=${this.#API_KEY}`
    );
    return response.data;
  }

  // //для відображення рандомних фільмів у каталозі
  // getTrendingFilms(page) {
  //   return axios.get('${this.#BASE_URL}/3/trending/movie', {
  //     params: {
  //       query: 'random',
  //       page,
  //       per_page: 10,
  //       movie_id: this.#API_KEY,
  //     },
  //   });
  // }

  // // для відображення фільмів у каталозі за пошуком
  // fetchFilmsByQuery(page) {
  //   return axios.get(`${this.#BASE_URL}/search/movie`, {
  //     params: {
  //       query: this.#query,
  //       page,
  //       per_page: 10,
  //       movie_id: this.#API_KEY,
  //     },
  //   });
  // }

  // Отримати тренди дня

  async getTrendMoviesDay() {
    const response = await axios.get(
      `${this.#BASE_URL}/3/trending/movie/day?api_key=${this.#API_KEY}`
    );
    return response.data;
  }

  // Отримати тренди тижня

  // async getTrendMoviesWeek() {
  //   const response = await axios.get(
  //     `${this.#BASE_URL}/3/trending/movie/week?api_key=${this.#API_KEY}`
  //   );
  //   return response.data;
  // }

  // отримати нові фільми
  async getUpcomingFilms() {
    const response = await axios.get(
      `${this.#BASE_URL}/3/movie/upcoming?api_key=${this.#API_KEY}`
    );
    return response.data;
  }

  // Отримати фільми по запиту

  // async getSearchMovies(searchQuery, page) {
  //   const response = await axios.get(
  //     `${this.#BASE_URL}/3/search/movie?api_key=${
  //       this.#API_KEY
  //     }&query=${searchQuery}&language=en-US&page=${page}&include_adult=false`
  //   );
  //   return response.data;
  // }

  async getMovieById(id) {
    const { data } = await axios.get(`${BASE_URL}${id}?api_key=${API_KEY}`);

    const result = {
      ...data,
      year: createYear(data),
      customGenres: createGenresFromID(data),
    };

    return result;
  }

  async getMovieById2() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );
    const result = {
      ...data,
    };
    return result;
  }

  async getFilmVideo(idFilm) {
    const response = await axios.get(
      `${this.#BASE_URL}/3/movie/${idFilm}/videos?api_key=${
        this.#API_KEY
      }&language=en-US`
    );
    return response.data;
  }

  // async getSearchMovies(searchQuery, page) {
  //   const response = await axios.get(
  //     `${this.#BASE_URL}/3/search/movie?api_key=${
  //       this.#API_KEY
  //     }&query=${searchQuery}&language=en-US&page=${page}&include_adult=false`
  //   );
  //   return response.data;
  // }

  // Функція для отримання 2-х жанрів фільмів по вказаних ids
  // Але зробити не вдалось, оскільки з Handlesbar не підтримує асинхронні функції в хелперах, тому звичайний масив локатоно зберігаємо.
  // async getGenres(...ids) {
  //   try {
  //     const response = await axios.get(
  //       `${this.#BASE_URL}/3/genre/movie/list?api_key=${
  //         this.#API_KEY
  //       }&language=en-US`
  //     );
  //     const genres = response.data.genres.filter(genre =>
  //       ids.includes(genre.id)
  //     );
  //     let genresText = '';
  //     // console.log(genres.length);
  //     if (genres.length > 1) {
  //       genresText = `${genres[0].name}, ${genres[1].name}`;
  //     } else {
  //       genresText = `${genres[0].name}`;
  //     }
  //     // console.log(genresText);
  //     return genresText;
  //   } catch (error) {
  //     throw new Error(error.response.status);
  //   }
  // }
}
