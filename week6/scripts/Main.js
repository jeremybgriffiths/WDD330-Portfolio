import TodoList from './TodoList.js';
import Task from './Task.js';

let todoList = new TodoList();
todoList.display();

document.querySelector("#add-button").addEventListener("touchend", addTask);

function addTask() {
    let task = document.querySelector("#add-text").value;
    todoList.add(task);
    todoList.display();
}