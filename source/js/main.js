// import 'jquery-ui-bundle'
import 'inputmask/dist/jquery.inputmask'

import './select'
import './modal'
import './phone-input'

import './nav'
import './quality-tabs'
import './about-brand-tabs'
import './modal-partnership'
import './series-slider'
import './series-tabs'
import './buy-tabs'
import './objects'
import './select-region'
import './spinner'
import Swiper, { Navigation, Pagination } from 'swiper'

$(window).on('load', function () {
  if ($('.review__data-actions').length > 0 && $(window).outerWidth() < 768) {
    $('.footer').css('padding-bottom', '70px')
  }

  const objSlider = new Swiper('.objects__slider', {
    modules: [ Navigation, Pagination ],
    loop: true,
    slidesPerView: 1,
    pagination: {
      enabled: true,
      clickable: true,
      el: ".swiper-pagination",
    },
    navigation: {
      enabled: true,
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    }
  })
})

$(window).on('resize', function () {
  if ($('.review__data-actions').length > 0) {
    if ($(window).outerWidth() < 768) {
      $('.footer').css('padding-bottom', '70px')
    } else {
      $('.footer').css('padding-bottom', '')
    }
  }
})
