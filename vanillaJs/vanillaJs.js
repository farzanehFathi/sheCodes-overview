// let weather = {
//   paris: { temp: 19.7, humidity: 80 },
//   tokyo: { temp: 17.3, humidity: 50 },
//   lisbon: { temp: 30.2, humidity: 20 },
//   moscow: { temp: -5, humidity: 20 },
//   tehran: { temp: 32, humidity: 35 },
// };

// let city = prompt("pleace enter a city!");

// if (weather[city] !== undefined) {
//   alert(`It is currently ${Math.round(weather[city].temp)} in ${city}!`);
// } else {
//   alert("Sorry, we don't have the weather data for this city");
// }

function formattedDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayNum = date.getDay();
  let dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = dayList[dayNum];
  return `${day}, ${hours} : ${minutes}`;
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

function navigate(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  if (event.target.tagName === "LI") {
    cityElement.innerHTML = event.target.innerHTML;
  }
}

let dateElement = document.querySelector("#date");
let currentDate = new Date();
dateElement.innerHTML = formattedDate(currentDate);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let navItems = document.querySelector("#nav-items");
navItems.addEventListener("click", navigate);
