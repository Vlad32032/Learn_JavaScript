const bodyTag = document.getElementById("body");
const version1Btn = document.getElementById("version1");
const version2Btn = document.getElementById("version2");
const descriptionElement = document.getElementById("description");
const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

const description = [
    `
        Выбранна версия 1.<br>
        У вас есть возможность добавлять и удалять заметки.<br>
        В этой версии для хранения заметок используеться простой массив строк.<br>
        При переходе между версиями заметки сохранятся, при перезагрузке страницы нет.
    `,
    `
        Выбранна версия 2.<br>
        У вас есть возможность добавлять и удалять заметки а также изменять их стостояния(выполнен/не выполнен).<br>
        В этой версии для хранения заметок используеться массив с объектами.<br>
        При переходе между версиями заметки сохранятся, при перезагрузке страницы нет.
    `
];

const notesArr = [
    "Заметка 1",
    "Заметка 2",
    "Заметка 3"
];

const notesArrObj = [
    {
        title: "Заметка 1",
        complited: false
    },
    {
        title: "Заметка 2",
        complited: false
    },
    {
        title: "Заметка 3",
        complited: false
    },
];

function startFirstVersionApp() {

    function getNoteTemplate(title, i) {
        return `
            <li
                class="list-group-item d-flex
                justify-content-between align-items-center"
            >
                <span>${title}</span>
                <span>
                    <button 
                        class="btn btn-small btn-danger"
                        data-index="${i}"
                        data-type="remove"
                    >
                        &times;
                    </button>
                </span>
            </li>
        `;
    };

    function render(arrayNotes) {
        listElement.innerHTML = "";

        if (arrayNotes.length === 0) {
            listElement.innerHTML = `<li class="list-group-item">Заметки отсутствуют</li>`;
            return;
        };
    
        for (let i = 0; i < arrayNotes.length; i++) {
            listElement.insertAdjacentHTML("beforeend", getNoteTemplate(arrayNotes[i], i));
        };
    };

    createBtn.onclick = function () {
        if (inputElement.value.length === 0) {
            return
        };

        notesArr.push(inputElement.value);
        inputElement.value = "";
        render(notesArr);
    };

    listElement.onclick = function (event) {
        if (event.target.dataset.index) {
            const index = Number(event.target.dataset.index);
            notesArr.splice(index, 1);
            render(notesArr);
        }
    };

    render(notesArr);
};

function startSecondVersionApp() {
    
    function getNoteTemplate(noteObj, index) {
        return `
            <li
                class="list-group-item d-flex
                justify-content-between align-items-center"
            >
                <span class="${noteObj.complited ? "text-decoration-line-through text-info" : ""}">
                    ${noteObj.title}
                </span>
                <span>
                    <button
                        class="btn btn-small btn-${noteObj.complited ? "warning" : "success"}"
                        data-index="${index}" 
                        data-type="toggle"
                    >
                        ${noteObj.complited ? "&times;" : "&check;"}
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
    
    function render(arr) {
        listElement.innerHTML = "";
    
        if (arr.length === 0) {
            listElement.innerHTML = `<li class="list-group-item">Заметки отсутствуют</li>`;
        };
    
        for (let i = 0; i < arr.length; i++) {
            listElement.insertAdjacentHTML("beforeend", getNoteTemplate(arr[i], i));
        };
    };
    
    createBtn.onclick = function () {
        if (inputElement.value.length === 0) {
            return;
        }
    
        const newNote = {
            title: inputElement.value,
            complited: false
        };
    
        notesArrObj.push(newNote);
        inputElement.value = "";
        render(notesArrObj);
    };
    
    listElement.onclick = function (event) {
        if (event.target.dataset.index) {
            const index = Number(event.target.dataset.index);
            const type = event.target.dataset.type;
    
            if (type === "toggle") {
                notesArrObj[index].complited = !notesArrObj[index].complited;
            } else if (type === "remove") {
                notesArrObj.splice(index, 1)
            };
    
            render(notesArrObj);
        };
    };
    
    render(notesArrObj)
};

version1Btn.onclick = function () {
    bodyTag.className = "bg-dark text-light";
    descriptionElement.innerHTML = description[0];
    startFirstVersionApp();
};

version2Btn.onclick = function () {
    bodyTag.className = "bg-light text-dark";
    descriptionElement.innerHTML = description[1];
    startSecondVersionApp();
};
