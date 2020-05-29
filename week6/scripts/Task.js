export default class Task {
    constructor(task) {
        this.id = Date.now();
        this.content = task;
        this.completed = false;
    }

    getId() {
        return this.id;
    }

    getContent() {
        return this.content;
    }

    getCompleted() {
        return this.completed;
    }

    setContent(task) {
        this.content = task;
    } 

    setCompleted(completed) {
        this.completed = completed;
    }
}