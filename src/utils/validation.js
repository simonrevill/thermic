export const errorMessages = {
  numberCelsius: 'Invalid input! Please enter a number in Celsius to convert to Fahrenheit.',
  numberFahrenheit: 'Invalid input! Please enter a number in Fahrenheit to convert to Celsius.',
  noInput: 'Nothing to convert. Please enter a numeric value such as 6 or 23.4'
};

export function throwError(message) {
  throw new Error(message);
};

export const validateInput = input => {
  if (typeof input === undefined) {
    throwError(errorMessages.noInput);
  } else if (typeof input !== undefined && typeof input !== 'number') {
    throwError(errorMessages.numberFahrenheit);
  } else {
    return true;
  }


};