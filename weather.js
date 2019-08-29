/*This javascript belongs to the Weather App
Author: AJith C Ravi
Description: This is a weather app that shows weather of pre-defined some cities*/

//Code to get city and state once entered
function validateForm() {
    var x = document.forms["cityName"]["city"].value;
    return document.getElementById("city_state").innerHTML = "Bangalore";
  }

function day(){
    //Code for day
    const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
    var today = new Date();
    var y = today.getDay();
    var day = DAYS[y];

    //Code for time
    var t = today.getHours();
}