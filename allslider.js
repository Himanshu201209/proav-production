document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  // Function to initialize a Swiper if it has slides
  const initializeSwiper = (elements, options, logMessage, notFoundMessage) => {
    if (elements.length > 0) {
      elements.forEach((swiperElement, index) => {
        // Check for slides within the swiperElement
        const slides = swiperElement.querySelectorAll(".swiper-slide");
        if (slides.length > 0) {
          console.log(`Found element ${index + 1} for ${logMessage}`);
          new Swiper(swiperElement, options);
          console.log(`${logMessage} initialized for element ${index + 1}`);
        } else {
          console.log(
            `Skipping ${logMessage} for element ${index + 1} - no slides found`
          );
        }
      });
    } else {
      console.log(notFoundMessage);
    }
  };

  // Initialize Suppliers Logo Swiper
  const suppliersSwiperElements = document.querySelectorAll(
    '[swiper="suppliers"]'
  );
  initializeSwiper(
    suppliersSwiperElements,
    {
      spaceBetween: 16,
      slidesPerView: 2,
      breakpoints: {
        640: { slidesPerView: 3 },
        1280: { slidesPerView: 5 },
      },
      navigation: {
        nextEl: '[suppliers="next"]',
        prevEl: '[suppliers="prev"]',
      },
    },
    "Suppliers Logo Swiper",
    "Suppliers Logo Swiper elements not found"
  );

  // Initialize Showroom Swiper
  const showroomSwiperElements = document.querySelectorAll(
    '[swiper="showroom"]'
  );
  initializeSwiper(
    showroomSwiperElements,
    {
      spaceBetween: 24,
      slidesPerView: 1,
      initialSlide: 1,
      navigation: {
        nextEl: ".showrrom_next",
        prevEl: ".showrrom_prev",
      },
    },
    "Showroom Swiper",
    "Showroom Swiper elements not found"
  );

  // Initialize Showroom Swiper
  const showroomSwiperElements2 = document.querySelectorAll(
    '[swiper="singleslide"]'
  );
  initializeSwiper(
    showroomSwiperElements2,
    {
      spaceBetween: 24,
      slidesPerView: 1,
      initialSlide: 1,
      navigation: {
        nextEl: "[slide='next']",
        prevEl: "[slide='prev']",
      },
    },
    "Showroom Swiper",
    "Showroom Swiper elements not found"
  );

  const showroomSwiperElementsloop = document.querySelectorAll(
    '[swiper="showroomloop"]'
  );
  initializeSwiper(
    showroomSwiperElementsloop,
    {
      spaceBetween: 24,
      slidesPerView: 1,
      initialSlide: 1,
      loop: true,
      loopAdditionalSlides: 1,
      autoplay: {
        delay: 4000,
        pauseOnMouseEnter: false,
      },
      navigation: {
        nextEl: "[showrrom_next]",
        prevEl: "[showrrom_prev]",
      },
    },
    "Showroom Swiper loop",
    "Showroom Swiper loop elements not found"
  );

  // Initialize Testimonial Swiper
  const testimonialSwiperElements = document.querySelectorAll(
    '[swiper="testimonail"]'
  );
  initializeSwiper(
    testimonialSwiperElements,
    {
      spaceBetween: 16,
      slidesPerView: 1,
      loop: true,
      freeMode: true,
      speed: 6000,
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
        pauseOnMouseEnter: false,
      },
      breakpoints: {
        0: { slidesPerView: 1, autoplay: false, speed: 500 },
        991: { slidesPerView: 1, autoplay: false, speed: 500 },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 24,
          autoplay: { delay: 0, disableOnInteraction: false },
        },
        1280: {
          slidesPerView: 3.5,
          spaceBetween: 24,
          freeMode: true,
          autoplay: { delay: 0, disableOnInteraction: false },
        },
      },
      navigation: {
        nextEl: ".client_next",
        prevEl: ".client_prev",
      },
    },
    "Testimonial Swiper",
    "Testimonial Swiper elements not found"
  );

  // Initialize Vertical Hero Swiper
  const verticalHeroSwiperElements =
    document.querySelectorAll('[swiper="vc-hero"]');
  initializeSwiper(
    verticalHeroSwiperElements,
    {
      spaceBetween: 24,
      slidesPerView: 1.2,
      breakpoints: {
        1280: { slidesPerView: 1.5 },
      },
      navigation: {
        nextEl: '[vh-swiper="next"]',
        prevEl: '[vh-swiper="prev"]',
      },
    },
    "Vertical Hero Swiper",
    "Vertical Hero Swiper elements not found"
  );

  // Initialize Vertical Solutions Swiper
  const verticalSolutionsSwiperElements = document.querySelectorAll(
    "[vertical='solutionslider']"
  );
  initializeSwiper(
    verticalSolutionsSwiperElements,
    {
      spaceBetween: 24,
      slidesPerView: 1,
      initialSlide: 1,
      loop: true,
      loopAdditionalSlides: 1,
      navigation: {
        nextEl: '[wp="next"]',
        prevEl: '[wp="prev"]',
      },
    },
    "Vertical Solutions Swiper",
    "Vertical Solutions Swiper elements not found"
  );

  // Initialize News Swiper
  const newsSwiperElements = document.querySelectorAll("[swiper='news']");
  initializeSwiper(
    newsSwiperElements,
    {
      spaceBetween: 24,
      slidesPerView: 1.2,
      breakpoints: {
        1280: { slidesPerView: 4 },
        991: { slidesPerView: 3 },
        640: { slidesPerView: 2.2 },
      },
      navigation: {
        nextEl: '[news="next"]',
        prevEl: '[news="prev"]',
      },
    },
    "News Swiper",
    "News Swiper elements not found"
  );

  // Initialize Partners 2 Swiper
  const partners2SwiperElements = document.querySelectorAll(
    '[swiper="partners2"]'
  );
  initializeSwiper(
    partners2SwiperElements,
    {
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '[partners="next"]',
        prevEl: '[partners="prev"]',
      },
      on: {
        init: function () {
          $(".swiper-progress-bar[progress]").removeClass("animate active");
          $(".swiper-progress-bar[progress]").eq(0).addClass("animate active");
        },
        slideChangeTransitionStart: function () {
          $(".swiper-progress-bar[progress]").removeClass("animate active");
          $(".swiper-progress-bar[progress]").eq(0).addClass("active");
        },
        slideChangeTransitionEnd: function () {
          $(".swiper-progress-bar[progress]").eq(0).addClass("animate");
        },
      },
    },
    "Partners 2 Swiper",
    "Partners 2 Swiper elements not found"
  );

  // Initialize Partners Swiper
  const partnersSwiperElements = document.querySelectorAll(
    '[swiper="partners"]'
  );
  initializeSwiper(
    partnersSwiperElements,
    {
      slidesPerView: 1,
      spaceBetween: 24,
      breakpoints: {
        1024: { slidesPerView: 3 },
        640: { slidesPerView: 2 },
      },
      navigation: {
        nextEl: '[partners2="next"]',
        prevEl: '[partners2="prev"]',
      },
    },
    "Partners Swiper",
    "Partners Swiper elements not found"
  );

  console.log("All Swiper instances processed.");
});
