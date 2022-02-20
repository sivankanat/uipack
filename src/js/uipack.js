export default (function UIPack() {
  if (!(this instanceof UIPack)) return new UIPack()

  window.onload = function () {

    /* navbar */
    if (document.querySelector('.navbar .navbar-bars')) {
      document.querySelectorAll('.navbar .navbar-bars').forEach(bars => {
        bars.addEventListener('click', function (e) {
          e.preventDefault();
          let target = document.querySelector(`.${this.dataset.target}`);
          if (target.classList.contains('show')) {
            target.classList.remove('show')
            target.classList.add('hide')
          } else if (target.classList.contains('hide')) {
            target.classList.remove('hide')
            target.classList.add('show')
          } else {
            target.classList.add('show')
          }
        })
      });
    }

  }

})()


