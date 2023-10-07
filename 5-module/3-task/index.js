function initCarousel() {
  let carousel = document.querySelector('.carousel__inner');
  let carouselArrow = document.querySelectorAll('.carousel__arrow');
  let carouselSlides = document.querySelectorAll('.carousel__slide');
  let count= 0;
  let widthShift = carousel.offsetWidth;
  carouselArrow[1].style.display = 'none'

  carouselArrow.forEach(button => {
    button.addEventListener('click',event => {
      if (event.currentTarget.classList.contains('carousel__arrow_right')) {
        count = count - 1;
      } else if (event.currentTarget.classList.contains('carousel__arrow_left')) {
        count = count + 1;
      }
      carousel.style.transform = `translateX(${count * widthShift}px)`;
      hiddenArrow (count, carouselArrow);
    })
  })
  function hiddenArrow (count, carouselArrow) {
    switch (count) {
      case 0:
        carouselArrow[1].style.display = 'none';
        break
      case -3:
        carouselArrow[0].style.display = 'none';
        break
      default:
        carouselArrow[0].style.display = 'flex';
        carouselArrow[1].style.display = 'flex';
    }
  }
}
