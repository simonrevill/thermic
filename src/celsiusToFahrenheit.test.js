import { celsiusToFahrenheit } from './celsiusToFahrenheit.js';

// Celsius Unit Tests for Celsius to Fahrenheit conversion:

// 1. Passing no input should throw an error:
test('Not passing an argument to the input parameter (throws an Error):', () => {
  expect(() => {
    celsiusToFahrenheit();
  }).toThrowError('Nothing to convert. Please enter a numeric value such as 6 or 23.4');
});

// 2. Passing an incorrect input type, for example 'String' should throw an error:
test('Not passing an argument of type Number to the input parameter (throws an Error):', () => {
  expect(() => {
    celsiusToFahrenheit('abc');
  }).toThrowError('Invalid input! Please enter a number in Celsius to convert to Fahrenheit.');
});

// 3.Passing just a number and no options object (returns a Number):
test('Convert 23°C to °F to 1 decimal place (returns a Number):', () => {
  expect(celsiusToFahrenheit(23)).toBe(73.4);
});

// 4. Passing a number with limit option of 0 (returns a Number):
test('Convert 23°C to °F with 0 decimal places (returns a Number):', () => {
  expect(celsiusToFahrenheit(23, { limit: 0 })).toBe(73);
});

// 5. Passing a number with limit option of 2, showing the scale (returns a String):
test('Convert 7.764°C to °F to 2 decimal places and showing the scale (returns a String):', () => {
  expect(celsiusToFahrenheit(7.764, { limit: 2, showScale: true })).toBe('45.98°F');
});

// 6. Passing a number with no limit option, showing the scale (returns a String):
test('Convert 23°C to °F to 1 decimal place and showing the scale (returns a String):', () => {
  expect(celsiusToFahrenheit(23, { showScale: true })).toBe('73.4°F');
});