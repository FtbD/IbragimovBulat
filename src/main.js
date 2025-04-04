import { render, RenderPosition } from './render.js';
import TasksModel from './model/task-model.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';

const bodyContainer = document.querySelector(".board-app");
const formContainer = document.querySelector('.add-task');
const tasksBoardContainer = document.querySelector(".taskboard");

const tasksModel = new TasksModel();
const tasksBoardPresenter = new TasksBoardPresenter({
  boardContainer: tasksBoardContainer,
  tasksModel
});

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);

tasksBoardPresenter.init();