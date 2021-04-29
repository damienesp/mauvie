import Card from "./Card";

const CardList = ({ movies }) => {
  if (movies.results === undefined) {
    return null;
  }
  return (
    <div className="card-list-wrapper">
      {movies.results.map((movie) => {
        return <Card key={movie.id} {...movie} />;
      })}
    </div>
  );
};

export default CardList;
