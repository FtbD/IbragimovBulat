import { render, RenderPosition } from './render.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import TaskModel from './model/task-model.js';
import TasksApiService from './tasks-api-service.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import HeaderComponent from './view/header-component.js';
import LoadingComponent from './view/loading-component.js';

const END_POINT = 'https://684ba116ed2578be881bea02.mockapi.io';

const tasksApiService = new TasksApiService(END_POINT);
const tasksModel = new TaskModel({ tasksApiService });

const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.add-task');
const tasksBoardContainer = document.querySelector('.taskboard');

const tasksBoardPresenter = new TasksBoardPresenter({
  boardContainer: tasksBoardContainer,
  tasksModel
});

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);

const addForm = new FormAddTaskComponent();
render(addForm, formContainer);

const formElement = addForm.element.querySelector('form');
formElement.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const input = addForm.element.querySelector('input[name="title"]');
  const title = input.value.trim();

  if (title) {
    await tasksModel.addTask(title);
    input.value = '';
  }
});

const loadingComponent = new LoadingComponent();
render(loadingComponent, tasksBoardContainer);

tasksBoardPresenter.init();

await tasksModel.init();

loadingComponent.element.remove();
