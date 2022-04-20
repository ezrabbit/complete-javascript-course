'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     let output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       //Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Jiahao';
//       //Reassigning outer scope's variable
//       output = 'NEW OUTPUT!';
//       const str = `Oh, you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//     // console.log(add(2, 3)); // cannot be used in strict mode

//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Edison';
// calcAge(1991);

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Edison';
// let job = 'student';
// const year = 1991;

// console.log(addDecl(1, 2));
// console.log(addExpr(1, 2));
// console.log(addArrow(1, 2));

// function addDecl(a, b) {
//   return a + b;
// }

// let addExpr = function (a, b) { //hasn't been initialized, i.e. in TDZ
//   return a + b;
// };

// var addArrow = (a, b) => a + b; //undefined

//Example
// if (!numProducts) deleteShoppingCart();

// // var numProducts = 10;
// const numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(window.x);
// console.log(window.y);
// console.log(window.z);

// console.log(this); // window object

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); //undefined(strict mode)    window object(sloppy mode)
// };
// calcAge(1999);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); //undefined(strict mode)    window object(sloppy mode)
// };
// calcAgeArrow(1999);

// const edison = {
//   year: 1999,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// // edison.calcAge();

// const matilda = {
//   year: 2017,
// };
// // matilda.calcAge = edison.calcAge; //method borrowing
// // console.log(matilda);
// // matilda.calcAge();

// const f = edison.calcAge;
// // console.log(f);
// f();

// var firstName = 'Matilda';

// const edison = {
//   firstName: 'Edison',
//   year: 1999,
//   calc: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
//   great: function () {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// edison.great();

// const edison = {
//   firstName: 'Edison',
//   year: 1999,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037, this.year);
//     //solution1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     //solution2
//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1999);
//     };
//     isMillenial();
//   },
//   greet: function () {
//     //cannot use arrow function
//     // console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// edison.greet();
// edison.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Edison',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log(me);
// console.log(friend);

// let lastName = 'William';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log(jessica);
// console.log(marriedJessica);

// marriedJessica = {};

const j = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jCopy = Object.assign({}, j); //shallow copy
jCopy.lastName = 'Davis';
jCopy.family.push('John');
console.log(j, jCopy);
