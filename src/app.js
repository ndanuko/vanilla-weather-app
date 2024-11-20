function showWeather(response) {
  let tempElement = document.querySelector("#temp");
  let cityInputElement = document.querySelector("#city-input");
  let descriptionElement = document.querySelector("#description");
  humidityElement = document.querySelector("#humidity");
  windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;

  timeElement.innerHTML = formatDate(date);
  windElement.innerHTML = `${response.data.wind.speed}km/hr`;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  descriptionElement.innerHTML = response.data.condition.description;
  cityInputElement.innerHTML = response.data.city;
  tempElement.innerHTML = Math.round(response.data.temperature.current);
  console.log(response.data.temperature.current);
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}: ${minutes}`;
}
function searchCity(city) {
  let apiKey = "537fcbc844832atbo347402443444238";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}
function handleSearchSubmit(event) {
  event.preventDefault();
  console.log(handleSearchSubmit);
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Nairobi");
