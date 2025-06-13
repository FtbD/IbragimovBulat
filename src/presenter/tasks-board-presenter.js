import TaskListComponent from '../view/task-list-component.js';
import TaskComponent from '../view/task-component.js';
import EmptyComponent from '../view/empty-component.js';
import ClearButtonComponent from '../view/clear-button-component.js';
import BoardComponent from '../view/board-component.js';
import { render } from '../render.js';

export default class TasksBoardPresenter {
  #boardContainer = null;
  #tasksModel = null;

  #boardComponent = null;
  #taskListComponent = null;
  #clearButtonComponent = null;
  #emptyComponent = null;

  constructor({ boardContainer, tasksModel }) {
    this.#boardContainer = boardContainer;
    this.#tasksModel = tasksModel;
  }

  init() {
    this.#boardComponent = new BoardComponent();
    render(this.#boardComponent, this.#boardContainer);

    this.#renderBoard();
  }

  #renderBoard() {
    if (this.#tasksModel.tasks.length === 0) {
      this.#renderEmptyList();
    } else {
      this.#renderTaskList();
      this.#renderClearButton();
    }
  }

  #renderTaskList() {
    this.#taskListComponent = new TaskListComponent();
    render(this.#taskListComponent, this.#boardComponent.element);

    this.#tasksModel.tasks.forEach((task) => this.#renderTask(task));
  }

  #renderTask(task) {
    const taskComponent = new TaskComponent({ task });
    render(taskComponent, this.#taskListComponent.element);
  }

  #renderEmptyList() {
    this.#emptyComponent = new EmptyComponent();
    render(this.#emptyComponent, this.#boardComponent.element);
  }

  #renderClearButton() {
    this.#clearButtonComponent = new ClearButtonComponent(() => this.#clearDoneTasks());
    render(this.#clearButtonComponent, this.#boardComponent.element);
  }

  #clearDoneTasks() {
    console.log('Clear done tasks clicked');
  }
}
