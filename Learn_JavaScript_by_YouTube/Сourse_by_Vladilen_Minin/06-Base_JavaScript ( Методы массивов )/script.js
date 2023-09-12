/* Методы массивов */

const namesOne = ["Влад", "Наташа", "Полина", "Марк"];
const namesTwo = ["Катя","Лена","Света","Лена"];

const numsOne = [3, 54, 5, 12, 2, 1, 7, 17];
const numsTwo = [3, 54, 5, 12, 2, 1, 7, 17];

namesTwo.push("Алена"); // Добавить в конец массива (быстрая операция)
console.log("namesTwo -", namesTwo);

namesTwo.unshift("Кристина"); // Добавить в начало массива (долгая операция)
console.log("namesTwo -", namesTwo);

namesTwo.shift(); // Метод shift удаляет(извлекает) первый элемент массива и возвращает этот элемент
// например:
let nameFromStart = namesTwo.shift();
console.log("nameFromStart -", nameFromStart);
console.log("namesTwo -", namesTwo);

namesTwo.pop(); // Метод pop удаляет(извлекает) последний элемент массива и возвращает этот элемент
// например:
let nameFromEnd = namesTwo.pop();
console.log("nameFromEnd -", nameFromEnd);
console.log("namesTwo -", namesTwo);

namesTwo.reverse(); // Метод reverse переворачивает массив(было - [1, 2, 3, 4], станет - [4, 3, 2, 1])
console.log("namesTwo -", namesTwo);

console.log("numsOne -", numsOne);
console.log("numsTwo -", numsTwo);
numsTwo.sort();
console.log("numsTwo -", numsTwo);

// -- Все эти методы мутируют(изменяют) исходный массив --

const reversedNames = namesTwo.toReversed(); // Метод toReversed делает то же, что reverse но не мутирует массив а вовзвращает новый
console.log("namesTwo -", namesTwo);
console.log("reversedNames -", reversedNames);






