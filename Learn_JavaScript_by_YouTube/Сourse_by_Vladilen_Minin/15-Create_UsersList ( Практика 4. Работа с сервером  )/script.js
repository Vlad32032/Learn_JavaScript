/* Users list */

const filter = document.getElementById('filter')
const list = document.getElementById('list')

let users = []

async function start() {
    list.innerHTML = 'Loading...'

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()

        users = data
        render(data)
    } catch (err) {
        list.style.color = 'red'
        list.innerHTML = err.message
    }
}

function toHTML(user) {
    return `
        <li class="list-group-item">${user.name}</li>
    `
}

function render(users = []) {
    if (users.length === 0 ) {
        list.innerHTML = 'Users not found'
    } else {
        const html = users.map(toHTML).join('')
        list.innerHTML = html
    }

    
}

filter.addEventListener('input', (event) => {
    const { value } = event.target
    const filteredUsers = users.filter((user) => {
        return user.name.toLowerCase().includes(value.toLowerCase())
    })

    render(filteredUsers)
})

start()