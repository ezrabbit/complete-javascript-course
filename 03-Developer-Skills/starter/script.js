// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(1991));
// console.log(1111);

// const calcTempAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) {
//       max = curTemp;
//     }
//     debugger;
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   return max - min;
// };
// const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const amplitude = calcTempAmplitude([3, 5, 1], [9, 4, 5]);
// console.log(amplitude);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcius',
//     value: Number(prompt('Degrees celsius:')),
//   };

//   console.table(measurement);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `...${arr[i]}C in ${i + 1} days`;
//   }
//   console.log(str);
// };
// printForecast(data1);
