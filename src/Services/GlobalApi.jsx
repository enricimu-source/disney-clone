import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_Key = "2ec0d66f5bdf1dd12eefa0723f1479cf";
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';


const getTrendingVideos = () =>
  axios.get(`${movieBaseUrl}/trending/movie/day?api_key=${api_Key}`);
  const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

  export const SEARCH_MOVIE_URL = (query) =>
  `${movieBaseUrl}/search/movie?api_key=${api_Key}&query=${query}`;


export default {
  getTrendingVideos,
  getMovieByGenreId
};
























