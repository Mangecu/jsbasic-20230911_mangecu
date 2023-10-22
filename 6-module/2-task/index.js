export default class ProductCard {

  elem = null;

  constructor(product) {
    this.name = product.name;
    this.price = product.price;
    this.category = product.category;
    this.image = product.image;
    this.id = product.id;

    this.#render()
  }

  #render() {
    this.elem = this.createDOMElement(this.#template(), 'div');
  }

  createDOMElement (html, tag) {
    const temp = document.createElement(tag);
    temp.innerHTML = html;
    return temp.firstElementChild;

  }

  #template() {
    return `
      <div class="card">
         <div class="card__top">
            <img src="/assets/images/products/${this.image}" class="card__image" alt="product">
            <span class="card__price">€${this.price.toFixed(2)}</span>
         </div>
         <div class="card__body">
            <div class="card__title">${this.name}</div>
            <button type="button" class="card__button">
               <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
         </div>
      </div>
    `
  }

  #addToCart = () => {
    const event = new CustomEvent('product-add', {
      detail: this.id,
      bubbles: true
    })
    this.elem.dispatchEvent(event);
  }
}
