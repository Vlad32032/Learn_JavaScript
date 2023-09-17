/* Методы массивов */

const namesOne = ["Влад", "Наташа", "Полина", "Марк"];
const namesTwo = ["Катя","Лена","Света","Лена"];

const numsOne = [3, 54, 5, 12, 2, 1, 7, 17];
const numsTwo = [3, 54, 5, 12, 2, 1, 7, 17];

const lettersOne = ["d", "a", "e", "b", "c"];
const lettersTwo = ["d", "a", "e", "b", "c"];

// -- Все эти методы мутируют(изменяют) исходный массив --
console.log("Методы мутирующие массив:");
console.log(" ");

console.log("Метод .push():");
namesTwo.push("Алена"); // Добавить в конец массива (быстрая операция)
console.log("namesTwo -", namesTwo);
console.log(" ");

console.log("Метод .unshift():");
namesTwo.unshift("Кристина"); // Добавить в начало массива (долгая операция)
console.log("namesTwo -", namesTwo);
console.log(" ");

console.log("Метод .shift():");
namesTwo.shift(); // Метод .shift() удаляет(извлекает) первый элемент массива и возвращает этот элемент
// например:
let nameFromStart = namesTwo.shift();
console.log("nameFromStart -", nameFromStart);
console.log("namesTwo -", namesTwo);
console.log(" ");

console.log("Метод .pop():");
namesTwo.pop(); // Метод .pop() удаляет(извлекает) последний элемент массива и возвращает этот элемент
// например:
let nameFromEnd = namesTwo.pop();
console.log("nameFromEnd -", nameFromEnd);
console.log("namesTwo -", namesTwo);
console.log(" ");

console.log("Метод .reverse():");
namesTwo.reverse(); // Метод .reverse() переворачивает массив(было - [1, 2, 3, 4], станет - [4, 3, 2, 1])
console.log("namesTwo -", namesTwo);
numsTwo.reverse();
console.log("numsOne -", numsOne);
console.log("numsTwo -", numsTwo);
console.log(" ");

console.log("Метод .sort():");
lettersOne.sort(); // Мутод .sort() сортирует массив(можно в параметры передать функцию для указания, как сортировать массив)
lettersTwo.sort(function (a, b) { return b.charCodeAt(0) - a.charCodeAt(0) }) // сортирует в обратном порядке
// вариант во стрелочной функцией .sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))
console.log("lettersOne -", lettersOne);
console.log("lettersTwo -", lettersTwo);
console.log(" ");

console.log(" ");

// -- Все эти методы НЕ мутируют исходный массив --
console.log("Методы не мутирующие массив:")
console.log(" ");

const reversedNames = namesTwo.toReversed(); // Метод toReversed() делает то же, что reverse() но не мутирует массив а вовзвращает новый
console.log("reversedNames -", reversedNames);

const sortedLetters = lettersOne.toSorted(); // Метод toSorted делает то же, что sort() но не мутирует массив а вовзвращает новый
console.log("sortedLetters -", sortedLetters);




