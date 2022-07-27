(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-menu]'),
    closeModalBtn: document.querySelector('[data-close-menu]'),
    backdrop: document.querySelector('[data-backdrop]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.backdrop.addEventListener('click', logBackdropClick);

  function toggleModal() {
    document.body.classList.toggle('lock');
    refs.backdrop.classList.toggle('is-hidden');
  }
  function logBackdropClick() {
    console.log('menu close');
  }
})();
