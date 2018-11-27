'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){

    thermostat = new Thermostat();
  });

it('starts wt 20 degrees', function(){

  expect(thermostat.getCurrentTemperature()).toEqual(20);
});







});
