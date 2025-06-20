import { AbstractComponent } from "./abstract-component.js";

export default class FormAddTaskComponent extends AbstractComponent {
  get template() {
    return `
      <div class="section">
        <div class="section-title">Новая задача</div>
        <form>
          <input type="text" name="title" placeholder="Название задачи">
          <button type="submit">Добавить</button>
        </form>
      </div>
    `;
  }
}
