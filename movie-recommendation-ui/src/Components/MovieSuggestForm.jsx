import { useState } from "react";
import { getMovieRecommendations } from "../Services/movieService";
import MovieCard from "./MovieCard";
import "./MovieSuggestForm.css";

export default function MovieSuggestForm() {
  const [userInput, setUserInput] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // ✅ error state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Empty input validation
    if (!userInput.trim()) {
      setError("Tell us what kind of movies you enjoy to get recommendations.");
      return;
    }

    setError(""); // clear old error
    setLoading(true);

    try {
      console.log("Submitting user input:", userInput);
      const movies = await getMovieRecommendations(userInput);
      setRecommendations(movies);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="movie-suggest">
      <div className="form-section">
        <h2>🎬 Movie Recommendation</h2>
        <p className="subtitle">
          Tell us what kind of movies you like, and we'll suggest some great picks
        </p>

        <form onSubmit={handleSubmit}>
          <textarea
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
              if (error) setError(""); // ✅ clear error while typing
            }}
            placeholder="e.g. action movies with strong female lead, sci-fi thrillers, romantic comedies..."
            rows={4}
          />

          {/* ✅ Error message */}
          {error && <p className="error-text">{error}</p>}

          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? "🔄 Loading..." : "✨ Get Recommendations"}
          </button>
        </form>
      </div>

      {recommendations.length > 0 && (
        <div className="recommendations-section">
          <h3>Recommended for You</h3>
          <div className="recommendations-container">
            {recommendations.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
