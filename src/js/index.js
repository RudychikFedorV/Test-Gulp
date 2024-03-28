// Галерея и лайтбоксы от Fancybox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();



import Swiper from "swiper/bundle";
import "swiper/css/bundle";
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 5.5,
  parallax: true,
  speed: 1000,
  keyboard: {
	enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
