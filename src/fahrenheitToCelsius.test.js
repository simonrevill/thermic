import { fahrenheitToCelsius } from './fahrenheitToCelsius.js';

// Fahrenheit Unit Tests for Fahrenheit to Celsius conversion:

// 1. Passing no input should throw an error:
test('Not passing an argument to the input parameter (throws an Error):', () => {
  expect(() => {
    fahrenheitToCelsius();
  }).toThrowError('Nothing to convert. Please enter a numeric value such as 6 or 23.4');
});

// 2. Passing an incorrect input type, for example 'String' should throw an error:
test('Not passing an argument of type Number to the input parameter (throws an Error):', () => {
  expect(() => {
    fahrenheitToCelsius('abc');
  }).toThrowError('Invalid input! Please enter a number in Fahrenheit to convert to Celsius.');
});

// 3. Passing just a number and no options object (returns a Number):
test('Convert 100°F to °C to 1 decimal place (returns a Number):', () => {
  expect(fahrenheitToCelsius(100)).toBe(37.8);
});

// 4. Passing a number with limit option of 0 (returns a Number):
test('Convert 100°F to °C with 0 decimal places (returns a Number):', () => {
  expect(fahrenheitToCelsius(100, { limit: 0 })).toBe(38);
});

// 5. Passing a number with limit option of 2, showing the scale (returns a String):
test('Convert 100°F to °C to 2 decimal places and showing the scale (returns a String):', () => {
  expect(fahrenheitToCelsius(100, { limit: 2, showScale: true })).toBe('37.78°C');
});

// 6. Passing a number with no limit option, showing the scale (returns a String):
test('Convert 100°F to °C to 1 decimal place and showing the scale (returns a String):', () => {
  expect(fahrenheitToCelsius(100, { showScale: true })).toBe('37.8°C');
});