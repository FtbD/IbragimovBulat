import { AbstractComponent } from "./abstract-component.js";

export default class FormAddTaskComponent extends AbstractComponent {
  get template() {
    return `
      <form class="task-form">
        <input type="text" name="title" placeholder="Введите задачу" required />
        <select name="status">
          <option value="в процессе">В процессе</option>
          <option value="сделано">Сделано</option>
          <option value="отложено">Отложено</option>
        </select>
        <button type="submit">Добавить</button>
      </form>
    `;
  }
}
