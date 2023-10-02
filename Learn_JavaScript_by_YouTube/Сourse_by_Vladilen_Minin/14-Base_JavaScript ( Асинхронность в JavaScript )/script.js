/* Асинхронность в JavaScript */

// В JavaScript Асинхронность основанна на Event Loop



// setTimeout - асинхронная функция
const timeout = setTimeout(() => {
    console.log('hi')
}, 2000)

clearTimeout(timeout) // setTimeout не успеет отработать, поскольку мы ее удалим раньше чем произойдет ее асинхронный вызов

// вариант создания своего вызова setTimeout
function delay(callback, time = 1000) {
    setTimeout(callback, time)
}

delay(() => {console.log('hi from delay'), 2000})



// Promise

// вариант создания функции delay() но на основе Promise
const promiseDelay = (time = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve() // сдесь отрабатает функция переданная в первом .then() 
        }, time)
    })

    return promise
}

promiseDelay(2000).then(() => {
    console.log('hi from promiseDelay')
})


const promiseDelayTwo = (time = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3]) // сдесь отрабатает функция переданная в первом .then()

            reject('error in promiseDelayTwo') // отработает ошибка
        }, time)
    })

    return promise
}

promiseDelayTwo(2000)
    .then((data) => {
        console.log('hi from promiseDelayTwo')

        return data.map((x) => x ** 2)
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log('Finally from promiseDelayTwo')
    })



const getData = () => new Promise((resolve) => resolve([1, 2, 3]))



// Async await

async function asyncExample() {
    try {
        const data = await getData()
        console.log(data)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('Finally from asyncExample')
    }
}