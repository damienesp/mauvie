import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import queryString from "query-string";

import CardList from "../components/CardList";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

import { key } from "../config";

const Search = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const { search } = useParams();
  const location = useLocation();

  const query = search;
  const page = queryString.parse(location.search).page || 1;

  // Get query results from API
  const searchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&include_adult=false&query=${query}&page=${page}`
    );
    const data = await response.json();
    if (!data.errors) {
      setMovies(data);
      setLoading(false);
    } else {
      setMovies([]);
    }
  };

  useEffect(() => {
    searchMovies();
  }, [query, page]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="category-wrapper">
      <div className="category-content">
        <p>
          Results for <span className="search-query">{query}</span>
        </p>
        <CardList movies={movies} />
        <Pagination page={movies.page} totalPage={movies.total_pages} />
      </div>
    </div>
  );
};

export default Search;
