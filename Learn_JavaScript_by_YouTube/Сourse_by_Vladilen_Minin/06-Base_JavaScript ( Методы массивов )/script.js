/* Методы массивов */

// -- Откройте консоль --

const namesOne = ["Влад", "Наташа", "Полина"];
const namesTwo = ["Катя","Лена","Света","Соня"];

const numsOne = [3, 54, 5, 12, 2, 1, 7, 17];
const numsTwo = [3, 54, 5, 12, 2, 1, 7, 17];

const lettersOne = ["d", "a", "e", "b", "c"];
const lettersTwo = ["d", "a", "e", "b", "c"];

const people = [
    {name: "Влад", budget: 9000},
    {name: "Наташа", budget: 5000},
    {name: "Полина", budget: 15000},
    {name: "Варя", budget: 12000},
    {name: "Марк", budget: 3000}
];

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

    // .forEach()

console.log("   ", "Метод .forEach():");
// Меторд .forEach() по аналогии с .map() перебирает массив но не изменеят исходный и не возвращает новый а просто выполняет какую-то итерацию
console.log("numsOne -", numsOne);
let sumOfnumsOne = 0; 
numsOne.forEach(function (num) {
    sumOfnumsOne += num;
});
// вариант во стрелочной функцией: numsOne.forEach(n => sumOfnumsOne += num)
console.log(`const sumOfnumsOne = numsOne.forEach();`);
console.log("sumOfnumsOne -", sumOfnumsOne);
console.log("numsOne -", numsOne);
console.log(" ");

    // .reduse() 

console.log("   ", "Метод .reduse():");
// Метод .reduse() принимает 2-м параеметорм начальное значаение а 1-м функцию
// Функция уже принимает 1-м параметром аккамулятор(начальное значение которое изменеяться на каждой итерации)
// 2-м параемтром элемент из массива
// и возвращает аккамулятор
console.log("numsTwo -", numsTwo);
const sumOfnumsTwo = numsTwo.reduce((acc, num) => acc + num, 0)
console.log("sumOfnumsTwo -", sumOfnumsTwo);
console.log("numsTwo -", numsTwo);
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

console.log("   ", "Метод .includes():");
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

    // .find()

console.log("   ", "Метод .find():");
// Метод .find() (Метод для работы с массивом с объектами) принимает функцию и возвращает элемент из массива(объект) если в return true
// Обязательно в return должно попасть true/false
// Eсли такого элемента нет, вернет undefined
console.log("people -", people);
const findPerson = people.find(function (person) {
    if (person.budget === 15000) { // можно так
        return true
    }
    
    // return person.budget === 15000 // можно так
});
// вариант во стрелочной функцией: people.find(p => p.budget === 15000)
console.log(`const findPerson = people.find((p) => p.budget === 15000`);
console.log("findPerson", findPerson);
console.log(" ");
    
    // .findIndex()
    
console.log("   ", "Метод .findIndex():");
// Метод ..findIndex() (Метод для работы с массивом с объектами) принимает функцию и возвращает индекс элемента из массива(объект) если в return true
// Обязательно в return должно попасть true/false
// Eсли такого элемента нет, вернет -1 по аналогии с .indexOf()
console.log("people -", people);
const findPersonIndex = people.findIndex(function (person) {
    if (person.budget === 15000) { // можно так
        return true
    }
    
    // return person.budget === 15000 // можно так
});
// вариант во стрелочной функцией: people.find(p => p.budget === 15000)
console.log(`const findPersonIndex = people.findIndex((p) => p.budget === 15000`);
console.log("findPersonIndex", findPersonIndex);
console.log(" ");
    
    // .filter()

console.log("   ", "Метод .filter():");
// Метод .filter() (Метод для работы с массивом с объектами) принимает функцию и возвращает все элементы в return которых попрала true
// Обязательно в return должно попасть true/false
console.log("people -", people);
const filteredPeople = people.filter(function (person) {
    return person.budget > 5000;
});
// вариант во стрелочной функцией: people.filter(p => person.budget > 5000)
console.log(`const filteredPeople = people.filter(p => person.budget > 5000);`)
console.log("filteredPeople", filteredPeople);
console.log(" ");



// Пример функционального програмирования:
// Считаем сумарный бюджет всех людей в массиве у кого бюджет больше 5000

const byBudget = (p) => p.budget > 5000;
const pickBudget = (p) => p.budget;

const sumOfRichPeople = people
    .filter(byBudget)
    .map(pickBudget)
    .reduce((acc, budget) => acc + budget, 0)

console.log(sumOfRichPeople)



// шаблон
// console.log("   ", "Метод :");