import { query } from '../query'
/* UIP_Navbar */
export const UIP_Navbar = {

  config: {
    name: "navbar",
    cls: query('.navbar'),
    parent: {
      cls: ".parent",
      child: ".sub",
      trigger: query('.navbar .parent .trigger'),
      _click: "",
    }
  },
  clck_fn: function () {
    this.config.parent.trigger.on('click', function (e) {
      e.preventDefault();
      let nm = UIP_Navbar.config.name
      this.closest('.parent').querySelector('.sub').classList.toggle('active')
    })
  },
  conf: function (obj) {
    Object.assign(this.config, obj)
  },

  ctr: function () {
    let x = this;
    new Promise(resolve => {
      setTimeout(resolve, 1)
    }).then(() => {
      x.clck_fn()
    }).catch((err) => console.log(err))
  }
}
UIP_Navbar.ctr()
UIP_Navbar.conf({ name: "new name" })


