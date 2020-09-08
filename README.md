![thermic.js](https://github.com/simonrevill/thermic/raw/master/img/thermic-logo.png "thermic.js")

<br>

# thermic

A tiny, easy-to-use JavaScript library to convert temperatures between Celcius and Fahrenheit scales.

<br>

## Installation  

<br>

```
npm install thermic
```

<br>
<br>

## How to use  

<br>

### Basic temperature conversion  

<br>

```js
import { fahrenheitToCelsius, celsiusToFahrenheit } from 'thermic';


fahrenheitToCelsius(100); // 37.8

celsiusToFahrenheit(20); // 69.8
```

<br>
<br>

### Options

<br>

You can optionally pass an object as a second argument to the function for more fine control of the return values:

<br>

- `limit: [Type: Number]` -  Optional. Set the maximum amount of decimal places in the calculation.

<br>

- `showScale: [Type: Boolean]` -  Optional. Include the temperature scale in the return value (°C or °F). If this option is set to `true`, the return value will be a `string`. 

<br>

### Important:

<br>

If you do not provide an options object, the default setting is 1 decimal place and no temperature scale will be provided.
<br>
The default return value is always of type `number`.

<br>
<br>

## Examples

<br>
<br>

- Using `limit`:

<br>

```js
import { fahrenheitToCelsius } from 'thermic';


fahrenheitToCelsius(100, { limit: 4 }); // => 37.7778
```

<br>
<br>

- Using `showScale`:

<br>

```js
fahrenheitToCelsius(100, { showScale: true }); // => '37.8°C'
```

<br>
<br>

- Using both `limit` and `showScale` together:

<br>

```js
fahrenheitToCelsius(100, { limit: 2, showScale: true }); // => '37.78°C'
```