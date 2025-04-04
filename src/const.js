export const RenderPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
    AFTEREND: 'afterend',
  };
  
  export const TaskStatus = {
    PENDING: 'pending',
    IN_PROGRESS: 'in-progress',
    DONE: 'done',
  };
  
  export const StatusTitles = {
    [TaskStatus.PENDING]: 'Ожидает',
    [TaskStatus.IN_PROGRESS]: 'В работе',
    [TaskStatus.DONE]: 'Выполнено',
  };
  
  export const StatusColors = {
    [TaskStatus.PENDING]: '#ffc107',
    [TaskStatus.IN_PROGRESS]: '#17a2b8',
    [TaskStatus.DONE]: '#28a745',
  };