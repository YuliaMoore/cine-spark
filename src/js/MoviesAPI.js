// підключаємо бібліотеку axios
import axios from 'axios';

export class MoviesAPI {
  // Приватні властивості
  #BASE_URL = 'https://api.themoviedb.org';
  #API_KEY = 'cca79e12b25cdd9f67fc795a1689f5d9';
  #query = '';

  //для відображення рандомних фільмів у каталозі
  getTrendingFilms(page) {
    return axios.get('${this.#BASE_URL}/3/trending/movie', {
      params: {
        query: 'random',
        page,
        per_page: 10,
        movie_id: this.#API_KEY,
      },
    });
  }

  // для відображення фільмів у каталозі за пошуком
  fetchFilmsByQuery(page) {
    return axios.get(`${this.#BASE_URL}/search/movie`, {
      params: {
        query: this.#query,
        page,
        per_page: 10,
        movie_id: this.#API_KEY,
      },
    });
  }

  set query(newQuery) {
    this.#query = newQuery;
  }

  // Романчук Володимир "ставлю свої поки що, потім розберемось"...
  // Три функції: тренди дня, тижня і пошуковий запит.

  async getTrendMoviesDay() {
    try {
      const response = await axios.get(
        `${this.#BASE_URL}/3/trending/movie/day?api_key=${this.#API_KEY}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.status);
    }
  }

  async getTrendMoviesWeek() {
    try {
      const response = await axios.get(
        `${this.#BASE_URL}/3/trending/movie/week?api_key=${this.#API_KEY}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.status);
    }
  }

  async getSearchMovies(searchQuery, page) {
    try {
      const response = await axios.get(
        `${this.#BASE_URL}/3/search/movie?api_key=${
          this.#API_KEY
        }&query=${searchQuery}&language=en-US&page=${page}&include_adult=false`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.status);
    }
  }

  // Функція для отримання жанрів фільмів по вказаних ids
  // async getGenres(ids) {
  //   try {
  //     const response = await axios.get(
  //       `${this.#BASE_URL}/3/genre/movie/list?api_key=${
  //         this.#API_KEY
  //       }&language=en-US`
  //     );
  //     return response.genres
  //       .filter(genre => ids.includes(genre.id))
  //       .map(genre => genre.name);
  //   } catch (error) {
  //     throw new Error(error.response.status);
  //   }
  // }
}
