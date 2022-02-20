/**! UIPack 0.23.0 | https://github.com/sivankanat/uipack#readme | MIT */

(function (factory) {
  typeof define === 'function' && define.amd ? define('UIPack', factory) :
  factory();
})((function () { 'use strict';

  ((function UIPack() {
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
  }))();

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var pages = {
    overview: {
      Overview: "./",
      Install: "install.html",
      Starter: "starter.html"
    },
    base: {
      Typography: "typography.html"
    },
    components: {
      Navbar: "navbar.html",
      Card: "card.html",
      Flex: "flex.html",
      Pagination: "pagination.html"
    },
    elements: {
      Table: "table.html",
      Buttons: 'buttons.html'
    },
    helpers: {
      Text: "text.html"
    },
    utils: {}
  };
  var cls = "";

  for (var _i = 0, _Object$entries = Object.entries(pages); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        items = _Object$entries$_i[1];

    for (var _i2 = 0, _Object$entries2 = Object.entries(items); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          Label = _Object$entries2$_i[0],
          Page = _Object$entries2$_i[1];

      window.location.pathname.includes(Page) ? cls = " class='active' " : '';
      document.querySelector("li.".concat(key, " ul.child")).innerHTML += "<li ".concat(cls, "><a href=\"").concat(Page, "\">").concat(Label, "</a></li>");
      cls = '';
    }
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  		path: basedir,
  		exports: {},
  		require: function (path, base) {
  			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
  		}
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  createCommonjsModule(function (module) {
    /* PrismJS 1.23.0
    https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript&plugins=highlight-keywords+unescaped-markup+normalize-whitespace */
    var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
        Prism = function (u) {
      var c = /\blang(?:uage)?-([\w-]+)\b/i,
          n = 0,
          M = {
        manual: u.Prism && u.Prism.manual,
        disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
        util: {
          encode: function e(n) {
            return n instanceof W ? new W(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          },
          type: function type(e) {
            return Object.prototype.toString.call(e).slice(8, -1);
          },
          objId: function objId(e) {
            return e.__id || Object.defineProperty(e, "__id", {
              value: ++n
            }), e.__id;
          },
          clone: function r(e, t) {
            var a, n;

            switch (t = t || {}, M.util.type(e)) {
              case "Object":
                if (n = M.util.objId(e), t[n]) return t[n];

                for (var i in a = {}, t[n] = a, e) {
                  e.hasOwnProperty(i) && (a[i] = r(e[i], t));
                }

                return a;

              case "Array":
                return n = M.util.objId(e), t[n] ? t[n] : (a = [], t[n] = a, e.forEach(function (e, n) {
                  a[n] = r(e, t);
                }), a);

              default:
                return e;
            }
          },
          getLanguage: function getLanguage(e) {
            for (; e && !c.test(e.className);) {
              e = e.parentElement;
            }

            return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none";
          },
          currentScript: function currentScript() {
            if ("undefined" == typeof document) return null;
            if ("currentScript" in document) return document.currentScript;

            try {
              throw new Error();
            } catch (e) {
              var n = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1];

              if (n) {
                var r = document.getElementsByTagName("script");

                for (var t in r) {
                  if (r[t].src == n) return r[t];
                }
              }

              return null;
            }
          },
          isActive: function isActive(e, n, r) {
            for (var t = "no-" + n; e;) {
              var a = e.classList;
              if (a.contains(n)) return !0;
              if (a.contains(t)) return !1;
              e = e.parentElement;
            }

            return !!r;
          }
        },
        languages: {
          extend: function extend(e, n) {
            var r = M.util.clone(M.languages[e]);

            for (var t in n) {
              r[t] = n[t];
            }

            return r;
          },
          insertBefore: function insertBefore(r, e, n, t) {
            var a = (t = t || M.languages)[r],
                i = {};

            for (var l in a) {
              if (a.hasOwnProperty(l)) {
                if (l == e) for (var o in n) {
                  n.hasOwnProperty(o) && (i[o] = n[o]);
                }
                n.hasOwnProperty(l) || (i[l] = a[l]);
              }
            }

            var s = t[r];
            return t[r] = i, M.languages.DFS(M.languages, function (e, n) {
              n === s && e != r && (this[e] = i);
            }), i;
          },
          DFS: function e(n, r, t, a) {
            a = a || {};
            var i = M.util.objId;

            for (var l in n) {
              if (n.hasOwnProperty(l)) {
                r.call(n, l, n[l], t || l);
                var o = n[l],
                    s = M.util.type(o);
                "Object" !== s || a[i(o)] ? "Array" !== s || a[i(o)] || (a[i(o)] = !0, e(o, r, l, a)) : (a[i(o)] = !0, e(o, r, null, a));
              }
            }
          }
        },
        plugins: {},
        highlightAll: function highlightAll(e, n) {
          M.highlightAllUnder(document, e, n);
        },
        highlightAllUnder: function highlightAllUnder(e, n, r) {
          var t = {
            callback: r,
            container: e,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          M.hooks.run("before-highlightall", t), t.elements = Array.prototype.slice.apply(t.container.querySelectorAll(t.selector)), M.hooks.run("before-all-elements-highlight", t);

          for (var a, i = 0; a = t.elements[i++];) {
            M.highlightElement(a, !0 === n, t.callback);
          }
        },
        highlightElement: function highlightElement(e, n, r) {
          var t = M.util.getLanguage(e),
              a = M.languages[t];
          e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + t;
          var i = e.parentElement;
          i && "pre" === i.nodeName.toLowerCase() && (i.className = i.className.replace(c, "").replace(/\s+/g, " ") + " language-" + t);
          var l = {
            element: e,
            language: t,
            grammar: a,
            code: e.textContent
          };

          function o(e) {
            l.highlightedCode = e, M.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, M.hooks.run("after-highlight", l), M.hooks.run("complete", l), r && r.call(l.element);
          }

          if (M.hooks.run("before-sanity-check", l), !l.code) return M.hooks.run("complete", l), void (r && r.call(l.element));
          if (M.hooks.run("before-highlight", l), l.grammar) {
            if (n && u.Worker) {
              var s = new Worker(M.filename);
              s.onmessage = function (e) {
                o(e.data);
              }, s.postMessage(JSON.stringify({
                language: l.language,
                code: l.code,
                immediateClose: !0
              }));
            } else o(M.highlight(l.code, l.grammar, l.language));
          } else o(M.util.encode(l.code));
        },
        highlight: function highlight(e, n, r) {
          var t = {
            code: e,
            grammar: n,
            language: r
          };
          return M.hooks.run("before-tokenize", t), t.tokens = M.tokenize(t.code, t.grammar), M.hooks.run("after-tokenize", t), W.stringify(M.util.encode(t.tokens), t.language);
        },
        tokenize: function tokenize(e, n) {
          var r = n.rest;

          if (r) {
            for (var t in r) {
              n[t] = r[t];
            }

            delete n.rest;
          }

          var a = new i();
          return I(a, a.head, e), function e(n, r, t, a, i, l) {
            for (var o in t) {
              if (t.hasOwnProperty(o) && t[o]) {
                var s = t[o];
                s = Array.isArray(s) ? s : [s];

                for (var u = 0; u < s.length; ++u) {
                  if (l && l.cause == o + "," + u) return;
                  var c = s[u],
                      g = c.inside,
                      f = !!c.lookbehind,
                      h = !!c.greedy,
                      d = c.alias;

                  if (h && !c.pattern.global) {
                    var v = c.pattern.toString().match(/[imsuy]*$/)[0];
                    c.pattern = RegExp(c.pattern.source, v + "g");
                  }

                  for (var p = c.pattern || c, m = a.next, y = i; m !== r.tail && !(l && y >= l.reach); y += m.value.length, m = m.next) {
                    var k = m.value;
                    if (r.length > n.length) return;

                    if (!(k instanceof W)) {
                      var b,
                          x = 1;

                      if (h) {
                        if (!(b = z(p, y, n, f))) break;
                        var w = b.index,
                            A = b.index + b[0].length,
                            P = y;

                        for (P += m.value.length; P <= w;) {
                          m = m.next, P += m.value.length;
                        }

                        if (P -= m.value.length, y = P, m.value instanceof W) continue;

                        for (var S = m; S !== r.tail && (P < A || "string" == typeof S.value); S = S.next) {
                          x++, P += S.value.length;
                        }

                        x--, k = n.slice(y, P), b.index -= y;
                      } else if (!(b = z(p, 0, k, f))) continue;

                      var w = b.index,
                          E = b[0],
                          O = k.slice(0, w),
                          L = k.slice(w + E.length),
                          N = y + k.length;
                      l && N > l.reach && (l.reach = N);
                      var j = m.prev;
                      O && (j = I(r, j, O), y += O.length), q(r, j, x);
                      var C = new W(o, g ? M.tokenize(E, g) : E, d, E);

                      if (m = I(r, j, C), L && I(r, m, L), 1 < x) {
                        var _ = {
                          cause: o + "," + u,
                          reach: N
                        };
                        e(n, r, t, m.prev, y, _), l && _.reach > l.reach && (l.reach = _.reach);
                      }
                    }
                  }
                }
              }
            }
          }(e, a, n, a.head, 0), function (e) {
            var n = [],
                r = e.head.next;

            for (; r !== e.tail;) {
              n.push(r.value), r = r.next;
            }

            return n;
          }(a);
        },
        hooks: {
          all: {},
          add: function add(e, n) {
            var r = M.hooks.all;
            r[e] = r[e] || [], r[e].push(n);
          },
          run: function run(e, n) {
            var r = M.hooks.all[e];
            if (r && r.length) for (var t, a = 0; t = r[a++];) {
              t(n);
            }
          }
        },
        Token: W
      };

      function W(e, n, r, t) {
        this.type = e, this.content = n, this.alias = r, this.length = 0 | (t || "").length;
      }

      function z(e, n, r, t) {
        e.lastIndex = n;
        var a = e.exec(r);

        if (a && t && a[1]) {
          var i = a[1].length;
          a.index += i, a[0] = a[0].slice(i);
        }

        return a;
      }

      function i() {
        var e = {
          value: null,
          prev: null,
          next: null
        },
            n = {
          value: null,
          prev: e,
          next: null
        };
        e.next = n, this.head = e, this.tail = n, this.length = 0;
      }

      function I(e, n, r) {
        var t = n.next,
            a = {
          value: r,
          prev: n,
          next: t
        };
        return n.next = a, t.prev = a, e.length++, a;
      }

      function q(e, n, r) {
        for (var t = n.next, a = 0; a < r && t !== e.tail; a++) {
          t = t.next;
        }

        (n.next = t).prev = n, e.length -= a;
      }

      if (u.Prism = M, W.stringify = function n(e, r) {
        if ("string" == typeof e) return e;

        if (Array.isArray(e)) {
          var t = "";
          return e.forEach(function (e) {
            t += n(e, r);
          }), t;
        }

        var a = {
          type: e.type,
          content: n(e.content, r),
          tag: "span",
          classes: ["token", e.type],
          attributes: {},
          language: r
        },
            i = e.alias;
        i && (Array.isArray(i) ? Array.prototype.push.apply(a.classes, i) : a.classes.push(i)), M.hooks.run("wrap", a);
        var l = "";

        for (var o in a.attributes) {
          l += " " + o + '="' + (a.attributes[o] || "").replace(/"/g, "&quot;") + '"';
        }

        return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + l + ">" + a.content + "</" + a.tag + ">";
      }, !u.document) return u.addEventListener && (M.disableWorkerMessageHandler || u.addEventListener("message", function (e) {
        var n = JSON.parse(e.data),
            r = n.language,
            t = n.code,
            a = n.immediateClose;
        u.postMessage(M.highlight(t, M.languages[r], r)), a && u.close();
      }, !1)), M;
      var e = M.util.currentScript();

      function r() {
        M.manual || M.highlightAll();
      }

      if (e && (M.filename = e.src, e.hasAttribute("data-manual") && (M.manual = !0)), !M.manual) {
        var t = document.readyState;
        "loading" === t || "interactive" === t && e && e.defer ? document.addEventListener("DOMContentLoaded", r) : window.requestAnimationFrame ? window.requestAnimationFrame(r) : window.setTimeout(r, 16);
      }

      return M;
    }(_self);

    module.exports && (module.exports = Prism), "undefined" != typeof commonjsGlobal && (commonjsGlobal.Prism = Prism);
    Prism.languages.markup = {
      comment: /<!--[\s\S]*?-->/,
      prolog: /<\?[\s\S]+?\?>/,
      doctype: {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
          "internal-subset": {
            pattern: /(\[)[\s\S]+(?=\]>$)/,
            lookbehind: !0,
            greedy: !0,
            inside: null
          },
          string: {
            pattern: /"[^"]*"|'[^']*'/,
            greedy: !0
          },
          punctuation: /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/,
          name: /[^\s<>'"]+/
        }
      },
      cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
      tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
              punctuation: /^<\/?/,
              namespace: /^[^\s>\/:]+:/
            }
          },
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [{
                pattern: /^=/,
                alias: "attr-equals"
              }, /"|'/]
            }
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              namespace: /^[^\s>\/:]+:/
            }
          }
        }
      },
      entity: [{
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      }, /&#x?[\da-f]{1,8};/i]
    }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function (a) {
      "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
    }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
      value: function value(a, e) {
        var s = {};
        s["language-" + e] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: Prism.languages[e]
        }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var n = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: s
          }
        };
        n["language-" + e] = {
          pattern: /[\s\S]+/,
          inside: Prism.languages[e]
        };
        var t = {};
        t[a] = {
          pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function () {
            return a;
          }), "i"),
          lookbehind: !0,
          greedy: !0,
          inside: n
        }, Prism.languages.insertBefore("markup", "cdata", t);
      }
    }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
    !function (s) {
      var e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
      s.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
          inside: {
            rule: /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: !0,
              alias: "selector"
            },
            keyword: {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: !0
            }
          }
        },
        url: {
          pattern: RegExp("\\burl\\((?:" + e.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"),
          greedy: !0,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: {
              pattern: RegExp("^" + e.source + "$"),
              alias: "url"
            }
          }
        },
        selector: RegExp("[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + e.source + ")*(?=\\s*\\{)"),
        string: {
          pattern: e,
          greedy: !0
        },
        property: /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        important: /!important\b/i,
        function: /[-a-z0-9]+(?=\()/i,
        punctuation: /[(){};:,]/
      }, s.languages.css.atrule.inside.rest = s.languages.css;
      var t = s.languages.markup;
      t && (t.tag.addInlined("style", "css"), s.languages.insertBefore("inside", "attr-value", {
        "style-attr": {
          pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
          lookbehind: !0,
          inside: {
            "attr-value": {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                style: {
                  pattern: /(["'])[\s\S]+(?=["']$)/,
                  lookbehind: !0,
                  alias: "language-css",
                  inside: s.languages.css
                },
                punctuation: [{
                  pattern: /^=/,
                  alias: "attr-equals"
                }, /"|'/]
              }
            },
            "attr-name": /^style/i
          }
        }
      }, t.tag));
    }(Prism);
    Prism.languages.clike = {
      comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
      },
      "class-name": {
        pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
          punctuation: /[.\\]/
        }
      },
      keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
      boolean: /\b(?:true|false)\b/,
      function: /\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/
    };
    Prism.languages.javascript = Prism.languages.extend("clike", {
      "class-name": [Prism.languages.clike["class-name"], {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
        lookbehind: !0
      }],
      keyword: [{
        pattern: /((?:^|})\s*)catch\b/,
        lookbehind: !0
      }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }],
      function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
      operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: "language-regex",
            inside: Prism.languages.regex
          },
          "regex-flags": /[a-z]+$/,
          "regex-delimiter": /^\/|\/$/
        }
      },
      "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
      },
      parameter: [{
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript
      }, {
        pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        inside: Prism.languages.javascript
      }, {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
      }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
      }],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), Prism.languages.insertBefore("javascript", "string", {
      "template-string": {
        pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
        greedy: !0,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string"
          },
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
            lookbehind: !0,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\${|}$/,
                alias: "punctuation"
              },
              rest: Prism.languages.javascript
            }
          },
          string: /[\s\S]+/
        }
      }
    }), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript;
    "undefined" != typeof self && !self.Prism || "undefined" != typeof commonjsGlobal && !commonjsGlobal.Prism || Prism.hooks.add("wrap", function (e) {
      "keyword" === e.type && e.classes.push("keyword-" + e.content);
    });
    "undefined" != typeof self && self.Prism && self.document && (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Prism.plugins.UnescapedMarkup = !0, Prism.hooks.add("before-highlightall", function (e) {
      e.selector += ', [class*="lang-"] script[type="text/plain"], [class*="language-"] script[type="text/plain"], script[type="text/plain"][class*="lang-"], script[type="text/plain"][class*="language-"]';
    }), Prism.hooks.add("before-sanity-check", function (e) {
      var t = e.element;

      if (t.matches('script[type="text/plain"]')) {
        var a = document.createElement("code"),
            c = document.createElement("pre");
        c.className = a.className = t.className;
        var s = t.dataset;
        return Object.keys(s || {}).forEach(function (e) {
          Object.prototype.hasOwnProperty.call(s, e) && (c.dataset[e] = s[e]);
        }), a.textContent = e.code = e.code.replace(/&lt;\/script(?:>|&gt;)/gi, "<\/script>"), c.appendChild(a), t.parentNode.replaceChild(c, t), void (e.element = a);
      }

      if (!e.code) {
        var n = t.childNodes;
        1 === n.length && "#comment" == n[0].nodeName && (t.textContent = e.code = n[0].textContent);
      }
    }));
    !function () {
      var i = Object.assign || function (e, n) {
        for (var t in n) {
          n.hasOwnProperty(t) && (e[t] = n[t]);
        }

        return e;
      };

      function e(e) {
        this.defaults = i({}, e);
      }

      function s(e) {
        for (var n = 0, t = 0; t < e.length; ++t) {
          e.charCodeAt(t) == "\t".charCodeAt(0) && (n += 3);
        }

        return e.length + n;
      }

      e.prototype = {
        setDefaults: function setDefaults(e) {
          this.defaults = i(this.defaults, e);
        },
        normalize: function normalize(e, n) {
          for (var t in n = i(this.defaults, n)) {
            var r = t.replace(/-(\w)/g, function (e, n) {
              return n.toUpperCase();
            });
            "normalize" !== t && "setDefaults" !== r && n[t] && this[r] && (e = this[r].call(this, e, n[t]));
          }

          return e;
        },
        leftTrim: function leftTrim(e) {
          return e.replace(/^\s+/, "");
        },
        rightTrim: function rightTrim(e) {
          return e.replace(/\s+$/, "");
        },
        tabsToSpaces: function tabsToSpaces(e, n) {
          return n = 0 | n || 4, e.replace(/\t/g, new Array(++n).join(" "));
        },
        spacesToTabs: function spacesToTabs(e, n) {
          return n = 0 | n || 4, e.replace(RegExp(" {" + n + "}", "g"), "\t");
        },
        removeTrailing: function removeTrailing(e) {
          return e.replace(/\s*?$/gm, "");
        },
        removeInitialLineFeed: function removeInitialLineFeed(e) {
          return e.replace(/^(?:\r?\n|\r)/, "");
        },
        removeIndent: function removeIndent(e) {
          var n = e.match(/^[^\S\n\r]*(?=\S)/gm);
          return n && n[0].length ? (n.sort(function (e, n) {
            return e.length - n.length;
          }), n[0].length ? e.replace(RegExp("^" + n[0], "gm"), "") : e) : e;
        },
        indent: function indent(e, n) {
          return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++n).join("\t") + "$&");
        },
        breakLines: function breakLines(e, n) {
          n = !0 === n ? 80 : 0 | n || 80;

          for (var t = e.split("\n"), r = 0; r < t.length; ++r) {
            if (!(s(t[r]) <= n)) {
              for (var i = t[r].split(/(\s+)/g), o = 0, a = 0; a < i.length; ++a) {
                var l = s(i[a]);
                n < (o += l) && (i[a] = "\n" + i[a], o = l);
              }

              t[r] = i.join("");
            }
          }

          return t.join("\n");
        }
      }, module.exports && (module.exports = e), "undefined" != typeof Prism && (Prism.plugins.NormalizeWhitespace = new e({
        "remove-trailing": !0,
        "remove-indent": !0,
        "left-trim": !0,
        "right-trim": !0
      }), Prism.hooks.add("before-sanity-check", function (e) {
        var n = Prism.plugins.NormalizeWhitespace;
        if ((!e.settings || !1 !== e.settings["whitespace-normalization"]) && Prism.util.isActive(e.element, "whitespace-normalization", !0)) if (e.element && e.element.parentNode || !e.code) {
          var t = e.element.parentNode;

          if (e.code && t && "pre" === t.nodeName.toLowerCase()) {
            for (var r = t.childNodes, i = "", o = "", a = !1, l = 0; l < r.length; ++l) {
              var s = r[l];
              s == e.element ? a = !0 : "#text" === s.nodeName && (a ? o += s.nodeValue : i += s.nodeValue, t.removeChild(s), --l);
            }

            if (e.element.children.length && Prism.plugins.KeepMarkup) {
              var c = i + e.element.innerHTML + o;
              e.element.innerHTML = n.normalize(c, e.settings), e.code = e.element.textContent;
            } else e.code = i + e.code + o, e.code = n.normalize(e.code, e.settings);
          }
        } else e.code = n.normalize(e.code, e.settings);
      }));
    }();
  });

  /* examp */

  if (document.querySelectorAll('.examp')) {
    var examps = document.querySelectorAll('.examp');
    examps.forEach(function (examp) {
      var options = JSON.parse(examp.dataset.options);
      var Html = examp.innerHTML;
      var component = "<ul class=\"reset examp-tabs\">\n    <li class=\"".concat(options.active == 'preview' ? 'active' : '', "\">Preview</li>\n    <li class=\"").concat(options.active == 'source' ? 'active' : '', "\">Source</li>\n    </ul>\n    <ul class=\"reset examp-conts relative\">\n    <li class=\"").concat(options.active == 'preview' ? 'active' : '', "\">").concat(Html, "</li>\n    <li class=\"").concat(options.active == 'source' ? 'active' : '', "\">\n    <pre><code class=\"language-").concat(options.lang, "\"><xmp>").concat(Html, "</xmp></code></pre>\n    </li>\n    </ul>");
      examp.innerHTML = component;
      examp.querySelectorAll('.examp-tabs > li').forEach(function (el, i) {
        el.addEventListener('click', function (e) {
          examp.querySelectorAll('.examp-tabs > li').forEach(function (el) {
            return el.classList.remove('active');
          });
          examp.querySelectorAll('.examp-conts > li').forEach(function (el) {
            return el.classList.remove('active');
          });
          this.classList.add('active');
          examp.querySelectorAll('.examp-conts > li')[i].classList.add('active');
        });
      });
    });
  }
  /* Prism.plugins.NormalizeWhitespace.setDefaults({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true,
    'break-lines': 80,
    'indent': 1,
    'remove-initial-line-feed': false,
    'tabs-to-spaces': 2,
    'spaces-to-tabs': 2
  });
  Prism.highlightAll(); */

  fetch('https://api.github.com/repos/sivankanat/uipack/tags').then(function (res) {
    return res.json();
  }).then(function (data) {
    if (document.getElementById('gitReleaseLink')) {
      var linkEl = document.getElementById('gitReleaseLink');
      linkEl.href = "https://github.com/sivankanat/uipack/releases/tag/".concat(data[0].name);
      linkEl.querySelector('#gitReleaseTag').innerHTML = data[0].name;
    }
  });

}));
