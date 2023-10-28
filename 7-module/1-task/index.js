import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {

  elem = null;

  constructor(categories) {
    this.categories = categories;
    this.#render();
  }

  #render() {
    this.elem = this.createDOMElement(this.#template(), 'div');
    this.#scroll(this.elem);
  }

  createDOMElement(html, tag) {
    const temp = document.createElement(tag);
    temp.innerHTML = html;
    return temp.firstElementChild;
  }

  #template() {
    return `
      <div class="ribbon">
         <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
         </button>
         <nav class="ribbon__inner">
            ${this.categories
              .map(item => `<a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>`)
              .join('\n')}
         </nav>
         <button class="ribbon__arrow ribbon__arrow_right">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
         </button>
      </div>
    `
  }

  #scroll(elem) {
    let ribbon = elem.querySelector('.ribbon__inner');
    let ribbonArrow = elem.querySelectorAll('.ribbon__arrow');

    // ribbonArrow.forEach(button => {
    //   button.addEventListener('click', )
    // })
  }
}
