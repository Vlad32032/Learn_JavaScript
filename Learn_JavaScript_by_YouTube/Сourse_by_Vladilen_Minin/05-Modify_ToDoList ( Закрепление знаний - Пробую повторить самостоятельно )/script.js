const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

const notesArr = [
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

    notesArr.push(newNote);
    inputElement.value = "";
    render(notesArr);
};

listElement.onclick = function (event) {
    console.log(event.target.dataset);
    if (event.target.dataset.index) {

    };
};

render(notesArr)