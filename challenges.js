// CHALLENGE 1

// data 1
const marksWeight = 78;
const marksHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = marksWeight / marksHeight ** 2;

const johnBMI = johnWeight / johnHeight ** 2;

console.log(markBMI, johnBMI);

console.log(markBMI > johnBMI);

// data 2
const marksWeight2 = 95;
const marksHeight2 = 1.88;

const johnWeight2 = 85;
const johnHeight2 = 1.76;

const johnBMI2 = johnWeight2 / johnHeight2 ** 2;

const markBMI2 = marksWeight2 / marksHeight2 ** 2;

console.log(markBMI2, johnBMI2);

console.log(markBMI2 > johnBMI2);

// CHALLENGE 2

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's ${johnBMI} !`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}) !`);
}

// CHALLENGE 3

const scoreDolphins = 96 + 108 + 89;
const scorekoalas = 88 + 91 + 110;

if (scoreDolphins > scorekoalas) {
  console.log("Dolphins Win");
} else if (scoreDolphins < scorekoalas) {
  console.log("Koalas Win");
} else {
  console.log("Both win");
}
