import { convertFahrenheit, round } from './utils/maths.js';
import { validateInput } from './utils/validation.js';

export function fahrenheitToCelsius(input, options) {

  // Input validation:
  validateInput(input);
  // Do I need to use arguments here? Surely just use options instead...
  const hasOptions = arguments[1] !== undefined;

  // Return values:

  // If no options object provided. Limit return value to one decimal place by default:
  if (!hasOptions) return round(convertFahrenheit(input), 1);

  // Options object validation. Todo...
  validateOptions(options);

  // If options object is provided and successfully validated:
  let { limit, showScale } = options;
  if (limit < 0) limit = 0;

  /* Use cases at this point:

  1. No input (throws an Error)
  2. Just a number, no options object (returns a Number)
  3. limit === 0 && showScale === undefined || showScale === false (returns a Number)
  4. limit > 0 && showScale === undefined || showScale === false (returns a Number)
  5. limit === 0 && showScale === true (returns a String)
  6. limit > 0 && showScale === true (returns a String)

  */

  if (limit === 0 && showScale === undefined || showScale === false) {

    console.log('Use case 3: ');
    return round(convertFahrenheit(input), limit);

  } else if (limit > 0 && showScale === undefined || showScale === false) {

    console.log('Use case 4: ');
    return round(convertFahrenheit(input), limit);

  } else if (limit === 0 && showScale === true) {

    console.log('Use case 5: ');
    return round(convertFahrenheit(input), limit) + '°C';

  } else if (limit > 0 && showScale === true) {
    console.log('Use case 6: ');
    return round(convertFahrenheit(input), limit) + '°C';

  }

};