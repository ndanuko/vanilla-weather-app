function showWeather(response) {
  let tempElement = document.querySelector("#temp");
  let cityInputElement = document.querySelector("#city-input");
  cityInputElement.innerHTML = response.data.city;
  tempElement.innerHTML = Math.round(response.data.temperature.current);
  console.log(response.data.temperature.current);
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
searchCity(Nairobi);
