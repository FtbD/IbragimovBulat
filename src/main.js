import HeaderComponent from './view/header-component.js';
import TaskFormComponent from './view/task-form-component.js';
import BoardComponent from './view/board-component.js';
import TaskListComponent from './view/task-list-component.js';
import TaskComponent from './view/task-component.js';
import { render, RenderPosition } from './render.js';

document.addEventListener("DOMContentLoaded", () => {
    const bodyContainer = document.querySelector('.board-app');
    const mainContainer = document.querySelector(".board-app__main");
    console.log("Проверяем контейнеры...");
    console.log("bodyContainer:", document.querySelector('.board-app'));
    console.log("mainContainer:", document.querySelector('.board-app__main'));
    console.log("addTaskContainer:", document.querySelector(".add-task"));
    console.log("taskboardContainer:", document.querySelector(".taskboard"));

    if (!bodyContainer || !mainContainer) {
        console.error("Ошибка: контейнеры .board-app или .board-app__main не найдены!");
        return;
    }

    render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);

    const boardContainer = new BoardComponent();
    render(boardContainer, mainContainer);

    const addTaskContainer = document.querySelector(".add-task");
    if (addTaskContainer) {
        render(new TaskFormComponent(), addTaskContainer);
    } else {
        console.warn("Предупреждение: контейнер .add-task не найден!");
    }

    const taskSets = [
        ["Купить хлеб", "Сделать зарядку", "Помыть машину"],
        ["Позвонить клиенту", "Ответить на письма", "Подготовить отчет"],
        ["Написать код", "Исправить баги", "Залить на сервер"],
        ["Прочитать книгу", "Посмотреть лекцию", "Конспектировать"]
    ];
    
    for (let i = 0; i < taskSets.length; i++) {
        const taskList = new TaskListComponent();
        render(taskList, boardContainer.getElement());
    
        taskSets[i].forEach(taskText => {
            const task = new TaskComponent(taskText);
            render(task, taskList.getElement());
        });
    }
    
});
