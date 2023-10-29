import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {

  elem = null;

  constructor(categories) {
    this.categories = categories;
    this.#render();
  }

  #render() {
    this.elem = this.createDOMElement(this.#template(), 'div');
    this.#initRibbon(this.elem);
  }

  createDOMElement(html, tag) {
    const temp = document.createElement(tag);
    temp.innerHTML = html;
    return temp.firstElementChild;
  }

  #template() {
    return `
      <div class="ribbon">
         <button class="ribbon__arrow ribbon__arrow_left">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
         </button>
         <nav class="ribbon__inner">
            ${this.categories
              .map(item => `<a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>`)
              .join('\n')}
         </nav>
         <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
         </button>
      </div>
    `
  }

  #initRibbon(elem) {
    let ribbon = elem.querySelector('.ribbon__inner');
    let ribbonArrow = elem.querySelectorAll('.ribbon__arrow');
    let ribbonItems = ribbon.querySelectorAll('.ribbon__item');

    ribbonArrow.forEach(button => {
      button.addEventListener('click', event => {
        if (event.currentTarget.classList.contains('ribbon__arrow_left')) {
          ribbon.scrollBy(-350, 0);
        } else if (event.currentTarget.classList.contains('ribbon__arrow_right')) {
          ribbon.scrollBy(350, 0);
        }
      })

      ribbon.addEventListener('scroll', () => {
        this.hiddenArrow(ribbon, ribbonArrow);
      })
    })

    ribbonItems.forEach(item => {
      item.addEventListener('click', event => {
        event.preventDefault();
        this.cleanLinks(ribbonItems);
        event.currentTarget.classList.add('ribbon__item_active');
        item.dispatchEvent(new CustomEvent('ribbon-select', {
          detail: item.dataset.id,
          bubbles: true
        }))
      })
    })
  }

  hiddenArrow (ribbon, ribbonArrow) {
    let scrollLeft = ribbon.scrollLeft;
    let scrollRight = ribbon.scrollWidth - scrollLeft - ribbon.clientWidth;

    if (scrollLeft === 0) {
      ribbonArrow[0].classList.remove('ribbon__arrow_visible');
    } else if (scrollRight < 1) {
      ribbonArrow[1].classList.remove('ribbon__arrow_visible');
    } else {
      ribbonArrow[0].classList.add('ribbon__arrow_visible');
      ribbonArrow[1].classList.add('ribbon__arrow_visible');
    }
  }

  cleanLinks(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].classList.remove('ribbon__item_active');
    }
  }

}
