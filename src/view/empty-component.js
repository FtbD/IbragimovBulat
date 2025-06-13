import { AbstractComponent } from "./abstract-component.js";

export default class EmptyComponent extends AbstractComponent {
  #message = "Нет задач";

  constructor(message) {
    super();
    if (message) this.#message = message;
  }

  get template() {
    return `
      <div class="board__empty">
        <p class="board__empty-text">${this.#message}</p>
      </div>
    `;
  }
}
