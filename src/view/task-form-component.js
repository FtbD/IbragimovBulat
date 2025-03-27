import { createElement } from '../render.js';

function createTaskFormTemplate() {
    return (
        `<form class="task-form">
            <input type="text" class="task-form__input" placeholder="Название задачи">
            <button class="task-form__button">Добавить</button>
        </form>`
    );
}

export default class TaskFormComponent {
    getTemplate() {
        return createTaskFormTemplate();
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
