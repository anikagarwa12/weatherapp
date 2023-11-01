const express = require("express");
const cors = require("cors"); // Import the cors package
const axios = require("axios");
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors()); // Use cors middleware
const API_KEY = process.env.API_KEY;
// Example weather API endpoint (replace with your chosen weather API)
const weatherAPI = "https://api.openweathermap.org/data/2.5/weather";
//const API_KEY = "c880a88c25278f373049c63496b1fa92"; // Replace with your actual API key

// POST endpoint for weather data
app.post("/getWeather", async (req, res) => {
  const { cities } = req.body;
  if (!cities || !Array.isArray(cities)) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const weatherData = {};

  try {
    const promises = cities.map(async (city) => {
      const response = await axios.get(
        `${weatherAPI}?q=${city}&appid=${API_KEY}&units=metric`
      );
      weatherData[city] = `${response.data.main.temp}°C`;
    });
    await Promise.all(promises);
    res.json({ weather: weatherData });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

// Route for the root URL
app.get("/", (req, res) => {
  res.send("Server is running. Use /getWeather endpoint to get weather data.");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
