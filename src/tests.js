import { fahrenheitToCelsius } from './fahrenheitToCelsius.js';
import { celsiusToFahrenheit } from './celsiusToFahrenheit.js';

/* Use cases / tests:

// See the validateInput function in ./utils/validation.js for the following cases:
1. No input (throws an Error)
2. Incorrect input type, for example 'String' (throws an Error)

// See control flow section below for the following cases:
3. Just a number, no options object (returns a Number)
4. limit >= 0 && (showScale === undefined || !showScale) (returns a Number)
5. limit >= 0 && showScale (returns a String)
6. (limit === undefined || !limit) && showScale (returns a String)

*/

// Todo: Write these tests properly with Jest:

// Fahrenheit Tests:

// 1.
const result1 = fahrenheitToCelsius();
console.log(result1, typeof result1);

// 2.
const result2 = fahrenheitToCelsius('abc');
console.log(result2, typeof result2);

// 3.
const result3 = fahrenheitToCelsius(100);
console.log(result3, typeof result3);

// 4.
const result4 = fahrenheitToCelsius(100, { limit: 0 });
console.log(result4, typeof result4);

// 5.
const result5 = fahrenheitToCelsius(100, { limit: 2, showScale: true });
console.log(result5, typeof result5);

// 6.
const result6 = fahrenheitToCelsius(100, { showScale: true });
console.log(result6, typeof result6);


// Celsius Tests:

// 1.
const result1 = celsiusToFahrenheit();
console.log(result1, typeof result1);

// 2.
const result2 = celsiusToFahrenheit('abc');
console.log(result2, typeof result2);

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