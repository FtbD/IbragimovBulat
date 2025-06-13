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
  #taskListPending = null;
  #taskListDone = null;
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
    this.#taskListPending = new TaskListComponent();
    this.#taskListDone = new TaskListComponent();

    const pendingTitle = document.createElement('h3');
    pendingTitle.textContent = 'В процессе';
    const doneTitle = document.createElement('h3');
    doneTitle.textContent = 'Выполнено';

    this.#boardComponent.element.appendChild(pendingTitle);
    this.#boardComponent.element.appendChild(this.#taskListPending.element);

    this.#boardComponent.element.appendChild(doneTitle);
    this.#boardComponent.element.appendChild(this.#taskListDone.element);

    this.#taskListPending.setDropHandler((id) => {
      this.#tasksModel.setTaskStatus(id, 'pending');
    });

    this.#taskListDone.setDropHandler((id) => {
      this.#tasksModel.setTaskStatus(id, 'done');
    });

    this.#tasksModel.tasks.forEach((task) => this.#renderTask(task));
  }

  #renderTask(task) {
    const taskComponent = new TaskComponent({ task });
    const targetList = task.status === 'done'
      ? this.#taskListDone.element
      : this.#taskListPending.element;

    taskComponent.setDragStartHandler(() => {});

    render(taskComponent, targetList);
  }

  #renderEmptyList() {
    this.#emptyComponent = new EmptyComponent();
    render(this.#emptyComponent, this.#boardComponent.element);
  }

  #renderClearButton() {
    const hasDoneTasks = this.#tasksModel.tasks.some(task => task.status === 'done');
    this.#clearButtonComponent = new ClearButtonComponent(() => this.#handleClearDoneTasks());

    const element = this.#clearButtonComponent.element;
    if (!hasDoneTasks) {
      element.disabled = true;
    }

    render(this.#clearButtonComponent, this.#boardComponent.element);
  }

  #handleClearDoneTasks() {
    this.#tasksModel.clearDoneTasks();
  }

  #handleModelUpdate() {
    this.#renderBoard();
  }
}
