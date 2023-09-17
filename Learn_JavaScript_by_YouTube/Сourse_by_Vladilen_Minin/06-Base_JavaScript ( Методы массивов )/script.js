/* Методы массивов */

// -- Открой консоль --

const namesOne = ["Влад", "Наташа", "Полина"];
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

    // .push()

console.log("   ", "Метод .push():");
// Метод .push() нужен что-бы добавить элмент в конец массива (быстрая операция)
namesTwo.push("Алена");
console.log(`namesTwo.push("Алена");`);
console.log("namesTwo -", namesTwo);
console.log(" ");

    // .unshift()

console.log("   ", "Метод .unshift():");
// Метод .unshift() нужен что-бы  добавить в начало массива (долгая операция)
namesTwo.unshift("Кристина");
console.log(`namesTwo.unshift("Кристина");`);
console.log("namesTwo -", namesTwo);
console.log(" ");

    // .shift()

console.log("   ", "Метод .shift():");
 // Метод .shift() удаляет(извлекает) первый элемент массива и возвращает этот элемент
let nameFromStart = namesTwo.shift();
console.log(`let nameFromStart = namesTwo.shift();`);
console.log("nameFromStart -", nameFromStart);
console.log("namesTwo -", namesTwo);
console.log(" ");

    // .pop()

console.log("   ", "Метод .pop():");
 // Метод .pop() удаляет(извлекает) последний элемент массива и возвращает этот элемент
let nameFromEnd = namesTwo.pop();
console.log(`let nameFromEnd = namesTwo.pop();`);
console.log("nameFromEnd -", nameFromEnd);
console.log("namesTwo -", namesTwo);
console.log(" ");

    // .reverse()

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

    // .sort()

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
// вариант во стрелочной функцией: .sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))
console.log("lettersTwo -", lettersTwo);
console.log(" ");

    // .splice()

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

    // .map()

console.log("   ", "Метод .map():");
// Метод .map() (по сути цикл для обхода по массиву) принимает параметром функцию, 
// которая 1-м параметром принимает элемент массива, 
// (не обязательно) 2-м параеметром принимает индекс элемента 
// в теле функции обязательно указать (return), что вернется на место элемента в массиве
console.log("namesOne -", namesOne);
const changedNames = namesOne.map(function (name) {
    return name.toUpperCase();
});
// вариант во стрелочной функцией: namesOne.map(name => name.toUpperCase())
console.log(`const changedNames = namesOne.map(function (name) { return name.toLocaleUpperCase() })`);
console.log("changedNames -", changedNames);
console.log("namesOne -", namesOne);
console.log(" ");

    // .toReversed()

console.log("   ", "Метод .toReversed():");
// Метод .toReversed() делает то же, что .reverse(), но не мутирует массив а вовзвращает новый
console.log("namesOne -", namesOne);
console.log(`const reversedNames = namesOne.toReversed();`);
const reversedNames = namesOne.toReversed();
console.log("reversedNames -", reversedNames);
console.log("namesOne -", namesOne);
console.log(" ");

    // .toSorted()

console.log("   ", "Метод .toSorted():");
// Метод .toSorted() делает то же, что .sort(), но не мутирует массив а вовзвращает новый
console.log("lettersOne -", lettersOne);
console.log(`const sortedLetters = lettersOne.toSorted();`);
const sortedLetters = lettersOne.toSorted();
console.log("sortedLetters -", sortedLetters);
console.log("lettersOne -", lettersOne);
console.log(" ");

    // .toSpliced()

console.log("   ", "Метод .toSplised():");
// Метод .toSpliced() делает то же, что .splice(), и принимает такие-же параметры, но не мутирует массив а вовзвращает новый
console.log("numsOne -", numsOne);
const spliceNums = numsOne.toSpliced(0, 1); // Начиная с [0] индекса удалит 1 элемент (удалит 1-й элемент в массиве) 
console.log(`const spliceNums = numsOne.toSpliced(0, 1);`);
console.log("spliceNums -", spliceNums);
console.log("numsOne -", numsOne);
console.log(" ");

    // .indexOf()

console.log("   ", "Метод .indexOf():");
// Метод .indexOf() принимает параметром элемент, ищет этот элемент в массиве и возвращает его индекс
// Если элемента нет в массиве, .indexOf() возвращает -1
const myName = "Влад";
console.log("namesOne -", namesOne);
console.log("myName -", myName);
const indexOfMyName = namesOne.indexOf(myName);
console.log(`const indexOfMyName = namesOne.indexOf(myName);`);
console.log("indexOfMyName -", indexOfMyName)
console.log(" ");

    // .includes()

console.log("   ", "Метод .with():");
// Метод .includes() провереят есть ли такой элемент в массиве и возвращает true/false
console.log("namesOne -", namesOne);
const doseIncludesName = namesOne.includes("Влад");
console.log(`const doseIncludesName = namesOne.includes("Влад");`);
console.log("doseIncludesName -", doseIncludesName);
console.log(" ");

    // .with()

console.log("   ", "Метод .with():");
// Метод .with() принимает 1-м парамтером индекс элемента в массиве а 2-м то, на что его нужно заменить
// .with() не меняет изначальный массив а возвращает новый
const newNames = namesOne.with(indexOfMyName, "Владос");
console.log(`const newNames = namesOne.with(indexOfMyName, "Владос");`);
console.log("newNames -", newNames);
console.log("namesOne -", namesOne);
console.log(" ");







// шаблон

console.log("   ", "Метод :");
console.log(``);
console.log(" ");

// 3:12:00

