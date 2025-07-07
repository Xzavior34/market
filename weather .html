<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Weather App</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(to bottom, #a0d8ef, #ffffff);
      color: #333;
      text-align: center;
      padding: 20px;
      margin: 0;
      transition: background 0.3s;
    }
    body.dark {
      background: #1e1e1e;
      color: #fff;
    }
    .container {
      max-width: 400px;
      margin: auto;
    }
    input, button {
      width: 80%;
      padding: 10px;
      margin: 10px auto;
      font-size: 16px;
      border: none;
      border-radius: 5px;
    }
    button {
      background-color: #007BFF;
      color: white;
      cursor: pointer;
    }
    .weather, .forecast {
      background: white;
      margin-top: 20px;
      padding: 15px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    .dark .weather, .dark .forecast {
      background: #333;
    }
    .toggle-dark {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
    }
    img {
      width: 80px;
    }
    .forecast-day {
      display: inline-block;
      width: 80px;
      margin: 10px;
    }
  </style>
</head>
<body>
  <div class="toggle-dark" onclick="toggleDarkMode()">🌓</div>
  <div class="container">
    <h1>🌦 Weather App</h1>
    <input type="text" id="cityInput" placeholder="Enter city name">
    <button onclick="getWeather()">Check Weather</button>
    <button onclick="getLocationWeather()">Use My Location</button><div class="weather" id="weatherInfo"></div>
<div class="forecast" id="forecastInfo"></div>

  </div>  <script>
    const apiKey = "8cc702d7f393d85a8e200a340c153960";

    function toggleDarkMode() {
      document.body.classList.toggle('dark');
    }

    function getWeather(city = null) {
      const cityName = city || document.getElementById("cityInput").value;
      if (!cityName) return alert("Please enter a city name");

      const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
      const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;

      fetch(currentURL)
        .then(res => res.json())
        .then(data => {
          if (data.cod !== 200) return alert("City not found");
          const icon = data.weather[0].icon;
          const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
          document.getElementById("weatherInfo").innerHTML = `
            <h2>${data.name}</h2>
            <img src="${iconUrl}" alt="icon"><br>
            🌡️ ${data.main.temp}°C<br>
            ☁️ ${data.weather[0].description}<br>
            💧 Humidity: ${data.main.humidity}%<br>
            💨 Wind: ${data.wind.speed} m/s
          `;
        });

      fetch(forecastURL)
        .then(res => res.json())
        .then(data => {
          const days = {};
          data.list.forEach(item => {
            const date = item.dt_txt.split(" ")[0];
            if (!days[date]) days[date] = item;
          });

          let forecastHTML = "<h3>5-Day Forecast</h3>";
          Object.values(days).slice(0, 5).forEach(day => {
            const icon = day.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            forecastHTML += `
              <div class="forecast-day">
                ${day.dt_txt.split(" ")[0]}<br>
                <img src="${iconUrl}"><br>
                ${day.main.temp}°C
              </div>
            `;
          });
          document.getElementById("forecastInfo").innerHTML = forecastHTML;
        });
    }

    function getLocationWeather() {
      if (!navigator.geolocation) return alert("Geolocation not supported.");
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        fetch(url)
          .then(res => res.json())
          .then(data => {
            if (data.name) getWeather(data.name);
            else alert("Location not found");
          })
          .catch(() => alert("Error getting location weather"));
      }, error => {
        alert("Permission denied or location unavailable.");
      });
    }
  </script></body>
</html>
