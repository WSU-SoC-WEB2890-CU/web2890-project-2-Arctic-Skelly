//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})
