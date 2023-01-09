// // Function declaration :

// function greetings() {
//   console.log(`Hello you :)`);
// }
// greetings(); // calling the function

// // using parameters :
// // .................setting a default values: john doe
// function hello(first = "John", last = "Doe") {
//   console.log(`Hello ${first} ${last} , we wish you a good day`);
// }
// // calling the function :
// hello("karim", "Samti");
// hello();

// // Function Expression :
// const square = function (x) {
//   return x * x;
// };
// console.log(square(4));

// // IMMEDIATLY INVOCABLE EXPESSIONS : IFES
// (function () {
//   console.log(`IIFE RAN.......`);
// })(); // structure : (function (parmetre){ instruction})(emty or passing the parm);

// (function (name) {
//   console.log(`Carry on Mr ${name}`);
// })("Mouslim");

// // WHEN A FUNCTON I SPUT INSIDE AN OBJECT IS CALLED A METHOD

// // PROPRETY METHODS :
// const todo = {
//   add: function (a = 1, b = 2) {
//     return a + b;
//   },
//   reduce: function (a = 2, b = 1) {
//     return a - b;
//   },
//   divide: function (a = 8, b = 2) {
//     return a / b;
//   },
// };

// console.log(todo.add());
// console.log(todo.reduce());
// console.log(todo.divide());
