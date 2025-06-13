import { AbstractComponent } from './abstract-component.js';

export default class TaskComponent extends AbstractComponent {
  #task = null;

  constructor({ task }) {
    super();
    this.#task = task;
  }

  get template() {
    return `<li class="task ${this.#task.status}" draggable="true" data-id="${this.#task.id}">
      ${this.#task.title}
    </li>`;
  }

  setDragStartHandler(callback) {
    this.element.addEventListener('dragstart', (evt) => {
      evt.dataTransfer.setData('text/plain', this.#task.id);
      callback?.(this.#task);
    });
  }
}
