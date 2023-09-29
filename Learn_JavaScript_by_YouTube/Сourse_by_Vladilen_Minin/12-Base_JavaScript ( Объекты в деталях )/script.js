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

console.log('person["complex key"] -', person["complex key"])
console.log('type of person["complex key"] -', typeof person["complex key"])
console.log(' ')

console.log('person.key2 -', person.key2)
console.log('type of person.key2 -', typeof person.key2)
console.log(' ')

person.greet()
console.log(' ')

person.arrow()
console.log(' ')