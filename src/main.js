import NewTaskButtonView from './view/new-task-button-view.js';
import {render} from './render.js';

const sitemMainElement = document.querySelector('.main');
const siteHeaderElement = sitemMainElement.querySelector('.main__control');

render(new NewTaskButtonView(), siteHeaderElement);
