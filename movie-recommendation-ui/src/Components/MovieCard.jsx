
import "./MovieCard.css";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h4>{movie}</h4>
    </div>
  );
}
