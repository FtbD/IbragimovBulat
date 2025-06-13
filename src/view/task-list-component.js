import { AbstractComponent } from "./abstract-component.js";

export default class TasksListComponent extends AbstractComponent {
  get template() {
    return `<section class="tasks-list"></section>`;
  }
}
