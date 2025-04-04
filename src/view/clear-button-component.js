import { createElement } from '../render.js';
import { TaskStatus } from '../const.js';

function createClearButtonTemplate() {
  return `
    <button class="clear-btn" data-status="${TaskStatus.DONE}">
      <span class="clear-btn__icon">🗑️</span>
      <span class="clear-btn__text">Очистить выполненные</span>
    </button>
  `;
}
export default class ClearButtonComponent {
  constructor(onClick) {
    this.onClick = onClick;
    this.element = null;
  }

  getTemplate() {
    return createClearButtonTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
      this.element.addEventListener('click', this.onClick);
    }
    return this.element;
  }

  removeElement() {
    if (this.element) {
      this.element.removeEventListener('click', this.onClick);
      this.element = null;
    }
  }
}