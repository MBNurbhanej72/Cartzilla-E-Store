var bannerSwiper = new Swiper(".bannerSwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});



var specialOfferSwiper = new Swiper(".specialOfferSwiper", {
  effect: "coverflow",
  grabCursor: false,
  centeredSlides: false,
  slidesPerView: "auto",
  spaceBetween: 24,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    415: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    }
  },
  navigation: {
    prevEl: ".special-offer-prev-slide",
    nextEl: ".special-offer-next-slide",
  }
});