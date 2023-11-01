
# WeatherApp

WeatherApp is a Node.js application that fetches real-time weather information for multiple cities using a weather service API.

## Installation

1. After cloning the repository, install the required packages:

   ```bash
   npm install
   ```

   This will install the necessary dependencies including Express, Axios, CORS, and dotenv.

2. Set up environment variables:

   Create a `.env` file in the root directory and add your API key:

   ```
   API_KEY=your_actual_api_key
   ```

   Replace `your_actual_api_key` with your API key from the weather service provider. The `.env` file should not be committed to the repository.

3. Run the server:

   ```bash
   node server.js
   ```

4. Open the frontend:

   After starting the server, open `index.html` in a live server or a web browser to access the UI for entering city names and viewing real-time weather data.

## Usage

- The `/getWeather` endpoint fetches weather data for the specified cities from the weather API.
- Access the provided frontend UI to input city names and view the real-time weather information.

## Technologies Used

- Node.js
- Express
- Axios
- CORS
- dotenv

## Folder Structure

```
├── server.js        # Node.js server file
├── index.html       # Frontend UI file
├── .env             # Environment variable file (not committed)
└── README.md        # Documentation
```
Replace "your_actual_api_key" with your actual API key. This README file provides instructions for installation, usage, technologies used, folder structure, contributors, and licensing information. Adjust the sections and details according to your application's specifics.
