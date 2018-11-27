'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){

    thermostat = new Thermostat();
  });

it('starts at 20 degrees', function(){

  expect(thermostat.getCurrentTemperature()).toEqual(20);
});

it('increases in temperature with up()', function() {
  console.log('test')
  thermostat.up();
  expect(thermostat.getCurrentTemperature()).toEqual(21);
});





});
