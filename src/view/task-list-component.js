import { AbstractComponent } from './abstract-component.js';

export default class TaskListComponent extends AbstractComponent {
  get template() {
    return `<ul class="task-list"></ul>`;
  }

  setDropHandler(onDrop) {
    this.element.addEventListener('dragover', (evt) => {
      evt.preventDefault();
      this.element.classList.add('drop-hover'); // подсветка при наведении
    });

    this.element.addEventListener('dragleave', () => {
      this.element.classList.remove('drop-hover'); // убрать подсветку
    });

    this.element.addEventListener('drop', (evt) => {
      evt.preventDefault();
      this.element.classList.remove('drop-hover');
      const id = evt.dataTransfer.getData('text/plain');
      onDrop(id);
    });
  }
}
