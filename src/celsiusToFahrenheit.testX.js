import { celsiusToFahrenheit } from './celsiusToFahrenheit.js';

// Celsius Tests for Celsius to Fahrenheit conversion:

// 3. Just a number, no options object (returns a Number)
// 4. limit >= 0 && (showScale === undefined || !showScale) (returns a Number)
// 5. limit >= 0 && showScale (returns a String)
// 6. (limit === undefined || !limit) && showScale (returns a String)


// 1. Passing no input should throw an error:
// test('throws an error:', () => {
//   expect(() => {
//     celsiusToFahrenheit()
//   }).toThrowError('Nothing to convert. Please enter a numeric value such as 6 or 23.4');
// });

// 2. Passing an incorrect input type, for example 'String' should throw an error:
// test('Not passing an argument of type Number to the input parameter:', () => {
//   expect(() => {
//     celsiusToFahrenheit('abc')
//   }).toThrowError('Invalid input! Please enter a number in Celsius to convert to Fahrenheit.');
// });

// 3.
// const result3 = celsiusToFahrenheit(23);
// console.log(result3, typeof result3);

// 4.
// const result4 = celsiusToFahrenheit(23, { limit: 0 });
// console.log(result4, typeof result4);

// 5.
// const result5 = celsiusToFahrenheit(7.764, { limit: 2, showScale: true });
// console.log(result5, typeof result5);

// 6.
// const result6 = celsiusToFahrenheit(23, { showScale: true });
// console.log(result6, typeof result6);