$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

$.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=5f45fe47bd823c145af9085e89e371b1&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
})

function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=5f45fe47bd823c145af9085e89e371b1';
  var units = '&units=metric';
  $.get(url + token + units, function(data) {
    $('#current-temperature').text(data.main.temp);
  })
}

displayWeather('London');

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
})

$('#temperature-up').on('click', function() { // event listener
  thermostat.up(); // update model
  updateTemperature(); // update view
})

$('#temperature-down').click(function() { // alternate version of .on(click) with a sprinkle of jQuery syntactic sugar
  thermostat.down(); // update model
  updateTemperature(); // update view
})

$('#temperature-reset').click(function() { // alternate version of .on(click) with a sprinkle of jQuery syntactic sugar
  thermostat.resetTemperature(); // update model
  updateTemperature(); // update view
})

$('#powersaving-on').click(function() { // alternate version of .on(click) with a sprinkle of jQuery syntactic sugar
  thermostat.switchPowerSavingModeOn(); // update model
  $('#power-saving').text('on')
  updateTemperature(); // update view
})

$('#powersaving-off').click(function() { // alternate version of .on(click) with a sprinkle of jQuery syntactic sugar
  thermostat.switchPowerSavingModeOff(); // update model
  $('#power-saving').text('off')
  updateTemperature(); // update view
})

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.energyUsage());
}
})
