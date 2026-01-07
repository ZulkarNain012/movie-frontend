// src/Services/movieService.js

export const getMovieRecommendations = async (userInput) => {
  try {
    const response = await fetch(
      "https://movie-backend-kod1.onrender.com/api/recommend",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInput }),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
