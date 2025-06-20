import TaskListComponent from '../view/task-list-component.js';
import TaskComponent from '../view/task-component.js';
import EmptyComponent from '../view/empty-component.js';
import ClearButtonComponent from '../view/clear-button-component.js';
import BoardComponent from '../view/board-component.js';
import { render } from '../render.js';
import { TaskStatus } from '../const.js';

export default class TasksBoardPresenter {
  #boardContainer = null;
  #tasksModel = null;
  #boardComponent = null;
  #taskLists = {};
  #clearButtonComponent = null;
  #emptyComponent = null;

  constructor({ boardContainer, tasksModel }) {
    this.#boardContainer = boardContainer;
    this.#tasksModel = tasksModel;
    this.#tasksModel.addObserver(() => this.#handleModelUpdate());
  }

  init() {
    this.#boardComponent = new BoardComponent();
    render(this.#boardComponent, this.#boardContainer);
    this.#renderBoard();
  }

  #renderBoard() {
    this.#boardComponent.element.innerHTML = '';
    if (this.#tasksModel.tasks.length === 0) {
      this.#renderEmptyList();
    } else {
      this.#renderTaskLists();
      this.#renderClearButton();
    }
  }

  #renderTaskLists() {
    const statuses = [
      TaskStatus.BACKLOG,
      TaskStatus.IN_PROGRESS,
      TaskStatus.DONE,
      TaskStatus.TRASH,
    ];

    statuses.forEach((status) => {
      const list = new TaskListComponent(status[0].toUpperCase() + status.slice(1));
      this.#taskLists[status] = list;
      this.#boardComponent.element.appendChild(list.element);
      list.setDropHandler((id) => {
        this.#tasksModel.setTaskStatus(id, status);
      });
    });

    this.#tasksModel.tasks.forEach((task) => this.#renderTask(task));
  }

  #renderTask(task) {
    const taskComponent = new TaskComponent({ task });
    const list = this.#taskLists[task.status];
    const targetList = list.element.querySelector('ul');
    render(taskComponent, targetList);
  }

  #renderEmptyList() {
    this.#emptyComponent = new EmptyComponent();
    render(this.#emptyComponent, this.#boardComponent.element);
  }

  #renderClearButton() {
    const hasTrashTasks = this.#tasksModel.tasks.some(task => task.status === 'trash');
    this.#clearButtonComponent = new ClearButtonComponent(() => this.#handleClearDoneTasks());
    const element = this.#clearButtonComponent.element;
    if (!hasTrashTasks) {
      element.disabled = true;
    }
    this.#boardComponent.element.appendChild(element);
  }


  #handleClearDoneTasks() {
    this.#tasksModel.clearDoneTasks();
  }

  #handleModelUpdate() {
    this.#renderBoard();
  }
}
