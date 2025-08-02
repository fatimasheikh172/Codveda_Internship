let debounceTimer;

function debounce(func, delay) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(func, delay);
}

async function searchWeather() {
  const city = document.getElementById("cityInput").value;
  const result = document.getElementById("result");
  const loading = document.getElementById("loadingMessage");

  if (!city) {
    result.innerHTML = "Please enter a city name.";
    return;
  }

  loading.style.display = "block";
  result.innerHTML = "";

  const API_KEY = "0ede7380693fc713909aaf4a73ce0b0b"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    loading.style.display = "none";

    if (data.cod !== 200) {
      result.innerHTML = `<p style="color:red;">${data.message}</p>`;
    } else {
      result.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind: ${data.wind.speed} m/s</p>
      `;
    }
  } catch (error) {
    loading.style.display = "none";
    result.innerHTML = `<p style="color:red;">Error fetching weather data.</p>`;
  }
}

// Optional: add debounce on input
document.getElementById("cityInput").addEventListener("keyup", () => {
  debounce(searchWeather, 1000);
});
