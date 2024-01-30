import PropTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={coverImg} alt={title} />
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <p>{summary}</p>
      <hr />
    </div>
  );
}

Movie.proTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  grnres: PropTypes.arraryOf(PropTypes.string).isRequired,
};

export default Movie;
