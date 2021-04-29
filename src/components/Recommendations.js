import { useState, useEffect } from "react";

import CardList from "./CardList";

import { key } from "../config";

const Recommendations = ({ props, movie }) => {
  const [recommendations, setRecommendations] = useState([]);

  // Get ID of the movie from match router
  const movieId = props.match.params.id;

  useEffect(() => {
    getRecommendations();
  }, [movieId]);

  // Get recommendations from API
  const getRecommendations = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${key}&language=en-US`
    );
    const data = await response.json();
    setRecommendations(data);
  };

  return (
    <div className="recommendations-wrapper">
      <p>You May Also Like</p>
      {recommendations.results !== 0 ? (
        <CardList movies={recommendations} />
      ) : (
        <p className="recommendations-null">
          Sorry, there are no recommended movies for {movie.title}
        </p>
      )}
    </div>
  );
};

export default Recommendations;
