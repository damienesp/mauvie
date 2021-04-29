import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CardList from "../components/CardList";
import Loading from "../components/Loading";

import { key, poster } from "../config";

const Home = () => {
  const [featured, setFeatured] = useState();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get backdrop and movies from API for home now playing
  const getBackdrop = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US`
    );
    const data = await response.json();
    const shortData = { results: data.results.slice(0, 4) };
    const featuredMovie = await data.results[
      Math.floor(Math.random() * data.results.length)
    ];
    setFeatured(featuredMovie);
    setMovies(shortData);
    setLoading(false);
    console.log(featuredMovie);
  };
  useEffect(() => {
    getBackdrop();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="home-wrapper">
      <div className="home-content">
        <Link to={`/movie/${featured.id}`}>
          <div
            className="home-now-banner"
            style={{
              backgroundImage: `${
                featured.backdrop_path !== undefined
                  ? `url(${poster + "/" + featured.backdrop_path})`
                  : `backgroundColor: "ligthgrey"`
              }`,
            }}
          >
            <div className="home-now-title">
              <p>{featured.title} ›</p>
              <p>{featured.year}</p>
            </div>
          </div>
        </Link>

        <div className="home-now">
          <div className="home-now-nav">
            <p>Now Playing</p>
            <p>
              <Link to="/popular">See all</Link>
            </p>
          </div>
          <CardList movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default Home;
