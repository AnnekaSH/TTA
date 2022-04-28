//kelvin variable given value of 293. The value of kelvin doe snot change so const chosen
const kelvin = 293;
//defined new variable (celcius) which is always 273 degrees less than kelvin. The value of celsius can change so let chosen
let celsius = kelvin - 273;
//defined new variable farenheit which is calculated using the value of celsius and the equation. The value of farenheit can change so let chosen
let farenheit = celsius * (9/5) + 32;
//used Math.floor(farenheit) to round down the farenheit value to the nearest integer
farenheit = Math.floor(farenheit);

console.log(`The temperature is ${farenheit} degrees farenheit`);