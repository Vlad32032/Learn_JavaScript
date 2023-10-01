/* Классы и наследование */

class Human {
    // static isHuman = true - сделает это поле статичным( оно не будет отображаться в объекте )
    isHuman = true

    humanGreet() {
        console.log('Greet from human')
    }
}

class Person extends Human {
    constructor(name, age) {
        // super() - вызывает конструктор из наследуемого класса
        super()

        // ?? - оператор проверки значения
        this.name = name 
        this.age = age ?? "Undefined age"
    }

    seyHello() {
        console.log(`Hello from ${this.name}`)
    }
}

const personOne = new Person('Vlad')
const personTwo = new Person('Natali', 28)

console.log('personOne:', personOne)
console.log('personTwo:', personTwo)
console.log(' ')

personOne.seyHello()
personTwo.seyHello()
console.log(' ')

console.log('personOne is human?', personOne.isHuman)
personOne.humanGreet()

