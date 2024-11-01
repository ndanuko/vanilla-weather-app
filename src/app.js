function handleSearchSubmit(event) {
  event.preventDefault();
  console.log(handleSearchSubmit);
  let searchInput = document.querySelector("#search-form-input");
  let cityInputElement = document.querySelector("#city-input");
  cityInputElement.innerHTML = searchInput.value;
  console.log(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
