import Observable from '../observable.js';
import { generateID } from '../utils.js';
import { UserAction, UpdateType } from '../const.js';


export default class TaskModel extends Observable {
  #tasksApiService = null;
  #boardTasks = [];

  constructor({ tasksApiService }) {
    super();
    this.#tasksApiService = tasksApiService;
  }

  get tasks() {
    return this.#boardTasks;
  }

  async init() {
    try {
      const tasks = await this.#tasksApiService.tasks;
      this.#boardTasks = tasks;
    } catch (err) {
      this.#boardTasks = [];
      console.error('Ошибка при загрузке задач с сервера:', err);
    }

    this._notify(UpdateType.INIT);
  }

  async addTask(title) {
    const newTask = {
      title,
      status: 'pending',
      id: generateID()
    };
    try {
      const createdTask = await this.#tasksApiService.addTask(newTask);
      this.#boardTasks.push(createdTask);
      this._notify(UserAction.ADD_TASK, createdTask);
    } catch (err) {
      console.error('Ошибка при добавлении задачи:', err);
    }
  }

  async setTaskStatus(id, status) {
    const task = this.#boardTasks.find(t => t.id == id);
    if (!task || task.status === status) return;

    const updated = { ...task, status };

    try {
      const updatedTask = await this.#tasksApiService.updateTask(updated);
      Object.assign(task, updatedTask);
      this._notify(UserAction.UPDATE_TASK, updatedTask);
    } catch (err) {
      console.error('Ошибка при обновлении задачи:', err);
    }
  }

  async clearDoneTasks() {
    const doneTasks = this.#boardTasks.filter(t => t.status === 'done');

    for (const task of doneTasks) {
      try {
        await this.#tasksApiService.deleteTask(task.id);
      } catch (err) {
        console.error(`Ошибка при удалении задачи ${task.id}:`, err);
      }
    }

    this.#boardTasks = this.#boardTasks.filter(t => t.status !== 'done');
    this._notify(UserAction.DELETE_TASK);
  }
}
