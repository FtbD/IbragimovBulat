import { AbstractComponent } from "./abstract-component.js";

export default class TaskComponent extends AbstractComponent {
  #task;

  constructor({ task }) {
    super();
    this.#task = task;
  }

  get template() {
    return `<div class="task">${this.#task.title}</div>`;
  }
}