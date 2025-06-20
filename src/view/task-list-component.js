import { AbstractComponent } from "./abstract-component.js";

export default class TaskListComponent extends AbstractComponent {
  #element = null;
  #dropHandler = null;

  constructor(title) {
    super();
    this.title = title;
  }

  get template() {
    return `
      <div class="section">
        <div class="section-title">${this.title}</div>
        <ul></ul>
      </div>
    `;
  }

  get element() {
    if (!this.#element) {
      this.#element = super.element;
      const ul = this.#element.querySelector('ul');

      ul.addEventListener('dragover', (evt) => {
        evt.preventDefault();
        ul.classList.add('drag-over');
      });

      ul.addEventListener('dragleave', () => {
        ul.classList.remove('drag-over');
      });

      ul.addEventListener('drop', (evt) => {
        ul.classList.remove('drag-over');
        const id = evt.dataTransfer.getData('text/plain');
        if (this.#dropHandler) {
          this.#dropHandler(id);
        }
      });
    }
    return this.#element;
  }


  setDropHandler(callback) {
    this.#dropHandler = callback;
  }

  get taskContainer() {
    return this.element.querySelector('ul');
  }
}
