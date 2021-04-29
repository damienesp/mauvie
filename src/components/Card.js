import { Link } from "react-router-dom";

import { posterWidth500 } from "../config";
import star from "../img/icon/star.svg";

const Card = ({ title, release_date, vote_average, poster_path, id }) => {
  // Get year of release
  const date = new Date(release_date);
  const year = date.getFullYear();

  return (
    <div className="card">
      <Link to={`/movie/${id}`}>
        {poster_path ? (
          <img
            src={posterWidth500 + poster_path}
            className="card-poster"
            alt={`${title} poster`}
          />
        ) : (
          <div className="no-poster">&#x1F3A5;</div>
        )}

        <div className="card-informations">
          <h3 className="card-h3">{title}</h3>
          <div className="card-date">
            {year}
            <div className="card-rating">
              {vote_average}
              <img src={star} className="star" alt="star" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
