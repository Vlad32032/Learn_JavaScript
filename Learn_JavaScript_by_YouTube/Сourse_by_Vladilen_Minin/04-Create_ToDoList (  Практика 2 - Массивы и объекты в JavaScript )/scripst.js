const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

/* 1-й Вариант: рендер записей из масива и добавление новых записей в HTML

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
                <button class="btn btn-small btn-success">&check;</button>
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
                    <button class="btn btn-small btn-success">&check;</button>
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

const notes = [
    {
        title: "Запись 1",
        complited: false
    },
    {
        title: "Запись 2",
        complited: false
    }
];

function render() {
};

// */