const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function savetoDos() {
    localStorage.setItem("todos", toDos);
}

function deleteTodo(e) {
    const li = e.target.parentElement;
    li.remove();
}

function paintTodo(newTodo) {
    const Todoli = document.createElement("li");
    const Todospan = document.createElement("span");
    Todospan.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    Todoli.appendChild(Todospan);
    Todoli.appendChild(button);
    toDoList.appendChild(Todoli);
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintTodo(newTodo);
    savetoDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);