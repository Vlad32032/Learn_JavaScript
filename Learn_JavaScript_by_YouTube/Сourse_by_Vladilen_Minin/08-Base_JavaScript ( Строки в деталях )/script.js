/* Строки в деталях */

// -- Откройте консоль --


const myName = "Vlad";
const myAge = '28';
const any = `any string`; // можно переносить на другую строку и вставлять js код

// старый вариант вывода - Конкатенация строк
const oldOutput = 'Hello my name is ' + myName + ' and my age is ' + myAge;
console.log(oldOutput);

// новый вариант вывода
const newOutput = `Hello my name is ${myName} and my age is ${myAge}`;
console.log(newOutput);


// Методы строк и свойства

// .length - количество символов в строке
console.log(myName.length);

// .toUpperCase - верхний регистр
console.log(myName.toUpperCase());

// .toLowerCase() - нижний регистр
console.log(myName.toLowerCase());

// .charAt() - вернуть символ по индексу
console.log(myName.charAt(2));

// .indexOf() - вернуть индекс символа, если нет символа, вернет -1
console.log(myName.indexOf('a'));

// .tartWith() - начинаеться ли с этих символов, вернет true/false
console.log(myName.startsWith('v')); // false
console.log(myName.startsWith('V')); // true
console.log(myName.toLowerCase().startsWith('v')); // true

// .endsWith() - заканчиваеться ли на эти символы, , вернет true/false
console.log(myName.endsWith('ad'));

// .repeat() - продублировать строчку несколько раз
console.log(myName.repeat(3));

// .trim() - уберает из строки окружающие ее пробелы
console.log(myName.trim());