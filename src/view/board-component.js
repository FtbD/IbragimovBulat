import { createElement } from '../render.js';

function createBoardTemplate() {
    return `<section class="taskboard"></section>`;
}

export default class BoardComponent {
    getTemplate() {
        return createBoardTemplate();
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
