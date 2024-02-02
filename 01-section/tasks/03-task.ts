// 1. Сравните типы переменных city и country.
// Результат сравнения запишите в переменную isSameTypes
// 2. Приведите тип переменной region таким образом, чтобы результат сравнения типов переменных city и region был равен true.
// Результат сравнения запишите в переменную isSameTypes

const city = "London";
const country = "Great Britain";
const region = "161";

let isSameTypes: boolean;
isSameTypes = typeof city === typeof country;
console.log(isSameTypes);
isSameTypes = typeof city === typeof region;
console.log(isSameTypes);

export {};
