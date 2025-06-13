import { AbstractComponent } from "./abstract-component.js";
import { createElement } from "../render.js";
import { TaskStatus } from "../const.js";

export default class ClearButtonComponent extends AbstractComponent {
  #onClick = null;

  constructor(onClick) {
    super();
    this.#onClick = onClick;
    this._handleClick = this._handleClick.bind(this);
  }

  get template() {
    return `
      <button class="clear-btn" data-status="${TaskStatus.DONE}">
        <span class="clear-btn__icon">🗑️</span>
        <span class="clear-btn__text">Очистить выполненные</span>
      </button>
    `;
  }

  get element() {
    if (!this._element) {
      this._element = createElement(this.template);
      this._element.addEventListener("click", this._handleClick);
    }
    return this._element;
  }

  _handleClick(evt) {
    evt.preventDefault();
    this.#onClick();
  }
}