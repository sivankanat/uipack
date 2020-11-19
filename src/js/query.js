export const query = function (req) {
  if (!(this instanceof query))
    return new query(req)

  this.req = req
  this.el = document.querySelectorAll(req)
  this.sub = {};
}

query.prototype.csst = function () {
  this.el.forEach(function (el) {
    el.style.cssText = csstext;
  })
  return this
}
query.prototype.css = function () {
  this.el.forEach(function (el) {
    Object.assign(el.style, css)
  });
  return this
}

query.prototype.get = function () {
  this.el.forEach((el) => this.sub = el.querySelectorAll(sub))
  this.el = this.sub
  return this
}
query.prototype.on = function (event, callback) {
  this.el.forEach(function (el) {
    el.addEventListener(event, callback)
  })
  return this
}


