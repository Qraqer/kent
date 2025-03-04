import 'jquery-ui-bundle'
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
import './select-region'
//import './perfect-scrollbar'

$(window).on('load', function () {
  if ($('.review__data-actions').length > 0 && $(window).outerWidth() < 768) {
    $('.footer').css('padding-bottom', '70px')
  }
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
