export default (function UIPack() {
  if (!(this instanceof UIPack)) return new UIPack()

  window.onload = function () {

    /* navbar */
    if (document.querySelector('.navbar .navbar-bars')) {
      document.querySelectorAll('.navbar .navbar-bars').forEach(bars => {
        bars.addEventListener('click', function (e) {
          e.preventDefault();
          let target = document.querySelector(`.${this.dataset.target}`);
          if (target.classList.contains('visible')) {
            target.classList.remove('visible')
            target.classList.add('hidden')
          } else if (target.classList.contains('hidden')) {
            target.classList.remove('hidden')
            target.classList.add('visible')
          } else {
            target.classList.add('visible')
          }
        })
      });
    }

  }

})()


