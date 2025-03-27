import { createElement } from '../render.js';

function createTaskTemplate(task) {
    return `<li class="task-item">${task}</li>`;
}

export default class TaskComponent {
    constructor(task) {
        this.task = task;
    }

    getTemplate() {
        return createTaskTemplate(this.task);
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }
        console.log(`Создан элемент:`, this.element);
        return this.element;
    }

    removeElement() {
        this.element = null;
    }
}
