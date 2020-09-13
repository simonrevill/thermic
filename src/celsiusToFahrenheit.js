import { convertCelsius, round } from './utils/maths.js';
import { validateInput, validateOptions } from './utils/validation.js';

export function celsiusToFahrenheit(input, options) {

  // Input validation:
  validateInput(input, 'C');

  // Default decimal place limit:
  const defaultLimit = 1;

  // Check for existence of options object:
  if (options === undefined) {
    return round(convertCelsius(input), defaultLimit);
  }

  // Options object validation:
  validateOptions(options);

  // If options object is provided and successfully validated:
  let { limit, showScale } = options;

  // If a negative limit is provided, make it zero:
  if (limit < 0) limit = 0;

  // Return values:
  if (limit >= 0 && (showScale === undefined || !showScale)) {
    return round(convertCelsius(input), limit);
  } else if (limit >= 0 && showScale) {
    return round(convertCelsius(input), limit) + '°F';
  } else if ((limit === undefined || !limit) && showScale) {
    return round(convertCelsius(input), defaultLimit) + '°F';
  }
};