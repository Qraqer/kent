
spinner = {
  classList: null,
  testMode: false,
  init(spinnerTag = '.add--spinner') {
    spinner.classList = document.querySelector(spinnerTag)?.classList;

    if (!spinner.classList) {
      return;
    }

    $('.select').on('select2:select', () => {
      spinner.showLoader();

      // In demo mode set testMode=true to hide spinner
      if (spinner.testMode) {
        setTimeout(() => spinner.hideLoader(), 1500);
      }
    });
  },
  showLoader() {
    spinner.classList.add('loading');
  },
  hideLoader() {
    spinner.classList.add('loading-hide');
    setTimeout(() => spinner.classList.remove('loading', 'loading-hide'), 250);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const spinnerTag = '.add--spinner';
  if (document.querySelector(spinnerTag)) {
    spinner.init(spinnerTag);
  }
})