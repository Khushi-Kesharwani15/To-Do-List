const input = document.querySelector(".input");
const list = document.querySelector(".list");
const form = document.querySelector(".form");

// Add new task
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let text = input.value.trim(); //getting text from input and trim removes extra space in starting and ending of string
    if (text === "") return;

    let li = document.createElement("li");//create a task item
    li.innerHTML = ` ${text} <i class="fa-solid fa-square-check"></i> <i class="fa-solid fa-trash"></i>`;

    list.appendChild(li);//want to add only one item
    input.value = "";
});

// Click events for check and delete
list.addEventListener("click", (e) => {

    // Mark as completed
    if (e.target.classList.contains("fa-square-check")) {
        e.target.parentElement.classList.toggle("checked");
    }

    // Delete task
    if (e.target.classList.contains("fa-trash")) {
        e.target.parentElement.remove();
    }
});
