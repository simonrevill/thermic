export const celsiusToFahrenheit = input => checkInputType(input) ? convertCelsius(input) : throwTypeError(typeErrors.numberCelsius);