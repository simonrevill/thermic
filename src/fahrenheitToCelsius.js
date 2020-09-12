import { convertFahrenheit, round } from './utils/maths.js';
import { validateInput, validateOptions } from './utils/validation.js';

export function fahrenheitToCelsius(input, options) {

  // Input validation:
  validateInput(input, 'F');

  // Default decimal place limit:
  const defaultLimit = 1;

  // Check for existence of options object:
  if (options === undefined) {
    return round(convertFahrenheit(input), defaultLimit);
  }

  // Options object validation:
  validateOptions(options);

  // If options object is provided and successfully validated:
  let { limit, showScale } = options;

  // If a negative limit is provided, make it zero:
  if (limit < 0) limit = 0;

  // Return values:
  if (limit >= 0 && (showScale === undefined || !showScale)) {
    return round(convertFahrenheit(input), limit);
  } else if (limit >= 0 && showScale) {
    return round(convertFahrenheit(input), limit) + '°C';
  } else if ((limit === undefined || !limit) && showScale) {
    return round(convertFahrenheit(input), defaultLimit) + '°C';
  }
};