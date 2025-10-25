import {createElement} from '../render.js';

function createBoardTemplate() {
  return '<section class="board container"></section>';
}

export default class BoardView {
  getTemplate() {
    return createBoardTemplate();
  }

  getElement() {
    if (!this.element) {
      return createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
