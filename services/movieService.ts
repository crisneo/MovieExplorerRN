import axios from 'axios';
import Config from 'react-native-config';
import {getData} from './storageService';
const getMovies = async (movieName: string) => {
  const lang = await getData('lang');
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query=${movieName}&language=${lang}&api_key=${Config.API_KEY}`,
  );
};

const getReviews = async (movieId: string) => {
  const lang = await getData('lang');
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Config.API_KEY}&language=${lang}&page=1`,
  );
};

export {getMovies, getReviews};
