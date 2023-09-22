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



// setTimeout()
// в setTimeout() передаветься 1-м параметром функция а 2-м время через которое она будет вызванна в милисекундах

setTimeout(function() {
    greetOne('Vlad')
}, 1500)

// setInterval()
// в setInterval() все по аналогии с setTimeout() но вызов переданной функции будет осущетвляться постоянно

// setInterval(function() {
//     console.log(Math.floor(Math.random() * 100))
// }, 2000)

let counter = 0;

const interval = setInterval(function () {
    if (counter === 5) {
        clearInterval(interval)
    } else {
        console.log(Math.floor(Math.random() * 100))
        counter++
    }
    
}, 2000)

// setInterval() и setTimeout() можно остановить с помощью clearInterval() и clearTimeout()



// Arrow Functions

const arrowGreet = (name) => {
    console.log("Hi -", name)
}

const sum = (a, b) => a + b
// в однострочном варианте всегда подставляеться return



// Default parameters

// в функции можно передавать параметы по умолчанию

console.log(sum(1, 1)) // 1 + 1 = 2
console.log(sum(1)) // 1 + undefined = NaN
console.log(sum()) // undefined + undefined = NaN

const sumDefault = (a, b = 10) => a + b

console.log(sumDefault(1, 1)) // 2
console.log(sumDefault(1)) // 1 + 10 = 11
console.log(sumDefault()) // undefined + 10 = NaN

const subtractDefault = (a = 20, b = a / 2) => a - b

console.log(subtractDefault(10, 5)) // 10 - 5 = 5
console.log(subtractDefault(30)) // 30 - 15 = 15
console.log(subtractDefault()) // 20 - 10 = 10



// Set parameters

// в функции можно принимать множество параметров как массив

const sumAll = ( ...numbers ) => {
    console.log(numbers)

    return numbers.reduce((sum, num) => sum + num, 0)
}

console.log(sumAll(1, 2, 3, 4, 5, 6)) 



// Замыкания

// это когда в функции замкнуто какое-то значени которое может быть в дальнейшем использаванно
// или это функция в которой есть другая функция

function createPerson(name) {
    return function (lastname) {
        console.log(`${name} ${lastname}`)
    }
}

const addLastName = createPerson("Vlad"); 
// в addLastName вернеться функция в которой в место name уже замкнуто значение "Vlad"
// и при вызове addLastName она выведет и замкнутое в ней имя и переданную фамилию
addLastName("Sazonov")
addLastName("Saz")