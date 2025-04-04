import { render } from '../render.js';
import TaskListComponent from '../view/task-list-component.js';
import TaskComponent from '../view/task-component.js';
import ClearButtonComponent from '../view/clear-button-component.js';
import { StatusTitles } from '../const.js';

export default class TasksBoardPresenter {
  constructor({ boardContainer, tasksModel }) {
    this.boardContainer = boardContainer;
    this.tasksModel = tasksModel;
  }

  init() {
    const tasks = this.tasksModel.getTasks();
    const statusGroups = {
      pending: tasks.filter(task => task.status === 'pending'),
      'in-progress': tasks.filter(task => task.status === 'in-progress'),
      done: tasks.filter(task => task.status === 'done')
    };

    Object.entries(statusGroups).forEach(([status, tasks]) => {
      const section = document.createElement('section');
      section.className = 'section';
      section.innerHTML = `<h3 class="section-title">${StatusTitles[status]}</h3>`;
      
      const taskListComponent = new TaskListComponent();
      section.appendChild(taskListComponent.getElement());
      
      tasks.forEach(task => {
        const taskComponent = new TaskComponent(task);
        render(taskComponent, taskListComponent.getElement());
      });

      if (status === 'done') {
        const clearButton = new ClearButtonComponent();
        section.appendChild(clearButton.getElement());
      }

      this.boardContainer.appendChild(section);
    });
  }
}