import { AbstractComponent } from "./abstract-component.js";

export default class HeaderComponent extends AbstractComponent {
  get template() {
    return `<h1 class="app-header">Доска задач</h1>`;
  }
}
