const express = require("express");
const cors = require("cors"); 
const axios = require("axios");
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors()); 
const API_KEY = process.env.API_KEY;
const weatherAPI = "https://api.openweathermap.org/data/2.5/weather";



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


app.get("/", (req, res) => {
  res.send("Server is running. Use /getWeather endpoint to get weather data.");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
