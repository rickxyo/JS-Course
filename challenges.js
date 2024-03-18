// data 1
const marksWeight = 78;
const marksHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = marksWeight / marksHeight ** 2 / (marksHeight * marksHeight);

const johnBMI = johnWeight / johnHeight ** 2 / (johnHeight * johnHeight);

console.log(markBMI, johnBMI);

console.log(markBMI > johnBMI);

// data 2
const marksWeight2 = 95;
const marksHeight2 = 1.88;

const johnWeight2 = 85;
const johnHeight2 = 1.76;

const johnBMI2 = johnWeight2 / johnHeight2 ** 2 / (johnHeight2 * johnHeight2);

const markBMI2 =
  marksWeight2 / marksHeight2 ** 2 / (marksHeight2 * marksHeight2);

console.log(markBMI2, johnBMI2);

console.log(markBMI2 > johnBMI2);
