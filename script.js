// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Pedro");

// //Variable
// let firstName = "Pedro";
// console.log(firstName);

// // boolean
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// javascriptIsFun = "YES!";
// console.log(javascriptIsFun);

// // old way, do not use
// var agePedro = 20;
// agePedro = 21;

// // let can change during the code
// let age = 30;
// age = 31;

// // const cannot be change
// const birthYear = 1991;
// birthYear = 1990;

// basic operators

// // Math Operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = "Pedro Henrique";
// const lastName = "Oldoni";
// console.log(firstName + " " + lastName);

// // Assignment operators
// let x = 10 + 5; //15
// x += 10; // x = x + 10 = 25
// x *= 4; //x = x * 4 = 100
// x++; //x = x + 1
// console.log(x);

// // Comparison operators
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// Strings and Template Literals

// const firstName = "Pedro";
// const job = "Software Engineer";
// const birthYear = 2005;
// const year = 2024;

// const pedro =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job;

// console.log(pedro);

// const pedroNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
// console.log(pedroNew);

// if / else statements

// const age = 19;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Sarah cant start driving license");
// }

// most used

// const age = 19;

// if (age >= 18) {
//   console.log("Sarah cant start driving license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
// }

// const birthYear = 1991;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// Type  conversion

// Converting a string to a number
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

// Converting a number to a string
console.logh(String(23));

// Type coercion
console.log("I am" + 23 + " years old ");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5"); //'95'
// 2 + 3 + 4 = 9

console.log("10" - "4" - "3" - 2 + "5"); //'15'
//'10' - '4' - '3' -2 = 1
