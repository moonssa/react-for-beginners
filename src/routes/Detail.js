import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <h2>{movie.title}</h2>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
          <img src={movie.medium_cover_image} />

          <div>
            <span style={{ display: "block" }}> {`Year : ${movie.year}`} </span>
            <span style={{ display: "block" }}>
              {`RunTime : ${movie.runtime} min`}
            </span>
            <span style={{ display: "block" }}>
              {`Rating : ${movie.rating} min`}
            </span>
            <p>{movie.description_intro}</p>
            <a href={movie.url}> More Info ...</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
