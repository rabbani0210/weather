function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "❗ Please enter a city name.";
    return;
  }

  fetch(`https://wttr.in/${city}?format=3`)
    .then(response => response.text())
    .then(data => {
      resultDiv.innerHTML = `🌍 ${data}`;
    })
    .catch(error => {
      resultDiv.innerHTML = "⚠️ Error fetching weather data.";
    });
}
