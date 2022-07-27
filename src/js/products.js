(() => {
  const refs = {
    openTextBtn: document.querySelectorAll('[data-tex-show]'),
  };

  refs.openTextBtn.forEach(btn => {
    const parentElem = btn.closest('.products-item');
    const hiddenText = parentElem.querySelector('[data-text-hidden]');
    btn.addEventListener('click', () => {
      hiddenText.classList.toggle('is-hidden');
      btn.classList.toggle('text-open');
    });
  });
})();
