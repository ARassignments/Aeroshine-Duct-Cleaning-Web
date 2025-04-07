const swiper = new Swiper('.swiper', {
// Designed by SMI SOFTS (https://www.smisofts.com/)
  autoplay: {
     delay: 3000,
     disableOnInteraction: false
   },

  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  speed: 1200,
  mousewheel: false,
  watchSlidesProgress: true,
  parallax: true,
  spaceBetween: -1,

  // If we need pagination
   pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
// Designed by SMI SOFTS (https://www.smisofts.com/)