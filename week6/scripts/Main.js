import TodoList from './TodoList.js';
import Task from './Task.js';

let todoList = new TodoList();
todoList.display();
addListeners();

document.querySelector("#add-button").addEventListener("touchend", addTask);

function addListeners() {
    document.querySelectorAll(".delete").forEach(task => {
        task.addEventListener("touchend", deleteTask);
    });

    document.querySelectorAll(".completed").forEach(task => {
        task.addEventListener("touchend", completeTask);
    });
}

function addTask() {
    let task = document.querySelector("#add-text").value;
    todoList.add(task);
    document.querySelector("#add-text").value = '';
    todoList.display();
    addListeners();
}

function deleteTask(event) {
    let elementId = this.parentElement.firstChild.id;
    let task = parseInt(elementId.replace(/[^0-9]/g, ''));
    todoList.delete(task);
    todoList.display();
    addListeners();
}

function completeTask(event) {
    let elementId = this.id;
    let taskId = parseInt(elementId.replace(/[^0-9]/g, ''));
    todoList.toggleCompleted(taskId);
    this.classList.toggle('checked');
    addListeners();
}