// Convert Fahrenheit to Celcius:
export const convertFahrenheit = fahrenheit => ((fahrenheit - 32) * (5 / 9));

// Convert Celcius to Fahrenheit:
export const convertCelsius = celsius => ((celsius * (9 / 5)) + 32);

// Round function:
// 1. Round half up ('round half towards positive infinity')
// 2. Uses exponential notation to avoid floating-point issues.
// 3. Negative numbers round differently than positive numbers.

export const round = (number, decimalPlaces) => {
  const formattedNum = Math.round(number + "e" + decimalPlaces);
  return Number(formattedNum + "e" + -decimalPlaces);
};