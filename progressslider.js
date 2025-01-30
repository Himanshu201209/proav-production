const swiperImage = new Swiper('[double-swiper="image"]', {
  spaceBetween: 16,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: {
      spaceBetween: 24,
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: '[solution="next"]',
    prevEl: '[solution="prev"]',
  },
  on: {
    init: function () {
      $(".swiper-progress-bar").removeClass("animate");
      $(".swiper-progress-bar").removeClass("active");
      $(".swiper-progress-bar").eq(0).addClass("animate");
      $(".swiper-progress-bar").eq(0).addClass("active");
    },
    slideChangeTransitionStart: function () {
      $(".swiper-progress-bar").removeClass("animate");
      $(".swiper-progress-bar").removeClass("active");
      $(".swiper-progress-bar").eq(0).addClass("active");
    },
    slideChangeTransitionEnd: function () {
      $(".swiper-progress-bar").eq(0).addClass("animate");
    },
  },
});

const swiperContent = new Swiper('[double-swiper="content"]', {
  effect: "fade",
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
});

swiperImage.controller.control = swiperContent;
swiperContent.controller.control = swiperImage;

// $("document").ready(function() {
//   setTimeout(function() {
//   $('[solution="next"]').removeClass("swiper-button-disabled");
//   $('[solution="next"]').removeClass("swiper-button-lock");
//   $('[solution="prev"]').removeClass("swiper-button-lock");
//       $(".h_services-acc:first-child .h_service-head").trigger('click');
//   },10);
// })

// Break

// var galleryTop = new Swiper('[double-swiper="image"]', {
//   spaceBetween: 10,
//   slidesPerView: 1,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   loop: true,
//   loopedSlides: 4,
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
//   },
//   on: {
//     init: function () {
//       $(".swiper-progress-bar").removeClass("animate");
//       $(".swiper-progress-bar").removeClass("active");
//       $(".swiper-progress-bar").eq(0).addClass("animate");
//       $(".swiper-progress-bar").eq(0).addClass("active");
//     },
//     slideChangeTransitionStart: function () {
//       $(".swiper-progress-bar").removeClass("animate");
//       $(".swiper-progress-bar").removeClass("active");
//       $(".swiper-progress-bar").eq(0).addClass("active");
//     },
//     slideChangeTransitionEnd: function () {
//       $(".swiper-progress-bar").eq(0).addClass("animate");
//     },
//   },
// });
// var galleryThumbs = new Swiper('[double-swiper="content"]', {
//   effect: "fade",
//   spaceBetween: 10,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   touchRatio: 0.2,
//   slideToClickedSlide: true,
//   loop: true,
//   loopedSlides: 4,
// });
// galleryTop.controller.control = galleryThumbs;
// galleryThumbs.controller.control = galleryTop;
