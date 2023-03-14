import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'

SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay])

export const projectSliderProps = {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: '.next_button',
    prevEl: '.prev_button'
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2, spaceBetween: 50 },
    1040: { slidesPerView: 3, spaceBetween: 50 }
  }
}
