// src/Services/movieService.js

export const getMovieRecommendations = async (userInput) => {
  try {
    console.log("Fetching recommendations for input:", userInput);
    const response = await fetch("http://localhost:5000/api/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }), 
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Received data:", data);
    return data.movies; 
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

