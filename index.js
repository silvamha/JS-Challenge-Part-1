// Create two variables, firstName and lastName

// Concatenate the two variables into a third variable called fullName

// Log fullName to the console

let fistName = "Edson";
let lastname = "Silva";
let fullName = `${fistName} ${lastname}`;

console.log(fullName);

let name = "Linda";
let greeting = "Hi There";

let myGreeting = () => {
  console.log(`${greeting} ${name}!`);
};
myGreeting();

// Write a function to convert celsius to farenheit
let celsiusToFarenheit = (c) => {
  return (c * 9) / 5 + 32;
};

console.log(celsiusToFarenheit(27));

let isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  } 
};

let number = isEven(15)
console.log(number)
