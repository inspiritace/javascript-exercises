const convertToCelsius = function(convertToCelsius) {
  var celsius = (convertToCelsius - 32) * 5 / 9;
  return celsius = Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(convertToFahrenheit) {
  var fahrenheit = convertToFahrenheit * 9 / 5 + 32;
  return fahrenheit = Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
