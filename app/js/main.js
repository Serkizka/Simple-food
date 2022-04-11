$(function () {
  $('.feedback-slider__list').slick({
    dots: true,
    arrows: true,
    nextArrow: '<button class="slick-btn slider-next" type="button"></button>',
    prevArrow: '<button class="slick-btn slider-prev" type="button"></button>',
  });
});

var mixer = mixitup('.popular-products__cards');