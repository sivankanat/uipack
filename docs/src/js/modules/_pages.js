const pages = {
  overview: {
    Overview: "./",
    Install: "install.html",
    Starter: "starter.html"
  },
  base: {
    Typography: "typography.html",
  },
  components: {
    Navbar: "navbar.html",
    Card: "card.html",
    Flex: "flex.html",
    Pagination: "pagination.html",
  },
  elements: {
    Table: "table.html",
    Buttons: 'buttons.html'
  },
  helpers: {
    Text: "text.html"
  },
  utils: {

  }
}
let cls = ``;
let listEl;
let list;
for (const [key, items] of Object.entries(pages)) {

  for (const [Label, Page] of Object.entries(items)) {
    window.location.pathname.includes(Page) ? cls = ` class='active' ` : '';
    document.querySelector(`li.${key} ul.child`).innerHTML += `<li ${cls}><a href="${Page}">${Label}</a></li>`;
    cls = '';
  }

}




