/* Объекты в деталях */

const person = {
    name: 'Vlad',
    age: 28,
    isProgrammer: true,
    languages: ['ru', 'en'],
    address: {
        city: 'Simferopol',
        street: 'Forests'
    },

    'complex key': 'complex', // может быть несколько ключей у одного значения
    
    ['key' + 2]: 'compued value', // вычисляемое выражение
    
    greet() { // функция
        console.log('Greet from person')
        console.log('this -', this) // обычные функции создают свой контекст
    },

    arrow: () => { // стрелочная функция
        console.log('Arrow from person')
        console.log('this -', this)  // стрелочные функции НЕ создают свой контекст
    },

    info() {

    }
} // объект состоит из ключа и значения

console.log('person -', person)
console.log(' ')

console.log('person.age -', person.age)
console.log('type of person.age -', typeof person.age)
console.log(' ')

console.log('person.isProgrammer -', person.isProgrammer)
console.log('type of person.isProgrammer -', typeof person.isProgrammer)
console.log(' ')

console.log('person.languages -', person.languages)
console.log('type of person.languages -', typeof person.languages)
console.log(' ')

console.log('person.address -', person.address)
console.log('type of person.address -', typeof person.address)
console.log(' ')

console.log('person["complex key"] -', person["complex key"]) // person["complex key"] - Обращение по ключу
console.log('type of person["complex key"] -', typeof person["complex key"])
console.log(' ')

console.log('person.key2 -', person.key2)
console.log('type of person.key2 -', typeof person.key2)
console.log(' ')

person.greet()
console.log(' ')

person.arrow()
console.log(' ')



// Удаление из объекта
// person.address = undefined

delete person.address



// Деструктуризация

// const age = person.age
// const name = person.name
// const languages = person.languages

const { age, name, languages, address: myAddress = 'none' } = person

console.log(age, name, languages, myAddress)
console.log(' ')



// Итерация по объекту

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key)
    }
}

console.log(' ')

// const keys = Object.keys(person)
// keys.forEach(key => {
//     console.log(person[key])
// })

Object.keys(person).forEach(key => {console.log(person[key])})

console.log(' ')


// Взаимодействие с объектом внутри объекта

const logger = {
    keys(widthText = true) {
        if (widthText) {
            console.log('Object keys:', Object.keys(this))
        } else {
            console.log(Object.keys(this))
        }
        
    },

    keysAndValue() {
        Object.keys(this).forEach(key => {
            console.log('Key:', key)
            console.log('Value:', this[key])
        })
    },
}

// Метод .bind()
    // принимает контекст и возвращет функцию 
const bound = logger.keys.bind({ a: 1, b: 2, c: 3 })
bound()
console.log(' ')

logger.keys.bind(person)() // можно просто добавить вызов функции в конце
console.log(' ')

// Метод .call()
    // по аналогии с bind добавляет контекст выбранной функции но сразу ее вызывает
    // принимает параеметром контекст и неограниченное количество аргументов функции
logger.keys.call(person, false)
console.log(' ')

// Метод .apply()
    // по аналогии с bind добавляет контекст выбранной функции но сразу ее вызывает
    // принимает параметром контекст и параметры в виде их перечислений в массиве
logger.keys.apply(person, [false])
console.log(' ')
    
    
