import createElement from '../../assets/lib/create-element.js';

export default class Carousel {

  elem = null;

  constructor(slides) {
    this.count = 0;
    this.slides = slides;
    this.#render();

  }

  #render() {
    this.elem = this.createDOMElement(this.#template(), 'div');

  }

  createDOMElement(html, tag) {
    const temp = document.createElement(tag);
    temp.innerHTML = html;
    return temp.firstElementChild;
  }

  #template() {
    return `
      <div class="carousel">
         <div class="carousel__arrow carousel__arrow_right">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
         </div>
         <div class="carousel__arrow carousel__arrow_left">
            <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
         </div>
         <div class="carousel__inner">
            ${this.slides
              .map(item => `<div class="carousel__slide" data-id="${item.id}">
                              <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
                              <div class="carousel__caption">
                                 <span class="carousel__price">€${item.price.toFixed(2)}</span>
                                 <div class="carousel__title">${item.name}</div>
                                 <button type="button" class="carousel__button">
                                    <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                                 </button>
                              </div>
                            </div>`)
              .join('\n')}
         </div>
      </div>
    `
  }



}
