import { query } from '../query'

/*  UIP_Tab */
export const UIP_Tab = {
  name: '[uıp-tabs]',
  cls: '.tabs',
  tab_attr: '[tab]',

  menu_cls: "[tab-menu]",

  menu_click: function () {
    let x = this;
    query(`${this.cls} ${this.menu_cls} ${this.tab_attr}`).on('click', function () {
      let parent = this.closest(x.cls)
      let target_tab = parent.querySelector(`[tab-cont] [tab="${this.getAttribute('tab')}"]`)

      parent.querySelectorAll('.active').forEach((item) => item.classList.remove('active'))

      this.classList.add('active')
      target_tab.classList.add('active')
      target_tab.style.cssText = ("animation: slide-left 0.3s ease-in-out;\
        transition: opacity 0.2s ease -in -out;\
        opacity: 1;")
      setTimeout(() => target_tab.style.cssText = "", 600)

    })
  },

  ctr: function () {
    this.menu_click()
  }
}

UIP_Tab.ctr()

