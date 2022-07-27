(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-desc-menu]'),
    openModalBtnSecond: document.querySelector('[data-open-desc-menu-sec]'),
    closeModalBtn: document.querySelector('[data-close-desc-menu]'),
    backdrop: document.querySelector('[data-desc-backdrop]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnSecond.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.backdrop.addEventListener('click', logBackdropClick);

  function toggleModal() {
    document.body.classList.toggle('lock');
    refs.backdrop.classList.toggle('is-hidden');
  }

  function logBackdropClick() {
    console.log('Open modal desc');
  }
})();
