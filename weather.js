/*This javascript belongs to the Weather App
Description: This is a weather app that shows weather of pre-defined some cities*/

//Code to get city and state once entered
const cityWeather = [
  { location: "Ahmedabad, Gujarat", temperature: 39, weather: "Haze 🌫️" },
  {
    location: "Bangalore, Karnataka",
    temperature: 28,
    weather: "Cloudy ☁️️️☁️"
  },
  { location: "Chennai, Tamil Nadu", temperature: 37, weather: "Cloudy ☁️☁️" },
  { location: "Hosur, Tamil Nadu", temperature: 28, weather: "Cloudy ☁️☁️" },
  {
    location: "Hyderabad, Telangana",
    temperature: 28,
    weather: "Thunderstorm ⛈️"
  },
  {
    location: "Jaipur, Rajastan",
    temperature: 32,
    weather: "Mostly Cloudy ☁️"
  },
  {
    location: "Kolkata, West Bengal",
    temperature: 35,
    weather: "Partly Cloudy ☁️"
  },
  { location: "Mumbai, Maharashtra", temperature: 29, weather: "Cloudy ☁️☁️" },
  {
    location: "New Delhi, Delhi",
    temperature: 39,
    weather: "Mostly Cloudy ☁️"
  },
  { location: "Pune, Maharashtra", temperature: 28, weather: "Cloudy ☁️☁️" },
  { location: "Surat, Gujarat", temperature: 38, weather: "Mostly Cloudy ☁️" },
  {
    location: "Tirunelveli, Tamil Nadu",
    temperature: 34,
    weather: "Mostly Cloudy️ ☁️"
  }
];

function returnCity() {
  var cityName = document.getElementById("city").value;
  var cityFind = cityWeather.filter(function(something) {
    if (something.location.includes(cityName)) return something;
  });
  var temp = cityFind[0].temperature;
  var climate = cityFind[0].weather;
  return (
    (document.getElementById("cityState").innerHTML = cityName),
    (document.getElementById("temperature").innerHTML = temp),
    (document.getElementById("climate").innerHTML = climate)
  );
}

function day() {
  //Code for day
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var today = new Date();
  var dayIndex = today.getDay();
  var day = DAYS[dayIndex];

  //Code for time
  var hours = today.getHours();
  var minutes = today.getMinutes();
  //code to convert 24hrs format to 12hrs format
  if (hours === 0 || hours === 12) {
    hours = 12;
  } else if (hours < 12) {
    hours = hours;
  } else {
    hours = hours - 12;
  }
  //code to include 0 in single digit numbers
  if (minutes < 10) {
    minutes = "0" + minutes;
  } else {
    minutes = minutes;
  }
  //code to display am and pm
  if (today.getHours() < 12) {
    var dayTag = "am";
  } else {
    var dayTag = "pm";
  }
  return (document.getElementById("dayTime").innerHTML =
    day + ", " + hours + ":" + minutes + " " + dayTag);
  setTimeout(updateClock, 1000);
}

function cal(val) {
  var x;
  var cityName = document.getElementById("city").value;
  var cityFind = cityWeather.filter(function(something) {
    if (something.location.includes(cityName)) return something;
  });
  var celcius = cityFind[0].temperature;

  if (val === "C") {
    return (document.getElementById("temperature").innerHTML = celcius);
  } else if (val === "F") {
    return (document.getElementById("temperature").innerHTML =
      Math.round(((celcius * 9) / 5 + 32) * 10) / 10);
  }
}
