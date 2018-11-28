$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

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
