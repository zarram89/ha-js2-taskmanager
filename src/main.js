import NewTaskButtonView from './view/new-task-button-view.js';
import FilterView from './view/filter-view.js';
import {render} from './render.js';
import BoardPresenter from './presenter/board-presenter.js';
import TasksModel from './model/tasks-model.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

render(new NewTaskButtonView(), siteHeaderElement);
render(new FilterView(), siteMainElement);
const tasksModel = new TasksModel();

const boardPresenter = new BoardPresenter({
  boardContainer: siteMainElement,
  tasksModel
});

boardPresenter.init();
