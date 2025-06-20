import { AbstractComponent } from "./abstract-component.js";

export default class TaskComponent extends AbstractComponent {
  #task;
  #element;
  #dragStartHandler = null;

  constructor({ task }) {
    super();
    this.#task = task;
  }

  get template() {
    return `<li draggable="true">${this.#task.title}</li>`;
  }

  get element() {
    if (!this.#element) {
      this.#element = super.element;

      this.#element.addEventListener('dragstart', (evt) => {
        evt.dataTransfer.setData('text/plain', this.#task.id);
        if (this.#dragStartHandler) {
          this.#dragStartHandler();
        }
      });
    }
    return this.#element;
  }

  setDragStartHandler(callback) {
    this.#dragStartHandler = callback;
  }
}