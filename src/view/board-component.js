import { AbstractComponent } from "./abstract-component.js";

export default class BoardComponent extends AbstractComponent {
  get template() {
    return `<section class="board"></section>`;
  }
}
