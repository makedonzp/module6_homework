// const currentYear = 2023;
// const yearOfBirth = 2003;

// console.log(`Тебе сейчас ${currentYear - yearOfBirth} лет`);

// задание 4.4
// let first = 8;
// let second = 3;

// console.log(first % second);

// let dadYearsOld = 36;
// let sonYearsOld = 7;

// console.log(dadYearsOld - sonYearsOld * 2);

// const poem = `Я помню чудное мгновенье: \n Передо мной явилась ты,\n Как мимолетное виденье, \n Как гений чистой красоты`;

// console.log(poem);

// let example = 'Что-то называется "хорошо",а что-то "плохо"';
// console.log(example);

// let a = 1;
// let b = 2;
// console.log(`Сумма переменных a и b равна ${a + b}`);

// const name = "Василий";
// console.log(`Привет ${name}`);

// const dataSeconds = 5640;
// const minutes = Math.floor((dataSeconds % 3600) / 60);
// const seconds = Math.floor((dataSeconds % 3600) % 60);
// const hours = Math.floor(dataSeconds / 3600);

// console.log(`точное время ${hours}:${minutes}:${seconds}`);

// console.log(4 - "7" + 10);

// console.log(true * 2 * 5);

// console.log(false * 6 + 10);

// console.log(4 + true * "5");

// let name = prompt("введите своё имя");

// alert(`"Привет, ${name}!"`);

// const name = prompt("что вы хотите продать?");
// const sale = prompt(`по чём вы хотите продать ${name}?`);
// const shure = prompt(
//   `вы уверены что вы хотите продать ${name}, по цене ${sale}`
// );
// alert(`фига себе! ${name},по цене ${sale}, не дофига ли?`);

// let trueOrNot = 5 < 7 || 5 > 7;
// console.log(trueOrNot);

//                                   *      *      *

// 6.2. Функции без параметров

// Практиктические задания

// Задание 1

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

// На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис:

// let arr = [
//   5,
//   8,
//   12,
//   null,
//   12,
//   7,
//   5,
//   8,
//   12,
//   2,
//   12,
//   null,
//   0,
//   7,
//   9,
//   2,
//   0,
//   0,
//   null,
// ];
// чётных 8
// нечёнтых 5
// нолей 3
// null 3
// function countNums() {
//   let countEven = 0;
//   let countZero = 0;
//   let countNull = 0;
//   let countOdd = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0 && arr[i] !== null && arr[i] !== 0) {
//       countEven++;
//     } else if (arr[i] == 0) {
//       countZero++;
//     } else if (arr[i] == null) {
//       countNull++;
//     } else {
//       countOdd++;
//     }
//   }
//   console.log("чётных чисел в массиве" + " - " + countEven);
//   console.log("нечётных чисел в массиве" + " - " + countOdd);
//   console.log("значений '0'  в массиве" + " - " + countZero);
//   console.log("значений null  в массиве" + " - " + countNull);
//   console.log(" ");
//   if (countEven > countOdd) {
//     console.log("В массиве чётных чисел больше всего");
//   } else {
//     console.log("В массиве нечётных больше всего");
//   }
//   console.log(" ");
//   let draw = [];
//   let moreThen = [];
//   let fiveLot = [];
//   let biggestNum = [];
//   let lowerNum = [];
//   let notStandartNum = [];
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[0] === typeof arr[j]) {
//       draw.push(arr[0]);
//     } else if (arr[0] < arr[j]) {
//       moreThen.push(arr[j]);
//     } else {
//       fiveLot.push(arr[0]);
//     }
//   }
//   for (let l = 0; l < moreThen.length; l++) {
//     if (moreThen[0] < moreThen[l]) {
//       biggestNum.push(moreThen[l]);
//     }
//   }
//   for (let k = 0; k < arr.length; k++) {
//     if (arr[k] == 0) {
//       lowerNum.push(arr[k]);
//     }
//   }
//   for (let y = 0; y < arr.length; y++) {
//     if (arr[y] == null) {
//       notStandartNum.push(arr[y]);
//     }
//   }
//   console.log(`${biggestNum[0]} - самое большое число в массиве`);
//   console.log(" ");
//   console.log(`${lowerNum[0]} - самое меньшее число в массиве`);
//   console.log(" ");
//   console.log(`${notStandartNum[0]} - самое нестандартное значение в массиве`);
//   console.log(" ");
//   const counts = arr.reduce((counts, element) => {
//     counts[element] = (counts[element] || 0) + 1;
//     return counts;
//   }, {});

//   const maxElement = Object.keys(counts).reduce((maxElement, element) => {
//     if (counts[element] > counts[maxElement]) {
//       maxElement = element;
//     }
//     return maxElement;
//   }, null);
//   console.log(maxElement);
// }
// countNums();

//                                   *      *      *

/*
Задание 2.

Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.
 */

// let askNumber = prompt("введите любое число от 0 - 1000");

// if (askNumber == 1) {
//   console.log(`Число ${askNumber} является "1"`);
// } else if (askNumber == 0) {
//   console.log(`Число ${askNumber} является "0"`);
// } else if (askNumber > 1000) {
//   console.log("не верные данные");
// } else {
//   startProgramm();
// }
// function startProgramm() {
//   checkNumber(askNumber);
// }
// function checkNumber(num) {
//   for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
// }
// if (checkNumber(askNumber) == false) {
//   console.log(`число ${askNumber} не является простым`);
// } else {
//   console.log(`число ${askNumber} является простым`);
// }

//                                 *      *       *

//
/*Задание 3.

Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
*/
// let arrArguments = [];
// function arguments() {
//   let numFirstArgument = prompt("введите первый аргумент");
//   arrArguments.push(numFirstArgument);
//   agumentsResult();
// }
// arguments();
// function agumentsResult() {
//   let numSecondArgument = prompt("введите второй аргумент");
//   arrArguments.push(numSecondArgument);
//   let result = arrArguments.reduce(function (acc, val) {
//     return Number(acc) + Number(val);
//   });
//   console.log(result);
// }

//                                   *         *         *
/*
Задание 4.

Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
*/

// let askFirstArgument = Number(
//   prompt("введите первое число от которого будет начинаться отсчет")
// );
// let askSecondArgument = Number(
//   prompt("введите второе число от которого будет начинаться отсчет")
// );

// function SetFunc() {
//   let SetIntervalFunc = setInterval(() => {
//     askFirstArgument++;
//     if (askFirstArgument === askSecondArgument) {
//       clearInterval(SetIntervalFunc);
//     }
//     console.log(askFirstArgument);
//   }, 1000);
// }

// SetFunc();

//                                  *         *         *

/*
Задание 5.

Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

Используйте Arrow Function синтаксис.

Протестируйте функцию на любых значениях и выведите результат в консоль.
*/

// let xNumber = Number(prompt("введите число 'x'"));
// let nNumber = Number(prompt("введите число 'n'"));

// const res = (xNumber, nNumber) => {
//   return Math.pow(xNumber, nNumber);
// };

// console.log(res(xNumber, nNumber));
