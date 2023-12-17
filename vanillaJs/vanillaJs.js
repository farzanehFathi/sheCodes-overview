// let weather = {
//   paris: { temp: 19.7, humidity: 80 },
//   tokyo: { temp: 17.3, humidity: 50 },
//   lisbon: { temp: 30.2, humidity: 20 },
//   moscow: { temp: -5, humidity: 20 },
//   tehran: { temp: 32, humidity: 35 },
// };

// let city = prompt("please enter a city ...");

// if (weather[city] !== undefined) {
//   alert(`it's ${weather[city].temp} in ${city}!`);
// } else {
//   alert("Sorry, we don't have this city");
// }

function digitCorrection(a) {
  if (a < 10) {
    return `0${a}`;
  } else {
    return a;
  }
}

function formattedDate(date) {
  let hours = date.getHours();
  hours = digitCorrection(hours);

  let minutes = date.getMinutes();
  minutes = digitCorrection(minutes);

  let dayIndex = date.getDay();
  let dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = dayList[dayIndex];

  return `${day}, ${hours} : ${minutes}`;
}

let currentDate = new Date();

let dateElement = document.querySelector("#date");
dateElement.innerHTML = formattedDate(currentDate);

///

let cityElement = document.querySelector("#city");

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

function navigate(event) {
  event.preventDefault();
  if (event.target.tagName === "LI") {
    cityElement.innerHTML = event.target.innerHTML;
  }
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let navItems = document.querySelector("#nav-items");
navItems.addEventListener("click", navigate);
