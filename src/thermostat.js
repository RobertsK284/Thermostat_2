'use strict';

function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.temperature = 20;
  this.PowerSavingMode = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
}

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()){
    return;
  }
  this.temperature -= 1;
}

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF; //32
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON; //25
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.PowerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.PowerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.PowerSavingMode = true;
}
