(() => {
  const refs = {
    openFranchiseBtn: document.querySelector(
      '[data-contacts-franchise-modal-open]'
    ),
    closeFranchiseBtn: document.querySelector(
      '[data-contacts-franchise-modal-close]'
    ),
    modalFranchise: document.querySelector('[data-contacts-franchise-modal]'),
  };

  refs.openFranchiseBtn.addEventListener('click', toggleModal);
  refs.closeFranchiseBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalFranchise.classList.toggle('is-hidden');
  }
})();
