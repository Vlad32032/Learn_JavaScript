/* Методы массивов */

// -- Открой консоль --

const namesOne = ["Влад", "Наташа", "Полина", "Марк"];
const namesTwo = ["Катя","Лена","Света","Лена"];

const numsOne = [3, 54, 5, 12, 2, 1, 7, 17];
const numsTwo = [3, 54, 5, 12, 2, 1, 7, 17];

const lettersOne = ["d", "a", "e", "b", "c"];
const lettersTwo = ["d", "a", "e", "b", "c"];

// -- Все эти методы мутируют(изменяют) исходный массив --
console.log("   ", "Методы мутирующие массив:");
console.log(" ");

console.log("   ", "Изначальный массив:");
console.log("namesTwo -", namesTwo);
console.log(" ");

console.log("   ", "Метод .push():");
// Метод .push() нужен что-бы добавить элмент в конец массива (быстрая операция)
namesTwo.push("Алена");
console.log(`namesTwo.push("Алена");`);
console.log("namesTwo -", namesTwo);
console.log(" ");

console.log("   ", "Метод .unshift():");
// Метод .unshift() нужен что-бы  добавить в начало массива (долгая операция)
namesTwo.unshift("Кристина");
console.log(`namesTwo.unshift("Кристина");`);
console.log("namesTwo -", namesTwo);
console.log(" ");

console.log("   ", "Метод .shift():");
 // Метод .shift() удаляет(извлекает) первый элемент массива и возвращает этот элемент
let nameFromStart = namesTwo.shift();
console.log(`let nameFromStart = namesTwo.shift();`);
console.log("nameFromStart -", nameFromStart);
console.log("namesTwo -", namesTwo);
console.log(" ");

console.log("   ", "Метод .pop():");
 // Метод .pop() удаляет(извлекает) последний элемент массива и возвращает этот элемент
let nameFromEnd = namesTwo.pop();
console.log(`let nameFromEnd = namesTwo.pop();`);
console.log("nameFromEnd -", nameFromEnd);
console.log("namesTwo -", namesTwo);
console.log(" ");

console.log("   ", "Метод .reverse():");
 // Метод .reverse() переворачивает массив(было - [1, 2, 3, 4], станет - [4, 3, 2, 1])
namesTwo.reverse();
console.log(`namesTwo.reverse();`);
console.log("namesTwo -", namesTwo);
console.log(" ");
console.log("numsTwo -", numsTwo);
numsTwo.reverse();
console.log(`numsTwo.reverse();`);
console.log("numsTwo -", numsTwo);
console.log(" ");

console.log("   ", "Метод .sort():");
 // Мутод .sort() сортирует массив(можно в параметры передать функцию для указания, как сортировать массив)
console.log("lettersOne -", lettersOne);
console.log(`lettersOne.sort();`);
lettersOne.sort();
console.log("lettersOne -", lettersOne);
console.log(" ");
console.log("lettersTwo -", lettersTwo);
console.log(`lettersTwo.sort(function (a, b) { return b.charCodeAt(0) - a.charCodeAt(0) })`);
lettersTwo.sort(function (a, b) { return b.charCodeAt(0) - a.charCodeAt(0) }) // сортирует в обратном порядке
// вариант во стрелочной функцией .sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))
console.log("lettersTwo -", lettersTwo);
console.log(" ");

console.log("   ", "Метод .splice():");
// Метод .splice() удаляет элемент из массива(1-й параемтр: индекс массива от куда начать, 2-й параметр: количество элементов)
console.log("numsOne -", numsOne);
console.log(`numsOne.splice(0, 1);`);
numsOne.splice(0, 1); // Начиная с [0] индекса удалит 1 элемент (удалит 1-й элемент в массиве) 
console.log("numsOne -", numsOne);
console.log(" ");

console.log("numsTwo -", numsTwo);
console.log(`numsTwo.splice(3, 2);`);
numsTwo.splice(3, 2); // Начиная с [3] индекса удалит 2 элемент (удалит 4-й и 5-й элемент в массиве) 
console.log("numsTwo -", numsTwo);
console.log(" ");



console.log(" ");

// -- Все эти методы НЕ мутируют исходный массив --
console.log("   ", "Методы не мутирующие массив:")
console.log(" ");

console.log("   ", "Метод .toReversed():");
const reversedNames = namesTwo.toReversed(); // Метод toReversed() делает то же, что reverse() но не мутирует массив а вовзвращает новый
console.log("reversedNames -", reversedNames);
console.log(" ");

console.log("   ", "Метод .toSorted():");
const sortedLetters = lettersOne.toSorted(); // Метод toSorted делает то же, что sort() но не мутирует массив а вовзвращает новый
console.log("sortedLetters -", sortedLetters);
console.log(" ");


console.log("   ", "Метод :");
console.log(``);
console.log(" ");