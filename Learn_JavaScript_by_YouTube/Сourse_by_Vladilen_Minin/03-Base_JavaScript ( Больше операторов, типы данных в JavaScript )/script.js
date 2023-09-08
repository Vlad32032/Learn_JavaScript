/* Operators */
console.log("/* Operators */")
console.log(" ");

let a = 10;
let b = 20;
let c = 30;

// варианты записи одного и того же действия

    c += a; // c = c + a
    c -= a; // c = c - a
    c *= a; // c = c * a
    c /= a; // c = c / a

// Пример:
console.log("-- Пример записи одного и того же действия --")

let a1 = 10,
    a2 = 10;

console.log("a1 =", a1);
console.log("a2 =", a2);

a1 = a1 + a;
a2 += a;

console.log("a1 = a1 + a;");
console.log("a2 += a;");
console.log("Does a1 === a2 ?");
console.log(a1 === a2);
console.log(" ");

// Возведение в степень
console.log("-- Возведение в степень --")

c = 4 ** 2;

console.log("c = 4 ** 2;");
console.log("4 в квадрате -", c);
console.log(" ");

/* Data Types */
console.log("/* Data Types */");
console.log(" ");

const age = 28; // number
const firstName = "Vlad"; // string
const isProgrammer = true; // boolean
let x; // undefined

console.log("age = 28, age type -", typeof age);
console.log("firstName = Vlad, firstName type -", typeof firstName);
console.log("isProgrammer = true, isProgrammer type -", typeof isProgrammer);
console.log("let x, x type -", typeof x);

console.log("null type -", typeof null);
console.log(" ");

/* Priority */
console.log("-- Приоритеты --");

const fullAge = 29;
const birthYear = 1995;
const correntYear = 2023;

// < > <= >=

console.log("fullAge = 29;");
console.log("birthYear = 1995;");
console.log("correntYear = 2023;");
console.log("correntYear < birthYear -", correntYear < birthYear);
console.log("correntYear - birthYear <= fullAge -", correntYear - birthYear <= fullAge);
console.log(" ");

// == and ===
const num1 = 42;
const num2 = "42";

console.log("num1 = 42");
console.log("num2 = '42'");
console.log("Does num1 == num2 ?");
console.log(num1 == num2);
console.log(" ");

console.log("Does num1 === num2 ?");
console.log(num1 === num2);
console.log(" ");



