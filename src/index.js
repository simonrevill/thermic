/*

Thermic:
A tiny JavaScript library to convert temperatures between Celcius and Fahrenheit scales.

Fahrenheit to Celsius formula:
(°F − 32) × 5/9 = °C

Celsius to Fahrenheit formula:
(°C × 9/5) + 32 = °F

Thoughts on API:

1. Include scale option in returned value - °C or °F - includeScale. This would make returned value a string though. DONE
2. Fixed decimal place option, with specified limit - formatNumber. DONE
3. Option to return a number or string? Is this possible? - maybe toString() / parseFloat() ?

*/

import { fahrenheitToCelsius } from './fahrenheitToCelsius.js';
import { celsiusToFahrenheit } from './celsiusToFahrenheit.js';

// Fahrenheit Tests:

// 1.
// const result1 = fahrenheitToCelsius();
// console.log(result1, typeof result1);

// 2.
// const result2 = fahrenheitToCelsius('abc');
// console.log(result2, typeof result2);

// 3.
// const result3 = fahrenheitToCelsius(100);
// console.log(result3, typeof result3);

// 4.
// const result4 = fahrenheitToCelsius(100, { limit: 0 });
// console.log(result4, typeof result4);

// 5.
// const result5 = fahrenheitToCelsius(100, { limit: 2, showScale: true });
// console.log(result5, typeof result5);

// 6.
// const result6 = fahrenheitToCelsius(100, { showScale: true });
// console.log(result6, typeof result6);

// Celsius Tests:

// 1.
// const result1 = celsiusToFahrenheit();
// console.log(result1, typeof result1);

// 2.
// const result2 = celsiusToFahrenheit('abc');
// console.log(result2, typeof result2);

// 3.
const result3 = celsiusToFahrenheit(23);
console.log(result3, typeof result3);

// 4.
const result4 = celsiusToFahrenheit(23, { limit: 0 });
console.log(result4, typeof result4);

// 5.
const result5 = celsiusToFahrenheit(7.764, { limit: 2, showScale: true });
console.log(result5, typeof result5);

// 6.
const result6 = celsiusToFahrenheit(23, { showScale: true });
console.log(result6, typeof result6);