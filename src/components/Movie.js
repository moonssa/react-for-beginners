import PropTypes from "prop-types";
import styles from "./Movie.module.css";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} />
      <div>
        <h3>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h3>
        <ul>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
        <p>
          {summary.length > 235 ? `${summary.slice(0, 235)} ...more` : summary}
        </p>
      </div>
    </div>
  );
}

Movie.proTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
