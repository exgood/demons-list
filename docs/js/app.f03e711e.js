(function(e) {
  function t(t) {
    for (
      var n, c, u = t[0], i = t[1], s = t[2], l = 0, f = [];
      l < u.length;
      l++
    )
      (c = u[l]),
        Object.prototype.hasOwnProperty.call(a, c) && a[c] && f.push(a[c][0]),
        (a[c] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    b && b(t);
    while (f.length) f.shift()();
    return o.push.apply(o, s || []), r();
  }
  function r() {
    for (var e, t = 0; t < o.length; t++) {
      for (var r = o[t], n = !0, c = 1; c < r.length; c++) {
        const i = r[c];
        0 !== a[i] && (n = !1);
      }
      n && (o.splice(t--, 1), (e = u((u.s = r[0]))));
    }
    return e;
  }
  var n = {},
    a = { app: 0 },
    o = [];
  function c(e) {
    return (
      u.p +
      "js/" +
      ({ about: "about" }[e] || e) +
      "." +
      { about: "5263cc64" }[e] +
      ".js"
    );
  }
  function u(t) {
    if (n[t]) return n[t].exports;
    const r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, u), (r.l = !0), r.exports;
  }
  (u.e = function(e) {
    let t = [],
      r = a[e];
    if (0 !== r)
      if (r) t.push(r[2]);
      else {
        const n = new Promise(function(t, n) {
          r = a[e] = [t, n];
        });
        t.push((r[2] = n));
        let o,
          i = document.createElement("script");
        (i.charset = "utf-8"),
          (i.timeout = 120),
          u.nc && i.setAttribute("nonce", u.nc),
          (i.src = c(e));
        const s = new Error();
        o = function(t) {
          (i.onerror = i.onload = null), clearTimeout(l);
          const r = a[e];
          if (0 !== r) {
            if (r) {
              const n = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src;
              (s.message =
                "Loading chunk " + e + " failed.\n(" + n + ": " + o + ")"),
                (s.name = "ChunkLoadError"),
                (s.type = n),
                (s.request = o),
                r[1](s);
            }
            a[e] = void 0;
          }
        };
        var l = setTimeout(function() {
          o({ type: "timeout", target: i });
        }, 12e4);
        (i.onerror = i.onload = o), document.head.appendChild(i);
      }
    return Promise.all(t);
  }),
    (u.m = e),
    (u.c = n),
    (u.d = function(e, t, r) {
      u.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (u.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (u.t = function(e, t) {
      if ((1 & t && (e = u(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      const r = Object.create(null);
      if (
        (u.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (const n in e)
          u.d(
            r,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
    }),
    (u.n = function(e) {
      const t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return u.d(t, "a", t), t;
    }),
    (u.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (u.p = "/demons-list/"),
    (u.oe = function(e) {
      throw (console.error(e), e);
    });
  let i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    s = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (let l = 0; l < i.length; l++) t(i[l]);
  var b = s;
  o.push([0, "chunk-vendors"]), r();
})({
  0: function(e, t, r) {
    e.exports = r("cd49");
  },
  "1f32": function(e, t, r) {},
  4340: function(e, t, r) {},
  a77b: function(e, t, r) {
    "use strict";
    r("4340");
  },
  cd49: function(e, t, r) {
    "use strict";
    r.r(t);
    r("e260"), r("e6cf"), r("cca6"), r("a79d");
    const n = r("7a23"),
      a = { id: "nav" },
      o = Object(n["e"])("Home"),
      c = Object(n["e"])(" | "),
      u = Object(n["e"])("About");
    function i(e, t) {
      const r = Object(n["w"])("router-link"),
        i = Object(n["w"])("router-view");
      return (
        Object(n["o"])(),
        Object(n["d"])(
          n["a"],
          null,
          [
            Object(n["f"])("div", a, [
              Object(n["f"])(
                r,
                { to: "/" },
                {
                  default: Object(n["B"])(function() {
                    return [o];
                  }),
                  _: 1
                }
              ),
              c,
              Object(n["f"])(
                r,
                { to: "/about" },
                {
                  default: Object(n["B"])(function() {
                    return [u];
                  }),
                  _: 1
                }
              )
            ]),
            Object(n["f"])(i)
          ],
          64
        )
      );
    }
    r("f4c1");
    const s = {};
    s.render = i;
    const l = s,
      b = (r("d3b7"), r("6c02")),
      f = { class: "home" };
    function p(e, t, r, a, o, c) {
      const u = Object(n["w"])("DemonsList");
      return (
        Object(n["o"])(),
        Object(n["d"])("div", f, [
          Object(n["f"])(u, {
            msg: "Hint. Try to use a pendulum or your finger on the names"
          })
        ])
      );
    }
    const d = r("d4ec"),
      O = r("262e"),
      j = r("2caf"),
      m = r("9ab4"),
      v = r("ce1f"),
      h = Object(n["C"])("data-v-77c9456b");
    Object(n["s"])("data-v-77c9456b");
    const y = { class: "hello" },
      g = { class: "container" },
      w = { class: "row" };
    Object(n["p"])();
    let A = h(function(e, t, r, a, o, c) {
        return (
          Object(n["o"])(),
          Object(n["d"])("div", y, [
            Object(n["f"])("h1", null, Object(n["y"])(e.msg), 1),
            Object(n["f"])("div", g, [
              Object(n["f"])("div", w, [
                (Object(n["o"])(!0),
                Object(n["d"])(
                  n["a"],
                  null,
                  Object(n["v"])(e.demonsList, function(e) {
                    return (
                      Object(n["o"])(),
                      Object(n["d"])(
                        "div",
                        { class: "col-lg-2 p-3", key: e },
                        Object(n["y"])(e),
                        1
                      )
                    );
                  }),
                  128
                ))
              ])
            ])
          ])
        );
      }),
      B = (function(e) {
        Object(O["a"])(r, e);
        const t = Object(j["a"])(r);
        function r() {
          let e;
          return (
            Object(d["a"])(this, r),
            (e = t.apply(this, arguments)),
            (e.demonsList = [
              "Baal",
              "Paimon",
              "Beleth",
              "Purson",
              "Asmodai",
              "Vine",
              "Balam",
              "Zagan",
              "Belial",
              "Amdusias",
              "Agares",
              "Valefar",
              "Barbatos",
              "Gusion",
              "Eligos",
              "Zepar",
              "Bathin",
              "Saleos",
              "Aim",
              "Buné",
              "Berith",
              "Astaroth",
              "Focalor",
              "Vepar",
              "Vual",
              "Crocell",
              "Allocer",
              "Murmur",
              "Gremory",
              "Vapula",
              "Flauros",
              "Dantalion",
              "Vassago",
              "Sitri",
              "Ipos",
              "Gaap",
              "Stolas",
              "Orobas",
              "Seir",
              "Gamigin",
              "Aamon",
              "Leraje",
              "Naberius",
              "Ronové",
              "Forneus",
              "Marchosias",
              "Phenex",
              "Sabnock",
              "Shax",
              "Orias",
              "Andras",
              "Andrealphus",
              "Kimaris",
              "Decarabia",
              "Furfur",
              "Malthus",
              "Raum",
              "Bifrons",
              "Andromalius",
              "Furcas",
              "Barbas",
              "Buer",
              "Botis",
              "Morax",
              "Glasya-Labolas",
              "Foras",
              "Malphas",
              "Haagenti",
              "Camio",
              "Ose",
              "Amy",
              "Valac"
            ]),
            e
          );
        }
        return r;
      })(v["b"]);
    B = Object(m["a"])([Object(v["a"])({ props: { msg: String } })], B);
    const P = B;
    r("a77b");
    (P.render = A), (P.__scopeId = "data-v-77c9456b");
    let S = P,
      _ = (function(e) {
        Object(O["a"])(r, e);
        const t = Object(j["a"])(r);
        function r() {
          return Object(d["a"])(this, r), t.apply(this, arguments);
        }
        return r;
      })(v["b"]);
    _ = Object(m["a"])([Object(v["a"])({ components: { DemonsList: S } })], _);
    const x = _;
    x.render = p;
    const M = x,
      k = [
        { path: "/", name: "Home", component: M },
        {
          path: "/about",
          name: "About",
          component: function() {
            return r.e("about").then(r.bind(null, "f820"));
          }
        }
      ],
      L = Object(b["a"])({
        history: Object(b["b"])("/demons-list/"),
        routes: k
      }),
      V = L;
    r("ab8b");
    Object(n["c"])(l)
      .use(V)
      .mount("#app");
  },
  f4c1: function(e, t, r) {
    "use strict";
    r("1f32");
  }
});
//# sourceMappingURL=app.f03e711e.js.map
