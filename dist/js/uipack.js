/*! UIPack 0.20.0 | https://github.com/sivankanat/uipack#readme | MIT */
(function (factory) {
  typeof define === 'function' && define.amd ? define('UIPack', factory) :
  factory();
}((function () { 'use strict';

  var query = function query(req) {
    if (!(this instanceof query)) return new query(req);
    this.req = req;
    this.el = document.querySelectorAll(req);
    this.sub = {};
  };

  query.prototype.csst = function () {
    this.el.forEach(function (el) {
      el.style.cssText = csstext;
    });
    return this;
  };

  query.prototype.css = function () {
    this.el.forEach(function (el) {
      Object.assign(el.style, css);
    });
    return this;
  };

  query.prototype.get = function () {
    var _this = this;

    this.el.forEach(function (el) {
      return _this.sub = el.querySelectorAll(sub);
    });
    this.el = this.sub;
    return this;
  };

  query.prototype.on = function (event, callback) {
    this.el.forEach(function (el) {
      el.addEventListener(event, callback);
    });
    return this;
  };

  /* UIP_Navbar */

  var UIP_Navbar = {
    config: {
      name: "navbar",
      cls: query('.navbar'),
      parent: {
        cls: ".parent",
        child: ".sub",
        trigger: query('.navbar .parent .trigger'),
        _click: ""
      }
    },
    clck_fn: function clck_fn() {
      this.config.parent.trigger.on('click', function (e) {
        e.preventDefault();
        UIP_Navbar.config.name;
        this.closest('.parent').querySelector('.sub').classList.toggle('active');
      });
    },
    conf: function conf(obj) {
      Object.assign(this.config, obj);
    },
    ctr: function ctr() {
      var x = this;
      new Promise(function (resolve) {
        setTimeout(resolve, 1);
      }).then(function () {
        x.clck_fn();
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  };
  UIP_Navbar.ctr();
  UIP_Navbar.conf({
    name: "new name"
  });

  /*  UIP_Tabs */

  var UIP_Tabs = {
    name: 'tabs',
    cls: '.tabs',
    tab_attr: '[tab]',
    menu_cls: ".tab-menu",
    menu_click: function menu_click() {
      var x = this;
      query("".concat(this.cls, " ").concat(this.menu_cls, " ").concat(this.tab_attr)).on('click', function () {
        var parent = this.closest(x.cls);
        var target_tab = parent.querySelector(".tab-cont [tab=\"".concat(this.getAttribute('tab'), "\"]"));
        parent.querySelectorAll('.active').forEach(function (item) {
          return item.classList.remove('active');
        });
        this.classList.add('active');
        target_tab.classList.add('active');
        target_tab.style.cssText = "animation: slide-left 0.3s ease-in-out;\
        transition: opacity 0.2s ease -in -out;\
        opacity: 1;";
        setTimeout(function () {
          return target_tab.style.cssText = "";
        }, 600);
      });
    },
    ctr: function ctr() {
      this.menu_click();
    }
  };
  UIP_Tabs.ctr();

})));
