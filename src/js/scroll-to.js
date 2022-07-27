let anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      anchor = this.getAttribute('href');
      document.querySelector(anchor).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
}
