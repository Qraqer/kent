const $trigger = $('[data-trigger]')

$trigger.on('click', function () {
  const name = $(this).attr('data-trigger')

  $(`[data-modal="${name}"]`).addClass('js-show')
  $('body').addClass('js-no-scroll')
})

const $modalClose = $('.modal__close-btn')
const $overlay = $('.modal__overlay')

$modalClose.on('click', function () {
  $(this).parents('.modal').first().removeClass('js-show')
  $('body').removeClass('js-no-scroll')
})

$overlay.on('click', function (e) {
  const $currentTarget = $(e.currentTarget)

  if (e.target === e.currentTarget) {
    $(this).parents('.modal').first().removeClass('js-show')
    $('body').removeClass('js-no-scroll')
  }
})
