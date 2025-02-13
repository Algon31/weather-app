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
    document.querySelector(".message").innerHTML = `Its actually ${data.current.condition.text}`;
    // Display weather data
    document.getElementById("weatherDisplay").innerHTML = `
      <div class="weather-box">
        <p>City Of ${data.location.name}, ${data.location.country}</p>
      </div>
      <div class="weather-box">
        <p>Temperature: ${data.current.temp_c}°C</p>
      </div>
      <div class="weather-box">
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
  } else {
    document.getElementById("weatherDisplay").innerHTML = `<p>City not found.</p>`;
  }
  console.log("did you get it !!");
}


document.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                document.getElementById('getweather').click();
         }
    });
