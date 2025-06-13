import { generateID } from "../utils.js";

export default class TaskModel {
  #boardTasks = [
    { id: 1, title: 'Купить хлеб', status: 'pending' },
    { id: 2, title: 'Позвонить клиенту', status: 'in-progress' },
    { id: 3, title: 'Написать код', status: 'done' },
  ];

  #observers = [];

  get tasks() {
    return this.#boardTasks;
  }

  addTask(title) {
    const newTask = {
      id: generateID(),
      title,
      status: 'pending'
    };
    this.#boardTasks.push(newTask);
    this.#notify();
  }

  clearDoneTasks() {
    this.#boardTasks = this.#boardTasks.filter(task => task.status !== 'done');
    this.#notify();
  }

  setTaskStatus(id, status) {
    const task = this.#boardTasks.find(task => task.id == id);
    if (task && task.status !== status) {
      task.status = status;
      this.#notify();
    }
  }

  addObserver(observer) {
    this.#observers.push(observer);
  }

  #notify() {
    this.#observers.forEach(observer => observer());
  }
}
