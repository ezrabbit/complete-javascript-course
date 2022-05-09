'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 2,
//   price = 19 * numPassengers
// ) {
//   //   numPassengers = numPassengers ?? 1;
//   //   price = price ?? 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 3);
// createBooking('LH123', 2, 800);
// createBooking('LH123', undefined, 800);

// const flight = 'LM234';
// const edison = {
//   name: 'Edison Zhang',
//   passport: 12314124,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passport === 12314124) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// // checkIn(flight, edison);
// // console.log(flight);
// // console.log(edison);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(edison);
// checkIn(flight, edison);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);

// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('🌚');
// };

// // JS uses callbacks all the time
// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Edison Zhang');
// lufthansa.book(635, 'Jiahao Zhang');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // book(23, 'Sarah Williams'); // does not work

// // Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 232, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };
// book.call(swiss, 42, 'Edison Zhang');

// //Apply method
// const flightData = [583, 'George Cooper'];
// // book.apply(swiss, flightData);

// book.call(swiss, ...flightData);
// console.log(swiss);

// // Bind method

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, 'Steven Williams');

// console.log(eurowings);
// const bookEW23 = book.bind(eurowings, 12345); // set in stone certain arguments(partial application)

// bookEW23('Edison Haha');
// bookEW23('Martha Cooper');
// console.log(eurowings);

// // With Event Listeners
// lufthansa.plane = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.plane++;
//   console.log(this.plane);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //partial application
// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(200));

// // addVat = value => value + value * 0.23;
// // const addVAT2 = function (value) {
// //   return addTax(0.23, value);
// // };
// // console.log(addVAT2(200));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
// };

// // 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
// //   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
// // What is your favourite programming language?
// // 0: JavaScript
// // 1: Python
// // 2: Rust
// // 3: C++
// // (Write option number)

// //   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// // 2. Call this method whenever the user clicks the "Answer poll" button.
// // 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// // 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// // HINT: Use many of the tools you learned about in this and the last section 😉

// // BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// // BONUS TEST DATA 1: [5, 2, 3]
// // BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// poll.registerNewAnswer = function () {
//   let resp = prompt(
//     `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//   );
//   resp = Number(resp);
//   typeof resp === 'number' && resp >= 0 && resp <= 3 && this.answers[resp]++;
//   this.displayResults();
//   this.displayResults('string');
// };
// poll.displayResults = function (type = 'array') {
//   if (type === 'string') {
//     console.log(`Poll results are ${this.answers.join(', ')}`);
//   } else if (type === 'array') {
//     console.log(this.answers);
//   }
// };
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // const answers = [5, 2, 3];
// const answers = [1, 5, 3, 9, 6, 1];

// poll.displayResults.call({ answers }, 'string');

// const runOnce = function () {
//   console.log('This will never run again');
// };

// runOnce();

// runOnce();

// IIFE Imediately Invoked Function Expression
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();

// console.log(isPrivate);

// (() => console.log('This will ALSO never run again'))();

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();
// console.dir(booker);

// //Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// // Re-assigning f function
// h();
// f();
// console.dir(f);

// // Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

//coding challenge

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
