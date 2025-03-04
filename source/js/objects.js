window.objects = window.objects || {};

document.addEventListener('DOMContentLoaded', () => {
  $('.js-filter-reset').on('click', () => {
    $('.select').val(null).trigger('change');
  })

  $('.js-form-submit').on('click', event => {
    event.preventDefault();
    const parent = '.object-page__form form';
    const form = document.querySelector(parent);
    const formData = Object.fromEntries((new FormData(form)).entries());
    if (!formData.agreement) {
      formData.agreement = '';
    }
    let noErrors = true;
    Object.keys(formData).forEach(key => {
      const field = document.querySelector(`${parent} [name="${key}"]`);
      const value = formData[key];
      if (field.required && !value) {
        noErrors = false;
        field.closest('.input-block')?.classList.add('error');
        field.closest('.checkbox-block')?.classList.add('error');
        field.addEventListener('input', checkFilledHandler);
      }
    })
    if (noErrors && objects.formHandler) {
      objects.formHandler();
    }
  })

  objects.showModalSuccess = () => {
    $(`[data-modal="modal-form-success"]`).addClass('js-show')
    $('body').addClass('js-no-scroll')
  }
})

function checkFilledHandler(event) {
  if (!!event.target.value) {
    event.target.removeEventListener('input', checkFilledHandler);
    event.target.closest('.input-block')?.classList.remove('error');
    event.target.closest('.checkbox-block')?.classList.remove('error');
  }
}