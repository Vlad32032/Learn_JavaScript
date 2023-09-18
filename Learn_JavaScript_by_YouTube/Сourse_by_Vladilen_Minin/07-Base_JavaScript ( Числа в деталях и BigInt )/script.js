/* Числа в деталях и BigInt */

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
console.log(+stringFloat);


// Особенности работы с дробными числами

console.log(0.1 + 0.2); // Ожидаем 0.3 но на выходе все чуть сложнее)

// Метод числа .toFixed()
console.log((0.1 + 0.2).toFixed(1)); 
// Метод .toFixed() принимает количество символов после запятой
// ! Возвращает строку 
console.log(+(0.1 + 0.2).toFixed(1)); // приводим к числу


// BigInt

console.log(BigInt(Number.MAX_SAFE_INTEGER) + 99898989n);
// 1n - BigInt
// может быть только целым числом 
// 1.1n - error
// может взаимодействовать только с BigInt
// 10n + 10 - error
// но можно привести BigInt к number
console.log(parseInt(10n) - 5);
// или можно привести number к BigInt
console.log(10n - BigInt(5));
// при делении BigInt округляються 
console.log(5n / 2n); // = 2n


// Math

// число pi и чисто e
console.log(Math.E);
console.log(Math.PI);

// методы:

// .sqrt() -  квадратный корень из
console.log(Math.sqrt(25));

// .pow() - возвести число в степень
console.log(Math.pow(2, 3)); // 2 в степени 3

// .abs() - взять модуль числа 
console.log(Math.abs(-2)); // вернет 2

// .max() - получить максимальное число из всех переданных
console.log(Math.max(1, 2, 3));

// .min() - получить минимальное число из всех переданных
console.log(Math.min(1, 2, 3));

// .floor() - округлить (всегда в меньшую сторону)
console.log(Math.floor(4.9)); // округлит до 4

// .ceil() - округлить (всегда в большую сторону)
console.log(Math.ceil(4.1)); // округлит до 5

// .round() - округлить до ближайшего целочисленного
console.log(Math.round(4.9), Math.round(4.1));

// .trunc() - откинуть дробную часть
console.log(Math.trunc(4.9));

// .random() - возвращает случайное число от 0 до 1
console.log(Math.random());


// Пример функции возвращающей число в выбранном диапазоне 

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
};

console.log(getRandomNumber(10, 30));