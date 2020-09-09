export const errorMessages = {
  numberCelsius: 'Invalid input! Please enter a number in Celsius to convert to Fahrenheit.',
  numberFahrenheit: 'Invalid input! Please enter a number in Fahrenheit to convert to Celsius.',
  noInput: 'Nothing to convert. Please enter a numeric value such as 6 or 23.4',
  invalidOptions: 'Invalid options object! Please pass a plain JavaScript object instead.',
  invalidOptionsKeys: 'Invalid options object! Please use the \'limit\' or \'showScale\' options.',
  emptyObject: 'Empty options object!'
};

function throwError(message) {
  throw new Error(message);
};

export const validateInput = input => {
  if (input === undefined) {
    console.log('use case 1: ');
    throwError(errorMessages.noInput);
  } else if (typeof input !== undefined && typeof input !== 'number') {
    // What about Celsius? Fix this.
    console.log('use case 2: ');
    throwError(errorMessages.numberFahrenheit);
  } else {
    return true;
  }
};

const isObject = val => {
  return val === null ? 'Null' :
    val === undefined ? 'Undefined' :
      Object.prototype.toString.call(val).slice(8, -1);
};

const checkForEmptyObject = obj => Boolean(Object.keys(obj).length === 0);

const checkObjectKeysAreValid = obj => Object.keys(obj).includes('limit') || Object.keys(obj).includes('showScale');

export const validateOptions = optionsObject => {
  if (isObject(optionsObject) === 'Object' && !checkForEmptyObject(optionsObject)) {
    if (!checkObjectKeysAreValid(optionsObject)) {
      throwError(errorMessages.invalidOptionsKeys);
    } else {
      return;
    }
  } else if (isObject(optionsObject) === 'Object' && checkForEmptyObject(optionsObject)) {
    throwError(errorMessages.emptyObject);
  } else {
    throwError(errorMessages.invalidOptions);
  }
};