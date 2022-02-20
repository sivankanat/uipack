/*! UIPack 0.23.0 | https://github.com/sivankanat/uipack#readme | MIT */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('UIPack', factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.UIPack = factory());
})(this, (function () { 'use strict';

  var uipack = (function UIPack() {
    if (!(this instanceof UIPack)) return new UIPack();

    window.onload = function () {
      /* navbar */
      if (document.querySelector('.navbar .navbar-bars')) {
        document.querySelectorAll('.navbar .navbar-bars').forEach(function (bars) {
          bars.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(".".concat(this.dataset.target));

            if (target.classList.contains('show')) {
              target.classList.remove('show');
              target.classList.add('hide');
            } else if (target.classList.contains('hide')) {
              target.classList.remove('hide');
              target.classList.add('show');
            } else {
              target.classList.add('show');
            }
          });
        });
      }
    };
  })();

  return uipack;

}));
