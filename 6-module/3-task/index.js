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
    this.#initCarousel(this.elem);
    this.#addToCart(this.elem);
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

  #initCarousel(elem) {
    let carousel = elem.querySelector('.carousel__inner');
    let carouselArrow = elem.querySelectorAll('.carousel__arrow');

    this.hiddenArrow (this.count, carouselArrow, this.slides.length);

    carouselArrow.forEach(button => {
      button.addEventListener('click',event => {
        if (event.currentTarget.classList.contains('carousel__arrow_right')) {
          this.count++;
        } else if (event.currentTarget.classList.contains('carousel__arrow_left')) {
          this.count--;
        }
        carousel.style.transform = `translateX(-${this.count * carousel.offsetWidth}px)`;
        this.hiddenArrow (this.count, carouselArrow, this.slides.length);
      })
    })
  }

  hiddenArrow (count, carouselArrow, countSlide) {
    if (count === 0) {
      carouselArrow[1].style.display = 'none';
    } else {
      carouselArrow[1].style.display = '';
    }

    if (count >= countSlide - 1) {
      carouselArrow[0].style.display = 'none';
    } else {
      carouselArrow[0].style.display = '';
    }
  }

  #addToCart(elem) {
    let buttons = elem.querySelectorAll('.carousel__button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        elem.dispatchEvent(new CustomEvent("product-add", {
          detail: button.closest('.carousel__slide').dataset.id,
          bubbles: true
        }))
      })
    })
  }
}
