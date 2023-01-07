//Carousel

const owl = $('.owl-carousel');//находим элемент, на который будем вешать owlcarousel
owl.owlCarousel({
  center: true,
  loop: true,
  margin: 20,
  startPosition: 1,
  items: 1,
  responsive : {
    1400 : {
      items: 3,
      margin: 20,
    },
}
});//вызываем метод

// Кнопка назад

$('.slider__btn--left').click(function() {
// При клике на кнопек будет вызываться trigger, карусель прокутит вперёд
  owl.trigger('buttons.left.owl.carousel');
  console.log('left');
})

// Кнопка вперёд
$('.slider__btn--right').click(function() {
    owl.trigger('buttons.right.owl.carousel');
    console.log('right');
})
// new Swiper('.owl-carousel');