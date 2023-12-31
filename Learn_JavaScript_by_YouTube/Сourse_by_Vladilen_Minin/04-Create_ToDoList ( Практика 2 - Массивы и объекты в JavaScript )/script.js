/* Заметки */

// Добавляем ноды элементов
const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

/* 1-й Вариант: 
    // Приложение делает рендер записей из существующего масива 
    // и осущетвляет добавление новых записей напрямую в HTML.
    // Новые записи не связаны с существующим массивом.
    // Есть возможнотсь:
    // - добавлять новые записи.

const notes = ["Запись 1", "Запись 2", "Запись 3"];

// Принимаем строку и генерируем html разметку с этой строкой в нужном нам теге
function getNoteTemplate(title) {
    return `
        <li
            class="list-group-item d-flex
            justify-content-between align-items-center"
        >
            <span>${title}</span>
            <span>
                <button class="btn btn-small btn-danger">&times;</button>
            </span>
        </li>
    `;
};

// Принимаем массив и для каждой записи генерируем шаблон HTML разметки и добавляем в HTML
function render(arrayNotes) {
    // -- классический цикл for --
    // for (let i = 0; i < arrayNotes.length; i++) {
    //     listElement.insertAdjacentHTML("beforeend", getNoteTemplate(arrayNotes[i]));
    // };

    // -- второй вариант цикла for --
    for (let note of arrayNotes) {
        listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
    };
};

// Добавляем обработчик на кнопку
// По клику получем значение(строку) из инпута, вносим это значение в разметку и добавляем в HTML
createBtn.onclick = function () {
    // Проверяем не пустой ли инпут
    if (inputElement.value.length === 0) {
        return
    };

    // .innerHTML принимает строку и заменяет всю разметку внутри выбранного тега на содержимое этой строки
    
    // listElement.innerHTML = `
    //     <li
    //         class="list-group-item d-flex justify-content-between align-items-center"
    //     >
    //         <span>${inputElement.value}</span>
    //         <span>
    //             <button class="btn btn-small btn-success">&check;</button>
    //             <button class="btn btn-small btn-danger">&times;</button>
    //         </span>
    //     </li>
    // `;

    // .insertAdjacentHTML добавляет новое содержимое в уже существующую HTML разметку
    // принимает 1-м аргументом то, куда будет добавленно содержимое(в какую часть разметки)
    // 2-м аргументом строку с новым содержимым

    listElement.insertAdjacentHTML(
        "beforeend",
        `
            <li
                class="list-group-item d-flex
                justify-content-between align-items-center"
            >
                <span>${inputElement.value}</span>
                <span>
                    <button class="btn btn-small btn-danger">&times;</button>
                </span>
            </li>
        `
    );
    
    // Здесь просто затераем значение в инпуте после добавления новой записи
    inputElement.value = "";
};

// И вызываем при запуске страницы рендер записей на основе выбранного массива
render(notes);

*/

// /* 2-й Вариант: 
    // Приложение первично отрисовывает заметки из массива с объектами
    // и дальше отслеживает изменения в этом массиве.
    // Отрисовывает новые состояния, если что-то меняеться.
    // Есть возможность:
    // - добавить заметку,
    // - изменить состояние(выполненено/не выполненно),
    // - удалить заметку.


const notes = [
    {
        title: "Запись 1",
        complited: false
    },
    {
        title: "Запись 2",
        complited: false
    },
    {
        title: "Запись 3",
        complited: false
    }
];

// Принимаем объект и его индекс,
// генерируем html разметку с нужной нам записью,
// провереям его состояние(выполненено/не выполненно) и подставляем нужные стили.

// для того, что-бы работало делегирование событий,
// для каждой кнопки добавляем:
// - data-index(уникален для каждого блока с разметкой и будет перепресвоен после каждого рендера)
// - data-type(зарание определен)
// далее по ним мы будем определять на какой блок заметок мы нажали и какая кнопка была нажата
function getNoteTemplate(note, index) {
    return `
        <li
            class="list-group-item d-flex
            justify-content-between align-items-center"
        >
            <span class="${note.complited ? "text-decoration-line-through text-info" : ""}">
                ${note.title}
            </span>
            <span>
                <button
                    class="btn btn-small btn-${note.complited ? "warning" : "success"}"
                    data-index="${index}" 
                    data-type="toggle"
                >
                    ${note.complited ? "&times;" : "&check;"}
                </button>
                <button
                    class="btn btn-small btn-danger"
                    data-index="${index}"
                    data-type="remove"
                >
                    &times;
                </button>
            </span>
        </li>
    `;
};

// Принимает массив с объектами, отрисовывает все на экран(добавляет в HTML разметку)
function render(arrayNotes) {
    // Всегда стираем все что уже было в разметке, что-бы небыло повторений
    listElement.innerHTML = "";

    // Если массив путой, орисовываем предупреждение об отсутствии заметок
    if (notes.length === 0) {
        listElement.innerHTML = `<li class="list-group-item">Список заметок пуст</li>`;
        return
    };

    // Проходим циклом по массиву и отрисовываем все объекты.
    // .insertAdjacentHTML добавляет новое содержимое в уже существующую HTML разметку
    // принимает 1-м аргументом то, куда будет добавленно содержимое(в какую часть разметки)
    // 2-м аргументом строку с новым содержимым
    for (let i = 0; i < arrayNotes.length; i++) {
        listElement.insertAdjacentHTML("beforeend", getNoteTemplate(arrayNotes[i], i));
    };
};

// Добавляем обработчики.

// Обработчик для кнопки "Добавить"
createBtn.onclick = function () {
    // Проверяем длину строки в инпутен, если ничего нет, выходим из функции
    if (inputElement.value.length === 0) {
        return
    };

    // Создаем новый объект
    const newNote = {
        title: inputElement.value,
        complited: false
    };

    // Добавляем его в массив
    notes.push(newNote);
    // Очищаем инпут
    inputElement.value = "";
    // Вызываем функцию рендер для отрисовки на экран
    render(notes);
};

// Обраотчик для клика по всему списку(<ul></ul>)
listElement.onclick = function (event) {
    // event это событие по клику на элемент из списка
    // в event.target.dataset мы можем получить 
    // data-index и data-type которые были добавленны для кнопок в getNoteTemplate
    // по data-index мы поймем в каком мы элементe списка(<li></li>)
    // а по data-type по какой кнопке мы кликнули(<button></button>)

    // console.log(event.target); 
    // console.log(event.target.dataset);

    if (event.target.dataset.index) {
        // dataset.index - Строка, функция Number() сделает ее числом
        const index = Number(event.target.dataset.index);
        const type = event.target.dataset.type;

        // Проверяем, какая выбранна кнопка и применяем какие-то действия
        if (type === "toggle") {
            // console.log("btn-toggle:", index); // Проверяем индекс кнопки

            // Обращаемся по индексу к объекту в массиве и меняем значение на противоположное
            notes[index].complited = !notes[index].complited;
        } else if (type === "remove") {
            // console.log("btn-remove:", index); // Проверяем индекс кнопки

            // Удаляем объект из масива по его индексу
            notes.splice(index, 1);
        };

        // Вызываем функцию рендер для отрисовки на экран
        render(notes);
    };
};

// Вызов первой отрисовки на странице
render(notes);

// */