import { AbstractComponent } from './abstract-component.js';

export default class LoadingComponent extends AbstractComponent {
  get template() {
    return `<p class="loading">Загрузка данных...</p>`;
  }
}
