/* Дата и время */

// Текущая дата
console.log(new Date()) /// new Date() вернет строку

// Время от которого начинаеться отчет в JavaScript
const startDate = (new Date(0)) // 0 - это количество милисикунд от стартовой даты
console.log(startDate)

console.log(new Date(1000)) // + 1 секунда
console.log(new Date(1000 * 60)) // + 1 минута
console.log(new Date(1000 * 60 * 60)) // + 1 час
console.log(new Date(1000 * 60 * 60 * 24)) // + 1 день
console.log(new Date(1000 * 60 * 60 * 24 * 365)) // + 1 год
console.log(new Date(1000 * 60 * 60 * 24 * 365 * 25)) // + 25 лет

// Можно передать конкретные параметры даты
// Год, месяц, день, час, минута, секунда
console.log(new Date(2023, 0, 1)) 
console.log(new Date(2023, 0, 1, 12, 6, 30))

// Принимает не только строку но и методы Date
const nowDate = new Date()

// Получить конкретное значение
console.log(nowDate.getFullYear())
console.log(nowDate.getMonth())
console.log(nowDate.getDay())
console.log(nowDate.getHours())
console.log(nowDate.getMinutes())
console.log(nowDate.getSeconds())
console.log(nowDate.getMilliseconds())

// По аналогии можем задавать нужную дату
// nowDate.setFullYear(2055)
// nowDate.setMonth(11)

// конвертировать в другой формат записи 
console.log(nowDate.toDateString())
console.log(nowDate.toTimeString())
console.log(nowDate.toLocaleDateString())
console.log(nowDate.toLocaleTimeString())



// Пробую реализовать функционал сам ( до просмотра видео по этой теме )

const output = document.getElementById('output')
const btnFull = document.getElementById('full')
const btnDate = document.getElementById('date')
const btnTime = document.getElementById('time')

const renderTime = () => output.innerHTML = new Date().toLocaleTimeString()
const renderDate = () => output.innerHTML = new Date().toLocaleDateString()
const renderFullDate = () => output.innerHTML = new Date().toLocaleString()

let interval 

btnTime.onclick = () => {
    clearInterval(interval)
    renderTime()
    interval = setInterval(renderTime, 1000)
}

btnDate.onclick = () => {
    clearInterval(interval)
    output.innerHTML = new Date().toLocaleDateString()
}

btnFull.onclick = () => {
    clearInterval(interval)
    renderFullDate()
    interval = setInterval(renderFullDate, 1000)
}

renderDate()

// работает)