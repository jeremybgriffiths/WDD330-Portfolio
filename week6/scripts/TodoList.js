import Task from './Task.js';

export default class TodoList {
    constructor() {
        if (localStorage.getItem('todoList') === null) {
            this.todoList = [];
        } else {
            this.todoList = JSON.parse(localStorage.getItem('todoList'));
        }
    }

    // Adds a new task to the todo list
    add(task) {
        this.todoList.push(new Task(task));
        localStorage.setItem('todoList', JSON.stringify(this.todoList));
    }

    delete(taskId) {
        let index = this.todoList.findIndex(i => i.id === taskId);
        if (index !== -1) {
            this.todoList.splice(index, 1);
            localStorage.setItem('todoList', JSON.stringify(this.todoList));
        }
    }

    toggleCompleted(taskId) {
        let index = this.todoList.findIndex(i => i.id === taskId);
        if (index !== -1) {
            this.todoList[index].completed = !this.todoList[index].completed;
            localStorage.setItem('todoList', JSON.stringify(this.todoList));
            return true;
        } else {
            console.log("Failed to toggle taskId " + taskId);
            return false;
        }
    }

    display() {
        document.querySelector('#todo-list').innerHTML = "";
        this.todoList.forEach(task => {            
            let li = document.createElement("li");

            let checked = "";
            let strikethrough = "";
            if (task.completed) {
                checked = "checked";
                strikethrough = "strikethrough";
            }
            li.id = task.id;

            li.innerHTML =
                `<div class="completed ${strikethrough}">
                <input type="checkbox" id="task-${task.id}" value="${task.completed}" ${checked}>
                <label for="task-${task.id}" >${task.content}</label>
                <span class="delete">\u00D7</span>
                </div>`;
                
            document.querySelector('#todo-list').appendChild(li);
        });
    }
}