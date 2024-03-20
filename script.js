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

const age = 19;

if (age >= 18) {
  console.log("Sarah cant start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
