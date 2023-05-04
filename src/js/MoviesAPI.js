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
}
