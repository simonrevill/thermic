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

// Tests:

// 1.
// const result = fahrenheitToCelsius();
// console.log(result, typeof result);
// Expected: Error: 'Nothing to convert. Please enter a numeric value such as 6 or 23.4'
// Result: Error: 'Nothing to convert. Please enter a numeric value such as 6 or 23.4' (PASSED)

// 2.
const result = fahrenheitToCelsius(100);
console.log(result, typeof result);
// Expected: 37.8 number
// Result: 37.8 number (PASSED)

// 3.
// const result = fahrenheitToCelsius(100, { limit: 0 });
// console.log(result, typeof result);
// Expected: 38 number
// Result: 38 number (PASSED)

// 4.
// const result = fahrenheitToCelsius(100, { limit: 2 });
// console.log(result, typeof result);
// Expected: 37.78 number
// Result: 37.78 number (PASSED)

// 5.
// const result = fahrenheitToCelsius(100, { limit: -1, showScale: true });
// console.log(result, typeof result);
// Expected: 38°C string
// Result: 38°C string (PASSED)

// 6.
// const result = fahrenheitToCelsius(100, { limit: 4, showScale: true });
// console.log(result, typeof result);
// Expected: 37.7778°C string
// Result: 37.7778°C string (PASSED)

