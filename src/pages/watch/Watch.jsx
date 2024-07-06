import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.state?.movie;

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      {movie ? (
        <video className="video" autoPlay progress controls src={movie.video}>
          <track
            src={movie.subtitles.src}
            kind="subtitles"
            srcLang="en"
            label="English"
            default
          />
          {/* Ajoutez plus de pistes de sous-titres ici */}
        </video>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
}
