(() => {
  const refs = {
    openLocationBtn: document.querySelector(
      '[data-contacts-locations-modal-open]'
    ),
    closeLocationBtn: document.querySelector(
      '[data-contacts-locations-modal-close]'
    ),
    modal: document.querySelector('[data-contacts-locations-modal]'),
  };

  refs.openLocationBtn.addEventListener('click', toggleModal);
  refs.closeLocationBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
