import TodoList from './TodoList.js';
//import Task from './Task.js';

let todoList = new TodoList();
todoList.display(todoList);
addListeners();

document.querySelector("#all-tasks").addEventListener("touchend", displayAllTasks);
document.querySelector("#active-tasks").addEventListener("touchend", displayActiveTasks);
document.querySelector("#completed-tasks").addEventListener("touchend", displayCompletedTasks);
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
    renderPage();
}

function deleteTask(event) {
    let elementId = this.parentElement.firstChild.id;
    let task = parseInt(elementId.replace(/[^0-9]/g, ''));
    todoList.delete(task);
    renderPage();
}

function completeTask(event) {
    let elementId = this.id;
    let taskId = parseInt(elementId.replace(/[^0-9]/g, ''));
    todoList.toggleCompleted(taskId);
    addListeners();
}

function getActiveTab() {
    if (document.querySelector("#all-tasks").classList[0] === "active") {
        return "#all-tasks";
    } else if (document.querySelector("#active-tasks").classList[0] === "active") {
        return "#active-tasks";
    } else if (document.querySelector("#completed-tasks").classList[0] === "active") {
        return "#completed-tasks";
    }

    return "";
}

function setActiveTab(newActiveTab) {
    let activeTab = getActiveTab();

    document.querySelector(activeTab).classList.toggle("active");
    document.querySelector(newActiveTab).classList.toggle("active");
}

function displayAllTasks(){
    setActiveTab("#all-tasks");
    renderPage();
}

function displayActiveTasks(){
    setActiveTab("#active-tasks");
    renderPage();
}

function displayCompletedTasks(){
    setActiveTab("#completed-tasks");
    renderPage();
}

function renderPage(){
    let currently_active = getActiveTab();

    switch(currently_active){
        case "#all-tasks":
            todoList.filterList("all");
            //todoList.display();
            break;
        case "#active-tasks":
            todoList.filterList("active");
            //todoList.display();
            break;
        case "#completed-tasks":
            todoList.filterList("completed");
            //todoList.display();
            break;
    }
    addListeners();
}