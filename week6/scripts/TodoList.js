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
            document.getElementById('task-' + taskId).checked = !this.todoList[index].completed;
            localStorage.setItem('todoList', JSON.stringify(this.todoList));
        }
    }

    display() {
        document.querySelector('#todo-list').innerHTML = '';
        let count = 0;
        this.todoList.forEach(task => {
            let li = document.createElement('li');
            let div = document.createElement('div');
            let checkbox = document.createElement('input');
            let label = document.createElement('label');
            let span2 = document.createElement('span');

            checkbox.type = 'checkbox';
            checkbox.className = 'completed';
            checkbox.id = `task-${task.id}`;
            checkbox.value = `${task.completed}`;

            checkbox.checked = false;
            if (task.completed) {
                checkbox.checked = true;
            }

            label.innerHTML = `${task.content}`;

            span2.className = 'delete';
            span2.innerHTML = '\u00D7';

            div.appendChild(checkbox);
            div.appendChild(label);
            div.appendChild(span2);

            li.id = task.id;
            li.appendChild(div);

            document.querySelector('#todo-list').appendChild(li);
            count++;
        });
        document.querySelector('#tasks-left').innerHTML = `tasks left: ${count}`;
    }

    filterList(filter) {
        this.todoList = JSON.parse(localStorage.getItem('todoList'));
        if (filter === 'active') {
            this.todoList = this.todoList.filter(task => {
                return task.completed == false;
            });
        } else if (filter === 'completed') {
            this.todoList = this.todoList.filter(task => {
                return task.completed == true;
            });
            console.log(this.todoList);
        }

        document.querySelector('#todo-list').innerHTML = '';
        let count = 0;
        this.todoList.forEach(task => {
            let li = document.createElement('li');
            let div = document.createElement('div');
            let checkbox = document.createElement('input');
            let label = document.createElement('label');
            let span2 = document.createElement('span');

            checkbox.type = 'checkbox';
            checkbox.className = 'completed';
            checkbox.id = `task-${task.id}`;
            checkbox.value = `${task.completed}`;

            checkbox.checked = false;
            if (task.completed) {
                checkbox.checked = true;
            }

            label.innerHTML = `${task.content}`;

            span2.className = 'delete';
            span2.innerHTML = '\u00D7';

            div.appendChild(checkbox);
            div.appendChild(label);
            div.appendChild(span2);

            li.id = task.id;
            li.appendChild(div);

            document.querySelector('#todo-list').appendChild(li);
            count++;
        });
        document.querySelector('#tasks-left').innerHTML = `tasks left: ${count}`;
    }
}