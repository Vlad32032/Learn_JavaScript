/* Функции и замыкания */

// -- Откройте консоль --



// Function Declaration

function greetOne(name) {
    console.log('Hello -', name)
}
// можно вызвать до объявления функции

// Function Expression

const greetTwo = function (name) {
    console.log('Hello -', name)
}
// нельзя вызвать до объявления функции

console.log(typeof greetOne) // function
// typeof покажет function но это для удобства разработки
// на самом деле function это объект
// можем в этом убедиться
console.dir(greetOne)
