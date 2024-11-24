
// const city = document.getElementById("city").value;
// async function getWeather() {
//     try {
//     //   const response = await fetch('https://api.weatherapi.com/v1/current.json?key=ff26bd3a1c4f4d089fa71308241211&q=${city}&aqi=no');
//       const url = `https://api.weatherapi.com/v1/current.json?key=ff26bd3a1c4f4d089fa71308241211&q=${city}&aqi=no`;
//       const data = await response.json();
//       displayWeather(data);
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//   }
  
//   function displayWeather(data) {
//     if (data && data.location && data.current) {
//       // Updated for WeatherAPI structure
//       document.getElementById("weatherDisplay").innerHTML = `
//         <h3>${data.location.name}, ${data.location.country}</h3>
//         <p>Temperature: ${data.current.temp_c}°C</p>
//         <p>Weather: ${data.current.condition.text}</p>
//         <p>Wind_mph : ${data.current.condition.wind_mph}</p>
//         <img src="https:${data.current.condition.icon}" alt="Weather icon">
//       `;
//     } else {
//       document.getElementById("weatherDisplay").innerHTML = `<p>City not found.</p>`;
//     }
//     console.log("button clicked");
//   }
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
        <h3>${data.location.name}, ${data.location.country}</h3>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Weather: ${data.current.condition.text}</p>
        <p>Wind Speed: ${data.current.wind_mph} mph</p>
        <img src="https:${data.current.condition.icon}" alt="Weather icon">
      `;
    } else {
      document.getElementById("weatherDisplay").innerHTML = `<p>City not found.</p>`;
    }
    console.log("Button clicked");
  }
  