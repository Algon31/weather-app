async function getWeather() {
  const city = document.getElementById("city").value; // Get city from input field

  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.weatherapi.com/v1/current.json?key=ff26bd3a1c4f4d089fa71308241211&q=${city}&aqi=no`;

  try {
    const response = await fetch(url); // Fetch data from API
    const data = await response.json(); // Parse the JSON data
    displayWeather(data); // Call function to display weather
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById("weatherDisplay").innerHTML = `<p>There was an error fetching the weather data.</p>`;
  }
}

function displayWeather(data) {
  if (data && data.location && data.current) {
    // Display weather data
    document.getElementById("weatherDisplay").innerHTML = `
      <div class="weather-box">
        <h3>City Of ${data.location.name}, ${data.location.country}</h3>
      </div>
      <div class="weather-box">
        <p>Temperature: ${data.current.temp_c}°C</p>
      </div>
      <div class="weather-box">
        <p>Weather: ${data.current.condition.text}</p>
        <img src="https:${data.current.condition.icon}" alt="Weather icon">
      </div>
      <div class="weather-box">
        <p>Humidity: ${data.current.humidity}%</p>
      </div>
      <div class="weather-box">
        <p>Feels Like: ${data.current.feelslike_c}°C</p>
      </div>
      <div class="weather-box">
        <p>Wind Speed: ${data.current.wind_mph} mph</p>
      </div>
    `;

    // Change background based on weather condition
    changeBackground(data.current.condition.text);
  } else {
    document.getElementById("weatherDisplay").innerHTML = `<p>City not found.</p>`;
  }
  console.log("Button clicked");
}

// Function to change the background based on weather condition
function changeBackground(condition) {
  const body = document.body;

  // Map conditions to background images
  const weatherBackgrounds = {
    "Clear": "url('../images/clear.jpeg')",
    "Sunny": "url('../images/sunny.jpeg')",
    "Rain": "url('../images/rainy.jpeg')",
    "Partly Cloudy": "url('../images/clouds.jpeg')", // Key with space
    "Snow": "url('../images/snowy.jpeg')",
    "Thunderstorm": "url('../images/thunder.jpeg')",
    "Mist": "url('../images/mist.jpeg')",
    "Haze": "url('../images/haze.jpeg')",
};

  // Default background if no match
  const defaultBackground = "url('images/default.jpg')";

  // Set the background based on condition or default
  body.style.backgroundImage = weatherBackgrounds[condition] || defaultBackground;
  body.style.backgroundSize = "cover"; // Ensure the image covers the screen
  body.style.backgroundRepeat = "no-repeat";
  body.style.transition = "background 0.5s ease"; // Smooth transition
}
