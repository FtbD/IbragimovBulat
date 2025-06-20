import { AbstractComponent } from "./abstract-component.js";

export default class ClearButtonComponent extends AbstractComponent {
  #callback;

  constructor(callback) {
    super();
    this.#callback = callback;
  }

  get template() {
    return `<button class="clear-btn">Очистить</button>`;
  }

  get element() {
    const btn = super.element;
    btn.addEventListener('click', this.#callback);
    return btn;
  }
}
