const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

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