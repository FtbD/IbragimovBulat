export const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

export const TaskStatus = {
  BACKLOG: 'backlog',
  IN_PROGRESS: 'in-progress',
  DONE: 'done',
  TRASH: 'trash',
};

export const StatusTitles = {
  [TaskStatus.BACKLOG]: 'Бэклог',
  [TaskStatus.IN_PROGRESS]: 'В процессе',
  [TaskStatus.DONE]: 'Готово',
  [TaskStatus.TRASH]: 'Корзина',
};

export const StatusColors = {
  [TaskStatus.BACKLOG]: '#f39c12',
  [TaskStatus.IN_PROGRESS]: '#17a2b8',
  [TaskStatus.DONE]: '#28a745',
  [TaskStatus.TRASH]: '#e74c3c',
};

export const UserAction = {
  UPDATE_TASK: 'UPDATE_TASK',
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK'
};

export const UpdateType = {
  INIT: 'INIT',
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR'
};
