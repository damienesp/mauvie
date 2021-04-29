import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Loading from "../components/Loading";
import Recommendations from "../components/Recommendations";

import { key, posterWidth500 } from "../config";

const MovieDetails = (props) => {
  const [movie, setMovie] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  // Get ID of the movie from match router
  const movieId = props.match.params.id;

  // Get movie details from API
  const getMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`
    );
    const data = await response.json();
    setMovie(data);
    setLoading(false);
  };

  // Get trailer link from API
  const getTrailer = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US`
    );
    const data = await response.json();
    if (data.results.length !== 0) {
      setTrailer(data.results[0].key);
      setLoading(false);
    }
  };

  // Transform min runtime to 00h00min format
  const getHourMin = (runtime) => {
    return `${Math.floor(runtime / 60)}h${Math.round(
      ((runtime / 60) % 1) * 60
    )}min`;
  };

  // Get the year of release
  const year = new Date(movie.release_date).getFullYear();

  // Handle previous page button
  const handleBack = () => {
    history.goBack();
  };

  useEffect(() => {
    getMovie();
    getTrailer();
  }, [movieId]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="moviedetails-wrapper">
      <button onClick={handleBack}>‹ Go Back</button>
      <div className="moviedetails-content">
        <div className="moviedetails-poster">
          {movie.poster_path ? (
            <img
              src={posterWidth500 + movie.poster_path}
              alt={`${movie.title} poster`}
            />
          ) : (
            <div className="moviedetails-poster-missing">&#x1F3A5;</div>
          )}
        </div>

        <div className="moviedetails-info">
          <h1>{movie.title}</h1>
          <p>
            {year} - {getHourMin(movie.runtime)}
          </p>

          <div className="synopsis">
            <p>{movie.overview}</p>
          </div>
          {trailer ? (
            <div className="trailer">
              <a
                href={`https://www.youtube.com/watch?v=${trailer}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="trailer-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    className="play-svg"
                  >
                    <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                  </svg>
                  Watch Trailer
                </button>
              </a>
            </div>
          ) : null}
        </div>
      </div>
      <Recommendations props={props} movie={movie} />
    </div>
  );
};

export default MovieDetails;
