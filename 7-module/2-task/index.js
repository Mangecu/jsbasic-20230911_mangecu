import createElement from '../../assets/lib/create-element.js';

export default class Modal {

  elem = null;
  title;
  html;

  constructor() {

  }

  open() {
    this.elem = this.createDOMElement(this.#template(), 'div');
    document.querySelector('.container').append(this.elem);
    console.log(this);
  }

  createDOMElement(html, tag) {
    const temp = document.createElement(tag);
    temp.innerHTML = html;
    return temp.firstElementChild;
  }

  setTitle(str) {
      return this.elem ? this.elem.querySelector('.modal__title').innerHTML = str : this.title = str;
  }

  setBody(html) {
      // console.log(html)
    this.elem.querySelector('.modal__body').innerHTML = '';
    return this.elem ? this.elem.querySelector('.modal__body').innerHTML = html : this.html = html;
  }

  #template() {
    return `
      <div class="modal">
         <div class="modal__overlay"></div>
         <div class="modal__inner">
            <div class="modal__header">
               <button type="button" class="modal__close">
                  <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
               </button>
               <h3 class="modal__title">
                  ${this.title}
               </h3>
            </div>
            <div class="modal__body">
               ${this.html}
            </div>
         </div>
      </div>
    `
  }

}
