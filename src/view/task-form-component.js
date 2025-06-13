import { AbstractComponent } from "./abstract-component.js";

export default class TaskFormComponent extends AbstractComponent {
  #handleSubmit = null;

  constructor(onSubmit) {
    super();
    this.#handleSubmit = onSubmit;
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  get template() {
    return `
      <form class="task-form">
        <input 
          type="text" 
          class="task-form__input" 
          placeholder="Название задачи"
          required
        >
        <button type="submit" class="task-form__button">Добавить</button>
      </form>
    `;
  }

  get element() {
    if (!this._element) {
      this._element = createElement(this.template);
      this._element.addEventListener("submit", this._handleFormSubmit);
    }
    return this._element;
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    const input = this._element.querySelector(".task-form__input");
    const title = input.value.trim();

    if (title) {
      this.#handleSubmit(title);
      input.value = "";
    }
  }
}