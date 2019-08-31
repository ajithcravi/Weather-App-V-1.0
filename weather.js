/*This javascript belongs to the Weather App
Description: This is a weather app that shows weather of pre-defined some cities*/

//Code to get city and state once entered
const cityWeather = [
  {loca: "Ahmedabad, Gujarat", temperature: 39, weather: "Haze 🌫️"},
  {loca: "Bangalore, Karnataka", temperature: 28, weather: "Cloudy ☁️️️☁️"},
  {loca: "Chennai, Tamil Nadu", temperature: 37, weather: "Cloudy ☁️☁️"},
  {loca: "Hosur, Tamil Nadu", temperature: 28, weather: "Cloudy ☁️☁️"},
  {loca: "Hyderabad, Telangana", temperature: 28, weather: "Thunderstorm ⛈️"},
  {loca: "Jaipur, Rajastan", temperature: 32, weather: "Mostly Cloudy ☁️"},
  {loca: "Kolkata, West Bengal", temperature: 35, weather: "Partly Cloudy ☁️"},
  {loca: "Mumbai, Maharashtra", temperature: 29, weather: "Cloudy ☁️☁️"},
  {loca: "New Delhi, Delhi", temperature: 39, weather: "Mostly Cloudy ☁️"},
  {loca: "Pune, Maharashtra", temperature: 28, weather: "Cloudy ☁️☁️"},
  {loca: "Surat, Gujarat", temperature: 38, weather: "Mostly Cloudy ☁️"},
  {loca: "Tirunelveli, Tamil Nadu", temperature: 34, weather: "Mostly Cloudy️ ☁️"}
]

function returnCity() {
    var cityName = document.getElementById("city").value;
    var cityFind = cityWeather.filter(function (something) { if (something.loca.includes(cityName))return something});
    var temp = cityFind[0].temperature + " &#8451;";
    var climate = cityFind[0].weather;
    return document.getElementById("cityState").innerHTML = cityName, document.getElementById("temperature").innerHTML = temp, document.getElementById("climate").innerHTML = climate;
  }

function day(){
    //Code for day
    const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
    var today = new Date();
    var dayIndex = today.getDay();
    var day = DAYS[dayIndex];

    //Code for time
    var hours = today.getHours();
    var minutes = today.getMinutes();
    //code to convert 24hrs format to 12hrs format
    if (hours===0 || hours===12){
      hours = 12;
    } 
    else if (hours<12){
      hours = hours;
    }
    else{
      hours = hours-12;
    }
    //code to include 0 in single digit numbers
    if (minutes<10){
      minutes = "0"+minutes;
    }
    else{
      minutes = minutes;
    }
    //code to display am and pm
    if (today.getHours()<12){
      var dayTag = "am";
    }
    else{
      var dayTag = "pm";
    }
    return document.getElementById("dayTime").innerHTML = day + ", " + hours + ":" + minutes + " " + dayTag;
    setTimeout(updateClock, 1000); 
}

function cToF(){
  var cityName = document.getElementById("city").value;
  var cityFind = cityWeather.filter(function (something) { if (something.loca.includes(cityName))return something});
  var celcius = cityFind[0].temperature;
  var fahrenheit = (celcius * 9/5) + 32;
  return document.getElementById("temperature").innerHTML = fahrenheit;
}

function FToC(){
  var cityName = document.getElementById("city").value;
  var cityFind = cityWeather.filter(function (something) { if (something.loca.includes(cityName))return something});
  var celcius = cityFind[0].temperature;
  return document.getElementById("temperature").innerHTML = celcius;
}