const pages = {
  over: {
    Overview: "./",
    Install: "install.html"
  },
  docs: {
    Starter: "starter.html",
    Navbar: "navbar.html",
    Card: "card.html",
    Table: "table.html",
    Flex: "flex.html",
  }
}

let overEl = document.querySelector('.sidebar-nav li.overview ul.child');
let docsEl = document.querySelector('.sidebar-nav li.docs ul.child');
let cls = ``;
for (const [key, val] of Object.entries(pages.over)) {
  window.location.pathname.includes(val) ? cls = ` class='active' ` : '';
  overEl.innerHTML += `<li ${cls}><a href="${val}">${key}</a></li>`;
  cls = '';
}
for (const [key, val] of Object.entries(pages.docs)) {
  window.location.pathname.includes(val) ? cls = ` class='active' ` : '';
  docsEl.innerHTML += `<li ${cls}><a href="${val}">${key}</a></li>`;
  cls = '';
}


