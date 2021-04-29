import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import Loading from "../components/Loading";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";

import { key } from "../config";

const Top = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const page = queryString.parse(location.search).page || 1;

  // Get top-rated movies from API
  const getMovies = async () => {
    const response = await fetch(
      `  https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=vote_count.desc&include_adult=false&page=${page}`
    );
    const data = await response.json();
    console.log(response);
    setMovies(data);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [page, location]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="category-wrapper">
      <div className="category-content">
        <p>Community Rating</p>
        <CardList movies={movies} />
        <Pagination page={movies.page} totalPage={movies.total_pages} />
      </div>
    </div>
  );
};

export default Top;
