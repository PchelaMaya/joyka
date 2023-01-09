    var swiper = new Swiper(".slider", {
        // center: true,
        loop: true,
        initialSlide: 0,
        slidesPerView: 5,
      navigation: {
        nextEl: ".slider__btn--left",
        prevEl: ".slider__btn--right",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },

    });