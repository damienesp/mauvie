import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import Loading from "../components/Loading";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";

import { key } from "../config";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const page = queryString.parse(location.search).page || 1;

  // Get upcoming movies from API
  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=${page}`
    );
    const data = await response.json();
    setMovies(data);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [page, location]);

  if (loading) {
    return (
      <div className="main-content">
        <Loading />
      </div>
    );
  }
  return (
    <div className="category-wrapper">
      <div className="category-content">
        <p>Upcoming</p>
        <CardList movies={movies} />
        <Pagination page={movies.page} totalPage={movies.total_pages} />
      </div>
    </div>
  );
};

export default Upcoming;
