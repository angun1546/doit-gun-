const swiper1 = new Swiper(".swiper", {
  autoplay: {
    delay: 1000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  direction: "vertical",
});
