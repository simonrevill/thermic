import { convertCelsius, round } from './utils/maths.js';
import { validateInput, validateOptions } from './utils/validation.js';

export function celsiusToFahrenheit(input, options) {

  // Input validation:
  validateInput(input);
  // Default decimal place limit:
  const defaultLimit = 1;

  // Check for existence of options object:
  if (options === undefined) {
    console.log('Use case 3: ');
    return round(convertCelsius(input), defaultLimit);
  }

  // Options object validation:
  validateOptions(options);
  // If options object is provided and successfully validated:
  let { limit, showScale } = options;
  // If a negative limit is provided, make it zero:
  if (limit < 0) limit = 0;

  /* Use cases / tests:

  // See the validateInput function in validation.js for the following cases:
  1. No input (throws an Error)
  2. Incorrect input type, for example 'String' (throws an Error)

  // See control flow section below for the following cases:
  3. Just a number, no options object (returns a Number)
  4. limit >= 0 && (showScale === undefined || !showScale) (returns a Number)
  5. limit >= 0 && showScale (returns a String)
  6. (limit === undefined || !limit) && showScale (returns a String)

  */

  if (limit >= 0 && (showScale === undefined || !showScale)) {
    console.log('Use case 4: ');
    return round(convertCelsius(input), limit);
  } else if (limit >= 0 && showScale) {
    console.log('Use case 5: ');
    return round(convertCelsius(input), limit) + '°F';
  } else if ((limit === undefined || !limit) && showScale) {
    console.log('Use case 6: ');
    return round(convertCelsius(input), defaultLimit) + '°F';
  }
};