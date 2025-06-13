export default class TaskModel {
  #boardTasks = [
    { id: 1, title: 'Купить хлеб', status: 'pending' },
    { id: 2, title: 'Позвонить клиенту', status: 'in-progress' },
    { id: 3, title: 'Написать код', status: 'done' },
  ];

  get tasks() {
    return this.#boardTasks;
  }
}
