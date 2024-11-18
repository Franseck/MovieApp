import React, { createContext, useContext, useState } from 'react'
import axios from 'axios';


export const MovieContext = createContext();

export const useMovieContext = () => {
    return useContext(MovieContext);
  };

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState (false)

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (URL) => {
    setLoading(true);
    axios
      .get(URL)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };


const MovieProvider = ({children}) => {
  return <MovieContext.Provider value={{movies, getMovies, loading}}>{children}</MovieContext.Provider>
};

export default MovieProvider