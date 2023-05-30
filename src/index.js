import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// var numbers = [3, 56, 2, 48, 5];

//Conventional function
// const newNumbers = numbers.map(function square(x) {
//   return x * x;
// });

//Anonymous function
// const newNumbers = numbers.map(function (x) {
//   return x * x;
// });

//Arrow function
// const newNumbers = numbers.map((x) => {
//   return x * x;
// });

//Arrow function + MORE than One input/parameter
// const newNumbers = numbers.map((x, y) => {
//   return x * y;
// });

//Arrow function + ONLY One input/parameter
// const newNumbers = numbers.map( x => {
//   return x * x;
// });

//=> + One input + SINGLE line statement/returning single expression
// const newNumbers = numbers.map((x) => x * x);

//=> + One input + SINGLE line statement/returning single expression
// const newNumbers = numbers.map((x) => x * x);

// console.log(newNumbers);

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

//Simplified Arrow function
// const newNumbers = numbers.map(x => x * 2);

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

//Simplified Arrow function
// const newNumbers = numbers.filter(num => num < 10);

// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

//Simplified Arrow function
// const newNumber = numbers.reduce(
//   (accumulator, currentNumber) => accumulator + currentNumber
// );

// console.log(newNumber);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

//Simplified Arrow function
// const newNumber = numbers.find(num => num > 10);

// console.log(newNumber);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

//Simplified Arrow function
// const newNumber = numbers.findIndex(num => num > 10);

// console.log(newNumber);
