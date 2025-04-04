import { createElement } from '../render.js';
import { StatusColors } from '../const.js';

function createTaskTemplate(task) {
  return `
    <li class="task-item" style="border-left: 4px solid ${StatusColors[task.status]}">
      ${task.title}
    </li>`;
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
        return this.element;
    }

    removeElement() {
        this.element = null;
    }
}
