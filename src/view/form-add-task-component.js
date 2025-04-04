import { createElement } from '../render.js';

function createFormAddTaskTemplate() {
  return `
    <form class="add-task-form">
      <input 
        type="text" 
        class="add-task-form__input" 
        placeholder="Новая задача"
        required
      >
      <button type="submit" class="add-task-form__submit">
        Добавить
      </button>
    </form>
  `;
}

export default class FormAddTaskComponent {
  getTemplate() {
    return createFormAddTaskTemplate();
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