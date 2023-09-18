/* Числа в деталях */

// -- Откройте консоль --

const integerNumber = 32; // Целое число
const floatNumber = 32.32; // Дробное число

// Варианты записи числа
    // е(количество нолей)
const n1 = 1e3; // 1000
const n2 = 1e6; // 1000000
console.log(n2);

    // _ можно разделять число нижним подчеркиванием
const n3 = 1_000;
const n4 = 1_000_000;
console.log(n4);

// Функция Number

console.log(Number);
console.dir(Number);

// Максимальное безопастное число 
console.log(Number.MAX_SAFE_INTEGER);
console.log(Math.pow(2, 53) -1)

// Минимальное безопастное число
console.log(Number.MIN_SAFE_INTEGER);

// Максимальное и минимальное значение
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// Бесконечность 
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(1 / 0); // Если делить на ноль, то будет бесконечность
// Проверка на конечность числа
console.log(Number.isFinite(1 / 0)); // false

// NaN
console.log(1 / undefined); // ЕСли делить на undefined будет NaN
console.log(Number.NaN); // Тоже верет NaN
// Проверка на NaN
console.log(Number.isNaN(1 / undefined)); // true
console.log(Number.isNaN(1)); // false


// Приведение к числу

const stringInteger = "10";
const stringFloat = "9.9";

console.log(Number(stringInteger));
console.log(Number(stringFloat));

console.log(Number.parseInt(stringInteger)); // Можно писать и так
console.log(parseInt(stringInteger)); // и так

console.log(Number.parseFloat(stringFloat)); // Можно писать и так
console.log(parseFloat(stringFloat)); // и так

console.log(+stringInteger);
console.log(+stringFloat)


// Особенности работы с дробными числами

console.log(0.1 + 0.2); // Ожидаем 0.3 но на выходе все чуть сложнее)

// Метод числа .toFixed()
console.log((0.1 + 0.2).toFixed(1)); 
// Метод .toFixed() принимает количество символов после запятой
// ! Возвращает строку 
console.log(+(0.1 + 0.2).toFixed(1)); // приводим к числу