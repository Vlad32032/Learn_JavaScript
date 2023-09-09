const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

const notes = ["Запись 1", "Запись 2", "Запись 3"];

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

function render(arrayNotes) {
    // for (let i = 0; i < arrayNotes.length; i++) {
    //     listElement.insertAdjacentHTML("beforeend", getNoteTemplate(arrayNotes[i]));
    // };

    for (let note of arrayNotes) {
        listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
    };
};

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    };

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

    inputElement.value = "";
};

render(notes);