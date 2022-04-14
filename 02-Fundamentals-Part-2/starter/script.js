"use strict";
//1. forbids us to do certain things(e.g. reserved words)
//2. would not fail silently but with notifications in console

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;
// const if = 23;

// function logger() {
//   console.log("My name is Edison");
// }

// calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");
// console.log("23");
// console.log(23);

//function declaration(can access before declare)
// const age1 = calcAge1(1991);
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// console.log(age1);

//function expression
// const age2 = calcAge2(1991);
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);
// console.log(age2);

//arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement}`;
// };

// console.log(yearsUntilRetirement(1999, "Edison"));
// console.log(yearsUntilRetirement(2001, "Vivian"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   return `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1999, "Edison"));
// console.log(yearsUntilRetirement(1950, "Jonas"));

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// // console.log(calcAverage(3, 4, 5));

// //Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// // console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win trophy 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win trophy 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log(`No one wins...`);
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// //Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// // literal syntax: way more ususal
// const friends = ["Michael", "Steven", "Peter"];
// // console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Edison";
// const edison = [firstName, "Zhang", 2022 - 1999, "student", friends];
// console.log(edison);

//Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1);
// console.log(age2);
// console.log(age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// const friends = ["Michael", "Steven", "Peter"];
// // Add elements
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// // Remove elements
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //First
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob")); // doesn't exist, return -1

// friends.push(23);
// console.log(friends.includes("Steven")); //true
// console.log(friends.includes("Bob")); //false
// console.log(friends.includes(23));
// console.log(friends.includes("23")); //false(do not do type coersion)

// console.log(friends);
// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

// const edisonArray = [
//   "Edison",
//   "Zhang",
//   2022 - 1999,
//   "student",
//   ["Vivian", "Renjie"],
// ];
// console.log(edisonArray);

// const edison = {
//   firstName: "Edison",
//   lastName: "Zhang",
//   age: 2022 - 1999,
//   job: "student",
//   friends: ["Vivian", "Renjie"],
// };

// const edison = {
//   firstName: "Edison",
//   lastName: "Zhang",
//   age: 2022 - 1999,
//   job: "student",
//   friends: ["Vivian", "Renjie"],
// };

// // console.log(edison);

// console.log(edison.lastName);
// console.log(edison["lastName"]); // can put any expression

// const nameKey = "Name";
// console.log(edison[`first${nameKey}`]);
// console.log(edison["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Edison? Choose between firstName, lastName, age, job and friends"
// );

// if (edison[interestedIn]) {
//   console.log(edison[interestedIn]);
// } else {
//   console.log("Wrong request!");
// }

// edison.location = "United States";
// edison["leetcode"] = "ezrabbit1999";
// console.log(edison);

// console.log(
//   `${edison.firstName} has ${edison.friends.length} friends, and his best friend is called ${edison.friends[0]}`
// );

// const edison = {
//   firstName: "Edison",
//   lastName: "Zhang",
//   birthYear: 1999,
//   job: "student",
//   friends: ["Vivian", "Renjie"],
//   hasDriversLicense: false,

//   // calcAge: function () {
//   //   return 2022 - this.birthYear;
//   // },
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//   },
// };
// // const calcAge = function(birthYear) {
// //   return 2037-birthYear;
// // }

// console.log(edison.getSummary());

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
//   );
// } else if (mark.bmi < john.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
//   );
// }

// console.log("Lifting weights repitition 1 🏋️");
// console.log("Lifting weights repitition 2 🏋️");
// console.log("Lifting weights repitition 3 🏋️");
// console.log("Lifting weights repitition 4 🏋️");
// console.log("Lifting weights repitition 5 🏋️");
// console.log("Lifting weights repitition 6 🏋️");
// console.log("Lifting weights repitition 7 🏋️");
// console.log("Lifting weights repitition 8 🏋️");
// console.log("Lifting weights repitition 9 🏋️");
// console.log("Lifting weights repitition 10 🏋️");

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repitition ${rep} 🏋️`);
// }

// const edison = [
//   "Edison",
//   "Zhang",
//   2022 - 1991,
//   "student",
//   ["Vivian", "Renjie"],
//   true,
// ];

// const types = [];
// const types1 = [];

// for (let i = 0; i < edison.length; i++) {
//   //filling types array
//   types.push(typeof edison[i]);
//   types1[i] = typeof edison[i];
// }
// console.log(types);
// console.log(types1);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

//continue and break
// const edison = [
//   "Edison",
//   "Zhang",
//   2022 - 1991,
//   "student",
//   ["Vivian", "Renjie"],
//   true,
// ];

// console.log("----ONLY STRINGS----");
// for (let i = 0; i < edison.length; i++) {
//   if (typeof edison[i] !== "string") continue;
//   console.log(edison[i], typeof edison[i]);
// }

// console.log("----BREAK WITH NUMBER----");
// for (let i = 0; i < edison.length; i++) {
//   if (typeof edison[i] == "number") break;
//   console.log(edison[i], typeof edison[i]);
// }

// const edison = [
//   "Edison",
//   "Zhang",
//   2022 - 1991,
//   "student",
//   ["Vivian", "Renjie"],
// ];

// const edisonCopy = [];

// for (let i = edison.length - 1; i >= 0; i--) {
//   console.log(edison[i]);
//   edisonCopy.unshift(edison[i]);
// }
// console.log(edisonCopy);

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`${exercise}--------Starting exercise--------`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Excersice ${exercise}:lifting weight repitition ${rep} 🏋️`);
//   }
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repitition ${rep++}`);
// }

// for (
//   let dice = Math.trunc(Math.random() * 6) + 1;
//   dice !== 6;
//   dice = Math.trunc(Math.random() * 6) + 1
// ) {
//   console.log(`You rolled a ${dice}`);
// }

// let dice = Math.trunc(Math.random() * 6 + 1);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6 + 1);
//   if (dice === 6) console.log("Loop is about to end...");
// }

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
console.log(calcAverage(tips));
