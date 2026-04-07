(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) u(c);
  new MutationObserver((c) => {
    for (const h of c)
      if (h.type === "childList")
        for (const d of h.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && u(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(c) {
    const h = {};
    return (
      c.integrity && (h.integrity = c.integrity),
      c.referrerPolicy && (h.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : c.crossOrigin === "anonymous"
          ? (h.credentials = "omit")
          : (h.credentials = "same-origin"),
      h
    );
  }
  function u(c) {
    if (c.ep) return;
    c.ep = !0;
    const h = o(c);
    fetch(c.href, h);
  }
})();
var Vr = { exports: {} },
  rl = {};
var ap;
function Z1() {
  if (ap) return rl;
  ap = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function o(u, c, h) {
    var d = null;
    if (
      (h !== void 0 && (d = "" + h),
      c.key !== void 0 && (d = "" + c.key),
      "key" in c)
    ) {
      h = {};
      for (var y in c) y !== "key" && (h[y] = c[y]);
    } else h = c;
    return (
      (c = h.ref),
      { $$typeof: a, type: u, key: d, ref: c !== void 0 ? c : null, props: h }
    );
  }
  return ((rl.Fragment = l), (rl.jsx = o), (rl.jsxs = o), rl);
}
var ip;
function K1() {
  return (ip || ((ip = 1), (Vr.exports = Z1())), Vr.exports);
}
var x = K1(),
  Rr = { exports: {} },
  nt = {};
var lp;
function k1() {
  if (lp) return nt;
  lp = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    y = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    E = Symbol.iterator;
  function V(A) {
    return A === null || typeof A != "object"
      ? null
      : ((A = (E && A[E]) || A["@@iterator"]),
        typeof A == "function" ? A : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    L = Object.assign,
    X = {};
  function H(A, U, Y) {
    ((this.props = A),
      (this.context = U),
      (this.refs = X),
      (this.updater = Y || w));
  }
  ((H.prototype.isReactComponent = {}),
    (H.prototype.setState = function (A, U) {
      if (typeof A != "object" && typeof A != "function" && A != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, A, U, "setState");
    }),
    (H.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate");
    }));
  function G() {}
  G.prototype = H.prototype;
  function B(A, U, Y) {
    ((this.props = A),
      (this.context = U),
      (this.refs = X),
      (this.updater = Y || w));
  }
  var P = (B.prototype = new G());
  ((P.constructor = B), L(P, H.prototype), (P.isPureReactComponent = !0));
  var F = Array.isArray;
  function lt() {}
  var W = { H: null, A: null, T: null, S: null },
    et = Object.prototype.hasOwnProperty;
  function Mt(A, U, Y) {
    var k = Y.ref;
    return {
      $$typeof: a,
      type: A,
      key: U,
      ref: k !== void 0 ? k : null,
      props: Y,
    };
  }
  function Xt(A, U) {
    return Mt(A.type, U, A.props);
  }
  function oe(A) {
    return typeof A == "object" && A !== null && A.$$typeof === a;
  }
  function Bt(A) {
    var U = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (Y) {
        return U[Y];
      })
    );
  }
  var ke = /\/+/g;
  function He(A, U) {
    return typeof A == "object" && A !== null && A.key != null
      ? Bt("" + A.key)
      : U.toString(36);
  }
  function ue(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (
          (typeof A.status == "string"
            ? A.then(lt, lt)
            : ((A.status = "pending"),
              A.then(
                function (U) {
                  A.status === "pending" &&
                    ((A.status = "fulfilled"), (A.value = U));
                },
                function (U) {
                  A.status === "pending" &&
                    ((A.status = "rejected"), (A.reason = U));
                },
              )),
          A.status)
        ) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function O(A, U, Y, k, at) {
    var ut = typeof A;
    (ut === "undefined" || ut === "boolean") && (A = null);
    var vt = !1;
    if (A === null) vt = !0;
    else
      switch (ut) {
        case "bigint":
        case "string":
        case "number":
          vt = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case a:
            case l:
              vt = !0;
              break;
            case v:
              return ((vt = A._init), O(vt(A._payload), U, Y, k, at));
          }
      }
    if (vt)
      return (
        (at = at(A)),
        (vt = k === "" ? "." + He(A, 0) : k),
        F(at)
          ? ((Y = ""),
            vt != null && (Y = vt.replace(ke, "$&/") + "/"),
            O(at, U, Y, "", function (yi) {
              return yi;
            }))
          : at != null &&
            (oe(at) &&
              (at = Xt(
                at,
                Y +
                  (at.key == null || (A && A.key === at.key)
                    ? ""
                    : ("" + at.key).replace(ke, "$&/") + "/") +
                  vt,
              )),
            U.push(at)),
        1
      );
    vt = 0;
    var ae = k === "" ? "." : k + ":";
    if (F(A))
      for (var wt = 0; wt < A.length; wt++)
        ((k = A[wt]), (ut = ae + He(k, wt)), (vt += O(k, U, Y, ut, at)));
    else if (((wt = V(A)), typeof wt == "function"))
      for (A = wt.call(A), wt = 0; !(k = A.next()).done; )
        ((k = k.value), (ut = ae + He(k, wt++)), (vt += O(k, U, Y, ut, at)));
    else if (ut === "object") {
      if (typeof A.then == "function") return O(ue(A), U, Y, k, at);
      throw (
        (U = String(A)),
        Error(
          "Objects are not valid as a React child (found: " +
            (U === "[object Object]"
              ? "object with keys {" + Object.keys(A).join(", ") + "}"
              : U) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return vt;
  }
  function q(A, U, Y) {
    if (A == null) return A;
    var k = [],
      at = 0;
    return (
      O(A, k, "", "", function (ut) {
        return U.call(Y, ut, at++);
      }),
      k
    );
  }
  function Q(A) {
    if (A._status === -1) {
      var U = A._result;
      ((U = U()),
        U.then(
          function (Y) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 1), (A._result = Y));
          },
          function (Y) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 2), (A._result = Y));
          },
        ),
        A._status === -1 && ((A._status = 0), (A._result = U)));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var st =
      typeof reportError == "function"
        ? reportError
        : function (A) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var U = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof A == "object" &&
                  A !== null &&
                  typeof A.message == "string"
                    ? String(A.message)
                    : String(A),
                error: A,
              });
              if (!window.dispatchEvent(U)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", A);
              return;
            }
            console.error(A);
          },
    ht = {
      map: q,
      forEach: function (A, U, Y) {
        q(
          A,
          function () {
            U.apply(this, arguments);
          },
          Y,
        );
      },
      count: function (A) {
        var U = 0;
        return (
          q(A, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (A) {
        return (
          q(A, function (U) {
            return U;
          }) || []
        );
      },
      only: function (A) {
        if (!oe(A))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return A;
      },
    };
  return (
    (nt.Activity = b),
    (nt.Children = ht),
    (nt.Component = H),
    (nt.Fragment = o),
    (nt.Profiler = c),
    (nt.PureComponent = B),
    (nt.StrictMode = u),
    (nt.Suspense = g),
    (nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W),
    (nt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (A) {
        return W.H.useMemoCache(A);
      },
    }),
    (nt.cache = function (A) {
      return function () {
        return A.apply(null, arguments);
      };
    }),
    (nt.cacheSignal = function () {
      return null;
    }),
    (nt.cloneElement = function (A, U, Y) {
      if (A == null)
        throw Error(
          "The argument must be a React element, but you passed " + A + ".",
        );
      var k = L({}, A.props),
        at = A.key;
      if (U != null)
        for (ut in (U.key !== void 0 && (at = "" + U.key), U))
          !et.call(U, ut) ||
            ut === "key" ||
            ut === "__self" ||
            ut === "__source" ||
            (ut === "ref" && U.ref === void 0) ||
            (k[ut] = U[ut]);
      var ut = arguments.length - 2;
      if (ut === 1) k.children = Y;
      else if (1 < ut) {
        for (var vt = Array(ut), ae = 0; ae < ut; ae++)
          vt[ae] = arguments[ae + 2];
        k.children = vt;
      }
      return Mt(A.type, at, k);
    }),
    (nt.createContext = function (A) {
      return (
        (A = {
          $$typeof: d,
          _currentValue: A,
          _currentValue2: A,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (A.Provider = A),
        (A.Consumer = { $$typeof: h, _context: A }),
        A
      );
    }),
    (nt.createElement = function (A, U, Y) {
      var k,
        at = {},
        ut = null;
      if (U != null)
        for (k in (U.key !== void 0 && (ut = "" + U.key), U))
          et.call(U, k) &&
            k !== "key" &&
            k !== "__self" &&
            k !== "__source" &&
            (at[k] = U[k]);
      var vt = arguments.length - 2;
      if (vt === 1) at.children = Y;
      else if (1 < vt) {
        for (var ae = Array(vt), wt = 0; wt < vt; wt++)
          ae[wt] = arguments[wt + 2];
        at.children = ae;
      }
      if (A && A.defaultProps)
        for (k in ((vt = A.defaultProps), vt))
          at[k] === void 0 && (at[k] = vt[k]);
      return Mt(A, ut, at);
    }),
    (nt.createRef = function () {
      return { current: null };
    }),
    (nt.forwardRef = function (A) {
      return { $$typeof: y, render: A };
    }),
    (nt.isValidElement = oe),
    (nt.lazy = function (A) {
      return { $$typeof: v, _payload: { _status: -1, _result: A }, _init: Q };
    }),
    (nt.memo = function (A, U) {
      return { $$typeof: p, type: A, compare: U === void 0 ? null : U };
    }),
    (nt.startTransition = function (A) {
      var U = W.T,
        Y = {};
      W.T = Y;
      try {
        var k = A(),
          at = W.S;
        (at !== null && at(Y, k),
          typeof k == "object" &&
            k !== null &&
            typeof k.then == "function" &&
            k.then(lt, st));
      } catch (ut) {
        st(ut);
      } finally {
        (U !== null && Y.types !== null && (U.types = Y.types), (W.T = U));
      }
    }),
    (nt.unstable_useCacheRefresh = function () {
      return W.H.useCacheRefresh();
    }),
    (nt.use = function (A) {
      return W.H.use(A);
    }),
    (nt.useActionState = function (A, U, Y) {
      return W.H.useActionState(A, U, Y);
    }),
    (nt.useCallback = function (A, U) {
      return W.H.useCallback(A, U);
    }),
    (nt.useContext = function (A) {
      return W.H.useContext(A);
    }),
    (nt.useDebugValue = function () {}),
    (nt.useDeferredValue = function (A, U) {
      return W.H.useDeferredValue(A, U);
    }),
    (nt.useEffect = function (A, U) {
      return W.H.useEffect(A, U);
    }),
    (nt.useEffectEvent = function (A) {
      return W.H.useEffectEvent(A);
    }),
    (nt.useId = function () {
      return W.H.useId();
    }),
    (nt.useImperativeHandle = function (A, U, Y) {
      return W.H.useImperativeHandle(A, U, Y);
    }),
    (nt.useInsertionEffect = function (A, U) {
      return W.H.useInsertionEffect(A, U);
    }),
    (nt.useLayoutEffect = function (A, U) {
      return W.H.useLayoutEffect(A, U);
    }),
    (nt.useMemo = function (A, U) {
      return W.H.useMemo(A, U);
    }),
    (nt.useOptimistic = function (A, U) {
      return W.H.useOptimistic(A, U);
    }),
    (nt.useReducer = function (A, U, Y) {
      return W.H.useReducer(A, U, Y);
    }),
    (nt.useRef = function (A) {
      return W.H.useRef(A);
    }),
    (nt.useState = function (A) {
      return W.H.useState(A);
    }),
    (nt.useSyncExternalStore = function (A, U, Y) {
      return W.H.useSyncExternalStore(A, U, Y);
    }),
    (nt.useTransition = function () {
      return W.H.useTransition();
    }),
    (nt.version = "19.2.4"),
    nt
  );
}
var sp;
function Ec() {
  return (sp || ((sp = 1), (Rr.exports = k1())), Rr.exports);
}
var I = Ec(),
  wr = { exports: {} },
  cl = {},
  _r = { exports: {} },
  Ur = {};
var op;
function J1() {
  return (
    op ||
      ((op = 1),
      (function (a) {
        function l(O, q) {
          var Q = O.length;
          O.push(q);
          t: for (; 0 < Q; ) {
            var st = (Q - 1) >>> 1,
              ht = O[st];
            if (0 < c(ht, q)) ((O[st] = q), (O[Q] = ht), (Q = st));
            else break t;
          }
        }
        function o(O) {
          return O.length === 0 ? null : O[0];
        }
        function u(O) {
          if (O.length === 0) return null;
          var q = O[0],
            Q = O.pop();
          if (Q !== q) {
            O[0] = Q;
            t: for (var st = 0, ht = O.length, A = ht >>> 1; st < A; ) {
              var U = 2 * (st + 1) - 1,
                Y = O[U],
                k = U + 1,
                at = O[k];
              if (0 > c(Y, Q))
                k < ht && 0 > c(at, Y)
                  ? ((O[st] = at), (O[k] = Q), (st = k))
                  : ((O[st] = Y), (O[U] = Q), (st = U));
              else if (k < ht && 0 > c(at, Q))
                ((O[st] = at), (O[k] = Q), (st = k));
              else break t;
            }
          }
          return q;
        }
        function c(O, q) {
          var Q = O.sortIndex - q.sortIndex;
          return Q !== 0 ? Q : O.id - q.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var h = performance;
          a.unstable_now = function () {
            return h.now();
          };
        } else {
          var d = Date,
            y = d.now();
          a.unstable_now = function () {
            return d.now() - y;
          };
        }
        var g = [],
          p = [],
          v = 1,
          b = null,
          E = 3,
          V = !1,
          w = !1,
          L = !1,
          X = !1,
          H = typeof setTimeout == "function" ? setTimeout : null,
          G = typeof clearTimeout == "function" ? clearTimeout : null,
          B = typeof setImmediate < "u" ? setImmediate : null;
        function P(O) {
          for (var q = o(p); q !== null; ) {
            if (q.callback === null) u(p);
            else if (q.startTime <= O)
              (u(p), (q.sortIndex = q.expirationTime), l(g, q));
            else break;
            q = o(p);
          }
        }
        function F(O) {
          if (((L = !1), P(O), !w))
            if (o(g) !== null) ((w = !0), lt || ((lt = !0), Bt()));
            else {
              var q = o(p);
              q !== null && ue(F, q.startTime - O);
            }
        }
        var lt = !1,
          W = -1,
          et = 5,
          Mt = -1;
        function Xt() {
          return X ? !0 : !(a.unstable_now() - Mt < et);
        }
        function oe() {
          if (((X = !1), lt)) {
            var O = a.unstable_now();
            Mt = O;
            var q = !0;
            try {
              t: {
                ((w = !1), L && ((L = !1), G(W), (W = -1)), (V = !0));
                var Q = E;
                try {
                  e: {
                    for (
                      P(O), b = o(g);
                      b !== null && !(b.expirationTime > O && Xt());
                    ) {
                      var st = b.callback;
                      if (typeof st == "function") {
                        ((b.callback = null), (E = b.priorityLevel));
                        var ht = st(b.expirationTime <= O);
                        if (((O = a.unstable_now()), typeof ht == "function")) {
                          ((b.callback = ht), P(O), (q = !0));
                          break e;
                        }
                        (b === o(g) && u(g), P(O));
                      } else u(g);
                      b = o(g);
                    }
                    if (b !== null) q = !0;
                    else {
                      var A = o(p);
                      (A !== null && ue(F, A.startTime - O), (q = !1));
                    }
                  }
                  break t;
                } finally {
                  ((b = null), (E = Q), (V = !1));
                }
                q = void 0;
              }
            } finally {
              q ? Bt() : (lt = !1);
            }
          }
        }
        var Bt;
        if (typeof B == "function")
          Bt = function () {
            B(oe);
          };
        else if (typeof MessageChannel < "u") {
          var ke = new MessageChannel(),
            He = ke.port2;
          ((ke.port1.onmessage = oe),
            (Bt = function () {
              He.postMessage(null);
            }));
        } else
          Bt = function () {
            H(oe, 0);
          };
        function ue(O, q) {
          W = H(function () {
            O(a.unstable_now());
          }, q);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (a.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (et = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return E;
          }),
          (a.unstable_next = function (O) {
            switch (E) {
              case 1:
              case 2:
              case 3:
                var q = 3;
                break;
              default:
                q = E;
            }
            var Q = E;
            E = q;
            try {
              return O();
            } finally {
              E = Q;
            }
          }),
          (a.unstable_requestPaint = function () {
            X = !0;
          }),
          (a.unstable_runWithPriority = function (O, q) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var Q = E;
            E = O;
            try {
              return q();
            } finally {
              E = Q;
            }
          }),
          (a.unstable_scheduleCallback = function (O, q, Q) {
            var st = a.unstable_now();
            switch (
              (typeof Q == "object" && Q !== null
                ? ((Q = Q.delay),
                  (Q = typeof Q == "number" && 0 < Q ? st + Q : st))
                : (Q = st),
              O)
            ) {
              case 1:
                var ht = -1;
                break;
              case 2:
                ht = 250;
                break;
              case 5:
                ht = 1073741823;
                break;
              case 4:
                ht = 1e4;
                break;
              default:
                ht = 5e3;
            }
            return (
              (ht = Q + ht),
              (O = {
                id: v++,
                callback: q,
                priorityLevel: O,
                startTime: Q,
                expirationTime: ht,
                sortIndex: -1,
              }),
              Q > st
                ? ((O.sortIndex = Q),
                  l(p, O),
                  o(g) === null &&
                    O === o(p) &&
                    (L ? (G(W), (W = -1)) : (L = !0), ue(F, Q - st)))
                : ((O.sortIndex = ht),
                  l(g, O),
                  w || V || ((w = !0), lt || ((lt = !0), Bt()))),
              O
            );
          }),
          (a.unstable_shouldYield = Xt),
          (a.unstable_wrapCallback = function (O) {
            var q = E;
            return function () {
              var Q = E;
              E = q;
              try {
                return O.apply(this, arguments);
              } finally {
                E = Q;
              }
            };
          }));
      })(Ur)),
    Ur
  );
}
var up;
function P1() {
  return (up || ((up = 1), (_r.exports = J1())), _r.exports);
}
var Br = { exports: {} },
  ee = {};
var rp;
function F1() {
  if (rp) return ee;
  rp = 1;
  var a = Ec();
  function l(g) {
    var p = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        p += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var u = {
      d: {
        f: o,
        r: function () {
          throw Error(l(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function h(g, p, v) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: b == null ? null : "" + b,
      children: g,
      containerInfo: p,
      implementation: v,
    };
  }
  var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(g, p) {
    if (g === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u),
    (ee.createPortal = function (g, p) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(l(299));
      return h(g, p, null, v);
    }),
    (ee.flushSync = function (g) {
      var p = d.T,
        v = u.p;
      try {
        if (((d.T = null), (u.p = 2), g)) return g();
      } finally {
        ((d.T = p), (u.p = v), u.d.f());
      }
    }),
    (ee.preconnect = function (g, p) {
      typeof g == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        u.d.C(g, p));
    }),
    (ee.prefetchDNS = function (g) {
      typeof g == "string" && u.d.D(g);
    }),
    (ee.preinit = function (g, p) {
      if (typeof g == "string" && p && typeof p.as == "string") {
        var v = p.as,
          b = y(v, p.crossOrigin),
          E = typeof p.integrity == "string" ? p.integrity : void 0,
          V = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        v === "style"
          ? u.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: b,
              integrity: E,
              fetchPriority: V,
            })
          : v === "script" &&
            u.d.X(g, {
              crossOrigin: b,
              integrity: E,
              fetchPriority: V,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (ee.preinitModule = function (g, p) {
      if (typeof g == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var v = y(p.as, p.crossOrigin);
            u.d.M(g, {
              crossOrigin: v,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && u.d.M(g);
    }),
    (ee.preload = function (g, p) {
      if (
        typeof g == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var v = p.as,
          b = y(v, p.crossOrigin);
        u.d.L(g, v, {
          crossOrigin: b,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (ee.preloadModule = function (g, p) {
      if (typeof g == "string")
        if (p) {
          var v = y(p.as, p.crossOrigin);
          u.d.m(g, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: v,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else u.d.m(g);
    }),
    (ee.requestFormReset = function (g) {
      u.d.r(g);
    }),
    (ee.unstable_batchedUpdates = function (g, p) {
      return g(p);
    }),
    (ee.useFormState = function (g, p, v) {
      return d.H.useFormState(g, p, v);
    }),
    (ee.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (ee.version = "19.2.4"),
    ee
  );
}
var cp;
function W1() {
  if (cp) return Br.exports;
  cp = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return (a(), (Br.exports = F1()), Br.exports);
}
var fp;
function $1() {
  if (fp) return cl;
  fp = 1;
  var a = P1(),
    l = Ec(),
    o = W1();
  function u(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function h(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (h(t) !== t) throw Error(u(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = h(t)), e === null)) throw Error(u(188));
      return e !== t ? null : t;
    }
    for (var n = t, i = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (((i = s.return), i !== null)) {
          n = i;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === n) return (g(s), t);
          if (r === i) return (g(s), e);
          r = r.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== i.return) ((n = s), (i = r));
      else {
        for (var f = !1, m = s.child; m; ) {
          if (m === n) {
            ((f = !0), (n = s), (i = r));
            break;
          }
          if (m === i) {
            ((f = !0), (i = s), (n = r));
            break;
          }
          m = m.sibling;
        }
        if (!f) {
          for (m = r.child; m; ) {
            if (m === n) {
              ((f = !0), (n = r), (i = s));
              break;
            }
            if (m === i) {
              ((f = !0), (i = r), (n = s));
              break;
            }
            m = m.sibling;
          }
          if (!f) throw Error(u(189));
        }
      }
      if (n.alternate !== i) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? t : e;
  }
  function v(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = v(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var b = Object.assign,
    E = Symbol.for("react.element"),
    V = Symbol.for("react.transitional.element"),
    w = Symbol.for("react.portal"),
    L = Symbol.for("react.fragment"),
    X = Symbol.for("react.strict_mode"),
    H = Symbol.for("react.profiler"),
    G = Symbol.for("react.consumer"),
    B = Symbol.for("react.context"),
    P = Symbol.for("react.forward_ref"),
    F = Symbol.for("react.suspense"),
    lt = Symbol.for("react.suspense_list"),
    W = Symbol.for("react.memo"),
    et = Symbol.for("react.lazy"),
    Mt = Symbol.for("react.activity"),
    Xt = Symbol.for("react.memo_cache_sentinel"),
    oe = Symbol.iterator;
  function Bt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (oe && t[oe]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var ke = Symbol.for("react.client.reference");
  function He(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === ke ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case L:
        return "Fragment";
      case H:
        return "Profiler";
      case X:
        return "StrictMode";
      case F:
        return "Suspense";
      case lt:
        return "SuspenseList";
      case Mt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case w:
          return "Portal";
        case B:
          return t.displayName || "Context";
        case G:
          return (t._context.displayName || "Context") + ".Consumer";
        case P:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case W:
          return (
            (e = t.displayName || null),
            e !== null ? e : He(t.type) || "Memo"
          );
        case et:
          ((e = t._payload), (t = t._init));
          try {
            return He(t(e));
          } catch {}
      }
    return null;
  }
  var ue = Array.isArray,
    O = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = { pending: !1, data: null, method: null, action: null },
    st = [],
    ht = -1;
  function A(t) {
    return { current: t };
  }
  function U(t) {
    0 > ht || ((t.current = st[ht]), (st[ht] = null), ht--);
  }
  function Y(t, e) {
    (ht++, (st[ht] = t.current), (t.current = e));
  }
  var k = A(null),
    at = A(null),
    ut = A(null),
    vt = A(null);
  function ae(t, e) {
    switch ((Y(ut, e), Y(at, t), Y(k, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Dm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = Dm(e)), (t = Nm(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (U(k), Y(k, t));
  }
  function wt() {
    (U(k), U(at), U(ut));
  }
  function yi(t) {
    t.memoizedState !== null && Y(vt, t);
    var e = k.current,
      n = Nm(e, t.type);
    e !== n && (Y(at, t), Y(k, n));
  }
  function Nl(t) {
    (at.current === t && (U(k), U(at)),
      vt.current === t && (U(vt), (ll._currentValue = Q)));
  }
  var mo, ef;
  function Fn(t) {
    if (mo === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((mo = (e && e[1]) || ""),
          (ef =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      mo +
      t +
      ef
    );
  }
  var po = !1;
  function yo(t, e) {
    if (!t || po) return "";
    po = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var _ = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(_.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(_, []);
                } catch (C) {
                  var j = C;
                }
                Reflect.construct(t, [], _);
              } else {
                try {
                  _.call();
                } catch (C) {
                  j = C;
                }
                t.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (C) {
                j = C;
              }
              (_ = t()) &&
                typeof _.catch == "function" &&
                _.catch(function () {});
            }
          } catch (C) {
            if (C && j && typeof C.stack == "string") return [C.stack, j.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name",
      );
      s &&
        s.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var r = i.DetermineComponentFrameRoot(),
        f = r[0],
        m = r[1];
      if (f && m) {
        var S = f.split(`
`),
          N = m.split(`
`);
        for (
          s = i = 0;
          i < S.length && !S[i].includes("DetermineComponentFrameRoot");
        )
          i++;
        for (; s < N.length && !N[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (i === S.length || s === N.length)
          for (
            i = S.length - 1, s = N.length - 1;
            1 <= i && 0 <= s && S[i] !== N[s];
          )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (S[i] !== N[s]) {
            if (i !== 1 || s !== 1)
              do
                if ((i--, s--, 0 > s || S[i] !== N[s])) {
                  var z =
                    `
` + S[i].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      z.includes("<anonymous>") &&
                      (z = z.replace("<anonymous>", t.displayName)),
                    z
                  );
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      ((po = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : "") ? Fn(n) : "";
  }
  function Tg(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Fn(t.type);
      case 16:
        return Fn("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? Fn("Suspense Fallback")
          : Fn("Suspense");
      case 19:
        return Fn("SuspenseList");
      case 0:
      case 15:
        return yo(t.type, !1);
      case 11:
        return yo(t.type.render, !1);
      case 1:
        return yo(t.type, !0);
      case 31:
        return Fn("Activity");
      default:
        return "";
    }
  }
  function nf(t) {
    try {
      var e = "",
        n = null;
      do ((e += Tg(t, n)), (n = t), (t = t.return));
      while (t);
      return e;
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  var go = Object.prototype.hasOwnProperty,
    vo = a.unstable_scheduleCallback,
    xo = a.unstable_cancelCallback,
    Ag = a.unstable_shouldYield,
    Eg = a.unstable_requestPaint,
    ye = a.unstable_now,
    Mg = a.unstable_getCurrentPriorityLevel,
    af = a.unstable_ImmediatePriority,
    lf = a.unstable_UserBlockingPriority,
    jl = a.unstable_NormalPriority,
    Dg = a.unstable_LowPriority,
    sf = a.unstable_IdlePriority,
    Ng = a.log,
    jg = a.unstable_setDisableYieldValue,
    gi = null,
    ge = null;
  function Sn(t) {
    if (
      (typeof Ng == "function" && jg(t),
      ge && typeof ge.setStrictMode == "function")
    )
      try {
        ge.setStrictMode(gi, t);
      } catch {}
  }
  var ve = Math.clz32 ? Math.clz32 : Og,
    Cg = Math.log,
    zg = Math.LN2;
  function Og(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Cg(t) / zg) | 0)) | 0);
  }
  var Cl = 256,
    zl = 262144,
    Ol = 4194304;
  function Wn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Vl(t, e, n) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var s = 0,
      r = t.suspendedLanes,
      f = t.pingedLanes;
    t = t.warmLanes;
    var m = i & 134217727;
    return (
      m !== 0
        ? ((i = m & ~r),
          i !== 0
            ? (s = Wn(i))
            : ((f &= m),
              f !== 0
                ? (s = Wn(f))
                : n || ((n = m & ~t), n !== 0 && (s = Wn(n)))))
        : ((m = i & ~r),
          m !== 0
            ? (s = Wn(m))
            : f !== 0
              ? (s = Wn(f))
              : n || ((n = i & ~t), n !== 0 && (s = Wn(n)))),
      s === 0
        ? 0
        : e !== 0 &&
            e !== s &&
            (e & r) === 0 &&
            ((r = s & -s),
            (n = e & -e),
            r >= n || (r === 32 && (n & 4194048) !== 0))
          ? e
          : s
    );
  }
  function vi(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Vg(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function of() {
    var t = Ol;
    return ((Ol <<= 1), (Ol & 62914560) === 0 && (Ol = 4194304), t);
  }
  function bo(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function xi(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Rg(t, e, n, i, s, r) {
    var f = t.pendingLanes;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0));
    var m = t.entanglements,
      S = t.expirationTimes,
      N = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var z = 31 - ve(n),
        _ = 1 << z;
      ((m[z] = 0), (S[z] = -1));
      var j = N[z];
      if (j !== null)
        for (N[z] = null, z = 0; z < j.length; z++) {
          var C = j[z];
          C !== null && (C.lane &= -536870913);
        }
      n &= ~_;
    }
    (i !== 0 && uf(t, i, 0),
      r !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(f & ~e)));
  }
  function uf(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var i = 31 - ve(e);
    ((t.entangledLanes |= e),
      (t.entanglements[i] = t.entanglements[i] | 1073741824 | (n & 261930)));
  }
  function rf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var i = 31 - ve(n),
        s = 1 << i;
      ((s & e) | (t[i] & e) && (t[i] |= e), (n &= ~s));
    }
  }
  function cf(t, e) {
    var n = e & -e;
    return (
      (n = (n & 42) !== 0 ? 1 : So(n)),
      (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    );
  }
  function So(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function To(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ff() {
    var t = q.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Fm(t.type));
  }
  function df(t, e) {
    var n = q.p;
    try {
      return ((q.p = t), e());
    } finally {
      q.p = n;
    }
  }
  var Tn = Math.random().toString(36).slice(2),
    Pt = "__reactFiber$" + Tn,
    re = "__reactProps$" + Tn,
    Sa = "__reactContainer$" + Tn,
    Ao = "__reactEvents$" + Tn,
    wg = "__reactListeners$" + Tn,
    _g = "__reactHandles$" + Tn,
    hf = "__reactResources$" + Tn,
    bi = "__reactMarker$" + Tn;
  function Eo(t) {
    (delete t[Pt], delete t[re], delete t[Ao], delete t[wg], delete t[_g]);
  }
  function Ta(t) {
    var e = t[Pt];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Sa] || n[Pt])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = wm(t); t !== null; ) {
            if ((n = t[Pt])) return n;
            t = wm(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function Aa(t) {
    if ((t = t[Pt] || t[Sa])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Si(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(u(33));
  }
  function Ea(t) {
    var e = t[hf];
    return (
      e ||
        (e = t[hf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function kt(t) {
    t[bi] = !0;
  }
  var mf = new Set(),
    pf = {};
  function $n(t, e) {
    (Ma(t, e), Ma(t + "Capture", e));
  }
  function Ma(t, e) {
    for (pf[t] = e, t = 0; t < e.length; t++) mf.add(e[t]);
  }
  var Ug = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    yf = {},
    gf = {};
  function Bg(t) {
    return go.call(gf, t)
      ? !0
      : go.call(yf, t)
        ? !1
        : Ug.test(t)
          ? (gf[t] = !0)
          : ((yf[t] = !0), !1);
  }
  function Rl(t, e, n) {
    if (Bg(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var i = e.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function wl(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function en(t, e, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + i);
    }
  }
  function De(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function vf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Lg(t, e, n) {
    var i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var s = i.get,
        r = i.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (f) {
            ((n = "" + f), r.call(this, f));
          },
        }),
        Object.defineProperty(t, e, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (f) {
            n = "" + f;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function Mo(t) {
    if (!t._valueTracker) {
      var e = vf(t) ? "checked" : "value";
      t._valueTracker = Lg(t, e, "" + t[e]);
    }
  }
  function xf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      i = "";
    return (
      t && (i = vf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = i),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function _l(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Hg = /[\n"\\]/g;
  function Ne(t) {
    return t.replace(Hg, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Do(t, e, n, i, s, r, f, m) {
    ((t.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (t.type = f)
        : t.removeAttribute("type"),
      e != null
        ? f === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + De(e))
          : t.value !== "" + De(e) && (t.value = "" + De(e))
        : (f !== "submit" && f !== "reset") || t.removeAttribute("value"),
      e != null
        ? No(t, f, De(e))
        : n != null
          ? No(t, f, De(n))
          : i != null && t.removeAttribute("value"),
      s == null && r != null && (t.defaultChecked = !!r),
      s != null &&
        (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (t.name = "" + De(m))
        : t.removeAttribute("name"));
  }
  function bf(t, e, n, i, s, r, f, m) {
    if (
      (r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        typeof r != "boolean" &&
        (t.type = r),
      e != null || n != null)
    ) {
      if (!((r !== "submit" && r !== "reset") || e != null)) {
        Mo(t);
        return;
      }
      ((n = n != null ? "" + De(n) : ""),
        (e = e != null ? "" + De(e) : n),
        m || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((i = i ?? s),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (t.checked = m ? t.checked : !!i),
      (t.defaultChecked = !!i),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (t.name = f),
      Mo(t));
  }
  function No(t, e, n) {
    (e === "number" && _l(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Da(t, e, n, i) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        ((s = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== s && (t[n].selected = s),
          s && i && (t[n].defaultSelected = !0));
    } else {
      for (n = "" + De(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          ((t[s].selected = !0), i && (t[s].defaultSelected = !0));
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Sf(t, e, n) {
    if (
      e != null &&
      ((e = "" + De(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + De(n) : "";
  }
  function Tf(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(u(92));
        if (ue(i)) {
          if (1 < i.length) throw Error(u(93));
          i = i[0];
        }
        n = i;
      }
      (n == null && (n = ""), (e = n));
    }
    ((n = De(e)),
      (t.defaultValue = n),
      (i = t.textContent),
      i === n && i !== "" && i !== null && (t.value = i),
      Mo(t));
  }
  function Na(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var qg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Af(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? i
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : i
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || qg.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function Ef(t, e, n) {
    if (e != null && typeof e != "object") throw Error(u(62));
    if (((t = t.style), n != null)) {
      for (var i in n)
        !n.hasOwnProperty(i) ||
          (e != null && e.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? t.setProperty(i, "")
            : i === "float"
              ? (t.cssFloat = "")
              : (t[i] = ""));
      for (var s in e)
        ((i = e[s]), e.hasOwnProperty(s) && n[s] !== i && Af(t, s, i));
    } else for (var r in e) e.hasOwnProperty(r) && Af(t, r, e[r]);
  }
  function jo(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Yg = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Gg =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ul(t) {
    return Gg.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function nn() {}
  var Co = null;
  function zo(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var ja = null,
    Ca = null;
  function Mf(t) {
    var e = Aa(t);
    if (e && (t = e.stateNode)) {
      var n = t[re] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Do(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Ne("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var s = i[re] || null;
                if (!s) throw Error(u(90));
                Do(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name,
                );
              }
            }
            for (e = 0; e < n.length; e++)
              ((i = n[e]), i.form === t.form && xf(i));
          }
          break t;
        case "textarea":
          Sf(t, n.value, n.defaultValue);
          break t;
        case "select":
          ((e = n.value), e != null && Da(t, !!n.multiple, e, !1));
      }
    }
  }
  var Oo = !1;
  function Df(t, e, n) {
    if (Oo) return t(e, n);
    Oo = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (
        ((Oo = !1),
        (ja !== null || Ca !== null) &&
          (As(), ja && ((e = ja), (t = Ca), (Ca = ja = null), Mf(e), t)))
      )
        for (e = 0; e < t.length; e++) Mf(t[e]);
    }
  }
  function Ti(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = n[re] || null;
    if (i === null) return null;
    n = i[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((i = !i.disabled) ||
          ((t = t.type),
          (i = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !i));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(u(231, e, typeof n));
    return n;
  }
  var an = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Vo = !1;
  if (an)
    try {
      var Ai = {};
      (Object.defineProperty(Ai, "passive", {
        get: function () {
          Vo = !0;
        },
      }),
        window.addEventListener("test", Ai, Ai),
        window.removeEventListener("test", Ai, Ai));
    } catch {
      Vo = !1;
    }
  var An = null,
    Ro = null,
    Bl = null;
  function Nf() {
    if (Bl) return Bl;
    var t,
      e = Ro,
      n = e.length,
      i,
      s = "value" in An ? An.value : An.textContent,
      r = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var f = n - t;
    for (i = 1; i <= f && e[n - i] === s[r - i]; i++);
    return (Bl = s.slice(t, 1 < i ? 1 - i : void 0));
  }
  function Ll(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Hl() {
    return !0;
  }
  function jf() {
    return !1;
  }
  function ce(t) {
    function e(n, i, s, r, f) {
      ((this._reactName = n),
        (this._targetInst = s),
        (this.type = i),
        (this.nativeEvent = r),
        (this.target = f),
        (this.currentTarget = null));
      for (var m in t)
        t.hasOwnProperty(m) && ((n = t[m]), (this[m] = n ? n(r) : r[m]));
      return (
        (this.isDefaultPrevented = (
          r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1
        )
          ? Hl
          : jf),
        (this.isPropagationStopped = jf),
        this
      );
    }
    return (
      b(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Hl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Hl));
        },
        persist: function () {},
        isPersistent: Hl,
      }),
      e
    );
  }
  var In = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ql = ce(In),
    Ei = b({}, In, { view: 0, detail: 0 }),
    Xg = ce(Ei),
    wo,
    _o,
    Mi,
    Yl = b({}, Ei, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Bo,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Mi &&
              (Mi && t.type === "mousemove"
                ? ((wo = t.screenX - Mi.screenX), (_o = t.screenY - Mi.screenY))
                : (_o = wo = 0),
              (Mi = t)),
            wo);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : _o;
      },
    }),
    Cf = ce(Yl),
    Qg = b({}, Yl, { dataTransfer: 0 }),
    Zg = ce(Qg),
    Kg = b({}, Ei, { relatedTarget: 0 }),
    Uo = ce(Kg),
    kg = b({}, In, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Jg = ce(kg),
    Pg = b({}, In, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Fg = ce(Pg),
    Wg = b({}, In, { data: 0 }),
    zf = ce(Wg),
    $g = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Ig = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    tv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ev(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = tv[t])
        ? !!e[t]
        : !1;
  }
  function Bo() {
    return ev;
  }
  var nv = b({}, Ei, {
      key: function (t) {
        if (t.key) {
          var e = $g[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Ll(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? Ig[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Bo,
      charCode: function (t) {
        return t.type === "keypress" ? Ll(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Ll(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    av = ce(nv),
    iv = b({}, Yl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Of = ce(iv),
    lv = b({}, Ei, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Bo,
    }),
    sv = ce(lv),
    ov = b({}, In, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    uv = ce(ov),
    rv = b({}, Yl, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    cv = ce(rv),
    fv = b({}, In, { newState: 0, oldState: 0 }),
    dv = ce(fv),
    hv = [9, 13, 27, 32],
    Lo = an && "CompositionEvent" in window,
    Di = null;
  an && "documentMode" in document && (Di = document.documentMode);
  var mv = an && "TextEvent" in window && !Di,
    Vf = an && (!Lo || (Di && 8 < Di && 11 >= Di)),
    Rf = " ",
    wf = !1;
  function _f(t, e) {
    switch (t) {
      case "keyup":
        return hv.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Uf(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var za = !1;
  function pv(t, e) {
    switch (t) {
      case "compositionend":
        return Uf(e);
      case "keypress":
        return e.which !== 32 ? null : ((wf = !0), Rf);
      case "textInput":
        return ((t = e.data), t === Rf && wf ? null : t);
      default:
        return null;
    }
  }
  function yv(t, e) {
    if (za)
      return t === "compositionend" || (!Lo && _f(t, e))
        ? ((t = Nf()), (Bl = Ro = An = null), (za = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Vf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var gv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Bf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!gv[t.type] : e === "textarea";
  }
  function Lf(t, e, n, i) {
    (ja ? (Ca ? Ca.push(i) : (Ca = [i])) : (ja = i),
      (e = zs(e, "onChange")),
      0 < e.length &&
        ((n = new ql("onChange", "change", null, n, i)),
        t.push({ event: n, listeners: e })));
  }
  var Ni = null,
    ji = null;
  function vv(t) {
    bm(t, 0);
  }
  function Gl(t) {
    var e = Si(t);
    if (xf(e)) return t;
  }
  function Hf(t, e) {
    if (t === "change") return e;
  }
  var qf = !1;
  if (an) {
    var Ho;
    if (an) {
      var qo = "oninput" in document;
      if (!qo) {
        var Yf = document.createElement("div");
        (Yf.setAttribute("oninput", "return;"),
          (qo = typeof Yf.oninput == "function"));
      }
      Ho = qo;
    } else Ho = !1;
    qf = Ho && (!document.documentMode || 9 < document.documentMode);
  }
  function Gf() {
    Ni && (Ni.detachEvent("onpropertychange", Xf), (ji = Ni = null));
  }
  function Xf(t) {
    if (t.propertyName === "value" && Gl(ji)) {
      var e = [];
      (Lf(e, ji, t, zo(t)), Df(vv, e));
    }
  }
  function xv(t, e, n) {
    t === "focusin"
      ? (Gf(), (Ni = e), (ji = n), Ni.attachEvent("onpropertychange", Xf))
      : t === "focusout" && Gf();
  }
  function bv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Gl(ji);
  }
  function Sv(t, e) {
    if (t === "click") return Gl(e);
  }
  function Tv(t, e) {
    if (t === "input" || t === "change") return Gl(e);
  }
  function Av(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var xe = typeof Object.is == "function" ? Object.is : Av;
  function Ci(t, e) {
    if (xe(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var s = n[i];
      if (!go.call(e, s) || !xe(t[s], e[s])) return !1;
    }
    return !0;
  }
  function Qf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Zf(t, e) {
    var n = Qf(t);
    t = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (((i = t + n.textContent.length), t <= e && i >= e))
          return { node: n, offset: e - t };
        t = i;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Qf(n);
    }
  }
  function Kf(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Kf(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function kf(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = _l(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = _l(t.document);
    }
    return e;
  }
  function Yo(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Ev = an && "documentMode" in document && 11 >= document.documentMode,
    Oa = null,
    Go = null,
    zi = null,
    Xo = !1;
  function Jf(t, e, n) {
    var i =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Xo ||
      Oa == null ||
      Oa !== _l(i) ||
      ((i = Oa),
      "selectionStart" in i && Yo(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (zi && Ci(zi, i)) ||
        ((zi = i),
        (i = zs(Go, "onSelect")),
        0 < i.length &&
          ((e = new ql("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: i }),
          (e.target = Oa))));
  }
  function ta(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Va = {
      animationend: ta("Animation", "AnimationEnd"),
      animationiteration: ta("Animation", "AnimationIteration"),
      animationstart: ta("Animation", "AnimationStart"),
      transitionrun: ta("Transition", "TransitionRun"),
      transitionstart: ta("Transition", "TransitionStart"),
      transitioncancel: ta("Transition", "TransitionCancel"),
      transitionend: ta("Transition", "TransitionEnd"),
    },
    Qo = {},
    Pf = {};
  an &&
    ((Pf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Va.animationend.animation,
      delete Va.animationiteration.animation,
      delete Va.animationstart.animation),
    "TransitionEvent" in window || delete Va.transitionend.transition);
  function ea(t) {
    if (Qo[t]) return Qo[t];
    if (!Va[t]) return t;
    var e = Va[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in Pf) return (Qo[t] = e[n]);
    return t;
  }
  var Ff = ea("animationend"),
    Wf = ea("animationiteration"),
    $f = ea("animationstart"),
    Mv = ea("transitionrun"),
    Dv = ea("transitionstart"),
    Nv = ea("transitioncancel"),
    If = ea("transitionend"),
    td = new Map(),
    Zo =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Zo.push("scrollEnd");
  function qe(t, e) {
    (td.set(t, e), $n(e, [t]));
  }
  var Xl =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    je = [],
    Ra = 0,
    Ko = 0;
  function Ql() {
    for (var t = Ra, e = (Ko = Ra = 0); e < t; ) {
      var n = je[e];
      je[e++] = null;
      var i = je[e];
      je[e++] = null;
      var s = je[e];
      je[e++] = null;
      var r = je[e];
      if (((je[e++] = null), i !== null && s !== null)) {
        var f = i.pending;
        (f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)),
          (i.pending = s));
      }
      r !== 0 && ed(n, s, r);
    }
  }
  function Zl(t, e, n, i) {
    ((je[Ra++] = t),
      (je[Ra++] = e),
      (je[Ra++] = n),
      (je[Ra++] = i),
      (Ko |= i),
      (t.lanes |= i),
      (t = t.alternate),
      t !== null && (t.lanes |= i));
  }
  function ko(t, e, n, i) {
    return (Zl(t, e, n, i), Kl(t));
  }
  function na(t, e) {
    return (Zl(t, null, null, e), Kl(t));
  }
  function ed(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var s = !1, r = t.return; r !== null; )
      ((r.childLanes |= n),
        (i = r.alternate),
        i !== null && (i.childLanes |= n),
        r.tag === 22 &&
          ((t = r.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = r),
        (r = r.return));
    return t.tag === 3
      ? ((r = t.stateNode),
        s &&
          e !== null &&
          ((s = 31 - ve(n)),
          (t = r.hiddenUpdates),
          (i = t[s]),
          i === null ? (t[s] = [e]) : i.push(e),
          (e.lane = n | 536870912)),
        r)
      : null;
  }
  function Kl(t) {
    if (50 < $i) throw (($i = 0), (nr = null), Error(u(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var wa = {};
  function jv(t, e, n, i) {
    ((this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function be(t, e, n, i) {
    return new jv(t, e, n, i);
  }
  function Jo(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function ln(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = be(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function nd(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function kl(t, e, n, i, s, r) {
    var f = 0;
    if (((i = t), typeof t == "function")) Jo(t) && (f = 1);
    else if (typeof t == "string")
      f = R1(t, n, k.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case Mt:
          return (
            (t = be(31, n, e, s)),
            (t.elementType = Mt),
            (t.lanes = r),
            t
          );
        case L:
          return aa(n.children, s, r, e);
        case X:
          ((f = 8), (s |= 24));
          break;
        case H:
          return (
            (t = be(12, n, e, s | 2)),
            (t.elementType = H),
            (t.lanes = r),
            t
          );
        case F:
          return ((t = be(13, n, e, s)), (t.elementType = F), (t.lanes = r), t);
        case lt:
          return (
            (t = be(19, n, e, s)),
            (t.elementType = lt),
            (t.lanes = r),
            t
          );
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case B:
                f = 10;
                break t;
              case G:
                f = 9;
                break t;
              case P:
                f = 11;
                break t;
              case W:
                f = 14;
                break t;
              case et:
                ((f = 16), (i = null));
                break t;
            }
          ((f = 29),
            (n = Error(u(130, t === null ? "null" : typeof t, ""))),
            (i = null));
      }
    return (
      (e = be(f, n, e, s)),
      (e.elementType = t),
      (e.type = i),
      (e.lanes = r),
      e
    );
  }
  function aa(t, e, n, i) {
    return ((t = be(7, t, i, e)), (t.lanes = n), t);
  }
  function Po(t, e, n) {
    return ((t = be(6, t, null, e)), (t.lanes = n), t);
  }
  function ad(t) {
    var e = be(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function Fo(t, e, n) {
    return (
      (e = be(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var id = new WeakMap();
  function Ce(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = id.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: nf(e) }), id.set(t, e), e);
    }
    return { value: t, source: e, stack: nf(e) };
  }
  var _a = [],
    Ua = 0,
    Jl = null,
    Oi = 0,
    ze = [],
    Oe = 0,
    En = null,
    Je = 1,
    Pe = "";
  function sn(t, e) {
    ((_a[Ua++] = Oi), (_a[Ua++] = Jl), (Jl = t), (Oi = e));
  }
  function ld(t, e, n) {
    ((ze[Oe++] = Je), (ze[Oe++] = Pe), (ze[Oe++] = En), (En = t));
    var i = Je;
    t = Pe;
    var s = 32 - ve(i) - 1;
    ((i &= ~(1 << s)), (n += 1));
    var r = 32 - ve(e) + s;
    if (30 < r) {
      var f = s - (s % 5);
      ((r = (i & ((1 << f) - 1)).toString(32)),
        (i >>= f),
        (s -= f),
        (Je = (1 << (32 - ve(e) + s)) | (n << s) | i),
        (Pe = r + t));
    } else ((Je = (1 << r) | (n << s) | i), (Pe = t));
  }
  function Wo(t) {
    t.return !== null && (sn(t, 1), ld(t, 1, 0));
  }
  function $o(t) {
    for (; t === Jl; )
      ((Jl = _a[--Ua]), (_a[Ua] = null), (Oi = _a[--Ua]), (_a[Ua] = null));
    for (; t === En; )
      ((En = ze[--Oe]),
        (ze[Oe] = null),
        (Pe = ze[--Oe]),
        (ze[Oe] = null),
        (Je = ze[--Oe]),
        (ze[Oe] = null));
  }
  function sd(t, e) {
    ((ze[Oe++] = Je),
      (ze[Oe++] = Pe),
      (ze[Oe++] = En),
      (Je = e.id),
      (Pe = e.overflow),
      (En = t));
  }
  var Ft = null,
    Nt = null,
    mt = !1,
    Mn = null,
    Ve = !1,
    Io = Error(u(519));
  function Dn(t) {
    var e = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Vi(Ce(e, t)), Io);
  }
  function od(t) {
    var e = t.stateNode,
      n = t.type,
      i = t.memoizedProps;
    switch (((e[Pt] = t), (e[re] = i), n)) {
      case "dialog":
        (ct("cancel", e), ct("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        ct("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < tl.length; n++) ct(tl[n], e);
        break;
      case "source":
        ct("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (ct("error", e), ct("load", e));
        break;
      case "details":
        ct("toggle", e);
        break;
      case "input":
        (ct("invalid", e),
          bf(
            e,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0,
          ));
        break;
      case "select":
        ct("invalid", e);
        break;
      case "textarea":
        (ct("invalid", e), Tf(e, i.value, i.defaultValue, i.children));
    }
    ((n = i.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      i.suppressHydrationWarning === !0 ||
      Em(e.textContent, n)
        ? (i.popover != null && (ct("beforetoggle", e), ct("toggle", e)),
          i.onScroll != null && ct("scroll", e),
          i.onScrollEnd != null && ct("scrollend", e),
          i.onClick != null && (e.onclick = nn),
          (e = !0))
        : (e = !1),
      e || Dn(t, !0));
  }
  function ud(t) {
    for (Ft = t.return; Ft; )
      switch (Ft.tag) {
        case 5:
        case 31:
        case 13:
          Ve = !1;
          return;
        case 27:
        case 3:
          Ve = !0;
          return;
        default:
          Ft = Ft.return;
      }
  }
  function Ba(t) {
    if (t !== Ft) return !1;
    if (!mt) return (ud(t), (mt = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || gr(t.type, t.memoizedProps))),
        (n = !n)),
      n && Nt && Dn(t),
      ud(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(u(317));
      Nt = Rm(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(u(317));
      Nt = Rm(t);
    } else
      e === 27
        ? ((e = Nt), qn(t.type) ? ((t = Tr), (Tr = null), (Nt = t)) : (Nt = e))
        : (Nt = Ft ? we(t.stateNode.nextSibling) : null);
    return !0;
  }
  function ia() {
    ((Nt = Ft = null), (mt = !1));
  }
  function tu() {
    var t = Mn;
    return (
      t !== null &&
        (me === null ? (me = t) : me.push.apply(me, t), (Mn = null)),
      t
    );
  }
  function Vi(t) {
    Mn === null ? (Mn = [t]) : Mn.push(t);
  }
  var eu = A(null),
    la = null,
    on = null;
  function Nn(t, e, n) {
    (Y(eu, e._currentValue), (e._currentValue = n));
  }
  function un(t) {
    ((t._currentValue = eu.current), U(eu));
  }
  function nu(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
          : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function au(t, e, n, i) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var f = s.child;
        r = r.firstContext;
        t: for (; r !== null; ) {
          var m = r;
          r = s;
          for (var S = 0; S < e.length; S++)
            if (m.context === e[S]) {
              ((r.lanes |= n),
                (m = r.alternate),
                m !== null && (m.lanes |= n),
                nu(r.return, n, t),
                i || (f = null));
              break t;
            }
          r = m.next;
        }
      } else if (s.tag === 18) {
        if (((f = s.return), f === null)) throw Error(u(341));
        ((f.lanes |= n),
          (r = f.alternate),
          r !== null && (r.lanes |= n),
          nu(f, n, t),
          (f = null));
      } else f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (((s = f.sibling), s !== null)) {
            ((s.return = f.return), (f = s));
            break;
          }
          f = f.return;
        }
      s = f;
    }
  }
  function La(t, e, n, i) {
    t = null;
    for (var s = e, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(u(387));
        if (((f = f.memoizedProps), f !== null)) {
          var m = s.type;
          xe(s.pendingProps.value, f.value) ||
            (t !== null ? t.push(m) : (t = [m]));
        }
      } else if (s === vt.current) {
        if (((f = s.alternate), f === null)) throw Error(u(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(ll) : (t = [ll]));
      }
      s = s.return;
    }
    (t !== null && au(e, t, n, i), (e.flags |= 262144));
  }
  function Pl(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!xe(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function sa(t) {
    ((la = t),
      (on = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function Wt(t) {
    return rd(la, t);
  }
  function Fl(t, e) {
    return (la === null && sa(t), rd(t, e));
  }
  function rd(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), on === null)) {
      if (t === null) throw Error(u(308));
      ((on = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else on = on.next = e;
    return n;
  }
  var Cv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, i) {
                  t.push(i);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                }));
            };
          },
    zv = a.unstable_scheduleCallback,
    Ov = a.unstable_NormalPriority,
    Lt = {
      $$typeof: B,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function iu() {
    return { controller: new Cv(), data: new Map(), refCount: 0 };
  }
  function Ri(t) {
    (t.refCount--,
      t.refCount === 0 &&
        zv(Ov, function () {
          t.controller.abort();
        }));
  }
  var wi = null,
    lu = 0,
    Ha = 0,
    qa = null;
  function Vv(t, e) {
    if (wi === null) {
      var n = (wi = []);
      ((lu = 0),
        (Ha = ur()),
        (qa = {
          status: "pending",
          value: void 0,
          then: function (i) {
            n.push(i);
          },
        }));
    }
    return (lu++, e.then(cd, cd), e);
  }
  function cd() {
    if (--lu === 0 && wi !== null) {
      qa !== null && (qa.status = "fulfilled");
      var t = wi;
      ((wi = null), (Ha = 0), (qa = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Rv(t, e) {
    var n = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      t.then(
        function () {
          ((i.status = "fulfilled"), (i.value = e));
          for (var s = 0; s < n.length; s++) (0, n[s])(e);
        },
        function (s) {
          for (i.status = "rejected", i.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        },
      ),
      i
    );
  }
  var fd = O.S;
  O.S = function (t, e) {
    ((Jh = ye()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        Vv(t, e),
      fd !== null && fd(t, e));
  };
  var oa = A(null);
  function su() {
    var t = oa.current;
    return t !== null ? t : Et.pooledCache;
  }
  function Wl(t, e) {
    e === null ? Y(oa, oa.current) : Y(oa, e.pool);
  }
  function dd() {
    var t = su();
    return t === null ? null : { parent: Lt._currentValue, pool: t };
  }
  var Ya = Error(u(460)),
    ou = Error(u(474)),
    $l = Error(u(542)),
    Il = { then: function () {} };
  function hd(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function md(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(nn, nn), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), yd(t), t);
      default:
        if (typeof e.status == "string") e.then(nn, nn);
        else {
          if (((t = Et), t !== null && 100 < t.shellSuspendCounter))
            throw Error(u(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "fulfilled"), (s.value = i));
                }
              },
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "rejected"), (s.reason = i));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), yd(t), t);
        }
        throw ((ra = e), Ya);
    }
  }
  function ua(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((ra = n), Ya)
        : n;
    }
  }
  var ra = null;
  function pd() {
    if (ra === null) throw Error(u(459));
    var t = ra;
    return ((ra = null), t);
  }
  function yd(t) {
    if (t === Ya || t === $l) throw Error(u(483));
  }
  var Ga = null,
    _i = 0;
  function ts(t) {
    var e = _i;
    return ((_i += 1), Ga === null && (Ga = []), md(Ga, t, e));
  }
  function Ui(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function es(t, e) {
    throw e.$$typeof === E
      ? Error(u(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          u(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function gd(t) {
    function e(M, T) {
      if (t) {
        var D = M.deletions;
        D === null ? ((M.deletions = [T]), (M.flags |= 16)) : D.push(T);
      }
    }
    function n(M, T) {
      if (!t) return null;
      for (; T !== null; ) (e(M, T), (T = T.sibling));
      return null;
    }
    function i(M) {
      for (var T = new Map(); M !== null; )
        (M.key !== null ? T.set(M.key, M) : T.set(M.index, M), (M = M.sibling));
      return T;
    }
    function s(M, T) {
      return ((M = ln(M, T)), (M.index = 0), (M.sibling = null), M);
    }
    function r(M, T, D) {
      return (
        (M.index = D),
        t
          ? ((D = M.alternate),
            D !== null
              ? ((D = D.index), D < T ? ((M.flags |= 67108866), T) : D)
              : ((M.flags |= 67108866), T))
          : ((M.flags |= 1048576), T)
      );
    }
    function f(M) {
      return (t && M.alternate === null && (M.flags |= 67108866), M);
    }
    function m(M, T, D, R) {
      return T === null || T.tag !== 6
        ? ((T = Po(D, M.mode, R)), (T.return = M), T)
        : ((T = s(T, D)), (T.return = M), T);
    }
    function S(M, T, D, R) {
      var $ = D.type;
      return $ === L
        ? z(M, T, D.props.children, R, D.key)
        : T !== null &&
            (T.elementType === $ ||
              (typeof $ == "object" &&
                $ !== null &&
                $.$$typeof === et &&
                ua($) === T.type))
          ? ((T = s(T, D.props)), Ui(T, D), (T.return = M), T)
          : ((T = kl(D.type, D.key, D.props, null, M.mode, R)),
            Ui(T, D),
            (T.return = M),
            T);
    }
    function N(M, T, D, R) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== D.containerInfo ||
        T.stateNode.implementation !== D.implementation
        ? ((T = Fo(D, M.mode, R)), (T.return = M), T)
        : ((T = s(T, D.children || [])), (T.return = M), T);
    }
    function z(M, T, D, R, $) {
      return T === null || T.tag !== 7
        ? ((T = aa(D, M.mode, R, $)), (T.return = M), T)
        : ((T = s(T, D)), (T.return = M), T);
    }
    function _(M, T, D) {
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return ((T = Po("" + T, M.mode, D)), (T.return = M), T);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case V:
            return (
              (D = kl(T.type, T.key, T.props, null, M.mode, D)),
              Ui(D, T),
              (D.return = M),
              D
            );
          case w:
            return ((T = Fo(T, M.mode, D)), (T.return = M), T);
          case et:
            return ((T = ua(T)), _(M, T, D));
        }
        if (ue(T) || Bt(T))
          return ((T = aa(T, M.mode, D, null)), (T.return = M), T);
        if (typeof T.then == "function") return _(M, ts(T), D);
        if (T.$$typeof === B) return _(M, Fl(M, T), D);
        es(M, T);
      }
      return null;
    }
    function j(M, T, D, R) {
      var $ = T !== null ? T.key : null;
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return $ !== null ? null : m(M, T, "" + D, R);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case V:
            return D.key === $ ? S(M, T, D, R) : null;
          case w:
            return D.key === $ ? N(M, T, D, R) : null;
          case et:
            return ((D = ua(D)), j(M, T, D, R));
        }
        if (ue(D) || Bt(D)) return $ !== null ? null : z(M, T, D, R, null);
        if (typeof D.then == "function") return j(M, T, ts(D), R);
        if (D.$$typeof === B) return j(M, T, Fl(M, D), R);
        es(M, D);
      }
      return null;
    }
    function C(M, T, D, R, $) {
      if (
        (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
      )
        return ((M = M.get(D) || null), m(T, M, "" + R, $));
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case V:
            return (
              (M = M.get(R.key === null ? D : R.key) || null),
              S(T, M, R, $)
            );
          case w:
            return (
              (M = M.get(R.key === null ? D : R.key) || null),
              N(T, M, R, $)
            );
          case et:
            return ((R = ua(R)), C(M, T, D, R, $));
        }
        if (ue(R) || Bt(R))
          return ((M = M.get(D) || null), z(T, M, R, $, null));
        if (typeof R.then == "function") return C(M, T, D, ts(R), $);
        if (R.$$typeof === B) return C(M, T, D, Fl(T, R), $);
        es(T, R);
      }
      return null;
    }
    function Z(M, T, D, R) {
      for (
        var $ = null, pt = null, J = T, ot = (T = 0), dt = null;
        J !== null && ot < D.length;
        ot++
      ) {
        J.index > ot ? ((dt = J), (J = null)) : (dt = J.sibling);
        var yt = j(M, J, D[ot], R);
        if (yt === null) {
          J === null && (J = dt);
          break;
        }
        (t && J && yt.alternate === null && e(M, J),
          (T = r(yt, T, ot)),
          pt === null ? ($ = yt) : (pt.sibling = yt),
          (pt = yt),
          (J = dt));
      }
      if (ot === D.length) return (n(M, J), mt && sn(M, ot), $);
      if (J === null) {
        for (; ot < D.length; ot++)
          ((J = _(M, D[ot], R)),
            J !== null &&
              ((T = r(J, T, ot)),
              pt === null ? ($ = J) : (pt.sibling = J),
              (pt = J)));
        return (mt && sn(M, ot), $);
      }
      for (J = i(J); ot < D.length; ot++)
        ((dt = C(J, M, ot, D[ot], R)),
          dt !== null &&
            (t &&
              dt.alternate !== null &&
              J.delete(dt.key === null ? ot : dt.key),
            (T = r(dt, T, ot)),
            pt === null ? ($ = dt) : (pt.sibling = dt),
            (pt = dt)));
      return (
        t &&
          J.forEach(function (Zn) {
            return e(M, Zn);
          }),
        mt && sn(M, ot),
        $
      );
    }
    function tt(M, T, D, R) {
      if (D == null) throw Error(u(151));
      for (
        var $ = null, pt = null, J = T, ot = (T = 0), dt = null, yt = D.next();
        J !== null && !yt.done;
        ot++, yt = D.next()
      ) {
        J.index > ot ? ((dt = J), (J = null)) : (dt = J.sibling);
        var Zn = j(M, J, yt.value, R);
        if (Zn === null) {
          J === null && (J = dt);
          break;
        }
        (t && J && Zn.alternate === null && e(M, J),
          (T = r(Zn, T, ot)),
          pt === null ? ($ = Zn) : (pt.sibling = Zn),
          (pt = Zn),
          (J = dt));
      }
      if (yt.done) return (n(M, J), mt && sn(M, ot), $);
      if (J === null) {
        for (; !yt.done; ot++, yt = D.next())
          ((yt = _(M, yt.value, R)),
            yt !== null &&
              ((T = r(yt, T, ot)),
              pt === null ? ($ = yt) : (pt.sibling = yt),
              (pt = yt)));
        return (mt && sn(M, ot), $);
      }
      for (J = i(J); !yt.done; ot++, yt = D.next())
        ((yt = C(J, M, ot, yt.value, R)),
          yt !== null &&
            (t &&
              yt.alternate !== null &&
              J.delete(yt.key === null ? ot : yt.key),
            (T = r(yt, T, ot)),
            pt === null ? ($ = yt) : (pt.sibling = yt),
            (pt = yt)));
      return (
        t &&
          J.forEach(function (Q1) {
            return e(M, Q1);
          }),
        mt && sn(M, ot),
        $
      );
    }
    function At(M, T, D, R) {
      if (
        (typeof D == "object" &&
          D !== null &&
          D.type === L &&
          D.key === null &&
          (D = D.props.children),
        typeof D == "object" && D !== null)
      ) {
        switch (D.$$typeof) {
          case V:
            t: {
              for (var $ = D.key; T !== null; ) {
                if (T.key === $) {
                  if ((($ = D.type), $ === L)) {
                    if (T.tag === 7) {
                      (n(M, T.sibling),
                        (R = s(T, D.props.children)),
                        (R.return = M),
                        (M = R));
                      break t;
                    }
                  } else if (
                    T.elementType === $ ||
                    (typeof $ == "object" &&
                      $ !== null &&
                      $.$$typeof === et &&
                      ua($) === T.type)
                  ) {
                    (n(M, T.sibling),
                      (R = s(T, D.props)),
                      Ui(R, D),
                      (R.return = M),
                      (M = R));
                    break t;
                  }
                  n(M, T);
                  break;
                } else e(M, T);
                T = T.sibling;
              }
              D.type === L
                ? ((R = aa(D.props.children, M.mode, R, D.key)),
                  (R.return = M),
                  (M = R))
                : ((R = kl(D.type, D.key, D.props, null, M.mode, R)),
                  Ui(R, D),
                  (R.return = M),
                  (M = R));
            }
            return f(M);
          case w:
            t: {
              for ($ = D.key; T !== null; ) {
                if (T.key === $)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === D.containerInfo &&
                    T.stateNode.implementation === D.implementation
                  ) {
                    (n(M, T.sibling),
                      (R = s(T, D.children || [])),
                      (R.return = M),
                      (M = R));
                    break t;
                  } else {
                    n(M, T);
                    break;
                  }
                else e(M, T);
                T = T.sibling;
              }
              ((R = Fo(D, M.mode, R)), (R.return = M), (M = R));
            }
            return f(M);
          case et:
            return ((D = ua(D)), At(M, T, D, R));
        }
        if (ue(D)) return Z(M, T, D, R);
        if (Bt(D)) {
          if ((($ = Bt(D)), typeof $ != "function")) throw Error(u(150));
          return ((D = $.call(D)), tt(M, T, D, R));
        }
        if (typeof D.then == "function") return At(M, T, ts(D), R);
        if (D.$$typeof === B) return At(M, T, Fl(M, D), R);
        es(M, D);
      }
      return (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
        ? ((D = "" + D),
          T !== null && T.tag === 6
            ? (n(M, T.sibling), (R = s(T, D)), (R.return = M), (M = R))
            : (n(M, T), (R = Po(D, M.mode, R)), (R.return = M), (M = R)),
          f(M))
        : n(M, T);
    }
    return function (M, T, D, R) {
      try {
        _i = 0;
        var $ = At(M, T, D, R);
        return ((Ga = null), $);
      } catch (J) {
        if (J === Ya || J === $l) throw J;
        var pt = be(29, J, null, M.mode);
        return ((pt.lanes = R), (pt.return = M), pt);
      }
    };
  }
  var ca = gd(!0),
    vd = gd(!1),
    jn = !1;
  function uu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function ru(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function Cn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function zn(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (gt & 2) !== 0)) {
      var s = i.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (i.pending = e),
        (e = Kl(t)),
        ed(t, null, n),
        e
      );
    }
    return (Zl(t, i, e, n), Kl(t));
  }
  function Bi(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var i = e.lanes;
      ((i &= t.pendingLanes), (n |= i), (e.lanes = n), rf(t, n));
    }
  }
  function cu(t, e) {
    var n = t.updateQueue,
      i = t.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
      var s = null,
        r = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (r === null ? (s = r = f) : (r = r.next = f), (n = n.next));
        } while (n !== null);
        r === null ? (s = r = e) : (r = r.next = e);
      } else s = r = e;
      ((n = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (t.updateQueue = n));
      return;
    }
    ((t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e));
  }
  var fu = !1;
  function Li() {
    if (fu) {
      var t = qa;
      if (t !== null) throw t;
    }
  }
  function Hi(t, e, n, i) {
    fu = !1;
    var s = t.updateQueue;
    jn = !1;
    var r = s.firstBaseUpdate,
      f = s.lastBaseUpdate,
      m = s.shared.pending;
    if (m !== null) {
      s.shared.pending = null;
      var S = m,
        N = S.next;
      ((S.next = null), f === null ? (r = N) : (f.next = N), (f = S));
      var z = t.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (m = z.lastBaseUpdate),
        m !== f &&
          (m === null ? (z.firstBaseUpdate = N) : (m.next = N),
          (z.lastBaseUpdate = S)));
    }
    if (r !== null) {
      var _ = s.baseState;
      ((f = 0), (z = N = S = null), (m = r));
      do {
        var j = m.lane & -536870913,
          C = j !== m.lane;
        if (C ? (ft & j) === j : (i & j) === j) {
          (j !== 0 && j === Ha && (fu = !0),
            z !== null &&
              (z = z.next =
                {
                  lane: 0,
                  tag: m.tag,
                  payload: m.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var Z = t,
              tt = m;
            j = e;
            var At = n;
            switch (tt.tag) {
              case 1:
                if (((Z = tt.payload), typeof Z == "function")) {
                  _ = Z.call(At, _, j);
                  break t;
                }
                _ = Z;
                break t;
              case 3:
                Z.flags = (Z.flags & -65537) | 128;
              case 0:
                if (
                  ((Z = tt.payload),
                  (j = typeof Z == "function" ? Z.call(At, _, j) : Z),
                  j == null)
                )
                  break t;
                _ = b({}, _, j);
                break t;
              case 2:
                jn = !0;
            }
          }
          ((j = m.callback),
            j !== null &&
              ((t.flags |= 64),
              C && (t.flags |= 8192),
              (C = s.callbacks),
              C === null ? (s.callbacks = [j]) : C.push(j)));
        } else
          ((C = {
            lane: j,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null,
          }),
            z === null ? ((N = z = C), (S = _)) : (z = z.next = C),
            (f |= j));
        if (((m = m.next), m === null)) {
          if (((m = s.shared.pending), m === null)) break;
          ((C = m),
            (m = C.next),
            (C.next = null),
            (s.lastBaseUpdate = C),
            (s.shared.pending = null));
        }
      } while (!0);
      (z === null && (S = _),
        (s.baseState = S),
        (s.firstBaseUpdate = N),
        (s.lastBaseUpdate = z),
        r === null && (s.shared.lanes = 0),
        (_n |= f),
        (t.lanes = f),
        (t.memoizedState = _));
    }
  }
  function xd(t, e) {
    if (typeof t != "function") throw Error(u(191, t));
    t.call(e);
  }
  function bd(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) xd(n[t], e);
  }
  var Xa = A(null),
    ns = A(0);
  function Sd(t, e) {
    ((t = gn), Y(ns, t), Y(Xa, e), (gn = t | e.baseLanes));
  }
  function du() {
    (Y(ns, gn), Y(Xa, Xa.current));
  }
  function hu() {
    ((gn = ns.current), U(Xa), U(ns));
  }
  var Se = A(null),
    Re = null;
  function On(t) {
    var e = t.alternate;
    (Y(_t, _t.current & 1),
      Y(Se, t),
      Re === null &&
        (e === null || Xa.current !== null || e.memoizedState !== null) &&
        (Re = t));
  }
  function mu(t) {
    (Y(_t, _t.current), Y(Se, t), Re === null && (Re = t));
  }
  function Td(t) {
    t.tag === 22
      ? (Y(_t, _t.current), Y(Se, t), Re === null && (Re = t))
      : Vn();
  }
  function Vn() {
    (Y(_t, _t.current), Y(Se, Se.current));
  }
  function Te(t) {
    (U(Se), Re === t && (Re = null), U(_t));
  }
  var _t = A(0);
  function as(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || br(n) || Sr(n)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var rn = 0,
    it = null,
    St = null,
    Ht = null,
    is = !1,
    Qa = !1,
    fa = !1,
    ls = 0,
    qi = 0,
    Za = null,
    wv = 0;
  function Ot() {
    throw Error(u(321));
  }
  function pu(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!xe(t[n], e[n])) return !1;
    return !0;
  }
  function yu(t, e, n, i, s, r) {
    return (
      (rn = r),
      (it = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (O.H = t === null || t.memoizedState === null ? lh : Ou),
      (fa = !1),
      (r = n(i, s)),
      (fa = !1),
      Qa && (r = Ed(e, n, i, s)),
      Ad(t),
      r
    );
  }
  function Ad(t) {
    O.H = Xi;
    var e = St !== null && St.next !== null;
    if (((rn = 0), (Ht = St = it = null), (is = !1), (qi = 0), (Za = null), e))
      throw Error(u(300));
    t === null ||
      qt ||
      ((t = t.dependencies), t !== null && Pl(t) && (qt = !0));
  }
  function Ed(t, e, n, i) {
    it = t;
    var s = 0;
    do {
      if ((Qa && (Za = null), (qi = 0), (Qa = !1), 25 <= s))
        throw Error(u(301));
      if (((s += 1), (Ht = St = null), t.updateQueue != null)) {
        var r = t.updateQueue;
        ((r.lastEffect = null),
          (r.events = null),
          (r.stores = null),
          r.memoCache != null && (r.memoCache.index = 0));
      }
      ((O.H = sh), (r = e(n, i)));
    } while (Qa);
    return r;
  }
  function _v() {
    var t = O.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Yi(e) : e),
      (t = t.useState()[0]),
      (St !== null ? St.memoizedState : null) !== t && (it.flags |= 1024),
      e
    );
  }
  function gu() {
    var t = ls !== 0;
    return ((ls = 0), t);
  }
  function vu(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function xu(t) {
    if (is) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      is = !1;
    }
    ((rn = 0), (Ht = St = it = null), (Qa = !1), (qi = ls = 0), (Za = null));
  }
  function ie() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ht === null ? (it.memoizedState = Ht = t) : (Ht = Ht.next = t), Ht);
  }
  function Ut() {
    if (St === null) {
      var t = it.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = St.next;
    var e = Ht === null ? it.memoizedState : Ht.next;
    if (e !== null) ((Ht = e), (St = t));
    else {
      if (t === null)
        throw it.alternate === null ? Error(u(467)) : Error(u(310));
      ((St = t),
        (t = {
          memoizedState: St.memoizedState,
          baseState: St.baseState,
          baseQueue: St.baseQueue,
          queue: St.queue,
          next: null,
        }),
        Ht === null ? (it.memoizedState = Ht = t) : (Ht = Ht.next = t));
    }
    return Ht;
  }
  function ss() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Yi(t) {
    var e = qi;
    return (
      (qi += 1),
      Za === null && (Za = []),
      (t = md(Za, t, e)),
      (e = it),
      (Ht === null ? e.memoizedState : Ht.next) === null &&
        ((e = e.alternate),
        (O.H = e === null || e.memoizedState === null ? lh : Ou)),
      t
    );
  }
  function os(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Yi(t);
      if (t.$$typeof === B) return Wt(t);
    }
    throw Error(u(438, String(t)));
  }
  function bu(t) {
    var e = null,
      n = it.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var i = it.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (e = {
              data: i.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = ss()), (it.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), i = 0; i < t; i++) n[i] = Xt;
    return (e.index++, n);
  }
  function cn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function us(t) {
    var e = Ut();
    return Su(e, St, t);
  }
  function Su(t, e, n) {
    var i = t.queue;
    if (i === null) throw Error(u(311));
    i.lastRenderedReducer = n;
    var s = t.baseQueue,
      r = i.pending;
    if (r !== null) {
      if (s !== null) {
        var f = s.next;
        ((s.next = r.next), (r.next = f));
      }
      ((e.baseQueue = s = r), (i.pending = null));
    }
    if (((r = t.baseState), s === null)) t.memoizedState = r;
    else {
      e = s.next;
      var m = (f = null),
        S = null,
        N = e,
        z = !1;
      do {
        var _ = N.lane & -536870913;
        if (_ !== N.lane ? (ft & _) === _ : (rn & _) === _) {
          var j = N.revertLane;
          if (j === 0)
            (S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: N.action,
                  hasEagerState: N.hasEagerState,
                  eagerState: N.eagerState,
                  next: null,
                }),
              _ === Ha && (z = !0));
          else if ((rn & j) === j) {
            ((N = N.next), j === Ha && (z = !0));
            continue;
          } else
            ((_ = {
              lane: 0,
              revertLane: N.revertLane,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null,
            }),
              S === null ? ((m = S = _), (f = r)) : (S = S.next = _),
              (it.lanes |= j),
              (_n |= j));
          ((_ = N.action),
            fa && n(r, _),
            (r = N.hasEagerState ? N.eagerState : n(r, _)));
        } else
          ((j = {
            lane: _,
            revertLane: N.revertLane,
            gesture: N.gesture,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null,
          }),
            S === null ? ((m = S = j), (f = r)) : (S = S.next = j),
            (it.lanes |= _),
            (_n |= _));
        N = N.next;
      } while (N !== null && N !== e);
      if (
        (S === null ? (f = r) : (S.next = m),
        !xe(r, t.memoizedState) && ((qt = !0), z && ((n = qa), n !== null)))
      )
        throw n;
      ((t.memoizedState = r),
        (t.baseState = f),
        (t.baseQueue = S),
        (i.lastRenderedState = r));
    }
    return (s === null && (i.lanes = 0), [t.memoizedState, i.dispatch]);
  }
  function Tu(t) {
    var e = Ut(),
      n = e.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch,
      s = n.pending,
      r = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = (s = s.next);
      do ((r = t(r, f.action)), (f = f.next));
      while (f !== s);
      (xe(r, e.memoizedState) || (qt = !0),
        (e.memoizedState = r),
        e.baseQueue === null && (e.baseState = r),
        (n.lastRenderedState = r));
    }
    return [r, i];
  }
  function Md(t, e, n) {
    var i = it,
      s = Ut(),
      r = mt;
    if (r) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else n = e();
    var f = !xe((St || s).memoizedState, n);
    if (
      (f && ((s.memoizedState = n), (qt = !0)),
      (s = s.queue),
      Mu(jd.bind(null, i, s, t), [t]),
      s.getSnapshot !== e || f || (Ht !== null && Ht.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        Ka(9, { destroy: void 0 }, Nd.bind(null, i, s, n, e), null),
        Et === null)
      )
        throw Error(u(349));
      r || (rn & 127) !== 0 || Dd(i, e, n);
    }
    return n;
  }
  function Dd(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = it.updateQueue),
      e === null
        ? ((e = ss()), (it.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function Nd(t, e, n, i) {
    ((e.value = n), (e.getSnapshot = i), Cd(e) && zd(t));
  }
  function jd(t, e, n) {
    return n(function () {
      Cd(e) && zd(t);
    });
  }
  function Cd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !xe(t, n);
    } catch {
      return !0;
    }
  }
  function zd(t) {
    var e = na(t, 2);
    e !== null && pe(e, t, 2);
  }
  function Au(t) {
    var e = ie();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), fa)) {
        Sn(!0);
        try {
          n();
        } finally {
          Sn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Od(t, e, n, i) {
    return ((t.baseState = n), Su(t, St, typeof i == "function" ? i : cn));
  }
  function Uv(t, e, n, i, s) {
    if (fs(t)) throw Error(u(485));
    if (((t = e.action), t !== null)) {
      var r = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          r.listeners.push(f);
        },
      };
      (O.T !== null ? n(!0) : (r.isTransition = !1),
        i(r),
        (n = e.pending),
        n === null
          ? ((r.next = e.pending = r), Vd(e, r))
          : ((r.next = n.next), (e.pending = n.next = r)));
    }
  }
  function Vd(t, e) {
    var n = e.action,
      i = e.payload,
      s = t.state;
    if (e.isTransition) {
      var r = O.T,
        f = {};
      O.T = f;
      try {
        var m = n(s, i),
          S = O.S;
        (S !== null && S(f, m), Rd(t, e, m));
      } catch (N) {
        Eu(t, e, N);
      } finally {
        (r !== null && f.types !== null && (r.types = f.types), (O.T = r));
      }
    } else
      try {
        ((r = n(s, i)), Rd(t, e, r));
      } catch (N) {
        Eu(t, e, N);
      }
  }
  function Rd(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (i) {
            wd(t, e, i);
          },
          function (i) {
            return Eu(t, e, i);
          },
        )
      : wd(t, e, n);
  }
  function wd(t, e, n) {
    ((e.status = "fulfilled"),
      (e.value = n),
      _d(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Vd(t, n))));
  }
  function Eu(t, e, n) {
    var i = t.pending;
    if (((t.pending = null), i !== null)) {
      i = i.next;
      do ((e.status = "rejected"), (e.reason = n), _d(e), (e = e.next));
      while (e !== i);
    }
    t.action = null;
  }
  function _d(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Ud(t, e) {
    return e;
  }
  function Bd(t, e) {
    if (mt) {
      var n = Et.formState;
      if (n !== null) {
        t: {
          var i = it;
          if (mt) {
            if (Nt) {
              e: {
                for (var s = Nt, r = Ve; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break e;
                  }
                  if (((s = we(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                ((r = s.data), (s = r === "F!" || r === "F" ? s : null));
              }
              if (s) {
                ((Nt = we(s.nextSibling)), (i = s.data === "F!"));
                break t;
              }
            }
            Dn(i);
          }
          i = !1;
        }
        i && (e = n[0]);
      }
    }
    return (
      (n = ie()),
      (n.memoizedState = n.baseState = e),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ud,
        lastRenderedState: e,
      }),
      (n.queue = i),
      (n = nh.bind(null, it, i)),
      (i.dispatch = n),
      (i = Au(!1)),
      (r = zu.bind(null, it, !1, i.queue)),
      (i = ie()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (i.queue = s),
      (n = Uv.bind(null, it, s, r, n)),
      (s.dispatch = n),
      (i.memoizedState = t),
      [e, n, !1]
    );
  }
  function Ld(t) {
    var e = Ut();
    return Hd(e, St, t);
  }
  function Hd(t, e, n) {
    if (
      ((e = Su(t, e, Ud)[0]),
      (t = us(cn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var i = Yi(e);
      } catch (f) {
        throw f === Ya ? $l : f;
      }
    else i = e;
    e = Ut();
    var s = e.queue,
      r = s.dispatch;
    return (
      n !== e.memoizedState &&
        ((it.flags |= 2048),
        Ka(9, { destroy: void 0 }, Bv.bind(null, s, n), null)),
      [i, r, t]
    );
  }
  function Bv(t, e) {
    t.action = e;
  }
  function qd(t) {
    var e = Ut(),
      n = St;
    if (n !== null) return Hd(e, n, t);
    (Ut(), (e = e.memoizedState), (n = Ut()));
    var i = n.queue.dispatch;
    return ((n.memoizedState = t), [e, i, !1]);
  }
  function Ka(t, e, n, i) {
    return (
      (t = { tag: t, create: n, deps: i, inst: e, next: null }),
      (e = it.updateQueue),
      e === null && ((e = ss()), (it.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t)),
      t
    );
  }
  function Yd() {
    return Ut().memoizedState;
  }
  function rs(t, e, n, i) {
    var s = ie();
    ((it.flags |= t),
      (s.memoizedState = Ka(
        1 | e,
        { destroy: void 0 },
        n,
        i === void 0 ? null : i,
      )));
  }
  function cs(t, e, n, i) {
    var s = Ut();
    i = i === void 0 ? null : i;
    var r = s.memoizedState.inst;
    St !== null && i !== null && pu(i, St.memoizedState.deps)
      ? (s.memoizedState = Ka(e, r, n, i))
      : ((it.flags |= t), (s.memoizedState = Ka(1 | e, r, n, i)));
  }
  function Gd(t, e) {
    rs(8390656, 8, t, e);
  }
  function Mu(t, e) {
    cs(2048, 8, t, e);
  }
  function Lv(t) {
    it.flags |= 4;
    var e = it.updateQueue;
    if (e === null) ((e = ss()), (it.updateQueue = e), (e.events = [t]));
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function Xd(t) {
    var e = Ut().memoizedState;
    return (
      Lv({ ref: e, nextImpl: t }),
      function () {
        if ((gt & 2) !== 0) throw Error(u(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function Qd(t, e) {
    return cs(4, 2, t, e);
  }
  function Zd(t, e) {
    return cs(4, 4, t, e);
  }
  function Kd(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function kd(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), cs(4, 4, Kd.bind(null, e, t), n));
  }
  function Du() {}
  function Jd(t, e) {
    var n = Ut();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && pu(e, i[1]) ? i[0] : ((n.memoizedState = [t, e]), t);
  }
  function Pd(t, e) {
    var n = Ut();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && pu(e, i[1])) return i[0];
    if (((i = t()), fa)) {
      Sn(!0);
      try {
        t();
      } finally {
        Sn(!1);
      }
    }
    return ((n.memoizedState = [i, e]), i);
  }
  function Nu(t, e, n) {
    return n === void 0 || ((rn & 1073741824) !== 0 && (ft & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = Fh()), (it.lanes |= t), (_n |= t), n);
  }
  function Fd(t, e, n, i) {
    return xe(n, e)
      ? n
      : Xa.current !== null
        ? ((t = Nu(t, n, i)), xe(t, e) || (qt = !0), t)
        : (rn & 42) === 0 || ((rn & 1073741824) !== 0 && (ft & 261930) === 0)
          ? ((qt = !0), (t.memoizedState = n))
          : ((t = Fh()), (it.lanes |= t), (_n |= t), e);
  }
  function Wd(t, e, n, i, s) {
    var r = q.p;
    q.p = r !== 0 && 8 > r ? r : 8;
    var f = O.T,
      m = {};
    ((O.T = m), zu(t, !1, e, n));
    try {
      var S = s(),
        N = O.S;
      if (
        (N !== null && N(m, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var z = Rv(S, i);
        Gi(t, e, z, Me(t));
      } else Gi(t, e, i, Me(t));
    } catch (_) {
      Gi(t, e, { then: function () {}, status: "rejected", reason: _ }, Me());
    } finally {
      ((q.p = r),
        f !== null && m.types !== null && (f.types = m.types),
        (O.T = f));
    }
  }
  function Hv() {}
  function ju(t, e, n, i) {
    if (t.tag !== 5) throw Error(u(476));
    var s = $d(t).queue;
    Wd(
      t,
      s,
      e,
      Q,
      n === null
        ? Hv
        : function () {
            return (Id(t), n(i));
          },
    );
  }
  function $d(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Q,
      baseState: Q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cn,
        lastRenderedState: Q,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: cn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Id(t) {
    var e = $d(t);
    (e.next === null && (e = t.alternate.memoizedState),
      Gi(t, e.next.queue, {}, Me()));
  }
  function Cu() {
    return Wt(ll);
  }
  function th() {
    return Ut().memoizedState;
  }
  function eh() {
    return Ut().memoizedState;
  }
  function qv(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Me();
          t = Cn(n);
          var i = zn(e, t, n);
          (i !== null && (pe(i, e, n), Bi(i, e, n)),
            (e = { cache: iu() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function Yv(t, e, n) {
    var i = Me();
    ((n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      fs(t)
        ? ah(e, n)
        : ((n = ko(t, e, n, i)), n !== null && (pe(n, t, i), ih(n, e, i))));
  }
  function nh(t, e, n) {
    var i = Me();
    Gi(t, e, n, i);
  }
  function Gi(t, e, n, i) {
    var s = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (fs(t)) ah(e, s);
    else {
      var r = t.alternate;
      if (
        t.lanes === 0 &&
        (r === null || r.lanes === 0) &&
        ((r = e.lastRenderedReducer), r !== null)
      )
        try {
          var f = e.lastRenderedState,
            m = r(f, n);
          if (((s.hasEagerState = !0), (s.eagerState = m), xe(m, f)))
            return (Zl(t, e, s, 0), Et === null && Ql(), !1);
        } catch {}
      if (((n = ko(t, e, s, i)), n !== null))
        return (pe(n, t, i), ih(n, e, i), !0);
    }
    return !1;
  }
  function zu(t, e, n, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: ur(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      fs(t))
    ) {
      if (e) throw Error(u(479));
    } else ((e = ko(t, n, i, 2)), e !== null && pe(e, t, 2));
  }
  function fs(t) {
    var e = t.alternate;
    return t === it || (e !== null && e === it);
  }
  function ah(t, e) {
    Qa = is = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e));
  }
  function ih(t, e, n) {
    if ((n & 4194048) !== 0) {
      var i = e.lanes;
      ((i &= t.pendingLanes), (n |= i), (e.lanes = n), rf(t, n));
    }
  }
  var Xi = {
    readContext: Wt,
    use: os,
    useCallback: Ot,
    useContext: Ot,
    useEffect: Ot,
    useImperativeHandle: Ot,
    useLayoutEffect: Ot,
    useInsertionEffect: Ot,
    useMemo: Ot,
    useReducer: Ot,
    useRef: Ot,
    useState: Ot,
    useDebugValue: Ot,
    useDeferredValue: Ot,
    useTransition: Ot,
    useSyncExternalStore: Ot,
    useId: Ot,
    useHostTransitionStatus: Ot,
    useFormState: Ot,
    useActionState: Ot,
    useOptimistic: Ot,
    useMemoCache: Ot,
    useCacheRefresh: Ot,
  };
  Xi.useEffectEvent = Ot;
  var lh = {
      readContext: Wt,
      use: os,
      useCallback: function (t, e) {
        return ((ie().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: Wt,
      useEffect: Gd,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null),
          rs(4194308, 4, Kd.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return rs(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        rs(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = ie();
        e = e === void 0 ? null : e;
        var i = t();
        if (fa) {
          Sn(!0);
          try {
            t();
          } finally {
            Sn(!1);
          }
        }
        return ((n.memoizedState = [i, e]), i);
      },
      useReducer: function (t, e, n) {
        var i = ie();
        if (n !== void 0) {
          var s = n(e);
          if (fa) {
            Sn(!0);
            try {
              n(e);
            } finally {
              Sn(!1);
            }
          }
        } else s = e;
        return (
          (i.memoizedState = i.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (i.queue = t),
          (t = t.dispatch = Yv.bind(null, it, t)),
          [i.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = ie();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Au(t);
        var e = t.queue,
          n = nh.bind(null, it, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: Du,
      useDeferredValue: function (t, e) {
        var n = ie();
        return Nu(n, t, e);
      },
      useTransition: function () {
        var t = Au(!1);
        return (
          (t = Wd.bind(null, it, t.queue, !0, !1)),
          (ie().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var i = it,
          s = ie();
        if (mt) {
          if (n === void 0) throw Error(u(407));
          n = n();
        } else {
          if (((n = e()), Et === null)) throw Error(u(349));
          (ft & 127) !== 0 || Dd(i, e, n);
        }
        s.memoizedState = n;
        var r = { value: n, getSnapshot: e };
        return (
          (s.queue = r),
          Gd(jd.bind(null, i, r, t), [t]),
          (i.flags |= 2048),
          Ka(9, { destroy: void 0 }, Nd.bind(null, i, r, n, e), null),
          n
        );
      },
      useId: function () {
        var t = ie(),
          e = Et.identifierPrefix;
        if (mt) {
          var n = Pe,
            i = Je;
          ((n = (i & ~(1 << (32 - ve(i) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = ls++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_"));
        } else ((n = wv++), (e = "_" + e + "r_" + n.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Cu,
      useFormState: Bd,
      useActionState: Bd,
      useOptimistic: function (t) {
        var e = ie();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = zu.bind(null, it, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: bu,
      useCacheRefresh: function () {
        return (ie().memoizedState = qv.bind(null, it));
      },
      useEffectEvent: function (t) {
        var e = ie(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((gt & 2) !== 0) throw Error(u(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Ou = {
      readContext: Wt,
      use: os,
      useCallback: Jd,
      useContext: Wt,
      useEffect: Mu,
      useImperativeHandle: kd,
      useInsertionEffect: Qd,
      useLayoutEffect: Zd,
      useMemo: Pd,
      useReducer: us,
      useRef: Yd,
      useState: function () {
        return us(cn);
      },
      useDebugValue: Du,
      useDeferredValue: function (t, e) {
        var n = Ut();
        return Fd(n, St.memoizedState, t, e);
      },
      useTransition: function () {
        var t = us(cn)[0],
          e = Ut().memoizedState;
        return [typeof t == "boolean" ? t : Yi(t), e];
      },
      useSyncExternalStore: Md,
      useId: th,
      useHostTransitionStatus: Cu,
      useFormState: Ld,
      useActionState: Ld,
      useOptimistic: function (t, e) {
        var n = Ut();
        return Od(n, St, t, e);
      },
      useMemoCache: bu,
      useCacheRefresh: eh,
    };
  Ou.useEffectEvent = Xd;
  var sh = {
    readContext: Wt,
    use: os,
    useCallback: Jd,
    useContext: Wt,
    useEffect: Mu,
    useImperativeHandle: kd,
    useInsertionEffect: Qd,
    useLayoutEffect: Zd,
    useMemo: Pd,
    useReducer: Tu,
    useRef: Yd,
    useState: function () {
      return Tu(cn);
    },
    useDebugValue: Du,
    useDeferredValue: function (t, e) {
      var n = Ut();
      return St === null ? Nu(n, t, e) : Fd(n, St.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Tu(cn)[0],
        e = Ut().memoizedState;
      return [typeof t == "boolean" ? t : Yi(t), e];
    },
    useSyncExternalStore: Md,
    useId: th,
    useHostTransitionStatus: Cu,
    useFormState: qd,
    useActionState: qd,
    useOptimistic: function (t, e) {
      var n = Ut();
      return St !== null
        ? Od(n, St, t, e)
        : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: bu,
    useCacheRefresh: eh,
  };
  sh.useEffectEvent = Xd;
  function Vu(t, e, n, i) {
    ((e = t.memoizedState),
      (n = n(i, e)),
      (n = n == null ? e : b({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var Ru = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var i = Me(),
        s = Cn(i);
      ((s.payload = e),
        n != null && (s.callback = n),
        (e = zn(t, s, i)),
        e !== null && (pe(e, t, i), Bi(e, t, i)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var i = Me(),
        s = Cn(i);
      ((s.tag = 1),
        (s.payload = e),
        n != null && (s.callback = n),
        (e = zn(t, s, i)),
        e !== null && (pe(e, t, i), Bi(e, t, i)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Me(),
        i = Cn(n);
      ((i.tag = 2),
        e != null && (i.callback = e),
        (e = zn(t, i, n)),
        e !== null && (pe(e, t, n), Bi(e, t, n)));
    },
  };
  function oh(t, e, n, i, s, r, f) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(i, r, f)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Ci(n, i) || !Ci(s, r)
          : !0
    );
  }
  function uh(t, e, n, i) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, i),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, i),
      e.state !== t && Ru.enqueueReplaceState(e, e.state, null));
  }
  function da(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var i in e) i !== "ref" && (n[i] = e[i]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = b({}, n));
      for (var s in t) n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  function rh(t) {
    Xl(t);
  }
  function ch(t) {
    console.error(t);
  }
  function fh(t) {
    Xl(t);
  }
  function ds(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function dh(t, e, n) {
    try {
      var i = t.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function wu(t, e, n) {
    return (
      (n = Cn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        ds(t, e);
      }),
      n
    );
  }
  function hh(t) {
    return ((t = Cn(t)), (t.tag = 3), t);
  }
  function mh(t, e, n, i) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = i.value;
      ((t.payload = function () {
        return s(r);
      }),
        (t.callback = function () {
          dh(e, n, i);
        }));
    }
    var f = n.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (t.callback = function () {
        (dh(e, n, i),
          typeof s != "function" &&
            (Un === null ? (Un = new Set([this])) : Un.add(this)));
        var m = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: m !== null ? m : "",
        });
      });
  }
  function Gv(t, e, n, i, s) {
    if (
      ((n.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && La(e, n, s, !0),
        (n = Se.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Re === null ? Es() : n.alternate === null && Vt === 0 && (Vt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              i === Il
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([i])) : e.add(i),
                  lr(t, i, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              i === Il
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([i])) : n.add(i)),
                  lr(t, i, s)),
              !1
            );
        }
        throw Error(u(435, n.tag));
      }
      return (lr(t, i, s), Es(), !1);
    }
    if (mt)
      return (
        (e = Se.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            i !== Io && ((t = Error(u(422), { cause: i })), Vi(Ce(t, n))))
          : (i !== Io && ((e = Error(u(423), { cause: i })), Vi(Ce(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (i = Ce(i, n)),
            (s = wu(t.stateNode, i, s)),
            cu(t, s),
            Vt !== 4 && (Vt = 2)),
        !1
      );
    var r = Error(u(520), { cause: i });
    if (
      ((r = Ce(r, n)),
      Wi === null ? (Wi = [r]) : Wi.push(r),
      Vt !== 4 && (Vt = 2),
      e === null)
    )
      return !0;
    ((i = Ce(i, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = s & -s),
            (n.lanes |= t),
            (t = wu(n.stateNode, i, t)),
            cu(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (r = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (r !== null &&
                  typeof r.componentDidCatch == "function" &&
                  (Un === null || !Un.has(r)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = hh(s)),
              mh(s, t, n, i),
              cu(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var _u = Error(u(461)),
    qt = !1;
  function $t(t, e, n, i) {
    e.child = t === null ? vd(e, null, n, i) : ca(e, t.child, n, i);
  }
  function ph(t, e, n, i, s) {
    n = n.render;
    var r = e.ref;
    if ("ref" in i) {
      var f = {};
      for (var m in i) m !== "ref" && (f[m] = i[m]);
    } else f = i;
    return (
      sa(e),
      (i = yu(t, e, n, f, r, s)),
      (m = gu()),
      t !== null && !qt
        ? (vu(t, e, s), fn(t, e, s))
        : (mt && m && Wo(e), (e.flags |= 1), $t(t, e, i, s), e.child)
    );
  }
  function yh(t, e, n, i, s) {
    if (t === null) {
      var r = n.type;
      return typeof r == "function" &&
        !Jo(r) &&
        r.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = r), gh(t, e, r, i, s))
        : ((t = kl(n.type, null, i, e, e.mode, s)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((r = t.child), !Xu(t, s))) {
      var f = r.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Ci), n(f, i) && t.ref === e.ref)
      )
        return fn(t, e, s);
    }
    return (
      (e.flags |= 1),
      (t = ln(r, i)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function gh(t, e, n, i, s) {
    if (t !== null) {
      var r = t.memoizedProps;
      if (Ci(r, i) && t.ref === e.ref)
        if (((qt = !1), (e.pendingProps = i = r), Xu(t, s)))
          (t.flags & 131072) !== 0 && (qt = !0);
        else return ((e.lanes = t.lanes), fn(t, e, s));
    }
    return Uu(t, e, n, i, s);
  }
  function vh(t, e, n, i) {
    var s = i.children,
      r = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      i.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((r = r !== null ? r.baseLanes | n : n), t !== null)) {
          for (i = e.child = t.child, s = 0; i !== null; )
            ((s = s | i.lanes | i.childLanes), (i = i.sibling));
          i = s & ~r;
        } else ((i = 0), (e.child = null));
        return xh(t, e, r, n, i);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Wl(e, r !== null ? r.cachePool : null),
          r !== null ? Sd(e, r) : du(),
          Td(e));
      else
        return (
          (i = e.lanes = 536870912),
          xh(t, e, r !== null ? r.baseLanes | n : n, n, i)
        );
    } else
      r !== null
        ? (Wl(e, r.cachePool), Sd(e, r), Vn(), (e.memoizedState = null))
        : (t !== null && Wl(e, null), du(), Vn());
    return ($t(t, e, s, n), e.child);
  }
  function Qi(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function xh(t, e, n, i, s) {
    var r = su();
    return (
      (r = r === null ? null : { parent: Lt._currentValue, pool: r }),
      (e.memoizedState = { baseLanes: n, cachePool: r }),
      t !== null && Wl(e, null),
      du(),
      Td(e),
      t !== null && La(t, e, i, !0),
      (e.childLanes = s),
      null
    );
  }
  function hs(t, e) {
    return (
      (e = ps({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function bh(t, e, n) {
    return (
      ca(e, t.child, null, n),
      (t = hs(e, e.pendingProps)),
      (t.flags |= 2),
      Te(e),
      (e.memoizedState = null),
      t
    );
  }
  function Xv(t, e, n) {
    var i = e.pendingProps,
      s = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (mt) {
        if (i.mode === "hidden")
          return ((t = hs(e, i)), (e.lanes = 536870912), Qi(null, t));
        if (
          (mu(e),
          (t = Nt)
            ? ((t = Vm(t, Ve)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: En !== null ? { id: Je, overflow: Pe } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = ad(t)),
                (n.return = e),
                (e.child = n),
                (Ft = e),
                (Nt = null)))
            : (t = null),
          t === null)
        )
          throw Dn(e);
        return ((e.lanes = 536870912), null);
      }
      return hs(e, i);
    }
    var r = t.memoizedState;
    if (r !== null) {
      var f = r.dehydrated;
      if ((mu(e), s))
        if (e.flags & 256) ((e.flags &= -257), (e = bh(t, e, n)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(u(558));
      else if (
        (qt || La(t, e, n, !1), (s = (n & t.childLanes) !== 0), qt || s)
      ) {
        if (
          ((i = Et),
          i !== null && ((f = cf(i, n)), f !== 0 && f !== r.retryLane))
        )
          throw ((r.retryLane = f), na(t, f), pe(i, t, f), _u);
        (Es(), (e = bh(t, e, n)));
      } else
        ((t = r.treeContext),
          (Nt = we(f.nextSibling)),
          (Ft = e),
          (mt = !0),
          (Mn = null),
          (Ve = !1),
          t !== null && sd(e, t),
          (e = hs(e, i)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = ln(t.child, { mode: i.mode, children: i.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function ms(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(u(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Uu(t, e, n, i, s) {
    return (
      sa(e),
      (n = yu(t, e, n, i, void 0, s)),
      (i = gu()),
      t !== null && !qt
        ? (vu(t, e, s), fn(t, e, s))
        : (mt && i && Wo(e), (e.flags |= 1), $t(t, e, n, s), e.child)
    );
  }
  function Sh(t, e, n, i, s, r) {
    return (
      sa(e),
      (e.updateQueue = null),
      (n = Ed(e, i, n, s)),
      Ad(t),
      (i = gu()),
      t !== null && !qt
        ? (vu(t, e, r), fn(t, e, r))
        : (mt && i && Wo(e), (e.flags |= 1), $t(t, e, n, r), e.child)
    );
  }
  function Th(t, e, n, i, s) {
    if ((sa(e), e.stateNode === null)) {
      var r = wa,
        f = n.contextType;
      (typeof f == "object" && f !== null && (r = Wt(f)),
        (r = new n(i, r)),
        (e.memoizedState =
          r.state !== null && r.state !== void 0 ? r.state : null),
        (r.updater = Ru),
        (e.stateNode = r),
        (r._reactInternals = e),
        (r = e.stateNode),
        (r.props = i),
        (r.state = e.memoizedState),
        (r.refs = {}),
        uu(e),
        (f = n.contextType),
        (r.context = typeof f == "object" && f !== null ? Wt(f) : wa),
        (r.state = e.memoizedState),
        (f = n.getDerivedStateFromProps),
        typeof f == "function" && (Vu(e, n, f, i), (r.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function" ||
          (typeof r.UNSAFE_componentWillMount != "function" &&
            typeof r.componentWillMount != "function") ||
          ((f = r.state),
          typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" &&
            r.UNSAFE_componentWillMount(),
          f !== r.state && Ru.enqueueReplaceState(r, r.state, null),
          Hi(e, i, r, s),
          Li(),
          (r.state = e.memoizedState)),
        typeof r.componentDidMount == "function" && (e.flags |= 4194308),
        (i = !0));
    } else if (t === null) {
      r = e.stateNode;
      var m = e.memoizedProps,
        S = da(n, m);
      r.props = S;
      var N = r.context,
        z = n.contextType;
      ((f = wa), typeof z == "object" && z !== null && (f = Wt(z)));
      var _ = n.getDerivedStateFromProps;
      ((z =
        typeof _ == "function" ||
        typeof r.getSnapshotBeforeUpdate == "function"),
        (m = e.pendingProps !== m),
        z ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((m || N !== f) && uh(e, r, i, f)),
        (jn = !1));
      var j = e.memoizedState;
      ((r.state = j),
        Hi(e, i, r, s),
        Li(),
        (N = e.memoizedState),
        m || j !== N || jn
          ? (typeof _ == "function" && (Vu(e, n, _, i), (N = e.memoizedState)),
            (S = jn || oh(e, n, S, i, j, N, f))
              ? (z ||
                  (typeof r.UNSAFE_componentWillMount != "function" &&
                    typeof r.componentWillMount != "function") ||
                  (typeof r.componentWillMount == "function" &&
                    r.componentWillMount(),
                  typeof r.UNSAFE_componentWillMount == "function" &&
                    r.UNSAFE_componentWillMount()),
                typeof r.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof r.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = i),
                (e.memoizedState = N)),
            (r.props = i),
            (r.state = N),
            (r.context = f),
            (i = S))
          : (typeof r.componentDidMount == "function" && (e.flags |= 4194308),
            (i = !1)));
    } else {
      ((r = e.stateNode),
        ru(t, e),
        (f = e.memoizedProps),
        (z = da(n, f)),
        (r.props = z),
        (_ = e.pendingProps),
        (j = r.context),
        (N = n.contextType),
        (S = wa),
        typeof N == "object" && N !== null && (S = Wt(N)),
        (m = n.getDerivedStateFromProps),
        (N =
          typeof m == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function") ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((f !== _ || j !== S) && uh(e, r, i, S)),
        (jn = !1),
        (j = e.memoizedState),
        (r.state = j),
        Hi(e, i, r, s),
        Li());
      var C = e.memoizedState;
      f !== _ ||
      j !== C ||
      jn ||
      (t !== null && t.dependencies !== null && Pl(t.dependencies))
        ? (typeof m == "function" && (Vu(e, n, m, i), (C = e.memoizedState)),
          (z =
            jn ||
            oh(e, n, z, i, j, C, S) ||
            (t !== null && t.dependencies !== null && Pl(t.dependencies)))
            ? (N ||
                (typeof r.UNSAFE_componentWillUpdate != "function" &&
                  typeof r.componentWillUpdate != "function") ||
                (typeof r.componentWillUpdate == "function" &&
                  r.componentWillUpdate(i, C, S),
                typeof r.UNSAFE_componentWillUpdate == "function" &&
                  r.UNSAFE_componentWillUpdate(i, C, S)),
              typeof r.componentDidUpdate == "function" && (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof r.componentDidUpdate != "function" ||
                (f === t.memoizedProps && j === t.memoizedState) ||
                (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate != "function" ||
                (f === t.memoizedProps && j === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = i),
              (e.memoizedState = C)),
          (r.props = i),
          (r.state = C),
          (r.context = S),
          (i = z))
        : (typeof r.componentDidUpdate != "function" ||
            (f === t.memoizedProps && j === t.memoizedState) ||
            (e.flags |= 4),
          typeof r.getSnapshotBeforeUpdate != "function" ||
            (f === t.memoizedProps && j === t.memoizedState) ||
            (e.flags |= 1024),
          (i = !1));
    }
    return (
      (r = i),
      ms(t, e),
      (i = (e.flags & 128) !== 0),
      r || i
        ? ((r = e.stateNode),
          (n =
            i && typeof n.getDerivedStateFromError != "function"
              ? null
              : r.render()),
          (e.flags |= 1),
          t !== null && i
            ? ((e.child = ca(e, t.child, null, s)),
              (e.child = ca(e, null, n, s)))
            : $t(t, e, n, s),
          (e.memoizedState = r.state),
          (t = e.child))
        : (t = fn(t, e, s)),
      t
    );
  }
  function Ah(t, e, n, i) {
    return (ia(), (e.flags |= 256), $t(t, e, n, i), e.child);
  }
  var Bu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Lu(t) {
    return { baseLanes: t, cachePool: dd() };
  }
  function Hu(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= Ee), t);
  }
  function Eh(t, e, n) {
    var i = e.pendingProps,
      s = !1,
      r = (e.flags & 128) !== 0,
      f;
    if (
      ((f = r) ||
        (f =
          t !== null && t.memoizedState === null ? !1 : (_t.current & 2) !== 0),
      f && ((s = !0), (e.flags &= -129)),
      (f = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (mt) {
        if (
          (s ? On(e) : Vn(),
          (t = Nt)
            ? ((t = Vm(t, Ve)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: En !== null ? { id: Je, overflow: Pe } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = ad(t)),
                (n.return = e),
                (e.child = n),
                (Ft = e),
                (Nt = null)))
            : (t = null),
          t === null)
        )
          throw Dn(e);
        return (Sr(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var m = i.children;
      return (
        (i = i.fallback),
        s
          ? (Vn(),
            (s = e.mode),
            (m = ps({ mode: "hidden", children: m }, s)),
            (i = aa(i, s, n, null)),
            (m.return = e),
            (i.return = e),
            (m.sibling = i),
            (e.child = m),
            (i = e.child),
            (i.memoizedState = Lu(n)),
            (i.childLanes = Hu(t, f, n)),
            (e.memoizedState = Bu),
            Qi(null, i))
          : (On(e), qu(e, m))
      );
    }
    var S = t.memoizedState;
    if (S !== null && ((m = S.dehydrated), m !== null)) {
      if (r)
        e.flags & 256
          ? (On(e), (e.flags &= -257), (e = Yu(t, e, n)))
          : e.memoizedState !== null
            ? (Vn(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (Vn(),
              (m = i.fallback),
              (s = e.mode),
              (i = ps({ mode: "visible", children: i.children }, s)),
              (m = aa(m, s, n, null)),
              (m.flags |= 2),
              (i.return = e),
              (m.return = e),
              (i.sibling = m),
              (e.child = i),
              ca(e, t.child, null, n),
              (i = e.child),
              (i.memoizedState = Lu(n)),
              (i.childLanes = Hu(t, f, n)),
              (e.memoizedState = Bu),
              (e = Qi(null, i)));
      else if ((On(e), Sr(m))) {
        if (((f = m.nextSibling && m.nextSibling.dataset), f)) var N = f.dgst;
        ((f = N),
          (i = Error(u(419))),
          (i.stack = ""),
          (i.digest = f),
          Vi({ value: i, source: null, stack: null }),
          (e = Yu(t, e, n)));
      } else if (
        (qt || La(t, e, n, !1), (f = (n & t.childLanes) !== 0), qt || f)
      ) {
        if (
          ((f = Et),
          f !== null && ((i = cf(f, n)), i !== 0 && i !== S.retryLane))
        )
          throw ((S.retryLane = i), na(t, i), pe(f, t, i), _u);
        (br(m) || Es(), (e = Yu(t, e, n)));
      } else
        br(m)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = S.treeContext),
            (Nt = we(m.nextSibling)),
            (Ft = e),
            (mt = !0),
            (Mn = null),
            (Ve = !1),
            t !== null && sd(e, t),
            (e = qu(e, i.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (Vn(),
        (m = i.fallback),
        (s = e.mode),
        (S = t.child),
        (N = S.sibling),
        (i = ln(S, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = S.subtreeFlags & 65011712),
        N !== null ? (m = ln(N, m)) : ((m = aa(m, s, n, null)), (m.flags |= 2)),
        (m.return = e),
        (i.return = e),
        (i.sibling = m),
        (e.child = i),
        Qi(null, i),
        (i = e.child),
        (m = t.child.memoizedState),
        m === null
          ? (m = Lu(n))
          : ((s = m.cachePool),
            s !== null
              ? ((S = Lt._currentValue),
                (s = s.parent !== S ? { parent: S, pool: S } : s))
              : (s = dd()),
            (m = { baseLanes: m.baseLanes | n, cachePool: s })),
        (i.memoizedState = m),
        (i.childLanes = Hu(t, f, n)),
        (e.memoizedState = Bu),
        Qi(t.child, i))
      : (On(e),
        (n = t.child),
        (t = n.sibling),
        (n = ln(n, { mode: "visible", children: i.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((f = e.deletions),
          f === null ? ((e.deletions = [t]), (e.flags |= 16)) : f.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function qu(t, e) {
    return (
      (e = ps({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function ps(t, e) {
    return ((t = be(22, t, null, e)), (t.lanes = 0), t);
  }
  function Yu(t, e, n) {
    return (
      ca(e, t.child, null, n),
      (t = qu(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Mh(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    (i !== null && (i.lanes |= e), nu(t.return, e, n));
  }
  function Gu(t, e, n, i, s, r) {
    var f = t.memoizedState;
    f === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: s,
          treeForkCount: r,
        })
      : ((f.isBackwards = e),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = i),
        (f.tail = n),
        (f.tailMode = s),
        (f.treeForkCount = r));
  }
  function Dh(t, e, n) {
    var i = e.pendingProps,
      s = i.revealOrder,
      r = i.tail;
    i = i.children;
    var f = _t.current,
      m = (f & 2) !== 0;
    if (
      (m ? ((f = (f & 1) | 2), (e.flags |= 128)) : (f &= 1),
      Y(_t, f),
      $t(t, e, i, n),
      (i = mt ? Oi : 0),
      !m && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Mh(t, n, e);
        else if (t.tag === 19) Mh(t, n, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (s) {
      case "forwards":
        for (n = e.child, s = null; n !== null; )
          ((t = n.alternate),
            t !== null && as(t) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = e.child), (e.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Gu(e, !1, s, n, r, i));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && as(t) === null)) {
            e.child = s;
            break;
          }
          ((t = s.sibling), (s.sibling = n), (n = s), (s = t));
        }
        Gu(e, !0, n, null, r, i);
        break;
      case "together":
        Gu(e, !1, null, null, void 0, i);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function fn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (_n |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((La(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(u(153));
    if (e.child !== null) {
      for (
        t = e.child, n = ln(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (n = n.sibling = ln(t, t.pendingProps)),
          (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function Xu(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Pl(t)));
  }
  function Qv(t, e, n) {
    switch (e.tag) {
      case 3:
        (ae(e, e.stateNode.containerInfo),
          Nn(e, Lt, t.memoizedState.cache),
          ia());
        break;
      case 27:
      case 5:
        yi(e);
        break;
      case 4:
        ae(e, e.stateNode.containerInfo);
        break;
      case 10:
        Nn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), mu(e), null);
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (On(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? Eh(t, e, n)
              : (On(e), (t = fn(t, e, n)), t !== null ? t.sibling : null);
        On(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((i = (n & e.childLanes) !== 0),
          i || (La(t, e, n, !1), (i = (n & e.childLanes) !== 0)),
          s)
        ) {
          if (i) return Dh(t, e, n);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          Y(_t, _t.current),
          i)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), vh(t, e, n, e.pendingProps));
      case 24:
        Nn(e, Lt, t.memoizedState.cache);
    }
    return fn(t, e, n);
  }
  function Nh(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) qt = !0;
      else {
        if (!Xu(t, n) && (e.flags & 128) === 0) return ((qt = !1), Qv(t, e, n));
        qt = (t.flags & 131072) !== 0;
      }
    else ((qt = !1), mt && (e.flags & 1048576) !== 0 && ld(e, Oi, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var i = e.pendingProps;
          if (((t = ua(e.elementType)), (e.type = t), typeof t == "function"))
            Jo(t)
              ? ((i = da(t, i)), (e.tag = 1), (e = Th(null, e, t, i, n)))
              : ((e.tag = 0), (e = Uu(null, e, t, i, n)));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === P) {
                ((e.tag = 11), (e = ph(null, e, t, i, n)));
                break t;
              } else if (s === W) {
                ((e.tag = 14), (e = yh(null, e, t, i, n)));
                break t;
              }
            }
            throw ((e = He(t) || t), Error(u(306, e, "")));
          }
        }
        return e;
      case 0:
        return Uu(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((i = e.type), (s = da(i, e.pendingProps)), Th(t, e, i, s, n));
      case 3:
        t: {
          if ((ae(e, e.stateNode.containerInfo), t === null))
            throw Error(u(387));
          i = e.pendingProps;
          var r = e.memoizedState;
          ((s = r.element), ru(t, e), Hi(e, i, null, n));
          var f = e.memoizedState;
          if (
            ((i = f.cache),
            Nn(e, Lt, i),
            i !== r.cache && au(e, [Lt], n, !0),
            Li(),
            (i = f.element),
            r.isDehydrated)
          )
            if (
              ((r = { element: i, isDehydrated: !1, cache: f.cache }),
              (e.updateQueue.baseState = r),
              (e.memoizedState = r),
              e.flags & 256)
            ) {
              e = Ah(t, e, i, n);
              break t;
            } else if (i !== s) {
              ((s = Ce(Error(u(424)), e)), Vi(s), (e = Ah(t, e, i, n)));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  Nt = we(t.firstChild),
                  Ft = e,
                  mt = !0,
                  Mn = null,
                  Ve = !0,
                  n = vd(e, null, i, n),
                  e.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((ia(), i === s)) {
              e = fn(t, e, n);
              break t;
            }
            $t(t, e, i, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          ms(t, e),
          t === null
            ? (n = Lm(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : mt ||
                ((n = e.type),
                (t = e.pendingProps),
                (i = Os(ut.current).createElement(n)),
                (i[Pt] = e),
                (i[re] = t),
                It(i, n, t),
                kt(i),
                (e.stateNode = i))
            : (e.memoizedState = Lm(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          yi(e),
          t === null &&
            mt &&
            ((i = e.stateNode = _m(e.type, e.pendingProps, ut.current)),
            (Ft = e),
            (Ve = !0),
            (s = Nt),
            qn(e.type) ? ((Tr = s), (Nt = we(i.firstChild))) : (Nt = s)),
          $t(t, e, e.pendingProps.children, n),
          ms(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            mt &&
            ((s = i = Nt) &&
              ((i = b1(i, e.type, e.pendingProps, Ve)),
              i !== null
                ? ((e.stateNode = i),
                  (Ft = e),
                  (Nt = we(i.firstChild)),
                  (Ve = !1),
                  (s = !0))
                : (s = !1)),
            s || Dn(e)),
          yi(e),
          (s = e.type),
          (r = e.pendingProps),
          (f = t !== null ? t.memoizedProps : null),
          (i = r.children),
          gr(s, r) ? (i = null) : f !== null && gr(s, f) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((s = yu(t, e, _v, null, null, n)), (ll._currentValue = s)),
          ms(t, e),
          $t(t, e, i, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            mt &&
            ((t = n = Nt) &&
              ((n = S1(n, e.pendingProps, Ve)),
              n !== null
                ? ((e.stateNode = n), (Ft = e), (Nt = null), (t = !0))
                : (t = !1)),
            t || Dn(e)),
          null
        );
      case 13:
        return Eh(t, e, n);
      case 4:
        return (
          ae(e, e.stateNode.containerInfo),
          (i = e.pendingProps),
          t === null ? (e.child = ca(e, null, i, n)) : $t(t, e, i, n),
          e.child
        );
      case 11:
        return ph(t, e, e.type, e.pendingProps, n);
      case 7:
        return ($t(t, e, e.pendingProps, n), e.child);
      case 8:
        return ($t(t, e, e.pendingProps.children, n), e.child);
      case 12:
        return ($t(t, e, e.pendingProps.children, n), e.child);
      case 10:
        return (
          (i = e.pendingProps),
          Nn(e, e.type, i.value),
          $t(t, e, i.children, n),
          e.child
        );
      case 9:
        return (
          (s = e.type._context),
          (i = e.pendingProps.children),
          sa(e),
          (s = Wt(s)),
          (i = i(s)),
          (e.flags |= 1),
          $t(t, e, i, n),
          e.child
        );
      case 14:
        return yh(t, e, e.type, e.pendingProps, n);
      case 15:
        return gh(t, e, e.type, e.pendingProps, n);
      case 19:
        return Dh(t, e, n);
      case 31:
        return Xv(t, e, n);
      case 22:
        return vh(t, e, n, e.pendingProps);
      case 24:
        return (
          sa(e),
          (i = Wt(Lt)),
          t === null
            ? ((s = su()),
              s === null &&
                ((s = Et),
                (r = iu()),
                (s.pooledCache = r),
                r.refCount++,
                r !== null && (s.pooledCacheLanes |= n),
                (s = r)),
              (e.memoizedState = { parent: i, cache: s }),
              uu(e),
              Nn(e, Lt, s))
            : ((t.lanes & n) !== 0 && (ru(t, e), Hi(e, null, null, n), Li()),
              (s = t.memoizedState),
              (r = e.memoizedState),
              s.parent !== i
                ? ((s = { parent: i, cache: i }),
                  (e.memoizedState = s),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = s),
                  Nn(e, Lt, i))
                : ((i = r.cache),
                  Nn(e, Lt, i),
                  i !== s.cache && au(e, [Lt], n, !0))),
          $t(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(u(156, e.tag));
  }
  function dn(t) {
    t.flags |= 4;
  }
  function Qu(t, e, n, i, s) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (s & 335544128) === s))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (tm()) t.flags |= 8192;
        else throw ((ra = Il), ou);
    } else t.flags &= -16777217;
  }
  function jh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Xm(e)))
      if (tm()) t.flags |= 8192;
      else throw ((ra = Il), ou);
  }
  function ys(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? of() : 536870912), (t.lanes |= e), (Fa |= e)));
  }
  function Zi(t, e) {
    if (!mt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            (e.alternate !== null && (n = e), (e = e.sibling));
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var i = null; n !== null; )
            (n.alternate !== null && (i = n), (n = n.sibling));
          i === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function jt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      i = 0;
    if (e)
      for (var s = t.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags & 65011712),
          (i |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling));
    else
      for (s = t.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags),
          (i |= s.flags),
          (s.return = t),
          (s = s.sibling));
    return ((t.subtreeFlags |= i), (t.childLanes = n), e);
  }
  function Zv(t, e, n) {
    var i = e.pendingProps;
    switch (($o(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (jt(e), null);
      case 1:
        return (jt(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (i = null),
          t !== null && (i = t.memoizedState.cache),
          e.memoizedState.cache !== i && (e.flags |= 2048),
          un(Lt),
          wt(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ba(e)
              ? dn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), tu())),
          jt(e),
          null
        );
      case 26:
        var s = e.type,
          r = e.memoizedState;
        return (
          t === null
            ? (dn(e),
              r !== null ? (jt(e), jh(e, r)) : (jt(e), Qu(e, s, null, i, n)))
            : r
              ? r !== t.memoizedState
                ? (dn(e), jt(e), jh(e, r))
                : (jt(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== i && dn(e),
                jt(e),
                Qu(e, s, t, i, n)),
          null
        );
      case 27:
        if (
          (Nl(e),
          (n = ut.current),
          (s = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== i && dn(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(u(166));
            return (jt(e), null);
          }
          ((t = k.current),
            Ba(e) ? od(e) : ((t = _m(s, i, n)), (e.stateNode = t), dn(e)));
        }
        return (jt(e), null);
      case 5:
        if ((Nl(e), (s = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== i && dn(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(u(166));
            return (jt(e), null);
          }
          if (((r = k.current), Ba(e))) od(e);
          else {
            var f = Os(ut.current);
            switch (r) {
              case 1:
                r = f.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                r = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    r = f.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    r = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s,
                    );
                    break;
                  case "script":
                    ((r = f.createElement("div")),
                      (r.innerHTML = "<script><\/script>"),
                      (r = r.removeChild(r.firstChild)));
                    break;
                  case "select":
                    ((r =
                      typeof i.is == "string"
                        ? f.createElement("select", { is: i.is })
                        : f.createElement("select")),
                      i.multiple
                        ? (r.multiple = !0)
                        : i.size && (r.size = i.size));
                    break;
                  default:
                    r =
                      typeof i.is == "string"
                        ? f.createElement(s, { is: i.is })
                        : f.createElement(s);
                }
            }
            ((r[Pt] = e), (r[re] = i));
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) r.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                ((f.child.return = f), (f = f.child));
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e) break t;
                f = f.return;
              }
              ((f.sibling.return = f.return), (f = f.sibling));
            }
            e.stateNode = r;
            t: switch ((It(r, s, i), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break t;
              case "img":
                i = !0;
                break t;
              default:
                i = !1;
            }
            i && dn(e);
          }
        }
        return (
          jt(e),
          Qu(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== i && dn(e);
        else {
          if (typeof i != "string" && e.stateNode === null) throw Error(u(166));
          if (((t = ut.current), Ba(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (i = null),
              (s = Ft),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            ((t[Pt] = e),
              (t = !!(
                t.nodeValue === n ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                Em(t.nodeValue, n)
              )),
              t || Dn(e, !0));
          } else
            ((t = Os(t).createTextNode(i)), (t[Pt] = e), (e.stateNode = t));
        }
        return (jt(e), null);
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((i = Ba(e)), n !== null)) {
            if (t === null) {
              if (!i) throw Error(u(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(u(557));
              t[Pt] = e;
            } else
              (ia(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (jt(e), (t = !1));
          } else
            ((n = tu()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (t = !0));
          if (!t) return e.flags & 256 ? (Te(e), e) : (Te(e), null);
          if ((e.flags & 128) !== 0) throw Error(u(558));
        }
        return (jt(e), null);
      case 13:
        if (
          ((i = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = Ba(e)), i !== null && i.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(u(318));
              if (
                ((s = e.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(u(317));
              s[Pt] = e;
            } else
              (ia(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (jt(e), (s = !1));
          } else
            ((s = tu()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = s),
              (s = !0));
          if (!s) return e.flags & 256 ? (Te(e), e) : (Te(e), null);
        }
        return (
          Te(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = i !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((i = e.child),
                (s = null),
                i.alternate !== null &&
                  i.alternate.memoizedState !== null &&
                  i.alternate.memoizedState.cachePool !== null &&
                  (s = i.alternate.memoizedState.cachePool.pool),
                (r = null),
                i.memoizedState !== null &&
                  i.memoizedState.cachePool !== null &&
                  (r = i.memoizedState.cachePool.pool),
                r !== s && (i.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              ys(e, e.updateQueue),
              jt(e),
              null)
        );
      case 4:
        return (wt(), t === null && dr(e.stateNode.containerInfo), jt(e), null);
      case 10:
        return (un(e.type), jt(e), null);
      case 19:
        if ((U(_t), (i = e.memoizedState), i === null)) return (jt(e), null);
        if (((s = (e.flags & 128) !== 0), (r = i.rendering), r === null))
          if (s) Zi(i, !1);
          else {
            if (Vt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((r = as(t)), r !== null)) {
                  for (
                    e.flags |= 128,
                      Zi(i, !1),
                      t = r.updateQueue,
                      e.updateQueue = t,
                      ys(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;
                  )
                    (nd(n, t), (n = n.sibling));
                  return (
                    Y(_t, (_t.current & 1) | 2),
                    mt && sn(e, i.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            i.tail !== null &&
              ye() > Ss &&
              ((e.flags |= 128), (s = !0), Zi(i, !1), (e.lanes = 4194304));
          }
        else {
          if (!s)
            if (((t = as(r)), t !== null)) {
              if (
                ((e.flags |= 128),
                (s = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                ys(e, t),
                Zi(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !r.alternate &&
                  !mt)
              )
                return (jt(e), null);
            } else
              2 * ye() - i.renderingStartTime > Ss &&
                n !== 536870912 &&
                ((e.flags |= 128), (s = !0), Zi(i, !1), (e.lanes = 4194304));
          i.isBackwards
            ? ((r.sibling = e.child), (e.child = r))
            : ((t = i.last),
              t !== null ? (t.sibling = r) : (e.child = r),
              (i.last = r));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = ye()),
            (t.sibling = null),
            (n = _t.current),
            Y(_t, s ? (n & 1) | 2 : n & 1),
            mt && sn(e, i.treeForkCount),
            t)
          : (jt(e), null);
      case 22:
      case 23:
        return (
          Te(e),
          hu(),
          (i = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== i && (e.flags |= 8192)
            : i && (e.flags |= 8192),
          i
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (jt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : jt(e),
          (n = e.updateQueue),
          n !== null && ys(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (i = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          i !== n && (e.flags |= 2048),
          t !== null && U(oa),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          un(Lt),
          jt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, e.tag));
  }
  function Kv(t, e) {
    switch (($o(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          un(Lt),
          wt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Nl(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((Te(e), e.alternate === null)) throw Error(u(340));
          ia();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (Te(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(u(340));
          ia();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (U(_t), null);
      case 4:
        return (wt(), null);
      case 10:
        return (un(e.type), null);
      case 22:
      case 23:
        return (
          Te(e),
          hu(),
          t !== null && U(oa),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (un(Lt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ch(t, e) {
    switch (($o(e), e.tag)) {
      case 3:
        (un(Lt), wt());
        break;
      case 26:
      case 27:
      case 5:
        Nl(e);
        break;
      case 4:
        wt();
        break;
      case 31:
        e.memoizedState !== null && Te(e);
        break;
      case 13:
        Te(e);
        break;
      case 19:
        U(_t);
        break;
      case 10:
        un(e.type);
        break;
      case 22:
      case 23:
        (Te(e), hu(), t !== null && U(oa));
        break;
      case 24:
        un(Lt);
    }
  }
  function Ki(t, e) {
    try {
      var n = e.updateQueue,
        i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            i = void 0;
            var r = n.create,
              f = n.inst;
            ((i = r()), (f.destroy = i));
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (m) {
      bt(e, e.return, m);
    }
  }
  function Rn(t, e, n) {
    try {
      var i = e.updateQueue,
        s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        i = r;
        do {
          if ((i.tag & t) === t) {
            var f = i.inst,
              m = f.destroy;
            if (m !== void 0) {
              ((f.destroy = void 0), (s = e));
              var S = n,
                N = m;
              try {
                N();
              } catch (z) {
                bt(s, S, z);
              }
            }
          }
          i = i.next;
        } while (i !== r);
      }
    } catch (z) {
      bt(e, e.return, z);
    }
  }
  function zh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        bd(e, n);
      } catch (i) {
        bt(t, t.return, i);
      }
    }
  }
  function Oh(t, e, n) {
    ((n.props = da(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (i) {
      bt(t, e, i);
    }
  }
  function ki(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(i)) : (n.current = i);
      }
    } catch (s) {
      bt(t, e, s);
    }
  }
  function Fe(t, e) {
    var n = t.ref,
      i = t.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          bt(t, e, s);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          bt(t, e, s);
        }
      else n.current = null;
  }
  function Vh(t) {
    var e = t.type,
      n = t.memoizedProps,
      i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break t;
        case "img":
          n.src ? (i.src = n.src) : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (s) {
      bt(t, t.return, s);
    }
  }
  function Zu(t, e, n) {
    try {
      var i = t.stateNode;
      (m1(i, t.type, n, e), (i[re] = e));
    } catch (s) {
      bt(t, t.return, s);
    }
  }
  function Rh(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && qn(t.type)) ||
      t.tag === 4
    );
  }
  function Ku(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Rh(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && qn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function ku(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      ((t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = nn)));
    else if (
      i !== 4 &&
      (i === 27 && qn(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (ku(t, e, n), t = t.sibling; t !== null; )
        (ku(t, e, n), (t = t.sibling));
  }
  function gs(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (
      i !== 4 &&
      (i === 27 && qn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (gs(t, e, n), t = t.sibling; t !== null; )
        (gs(t, e, n), (t = t.sibling));
  }
  function wh(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var i = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      (It(e, i, n), (e[Pt] = t), (e[re] = n));
    } catch (r) {
      bt(t, t.return, r);
    }
  }
  var hn = !1,
    Yt = !1,
    Ju = !1,
    _h = typeof WeakSet == "function" ? WeakSet : Set,
    Jt = null;
  function kv(t, e) {
    if (((t = t.containerInfo), (pr = Ls), (t = kf(t)), Yo(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var s = i.anchorOffset,
              r = i.focusNode;
            i = i.focusOffset;
            try {
              (n.nodeType, r.nodeType);
            } catch {
              n = null;
              break t;
            }
            var f = 0,
              m = -1,
              S = -1,
              N = 0,
              z = 0,
              _ = t,
              j = null;
            e: for (;;) {
              for (
                var C;
                _ !== n || (s !== 0 && _.nodeType !== 3) || (m = f + s),
                  _ !== r || (i !== 0 && _.nodeType !== 3) || (S = f + i),
                  _.nodeType === 3 && (f += _.nodeValue.length),
                  (C = _.firstChild) !== null;
              )
                ((j = _), (_ = C));
              for (;;) {
                if (_ === t) break e;
                if (
                  (j === n && ++N === s && (m = f),
                  j === r && ++z === i && (S = f),
                  (C = _.nextSibling) !== null)
                )
                  break;
                ((_ = j), (j = _.parentNode));
              }
              _ = C;
            }
            n = m === -1 || S === -1 ? null : { start: m, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      yr = { focusedElem: t, selectionRange: n }, Ls = !1, Jt = e;
      Jt !== null;
    )
      if (
        ((e = Jt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = e), (Jt = t));
      else
        for (; Jt !== null; ) {
          switch (((e = Jt), (r = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (n = 0; n < t.length; n++)
                  ((s = t[n]), (s.ref.impl = s.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && r !== null) {
                ((t = void 0),
                  (n = e),
                  (s = r.memoizedProps),
                  (r = r.memoizedState),
                  (i = n.stateNode));
                try {
                  var Z = da(n.type, s);
                  ((t = i.getSnapshotBeforeUpdate(Z, r)),
                    (i.__reactInternalSnapshotBeforeUpdate = t));
                } catch (tt) {
                  bt(n, n.return, tt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  xr(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      xr(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(u(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (Jt = t));
            break;
          }
          Jt = e.return;
        }
  }
  function Uh(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (pn(t, n), i & 4 && Ki(5, n));
        break;
      case 1:
        if ((pn(t, n), i & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (f) {
              bt(n, n.return, f);
            }
          else {
            var s = da(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              bt(n, n.return, f);
            }
          }
        (i & 64 && zh(n), i & 512 && ki(n, n.return));
        break;
      case 3:
        if ((pn(t, n), i & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            bd(t, e);
          } catch (f) {
            bt(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && i & 4 && wh(n);
      case 26:
      case 5:
        (pn(t, n), e === null && i & 4 && Vh(n), i & 512 && ki(n, n.return));
        break;
      case 12:
        pn(t, n);
        break;
      case 31:
        (pn(t, n), i & 4 && Hh(t, n));
        break;
      case 13:
        (pn(t, n),
          i & 4 && qh(t, n),
          i & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = n1.bind(null, n)), T1(t, n)))));
        break;
      case 22:
        if (((i = n.memoizedState !== null || hn), !i)) {
          ((e = (e !== null && e.memoizedState !== null) || Yt), (s = hn));
          var r = Yt;
          ((hn = i),
            (Yt = e) && !r ? yn(t, n, (n.subtreeFlags & 8772) !== 0) : pn(t, n),
            (hn = s),
            (Yt = r));
        }
        break;
      case 30:
        break;
      default:
        pn(t, n);
    }
  }
  function Bh(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), Bh(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Eo(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var Ct = null,
    fe = !1;
  function mn(t, e, n) {
    for (n = n.child; n !== null; ) (Lh(t, e, n), (n = n.sibling));
  }
  function Lh(t, e, n) {
    if (ge && typeof ge.onCommitFiberUnmount == "function")
      try {
        ge.onCommitFiberUnmount(gi, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Yt || Fe(n, e),
          mn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Yt || Fe(n, e);
        var i = Ct,
          s = fe;
        (qn(n.type) && ((Ct = n.stateNode), (fe = !1)),
          mn(t, e, n),
          nl(n.stateNode),
          (Ct = i),
          (fe = s));
        break;
      case 5:
        Yt || Fe(n, e);
      case 6:
        if (
          ((i = Ct),
          (s = fe),
          (Ct = null),
          mn(t, e, n),
          (Ct = i),
          (fe = s),
          Ct !== null)
        )
          if (fe)
            try {
              (Ct.nodeType === 9
                ? Ct.body
                : Ct.nodeName === "HTML"
                  ? Ct.ownerDocument.body
                  : Ct
              ).removeChild(n.stateNode);
            } catch (r) {
              bt(n, e, r);
            }
          else
            try {
              Ct.removeChild(n.stateNode);
            } catch (r) {
              bt(n, e, r);
            }
        break;
      case 18:
        Ct !== null &&
          (fe
            ? ((t = Ct),
              zm(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                n.stateNode,
              ),
              ii(t))
            : zm(Ct, n.stateNode));
        break;
      case 4:
        ((i = Ct),
          (s = fe),
          (Ct = n.stateNode.containerInfo),
          (fe = !0),
          mn(t, e, n),
          (Ct = i),
          (fe = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Rn(2, n, e), Yt || Rn(4, n, e), mn(t, e, n));
        break;
      case 1:
        (Yt ||
          (Fe(n, e),
          (i = n.stateNode),
          typeof i.componentWillUnmount == "function" && Oh(n, e, i)),
          mn(t, e, n));
        break;
      case 21:
        mn(t, e, n);
        break;
      case 22:
        ((Yt = (i = Yt) || n.memoizedState !== null), mn(t, e, n), (Yt = i));
        break;
      default:
        mn(t, e, n);
    }
  }
  function Hh(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        ii(t);
      } catch (n) {
        bt(e, e.return, n);
      }
    }
  }
  function qh(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        ii(t);
      } catch (n) {
        bt(e, e.return, n);
      }
  }
  function Jv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new _h()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new _h()),
          e
        );
      default:
        throw Error(u(435, t.tag));
    }
  }
  function vs(t, e) {
    var n = Jv(t);
    e.forEach(function (i) {
      if (!n.has(i)) {
        n.add(i);
        var s = a1.bind(null, t, i);
        i.then(s, s);
      }
    });
  }
  function de(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = n[i],
          r = t,
          f = e,
          m = f;
        t: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (qn(m.type)) {
                ((Ct = m.stateNode), (fe = !1));
                break t;
              }
              break;
            case 5:
              ((Ct = m.stateNode), (fe = !1));
              break t;
            case 3:
            case 4:
              ((Ct = m.stateNode.containerInfo), (fe = !0));
              break t;
          }
          m = m.return;
        }
        if (Ct === null) throw Error(u(160));
        (Lh(r, f, s),
          (Ct = null),
          (fe = !1),
          (r = s.alternate),
          r !== null && (r.return = null),
          (s.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (Yh(e, t), (e = e.sibling));
  }
  var Ye = null;
  function Yh(t, e) {
    var n = t.alternate,
      i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (de(e, t),
          he(t),
          i & 4 && (Rn(3, t, t.return), Ki(3, t), Rn(5, t, t.return)));
        break;
      case 1:
        (de(e, t),
          he(t),
          i & 512 && (Yt || n === null || Fe(n, n.return)),
          i & 64 &&
            hn &&
            ((t = t.updateQueue),
            t !== null &&
              ((i = t.callbacks),
              i !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? i : n.concat(i))))));
        break;
      case 26:
        var s = Ye;
        if (
          (de(e, t),
          he(t),
          i & 512 && (Yt || n === null || Fe(n, n.return)),
          i & 4)
        ) {
          var r = n !== null ? n.memoizedState : null;
          if (((i = t.memoizedState), n === null))
            if (i === null)
              if (t.stateNode === null) {
                t: {
                  ((i = t.type),
                    (n = t.memoizedProps),
                    (s = s.ownerDocument || s));
                  e: switch (i) {
                    case "title":
                      ((r = s.getElementsByTagName("title")[0]),
                        (!r ||
                          r[bi] ||
                          r[Pt] ||
                          r.namespaceURI === "http://www.w3.org/2000/svg" ||
                          r.hasAttribute("itemprop")) &&
                          ((r = s.createElement(i)),
                          s.head.insertBefore(
                            r,
                            s.querySelector("head > title"),
                          )),
                        It(r, i, n),
                        (r[Pt] = t),
                        kt(r),
                        (i = r));
                      break t;
                    case "link":
                      var f = Ym("link", "href", s).get(i + (n.href || ""));
                      if (f) {
                        for (var m = 0; m < f.length; m++)
                          if (
                            ((r = f[m]),
                            r.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              r.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              r.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              r.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            f.splice(m, 1);
                            break e;
                          }
                      }
                      ((r = s.createElement(i)),
                        It(r, i, n),
                        s.head.appendChild(r));
                      break;
                    case "meta":
                      if (
                        (f = Ym("meta", "content", s).get(
                          i + (n.content || ""),
                        ))
                      ) {
                        for (m = 0; m < f.length; m++)
                          if (
                            ((r = f[m]),
                            r.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              r.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              r.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              r.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              r.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            f.splice(m, 1);
                            break e;
                          }
                      }
                      ((r = s.createElement(i)),
                        It(r, i, n),
                        s.head.appendChild(r));
                      break;
                    default:
                      throw Error(u(468, i));
                  }
                  ((r[Pt] = t), kt(r), (i = r));
                }
                t.stateNode = i;
              } else Gm(s, t.type, t.stateNode);
            else t.stateNode = qm(s, i, t.memoizedProps);
          else
            r !== i
              ? (r === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : r.count--,
                i === null
                  ? Gm(s, t.type, t.stateNode)
                  : qm(s, i, t.memoizedProps))
              : i === null &&
                t.stateNode !== null &&
                Zu(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (de(e, t),
          he(t),
          i & 512 && (Yt || n === null || Fe(n, n.return)),
          n !== null && i & 4 && Zu(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (de(e, t),
          he(t),
          i & 512 && (Yt || n === null || Fe(n, n.return)),
          t.flags & 32)
        ) {
          s = t.stateNode;
          try {
            Na(s, "");
          } catch (Z) {
            bt(t, t.return, Z);
          }
        }
        (i & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), Zu(t, s, n !== null ? n.memoizedProps : s)),
          i & 1024 && (Ju = !0));
        break;
      case 6:
        if ((de(e, t), he(t), i & 4)) {
          if (t.stateNode === null) throw Error(u(162));
          ((i = t.memoizedProps), (n = t.stateNode));
          try {
            n.nodeValue = i;
          } catch (Z) {
            bt(t, t.return, Z);
          }
        }
        break;
      case 3:
        if (
          ((ws = null),
          (s = Ye),
          (Ye = Vs(e.containerInfo)),
          de(e, t),
          (Ye = s),
          he(t),
          i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ii(e.containerInfo);
          } catch (Z) {
            bt(t, t.return, Z);
          }
        Ju && ((Ju = !1), Gh(t));
        break;
      case 4:
        ((i = Ye),
          (Ye = Vs(t.stateNode.containerInfo)),
          de(e, t),
          he(t),
          (Ye = i));
        break;
      case 12:
        (de(e, t), he(t));
        break;
      case 31:
        (de(e, t),
          he(t),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), vs(t, i))));
        break;
      case 13:
        (de(e, t),
          he(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (bs = ye()),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), vs(t, i))));
        break;
      case 22:
        s = t.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null,
          N = hn,
          z = Yt;
        if (
          ((hn = N || s),
          (Yt = z || S),
          de(e, t),
          (Yt = z),
          (hn = N),
          he(t),
          i & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = s ? e._visibility & -2 : e._visibility | 1,
              s && (n === null || S || hn || Yt || ha(t)),
              n = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                S = n = e;
                try {
                  if (((r = S.stateNode), s))
                    ((f = r.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none"));
                  else {
                    m = S.stateNode;
                    var _ = S.memoizedProps.style,
                      j =
                        _ != null && _.hasOwnProperty("display")
                          ? _.display
                          : null;
                    m.style.display =
                      j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch (Z) {
                  bt(S, S.return, Z);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                S = e;
                try {
                  S.stateNode.nodeValue = s ? "" : S.memoizedProps;
                } catch (Z) {
                  bt(S, S.return, Z);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                S = e;
                try {
                  var C = S.stateNode;
                  s ? Om(C, !0) : Om(S.stateNode, !1);
                } catch (Z) {
                  bt(S, S.return, Z);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (n === e && (n = null), (e = e.return));
            }
            (n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        i & 4 &&
          ((i = t.updateQueue),
          i !== null &&
            ((n = i.retryQueue),
            n !== null && ((i.retryQueue = null), vs(t, n))));
        break;
      case 19:
        (de(e, t),
          he(t),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), vs(t, i))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (de(e, t), he(t));
    }
  }
  function he(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, i = t.return; i !== null; ) {
          if (Rh(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(u(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              r = Ku(t);
            gs(t, r, s);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (Na(f, ""), (n.flags &= -33));
            var m = Ku(t);
            gs(t, m, f);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo,
              N = Ku(t);
            ku(t, N, S);
            break;
          default:
            throw Error(u(161));
        }
      } catch (z) {
        bt(t, t.return, z);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Gh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (Gh(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function pn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (Uh(t, e.alternate, e), (e = e.sibling));
  }
  function ha(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Rn(4, e, e.return), ha(e));
          break;
        case 1:
          Fe(e, e.return);
          var n = e.stateNode;
          (typeof n.componentWillUnmount == "function" && Oh(e, e.return, n),
            ha(e));
          break;
        case 27:
          nl(e.stateNode);
        case 26:
        case 5:
          (Fe(e, e.return), ha(e));
          break;
        case 22:
          e.memoizedState === null && ha(e);
          break;
        case 30:
          ha(e);
          break;
        default:
          ha(e);
      }
      t = t.sibling;
    }
  }
  function yn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var i = e.alternate,
        s = t,
        r = e,
        f = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          (yn(s, r, n), Ki(4, r));
          break;
        case 1:
          if (
            (yn(s, r, n),
            (i = r),
            (s = i.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (N) {
              bt(i, i.return, N);
            }
          if (((i = r), (s = i.updateQueue), s !== null)) {
            var m = i.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  xd(S[s], m);
            } catch (N) {
              bt(i, i.return, N);
            }
          }
          (n && f & 64 && zh(r), ki(r, r.return));
          break;
        case 27:
          wh(r);
        case 26:
        case 5:
          (yn(s, r, n), n && i === null && f & 4 && Vh(r), ki(r, r.return));
          break;
        case 12:
          yn(s, r, n);
          break;
        case 31:
          (yn(s, r, n), n && f & 4 && Hh(s, r));
          break;
        case 13:
          (yn(s, r, n), n && f & 4 && qh(s, r));
          break;
        case 22:
          (r.memoizedState === null && yn(s, r, n), ki(r, r.return));
          break;
        case 30:
          break;
        default:
          yn(s, r, n);
      }
      e = e.sibling;
    }
  }
  function Pu(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Ri(n)));
  }
  function Fu(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Ri(t)));
  }
  function Ge(t, e, n, i) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Xh(t, e, n, i), (e = e.sibling));
  }
  function Xh(t, e, n, i) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Ge(t, e, n, i), s & 2048 && Ki(9, e));
        break;
      case 1:
        Ge(t, e, n, i);
        break;
      case 3:
        (Ge(t, e, n, i),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Ri(t))));
        break;
      case 12:
        if (s & 2048) {
          (Ge(t, e, n, i), (t = e.stateNode));
          try {
            var r = e.memoizedProps,
              f = r.id,
              m = r.onPostCommit;
            typeof m == "function" &&
              m(
                f,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (S) {
            bt(e, e.return, S);
          }
        } else Ge(t, e, n, i);
        break;
      case 31:
        Ge(t, e, n, i);
        break;
      case 13:
        Ge(t, e, n, i);
        break;
      case 23:
        break;
      case 22:
        ((r = e.stateNode),
          (f = e.alternate),
          e.memoizedState !== null
            ? r._visibility & 2
              ? Ge(t, e, n, i)
              : Ji(t, e)
            : r._visibility & 2
              ? Ge(t, e, n, i)
              : ((r._visibility |= 2),
                ka(t, e, n, i, (e.subtreeFlags & 10256) !== 0 || !1)),
          s & 2048 && Pu(f, e));
        break;
      case 24:
        (Ge(t, e, n, i), s & 2048 && Fu(e.alternate, e));
        break;
      default:
        Ge(t, e, n, i);
    }
  }
  function ka(t, e, n, i, s) {
    for (
      s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var r = t,
        f = e,
        m = n,
        S = i,
        N = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          (ka(r, f, m, S, s), Ki(8, f));
          break;
        case 23:
          break;
        case 22:
          var z = f.stateNode;
          (f.memoizedState !== null
            ? z._visibility & 2
              ? ka(r, f, m, S, s)
              : Ji(r, f)
            : ((z._visibility |= 2), ka(r, f, m, S, s)),
            s && N & 2048 && Pu(f.alternate, f));
          break;
        case 24:
          (ka(r, f, m, S, s), s && N & 2048 && Fu(f.alternate, f));
          break;
        default:
          ka(r, f, m, S, s);
      }
      e = e.sibling;
    }
  }
  function Ji(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          i = e,
          s = i.flags;
        switch (i.tag) {
          case 22:
            (Ji(n, i), s & 2048 && Pu(i.alternate, i));
            break;
          case 24:
            (Ji(n, i), s & 2048 && Fu(i.alternate, i));
            break;
          default:
            Ji(n, i);
        }
        e = e.sibling;
      }
  }
  var Pi = 8192;
  function Ja(t, e, n) {
    if (t.subtreeFlags & Pi)
      for (t = t.child; t !== null; ) (Qh(t, e, n), (t = t.sibling));
  }
  function Qh(t, e, n) {
    switch (t.tag) {
      case 26:
        (Ja(t, e, n),
          t.flags & Pi &&
            t.memoizedState !== null &&
            w1(n, Ye, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Ja(t, e, n);
        break;
      case 3:
      case 4:
        var i = Ye;
        ((Ye = Vs(t.stateNode.containerInfo)), Ja(t, e, n), (Ye = i));
        break;
      case 22:
        t.memoizedState === null &&
          ((i = t.alternate),
          i !== null && i.memoizedState !== null
            ? ((i = Pi), (Pi = 16777216), Ja(t, e, n), (Pi = i))
            : Ja(t, e, n));
        break;
      default:
        Ja(t, e, n);
    }
  }
  function Zh(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function Fi(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((Jt = i), kh(i, t));
        }
      Zh(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Kh(t), (t = t.sibling));
  }
  function Kh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Fi(t), t.flags & 2048 && Rn(9, t, t.return));
        break;
      case 3:
        Fi(t);
        break;
      case 12:
        Fi(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), xs(t))
          : Fi(t);
        break;
      default:
        Fi(t);
    }
  }
  function xs(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((Jt = i), kh(i, t));
        }
      Zh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (Rn(8, e, e.return), xs(e));
          break;
        case 22:
          ((n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), xs(e)));
          break;
        default:
          xs(e);
      }
      t = t.sibling;
    }
  }
  function kh(t, e) {
    for (; Jt !== null; ) {
      var n = Jt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Rn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Ri(n.memoizedState.cache);
      }
      if (((i = n.child), i !== null)) ((i.return = n), (Jt = i));
      else
        t: for (n = t; Jt !== null; ) {
          i = Jt;
          var s = i.sibling,
            r = i.return;
          if ((Bh(i), i === n)) {
            Jt = null;
            break t;
          }
          if (s !== null) {
            ((s.return = r), (Jt = s));
            break t;
          }
          Jt = r;
        }
    }
  }
  var Pv = {
      getCacheForType: function (t) {
        var e = Wt(Lt),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
      cacheSignal: function () {
        return Wt(Lt).controller.signal;
      },
    },
    Fv = typeof WeakMap == "function" ? WeakMap : Map,
    gt = 0,
    Et = null,
    rt = null,
    ft = 0,
    xt = 0,
    Ae = null,
    wn = !1,
    Pa = !1,
    Wu = !1,
    gn = 0,
    Vt = 0,
    _n = 0,
    ma = 0,
    $u = 0,
    Ee = 0,
    Fa = 0,
    Wi = null,
    me = null,
    Iu = !1,
    bs = 0,
    Jh = 0,
    Ss = 1 / 0,
    Ts = null,
    Un = null,
    Qt = 0,
    Bn = null,
    Wa = null,
    vn = 0,
    tr = 0,
    er = null,
    Ph = null,
    $i = 0,
    nr = null;
  function Me() {
    return (gt & 2) !== 0 && ft !== 0 ? ft & -ft : O.T !== null ? ur() : ff();
  }
  function Fh() {
    if (Ee === 0)
      if ((ft & 536870912) === 0 || mt) {
        var t = zl;
        ((zl <<= 1), (zl & 3932160) === 0 && (zl = 262144), (Ee = t));
      } else Ee = 536870912;
    return ((t = Se.current), t !== null && (t.flags |= 32), Ee);
  }
  function pe(t, e, n) {
    (((t === Et && (xt === 2 || xt === 9)) || t.cancelPendingCommit !== null) &&
      ($a(t, 0), Ln(t, ft, Ee, !1)),
      xi(t, n),
      ((gt & 2) === 0 || t !== Et) &&
        (t === Et &&
          ((gt & 2) === 0 && (ma |= n), Vt === 4 && Ln(t, ft, Ee, !1)),
        We(t)));
  }
  function Wh(t, e, n) {
    if ((gt & 6) !== 0) throw Error(u(327));
    var i = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || vi(t, e),
      s = i ? Iv(t, e) : ir(t, e, !0),
      r = i;
    do {
      if (s === 0) {
        Pa && !i && Ln(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), r && !Wv(n))) {
          ((s = ir(t, e, !1)), (r = !1));
          continue;
        }
        if (s === 2) {
          if (((r = e), t.errorRecoveryDisabledLanes & r)) var f = 0;
          else
            ((f = t.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0));
          if (f !== 0) {
            e = f;
            t: {
              var m = t;
              s = Wi;
              var S = m.current.memoizedState.isDehydrated;
              if ((S && ($a(m, f).flags |= 256), (f = ir(m, f, !1)), f !== 2)) {
                if (Wu && !S) {
                  ((m.errorRecoveryDisabledLanes |= r), (ma |= r), (s = 4));
                  break t;
                }
                ((r = me),
                  (me = s),
                  r !== null &&
                    (me === null ? (me = r) : me.push.apply(me, r)));
              }
              s = f;
            }
            if (((r = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          ($a(t, 0), Ln(t, e, 0, !0));
          break;
        }
        t: {
          switch (((i = t), (r = s), r)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Ln(i, e, Ee, !wn);
              break t;
            case 2:
              me = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((e & 62914560) === e && ((s = bs + 300 - ye()), 10 < s)) {
            if ((Ln(i, e, Ee, !wn), Vl(i, 0, !0) !== 0)) break t;
            ((vn = e),
              (i.timeoutHandle = jm(
                $h.bind(
                  null,
                  i,
                  n,
                  me,
                  Ts,
                  Iu,
                  e,
                  Ee,
                  ma,
                  Fa,
                  wn,
                  r,
                  "Throttled",
                  -0,
                  0,
                ),
                s,
              )));
            break t;
          }
          $h(i, n, me, Ts, Iu, e, Ee, ma, Fa, wn, r, null, -0, 0);
        }
      }
      break;
    } while (!0);
    We(t);
  }
  function $h(t, e, n, i, s, r, f, m, S, N, z, _, j, C) {
    if (
      ((t.timeoutHandle = -1),
      (_ = e.subtreeFlags),
      _ & 8192 || (_ & 16785408) === 16785408)
    ) {
      ((_ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: nn,
      }),
        Qh(e, r, _));
      var Z =
        (r & 62914560) === r ? bs - ye() : (r & 4194048) === r ? Jh - ye() : 0;
      if (((Z = _1(_, Z)), Z !== null)) {
        ((vn = r),
          (t.cancelPendingCommit = Z(
            sm.bind(null, t, e, r, n, i, s, f, m, S, z, _, null, j, C),
          )),
          Ln(t, r, f, !N));
        return;
      }
    }
    sm(t, e, r, n, i, s, f, m, S);
  }
  function Wv(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var i = 0; i < n.length; i++) {
          var s = n[i],
            r = s.getSnapshot;
          s = s.value;
          try {
            if (!xe(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        ((n.return = e), (e = n));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function Ln(t, e, n, i) {
    ((e &= ~$u),
      (e &= ~ma),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      i && (t.warmLanes |= e),
      (i = t.expirationTimes));
    for (var s = e; 0 < s; ) {
      var r = 31 - ve(s),
        f = 1 << r;
      ((i[r] = -1), (s &= ~f));
    }
    n !== 0 && uf(t, n, e);
  }
  function As() {
    return (gt & 6) === 0 ? (Ii(0), !1) : !0;
  }
  function ar() {
    if (rt !== null) {
      if (xt === 0) var t = rt.return;
      else ((t = rt), (on = la = null), xu(t), (Ga = null), (_i = 0), (t = rt));
      for (; t !== null; ) (Ch(t.alternate, t), (t = t.return));
      rt = null;
    }
  }
  function $a(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), g1(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (vn = 0),
      ar(),
      (Et = t),
      (rt = n = ln(t.current, null)),
      (ft = e),
      (xt = 0),
      (Ae = null),
      (wn = !1),
      (Pa = vi(t, e)),
      (Wu = !1),
      (Fa = Ee = $u = ma = _n = Vt = 0),
      (me = Wi = null),
      (Iu = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var i = t.entangledLanes;
    if (i !== 0)
      for (t = t.entanglements, i &= e; 0 < i; ) {
        var s = 31 - ve(i),
          r = 1 << s;
        ((e |= t[s]), (i &= ~r));
      }
    return ((gn = e), Ql(), n);
  }
  function Ih(t, e) {
    ((it = null),
      (O.H = Xi),
      e === Ya || e === $l
        ? ((e = pd()), (xt = 3))
        : e === ou
          ? ((e = pd()), (xt = 4))
          : (xt =
              e === _u
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (Ae = e),
      rt === null && ((Vt = 1), ds(t, Ce(e, t.current))));
  }
  function tm() {
    var t = Se.current;
    return t === null
      ? !0
      : (ft & 4194048) === ft
        ? Re === null
        : (ft & 62914560) === ft || (ft & 536870912) !== 0
          ? t === Re
          : !1;
  }
  function em() {
    var t = O.H;
    return ((O.H = Xi), t === null ? Xi : t);
  }
  function nm() {
    var t = O.A;
    return ((O.A = Pv), t);
  }
  function Es() {
    ((Vt = 4),
      wn || ((ft & 4194048) !== ft && Se.current !== null) || (Pa = !0),
      ((_n & 134217727) === 0 && (ma & 134217727) === 0) ||
        Et === null ||
        Ln(Et, ft, Ee, !1));
  }
  function ir(t, e, n) {
    var i = gt;
    gt |= 2;
    var s = em(),
      r = nm();
    ((Et !== t || ft !== e) && ((Ts = null), $a(t, e)), (e = !1));
    var f = Vt;
    t: do
      try {
        if (xt !== 0 && rt !== null) {
          var m = rt,
            S = Ae;
          switch (xt) {
            case 8:
              (ar(), (f = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Se.current === null && (e = !0);
              var N = xt;
              if (((xt = 0), (Ae = null), Ia(t, m, S, N), n && Pa)) {
                f = 0;
                break t;
              }
              break;
            default:
              ((N = xt), (xt = 0), (Ae = null), Ia(t, m, S, N));
          }
        }
        ($v(), (f = Vt));
        break;
      } catch (z) {
        Ih(t, z);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (on = la = null),
      (gt = i),
      (O.H = s),
      (O.A = r),
      rt === null && ((Et = null), (ft = 0), Ql()),
      f
    );
  }
  function $v() {
    for (; rt !== null; ) am(rt);
  }
  function Iv(t, e) {
    var n = gt;
    gt |= 2;
    var i = em(),
      s = nm();
    Et !== t || ft !== e
      ? ((Ts = null), (Ss = ye() + 500), $a(t, e))
      : (Pa = vi(t, e));
    t: do
      try {
        if (xt !== 0 && rt !== null) {
          e = rt;
          var r = Ae;
          e: switch (xt) {
            case 1:
              ((xt = 0), (Ae = null), Ia(t, e, r, 1));
              break;
            case 2:
            case 9:
              if (hd(r)) {
                ((xt = 0), (Ae = null), im(e));
                break;
              }
              ((e = function () {
                ((xt !== 2 && xt !== 9) || Et !== t || (xt = 7), We(t));
              }),
                r.then(e, e));
              break t;
            case 3:
              xt = 7;
              break t;
            case 4:
              xt = 5;
              break t;
            case 7:
              hd(r)
                ? ((xt = 0), (Ae = null), im(e))
                : ((xt = 0), (Ae = null), Ia(t, e, r, 7));
              break;
            case 5:
              var f = null;
              switch (rt.tag) {
                case 26:
                  f = rt.memoizedState;
                case 5:
                case 27:
                  var m = rt;
                  if (f ? Xm(f) : m.stateNode.complete) {
                    ((xt = 0), (Ae = null));
                    var S = m.sibling;
                    if (S !== null) rt = S;
                    else {
                      var N = m.return;
                      N !== null ? ((rt = N), Ms(N)) : (rt = null);
                    }
                    break e;
                  }
              }
              ((xt = 0), (Ae = null), Ia(t, e, r, 5));
              break;
            case 6:
              ((xt = 0), (Ae = null), Ia(t, e, r, 6));
              break;
            case 8:
              (ar(), (Vt = 6));
              break t;
            default:
              throw Error(u(462));
          }
        }
        t1();
        break;
      } catch (z) {
        Ih(t, z);
      }
    while (!0);
    return (
      (on = la = null),
      (O.H = i),
      (O.A = s),
      (gt = n),
      rt !== null ? 0 : ((Et = null), (ft = 0), Ql(), Vt)
    );
  }
  function t1() {
    for (; rt !== null && !Ag(); ) am(rt);
  }
  function am(t) {
    var e = Nh(t.alternate, t, gn);
    ((t.memoizedProps = t.pendingProps), e === null ? Ms(t) : (rt = e));
  }
  function im(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Sh(n, e, e.pendingProps, e.type, void 0, ft);
        break;
      case 11:
        e = Sh(n, e, e.pendingProps, e.type.render, e.ref, ft);
        break;
      case 5:
        xu(e);
      default:
        (Ch(n, e), (e = rt = nd(e, gn)), (e = Nh(n, e, gn)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Ms(t) : (rt = e));
  }
  function Ia(t, e, n, i) {
    ((on = la = null), xu(e), (Ga = null), (_i = 0));
    var s = e.return;
    try {
      if (Gv(t, s, e, n, ft)) {
        ((Vt = 1), ds(t, Ce(n, t.current)), (rt = null));
        return;
      }
    } catch (r) {
      if (s !== null) throw ((rt = s), r);
      ((Vt = 1), ds(t, Ce(n, t.current)), (rt = null));
      return;
    }
    e.flags & 32768
      ? (mt || i === 1
          ? (t = !0)
          : Pa || (ft & 536870912) !== 0
            ? (t = !1)
            : ((wn = t = !0),
              (i === 2 || i === 9 || i === 3 || i === 6) &&
                ((i = Se.current),
                i !== null && i.tag === 13 && (i.flags |= 16384))),
        lm(e, t))
      : Ms(e);
  }
  function Ms(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        lm(e, wn);
        return;
      }
      t = e.return;
      var n = Zv(e.alternate, e, gn);
      if (n !== null) {
        rt = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        rt = e;
        return;
      }
      rt = e = t;
    } while (e !== null);
    Vt === 0 && (Vt = 5);
  }
  function lm(t, e) {
    do {
      var n = Kv(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), (rt = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        rt = t;
        return;
      }
      rt = t = n;
    } while (t !== null);
    ((Vt = 6), (rt = null));
  }
  function sm(t, e, n, i, s, r, f, m, S) {
    t.cancelPendingCommit = null;
    do Ds();
    while (Qt !== 0);
    if ((gt & 6) !== 0) throw Error(u(327));
    if (e !== null) {
      if (e === t.current) throw Error(u(177));
      if (
        ((r = e.lanes | e.childLanes),
        (r |= Ko),
        Rg(t, n, r, f, m, S),
        t === Et && ((rt = Et = null), (ft = 0)),
        (Wa = e),
        (Bn = t),
        (vn = n),
        (tr = r),
        (er = s),
        (Ph = i),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            i1(jl, function () {
              return (fm(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (i = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || i)
      ) {
        ((i = O.T), (O.T = null), (s = q.p), (q.p = 2), (f = gt), (gt |= 4));
        try {
          kv(t, e, n);
        } finally {
          ((gt = f), (q.p = s), (O.T = i));
        }
      }
      ((Qt = 1), om(), um(), rm());
    }
  }
  function om() {
    if (Qt === 1) {
      Qt = 0;
      var t = Bn,
        e = Wa,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        ((n = O.T), (O.T = null));
        var i = q.p;
        q.p = 2;
        var s = gt;
        gt |= 4;
        try {
          Yh(e, t);
          var r = yr,
            f = kf(t.containerInfo),
            m = r.focusedElem,
            S = r.selectionRange;
          if (
            f !== m &&
            m &&
            m.ownerDocument &&
            Kf(m.ownerDocument.documentElement, m)
          ) {
            if (S !== null && Yo(m)) {
              var N = S.start,
                z = S.end;
              if ((z === void 0 && (z = N), "selectionStart" in m))
                ((m.selectionStart = N),
                  (m.selectionEnd = Math.min(z, m.value.length)));
              else {
                var _ = m.ownerDocument || document,
                  j = (_ && _.defaultView) || window;
                if (j.getSelection) {
                  var C = j.getSelection(),
                    Z = m.textContent.length,
                    tt = Math.min(S.start, Z),
                    At = S.end === void 0 ? tt : Math.min(S.end, Z);
                  !C.extend && tt > At && ((f = At), (At = tt), (tt = f));
                  var M = Zf(m, tt),
                    T = Zf(m, At);
                  if (
                    M &&
                    T &&
                    (C.rangeCount !== 1 ||
                      C.anchorNode !== M.node ||
                      C.anchorOffset !== M.offset ||
                      C.focusNode !== T.node ||
                      C.focusOffset !== T.offset)
                  ) {
                    var D = _.createRange();
                    (D.setStart(M.node, M.offset),
                      C.removeAllRanges(),
                      tt > At
                        ? (C.addRange(D), C.extend(T.node, T.offset))
                        : (D.setEnd(T.node, T.offset), C.addRange(D)));
                  }
                }
              }
            }
            for (_ = [], C = m; (C = C.parentNode); )
              C.nodeType === 1 &&
                _.push({ element: C, left: C.scrollLeft, top: C.scrollTop });
            for (
              typeof m.focus == "function" && m.focus(), m = 0;
              m < _.length;
              m++
            ) {
              var R = _[m];
              ((R.element.scrollLeft = R.left), (R.element.scrollTop = R.top));
            }
          }
          ((Ls = !!pr), (yr = pr = null));
        } finally {
          ((gt = s), (q.p = i), (O.T = n));
        }
      }
      ((t.current = e), (Qt = 2));
    }
  }
  function um() {
    if (Qt === 2) {
      Qt = 0;
      var t = Bn,
        e = Wa,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = O.T), (O.T = null));
        var i = q.p;
        q.p = 2;
        var s = gt;
        gt |= 4;
        try {
          Uh(t, e.alternate, e);
        } finally {
          ((gt = s), (q.p = i), (O.T = n));
        }
      }
      Qt = 3;
    }
  }
  function rm() {
    if (Qt === 4 || Qt === 3) {
      ((Qt = 0), Eg());
      var t = Bn,
        e = Wa,
        n = vn,
        i = Ph;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Qt = 5)
        : ((Qt = 0), (Wa = Bn = null), cm(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (
        (s === 0 && (Un = null),
        To(n),
        (e = e.stateNode),
        ge && typeof ge.onCommitFiberRoot == "function")
      )
        try {
          ge.onCommitFiberRoot(gi, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        ((e = O.T), (s = q.p), (q.p = 2), (O.T = null));
        try {
          for (var r = t.onRecoverableError, f = 0; f < i.length; f++) {
            var m = i[f];
            r(m.value, { componentStack: m.stack });
          }
        } finally {
          ((O.T = e), (q.p = s));
        }
      }
      ((vn & 3) !== 0 && Ds(),
        We(t),
        (s = t.pendingLanes),
        (n & 261930) !== 0 && (s & 42) !== 0
          ? t === nr
            ? $i++
            : (($i = 0), (nr = t))
          : ($i = 0),
        Ii(0));
    }
  }
  function cm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Ri(e)));
  }
  function Ds() {
    return (om(), um(), rm(), fm());
  }
  function fm() {
    if (Qt !== 5) return !1;
    var t = Bn,
      e = tr;
    tr = 0;
    var n = To(vn),
      i = O.T,
      s = q.p;
    try {
      ((q.p = 32 > n ? 32 : n), (O.T = null), (n = er), (er = null));
      var r = Bn,
        f = vn;
      if (((Qt = 0), (Wa = Bn = null), (vn = 0), (gt & 6) !== 0))
        throw Error(u(331));
      var m = gt;
      if (
        ((gt |= 4),
        Kh(r.current),
        Xh(r, r.current, f, n),
        (gt = m),
        Ii(0, !1),
        ge && typeof ge.onPostCommitFiberRoot == "function")
      )
        try {
          ge.onPostCommitFiberRoot(gi, r);
        } catch {}
      return !0;
    } finally {
      ((q.p = s), (O.T = i), cm(t, e));
    }
  }
  function dm(t, e, n) {
    ((e = Ce(n, e)),
      (e = wu(t.stateNode, e, 2)),
      (t = zn(t, e, 2)),
      t !== null && (xi(t, 2), We(t)));
  }
  function bt(t, e, n) {
    if (t.tag === 3) dm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          dm(e, t, n);
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (Un === null || !Un.has(i)))
          ) {
            ((t = Ce(n, t)),
              (n = hh(2)),
              (i = zn(e, n, 2)),
              i !== null && (mh(n, i, e, t), xi(i, 2), We(i)));
            break;
          }
        }
        e = e.return;
      }
  }
  function lr(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new Fv();
      var s = new Set();
      i.set(e, s);
    } else ((s = i.get(e)), s === void 0 && ((s = new Set()), i.set(e, s)));
    s.has(n) ||
      ((Wu = !0), s.add(n), (t = e1.bind(null, t, e, n)), e.then(t, t));
  }
  function e1(t, e, n) {
    var i = t.pingCache;
    (i !== null && i.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Et === t &&
        (ft & n) === n &&
        (Vt === 4 || (Vt === 3 && (ft & 62914560) === ft && 300 > ye() - bs)
          ? (gt & 2) === 0 && $a(t, 0)
          : ($u |= n),
        Fa === ft && (Fa = 0)),
      We(t));
  }
  function hm(t, e) {
    (e === 0 && (e = of()), (t = na(t, e)), t !== null && (xi(t, e), We(t)));
  }
  function n1(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), hm(t, n));
  }
  function a1(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var i = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    (i !== null && i.delete(e), hm(t, n));
  }
  function i1(t, e) {
    return vo(t, e);
  }
  var Ns = null,
    ti = null,
    sr = !1,
    js = !1,
    or = !1,
    Hn = 0;
  function We(t) {
    (t !== ti &&
      t.next === null &&
      (ti === null ? (Ns = ti = t) : (ti = ti.next = t)),
      (js = !0),
      sr || ((sr = !0), s1()));
  }
  function Ii(t, e) {
    if (!or && js) {
      or = !0;
      do
        for (var n = !1, i = Ns; i !== null; ) {
          if (t !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var f = i.suspendedLanes,
                m = i.pingedLanes;
              ((r = (1 << (31 - ve(42 | t) + 1)) - 1),
                (r &= s & ~(f & ~m)),
                (r = r & 201326741 ? (r & 201326741) | 1 : r ? r | 2 : 0));
            }
            r !== 0 && ((n = !0), gm(i, r));
          } else
            ((r = ft),
              (r = Vl(
                i,
                i === Et ? r : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1,
              )),
              (r & 3) === 0 || vi(i, r) || ((n = !0), gm(i, r)));
          i = i.next;
        }
      while (n);
      or = !1;
    }
  }
  function l1() {
    mm();
  }
  function mm() {
    js = sr = !1;
    var t = 0;
    Hn !== 0 && y1() && (t = Hn);
    for (var e = ye(), n = null, i = Ns; i !== null; ) {
      var s = i.next,
        r = pm(i, e);
      (r === 0
        ? ((i.next = null),
          n === null ? (Ns = s) : (n.next = s),
          s === null && (ti = n))
        : ((n = i), (t !== 0 || (r & 3) !== 0) && (js = !0)),
        (i = s));
    }
    ((Qt !== 0 && Qt !== 5) || Ii(t), Hn !== 0 && (Hn = 0));
  }
  function pm(t, e) {
    for (
      var n = t.suspendedLanes,
        i = t.pingedLanes,
        s = t.expirationTimes,
        r = t.pendingLanes & -62914561;
      0 < r;
    ) {
      var f = 31 - ve(r),
        m = 1 << f,
        S = s[f];
      (S === -1
        ? ((m & n) === 0 || (m & i) !== 0) && (s[f] = Vg(m, e))
        : S <= e && (t.expiredLanes |= m),
        (r &= ~m));
    }
    if (
      ((e = Et),
      (n = ft),
      (n = Vl(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (i = t.callbackNode),
      n === 0 ||
        (t === e && (xt === 2 || xt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && xo(i),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || vi(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((i !== null && xo(i), To(n))) {
        case 2:
        case 8:
          n = lf;
          break;
        case 32:
          n = jl;
          break;
        case 268435456:
          n = sf;
          break;
        default:
          n = jl;
      }
      return (
        (i = ym.bind(null, t)),
        (n = vo(n, i)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      i !== null && i !== null && xo(i),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function ym(t, e) {
    if (Qt !== 0 && Qt !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (Ds() && t.callbackNode !== n) return null;
    var i = ft;
    return (
      (i = Vl(
        t,
        t === Et ? i : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      i === 0
        ? null
        : (Wh(t, i, e),
          pm(t, ye()),
          t.callbackNode != null && t.callbackNode === n
            ? ym.bind(null, t)
            : null)
    );
  }
  function gm(t, e) {
    if (Ds()) return null;
    Wh(t, e, !0);
  }
  function s1() {
    v1(function () {
      (gt & 6) !== 0 ? vo(af, l1) : mm();
    });
  }
  function ur() {
    if (Hn === 0) {
      var t = Ha;
      (t === 0 && ((t = Cl), (Cl <<= 1), (Cl & 261888) === 0 && (Cl = 256)),
        (Hn = t));
    }
    return Hn;
  }
  function vm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Ul("" + t);
  }
  function xm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function o1(t, e, n, i, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var r = vm((s[re] || null).action),
        f = i.submitter;
      f &&
        ((e = (e = f[re] || null)
          ? vm(e.formAction)
          : f.getAttribute("formAction")),
        e !== null && ((r = e), (f = null)));
      var m = new ql("action", "action", null, i, s);
      t.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (Hn !== 0) {
                  var S = f ? xm(s, f) : new FormData(s);
                  ju(
                    n,
                    { pending: !0, data: S, method: s.method, action: r },
                    null,
                    S,
                  );
                }
              } else
                typeof r == "function" &&
                  (m.preventDefault(),
                  (S = f ? xm(s, f) : new FormData(s)),
                  ju(
                    n,
                    { pending: !0, data: S, method: s.method, action: r },
                    r,
                    S,
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var rr = 0; rr < Zo.length; rr++) {
    var cr = Zo[rr],
      u1 = cr.toLowerCase(),
      r1 = cr[0].toUpperCase() + cr.slice(1);
    qe(u1, "on" + r1);
  }
  (qe(Ff, "onAnimationEnd"),
    qe(Wf, "onAnimationIteration"),
    qe($f, "onAnimationStart"),
    qe("dblclick", "onDoubleClick"),
    qe("focusin", "onFocus"),
    qe("focusout", "onBlur"),
    qe(Mv, "onTransitionRun"),
    qe(Dv, "onTransitionStart"),
    qe(Nv, "onTransitionCancel"),
    qe(If, "onTransitionEnd"),
    Ma("onMouseEnter", ["mouseout", "mouseover"]),
    Ma("onMouseLeave", ["mouseout", "mouseover"]),
    Ma("onPointerEnter", ["pointerout", "pointerover"]),
    Ma("onPointerLeave", ["pointerout", "pointerover"]),
    $n(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    $n(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    $n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    $n(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    $n(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    $n(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var tl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    c1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(tl),
    );
  function bm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var i = t[n],
        s = i.event;
      i = i.listeners;
      t: {
        var r = void 0;
        if (e)
          for (var f = i.length - 1; 0 <= f; f--) {
            var m = i[f],
              S = m.instance,
              N = m.currentTarget;
            if (((m = m.listener), S !== r && s.isPropagationStopped()))
              break t;
            ((r = m), (s.currentTarget = N));
            try {
              r(s);
            } catch (z) {
              Xl(z);
            }
            ((s.currentTarget = null), (r = S));
          }
        else
          for (f = 0; f < i.length; f++) {
            if (
              ((m = i[f]),
              (S = m.instance),
              (N = m.currentTarget),
              (m = m.listener),
              S !== r && s.isPropagationStopped())
            )
              break t;
            ((r = m), (s.currentTarget = N));
            try {
              r(s);
            } catch (z) {
              Xl(z);
            }
            ((s.currentTarget = null), (r = S));
          }
      }
    }
  }
  function ct(t, e) {
    var n = e[Ao];
    n === void 0 && (n = e[Ao] = new Set());
    var i = t + "__bubble";
    n.has(i) || (Sm(e, t, 2, !1), n.add(i));
  }
  function fr(t, e, n) {
    var i = 0;
    (e && (i |= 4), Sm(n, t, i, e));
  }
  var Cs = "_reactListening" + Math.random().toString(36).slice(2);
  function dr(t) {
    if (!t[Cs]) {
      ((t[Cs] = !0),
        mf.forEach(function (n) {
          n !== "selectionchange" && (c1.has(n) || fr(n, !1, t), fr(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Cs] || ((e[Cs] = !0), fr("selectionchange", !1, e));
    }
  }
  function Sm(t, e, n, i) {
    switch (Fm(e)) {
      case 2:
        var s = L1;
        break;
      case 8:
        s = H1;
        break;
      default:
        s = Nr;
    }
    ((n = s.bind(null, e, n, t)),
      (s = void 0),
      !Vo ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (s = !0),
      i
        ? s !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: s })
          : t.addEventListener(e, n, !0)
        : s !== void 0
          ? t.addEventListener(e, n, { passive: s })
          : t.addEventListener(e, n, !1));
  }
  function hr(t, e, n, i, s) {
    var r = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (;;) {
        if (i === null) return;
        var f = i.tag;
        if (f === 3 || f === 4) {
          var m = i.stateNode.containerInfo;
          if (m === s) break;
          if (f === 4)
            for (f = i.return; f !== null; ) {
              var S = f.tag;
              if ((S === 3 || S === 4) && f.stateNode.containerInfo === s)
                return;
              f = f.return;
            }
          for (; m !== null; ) {
            if (((f = Ta(m)), f === null)) return;
            if (((S = f.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              i = r = f;
              continue t;
            }
            m = m.parentNode;
          }
        }
        i = i.return;
      }
    Df(function () {
      var N = r,
        z = zo(n),
        _ = [];
      t: {
        var j = td.get(t);
        if (j !== void 0) {
          var C = ql,
            Z = t;
          switch (t) {
            case "keypress":
              if (Ll(n) === 0) break t;
            case "keydown":
            case "keyup":
              C = av;
              break;
            case "focusin":
              ((Z = "focus"), (C = Uo));
              break;
            case "focusout":
              ((Z = "blur"), (C = Uo));
              break;
            case "beforeblur":
            case "afterblur":
              C = Uo;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              C = Cf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = Zg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = sv;
              break;
            case Ff:
            case Wf:
            case $f:
              C = Jg;
              break;
            case If:
              C = uv;
              break;
            case "scroll":
            case "scrollend":
              C = Xg;
              break;
            case "wheel":
              C = cv;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = Fg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = Of;
              break;
            case "toggle":
            case "beforetoggle":
              C = dv;
          }
          var tt = (e & 4) !== 0,
            At = !tt && (t === "scroll" || t === "scrollend"),
            M = tt ? (j !== null ? j + "Capture" : null) : j;
          tt = [];
          for (var T = N, D; T !== null; ) {
            var R = T;
            if (
              ((D = R.stateNode),
              (R = R.tag),
              (R !== 5 && R !== 26 && R !== 27) ||
                D === null ||
                M === null ||
                ((R = Ti(T, M)), R != null && tt.push(el(T, R, D))),
              At)
            )
              break;
            T = T.return;
          }
          0 < tt.length &&
            ((j = new C(j, Z, null, n, z)),
            _.push({ event: j, listeners: tt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((j = t === "mouseover" || t === "pointerover"),
            (C = t === "mouseout" || t === "pointerout"),
            j &&
              n !== Co &&
              (Z = n.relatedTarget || n.fromElement) &&
              (Ta(Z) || Z[Sa]))
          )
            break t;
          if (
            (C || j) &&
            ((j =
              z.window === z
                ? z
                : (j = z.ownerDocument)
                  ? j.defaultView || j.parentWindow
                  : window),
            C
              ? ((Z = n.relatedTarget || n.toElement),
                (C = N),
                (Z = Z ? Ta(Z) : null),
                Z !== null &&
                  ((At = h(Z)),
                  (tt = Z.tag),
                  Z !== At || (tt !== 5 && tt !== 27 && tt !== 6)) &&
                  (Z = null))
              : ((C = null), (Z = N)),
            C !== Z)
          ) {
            if (
              ((tt = Cf),
              (R = "onMouseLeave"),
              (M = "onMouseEnter"),
              (T = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((tt = Of),
                (R = "onPointerLeave"),
                (M = "onPointerEnter"),
                (T = "pointer")),
              (At = C == null ? j : Si(C)),
              (D = Z == null ? j : Si(Z)),
              (j = new tt(R, T + "leave", C, n, z)),
              (j.target = At),
              (j.relatedTarget = D),
              (R = null),
              Ta(z) === N &&
                ((tt = new tt(M, T + "enter", Z, n, z)),
                (tt.target = D),
                (tt.relatedTarget = At),
                (R = tt)),
              (At = R),
              C && Z)
            )
              e: {
                for (tt = f1, M = C, T = Z, D = 0, R = M; R; R = tt(R)) D++;
                R = 0;
                for (var $ = T; $; $ = tt($)) R++;
                for (; 0 < D - R; ) ((M = tt(M)), D--);
                for (; 0 < R - D; ) ((T = tt(T)), R--);
                for (; D--; ) {
                  if (M === T || (T !== null && M === T.alternate)) {
                    tt = M;
                    break e;
                  }
                  ((M = tt(M)), (T = tt(T)));
                }
                tt = null;
              }
            else tt = null;
            (C !== null && Tm(_, j, C, tt, !1),
              Z !== null && At !== null && Tm(_, At, Z, tt, !0));
          }
        }
        t: {
          if (
            ((j = N ? Si(N) : window),
            (C = j.nodeName && j.nodeName.toLowerCase()),
            C === "select" || (C === "input" && j.type === "file"))
          )
            var pt = Hf;
          else if (Bf(j))
            if (qf) pt = Tv;
            else {
              pt = bv;
              var J = xv;
            }
          else
            ((C = j.nodeName),
              !C ||
              C.toLowerCase() !== "input" ||
              (j.type !== "checkbox" && j.type !== "radio")
                ? N && jo(N.elementType) && (pt = Hf)
                : (pt = Sv));
          if (pt && (pt = pt(t, N))) {
            Lf(_, pt, n, z);
            break t;
          }
          (J && J(t, j, N),
            t === "focusout" &&
              N &&
              j.type === "number" &&
              N.memoizedProps.value != null &&
              No(j, "number", j.value));
        }
        switch (((J = N ? Si(N) : window), t)) {
          case "focusin":
            (Bf(J) || J.contentEditable === "true") &&
              ((Oa = J), (Go = N), (zi = null));
            break;
          case "focusout":
            zi = Go = Oa = null;
            break;
          case "mousedown":
            Xo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Xo = !1), Jf(_, n, z));
            break;
          case "selectionchange":
            if (Ev) break;
          case "keydown":
          case "keyup":
            Jf(_, n, z);
        }
        var ot;
        if (Lo)
          t: {
            switch (t) {
              case "compositionstart":
                var dt = "onCompositionStart";
                break t;
              case "compositionend":
                dt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                dt = "onCompositionUpdate";
                break t;
            }
            dt = void 0;
          }
        else
          za
            ? _f(t, n) && (dt = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (dt = "onCompositionStart");
        (dt &&
          (Vf &&
            n.locale !== "ko" &&
            (za || dt !== "onCompositionStart"
              ? dt === "onCompositionEnd" && za && (ot = Nf())
              : ((An = z),
                (Ro = "value" in An ? An.value : An.textContent),
                (za = !0))),
          (J = zs(N, dt)),
          0 < J.length &&
            ((dt = new zf(dt, t, null, n, z)),
            _.push({ event: dt, listeners: J }),
            ot
              ? (dt.data = ot)
              : ((ot = Uf(n)), ot !== null && (dt.data = ot)))),
          (ot = mv ? pv(t, n) : yv(t, n)) &&
            ((dt = zs(N, "onBeforeInput")),
            0 < dt.length &&
              ((J = new zf("onBeforeInput", "beforeinput", null, n, z)),
              _.push({ event: J, listeners: dt }),
              (J.data = ot))),
          o1(_, t, N, n, z));
      }
      bm(_, e);
    });
  }
  function el(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function zs(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var s = t,
        r = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          r === null ||
          ((s = Ti(t, n)),
          s != null && i.unshift(el(t, s, r)),
          (s = Ti(t, e)),
          s != null && i.push(el(t, s, r))),
        t.tag === 3)
      )
        return i;
      t = t.return;
    }
    return [];
  }
  function f1(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Tm(t, e, n, i, s) {
    for (var r = e._reactName, f = []; n !== null && n !== i; ) {
      var m = n,
        S = m.alternate,
        N = m.stateNode;
      if (((m = m.tag), S !== null && S === i)) break;
      ((m !== 5 && m !== 26 && m !== 27) ||
        N === null ||
        ((S = N),
        s
          ? ((N = Ti(n, r)), N != null && f.unshift(el(n, N, S)))
          : s || ((N = Ti(n, r)), N != null && f.push(el(n, N, S)))),
        (n = n.return));
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var d1 = /\r\n?/g,
    h1 = /\u0000|\uFFFD/g;
  function Am(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        d1,
        `
`,
      )
      .replace(h1, "");
  }
  function Em(t, e) {
    return ((e = Am(e)), Am(t) === e);
  }
  function Tt(t, e, n, i, s, r) {
    switch (n) {
      case "children":
        typeof i == "string"
          ? e === "body" || (e === "textarea" && i === "") || Na(t, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            e !== "body" &&
            Na(t, "" + i);
        break;
      case "className":
        wl(t, "class", i);
        break;
      case "tabIndex":
        wl(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        wl(t, n, i);
        break;
      case "style":
        Ef(t, i, r);
        break;
      case "data":
        if (e !== "object") {
          wl(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        ((i = Ul("" + i)), t.setAttribute(n, i));
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof r == "function" &&
            (n === "formAction"
              ? (e !== "input" && Tt(t, e, "name", s.name, s, null),
                Tt(t, e, "formEncType", s.formEncType, s, null),
                Tt(t, e, "formMethod", s.formMethod, s, null),
                Tt(t, e, "formTarget", s.formTarget, s, null))
              : (Tt(t, e, "encType", s.encType, s, null),
                Tt(t, e, "method", s.method, s, null),
                Tt(t, e, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((i = Ul("" + i)), t.setAttribute(n, i));
        break;
      case "onClick":
        i != null && (t.onclick = nn);
        break;
      case "onScroll":
        i != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        i != null && ct("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(u(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(u(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((n = Ul("" + i)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "" + i)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0
          ? t.setAttribute(n, "")
          : i !== !1 &&
              i != null &&
              typeof i != "function" &&
              typeof i != "symbol"
            ? t.setAttribute(n, i)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? t.setAttribute(n, i)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? t.removeAttribute(n)
          : t.setAttribute(n, i);
        break;
      case "popover":
        (ct("beforetoggle", t), ct("toggle", t), Rl(t, "popover", i));
        break;
      case "xlinkActuate":
        en(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        en(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        en(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        en(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        en(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        en(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        en(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        en(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        en(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        Rl(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Yg.get(n) || n), Rl(t, n, i));
    }
  }
  function mr(t, e, n, i, s, r) {
    switch (n) {
      case "style":
        Ef(t, i, r);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(u(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(u(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? Na(t, i)
          : (typeof i == "number" || typeof i == "bigint") && Na(t, "" + i);
        break;
      case "onScroll":
        i != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        i != null && ct("scrollend", t);
        break;
      case "onClick":
        i != null && (t.onclick = nn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!pf.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (e = n.slice(2, s ? n.length - 7 : void 0)),
              (r = t[re] || null),
              (r = r != null ? r[n] : null),
              typeof r == "function" && t.removeEventListener(e, r, s),
              typeof i == "function")
            ) {
              (typeof r != "function" &&
                r !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, i, s));
              break t;
            }
            n in t
              ? (t[n] = i)
              : i === !0
                ? t.setAttribute(n, "")
                : Rl(t, n, i);
          }
    }
  }
  function It(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (ct("error", t), ct("load", t));
        var i = !1,
          s = !1,
          r;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var f = n[r];
            if (f != null)
              switch (r) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, e));
                default:
                  Tt(t, e, r, f, n, null);
              }
          }
        (s && Tt(t, e, "srcSet", n.srcSet, n, null),
          i && Tt(t, e, "src", n.src, n, null));
        return;
      case "input":
        ct("invalid", t);
        var m = (r = f = s = null),
          S = null,
          N = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var z = n[i];
            if (z != null)
              switch (i) {
                case "name":
                  s = z;
                  break;
                case "type":
                  f = z;
                  break;
                case "checked":
                  S = z;
                  break;
                case "defaultChecked":
                  N = z;
                  break;
                case "value":
                  r = z;
                  break;
                case "defaultValue":
                  m = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null) throw Error(u(137, e));
                  break;
                default:
                  Tt(t, e, i, z, n, null);
              }
          }
        bf(t, r, m, S, N, f, s, !1);
        return;
      case "select":
        (ct("invalid", t), (i = f = r = null));
        for (s in n)
          if (n.hasOwnProperty(s) && ((m = n[s]), m != null))
            switch (s) {
              case "value":
                r = m;
                break;
              case "defaultValue":
                f = m;
                break;
              case "multiple":
                i = m;
              default:
                Tt(t, e, s, m, n, null);
            }
        ((e = r),
          (n = f),
          (t.multiple = !!i),
          e != null ? Da(t, !!i, e, !1) : n != null && Da(t, !!i, n, !0));
        return;
      case "textarea":
        (ct("invalid", t), (r = s = i = null));
        for (f in n)
          if (n.hasOwnProperty(f) && ((m = n[f]), m != null))
            switch (f) {
              case "value":
                i = m;
                break;
              case "defaultValue":
                s = m;
                break;
              case "children":
                r = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(u(91));
                break;
              default:
                Tt(t, e, f, m, n, null);
            }
        Tf(t, i, s, r);
        return;
      case "option":
        for (S in n)
          n.hasOwnProperty(S) &&
            ((i = n[S]), i != null) &&
            (S === "selected"
              ? (t.selected =
                  i && typeof i != "function" && typeof i != "symbol")
              : Tt(t, e, S, i, n, null));
        return;
      case "dialog":
        (ct("beforetoggle", t),
          ct("toggle", t),
          ct("cancel", t),
          ct("close", t));
        break;
      case "iframe":
      case "object":
        ct("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < tl.length; i++) ct(tl[i], t);
        break;
      case "image":
        (ct("error", t), ct("load", t));
        break;
      case "details":
        ct("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (ct("error", t), ct("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (N in n)
          if (n.hasOwnProperty(N) && ((i = n[N]), i != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, e));
              default:
                Tt(t, e, N, i, n, null);
            }
        return;
      default:
        if (jo(e)) {
          for (z in n)
            n.hasOwnProperty(z) &&
              ((i = n[z]), i !== void 0 && mr(t, e, z, i, n, void 0));
          return;
        }
    }
    for (m in n)
      n.hasOwnProperty(m) && ((i = n[m]), i != null && Tt(t, e, m, i, n, null));
  }
  function m1(t, e, n, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          r = null,
          f = null,
          m = null,
          S = null,
          N = null,
          z = null;
        for (C in n) {
          var _ = n[C];
          if (n.hasOwnProperty(C) && _ != null)
            switch (C) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = _;
              default:
                i.hasOwnProperty(C) || Tt(t, e, C, null, i, _);
            }
        }
        for (var j in i) {
          var C = i[j];
          if (((_ = n[j]), i.hasOwnProperty(j) && (C != null || _ != null)))
            switch (j) {
              case "type":
                r = C;
                break;
              case "name":
                s = C;
                break;
              case "checked":
                N = C;
                break;
              case "defaultChecked":
                z = C;
                break;
              case "value":
                f = C;
                break;
              case "defaultValue":
                m = C;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(u(137, e));
                break;
              default:
                C !== _ && Tt(t, e, j, C, i, _);
            }
        }
        Do(t, f, m, S, N, z, r, s);
        return;
      case "select":
        C = f = m = j = null;
        for (r in n)
          if (((S = n[r]), n.hasOwnProperty(r) && S != null))
            switch (r) {
              case "value":
                break;
              case "multiple":
                C = S;
              default:
                i.hasOwnProperty(r) || Tt(t, e, r, null, i, S);
            }
        for (s in i)
          if (
            ((r = i[s]),
            (S = n[s]),
            i.hasOwnProperty(s) && (r != null || S != null))
          )
            switch (s) {
              case "value":
                j = r;
                break;
              case "defaultValue":
                m = r;
                break;
              case "multiple":
                f = r;
              default:
                r !== S && Tt(t, e, s, r, i, S);
            }
        ((e = m),
          (n = f),
          (i = C),
          j != null
            ? Da(t, !!n, j, !1)
            : !!i != !!n &&
              (e != null ? Da(t, !!n, e, !0) : Da(t, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        C = j = null;
        for (m in n)
          if (
            ((s = n[m]),
            n.hasOwnProperty(m) && s != null && !i.hasOwnProperty(m))
          )
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                Tt(t, e, m, null, i, s);
            }
        for (f in i)
          if (
            ((s = i[f]),
            (r = n[f]),
            i.hasOwnProperty(f) && (s != null || r != null))
          )
            switch (f) {
              case "value":
                j = s;
                break;
              case "defaultValue":
                C = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(u(91));
                break;
              default:
                s !== r && Tt(t, e, f, s, i, r);
            }
        Sf(t, j, C);
        return;
      case "option":
        for (var Z in n)
          ((j = n[Z]),
            n.hasOwnProperty(Z) &&
              j != null &&
              !i.hasOwnProperty(Z) &&
              (Z === "selected" ? (t.selected = !1) : Tt(t, e, Z, null, i, j)));
        for (S in i)
          ((j = i[S]),
            (C = n[S]),
            i.hasOwnProperty(S) &&
              j !== C &&
              (j != null || C != null) &&
              (S === "selected"
                ? (t.selected =
                    j && typeof j != "function" && typeof j != "symbol")
                : Tt(t, e, S, j, i, C)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var tt in n)
          ((j = n[tt]),
            n.hasOwnProperty(tt) &&
              j != null &&
              !i.hasOwnProperty(tt) &&
              Tt(t, e, tt, null, i, j));
        for (N in i)
          if (
            ((j = i[N]),
            (C = n[N]),
            i.hasOwnProperty(N) && j !== C && (j != null || C != null))
          )
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null) throw Error(u(137, e));
                break;
              default:
                Tt(t, e, N, j, i, C);
            }
        return;
      default:
        if (jo(e)) {
          for (var At in n)
            ((j = n[At]),
              n.hasOwnProperty(At) &&
                j !== void 0 &&
                !i.hasOwnProperty(At) &&
                mr(t, e, At, void 0, i, j));
          for (z in i)
            ((j = i[z]),
              (C = n[z]),
              !i.hasOwnProperty(z) ||
                j === C ||
                (j === void 0 && C === void 0) ||
                mr(t, e, z, j, i, C));
          return;
        }
    }
    for (var M in n)
      ((j = n[M]),
        n.hasOwnProperty(M) &&
          j != null &&
          !i.hasOwnProperty(M) &&
          Tt(t, e, M, null, i, j));
    for (_ in i)
      ((j = i[_]),
        (C = n[_]),
        !i.hasOwnProperty(_) ||
          j === C ||
          (j == null && C == null) ||
          Tt(t, e, _, j, i, C));
  }
  function Mm(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function p1() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), i = 0;
        i < n.length;
        i++
      ) {
        var s = n[i],
          r = s.transferSize,
          f = s.initiatorType,
          m = s.duration;
        if (r && m && Mm(f)) {
          for (f = 0, m = s.responseEnd, i += 1; i < n.length; i++) {
            var S = n[i],
              N = S.startTime;
            if (N > m) break;
            var z = S.transferSize,
              _ = S.initiatorType;
            z &&
              Mm(_) &&
              ((S = S.responseEnd), (f += z * (S < m ? 1 : (m - N) / (S - N))));
          }
          if ((--i, (e += (8 * (r + f)) / (s.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var pr = null,
    yr = null;
  function Os(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Dm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Nm(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function gr(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var vr = null;
  function y1() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === vr
        ? !1
        : ((vr = t), !0)
      : ((vr = null), !1);
  }
  var jm = typeof setTimeout == "function" ? setTimeout : void 0,
    g1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Cm = typeof Promise == "function" ? Promise : void 0,
    v1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Cm < "u"
          ? function (t) {
              return Cm.resolve(null).then(t).catch(x1);
            }
          : jm;
  function x1(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function qn(t) {
    return t === "head";
  }
  function zm(t, e) {
    var n = e,
      i = 0;
    do {
      var s = n.nextSibling;
      if ((t.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$" || n === "/&")) {
          if (i === 0) {
            (t.removeChild(s), ii(e));
            return;
          }
          i--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          i++;
        else if (n === "html") nl(t.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = t.ownerDocument.head), nl(n));
          for (var r = n.firstChild; r; ) {
            var f = r.nextSibling,
              m = r.nodeName;
            (r[bi] ||
              m === "SCRIPT" ||
              m === "STYLE" ||
              (m === "LINK" && r.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(r),
              (r = f));
          }
        } else n === "body" && nl(t.ownerDocument.body);
      n = s;
    } while (n);
    ii(e);
  }
  function Om(t, e) {
    var n = t;
    t = 0;
    do {
      var i = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (e
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        i && i.nodeType === 8)
      )
        if (((n = i.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = i;
    } while (n);
  }
  function xr(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (xr(n), Eo(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function b1(t, e, n, i) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (i) {
        if (!t[bi])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((r = t.getAttribute("rel")),
                r === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                r !== s.rel ||
                t.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                t.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((r = t.getAttribute("src")),
                (r !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  r &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === r) return t;
      } else return t;
      if (((t = we(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function S1(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = we(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Vm(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = we(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function br(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Sr(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function T1(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var i = function () {
        (e(), n.removeEventListener("DOMContentLoaded", i));
      };
      (n.addEventListener("DOMContentLoaded", i), (t._reactRetry = i));
    }
  }
  function we(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Tr = null;
  function Rm(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return we(t.nextSibling);
          e--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function wm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else (n !== "/$" && n !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function _m(t, e, n) {
    switch (((e = Os(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(u(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(u(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(u(454));
        return t;
      default:
        throw Error(u(451));
    }
  }
  function nl(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Eo(t);
  }
  var _e = new Map(),
    Um = new Set();
  function Vs(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var xn = q.d;
  q.d = { f: A1, r: E1, D: M1, C: D1, L: N1, m: j1, X: z1, S: C1, M: O1 };
  function A1() {
    var t = xn.f(),
      e = As();
    return t || e;
  }
  function E1(t) {
    var e = Aa(t);
    e !== null && e.tag === 5 && e.type === "form" ? Id(e) : xn.r(t);
  }
  var ei = typeof document > "u" ? null : document;
  function Bm(t, e, n) {
    var i = ei;
    if (i && typeof e == "string" && e) {
      var s = Ne(e);
      ((s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        Um.has(s) ||
          (Um.add(s),
          (t = { rel: t, crossOrigin: n, href: e }),
          i.querySelector(s) === null &&
            ((e = i.createElement("link")),
            It(e, "link", t),
            kt(e),
            i.head.appendChild(e))));
    }
  }
  function M1(t) {
    (xn.D(t), Bm("dns-prefetch", t, null));
  }
  function D1(t, e) {
    (xn.C(t, e), Bm("preconnect", t, e));
  }
  function N1(t, e, n) {
    xn.L(t, e, n);
    var i = ei;
    if (i && t && e) {
      var s = 'link[rel="preload"][as="' + Ne(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + Ne(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (s += '[imagesizes="' + Ne(n.imageSizes) + '"]'))
        : (s += '[href="' + Ne(t) + '"]');
      var r = s;
      switch (e) {
        case "style":
          r = ni(t);
          break;
        case "script":
          r = ai(t);
      }
      _e.has(r) ||
        ((t = b(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n,
        )),
        _e.set(r, t),
        i.querySelector(s) !== null ||
          (e === "style" && i.querySelector(al(r))) ||
          (e === "script" && i.querySelector(il(r))) ||
          ((e = i.createElement("link")),
          It(e, "link", t),
          kt(e),
          i.head.appendChild(e)));
    }
  }
  function j1(t, e) {
    xn.m(t, e);
    var n = ei;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script",
        s =
          'link[rel="modulepreload"][as="' + Ne(i) + '"][href="' + Ne(t) + '"]',
        r = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = ai(t);
      }
      if (
        !_e.has(r) &&
        ((t = b({ rel: "modulepreload", href: t }, e)),
        _e.set(r, t),
        n.querySelector(s) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(il(r))) return;
        }
        ((i = n.createElement("link")),
          It(i, "link", t),
          kt(i),
          n.head.appendChild(i));
      }
    }
  }
  function C1(t, e, n) {
    xn.S(t, e, n);
    var i = ei;
    if (i && t) {
      var s = Ea(i).hoistableStyles,
        r = ni(t);
      e = e || "default";
      var f = s.get(r);
      if (!f) {
        var m = { loading: 0, preload: null };
        if ((f = i.querySelector(al(r)))) m.loading = 5;
        else {
          ((t = b({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = _e.get(r)) && Ar(t, n));
          var S = (f = i.createElement("link"));
          (kt(S),
            It(S, "link", t),
            (S._p = new Promise(function (N, z) {
              ((S.onload = N), (S.onerror = z));
            })),
            S.addEventListener("load", function () {
              m.loading |= 1;
            }),
            S.addEventListener("error", function () {
              m.loading |= 2;
            }),
            (m.loading |= 4),
            Rs(f, e, i));
        }
        ((f = { type: "stylesheet", instance: f, count: 1, state: m }),
          s.set(r, f));
      }
    }
  }
  function z1(t, e) {
    xn.X(t, e);
    var n = ei;
    if (n && t) {
      var i = Ea(n).hoistableScripts,
        s = ai(t),
        r = i.get(s);
      r ||
        ((r = n.querySelector(il(s))),
        r ||
          ((t = b({ src: t, async: !0 }, e)),
          (e = _e.get(s)) && Er(t, e),
          (r = n.createElement("script")),
          kt(r),
          It(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        i.set(s, r));
    }
  }
  function O1(t, e) {
    xn.M(t, e);
    var n = ei;
    if (n && t) {
      var i = Ea(n).hoistableScripts,
        s = ai(t),
        r = i.get(s);
      r ||
        ((r = n.querySelector(il(s))),
        r ||
          ((t = b({ src: t, async: !0, type: "module" }, e)),
          (e = _e.get(s)) && Er(t, e),
          (r = n.createElement("script")),
          kt(r),
          It(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        i.set(s, r));
    }
  }
  function Lm(t, e, n, i) {
    var s = (s = ut.current) ? Vs(s) : null;
    if (!s) throw Error(u(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = ni(n.href)),
            (n = Ea(s).hoistableStyles),
            (i = n.get(e)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = ni(n.href);
          var r = Ea(s).hoistableStyles,
            f = r.get(t);
          if (
            (f ||
              ((s = s.ownerDocument || s),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              r.set(t, f),
              (r = s.querySelector(al(t))) &&
                !r._p &&
                ((f.instance = r), (f.state.loading = 5)),
              _e.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                _e.set(t, n),
                r || V1(s, t, n, f.state))),
            e && i === null)
          )
            throw Error(u(528, ""));
          return f;
        }
        if (e && i !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = ai(n)),
              (n = Ea(s).hoistableScripts),
              (i = n.get(e)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(u(444, t));
    }
  }
  function ni(t) {
    return 'href="' + Ne(t) + '"';
  }
  function al(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Hm(t) {
    return b({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function V1(t, e, n, i) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (i.loading = 1)
      : ((e = t.createElement("link")),
        (i.preload = e),
        e.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        It(e, "link", n),
        kt(e),
        t.head.appendChild(e));
  }
  function ai(t) {
    return '[src="' + Ne(t) + '"]';
  }
  function il(t) {
    return "script[async]" + t;
  }
  function qm(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var i = t.querySelector('style[data-href~="' + Ne(n.href) + '"]');
          if (i) return ((e.instance = i), kt(i), i);
          var s = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (t.ownerDocument || t).createElement("style")),
            kt(i),
            It(i, "style", s),
            Rs(i, n.precedence, t),
            (e.instance = i)
          );
        case "stylesheet":
          s = ni(n.href);
          var r = t.querySelector(al(s));
          if (r) return ((e.state.loading |= 4), (e.instance = r), kt(r), r);
          ((i = Hm(n)),
            (s = _e.get(s)) && Ar(i, s),
            (r = (t.ownerDocument || t).createElement("link")),
            kt(r));
          var f = r;
          return (
            (f._p = new Promise(function (m, S) {
              ((f.onload = m), (f.onerror = S));
            })),
            It(r, "link", i),
            (e.state.loading |= 4),
            Rs(r, n.precedence, t),
            (e.instance = r)
          );
        case "script":
          return (
            (r = ai(n.src)),
            (s = t.querySelector(il(r)))
              ? ((e.instance = s), kt(s), s)
              : ((i = n),
                (s = _e.get(r)) && ((i = b({}, n)), Er(i, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                kt(s),
                It(s, "link", i),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(u(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((i = e.instance), (e.state.loading |= 4), Rs(i, n.precedence, t));
    return e.instance;
  }
  function Rs(t, e, n) {
    for (
      var i = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        s = i.length ? i[i.length - 1] : null,
        r = s,
        f = 0;
      f < i.length;
      f++
    ) {
      var m = i[f];
      if (m.dataset.precedence === e) r = m;
      else if (r !== s) break;
    }
    r
      ? r.parentNode.insertBefore(t, r.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Ar(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Er(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var ws = null;
  function Ym(t, e, n) {
    if (ws === null) {
      var i = new Map(),
        s = (ws = new Map());
      s.set(n, i);
    } else ((s = ws), (i = s.get(n)), i || ((i = new Map()), s.set(n, i)));
    if (i.has(t)) return i;
    for (
      i.set(t, null), n = n.getElementsByTagName(t), s = 0;
      s < n.length;
      s++
    ) {
      var r = n[s];
      if (
        !(
          r[bi] ||
          r[Pt] ||
          (t === "link" && r.getAttribute("rel") === "stylesheet")
        ) &&
        r.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = r.getAttribute(e) || "";
        f = t + f;
        var m = i.get(f);
        m ? m.push(r) : i.set(f, [r]);
      }
    }
    return i;
  }
  function Gm(t, e, n) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function R1(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        return e.rel === "stylesheet"
          ? ((t = e.disabled), typeof e.precedence == "string" && t == null)
          : !0;
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Xm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function w1(t, e, n, i) {
    if (
      n.type === "stylesheet" &&
      (typeof i.media != "string" || matchMedia(i.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var s = ni(i.href),
          r = e.querySelector(al(s));
        if (r) {
          ((e = r._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = _s.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = r),
            kt(r));
          return;
        }
        ((r = e.ownerDocument || e),
          (i = Hm(i)),
          (s = _e.get(s)) && Ar(i, s),
          (r = r.createElement("link")),
          kt(r));
        var f = r;
        ((f._p = new Promise(function (m, S) {
          ((f.onload = m), (f.onerror = S));
        })),
          It(r, "link", i),
          (n.instance = r));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = _s.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n)));
    }
  }
  var Mr = 0;
  function _1(t, e) {
    return (
      t.stylesheets && t.count === 0 && Bs(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var i = setTimeout(function () {
              if ((t.stylesheets && Bs(t, t.stylesheets), t.unsuspend)) {
                var r = t.unsuspend;
                ((t.unsuspend = null), r());
              }
            }, 6e4 + e);
            0 < t.imgBytes && Mr === 0 && (Mr = 62500 * p1());
            var s = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && Bs(t, t.stylesheets), t.unsuspend))
                ) {
                  var r = t.unsuspend;
                  ((t.unsuspend = null), r());
                }
              },
              (t.imgBytes > Mr ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = n),
              function () {
                ((t.unsuspend = null), clearTimeout(i), clearTimeout(s));
              }
            );
          }
        : null
    );
  }
  function _s() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Bs(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Us = null;
  function Bs(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Us = new Map()),
        e.forEach(U1, t),
        (Us = null),
        _s.call(t)));
  }
  function U1(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Us.get(t);
      if (n) var i = n.get(null);
      else {
        ((n = new Map()), Us.set(t, n));
        for (
          var s = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            r = 0;
          r < s.length;
          r++
        ) {
          var f = s[r];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (n.set(f.dataset.precedence, f), (i = f));
        }
        i && n.set(null, i);
      }
      ((s = e.instance),
        (f = s.getAttribute("data-precedence")),
        (r = n.get(f) || i),
        r === i && n.set(null, s),
        n.set(f, s),
        this.count++,
        (i = _s.bind(this)),
        s.addEventListener("load", i),
        s.addEventListener("error", i),
        r
          ? r.parentNode.insertBefore(s, r.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var ll = {
    $$typeof: B,
    Provider: null,
    Consumer: null,
    _currentValue: Q,
    _currentValue2: Q,
    _threadCount: 0,
  };
  function B1(t, e, n, i, s, r, f, m, S) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = bo(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = bo(0)),
      (this.hiddenUpdates = bo(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = s),
      (this.onCaughtError = r),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = S),
      (this.incompleteTransitions = new Map()));
  }
  function Qm(t, e, n, i, s, r, f, m, S, N, z, _) {
    return (
      (t = new B1(t, e, n, f, S, N, z, _, m)),
      (e = 1),
      r === !0 && (e |= 24),
      (r = be(3, null, null, e)),
      (t.current = r),
      (r.stateNode = t),
      (e = iu()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (r.memoizedState = { element: i, isDehydrated: n, cache: e }),
      uu(r),
      t
    );
  }
  function Zm(t) {
    return t ? ((t = wa), t) : wa;
  }
  function Km(t, e, n, i, s, r) {
    ((s = Zm(s)),
      i.context === null ? (i.context = s) : (i.pendingContext = s),
      (i = Cn(e)),
      (i.payload = { element: n }),
      (r = r === void 0 ? null : r),
      r !== null && (i.callback = r),
      (n = zn(t, i, e)),
      n !== null && (pe(n, t, e), Bi(n, t, e)));
  }
  function km(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Dr(t, e) {
    (km(t, e), (t = t.alternate) && km(t, e));
  }
  function Jm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = na(t, 67108864);
      (e !== null && pe(e, t, 67108864), Dr(t, 67108864));
    }
  }
  function Pm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Me();
      e = So(e);
      var n = na(t, e);
      (n !== null && pe(n, t, e), Dr(t, e));
    }
  }
  var Ls = !0;
  function L1(t, e, n, i) {
    var s = O.T;
    O.T = null;
    var r = q.p;
    try {
      ((q.p = 2), Nr(t, e, n, i));
    } finally {
      ((q.p = r), (O.T = s));
    }
  }
  function H1(t, e, n, i) {
    var s = O.T;
    O.T = null;
    var r = q.p;
    try {
      ((q.p = 8), Nr(t, e, n, i));
    } finally {
      ((q.p = r), (O.T = s));
    }
  }
  function Nr(t, e, n, i) {
    if (Ls) {
      var s = jr(i);
      if (s === null) (hr(t, e, i, Hs, n), Wm(t, i));
      else if (Y1(s, t, e, n, i)) i.stopPropagation();
      else if ((Wm(t, i), e & 4 && -1 < q1.indexOf(t))) {
        for (; s !== null; ) {
          var r = Aa(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (((r = r.stateNode), r.current.memoizedState.isDehydrated)) {
                  var f = Wn(r.pendingLanes);
                  if (f !== 0) {
                    var m = r;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; f; ) {
                      var S = 1 << (31 - ve(f));
                      ((m.entanglements[1] |= S), (f &= ~S));
                    }
                    (We(r), (gt & 6) === 0 && ((Ss = ye() + 500), Ii(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((m = na(r, 2)), m !== null && pe(m, r, 2), As(), Dr(r, 2));
            }
          if (((r = jr(i)), r === null && hr(t, e, i, Hs, n), r === s)) break;
          s = r;
        }
        s !== null && i.stopPropagation();
      } else hr(t, e, i, null, n);
    }
  }
  function jr(t) {
    return ((t = zo(t)), Cr(t));
  }
  var Hs = null;
  function Cr(t) {
    if (((Hs = null), (t = Ta(t)), t !== null)) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = d(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = y(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((Hs = t), null);
  }
  function Fm(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Mg()) {
          case af:
            return 2;
          case lf:
            return 8;
          case jl:
          case Dg:
            return 32;
          case sf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var zr = !1,
    Yn = null,
    Gn = null,
    Xn = null,
    sl = new Map(),
    ol = new Map(),
    Qn = [],
    q1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Wm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Yn = null;
        break;
      case "dragenter":
      case "dragleave":
        Gn = null;
        break;
      case "mouseover":
      case "mouseout":
        Xn = null;
        break;
      case "pointerover":
      case "pointerout":
        sl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ol.delete(e.pointerId);
    }
  }
  function ul(t, e, n, i, s, r) {
    return t === null || t.nativeEvent !== r
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: i,
          nativeEvent: r,
          targetContainers: [s],
        }),
        e !== null && ((e = Aa(e)), e !== null && Jm(e)),
        t)
      : ((t.eventSystemFlags |= i),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function Y1(t, e, n, i, s) {
    switch (e) {
      case "focusin":
        return ((Yn = ul(Yn, t, e, n, i, s)), !0);
      case "dragenter":
        return ((Gn = ul(Gn, t, e, n, i, s)), !0);
      case "mouseover":
        return ((Xn = ul(Xn, t, e, n, i, s)), !0);
      case "pointerover":
        var r = s.pointerId;
        return (sl.set(r, ul(sl.get(r) || null, t, e, n, i, s)), !0);
      case "gotpointercapture":
        return (
          (r = s.pointerId),
          ol.set(r, ul(ol.get(r) || null, t, e, n, i, s)),
          !0
        );
    }
    return !1;
  }
  function $m(t) {
    var e = Ta(t.target);
    if (e !== null) {
      var n = h(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = d(n)), e !== null)) {
            ((t.blockedOn = e),
              df(t.priority, function () {
                Pm(n);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = y(n)), e !== null)) {
            ((t.blockedOn = e),
              df(t.priority, function () {
                Pm(n);
              }));
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function qs(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = jr(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(n.type, n);
        ((Co = i), n.target.dispatchEvent(i), (Co = null));
      } else return ((e = Aa(n)), e !== null && Jm(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function Im(t, e, n) {
    qs(t) && n.delete(e);
  }
  function G1() {
    ((zr = !1),
      Yn !== null && qs(Yn) && (Yn = null),
      Gn !== null && qs(Gn) && (Gn = null),
      Xn !== null && qs(Xn) && (Xn = null),
      sl.forEach(Im),
      ol.forEach(Im));
  }
  function Ys(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      zr ||
        ((zr = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, G1)));
  }
  var Gs = null;
  function tp(t) {
    Gs !== t &&
      ((Gs = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Gs === t && (Gs = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            i = t[e + 1],
            s = t[e + 2];
          if (typeof i != "function") {
            if (Cr(i || n) === null) continue;
            break;
          }
          var r = Aa(n);
          r !== null &&
            (t.splice(e, 3),
            (e -= 3),
            ju(r, { pending: !0, data: s, method: n.method, action: i }, i, s));
        }
      }));
  }
  function ii(t) {
    function e(S) {
      return Ys(S, t);
    }
    (Yn !== null && Ys(Yn, t),
      Gn !== null && Ys(Gn, t),
      Xn !== null && Ys(Xn, t),
      sl.forEach(e),
      ol.forEach(e));
    for (var n = 0; n < Qn.length; n++) {
      var i = Qn[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < Qn.length && ((n = Qn[0]), n.blockedOn === null); )
      ($m(n), n.blockedOn === null && Qn.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (i = 0; i < n.length; i += 3) {
        var s = n[i],
          r = n[i + 1],
          f = s[re] || null;
        if (typeof r == "function") f || tp(n);
        else if (f) {
          var m = null;
          if (r && r.hasAttribute("formAction")) {
            if (((s = r), (f = r[re] || null))) m = f.formAction;
            else if (Cr(s) !== null) continue;
          } else m = f.action;
          (typeof m == "function" ? (n[i + 1] = m) : (n.splice(i, 3), (i -= 3)),
            tp(n));
        }
      }
  }
  function ep() {
    function t(r) {
      r.canIntercept &&
        r.info === "react-transition" &&
        r.intercept({
          handler: function () {
            return new Promise(function (f) {
              return (s = f);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (s !== null && (s(), (s = null)), i || setTimeout(n, 20));
    }
    function n() {
      if (!i && !navigation.transition) {
        var r = navigation.currentEntry;
        r &&
          r.url != null &&
          navigation.navigate(r.url, {
            state: r.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var i = !1,
        s = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          ((i = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            s !== null && (s(), (s = null)));
        }
      );
    }
  }
  function Or(t) {
    this._internalRoot = t;
  }
  ((Xs.prototype.render = Or.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(u(409));
      var n = e.current,
        i = Me();
      Km(n, i, t, e, null, null);
    }),
    (Xs.prototype.unmount = Or.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (Km(t.current, 2, null, t, null, null), As(), (e[Sa] = null));
        }
      }));
  function Xs(t) {
    this._internalRoot = t;
  }
  Xs.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = ff();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Qn.length && e !== 0 && e < Qn[n].priority; n++);
      (Qn.splice(n, 0, t), n === 0 && $m(t));
    }
  };
  var np = l.version;
  if (np !== "19.2.4") throw Error(u(527, np, "19.2.4"));
  q.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(u(188))
        : ((t = Object.keys(t).join(",")), Error(u(268, t)));
    return (
      (t = p(e)),
      (t = t !== null ? v(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var X1 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qs.isDisabled && Qs.supportsFiber)
      try {
        ((gi = Qs.inject(X1)), (ge = Qs));
      } catch {}
  }
  return (
    (cl.createRoot = function (t, e) {
      if (!c(t)) throw Error(u(299));
      var n = !1,
        i = "",
        s = rh,
        r = ch,
        f = fh;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (r = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError)),
        (e = Qm(t, 1, !1, null, null, n, i, null, s, r, f, ep)),
        (t[Sa] = e.current),
        dr(t),
        new Or(e)
      );
    }),
    (cl.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(u(299));
      var i = !1,
        s = "",
        r = rh,
        f = ch,
        m = fh,
        S = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (r = n.onUncaughtError),
          n.onCaughtError !== void 0 && (f = n.onCaughtError),
          n.onRecoverableError !== void 0 && (m = n.onRecoverableError),
          n.formState !== void 0 && (S = n.formState)),
        (e = Qm(t, 1, !0, e, n ?? null, i, s, S, r, f, m, ep)),
        (e.context = Zm(null)),
        (n = e.current),
        (i = Me()),
        (i = So(i)),
        (s = Cn(i)),
        (s.callback = null),
        zn(n, s, i),
        (n = i),
        (e.current.lanes = n),
        xi(e, n),
        We(e),
        (t[Sa] = e.current),
        dr(t),
        new Xs(e)
      );
    }),
    (cl.version = "19.2.4"),
    cl
  );
}
var dp;
function I1() {
  if (dp) return wr.exports;
  dp = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return (a(), (wr.exports = $1()), wr.exports);
}
var tx = I1();
const z0 = I.createContext({});
function ex(a) {
  const l = I.useRef(null);
  return (l.current === null && (l.current = a()), l.current);
}
const nx = typeof window < "u",
  ax = nx ? I.useLayoutEffect : I.useEffect,
  Mc = I.createContext(null);
function Dc(a, l) {
  a.indexOf(l) === -1 && a.push(l);
}
function eo(a, l) {
  const o = a.indexOf(l);
  o > -1 && a.splice(o, 1);
}
const tn = (a, l, o) => (o > l ? l : o < a ? a : o);
let Nc = () => {};
const bn = {},
  O0 = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);
function V0(a) {
  return typeof a == "object" && a !== null;
}
const R0 = (a) => /^0[^.\s]+$/u.test(a);
function w0(a) {
  let l;
  return () => (l === void 0 && (l = a()), l);
}
const Be = (a) => a,
  ix = (a, l) => (o) => l(a(o)),
  Al = (...a) => a.reduce(ix),
  vl = (a, l, o) => {
    const u = l - a;
    return u === 0 ? 1 : (o - a) / u;
  };
class jc {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return (Dc(this.subscriptions, l), () => eo(this.subscriptions, l));
  }
  notify(l, o, u) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](l, o, u);
      else
        for (let h = 0; h < c; h++) {
          const d = this.subscriptions[h];
          d && d(l, o, u);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ze = (a) => a * 1e3,
  Ue = (a) => a / 1e3;
function _0(a, l) {
  return l ? a * (1e3 / l) : 0;
}
const U0 = (a, l, o) =>
    (((1 - 3 * o + 3 * l) * a + (3 * o - 6 * l)) * a + 3 * l) * a,
  lx = 1e-7,
  sx = 12;
function ox(a, l, o, u, c) {
  let h,
    d,
    y = 0;
  do ((d = l + (o - l) / 2), (h = U0(d, u, c) - a), h > 0 ? (o = d) : (l = d));
  while (Math.abs(h) > lx && ++y < sx);
  return d;
}
function El(a, l, o, u) {
  if (a === l && o === u) return Be;
  const c = (h) => ox(h, 0, 1, a, o);
  return (h) => (h === 0 || h === 1 ? h : U0(c(h), l, u));
}
const B0 = (a) => (l) => (l <= 0.5 ? a(2 * l) / 2 : (2 - a(2 * (1 - l))) / 2),
  L0 = (a) => (l) => 1 - a(1 - l),
  H0 = El(0.33, 1.53, 0.69, 0.99),
  Cc = L0(H0),
  q0 = B0(Cc),
  Y0 = (a) =>
    (a *= 2) < 1 ? 0.5 * Cc(a) : 0.5 * (2 - Math.pow(2, -10 * (a - 1))),
  zc = (a) => 1 - Math.sin(Math.acos(a)),
  G0 = L0(zc),
  X0 = B0(zc),
  ux = El(0.42, 0, 1, 1),
  rx = El(0, 0, 0.58, 1),
  Q0 = El(0.42, 0, 0.58, 1),
  cx = (a) => Array.isArray(a) && typeof a[0] != "number",
  Z0 = (a) => Array.isArray(a) && typeof a[0] == "number",
  fx = {
    linear: Be,
    easeIn: ux,
    easeInOut: Q0,
    easeOut: rx,
    circIn: zc,
    circInOut: X0,
    circOut: G0,
    backIn: Cc,
    backInOut: q0,
    backOut: H0,
    anticipate: Y0,
  },
  dx = (a) => typeof a == "string",
  hp = (a) => {
    if (Z0(a)) {
      Nc(a.length === 4);
      const [l, o, u, c] = a;
      return El(l, o, u, c);
    } else if (dx(a)) return fx[a];
    return a;
  },
  Zs = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function hx(a, l) {
  let o = new Set(),
    u = new Set(),
    c = !1,
    h = !1;
  const d = new WeakSet();
  let y = { delta: 0, timestamp: 0, isProcessing: !1 };
  function g(v) {
    (d.has(v) && (p.schedule(v), a()), v(y));
  }
  const p = {
    schedule: (v, b = !1, E = !1) => {
      const w = E && c ? o : u;
      return (b && d.add(v), w.has(v) || w.add(v), v);
    },
    cancel: (v) => {
      (u.delete(v), d.delete(v));
    },
    process: (v) => {
      if (((y = v), c)) {
        h = !0;
        return;
      }
      ((c = !0),
        ([o, u] = [u, o]),
        o.forEach(g),
        o.clear(),
        (c = !1),
        h && ((h = !1), p.process(v)));
    },
  };
  return p;
}
const mx = 40;
function K0(a, l) {
  let o = !1,
    u = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    h = () => (o = !0),
    d = Zs.reduce((B, P) => ((B[P] = hx(h)), B), {}),
    {
      setup: y,
      read: g,
      resolveKeyframes: p,
      preUpdate: v,
      update: b,
      preRender: E,
      render: V,
      postRender: w,
    } = d,
    L = () => {
      const B = bn.useManualTiming ? c.timestamp : performance.now();
      ((o = !1),
        bn.useManualTiming ||
          (c.delta = u ? 1e3 / 60 : Math.max(Math.min(B - c.timestamp, mx), 1)),
        (c.timestamp = B),
        (c.isProcessing = !0),
        y.process(c),
        g.process(c),
        p.process(c),
        v.process(c),
        b.process(c),
        E.process(c),
        V.process(c),
        w.process(c),
        (c.isProcessing = !1),
        o && l && ((u = !1), a(L)));
    },
    X = () => {
      ((o = !0), (u = !0), c.isProcessing || a(L));
    };
  return {
    schedule: Zs.reduce((B, P) => {
      const F = d[P];
      return (
        (B[P] = (lt, W = !1, et = !1) => (o || X(), F.schedule(lt, W, et))),
        B
      );
    }, {}),
    cancel: (B) => {
      for (let P = 0; P < Zs.length; P++) d[Zs[P]].cancel(B);
    },
    state: c,
    steps: d,
  };
}
const {
  schedule: Dt,
  cancel: Jn,
  state: te,
  steps: Lr,
} = K0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Be, !0);
let Js;
function px() {
  Js = void 0;
}
const le = {
    now: () => (
      Js === void 0 &&
        le.set(
          te.isProcessing || bn.useManualTiming
            ? te.timestamp
            : performance.now(),
        ),
      Js
    ),
    set: (a) => {
      ((Js = a), queueMicrotask(px));
    },
  },
  k0 = (a) => (l) => typeof l == "string" && l.startsWith(a),
  J0 = k0("--"),
  yx = k0("var(--"),
  Oc = (a) => (yx(a) ? gx.test(a.split("/*")[0].trim()) : !1),
  gx =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function mp(a) {
  return typeof a != "string" ? !1 : a.split("/*")[0].includes("var(--");
}
const hi = {
    test: (a) => typeof a == "number",
    parse: parseFloat,
    transform: (a) => a,
  },
  xl = { ...hi, transform: (a) => tn(0, 1, a) },
  Ks = { ...hi, default: 1 },
  hl = (a) => Math.round(a * 1e5) / 1e5,
  Vc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function vx(a) {
  return a == null;
}
const xx =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Rc = (a, l) => (o) =>
    !!(
      (typeof o == "string" && xx.test(o) && o.startsWith(a)) ||
      (l && !vx(o) && Object.prototype.hasOwnProperty.call(o, l))
    ),
  P0 = (a, l, o) => (u) => {
    if (typeof u != "string") return u;
    const [c, h, d, y] = u.match(Vc);
    return {
      [a]: parseFloat(c),
      [l]: parseFloat(h),
      [o]: parseFloat(d),
      alpha: y !== void 0 ? parseFloat(y) : 1,
    };
  },
  bx = (a) => tn(0, 255, a),
  Hr = { ...hi, transform: (a) => Math.round(bx(a)) },
  ga = {
    test: Rc("rgb", "red"),
    parse: P0("red", "green", "blue"),
    transform: ({ red: a, green: l, blue: o, alpha: u = 1 }) =>
      "rgba(" +
      Hr.transform(a) +
      ", " +
      Hr.transform(l) +
      ", " +
      Hr.transform(o) +
      ", " +
      hl(xl.transform(u)) +
      ")",
  };
function Sx(a) {
  let l = "",
    o = "",
    u = "",
    c = "";
  return (
    a.length > 5
      ? ((l = a.substring(1, 3)),
        (o = a.substring(3, 5)),
        (u = a.substring(5, 7)),
        (c = a.substring(7, 9)))
      : ((l = a.substring(1, 2)),
        (o = a.substring(2, 3)),
        (u = a.substring(3, 4)),
        (c = a.substring(4, 5)),
        (l += l),
        (o += o),
        (u += u),
        (c += c)),
    {
      red: parseInt(l, 16),
      green: parseInt(o, 16),
      blue: parseInt(u, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const ec = { test: Rc("#"), parse: Sx, transform: ga.transform },
  Ml = (a) => ({
    test: (l) =>
      typeof l == "string" && l.endsWith(a) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: (l) => `${l}${a}`,
  }),
  Kn = Ml("deg"),
  Ie = Ml("%"),
  K = Ml("px"),
  Tx = Ml("vh"),
  Ax = Ml("vw"),
  pp = {
    ...Ie,
    parse: (a) => Ie.parse(a) / 100,
    transform: (a) => Ie.transform(a * 100),
  },
  si = {
    test: Rc("hsl", "hue"),
    parse: P0("hue", "saturation", "lightness"),
    transform: ({ hue: a, saturation: l, lightness: o, alpha: u = 1 }) =>
      "hsla(" +
      Math.round(a) +
      ", " +
      Ie.transform(hl(l)) +
      ", " +
      Ie.transform(hl(o)) +
      ", " +
      hl(xl.transform(u)) +
      ")",
  },
  Gt = {
    test: (a) => ga.test(a) || ec.test(a) || si.test(a),
    parse: (a) =>
      ga.test(a) ? ga.parse(a) : si.test(a) ? si.parse(a) : ec.parse(a),
    transform: (a) =>
      typeof a == "string"
        ? a
        : a.hasOwnProperty("red")
          ? ga.transform(a)
          : si.transform(a),
    getAnimatableNone: (a) => {
      const l = Gt.parse(a);
      return ((l.alpha = 0), Gt.transform(l));
    },
  },
  Ex =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Mx(a) {
  return (
    isNaN(a) &&
    typeof a == "string" &&
    (a.match(Vc)?.length || 0) + (a.match(Ex)?.length || 0) > 0
  );
}
const F0 = "number",
  W0 = "color",
  Dx = "var",
  Nx = "var(",
  yp = "${}",
  jx =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function bl(a) {
  const l = a.toString(),
    o = [],
    u = { color: [], number: [], var: [] },
    c = [];
  let h = 0;
  const y = l
    .replace(
      jx,
      (g) => (
        Gt.test(g)
          ? (u.color.push(h), c.push(W0), o.push(Gt.parse(g)))
          : g.startsWith(Nx)
            ? (u.var.push(h), c.push(Dx), o.push(g))
            : (u.number.push(h), c.push(F0), o.push(parseFloat(g))),
        ++h,
        yp
      ),
    )
    .split(yp);
  return { values: o, split: y, indexes: u, types: c };
}
function $0(a) {
  return bl(a).values;
}
function I0(a) {
  const { split: l, types: o } = bl(a),
    u = l.length;
  return (c) => {
    let h = "";
    for (let d = 0; d < u; d++)
      if (((h += l[d]), c[d] !== void 0)) {
        const y = o[d];
        y === F0
          ? (h += hl(c[d]))
          : y === W0
            ? (h += Gt.transform(c[d]))
            : (h += c[d]);
      }
    return h;
  };
}
const Cx = (a) =>
  typeof a == "number" ? 0 : Gt.test(a) ? Gt.getAnimatableNone(a) : a;
function zx(a) {
  const l = $0(a);
  return I0(a)(l.map(Cx));
}
const Ke = {
  test: Mx,
  parse: $0,
  createTransformer: I0,
  getAnimatableNone: zx,
};
function qr(a, l, o) {
  return (
    o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6
      ? a + (l - a) * 6 * o
      : o < 1 / 2
        ? l
        : o < 2 / 3
          ? a + (l - a) * (2 / 3 - o) * 6
          : a
  );
}
function Ox({ hue: a, saturation: l, lightness: o, alpha: u }) {
  ((a /= 360), (l /= 100), (o /= 100));
  let c = 0,
    h = 0,
    d = 0;
  if (!l) c = h = d = o;
  else {
    const y = o < 0.5 ? o * (1 + l) : o + l - o * l,
      g = 2 * o - y;
    ((c = qr(g, y, a + 1 / 3)), (h = qr(g, y, a)), (d = qr(g, y, a - 1 / 3)));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(h * 255),
    blue: Math.round(d * 255),
    alpha: u,
  };
}
function no(a, l) {
  return (o) => (o > 0 ? l : a);
}
const zt = (a, l, o) => a + (l - a) * o,
  Yr = (a, l, o) => {
    const u = a * a,
      c = o * (l * l - u) + u;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  Vx = [ec, ga, si],
  Rx = (a) => Vx.find((l) => l.test(a));
function gp(a) {
  const l = Rx(a);
  if (!l) return !1;
  let o = l.parse(a);
  return (l === si && (o = Ox(o)), o);
}
const vp = (a, l) => {
    const o = gp(a),
      u = gp(l);
    if (!o || !u) return no(a, l);
    const c = { ...o };
    return (h) => (
      (c.red = Yr(o.red, u.red, h)),
      (c.green = Yr(o.green, u.green, h)),
      (c.blue = Yr(o.blue, u.blue, h)),
      (c.alpha = zt(o.alpha, u.alpha, h)),
      ga.transform(c)
    );
  },
  nc = new Set(["none", "hidden"]);
function wx(a, l) {
  return nc.has(a) ? (o) => (o <= 0 ? a : l) : (o) => (o >= 1 ? l : a);
}
function _x(a, l) {
  return (o) => zt(a, l, o);
}
function wc(a) {
  return typeof a == "number"
    ? _x
    : typeof a == "string"
      ? Oc(a)
        ? no
        : Gt.test(a)
          ? vp
          : Lx
      : Array.isArray(a)
        ? ty
        : typeof a == "object"
          ? Gt.test(a)
            ? vp
            : Ux
          : no;
}
function ty(a, l) {
  const o = [...a],
    u = o.length,
    c = a.map((h, d) => wc(h)(h, l[d]));
  return (h) => {
    for (let d = 0; d < u; d++) o[d] = c[d](h);
    return o;
  };
}
function Ux(a, l) {
  const o = { ...a, ...l },
    u = {};
  for (const c in o)
    a[c] !== void 0 && l[c] !== void 0 && (u[c] = wc(a[c])(a[c], l[c]));
  return (c) => {
    for (const h in u) o[h] = u[h](c);
    return o;
  };
}
function Bx(a, l) {
  const o = [],
    u = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const h = l.types[c],
      d = a.indexes[h][u[h]],
      y = a.values[d] ?? 0;
    ((o[c] = y), u[h]++);
  }
  return o;
}
const Lx = (a, l) => {
  const o = Ke.createTransformer(l),
    u = bl(a),
    c = bl(l);
  return u.indexes.var.length === c.indexes.var.length &&
    u.indexes.color.length === c.indexes.color.length &&
    u.indexes.number.length >= c.indexes.number.length
    ? (nc.has(a) && !c.values.length) || (nc.has(l) && !u.values.length)
      ? wx(a, l)
      : Al(ty(Bx(u, c), c.values), o)
    : no(a, l);
};
function ey(a, l, o) {
  return typeof a == "number" && typeof l == "number" && typeof o == "number"
    ? zt(a, l, o)
    : wc(a)(a, l);
}
const Hx = (a) => {
    const l = ({ timestamp: o }) => a(o);
    return {
      start: (o = !0) => Dt.update(l, o),
      stop: () => Jn(l),
      now: () => (te.isProcessing ? te.timestamp : le.now()),
    };
  },
  ny = (a, l, o = 10) => {
    let u = "";
    const c = Math.max(Math.round(l / o), 2);
    for (let h = 0; h < c; h++)
      u += Math.round(a(h / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${u.substring(0, u.length - 2)})`;
  },
  ao = 2e4;
function _c(a) {
  let l = 0;
  const o = 50;
  let u = a.next(l);
  for (; !u.done && l < ao; ) ((l += o), (u = a.next(l)));
  return l >= ao ? 1 / 0 : l;
}
function qx(a, l = 100, o) {
  const u = o({ ...a, keyframes: [0, l] }),
    c = Math.min(_c(u), ao);
  return {
    type: "keyframes",
    ease: (h) => u.next(c * h).value / l,
    duration: Ue(c),
  };
}
const Yx = 5;
function ay(a, l, o) {
  const u = Math.max(l - Yx, 0);
  return _0(o - a(u), l - u);
}
const Rt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Gr = 0.001;
function Gx({
  duration: a = Rt.duration,
  bounce: l = Rt.bounce,
  velocity: o = Rt.velocity,
  mass: u = Rt.mass,
}) {
  let c,
    h,
    d = 1 - l;
  ((d = tn(Rt.minDamping, Rt.maxDamping, d)),
    (a = tn(Rt.minDuration, Rt.maxDuration, Ue(a))),
    d < 1
      ? ((c = (p) => {
          const v = p * d,
            b = v * a,
            E = v - o,
            V = ac(p, d),
            w = Math.exp(-b);
          return Gr - (E / V) * w;
        }),
        (h = (p) => {
          const b = p * d * a,
            E = b * o + o,
            V = Math.pow(d, 2) * Math.pow(p, 2) * a,
            w = Math.exp(-b),
            L = ac(Math.pow(p, 2), d);
          return ((-c(p) + Gr > 0 ? -1 : 1) * ((E - V) * w)) / L;
        }))
      : ((c = (p) => {
          const v = Math.exp(-p * a),
            b = (p - o) * a + 1;
          return -Gr + v * b;
        }),
        (h = (p) => {
          const v = Math.exp(-p * a),
            b = (o - p) * (a * a);
          return v * b;
        })));
  const y = 5 / a,
    g = Qx(c, h, y);
  if (((a = Ze(a)), isNaN(g)))
    return { stiffness: Rt.stiffness, damping: Rt.damping, duration: a };
  {
    const p = Math.pow(g, 2) * u;
    return { stiffness: p, damping: d * 2 * Math.sqrt(u * p), duration: a };
  }
}
const Xx = 12;
function Qx(a, l, o) {
  let u = o;
  for (let c = 1; c < Xx; c++) u = u - a(u) / l(u);
  return u;
}
function ac(a, l) {
  return a * Math.sqrt(1 - l * l);
}
const Zx = ["duration", "bounce"],
  Kx = ["stiffness", "damping", "mass"];
function xp(a, l) {
  return l.some((o) => a[o] !== void 0);
}
function kx(a) {
  let l = {
    velocity: Rt.velocity,
    stiffness: Rt.stiffness,
    damping: Rt.damping,
    mass: Rt.mass,
    isResolvedFromDuration: !1,
    ...a,
  };
  if (!xp(a, Kx) && xp(a, Zx))
    if (((l.velocity = 0), a.visualDuration)) {
      const o = a.visualDuration,
        u = (2 * Math.PI) / (o * 1.2),
        c = u * u,
        h = 2 * tn(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
      l = { ...l, mass: Rt.mass, stiffness: c, damping: h };
    } else {
      const o = Gx({ ...a, velocity: 0 });
      ((l = { ...l, ...o, mass: Rt.mass }), (l.isResolvedFromDuration = !0));
    }
  return l;
}
function io(a = Rt.visualDuration, l = Rt.bounce) {
  const o =
    typeof a != "object"
      ? { visualDuration: a, keyframes: [0, 1], bounce: l }
      : a;
  let { restSpeed: u, restDelta: c } = o;
  const h = o.keyframes[0],
    d = o.keyframes[o.keyframes.length - 1],
    y = { done: !1, value: h },
    {
      stiffness: g,
      damping: p,
      mass: v,
      duration: b,
      velocity: E,
      isResolvedFromDuration: V,
    } = kx({ ...o, velocity: -Ue(o.velocity || 0) }),
    w = E || 0,
    L = p / (2 * Math.sqrt(g * v)),
    X = d - h,
    H = Ue(Math.sqrt(g / v)),
    G = Math.abs(X) < 5;
  (u || (u = G ? Rt.restSpeed.granular : Rt.restSpeed.default),
    c || (c = G ? Rt.restDelta.granular : Rt.restDelta.default));
  let B;
  if (L < 1) {
    const F = ac(H, L);
    B = (lt) => {
      const W = Math.exp(-L * H * lt);
      return (
        d -
        W * (((w + L * H * X) / F) * Math.sin(F * lt) + X * Math.cos(F * lt))
      );
    };
  } else if (L === 1) B = (F) => d - Math.exp(-H * F) * (X + (w + H * X) * F);
  else {
    const F = H * Math.sqrt(L * L - 1);
    B = (lt) => {
      const W = Math.exp(-L * H * lt),
        et = Math.min(F * lt, 300);
      return (
        d - (W * ((w + L * H * X) * Math.sinh(et) + F * X * Math.cosh(et))) / F
      );
    };
  }
  const P = {
    calculatedDuration: (V && b) || null,
    next: (F) => {
      const lt = B(F);
      if (V) y.done = F >= b;
      else {
        let W = F === 0 ? w : 0;
        L < 1 && (W = F === 0 ? Ze(w) : ay(B, F, lt));
        const et = Math.abs(W) <= u,
          Mt = Math.abs(d - lt) <= c;
        y.done = et && Mt;
      }
      return ((y.value = y.done ? d : lt), y);
    },
    toString: () => {
      const F = Math.min(_c(P), ao),
        lt = ny((W) => P.next(F * W).value, F, 30);
      return F + "ms " + lt;
    },
    toTransition: () => {},
  };
  return P;
}
io.applyToOptions = (a) => {
  const l = qx(a, 100, io);
  return (
    (a.ease = l.ease),
    (a.duration = Ze(l.duration)),
    (a.type = "keyframes"),
    a
  );
};
function ic({
  keyframes: a,
  velocity: l = 0,
  power: o = 0.8,
  timeConstant: u = 325,
  bounceDamping: c = 10,
  bounceStiffness: h = 500,
  modifyTarget: d,
  min: y,
  max: g,
  restDelta: p = 0.5,
  restSpeed: v,
}) {
  const b = a[0],
    E = { done: !1, value: b },
    V = (et) => (y !== void 0 && et < y) || (g !== void 0 && et > g),
    w = (et) =>
      y === void 0
        ? g
        : g === void 0 || Math.abs(y - et) < Math.abs(g - et)
          ? y
          : g;
  let L = o * l;
  const X = b + L,
    H = d === void 0 ? X : d(X);
  H !== X && (L = H - b);
  const G = (et) => -L * Math.exp(-et / u),
    B = (et) => H + G(et),
    P = (et) => {
      const Mt = G(et),
        Xt = B(et);
      ((E.done = Math.abs(Mt) <= p), (E.value = E.done ? H : Xt));
    };
  let F, lt;
  const W = (et) => {
    V(E.value) &&
      ((F = et),
      (lt = io({
        keyframes: [E.value, w(E.value)],
        velocity: ay(B, et, E.value),
        damping: c,
        stiffness: h,
        restDelta: p,
        restSpeed: v,
      })));
  };
  return (
    W(0),
    {
      calculatedDuration: null,
      next: (et) => {
        let Mt = !1;
        return (
          !lt && F === void 0 && ((Mt = !0), P(et), W(et)),
          F !== void 0 && et >= F ? lt.next(et - F) : (!Mt && P(et), E)
        );
      },
    }
  );
}
function Jx(a, l, o) {
  const u = [],
    c = o || bn.mix || ey,
    h = a.length - 1;
  for (let d = 0; d < h; d++) {
    let y = c(a[d], a[d + 1]);
    if (l) {
      const g = Array.isArray(l) ? l[d] || Be : l;
      y = Al(g, y);
    }
    u.push(y);
  }
  return u;
}
function Px(a, l, { clamp: o = !0, ease: u, mixer: c } = {}) {
  const h = a.length;
  if ((Nc(h === l.length), h === 1)) return () => l[0];
  if (h === 2 && l[0] === l[1]) return () => l[1];
  const d = a[0] === a[1];
  a[0] > a[h - 1] && ((a = [...a].reverse()), (l = [...l].reverse()));
  const y = Jx(l, u, c),
    g = y.length,
    p = (v) => {
      if (d && v < a[0]) return l[0];
      let b = 0;
      if (g > 1) for (; b < a.length - 2 && !(v < a[b + 1]); b++);
      const E = vl(a[b], a[b + 1], v);
      return y[b](E);
    };
  return o ? (v) => p(tn(a[0], a[h - 1], v)) : p;
}
function Fx(a, l) {
  const o = a[a.length - 1];
  for (let u = 1; u <= l; u++) {
    const c = vl(0, l, u);
    a.push(zt(o, 1, c));
  }
}
function Wx(a) {
  const l = [0];
  return (Fx(l, a.length - 1), l);
}
function $x(a, l) {
  return a.map((o) => o * l);
}
function Ix(a, l) {
  return a.map(() => l || Q0).splice(0, a.length - 1);
}
function ml({
  duration: a = 300,
  keyframes: l,
  times: o,
  ease: u = "easeInOut",
}) {
  const c = cx(u) ? u.map(hp) : hp(u),
    h = { done: !1, value: l[0] },
    d = $x(o && o.length === l.length ? o : Wx(l), a),
    y = Px(d, l, { ease: Array.isArray(c) ? c : Ix(l, c) });
  return {
    calculatedDuration: a,
    next: (g) => ((h.value = y(g)), (h.done = g >= a), h),
  };
}
const tb = (a) => a !== null;
function Uc(a, { repeat: l, repeatType: o = "loop" }, u, c = 1) {
  const h = a.filter(tb),
    y = c < 0 || (l && o !== "loop" && l % 2 === 1) ? 0 : h.length - 1;
  return !y || u === void 0 ? h[y] : u;
}
const eb = { decay: ic, inertia: ic, tween: ml, keyframes: ml, spring: io };
function iy(a) {
  typeof a.type == "string" && (a.type = eb[a.type]);
}
class Bc {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(l, o) {
    return this.finished.then(l, o);
  }
}
const nb = (a) => a / 100;
class Lc extends Bc {
  constructor(l) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        const { motionValue: o } = this.options;
        (o && o.updatedAt !== le.now() && this.tick(le.now()),
          (this.isStopped = !0),
          this.state !== "idle" && (this.teardown(), this.options.onStop?.()));
      }),
      (this.options = l),
      this.initAnimation(),
      this.play(),
      l.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: l } = this;
    iy(l);
    const {
      type: o = ml,
      repeat: u = 0,
      repeatDelay: c = 0,
      repeatType: h,
      velocity: d = 0,
    } = l;
    let { keyframes: y } = l;
    const g = o || ml;
    g !== ml &&
      typeof y[0] != "number" &&
      ((this.mixKeyframes = Al(nb, ey(y[0], y[1]))), (y = [0, 100]));
    const p = g({ ...l, keyframes: y });
    (h === "mirror" &&
      (this.mirroredGenerator = g({
        ...l,
        keyframes: [...y].reverse(),
        velocity: -d,
      })),
      p.calculatedDuration === null && (p.calculatedDuration = _c(p)));
    const { calculatedDuration: v } = p;
    ((this.calculatedDuration = v),
      (this.resolvedDuration = v + c),
      (this.totalDuration = this.resolvedDuration * (u + 1) - c),
      (this.generator = p));
  }
  updateTime(l) {
    const o = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = o);
  }
  tick(l, o = !1) {
    const {
      generator: u,
      totalDuration: c,
      mixKeyframes: h,
      mirroredGenerator: d,
      resolvedDuration: y,
      calculatedDuration: g,
    } = this;
    if (this.startTime === null) return u.next(0);
    const {
      delay: p = 0,
      keyframes: v,
      repeat: b,
      repeatType: E,
      repeatDelay: V,
      type: w,
      onUpdate: L,
      finalKeyframe: X,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, l))
      : this.speed < 0 &&
        (this.startTime = Math.min(l - c / this.speed, this.startTime)),
      o ? (this.currentTime = l) : this.updateTime(l));
    const H = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1),
      G = this.playbackSpeed >= 0 ? H < 0 : H > c;
    ((this.currentTime = Math.max(H, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c));
    let B = this.currentTime,
      P = u;
    if (b) {
      const et = Math.min(this.currentTime, c) / y;
      let Mt = Math.floor(et),
        Xt = et % 1;
      (!Xt && et >= 1 && (Xt = 1),
        Xt === 1 && Mt--,
        (Mt = Math.min(Mt, b + 1)),
        Mt % 2 &&
          (E === "reverse"
            ? ((Xt = 1 - Xt), V && (Xt -= V / y))
            : E === "mirror" && (P = d)),
        (B = tn(0, 1, Xt) * y));
    }
    const F = G ? { done: !1, value: v[0] } : P.next(B);
    h && !G && (F.value = h(F.value));
    let { done: lt } = F;
    !G &&
      g !== null &&
      (lt =
        this.playbackSpeed >= 0
          ? this.currentTime >= c
          : this.currentTime <= 0);
    const W =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && lt));
    return (
      W && w !== ic && (F.value = Uc(v, this.options, X, this.speed)),
      L && L(F.value),
      W && this.finish(),
      F
    );
  }
  then(l, o) {
    return this.finished.then(l, o);
  }
  get duration() {
    return Ue(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + Ue(l);
  }
  get time() {
    return Ue(this.currentTime);
  }
  set time(l) {
    ((l = Ze(l)),
      (this.currentTime = l),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = l)
        : this.driver &&
          (this.startTime = this.driver.now() - l / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = l),
          this.tick(l)));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const o = this.playbackSpeed !== l;
    (o && this.driver && this.updateTime(le.now()),
      (this.playbackSpeed = l),
      o && this.driver && (this.time = Ue(this.currentTime)));
  }
  play() {
    if (this.isStopped) return;
    const { driver: l = Hx, startTime: o } = this.options;
    (this.driver || (this.driver = l((c) => this.tick(c))),
      this.options.onPlay?.());
    const u = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = u))
      : this.holdTime !== null
        ? (this.startTime = u - this.holdTime)
        : this.startTime || (this.startTime = o ?? u),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(le.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      this.options.onComplete?.());
  }
  cancel() {
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(l) {
    return ((this.startTime = 0), this.tick(l, !0));
  }
  attachTimeline(l) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      this.driver?.stop(),
      l.observe(this)
    );
  }
}
function ab(a) {
  for (let l = 1; l < a.length; l++) a[l] ?? (a[l] = a[l - 1]);
}
const va = (a) => (a * 180) / Math.PI,
  lc = (a) => {
    const l = va(Math.atan2(a[1], a[0]));
    return sc(l);
  },
  ib = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
    rotate: lc,
    rotateZ: lc,
    skewX: (a) => va(Math.atan(a[1])),
    skewY: (a) => va(Math.atan(a[2])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2,
  },
  sc = (a) => ((a = a % 360), a < 0 && (a += 360), a),
  bp = lc,
  Sp = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]),
  Tp = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]),
  lb = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Sp,
    scaleY: Tp,
    scale: (a) => (Sp(a) + Tp(a)) / 2,
    rotateX: (a) => sc(va(Math.atan2(a[6], a[5]))),
    rotateY: (a) => sc(va(Math.atan2(-a[2], a[0]))),
    rotateZ: bp,
    rotate: bp,
    skewX: (a) => va(Math.atan(a[4])),
    skewY: (a) => va(Math.atan(a[1])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2,
  };
function oc(a) {
  return a.includes("scale") ? 1 : 0;
}
function uc(a, l) {
  if (!a || a === "none") return oc(l);
  const o = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let u, c;
  if (o) ((u = lb), (c = o));
  else {
    const y = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((u = ib), (c = y));
  }
  if (!c) return oc(l);
  const h = u[l],
    d = c[1].split(",").map(ob);
  return typeof h == "function" ? h(d) : d[h];
}
const sb = (a, l) => {
  const { transform: o = "none" } = getComputedStyle(a);
  return uc(o, l);
};
function ob(a) {
  return parseFloat(a.trim());
}
const mi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  pi = new Set(mi),
  Ap = (a) => a === hi || a === K,
  ub = new Set(["x", "y", "z"]),
  rb = mi.filter((a) => !ub.has(a));
function cb(a) {
  const l = [];
  return (
    rb.forEach((o) => {
      const u = a.getValue(o);
      u !== void 0 &&
        (l.push([o, u.get()]), u.set(o.startsWith("scale") ? 1 : 0));
    }),
    l
  );
}
const kn = {
  width: ({ x: a }, { paddingLeft: l = "0", paddingRight: o = "0" }) =>
    a.max - a.min - parseFloat(l) - parseFloat(o),
  height: ({ y: a }, { paddingTop: l = "0", paddingBottom: o = "0" }) =>
    a.max - a.min - parseFloat(l) - parseFloat(o),
  top: (a, { top: l }) => parseFloat(l),
  left: (a, { left: l }) => parseFloat(l),
  bottom: ({ y: a }, { top: l }) => parseFloat(l) + (a.max - a.min),
  right: ({ x: a }, { left: l }) => parseFloat(l) + (a.max - a.min),
  x: (a, { transform: l }) => uc(l, "x"),
  y: (a, { transform: l }) => uc(l, "y"),
};
kn.translateX = kn.x;
kn.translateY = kn.y;
const xa = new Set();
let rc = !1,
  cc = !1,
  fc = !1;
function ly() {
  if (cc) {
    const a = Array.from(xa).filter((u) => u.needsMeasurement),
      l = new Set(a.map((u) => u.element)),
      o = new Map();
    (l.forEach((u) => {
      const c = cb(u);
      c.length && (o.set(u, c), u.render());
    }),
      a.forEach((u) => u.measureInitialState()),
      l.forEach((u) => {
        u.render();
        const c = o.get(u);
        c &&
          c.forEach(([h, d]) => {
            u.getValue(h)?.set(d);
          });
      }),
      a.forEach((u) => u.measureEndState()),
      a.forEach((u) => {
        u.suspendedScrollY !== void 0 && window.scrollTo(0, u.suspendedScrollY);
      }));
  }
  ((cc = !1), (rc = !1), xa.forEach((a) => a.complete(fc)), xa.clear());
}
function sy() {
  xa.forEach((a) => {
    (a.readKeyframes(), a.needsMeasurement && (cc = !0));
  });
}
function fb() {
  ((fc = !0), sy(), ly(), (fc = !1));
}
class Hc {
  constructor(l, o, u, c, h, d = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...l]),
      (this.onComplete = o),
      (this.name = u),
      (this.motionValue = c),
      (this.element = h),
      (this.isAsync = d));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (xa.add(this),
          rc || ((rc = !0), Dt.read(sy), Dt.resolveKeyframes(ly)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: l,
      name: o,
      element: u,
      motionValue: c,
    } = this;
    if (l[0] === null) {
      const h = c?.get(),
        d = l[l.length - 1];
      if (h !== void 0) l[0] = h;
      else if (u && o) {
        const y = u.readValue(o, d);
        y != null && (l[0] = y);
      }
      (l[0] === void 0 && (l[0] = d), c && h === void 0 && c.set(l[0]));
    }
    ab(l);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(l = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l),
      xa.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (xa.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const db = (a) => a.startsWith("--");
function oy(a, l, o) {
  db(l) ? a.style.setProperty(l, o) : (a.style[l] = o);
}
const hb = {};
function uy(a, l) {
  const o = w0(a);
  return () => hb[l] ?? o();
}
const mb = uy(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  ry = uy(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  dl = ([a, l, o, u]) => `cubic-bezier(${a}, ${l}, ${o}, ${u})`,
  Ep = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: dl([0, 0.65, 0.55, 1]),
    circOut: dl([0.55, 0, 1, 0.45]),
    backIn: dl([0.31, 0.01, 0.66, -0.59]),
    backOut: dl([0.33, 1.53, 0.69, 0.99]),
  };
function cy(a, l) {
  if (a)
    return typeof a == "function"
      ? ry()
        ? ny(a, l)
        : "ease-out"
      : Z0(a)
        ? dl(a)
        : Array.isArray(a)
          ? a.map((o) => cy(o, l) || Ep.easeOut)
          : Ep[a];
}
function pb(
  a,
  l,
  o,
  {
    delay: u = 0,
    duration: c = 300,
    repeat: h = 0,
    repeatType: d = "loop",
    ease: y = "easeOut",
    times: g,
  } = {},
  p = void 0,
) {
  const v = { [l]: o };
  g && (v.offset = g);
  const b = cy(y, c);
  Array.isArray(b) && (v.easing = b);
  const E = {
    delay: u,
    duration: c,
    easing: Array.isArray(b) ? "linear" : b,
    fill: "both",
    iterations: h + 1,
    direction: d === "reverse" ? "alternate" : "normal",
  };
  return (p && (E.pseudoElement = p), a.animate(v, E));
}
function fy(a) {
  return typeof a == "function" && "applyToOptions" in a;
}
function yb({ type: a, ...l }) {
  return fy(a) && ry()
    ? a.applyToOptions(l)
    : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class dy extends Bc {
  constructor(l) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !l)
    )
      return;
    const {
      element: o,
      name: u,
      keyframes: c,
      pseudoElement: h,
      allowFlatten: d = !1,
      finalKeyframe: y,
      onComplete: g,
    } = l;
    ((this.isPseudoElement = !!h),
      (this.allowFlatten = d),
      (this.options = l),
      Nc(typeof l.type != "string"));
    const p = yb(l);
    ((this.animation = pb(o, u, c, p, h)),
      p.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !h)) {
          const v = Uc(c, this.options, y, this.speed);
          (this.updateMotionValue && this.updateMotionValue(v),
            oy(o, u, v),
            this.animation.cancel());
        }
        (g?.(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: l } = this;
    l === "idle" ||
      l === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    const l = this.options?.element;
    !this.isPseudoElement && l?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const l = this.animation.effect?.getComputedTiming?.().duration || 0;
    return Ue(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + Ue(l);
  }
  get time() {
    return Ue(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    const o = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = Ze(l)),
      o && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    (l < 0 && (this.finishedTime = null), (this.animation.playbackRate = l));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(l) {
    this.manualStartTime = this.animation.startTime = l;
  }
  attachTimeline({ timeline: l, rangeStart: o, rangeEnd: u, observe: c }) {
    return (
      this.allowFlatten &&
        this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      l && mb()
        ? ((this.animation.timeline = l),
          o && (this.animation.rangeStart = o),
          u && (this.animation.rangeEnd = u),
          Be)
        : c(this)
    );
  }
}
const hy = { anticipate: Y0, backInOut: q0, circInOut: X0 };
function gb(a) {
  return a in hy;
}
function vb(a) {
  typeof a.ease == "string" && gb(a.ease) && (a.ease = hy[a.ease]);
}
const Xr = 10;
class xb extends dy {
  constructor(l) {
    (vb(l),
      iy(l),
      super(l),
      l.startTime !== void 0 && (this.startTime = l.startTime),
      (this.options = l));
  }
  updateMotionValue(l) {
    const {
      motionValue: o,
      onUpdate: u,
      onComplete: c,
      element: h,
      ...d
    } = this.options;
    if (!o) return;
    if (l !== void 0) {
      o.set(l);
      return;
    }
    const y = new Lc({ ...d, autoplay: !1 }),
      g = Math.max(Xr, le.now() - this.startTime),
      p = tn(0, Xr, g - Xr),
      v = y.sample(g).value,
      { name: b } = this.options;
    (h && b && oy(h, b, v),
      o.setWithVelocity(y.sample(Math.max(0, g - p)).value, v, p),
      y.stop());
  }
}
const Mp = (a, l) =>
  l === "zIndex"
    ? !1
    : !!(
        typeof a == "number" ||
        Array.isArray(a) ||
        (typeof a == "string" &&
          (Ke.test(a) || a === "0") &&
          !a.startsWith("url("))
      );
function bb(a) {
  const l = a[0];
  if (a.length === 1) return !0;
  for (let o = 0; o < a.length; o++) if (a[o] !== l) return !0;
}
function Sb(a, l, o, u) {
  const c = a[0];
  if (c === null) return !1;
  if (l === "display" || l === "visibility") return !0;
  const h = a[a.length - 1],
    d = Mp(c, l),
    y = Mp(h, l);
  return !d || !y ? !1 : bb(a) || ((o === "spring" || fy(o)) && u);
}
function dc(a) {
  ((a.duration = 0), (a.type = "keyframes"));
}
const Tb = new Set(["opacity", "clipPath", "filter", "transform"]),
  Ab = w0(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Eb(a) {
  const {
    motionValue: l,
    name: o,
    repeatDelay: u,
    repeatType: c,
    damping: h,
    type: d,
  } = a;
  if (!(l?.owner?.current instanceof HTMLElement)) return !1;
  const { onUpdate: g, transformTemplate: p } = l.owner.getProps();
  return (
    Ab() &&
    o &&
    Tb.has(o) &&
    (o !== "transform" || !p) &&
    !g &&
    !u &&
    c !== "mirror" &&
    h !== 0 &&
    d !== "inertia"
  );
}
const Mb = 40;
class Db extends Bc {
  constructor({
    autoplay: l = !0,
    delay: o = 0,
    type: u = "keyframes",
    repeat: c = 0,
    repeatDelay: h = 0,
    repeatType: d = "loop",
    keyframes: y,
    name: g,
    motionValue: p,
    element: v,
    ...b
  }) {
    (super(),
      (this.stop = () => {
        (this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel());
      }),
      (this.createdAt = le.now()));
    const E = {
        autoplay: l,
        delay: o,
        type: u,
        repeat: c,
        repeatDelay: h,
        repeatType: d,
        name: g,
        motionValue: p,
        element: v,
        ...b,
      },
      V = v?.KeyframeResolver || Hc;
    ((this.keyframeResolver = new V(
      y,
      (w, L, X) => this.onKeyframesResolved(w, L, E, !X),
      g,
      p,
      v,
    )),
      this.keyframeResolver?.scheduleResolve());
  }
  onKeyframesResolved(l, o, u, c) {
    this.keyframeResolver = void 0;
    const {
      name: h,
      type: d,
      velocity: y,
      delay: g,
      isHandoff: p,
      onUpdate: v,
    } = u;
    ((this.resolvedAt = le.now()),
      Sb(l, h, d, y) ||
        ((bn.instantAnimations || !g) && v?.(Uc(l, u, o)),
        (l[0] = l[l.length - 1]),
        dc(u),
        (u.repeat = 0)));
    const E = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > Mb
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: o,
        ...u,
        keyframes: l,
      },
      V = !p && Eb(E),
      w = E.motionValue?.owner?.current,
      L = V ? new xb({ ...E, element: w }) : new Lc(E);
    (L.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(Be),
      this.pendingTimeline &&
        ((this.stopTimeline = L.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = L));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, o) {
    return this.finished.finally(l).then(() => {});
  }
  get animation() {
    return (
      this._animation || (this.keyframeResolver?.resume(), fb()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(l))
        : (this.pendingTimeline = l),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    (this._animation && this.animation.cancel(),
      this.keyframeResolver?.cancel());
  }
}
function my(a, l, o, u = 0, c = 1) {
  const h = Array.from(a)
      .sort((p, v) => p.sortNodePosition(v))
      .indexOf(l),
    d = a.size,
    y = (d - 1) * u;
  return typeof o == "function" ? o(h, d) : c === 1 ? h * u : y - h * u;
}
const Nb = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function jb(a) {
  const l = Nb.exec(a);
  if (!l) return [,];
  const [, o, u, c] = l;
  return [`--${o ?? u}`, c];
}
function py(a, l, o = 1) {
  const [u, c] = jb(a);
  if (!u) return;
  const h = window.getComputedStyle(l).getPropertyValue(u);
  if (h) {
    const d = h.trim();
    return O0(d) ? parseFloat(d) : d;
  }
  return Oc(c) ? py(c, l, o + 1) : c;
}
const Cb = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  zb = (a) => ({
    type: "spring",
    stiffness: 550,
    damping: a === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Ob = { type: "keyframes", duration: 0.8 },
  Vb = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Rb = (a, { keyframes: l }) =>
    l.length > 2
      ? Ob
      : pi.has(a)
        ? a.startsWith("scale")
          ? zb(l[1])
          : Cb
        : Vb,
  wb = (a) => a !== null;
function _b(a, { repeat: l, repeatType: o = "loop" }, u) {
  const c = a.filter(wb),
    h = l && o !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
  return c[h];
}
function yy(a, l) {
  if (a?.inherit && l) {
    const { inherit: o, ...u } = a;
    return { ...l, ...u };
  }
  return a;
}
function qc(a, l) {
  const o = a?.[l] ?? a?.default ?? a;
  return o !== a ? yy(o, a) : o;
}
function Ub({
  when: a,
  delay: l,
  delayChildren: o,
  staggerChildren: u,
  staggerDirection: c,
  repeat: h,
  repeatType: d,
  repeatDelay: y,
  from: g,
  elapsed: p,
  ...v
}) {
  return !!Object.keys(v).length;
}
const Yc =
  (a, l, o, u = {}, c, h) =>
  (d) => {
    const y = qc(u, a) || {},
      g = y.delay || u.delay || 0;
    let { elapsed: p = 0 } = u;
    p = p - Ze(g);
    const v = {
      keyframes: Array.isArray(o) ? o : [null, o],
      ease: "easeOut",
      velocity: l.getVelocity(),
      ...y,
      delay: -p,
      onUpdate: (E) => {
        (l.set(E), y.onUpdate && y.onUpdate(E));
      },
      onComplete: () => {
        (d(), y.onComplete && y.onComplete());
      },
      name: a,
      motionValue: l,
      element: h ? void 0 : c,
    };
    (Ub(y) || Object.assign(v, Rb(a, v)),
      v.duration && (v.duration = Ze(v.duration)),
      v.repeatDelay && (v.repeatDelay = Ze(v.repeatDelay)),
      v.from !== void 0 && (v.keyframes[0] = v.from));
    let b = !1;
    if (
      ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
        (dc(v), v.delay === 0 && (b = !0)),
      (bn.instantAnimations || bn.skipAnimations || c?.shouldSkipAnimations) &&
        ((b = !0), dc(v), (v.delay = 0)),
      (v.allowFlatten = !y.type && !y.ease),
      b && !h && l.get() !== void 0)
    ) {
      const E = _b(v.keyframes, y);
      if (E !== void 0) {
        Dt.update(() => {
          (v.onUpdate(E), v.onComplete());
        });
        return;
      }
    }
    return y.isSync ? new Lc(v) : new Db(v);
  };
function Dp(a) {
  const l = [{}, {}];
  return (
    a?.values.forEach((o, u) => {
      ((l[0][u] = o.get()), (l[1][u] = o.getVelocity()));
    }),
    l
  );
}
function Gc(a, l, o, u) {
  if (typeof l == "function") {
    const [c, h] = Dp(u);
    l = l(o !== void 0 ? o : a.custom, c, h);
  }
  if (
    (typeof l == "string" && (l = a.variants && a.variants[l]),
    typeof l == "function")
  ) {
    const [c, h] = Dp(u);
    l = l(o !== void 0 ? o : a.custom, c, h);
  }
  return l;
}
function fi(a, l, o) {
  const u = a.getProps();
  return Gc(u, l, o !== void 0 ? o : u.custom, a);
}
const gy = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...mi,
  ]),
  Np = 30,
  Bb = (a) => !isNaN(parseFloat(a));
class Lb {
  constructor(l, o = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (u) => {
        const c = le.now();
        if (
          (this.updatedAt !== c && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(u),
          this.current !== this.prev &&
            (this.events.change?.notify(this.current), this.dependents))
        )
          for (const h of this.dependents) h.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(l),
      (this.owner = o.owner));
  }
  setCurrent(l) {
    ((this.current = l),
      (this.updatedAt = le.now()),
      this.canTrackVelocity === null &&
        l !== void 0 &&
        (this.canTrackVelocity = Bb(this.current)));
  }
  setPrevFrameValue(l = this.current) {
    ((this.prevFrameValue = l), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(l) {
    return this.on("change", l);
  }
  on(l, o) {
    this.events[l] || (this.events[l] = new jc());
    const u = this.events[l].add(o);
    return l === "change"
      ? () => {
          (u(),
            Dt.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : u;
  }
  clearListeners() {
    for (const l in this.events) this.events[l].clear();
  }
  attach(l, o) {
    ((this.passiveEffect = l), (this.stopPassiveEffect = o));
  }
  set(l) {
    this.passiveEffect
      ? this.passiveEffect(l, this.updateAndNotify)
      : this.updateAndNotify(l);
  }
  setWithVelocity(l, o, u) {
    (this.set(o),
      (this.prev = void 0),
      (this.prevFrameValue = l),
      (this.prevUpdatedAt = this.updatedAt - u));
  }
  jump(l, o = !0) {
    (this.updateAndNotify(l),
      (this.prev = l),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      o && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(l) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(l));
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const l = le.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      l - this.updatedAt > Np
    )
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, Np);
    return _0(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
  }
  start(l) {
    return (
      this.stop(),
      new Promise((o) => {
        ((this.hasAnimated = !0),
          (this.animation = l(o)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function di(a, l) {
  return new Lb(a, l);
}
const hc = (a) => Array.isArray(a);
function Hb(a, l, o) {
  a.hasValue(l) ? a.getValue(l).set(o) : a.addValue(l, di(o));
}
function qb(a) {
  return hc(a) ? a[a.length - 1] || 0 : a;
}
function Yb(a, l) {
  const o = fi(a, l);
  let { transitionEnd: u = {}, transition: c = {}, ...h } = o || {};
  h = { ...h, ...u };
  for (const d in h) {
    const y = qb(h[d]);
    Hb(a, d, y);
  }
}
const ne = (a) => !!(a && a.getVelocity);
function Gb(a) {
  return !!(ne(a) && a.add);
}
function mc(a, l) {
  const o = a.getValue("willChange");
  if (Gb(o)) return o.add(l);
  if (!o && bn.WillChange) {
    const u = new bn.WillChange("auto");
    (a.addValue("willChange", u), u.add(l));
  }
}
function Xc(a) {
  return a.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const Xb = "framerAppearId",
  vy = "data-" + Xc(Xb);
function xy(a) {
  return a.props[vy];
}
function Qb({ protectedKeys: a, needsAnimating: l }, o) {
  const u = a.hasOwnProperty(o) && l[o] !== !0;
  return ((l[o] = !1), u);
}
function by(a, l, { delay: o = 0, transitionOverride: u, type: c } = {}) {
  let { transition: h, transitionEnd: d, ...y } = l;
  const g = a.getDefaultTransition();
  h = h ? yy(h, g) : g;
  const p = h?.reduceMotion;
  u && (h = u);
  const v = [],
    b = c && a.animationState && a.animationState.getState()[c];
  for (const E in y) {
    const V = a.getValue(E, a.latestValues[E] ?? null),
      w = y[E];
    if (w === void 0 || (b && Qb(b, E))) continue;
    const L = { delay: o, ...qc(h || {}, E) },
      X = V.get();
    if (
      X !== void 0 &&
      !V.isAnimating &&
      !Array.isArray(w) &&
      w === X &&
      !L.velocity
    )
      continue;
    let H = !1;
    if (window.MotionHandoffAnimation) {
      const P = xy(a);
      if (P) {
        const F = window.MotionHandoffAnimation(P, E, Dt);
        F !== null && ((L.startTime = F), (H = !0));
      }
    }
    mc(a, E);
    const G = p ?? a.shouldReduceMotion;
    V.start(Yc(E, V, w, G && gy.has(E) ? { type: !1 } : L, a, H));
    const B = V.animation;
    B && v.push(B);
  }
  if (d) {
    const E = () =>
      Dt.update(() => {
        d && Yb(a, d);
      });
    v.length ? Promise.all(v).then(E) : E();
  }
  return v;
}
function pc(a, l, o = {}) {
  const u = fi(a, l, o.type === "exit" ? a.presenceContext?.custom : void 0);
  let { transition: c = a.getDefaultTransition() || {} } = u || {};
  o.transitionOverride && (c = o.transitionOverride);
  const h = u ? () => Promise.all(by(a, u, o)) : () => Promise.resolve(),
    d =
      a.variantChildren && a.variantChildren.size
        ? (g = 0) => {
            const {
              delayChildren: p = 0,
              staggerChildren: v,
              staggerDirection: b,
            } = c;
            return Zb(a, l, g, p, v, b, o);
          }
        : () => Promise.resolve(),
    { when: y } = c;
  if (y) {
    const [g, p] = y === "beforeChildren" ? [h, d] : [d, h];
    return g().then(() => p());
  } else return Promise.all([h(), d(o.delay)]);
}
function Zb(a, l, o = 0, u = 0, c = 0, h = 1, d) {
  const y = [];
  for (const g of a.variantChildren)
    (g.notify("AnimationStart", l),
      y.push(
        pc(g, l, {
          ...d,
          delay:
            o +
            (typeof u == "function" ? 0 : u) +
            my(a.variantChildren, g, u, c, h),
        }).then(() => g.notify("AnimationComplete", l)),
      ));
  return Promise.all(y);
}
function Kb(a, l, o = {}) {
  a.notify("AnimationStart", l);
  let u;
  if (Array.isArray(l)) {
    const c = l.map((h) => pc(a, h, o));
    u = Promise.all(c);
  } else if (typeof l == "string") u = pc(a, l, o);
  else {
    const c = typeof l == "function" ? fi(a, l, o.custom) : l;
    u = Promise.all(by(a, c, o));
  }
  return u.then(() => {
    a.notify("AnimationComplete", l);
  });
}
const kb = { test: (a) => a === "auto", parse: (a) => a },
  Sy = (a) => (l) => l.test(a),
  Ty = [hi, K, Ie, Kn, Ax, Tx, kb],
  jp = (a) => Ty.find(Sy(a));
function Jb(a) {
  return typeof a == "number"
    ? a === 0
    : a !== null
      ? a === "none" || a === "0" || R0(a)
      : !0;
}
const Pb = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Fb(a) {
  const [l, o] = a.slice(0, -1).split("(");
  if (l === "drop-shadow") return a;
  const [u] = o.match(Vc) || [];
  if (!u) return a;
  const c = o.replace(u, "");
  let h = Pb.has(l) ? 1 : 0;
  return (u !== o && (h *= 100), l + "(" + h + c + ")");
}
const Wb = /\b([a-z-]*)\(.*?\)/gu,
  yc = {
    ...Ke,
    getAnimatableNone: (a) => {
      const l = a.match(Wb);
      return l ? l.map(Fb).join(" ") : a;
    },
  },
  gc = {
    ...Ke,
    getAnimatableNone: (a) => {
      const l = Ke.parse(a);
      return Ke.createTransformer(a)(
        l.map((u) =>
          typeof u == "number"
            ? 0
            : typeof u == "object"
              ? { ...u, alpha: 1 }
              : u,
        ),
      );
    },
  },
  Cp = { ...hi, transform: Math.round },
  $b = {
    rotate: Kn,
    rotateX: Kn,
    rotateY: Kn,
    rotateZ: Kn,
    scale: Ks,
    scaleX: Ks,
    scaleY: Ks,
    scaleZ: Ks,
    skew: Kn,
    skewX: Kn,
    skewY: Kn,
    distance: K,
    translateX: K,
    translateY: K,
    translateZ: K,
    x: K,
    y: K,
    z: K,
    perspective: K,
    transformPerspective: K,
    opacity: xl,
    originX: pp,
    originY: pp,
    originZ: K,
  },
  Qc = {
    borderWidth: K,
    borderTopWidth: K,
    borderRightWidth: K,
    borderBottomWidth: K,
    borderLeftWidth: K,
    borderRadius: K,
    borderTopLeftRadius: K,
    borderTopRightRadius: K,
    borderBottomRightRadius: K,
    borderBottomLeftRadius: K,
    width: K,
    maxWidth: K,
    height: K,
    maxHeight: K,
    top: K,
    right: K,
    bottom: K,
    left: K,
    inset: K,
    insetBlock: K,
    insetBlockStart: K,
    insetBlockEnd: K,
    insetInline: K,
    insetInlineStart: K,
    insetInlineEnd: K,
    padding: K,
    paddingTop: K,
    paddingRight: K,
    paddingBottom: K,
    paddingLeft: K,
    paddingBlock: K,
    paddingBlockStart: K,
    paddingBlockEnd: K,
    paddingInline: K,
    paddingInlineStart: K,
    paddingInlineEnd: K,
    margin: K,
    marginTop: K,
    marginRight: K,
    marginBottom: K,
    marginLeft: K,
    marginBlock: K,
    marginBlockStart: K,
    marginBlockEnd: K,
    marginInline: K,
    marginInlineStart: K,
    marginInlineEnd: K,
    fontSize: K,
    backgroundPositionX: K,
    backgroundPositionY: K,
    ...$b,
    zIndex: Cp,
    fillOpacity: xl,
    strokeOpacity: xl,
    numOctaves: Cp,
  },
  Ib = {
    ...Qc,
    color: Gt,
    backgroundColor: Gt,
    outlineColor: Gt,
    fill: Gt,
    stroke: Gt,
    borderColor: Gt,
    borderTopColor: Gt,
    borderRightColor: Gt,
    borderBottomColor: Gt,
    borderLeftColor: Gt,
    filter: yc,
    WebkitFilter: yc,
    mask: gc,
    WebkitMask: gc,
  },
  Ay = (a) => Ib[a],
  tS = new Set([yc, gc]);
function Ey(a, l) {
  let o = Ay(a);
  return (
    tS.has(o) || (o = Ke),
    o.getAnimatableNone ? o.getAnimatableNone(l) : void 0
  );
}
const eS = new Set(["auto", "none", "0"]);
function nS(a, l, o) {
  let u = 0,
    c;
  for (; u < a.length && !c; ) {
    const h = a[u];
    (typeof h == "string" && !eS.has(h) && bl(h).values.length && (c = a[u]),
      u++);
  }
  if (c && o) for (const h of l) a[h] = Ey(o, c);
}
class aS extends Hc {
  constructor(l, o, u, c, h) {
    super(l, o, u, c, h, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: o, name: u } = this;
    if (!o || !o.current) return;
    super.readKeyframes();
    for (let v = 0; v < l.length; v++) {
      let b = l[v];
      if (typeof b == "string" && ((b = b.trim()), Oc(b))) {
        const E = py(b, o.current);
        (E !== void 0 && (l[v] = E),
          v === l.length - 1 && (this.finalKeyframe = b));
      }
    }
    if ((this.resolveNoneKeyframes(), !gy.has(u) || l.length !== 2)) return;
    const [c, h] = l,
      d = jp(c),
      y = jp(h),
      g = mp(c),
      p = mp(h);
    if (g !== p && kn[u]) {
      this.needsMeasurement = !0;
      return;
    }
    if (d !== y)
      if (Ap(d) && Ap(y))
        for (let v = 0; v < l.length; v++) {
          const b = l[v];
          typeof b == "string" && (l[v] = parseFloat(b));
        }
      else kn[u] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: o } = this,
      u = [];
    for (let c = 0; c < l.length; c++) (l[c] === null || Jb(l[c])) && u.push(c);
    u.length && nS(l, u, o);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: o, name: u } = this;
    if (!l || !l.current) return;
    (u === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = kn[u](
        l.measureViewportBox(),
        window.getComputedStyle(l.current),
      )),
      (o[0] = this.measuredOrigin));
    const c = o[o.length - 1];
    c !== void 0 && l.getValue(u, c).jump(c, !1);
  }
  measureEndState() {
    const { element: l, name: o, unresolvedKeyframes: u } = this;
    if (!l || !l.current) return;
    const c = l.getValue(o);
    c && c.jump(this.measuredOrigin, !1);
    const h = u.length - 1,
      d = u[h];
    ((u[h] = kn[o](l.measureViewportBox(), window.getComputedStyle(l.current))),
      d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([y, g]) => {
          l.getValue(y).set(g);
        }),
      this.resolveNoneKeyframes());
  }
}
const iS = new Set(["opacity", "clipPath", "filter", "transform"]);
function My(a, l, o) {
  if (a == null) return [];
  if (a instanceof EventTarget) return [a];
  if (typeof a == "string") {
    let u = document;
    const c = o?.[a] ?? u.querySelectorAll(a);
    return c ? Array.from(c) : [];
  }
  return Array.from(a).filter((u) => u != null);
}
const Dy = (a, l) => (l && typeof a == "number" ? l.transform(a) : a);
function lS(a) {
  return V0(a) && "offsetHeight" in a;
}
const { schedule: Zc } = K0(queueMicrotask, !1),
  Qe = { x: !1, y: !1 };
function Ny() {
  return Qe.x || Qe.y;
}
function sS(a) {
  return a === "x" || a === "y"
    ? Qe[a]
      ? null
      : ((Qe[a] = !0),
        () => {
          Qe[a] = !1;
        })
    : Qe.x || Qe.y
      ? null
      : ((Qe.x = Qe.y = !0),
        () => {
          Qe.x = Qe.y = !1;
        });
}
function jy(a, l) {
  const o = My(a),
    u = new AbortController(),
    c = { passive: !0, ...l, signal: u.signal };
  return [o, c, () => u.abort()];
}
function oS(a) {
  return !(a.pointerType === "touch" || Ny());
}
function uS(a, l, o = {}) {
  const [u, c, h] = jy(a, o);
  return (
    u.forEach((d) => {
      let y = !1,
        g = !1,
        p;
      const v = () => {
          d.removeEventListener("pointerleave", w);
        },
        b = (X) => {
          (p && (p(X), (p = void 0)), v());
        },
        E = (X) => {
          ((y = !1),
            window.removeEventListener("pointerup", E),
            window.removeEventListener("pointercancel", E),
            g && ((g = !1), b(X)));
        },
        V = () => {
          ((y = !0),
            window.addEventListener("pointerup", E, c),
            window.addEventListener("pointercancel", E, c));
        },
        w = (X) => {
          if (X.pointerType !== "touch") {
            if (y) {
              g = !0;
              return;
            }
            b(X);
          }
        },
        L = (X) => {
          if (!oS(X)) return;
          g = !1;
          const H = l(d, X);
          typeof H == "function" &&
            ((p = H), d.addEventListener("pointerleave", w, c));
        };
      (d.addEventListener("pointerenter", L, c),
        d.addEventListener("pointerdown", V, c));
    }),
    h
  );
}
const Cy = (a, l) => (l ? (a === l ? !0 : Cy(a, l.parentElement)) : !1),
  Kc = (a) =>
    a.pointerType === "mouse"
      ? typeof a.button != "number" || a.button <= 0
      : a.isPrimary !== !1,
  rS = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function cS(a) {
  return rS.has(a.tagName) || a.isContentEditable === !0;
}
const fS = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function dS(a) {
  return fS.has(a.tagName) || a.isContentEditable === !0;
}
const Ps = new WeakSet();
function zp(a) {
  return (l) => {
    l.key === "Enter" && a(l);
  };
}
function Qr(a, l) {
  a.dispatchEvent(
    new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }),
  );
}
const hS = (a, l) => {
  const o = a.currentTarget;
  if (!o) return;
  const u = zp(() => {
    if (Ps.has(o)) return;
    Qr(o, "down");
    const c = zp(() => {
        Qr(o, "up");
      }),
      h = () => Qr(o, "cancel");
    (o.addEventListener("keyup", c, l), o.addEventListener("blur", h, l));
  });
  (o.addEventListener("keydown", u, l),
    o.addEventListener("blur", () => o.removeEventListener("keydown", u), l));
};
function Op(a) {
  return Kc(a) && !Ny();
}
const Vp = new WeakSet();
function mS(a, l, o = {}) {
  const [u, c, h] = jy(a, o),
    d = (y) => {
      const g = y.currentTarget;
      if (!Op(y) || Vp.has(y)) return;
      (Ps.add(g), o.stopPropagation && Vp.add(y));
      const p = l(g, y),
        v = (V, w) => {
          (window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", E),
            Ps.has(g) && Ps.delete(g),
            Op(V) && typeof p == "function" && p(V, { success: w }));
        },
        b = (V) => {
          v(
            V,
            g === window ||
              g === document ||
              o.useGlobalTarget ||
              Cy(g, V.target),
          );
        },
        E = (V) => {
          v(V, !1);
        };
      (window.addEventListener("pointerup", b, c),
        window.addEventListener("pointercancel", E, c));
    };
  return (
    u.forEach((y) => {
      ((o.useGlobalTarget ? window : y).addEventListener("pointerdown", d, c),
        lS(y) &&
          (y.addEventListener("focus", (p) => hS(p, c)),
          !cS(y) && !y.hasAttribute("tabindex") && (y.tabIndex = 0)));
    }),
    h
  );
}
function kc(a) {
  return V0(a) && "ownerSVGElement" in a;
}
const Fs = new WeakMap();
let Ws;
const zy = (a, l, o) => (u, c) =>
    c && c[0]
      ? c[0][a + "Size"]
      : kc(u) && "getBBox" in u
        ? u.getBBox()[l]
        : u[o],
  pS = zy("inline", "width", "offsetWidth"),
  yS = zy("block", "height", "offsetHeight");
function gS({ target: a, borderBoxSize: l }) {
  Fs.get(a)?.forEach((o) => {
    o(a, {
      get width() {
        return pS(a, l);
      },
      get height() {
        return yS(a, l);
      },
    });
  });
}
function vS(a) {
  a.forEach(gS);
}
function xS() {
  typeof ResizeObserver > "u" || (Ws = new ResizeObserver(vS));
}
function bS(a, l) {
  Ws || xS();
  const o = My(a);
  return (
    o.forEach((u) => {
      let c = Fs.get(u);
      (c || ((c = new Set()), Fs.set(u, c)), c.add(l), Ws?.observe(u));
    }),
    () => {
      o.forEach((u) => {
        const c = Fs.get(u);
        (c?.delete(l), c?.size || Ws?.unobserve(u));
      });
    }
  );
}
const $s = new Set();
let oi;
function SS() {
  ((oi = () => {
    const a = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    $s.forEach((l) => l(a));
  }),
    window.addEventListener("resize", oi));
}
function TS(a) {
  return (
    $s.add(a),
    oi || SS(),
    () => {
      ($s.delete(a),
        !$s.size &&
          typeof oi == "function" &&
          (window.removeEventListener("resize", oi), (oi = void 0)));
    }
  );
}
function Rp(a, l) {
  return typeof a == "function" ? TS(a) : bS(a, l);
}
function AS(a) {
  return kc(a) && a.tagName === "svg";
}
const ES = [...Ty, Gt, Ke],
  MS = (a) => ES.find(Sy(a)),
  wp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ui = () => ({ x: wp(), y: wp() }),
  _p = () => ({ min: 0, max: 0 }),
  Zt = () => ({ x: _p(), y: _p() }),
  DS = new WeakMap();
function ro(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function Sl(a) {
  return typeof a == "string" || Array.isArray(a);
}
const Jc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Pc = ["initial", ...Jc];
function co(a) {
  return ro(a.animate) || Pc.some((l) => Sl(a[l]));
}
function Oy(a) {
  return !!(co(a) || a.variants);
}
function NS(a, l, o) {
  for (const u in l) {
    const c = l[u],
      h = o[u];
    if (ne(c)) a.addValue(u, c);
    else if (ne(h)) a.addValue(u, di(c, { owner: a }));
    else if (h !== c)
      if (a.hasValue(u)) {
        const d = a.getValue(u);
        d.liveStyle === !0 ? d.jump(c) : d.hasAnimated || d.set(c);
      } else {
        const d = a.getStaticValue(u);
        a.addValue(u, di(d !== void 0 ? d : c, { owner: a }));
      }
  }
  for (const u in o) l[u] === void 0 && a.removeValue(u);
  return l;
}
const vc = { current: null },
  Vy = { current: !1 },
  jS = typeof window < "u";
function CS() {
  if (((Vy.current = !0), !!jS))
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"),
        l = () => (vc.current = a.matches);
      (a.addEventListener("change", l), l());
    } else vc.current = !1;
}
const Up = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let lo = {};
function Ry(a) {
  lo = a;
}
function zS() {
  return lo;
}
class OS {
  scrapeMotionValuesFromProps(l, o, u) {
    return {};
  }
  constructor(
    {
      parent: l,
      props: o,
      presenceContext: u,
      reducedMotionConfig: c,
      skipAnimations: h,
      blockInitialAnimation: d,
      visualState: y,
    },
    g = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = Hc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const V = le.now();
        this.renderScheduledAt < V &&
          ((this.renderScheduledAt = V), Dt.render(this.render, !1, !0));
      }));
    const { latestValues: p, renderState: v } = y;
    ((this.latestValues = p),
      (this.baseTarget = { ...p }),
      (this.initialValues = o.initial ? { ...p } : {}),
      (this.renderState = v),
      (this.parent = l),
      (this.props = o),
      (this.presenceContext = u),
      (this.depth = l ? l.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.skipAnimationsConfig = h),
      (this.options = g),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = co(o)),
      (this.isVariantNode = Oy(o)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(l && l.current)));
    const { willChange: b, ...E } = this.scrapeMotionValuesFromProps(
      o,
      {},
      this,
    );
    for (const V in E) {
      const w = E[V];
      p[V] !== void 0 && ne(w) && w.set(p[V]);
    }
  }
  mount(l) {
    if (this.hasBeenMounted)
      for (const o in this.initialValues)
        (this.values.get(o)?.jump(this.initialValues[o]),
          (this.latestValues[o] = this.initialValues[o]));
    ((this.current = l),
      DS.set(l, this),
      this.projection && !this.projection.instance && this.projection.mount(l),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((o, u) => this.bindToMotionValue(u, o)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (Vy.current || CS(), (this.shouldReduceMotion = vc.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      Jn(this.notifyUpdate),
      Jn(this.render),
      this.valueSubscriptions.forEach((l) => l()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this));
    for (const l in this.events) this.events[l].clear();
    for (const l in this.features) {
      const o = this.features[l];
      o && (o.unmount(), (o.isMounted = !1));
    }
    this.current = null;
  }
  addChild(l) {
    (this.children.add(l),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(l));
  }
  removeChild(l) {
    (this.children.delete(l),
      this.enteringChildren && this.enteringChildren.delete(l));
  }
  bindToMotionValue(l, o) {
    if (
      (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(),
      o.accelerate && iS.has(l) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: d,
          keyframes: y,
          times: g,
          ease: p,
          duration: v,
        } = o.accelerate,
        b = new dy({
          element: this.current,
          name: l,
          keyframes: y,
          times: g,
          ease: p,
          duration: Ze(v),
        }),
        E = d(b);
      this.valueSubscriptions.set(l, () => {
        (E(), b.cancel());
      });
      return;
    }
    const u = pi.has(l);
    u && this.onBindTransform && this.onBindTransform();
    const c = o.on("change", (d) => {
      ((this.latestValues[l] = d),
        this.props.onUpdate && Dt.preRender(this.notifyUpdate),
        u && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let h;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (h = window.MotionCheckAppearSync(this, l, o)),
      this.valueSubscriptions.set(l, () => {
        (c(), h && h(), o.owner && o.stop());
      }));
  }
  sortNodePosition(l) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== l.type
      ? 0
      : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in lo) {
      const o = lo[l];
      if (!o) continue;
      const { isEnabled: u, Feature: c } = o;
      if (
        (!this.features[l] &&
          c &&
          u(this.props) &&
          (this.features[l] = new c(this)),
        this.features[l])
      ) {
        const h = this.features[l];
        h.isMounted ? h.update() : (h.mount(), (h.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Zt();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, o) {
    this.latestValues[l] = o;
  }
  update(l, o) {
    ((l.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = l),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = o));
    for (let u = 0; u < Up.length; u++) {
      const c = Up[u];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const h = "on" + c,
        d = l[h];
      d && (this.propEventSubscriptions[c] = this.on(c, d));
    }
    ((this.prevMotionValues = NS(
      this,
      this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(l) {
    const o = this.getClosestVariantNode();
    if (o)
      return (
        o.variantChildren && o.variantChildren.add(l),
        () => o.variantChildren.delete(l)
      );
  }
  addValue(l, o) {
    const u = this.values.get(l);
    o !== u &&
      (u && this.removeValue(l),
      this.bindToMotionValue(l, o),
      this.values.set(l, o),
      (this.latestValues[l] = o.get()));
  }
  removeValue(l) {
    this.values.delete(l);
    const o = this.valueSubscriptions.get(l);
    (o && (o(), this.valueSubscriptions.delete(l)),
      delete this.latestValues[l],
      this.removeValueFromRenderState(l, this.renderState));
  }
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, o) {
    if (this.props.values && this.props.values[l]) return this.props.values[l];
    let u = this.values.get(l);
    return (
      u === void 0 &&
        o !== void 0 &&
        ((u = di(o === null ? void 0 : o, { owner: this })),
        this.addValue(l, u)),
      u
    );
  }
  readValue(l, o) {
    let u =
      this.latestValues[l] !== void 0 || !this.current
        ? this.latestValues[l]
        : (this.getBaseTargetFromProps(this.props, l) ??
          this.readValueFromInstance(this.current, l, this.options));
    return (
      u != null &&
        (typeof u == "string" && (O0(u) || R0(u))
          ? (u = parseFloat(u))
          : !MS(u) && Ke.test(o) && (u = Ey(l, o)),
        this.setBaseTarget(l, ne(u) ? u.get() : u)),
      ne(u) ? u.get() : u
    );
  }
  setBaseTarget(l, o) {
    this.baseTarget[l] = o;
  }
  getBaseTarget(l) {
    const { initial: o } = this.props;
    let u;
    if (typeof o == "string" || typeof o == "object") {
      const h = Gc(this.props, o, this.presenceContext?.custom);
      h && (u = h[l]);
    }
    if (o && u !== void 0) return u;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !ne(c)
      ? c
      : this.initialValues[l] !== void 0 && u === void 0
        ? void 0
        : this.baseTarget[l];
  }
  on(l, o) {
    return (
      this.events[l] || (this.events[l] = new jc()),
      this.events[l].add(o)
    );
  }
  notify(l, ...o) {
    this.events[l] && this.events[l].notify(...o);
  }
  scheduleRenderMicrotask() {
    Zc.render(this.render);
  }
}
class wy extends OS {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = aS));
  }
  sortInstanceNodePosition(l, o) {
    return l.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, o) {
    const u = l.style;
    return u ? u[o] : void 0;
  }
  removeValueFromRenderState(l, { vars: o, style: u }) {
    (delete o[l], delete u[l]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    ne(l) &&
      (this.childSubscription = l.on("change", (o) => {
        this.current && (this.current.textContent = `${o}`);
      }));
  }
}
class Pn {
  constructor(l) {
    ((this.isMounted = !1), (this.node = l));
  }
  update() {}
}
function _y({ top: a, left: l, right: o, bottom: u }) {
  return { x: { min: l, max: o }, y: { min: a, max: u } };
}
function VS({ x: a, y: l }) {
  return { top: l.min, right: a.max, bottom: l.max, left: a.min };
}
function RS(a, l) {
  if (!l) return a;
  const o = l({ x: a.left, y: a.top }),
    u = l({ x: a.right, y: a.bottom });
  return { top: o.y, left: o.x, bottom: u.y, right: u.x };
}
function Zr(a) {
  return a === void 0 || a === 1;
}
function xc({ scale: a, scaleX: l, scaleY: o }) {
  return !Zr(a) || !Zr(l) || !Zr(o);
}
function ya(a) {
  return (
    xc(a) ||
    Uy(a) ||
    a.z ||
    a.rotate ||
    a.rotateX ||
    a.rotateY ||
    a.skewX ||
    a.skewY
  );
}
function Uy(a) {
  return Bp(a.x) || Bp(a.y);
}
function Bp(a) {
  return a && a !== "0%";
}
function so(a, l, o) {
  const u = a - o,
    c = l * u;
  return o + c;
}
function Lp(a, l, o, u, c) {
  return (c !== void 0 && (a = so(a, c, u)), so(a, o, u) + l);
}
function bc(a, l = 0, o = 1, u, c) {
  ((a.min = Lp(a.min, l, o, u, c)), (a.max = Lp(a.max, l, o, u, c)));
}
function By(a, { x: l, y: o }) {
  (bc(a.x, l.translate, l.scale, l.originPoint),
    bc(a.y, o.translate, o.scale, o.originPoint));
}
const Hp = 0.999999999999,
  qp = 1.0000000000001;
function wS(a, l, o, u = !1) {
  const c = o.length;
  if (!c) return;
  l.x = l.y = 1;
  let h, d;
  for (let y = 0; y < c; y++) {
    ((h = o[y]), (d = h.projectionDelta));
    const { visualElement: g } = h.options;
    (g && g.props.style && g.props.style.display === "contents") ||
      (u &&
        h.options.layoutScroll &&
        h.scroll &&
        h !== h.root &&
        ci(a, { x: -h.scroll.offset.x, y: -h.scroll.offset.y }),
      d && ((l.x *= d.x.scale), (l.y *= d.y.scale), By(a, d)),
      u && ya(h.latestValues) && ci(a, h.latestValues));
  }
  (l.x < qp && l.x > Hp && (l.x = 1), l.y < qp && l.y > Hp && (l.y = 1));
}
function ri(a, l) {
  ((a.min = a.min + l), (a.max = a.max + l));
}
function Yp(a, l, o, u, c = 0.5) {
  const h = zt(a.min, a.max, c);
  bc(a, l, o, h, u);
}
function Gp(a, l) {
  return typeof a == "string" ? (parseFloat(a) / 100) * (l.max - l.min) : a;
}
function ci(a, l) {
  (Yp(a.x, Gp(l.x, a.x), l.scaleX, l.scale, l.originX),
    Yp(a.y, Gp(l.y, a.y), l.scaleY, l.scale, l.originY));
}
function Ly(a, l) {
  return _y(RS(a.getBoundingClientRect(), l));
}
function _S(a, l, o) {
  const u = Ly(a, o),
    { scroll: c } = l;
  return (c && (ri(u.x, c.offset.x), ri(u.y, c.offset.y)), u);
}
const US = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  BS = mi.length;
function LS(a, l, o) {
  let u = "",
    c = !0;
  for (let h = 0; h < BS; h++) {
    const d = mi[h],
      y = a[d];
    if (y === void 0) continue;
    let g = !0;
    if (typeof y == "number") g = y === (d.startsWith("scale") ? 1 : 0);
    else {
      const p = parseFloat(y);
      g = d.startsWith("scale") ? p === 1 : p === 0;
    }
    if (!g || o) {
      const p = Dy(y, Qc[d]);
      if (!g) {
        c = !1;
        const v = US[d] || d;
        u += `${v}(${p}) `;
      }
      o && (l[d] = p);
    }
  }
  return ((u = u.trim()), o ? (u = o(l, c ? "" : u)) : c && (u = "none"), u);
}
function Fc(a, l, o) {
  const { style: u, vars: c, transformOrigin: h } = a;
  let d = !1,
    y = !1;
  for (const g in l) {
    const p = l[g];
    if (pi.has(g)) {
      d = !0;
      continue;
    } else if (J0(g)) {
      c[g] = p;
      continue;
    } else {
      const v = Dy(p, Qc[g]);
      g.startsWith("origin") ? ((y = !0), (h[g] = v)) : (u[g] = v);
    }
  }
  if (
    (l.transform ||
      (d || o
        ? (u.transform = LS(l, a.transform, o))
        : u.transform && (u.transform = "none")),
    y)
  ) {
    const { originX: g = "50%", originY: p = "50%", originZ: v = 0 } = h;
    u.transformOrigin = `${g} ${p} ${v}`;
  }
}
function Hy(a, { style: l, vars: o }, u, c) {
  const h = a.style;
  let d;
  for (d in l) h[d] = l[d];
  c?.applyProjectionStyles(h, u);
  for (d in o) h.setProperty(d, o[d]);
}
function Xp(a, l) {
  return l.max === l.min ? 0 : (a / (l.max - l.min)) * 100;
}
const fl = {
    correct: (a, l) => {
      if (!l.target) return a;
      if (typeof a == "string")
        if (K.test(a)) a = parseFloat(a);
        else return a;
      const o = Xp(a, l.target.x),
        u = Xp(a, l.target.y);
      return `${o}% ${u}%`;
    },
  },
  HS = {
    correct: (a, { treeScale: l, projectionDelta: o }) => {
      const u = a,
        c = Ke.parse(a);
      if (c.length > 5) return u;
      const h = Ke.createTransformer(a),
        d = typeof c[0] != "number" ? 1 : 0,
        y = o.x.scale * l.x,
        g = o.y.scale * l.y;
      ((c[0 + d] /= y), (c[1 + d] /= g));
      const p = zt(y, g, 0.5);
      return (
        typeof c[2 + d] == "number" && (c[2 + d] /= p),
        typeof c[3 + d] == "number" && (c[3 + d] /= p),
        h(c)
      );
    },
  },
  Sc = {
    borderRadius: {
      ...fl,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: fl,
    borderTopRightRadius: fl,
    borderBottomLeftRadius: fl,
    borderBottomRightRadius: fl,
    boxShadow: HS,
  };
function qy(a, { layout: l, layoutId: o }) {
  return (
    pi.has(a) ||
    a.startsWith("origin") ||
    ((l || o !== void 0) && (!!Sc[a] || a === "opacity"))
  );
}
function Wc(a, l, o) {
  const u = a.style,
    c = l?.style,
    h = {};
  if (!u) return h;
  for (const d in u)
    (ne(u[d]) ||
      (c && ne(c[d])) ||
      qy(d, a) ||
      o?.getValue(d)?.liveStyle !== void 0) &&
      (h[d] = u[d]);
  return h;
}
function qS(a) {
  return window.getComputedStyle(a);
}
class YS extends wy {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Hy));
  }
  readValueFromInstance(l, o) {
    if (pi.has(o)) return this.projection?.isProjecting ? oc(o) : sb(l, o);
    {
      const u = qS(l),
        c = (J0(o) ? u.getPropertyValue(o) : u[o]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: o }) {
    return Ly(l, o);
  }
  build(l, o, u) {
    Fc(l, o, u.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, o, u) {
    return Wc(l, o, u);
  }
}
const GS = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  XS = { offset: "strokeDashoffset", array: "strokeDasharray" };
function QS(a, l, o = 1, u = 0, c = !0) {
  a.pathLength = 1;
  const h = c ? GS : XS;
  ((a[h.offset] = `${-u}`), (a[h.array] = `${l} ${o}`));
}
const ZS = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Yy(
  a,
  {
    attrX: l,
    attrY: o,
    attrScale: u,
    pathLength: c,
    pathSpacing: h = 1,
    pathOffset: d = 0,
    ...y
  },
  g,
  p,
  v,
) {
  if ((Fc(a, y, p), g)) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  ((a.attrs = a.style), (a.style = {}));
  const { attrs: b, style: E } = a;
  (b.transform && ((E.transform = b.transform), delete b.transform),
    (E.transform || b.transformOrigin) &&
      ((E.transformOrigin = b.transformOrigin ?? "50% 50%"),
      delete b.transformOrigin),
    E.transform &&
      ((E.transformBox = v?.transformBox ?? "fill-box"),
      delete b.transformBox));
  for (const V of ZS) b[V] !== void 0 && ((E[V] = b[V]), delete b[V]);
  (l !== void 0 && (b.x = l),
    o !== void 0 && (b.y = o),
    u !== void 0 && (b.scale = u),
    c !== void 0 && QS(b, c, h, d, !1));
}
const Gy = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  Xy = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function KS(a, l, o, u) {
  Hy(a, l, void 0, u);
  for (const c in l.attrs) a.setAttribute(Gy.has(c) ? c : Xc(c), l.attrs[c]);
}
function Qy(a, l, o) {
  const u = Wc(a, l, o);
  for (const c in a)
    if (ne(a[c]) || ne(l[c])) {
      const h =
        mi.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      u[h] = a[c];
    }
  return u;
}
class kS extends wy {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Zt));
  }
  getBaseTargetFromProps(l, o) {
    return l[o];
  }
  readValueFromInstance(l, o) {
    if (pi.has(o)) {
      const u = Ay(o);
      return (u && u.default) || 0;
    }
    return ((o = Gy.has(o) ? o : Xc(o)), l.getAttribute(o));
  }
  scrapeMotionValuesFromProps(l, o, u) {
    return Qy(l, o, u);
  }
  build(l, o, u) {
    Yy(l, o, this.isSVGTag, u.transformTemplate, u.style);
  }
  renderInstance(l, o, u, c) {
    KS(l, o, u, c);
  }
  mount(l) {
    ((this.isSVGTag = Xy(l.tagName)), super.mount(l));
  }
}
const JS = Pc.length;
function Zy(a) {
  if (!a) return;
  if (!a.isControllingVariants) {
    const o = a.parent ? Zy(a.parent) || {} : {};
    return (a.props.initial !== void 0 && (o.initial = a.props.initial), o);
  }
  const l = {};
  for (let o = 0; o < JS; o++) {
    const u = Pc[o],
      c = a.props[u];
    (Sl(c) || c === !1) && (l[u] = c);
  }
  return l;
}
function Ky(a, l) {
  if (!Array.isArray(l)) return !1;
  const o = l.length;
  if (o !== a.length) return !1;
  for (let u = 0; u < o; u++) if (l[u] !== a[u]) return !1;
  return !0;
}
const PS = [...Jc].reverse(),
  FS = Jc.length;
function WS(a) {
  return (l) =>
    Promise.all(l.map(({ animation: o, options: u }) => Kb(a, o, u)));
}
function $S(a) {
  let l = WS(a),
    o = Qp(),
    u = !0,
    c = !1;
  const h = (p) => (v, b) => {
    const E = fi(a, b, p === "exit" ? a.presenceContext?.custom : void 0);
    if (E) {
      const { transition: V, transitionEnd: w, ...L } = E;
      v = { ...v, ...L, ...w };
    }
    return v;
  };
  function d(p) {
    l = p(a);
  }
  function y(p) {
    const { props: v } = a,
      b = Zy(a.parent) || {},
      E = [],
      V = new Set();
    let w = {},
      L = 1 / 0;
    for (let H = 0; H < FS; H++) {
      const G = PS[H],
        B = o[G],
        P = v[G] !== void 0 ? v[G] : b[G],
        F = Sl(P),
        lt = G === p ? B.isActive : null;
      lt === !1 && (L = H);
      let W = P === b[G] && P !== v[G] && F;
      if (
        (W && (u || c) && a.manuallyAnimateOnMount && (W = !1),
        (B.protectedKeys = { ...w }),
        (!B.isActive && lt === null) ||
          (!P && !B.prevProp) ||
          ro(P) ||
          typeof P == "boolean")
      )
        continue;
      if (G === "exit" && B.isActive && lt !== !0) {
        B.prevResolvedValues && (w = { ...w, ...B.prevResolvedValues });
        continue;
      }
      const et = IS(B.prevProp, P);
      let Mt = et || (G === p && B.isActive && !W && F) || (H > L && F),
        Xt = !1;
      const oe = Array.isArray(P) ? P : [P];
      let Bt = oe.reduce(h(G), {});
      lt === !1 && (Bt = {});
      const { prevResolvedValues: ke = {} } = B,
        He = { ...ke, ...Bt },
        ue = (Q) => {
          ((Mt = !0),
            V.has(Q) && ((Xt = !0), V.delete(Q)),
            (B.needsAnimating[Q] = !0));
          const st = a.getValue(Q);
          st && (st.liveStyle = !1);
        };
      for (const Q in He) {
        const st = Bt[Q],
          ht = ke[Q];
        if (w.hasOwnProperty(Q)) continue;
        let A = !1;
        (hc(st) && hc(ht) ? (A = !Ky(st, ht)) : (A = st !== ht),
          A
            ? st != null
              ? ue(Q)
              : V.add(Q)
            : st !== void 0 && V.has(Q)
              ? ue(Q)
              : (B.protectedKeys[Q] = !0));
      }
      ((B.prevProp = P),
        (B.prevResolvedValues = Bt),
        B.isActive && (w = { ...w, ...Bt }),
        (u || c) && a.blockInitialAnimation && (Mt = !1));
      const O = W && et;
      Mt &&
        (!O || Xt) &&
        E.push(
          ...oe.map((Q) => {
            const st = { type: G };
            if (
              typeof Q == "string" &&
              (u || c) &&
              !O &&
              a.manuallyAnimateOnMount &&
              a.parent
            ) {
              const { parent: ht } = a,
                A = fi(ht, Q);
              if (ht.enteringChildren && A) {
                const { delayChildren: U } = A.transition || {};
                st.delay = my(ht.enteringChildren, a, U);
              }
            }
            return { animation: Q, options: st };
          }),
        );
    }
    if (V.size) {
      const H = {};
      if (typeof v.initial != "boolean") {
        const G = fi(a, Array.isArray(v.initial) ? v.initial[0] : v.initial);
        G && G.transition && (H.transition = G.transition);
      }
      (V.forEach((G) => {
        const B = a.getBaseTarget(G),
          P = a.getValue(G);
        (P && (P.liveStyle = !0), (H[G] = B ?? null));
      }),
        E.push({ animation: H }));
    }
    let X = !!E.length;
    return (
      u &&
        (v.initial === !1 || v.initial === v.animate) &&
        !a.manuallyAnimateOnMount &&
        (X = !1),
      (u = !1),
      (c = !1),
      X ? l(E) : Promise.resolve()
    );
  }
  function g(p, v) {
    if (o[p].isActive === v) return Promise.resolve();
    (a.variantChildren?.forEach((E) => E.animationState?.setActive(p, v)),
      (o[p].isActive = v));
    const b = y(p);
    for (const E in o) o[E].protectedKeys = {};
    return b;
  }
  return {
    animateChanges: y,
    setActive: g,
    setAnimateFunction: d,
    getState: () => o,
    reset: () => {
      ((o = Qp()), (c = !0));
    },
  };
}
function IS(a, l) {
  return typeof l == "string" ? l !== a : Array.isArray(l) ? !Ky(l, a) : !1;
}
function pa(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Qp() {
  return {
    animate: pa(!0),
    whileInView: pa(),
    whileHover: pa(),
    whileTap: pa(),
    whileDrag: pa(),
    whileFocus: pa(),
    exit: pa(),
  };
}
function Zp(a, l) {
  ((a.min = l.min), (a.max = l.max));
}
function Xe(a, l) {
  (Zp(a.x, l.x), Zp(a.y, l.y));
}
function Kp(a, l) {
  ((a.translate = l.translate),
    (a.scale = l.scale),
    (a.originPoint = l.originPoint),
    (a.origin = l.origin));
}
const ky = 1e-4,
  t2 = 1 - ky,
  e2 = 1 + ky,
  Jy = 0.01,
  n2 = 0 - Jy,
  a2 = 0 + Jy;
function se(a) {
  return a.max - a.min;
}
function i2(a, l, o) {
  return Math.abs(a - l) <= o;
}
function kp(a, l, o, u = 0.5) {
  ((a.origin = u),
    (a.originPoint = zt(l.min, l.max, a.origin)),
    (a.scale = se(o) / se(l)),
    (a.translate = zt(o.min, o.max, a.origin) - a.originPoint),
    ((a.scale >= t2 && a.scale <= e2) || isNaN(a.scale)) && (a.scale = 1),
    ((a.translate >= n2 && a.translate <= a2) || isNaN(a.translate)) &&
      (a.translate = 0));
}
function pl(a, l, o, u) {
  (kp(a.x, l.x, o.x, u ? u.originX : void 0),
    kp(a.y, l.y, o.y, u ? u.originY : void 0));
}
function Jp(a, l, o) {
  ((a.min = o.min + l.min), (a.max = a.min + se(l)));
}
function l2(a, l, o) {
  (Jp(a.x, l.x, o.x), Jp(a.y, l.y, o.y));
}
function Pp(a, l, o) {
  ((a.min = l.min - o.min), (a.max = a.min + se(l)));
}
function oo(a, l, o) {
  (Pp(a.x, l.x, o.x), Pp(a.y, l.y, o.y));
}
function Fp(a, l, o, u, c) {
  return (
    (a -= l),
    (a = so(a, 1 / o, u)),
    c !== void 0 && (a = so(a, 1 / c, u)),
    a
  );
}
function s2(a, l = 0, o = 1, u = 0.5, c, h = a, d = a) {
  if (
    (Ie.test(l) &&
      ((l = parseFloat(l)), (l = zt(d.min, d.max, l / 100) - d.min)),
    typeof l != "number")
  )
    return;
  let y = zt(h.min, h.max, u);
  (a === h && (y -= l),
    (a.min = Fp(a.min, l, o, y, c)),
    (a.max = Fp(a.max, l, o, y, c)));
}
function Wp(a, l, [o, u, c], h, d) {
  s2(a, l[o], l[u], l[c], l.scale, h, d);
}
const o2 = ["x", "scaleX", "originX"],
  u2 = ["y", "scaleY", "originY"];
function $p(a, l, o, u) {
  (Wp(a.x, l, o2, o ? o.x : void 0, u ? u.x : void 0),
    Wp(a.y, l, u2, o ? o.y : void 0, u ? u.y : void 0));
}
function Ip(a) {
  return a.translate === 0 && a.scale === 1;
}
function Py(a) {
  return Ip(a.x) && Ip(a.y);
}
function t0(a, l) {
  return a.min === l.min && a.max === l.max;
}
function r2(a, l) {
  return t0(a.x, l.x) && t0(a.y, l.y);
}
function e0(a, l) {
  return (
    Math.round(a.min) === Math.round(l.min) &&
    Math.round(a.max) === Math.round(l.max)
  );
}
function Fy(a, l) {
  return e0(a.x, l.x) && e0(a.y, l.y);
}
function n0(a) {
  return se(a.x) / se(a.y);
}
function a0(a, l) {
  return (
    a.translate === l.translate &&
    a.scale === l.scale &&
    a.originPoint === l.originPoint
  );
}
function $e(a) {
  return [a("x"), a("y")];
}
function c2(a, l, o) {
  let u = "";
  const c = a.x.translate / l.x,
    h = a.y.translate / l.y,
    d = o?.z || 0;
  if (
    ((c || h || d) && (u = `translate3d(${c}px, ${h}px, ${d}px) `),
    (l.x !== 1 || l.y !== 1) && (u += `scale(${1 / l.x}, ${1 / l.y}) `),
    o)
  ) {
    const {
      transformPerspective: p,
      rotate: v,
      rotateX: b,
      rotateY: E,
      skewX: V,
      skewY: w,
    } = o;
    (p && (u = `perspective(${p}px) ${u}`),
      v && (u += `rotate(${v}deg) `),
      b && (u += `rotateX(${b}deg) `),
      E && (u += `rotateY(${E}deg) `),
      V && (u += `skewX(${V}deg) `),
      w && (u += `skewY(${w}deg) `));
  }
  const y = a.x.scale * l.x,
    g = a.y.scale * l.y;
  return ((y !== 1 || g !== 1) && (u += `scale(${y}, ${g})`), u || "none");
}
const Wy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  f2 = Wy.length,
  i0 = (a) => (typeof a == "string" ? parseFloat(a) : a),
  l0 = (a) => typeof a == "number" || K.test(a);
function d2(a, l, o, u, c, h) {
  c
    ? ((a.opacity = zt(0, o.opacity ?? 1, h2(u))),
      (a.opacityExit = zt(l.opacity ?? 1, 0, m2(u))))
    : h && (a.opacity = zt(l.opacity ?? 1, o.opacity ?? 1, u));
  for (let d = 0; d < f2; d++) {
    const y = `border${Wy[d]}Radius`;
    let g = s0(l, y),
      p = s0(o, y);
    if (g === void 0 && p === void 0) continue;
    (g || (g = 0),
      p || (p = 0),
      g === 0 || p === 0 || l0(g) === l0(p)
        ? ((a[y] = Math.max(zt(i0(g), i0(p), u), 0)),
          (Ie.test(p) || Ie.test(g)) && (a[y] += "%"))
        : (a[y] = p));
  }
  (l.rotate || o.rotate) && (a.rotate = zt(l.rotate || 0, o.rotate || 0, u));
}
function s0(a, l) {
  return a[l] !== void 0 ? a[l] : a.borderRadius;
}
const h2 = $y(0, 0.5, G0),
  m2 = $y(0.5, 0.95, Be);
function $y(a, l, o) {
  return (u) => (u < a ? 0 : u > l ? 1 : o(vl(a, l, u)));
}
function p2(a, l, o) {
  const u = ne(a) ? a : di(a);
  return (u.start(Yc("", u, l, o)), u.animation);
}
function Tl(a, l, o, u = { passive: !0 }) {
  return (a.addEventListener(l, o, u), () => a.removeEventListener(l, o));
}
const y2 = (a, l) => a.depth - l.depth;
class g2 {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(l) {
    (Dc(this.children, l), (this.isDirty = !0));
  }
  remove(l) {
    (eo(this.children, l), (this.isDirty = !0));
  }
  forEach(l) {
    (this.isDirty && this.children.sort(y2),
      (this.isDirty = !1),
      this.children.forEach(l));
  }
}
function v2(a, l) {
  const o = le.now(),
    u = ({ timestamp: c }) => {
      const h = c - o;
      h >= l && (Jn(u), a(h - l));
    };
  return (Dt.setup(u, !0), () => Jn(u));
}
function Is(a) {
  return ne(a) ? a.get() : a;
}
class x2 {
  constructor() {
    this.members = [];
  }
  add(l) {
    Dc(this.members, l);
    for (let o = this.members.length - 1; o >= 0; o--) {
      const u = this.members[o];
      if (u === l || u === this.lead || u === this.prevLead) continue;
      const c = u.instance;
      (!c || c.isConnected === !1) &&
        !u.snapshot &&
        (eo(this.members, u), u.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (
      (eo(this.members, l),
      l === this.prevLead && (this.prevLead = void 0),
      l === this.lead)
    ) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(l) {
    for (let o = this.members.indexOf(l) - 1; o >= 0; o--) {
      const u = this.members[o];
      if (u.isPresent !== !1 && u.instance?.isConnected !== !1)
        return (this.promote(u), !0);
    }
    return !1;
  }
  promote(l, o) {
    const u = this.lead;
    if (l !== u && ((this.prevLead = u), (this.lead = l), l.show(), u)) {
      (u.updateSnapshot(), l.scheduleRender());
      const { layoutDependency: c } = u.options,
        { layoutDependency: h } = l.options;
      ((c === void 0 || c !== h) &&
        ((l.resumeFrom = u),
        o && (u.preserveOpacity = !0),
        u.snapshot &&
          ((l.snapshot = u.snapshot),
          (l.snapshot.latestValues = u.animationValues || u.latestValues)),
        l.root?.isUpdating && (l.isLayoutDirty = !0)),
        l.options.crossfade === !1 && u.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      (l.options.onExitComplete?.(),
        l.resumingFrom?.options.onExitComplete?.());
    });
  }
  scheduleRender() {
    this.members.forEach((l) => l.instance && l.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const to = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Kr = ["", "X", "Y", "Z"],
  b2 = 1e3;
let S2 = 0;
function kr(a, l, o, u) {
  const { latestValues: c } = l;
  c[a] && ((o[a] = c[a]), l.setStaticValue(a, 0), u && (u[a] = 0));
}
function Iy(a) {
  if (((a.hasCheckedOptimisedAppear = !0), a.root === a)) return;
  const { visualElement: l } = a.options;
  if (!l) return;
  const o = xy(l);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: c, layoutId: h } = a.options;
    window.MotionCancelOptimisedAnimation(o, "transform", Dt, !(c || h));
  }
  const { parent: u } = a;
  u && !u.hasCheckedOptimisedAppear && Iy(u);
}
function tg({
  attachResizeListener: a,
  defaultParent: l,
  measureScroll: o,
  checkIsScrollRoot: u,
  resetTransform: c,
}) {
  return class {
    constructor(d = {}, y = l?.()) {
      ((this.id = S2++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(E2),
            this.nodes.forEach(j2),
            this.nodes.forEach(C2),
            this.nodes.forEach(M2));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = d),
        (this.root = y ? y.root || y : this),
        (this.path = y ? [...y.path, y] : []),
        (this.parent = y),
        (this.depth = y ? y.depth + 1 : 0));
      for (let g = 0; g < this.path.length; g++)
        this.path[g].shouldResetTransform = !0;
      this.root === this && (this.nodes = new g2());
    }
    addEventListener(d, y) {
      return (
        this.eventHandlers.has(d) || this.eventHandlers.set(d, new jc()),
        this.eventHandlers.get(d).add(y)
      );
    }
    notifyListeners(d, ...y) {
      const g = this.eventHandlers.get(d);
      g && g.notify(...y);
    }
    hasListeners(d) {
      return this.eventHandlers.has(d);
    }
    mount(d) {
      if (this.instance) return;
      ((this.isSVG = kc(d) && !AS(d)), (this.instance = d));
      const { layoutId: y, layout: g, visualElement: p } = this.options;
      if (
        (p && !p.current && p.mount(d),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (g || y) && (this.isLayoutDirty = !0),
        a)
      ) {
        let v,
          b = 0;
        const E = () => (this.root.updateBlockedByResize = !1);
        (Dt.read(() => {
          b = window.innerWidth;
        }),
          a(d, () => {
            const V = window.innerWidth;
            V !== b &&
              ((b = V),
              (this.root.updateBlockedByResize = !0),
              v && v(),
              (v = v2(E, 250)),
              to.hasAnimatedSinceResize &&
                ((to.hasAnimatedSinceResize = !1), this.nodes.forEach(r0)));
          }));
      }
      (y && this.root.registerSharedNode(y, this),
        this.options.animate !== !1 &&
          p &&
          (y || g) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: v,
              hasLayoutChanged: b,
              hasRelativeLayoutChanged: E,
              layout: V,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const w =
                  this.options.transition || p.getDefaultTransition() || w2,
                { onLayoutAnimationStart: L, onLayoutAnimationComplete: X } =
                  p.getProps(),
                H = !this.targetLayout || !Fy(this.targetLayout, V),
                G = !b && E;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                G ||
                (b && (H || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const B = { ...qc(w, "layout"), onPlay: L, onComplete: X };
                ((p.shouldReduceMotion || this.options.layoutRoot) &&
                  ((B.delay = 0), (B.type = !1)),
                  this.startAnimation(B),
                  this.setAnimationOrigin(v, G));
              } else
                (b || r0(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = V;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const d = this.getStack();
      (d && d.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Jn(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(z2),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: d } = this.options;
      return d && d.getProps().transformTemplate;
    }
    willUpdate(d = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Iy(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const b = this.path[v];
        ((b.shouldResetTransform = !0),
          b.updateScroll("snapshot"),
          b.options.layoutRoot && b.willUpdate(!1));
      }
      const { layoutId: y, layout: g } = this.options;
      if (y === void 0 && !g) return;
      const p = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = p
        ? p(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        d && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(o0));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(u0);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(N2),
            this.nodes.forEach(T2),
            this.nodes.forEach(A2))
          : this.nodes.forEach(u0),
        this.clearAllSnapshots());
      const y = le.now();
      ((te.delta = tn(0, 1e3 / 60, y - te.timestamp)),
        (te.timestamp = y),
        (te.isProcessing = !0),
        Lr.update.process(te),
        Lr.preRender.process(te),
        Lr.render.process(te),
        (te.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Zc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(D2), this.sharedNodes.forEach(O2));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Dt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Dt.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !se(this.snapshot.measuredBox.x) &&
          !se(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let g = 0; g < this.path.length; g++) this.path[g].updateScroll();
      const d = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected = Zt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: y } = this.options;
      y &&
        y.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          d ? d.layoutBox : void 0,
        );
    }
    updateScroll(d = "measure") {
      let y = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === d &&
          (y = !1),
        y && this.instance)
      ) {
        const g = u(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: d,
          isRoot: g,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : g,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const d =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        y = this.projectionDelta && !Py(this.projectionDelta),
        g = this.getTransformTemplate(),
        p = g ? g(this.latestValues, "") : void 0,
        v = p !== this.prevTransformTemplateValue;
      d &&
        this.instance &&
        (y || ya(this.latestValues) || v) &&
        (c(this.instance, p),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(d = !0) {
      const y = this.measurePageBox();
      let g = this.removeElementScroll(y);
      return (
        d && (g = this.removeTransform(g)),
        _2(g),
        {
          animationId: this.root.animationId,
          measuredBox: y,
          layoutBox: g,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: d } = this.options;
      if (!d) return Zt();
      const y = d.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(U2))) {
        const { scroll: p } = this.root;
        p && (ri(y.x, p.offset.x), ri(y.y, p.offset.y));
      }
      return y;
    }
    removeElementScroll(d) {
      const y = Zt();
      if ((Xe(y, d), this.scroll?.wasRoot)) return y;
      for (let g = 0; g < this.path.length; g++) {
        const p = this.path[g],
          { scroll: v, options: b } = p;
        p !== this.root &&
          v &&
          b.layoutScroll &&
          (v.wasRoot && Xe(y, d), ri(y.x, v.offset.x), ri(y.y, v.offset.y));
      }
      return y;
    }
    applyTransform(d, y = !1) {
      const g = Zt();
      Xe(g, d);
      for (let p = 0; p < this.path.length; p++) {
        const v = this.path[p];
        (!y &&
          v.options.layoutScroll &&
          v.scroll &&
          v !== v.root &&
          ci(g, { x: -v.scroll.offset.x, y: -v.scroll.offset.y }),
          ya(v.latestValues) && ci(g, v.latestValues));
      }
      return (ya(this.latestValues) && ci(g, this.latestValues), g);
    }
    removeTransform(d) {
      const y = Zt();
      Xe(y, d);
      for (let g = 0; g < this.path.length; g++) {
        const p = this.path[g];
        if (!p.instance || !ya(p.latestValues)) continue;
        xc(p.latestValues) && p.updateSnapshot();
        const v = Zt(),
          b = p.measurePageBox();
        (Xe(v, b),
          $p(y, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, v));
      }
      return (ya(this.latestValues) && $p(y, this.latestValues), y);
    }
    setTargetDelta(d) {
      ((this.targetDelta = d),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(d) {
      this.options = {
        ...this.options,
        ...d,
        crossfade: d.crossfade !== void 0 ? d.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== te.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(d = !1) {
      const y = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = y.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = y.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = y.isSharedProjectionDirty));
      const g = !!this.resumingFrom || this !== y;
      if (
        !(
          d ||
          (g && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: v, layoutId: b } = this.options;
      if (!this.layout || !(v || b)) return;
      this.resolvedRelativeTargetAt = te.timestamp;
      const E = this.getClosestProjectingParent();
      (E &&
        this.linkedParentVersion !== E.layoutVersion &&
        !E.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (E && E.layout
            ? this.createRelativeTarget(
                E,
                this.layout.layoutBox,
                E.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Zt()), (this.targetWithTransforms = Zt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              l2(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Xe(this.target, this.layout.layoutBox),
                By(this.target, this.targetDelta))
              : Xe(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            E &&
            !!E.resumingFrom == !!this.resumingFrom &&
            !E.options.layoutScroll &&
            E.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(E, this.target, E.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          xc(this.parent.latestValues) ||
          Uy(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(d, y, g) {
      ((this.relativeParent = d),
        (this.linkedParentVersion = d.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Zt()),
        (this.relativeTargetOrigin = Zt()),
        oo(this.relativeTargetOrigin, y, g),
        Xe(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const d = this.getLead(),
        y = !!this.resumingFrom || this !== d;
      let g = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (g = !1),
        y &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (g = !1),
        this.resolvedRelativeTargetAt === te.timestamp && (g = !1),
        g)
      )
        return;
      const { layout: p, layoutId: v } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(p || v))
      )
        return;
      Xe(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x,
        E = this.treeScale.y;
      (wS(this.layoutCorrected, this.treeScale, this.path, y),
        d.layout &&
          !d.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((d.target = d.layout.layoutBox), (d.targetWithTransforms = Zt())));
      const { target: V } = d;
      if (!V) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Kp(this.prevProjectionDelta.x, this.projectionDelta.x),
          Kp(this.prevProjectionDelta.y, this.projectionDelta.y)),
        pl(this.projectionDelta, this.layoutCorrected, V, this.latestValues),
        (this.treeScale.x !== b ||
          this.treeScale.y !== E ||
          !a0(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !a0(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", V)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(d = !0) {
      if ((this.options.visualElement?.scheduleRender(), d)) {
        const y = this.getStack();
        y && y.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = ui()),
        (this.projectionDelta = ui()),
        (this.projectionDeltaWithTransform = ui()));
    }
    setAnimationOrigin(d, y = !1) {
      const g = this.snapshot,
        p = g ? g.latestValues : {},
        v = { ...this.latestValues },
        b = ui();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !y));
      const E = Zt(),
        V = g ? g.source : void 0,
        w = this.layout ? this.layout.source : void 0,
        L = V !== w,
        X = this.getStack(),
        H = !X || X.members.length <= 1,
        G = !!(L && !H && this.options.crossfade === !0 && !this.path.some(R2));
      this.animationProgress = 0;
      let B;
      ((this.mixTargetDelta = (P) => {
        const F = P / 1e3;
        (c0(b.x, d.x, F),
          c0(b.y, d.y, F),
          this.setTargetDelta(b),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (oo(E, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            V2(this.relativeTarget, this.relativeTargetOrigin, E, F),
            B && r2(this.relativeTarget, B) && (this.isProjectionDirty = !1),
            B || (B = Zt()),
            Xe(B, this.relativeTarget)),
          L &&
            ((this.animationValues = v), d2(v, p, this.latestValues, F, G, H)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = F));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(d) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation &&
          (Jn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Dt.update(() => {
          ((to.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = di(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = p2(this.motionValue, [0, 1e3], {
              ...d,
              velocity: 0,
              isSync: !0,
              onUpdate: (y) => {
                (this.mixTargetDelta(y), d.onUpdate && d.onUpdate(y));
              },
              onStop: () => {},
              onComplete: () => {
                (d.onComplete && d.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const d = this.getStack();
      (d && d.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(b2),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const d = this.getLead();
      let {
        targetWithTransforms: y,
        target: g,
        layout: p,
        latestValues: v,
      } = d;
      if (!(!y || !g || !p)) {
        if (
          this !== d &&
          this.layout &&
          p &&
          eg(this.options.animationType, this.layout.layoutBox, p.layoutBox)
        ) {
          g = this.target || Zt();
          const b = se(this.layout.layoutBox.x);
          ((g.x.min = d.target.x.min), (g.x.max = g.x.min + b));
          const E = se(this.layout.layoutBox.y);
          ((g.y.min = d.target.y.min), (g.y.max = g.y.min + E));
        }
        (Xe(y, g),
          ci(y, v),
          pl(this.projectionDeltaWithTransform, this.layoutCorrected, y, v));
      }
    }
    registerSharedNode(d, y) {
      (this.sharedNodes.has(d) || this.sharedNodes.set(d, new x2()),
        this.sharedNodes.get(d).add(y));
      const p = y.options.initialPromotionConfig;
      y.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity:
          p && p.shouldPreserveFollowOpacity
            ? p.shouldPreserveFollowOpacity(y)
            : void 0,
      });
    }
    isLead() {
      const d = this.getStack();
      return d ? d.lead === this : !0;
    }
    getLead() {
      const { layoutId: d } = this.options;
      return d ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: d } = this.options;
      return d ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: d } = this.options;
      if (d) return this.root.sharedNodes.get(d);
    }
    promote({ needsReset: d, transition: y, preserveFollowOpacity: g } = {}) {
      const p = this.getStack();
      (p && p.promote(this, g),
        d && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        y && this.setOptions({ transition: y }));
    }
    relegate() {
      const d = this.getStack();
      return d ? d.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: d } = this.options;
      if (!d) return;
      let y = !1;
      const { latestValues: g } = d;
      if (
        ((g.z ||
          g.rotate ||
          g.rotateX ||
          g.rotateY ||
          g.rotateZ ||
          g.skewX ||
          g.skewY) &&
          (y = !0),
        !y)
      )
        return;
      const p = {};
      g.z && kr("z", d, p, this.animationValues);
      for (let v = 0; v < Kr.length; v++)
        (kr(`rotate${Kr[v]}`, d, p, this.animationValues),
          kr(`skew${Kr[v]}`, d, p, this.animationValues));
      d.render();
      for (const v in p)
        (d.setStaticValue(v, p[v]),
          this.animationValues && (this.animationValues[v] = p[v]));
      d.scheduleRender();
    }
    applyProjectionStyles(d, y) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        d.visibility = "hidden";
        return;
      }
      const g = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (d.visibility = ""),
          (d.opacity = ""),
          (d.pointerEvents = Is(y?.pointerEvents) || ""),
          (d.transform = g ? g(this.latestValues, "") : "none"));
        return;
      }
      const p = this.getLead();
      if (!this.projectionDelta || !this.layout || !p.target) {
        (this.options.layoutId &&
          ((d.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (d.pointerEvents = Is(y?.pointerEvents) || "")),
          this.hasProjected &&
            !ya(this.latestValues) &&
            ((d.transform = g ? g({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      d.visibility = "";
      const v = p.animationValues || p.latestValues;
      this.applyTransformsToTarget();
      let b = c2(this.projectionDeltaWithTransform, this.treeScale, v);
      (g && (b = g(v, b)), (d.transform = b));
      const { x: E, y: V } = this.projectionDelta;
      ((d.transformOrigin = `${E.origin * 100}% ${V.origin * 100}% 0`),
        p.animationValues
          ? (d.opacity =
              p === this
                ? (v.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : v.opacityExit)
          : (d.opacity =
              p === this
                ? v.opacity !== void 0
                  ? v.opacity
                  : ""
                : v.opacityExit !== void 0
                  ? v.opacityExit
                  : 0));
      for (const w in Sc) {
        if (v[w] === void 0) continue;
        const { correct: L, applyTo: X, isCSSVariable: H } = Sc[w],
          G = b === "none" ? v[w] : L(v[w], p);
        if (X) {
          const B = X.length;
          for (let P = 0; P < B; P++) d[X[P]] = G;
        } else
          H ? (this.options.visualElement.renderState.vars[w] = G) : (d[w] = G);
      }
      this.options.layoutId &&
        (d.pointerEvents = p === this ? Is(y?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((d) => d.currentAnimation?.stop()),
        this.root.nodes.forEach(o0),
        this.root.sharedNodes.clear());
    }
  };
}
function T2(a) {
  a.updateLayout();
}
function A2(a) {
  const l = a.resumeFrom?.snapshot || a.snapshot;
  if (a.isLead() && a.layout && l && a.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: u } = a.layout,
      { animationType: c } = a.options,
      h = l.source !== a.layout.source;
    c === "size"
      ? $e((v) => {
          const b = h ? l.measuredBox[v] : l.layoutBox[v],
            E = se(b);
          ((b.min = o[v].min), (b.max = b.min + E));
        })
      : eg(c, l.layoutBox, o) &&
        $e((v) => {
          const b = h ? l.measuredBox[v] : l.layoutBox[v],
            E = se(o[v]);
          ((b.max = b.min + E),
            a.relativeTarget &&
              !a.currentAnimation &&
              ((a.isProjectionDirty = !0),
              (a.relativeTarget[v].max = a.relativeTarget[v].min + E)));
        });
    const d = ui();
    pl(d, o, l.layoutBox);
    const y = ui();
    h ? pl(y, a.applyTransform(u, !0), l.measuredBox) : pl(y, o, l.layoutBox);
    const g = !Py(d);
    let p = !1;
    if (!a.resumeFrom) {
      const v = a.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: b, layout: E } = v;
        if (b && E) {
          const V = Zt();
          oo(V, l.layoutBox, b.layoutBox);
          const w = Zt();
          (oo(w, o, E.layoutBox),
            Fy(V, w) || (p = !0),
            v.options.layoutRoot &&
              ((a.relativeTarget = w),
              (a.relativeTargetOrigin = V),
              (a.relativeParent = v)));
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: o,
      snapshot: l,
      delta: y,
      layoutDelta: d,
      hasLayoutChanged: g,
      hasRelativeLayoutChanged: p,
    });
  } else if (a.isLead()) {
    const { onExitComplete: o } = a.options;
    o && o();
  }
  a.options.transition = void 0;
}
function E2(a) {
  a.parent &&
    (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty),
    a.isSharedProjectionDirty ||
      (a.isSharedProjectionDirty = !!(
        a.isProjectionDirty ||
        a.parent.isProjectionDirty ||
        a.parent.isSharedProjectionDirty
      )),
    a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function M2(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function D2(a) {
  a.clearSnapshot();
}
function o0(a) {
  a.clearMeasurements();
}
function u0(a) {
  a.isLayoutDirty = !1;
}
function N2(a) {
  const { visualElement: l } = a.options;
  (l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    a.resetTransform());
}
function r0(a) {
  (a.finishAnimation(),
    (a.targetDelta = a.relativeTarget = a.target = void 0),
    (a.isProjectionDirty = !0));
}
function j2(a) {
  a.resolveTargetDelta();
}
function C2(a) {
  a.calcProjection();
}
function z2(a) {
  a.resetSkewAndRotation();
}
function O2(a) {
  a.removeLeadSnapshot();
}
function c0(a, l, o) {
  ((a.translate = zt(l.translate, 0, o)),
    (a.scale = zt(l.scale, 1, o)),
    (a.origin = l.origin),
    (a.originPoint = l.originPoint));
}
function f0(a, l, o, u) {
  ((a.min = zt(l.min, o.min, u)), (a.max = zt(l.max, o.max, u)));
}
function V2(a, l, o, u) {
  (f0(a.x, l.x, o.x, u), f0(a.y, l.y, o.y, u));
}
function R2(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const w2 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  d0 = (a) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(a),
  h0 = d0("applewebkit/") && !d0("chrome/") ? Math.round : Be;
function m0(a) {
  ((a.min = h0(a.min)), (a.max = h0(a.max)));
}
function _2(a) {
  (m0(a.x), m0(a.y));
}
function eg(a, l, o) {
  return (
    a === "position" || (a === "preserve-aspect" && !i2(n0(l), n0(o), 0.2))
  );
}
function U2(a) {
  return a !== a.root && a.scroll?.wasRoot;
}
const B2 = tg({
    attachResizeListener: (a, l) => Tl(a, "resize", l),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Jr = { current: void 0 },
  ng = tg({
    measureScroll: (a) => ({ x: a.scrollLeft, y: a.scrollTop }),
    defaultParent: () => {
      if (!Jr.current) {
        const a = new B2({});
        (a.mount(window), a.setOptions({ layoutScroll: !0 }), (Jr.current = a));
      }
      return Jr.current;
    },
    resetTransform: (a, l) => {
      a.style.transform = l !== void 0 ? l : "none";
    },
    checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed",
  }),
  ag = I.createContext({
    transformPagePoint: (a) => a,
    isStatic: !1,
    reducedMotion: "never",
  });
function L2(a = !0) {
  const l = I.useContext(Mc);
  if (l === null) return [!0, null];
  const { isPresent: o, onExitComplete: u, register: c } = l,
    h = I.useId();
  I.useEffect(() => {
    if (a) return c(h);
  }, [a]);
  const d = I.useCallback(() => a && u && u(h), [h, u, a]);
  return !o && u ? [!1, d] : [!0];
}
const ig = I.createContext({ strict: !1 }),
  p0 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let y0 = !1;
function H2() {
  if (y0) return;
  const a = {};
  for (const l in p0) a[l] = { isEnabled: (o) => p0[l].some((u) => !!o[u]) };
  (Ry(a), (y0 = !0));
}
function lg() {
  return (H2(), zS());
}
function q2(a) {
  const l = lg();
  for (const o in a) l[o] = { ...l[o], ...a[o] };
  Ry(l);
}
const Y2 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function uo(a) {
  return (
    a.startsWith("while") ||
    (a.startsWith("drag") && a !== "draggable") ||
    a.startsWith("layout") ||
    a.startsWith("onTap") ||
    a.startsWith("onPan") ||
    a.startsWith("onLayout") ||
    Y2.has(a)
  );
}
let sg = (a) => !uo(a);
function G2(a) {
  typeof a == "function" && (sg = (l) => (l.startsWith("on") ? !uo(l) : a(l)));
}
try {
  G2(require("@emotion/is-prop-valid").default);
} catch {}
function X2(a, l, o) {
  const u = {};
  for (const c in a)
    (c === "values" && typeof a.values == "object") ||
      ((sg(c) ||
        (o === !0 && uo(c)) ||
        (!l && !uo(c)) ||
        (a.draggable && c.startsWith("onDrag"))) &&
        (u[c] = a[c]));
  return u;
}
const fo = I.createContext({});
function Q2(a, l) {
  if (co(a)) {
    const { initial: o, animate: u } = a;
    return {
      initial: o === !1 || Sl(o) ? o : void 0,
      animate: Sl(u) ? u : void 0,
    };
  }
  return a.inherit !== !1 ? l : {};
}
function Z2(a) {
  const { initial: l, animate: o } = Q2(a, I.useContext(fo));
  return I.useMemo(() => ({ initial: l, animate: o }), [g0(l), g0(o)]);
}
function g0(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const $c = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function og(a, l, o) {
  for (const u in l) !ne(l[u]) && !qy(u, o) && (a[u] = l[u]);
}
function K2({ transformTemplate: a }, l) {
  return I.useMemo(() => {
    const o = $c();
    return (Fc(o, l, a), Object.assign({}, o.vars, o.style));
  }, [l]);
}
function k2(a, l) {
  const o = a.style || {},
    u = {};
  return (og(u, o, a), Object.assign(u, K2(a, l)), u);
}
function J2(a, l) {
  const o = {},
    u = k2(a, l);
  return (
    a.drag &&
      a.dragListener !== !1 &&
      ((o.draggable = !1),
      (u.userSelect = u.WebkitUserSelect = u.WebkitTouchCallout = "none"),
      (u.touchAction =
        a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`)),
    a.tabIndex === void 0 &&
      (a.onTap || a.onTapStart || a.whileTap) &&
      (o.tabIndex = 0),
    (o.style = u),
    o
  );
}
const ug = () => ({ ...$c(), attrs: {} });
function P2(a, l, o, u) {
  const c = I.useMemo(() => {
    const h = ug();
    return (
      Yy(h, l, Xy(u), a.transformTemplate, a.style),
      { ...h.attrs, style: { ...h.style } }
    );
  }, [l]);
  if (a.style) {
    const h = {};
    (og(h, a.style, a), (c.style = { ...h, ...c.style }));
  }
  return c;
}
const F2 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Ic(a) {
  return typeof a != "string" || a.includes("-")
    ? !1
    : !!(F2.indexOf(a) > -1 || /[A-Z]/u.test(a));
}
function W2(a, l, o, { latestValues: u }, c, h = !1, d) {
  const g = ((d ?? Ic(a)) ? P2 : J2)(l, u, c, a),
    p = X2(l, typeof a == "string", h),
    v = a !== I.Fragment ? { ...p, ...g, ref: o } : {},
    { children: b } = l,
    E = I.useMemo(() => (ne(b) ? b.get() : b), [b]);
  return I.createElement(a, { ...v, children: E });
}
function $2({ scrapeMotionValuesFromProps: a, createRenderState: l }, o, u, c) {
  return { latestValues: I2(o, u, c, a), renderState: l() };
}
function I2(a, l, o, u) {
  const c = {},
    h = u(a, {});
  for (const E in h) c[E] = Is(h[E]);
  let { initial: d, animate: y } = a;
  const g = co(a),
    p = Oy(a);
  l &&
    p &&
    !g &&
    a.inherit !== !1 &&
    (d === void 0 && (d = l.initial), y === void 0 && (y = l.animate));
  let v = o ? o.initial === !1 : !1;
  v = v || d === !1;
  const b = v ? y : d;
  if (b && typeof b != "boolean" && !ro(b)) {
    const E = Array.isArray(b) ? b : [b];
    for (let V = 0; V < E.length; V++) {
      const w = Gc(a, E[V]);
      if (w) {
        const { transitionEnd: L, transition: X, ...H } = w;
        for (const G in H) {
          let B = H[G];
          if (Array.isArray(B)) {
            const P = v ? B.length - 1 : 0;
            B = B[P];
          }
          B !== null && (c[G] = B);
        }
        for (const G in L) c[G] = L[G];
      }
    }
  }
  return c;
}
const rg = (a) => (l, o) => {
    const u = I.useContext(fo),
      c = I.useContext(Mc),
      h = () => $2(a, l, u, c);
    return o ? h() : ex(h);
  },
  tT = rg({ scrapeMotionValuesFromProps: Wc, createRenderState: $c }),
  eT = rg({ scrapeMotionValuesFromProps: Qy, createRenderState: ug }),
  nT = Symbol.for("motionComponentSymbol");
function aT(a, l, o) {
  const u = I.useRef(o);
  I.useInsertionEffect(() => {
    u.current = o;
  });
  const c = I.useRef(null);
  return I.useCallback(
    (h) => {
      h && a.onMount?.(h);
      const d = u.current;
      if (typeof d == "function")
        if (h) {
          const y = d(h);
          typeof y == "function" && (c.current = y);
        } else c.current ? (c.current(), (c.current = null)) : d(h);
      else d && (d.current = h);
      l && (h ? l.mount(h) : l.unmount());
    },
    [l],
  );
}
const cg = I.createContext({});
function li(a) {
  return (
    a &&
    typeof a == "object" &&
    Object.prototype.hasOwnProperty.call(a, "current")
  );
}
function iT(a, l, o, u, c, h) {
  const { visualElement: d } = I.useContext(fo),
    y = I.useContext(ig),
    g = I.useContext(Mc),
    p = I.useContext(ag),
    v = p.reducedMotion,
    b = p.skipAnimations,
    E = I.useRef(null),
    V = I.useRef(!1);
  ((u = u || y.renderer),
    !E.current &&
      u &&
      ((E.current = u(a, {
        visualState: l,
        parent: d,
        props: o,
        presenceContext: g,
        blockInitialAnimation: g ? g.initial === !1 : !1,
        reducedMotionConfig: v,
        skipAnimations: b,
        isSVG: h,
      })),
      V.current && E.current && (E.current.manuallyAnimateOnMount = !0)));
  const w = E.current,
    L = I.useContext(cg);
  w &&
    !w.projection &&
    c &&
    (w.type === "html" || w.type === "svg") &&
    lT(E.current, o, c, L);
  const X = I.useRef(!1);
  I.useInsertionEffect(() => {
    w && X.current && w.update(o, g);
  });
  const H = o[vy],
    G = I.useRef(
      !!H &&
        typeof window < "u" &&
        !window.MotionHandoffIsComplete?.(H) &&
        window.MotionHasOptimisedAnimation?.(H),
    );
  return (
    ax(() => {
      ((V.current = !0),
        w &&
          ((X.current = !0),
          (window.MotionIsMounted = !0),
          w.updateFeatures(),
          w.scheduleRenderMicrotask(),
          G.current && w.animationState && w.animationState.animateChanges()));
    }),
    I.useEffect(() => {
      w &&
        (!G.current && w.animationState && w.animationState.animateChanges(),
        G.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(H);
          }),
          (G.current = !1)),
        (w.enteringChildren = void 0));
    }),
    w
  );
}
function lT(a, l, o, u) {
  const {
    layoutId: c,
    layout: h,
    drag: d,
    dragConstraints: y,
    layoutScroll: g,
    layoutRoot: p,
    layoutCrossfade: v,
  } = l;
  ((a.projection = new o(
    a.latestValues,
    l["data-framer-portal-id"] ? void 0 : fg(a.parent),
  )),
    a.projection.setOptions({
      layoutId: c,
      layout: h,
      alwaysMeasureLayout: !!d || (y && li(y)),
      visualElement: a,
      animationType: typeof h == "string" ? h : "both",
      initialPromotionConfig: u,
      crossfade: v,
      layoutScroll: g,
      layoutRoot: p,
    }));
}
function fg(a) {
  if (a) return a.options.allowProjection !== !1 ? a.projection : fg(a.parent);
}
function Pr(a, { forwardMotionProps: l = !1, type: o } = {}, u, c) {
  u && q2(u);
  const h = o ? o === "svg" : Ic(a),
    d = h ? eT : tT;
  function y(p, v) {
    let b;
    const E = { ...I.useContext(ag), ...p, layoutId: sT(p) },
      { isStatic: V } = E,
      w = Z2(p),
      L = d(p, V);
    if (!V && typeof window < "u") {
      oT();
      const X = uT(E);
      ((b = X.MeasureLayout),
        (w.visualElement = iT(a, L, E, c, X.ProjectionNode, h)));
    }
    return x.jsxs(fo.Provider, {
      value: w,
      children: [
        b && w.visualElement
          ? x.jsx(b, { visualElement: w.visualElement, ...E })
          : null,
        W2(a, p, aT(L, w.visualElement, v), L, V, l, h),
      ],
    });
  }
  y.displayName = `motion.${typeof a == "string" ? a : `create(${a.displayName ?? a.name ?? ""})`}`;
  const g = I.forwardRef(y);
  return ((g[nT] = a), g);
}
function sT({ layoutId: a }) {
  const l = I.useContext(z0).id;
  return l && a !== void 0 ? l + "-" + a : a;
}
function oT(a, l) {
  I.useContext(ig).strict;
}
function uT(a) {
  const l = lg(),
    { drag: o, layout: u } = l;
  if (!o && !u) return {};
  const c = { ...o, ...u };
  return {
    MeasureLayout:
      o?.isEnabled(a) || u?.isEnabled(a) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode,
  };
}
function rT(a, l) {
  if (typeof Proxy > "u") return Pr;
  const o = new Map(),
    u = (h, d) => Pr(h, d, a, l),
    c = (h, d) => u(h, d);
  return new Proxy(c, {
    get: (h, d) =>
      d === "create"
        ? u
        : (o.has(d) || o.set(d, Pr(d, void 0, a, l)), o.get(d)),
  });
}
const cT = (a, l) =>
  (l.isSVG ?? Ic(a))
    ? new kS(l)
    : new YS(l, { allowProjection: a !== I.Fragment });
class fT extends Pn {
  constructor(l) {
    (super(l), l.animationState || (l.animationState = $S(l)));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    ro(l) && (this.unmountControls = l.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(),
      { animate: o } = this.node.prevProps || {};
    l !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    (this.node.animationState.reset(), this.unmountControls?.());
  }
}
let dT = 0;
class hT extends Pn {
  constructor() {
    (super(...arguments), (this.id = dT++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: l, onExitComplete: o } = this.node.presenceContext,
      { isPresent: u } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === u) return;
    const c = this.node.animationState.setActive("exit", !l);
    o &&
      !l &&
      c.then(() => {
        o(this.id);
      });
  }
  mount() {
    const { register: l, onExitComplete: o } = this.node.presenceContext || {};
    (o && o(this.id), l && (this.unmount = l(this.id)));
  }
  unmount() {}
}
const mT = { animation: { Feature: fT }, exit: { Feature: hT } };
function Dl(a) {
  return { point: { x: a.pageX, y: a.pageY } };
}
const pT = (a) => (l) => Kc(l) && a(l, Dl(l));
function yl(a, l, o, u) {
  return Tl(a, l, pT(o), u);
}
const dg = ({ current: a }) => (a ? a.ownerDocument.defaultView : null),
  v0 = (a, l) => Math.abs(a - l);
function yT(a, l) {
  const o = v0(a.x, l.x),
    u = v0(a.y, l.y);
  return Math.sqrt(o ** 2 + u ** 2);
}
const x0 = new Set(["auto", "scroll"]);
class hg {
  constructor(
    l,
    o,
    {
      transformPagePoint: u,
      contextWindow: c = window,
      dragSnapToOrigin: h = !1,
      distanceThreshold: d = 3,
      element: y,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (V) => {
        this.handleScroll(V.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const V = Wr(this.lastMoveEventInfo, this.history),
          w = this.startEvent !== null,
          L = yT(V.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!w && !L) return;
        const { point: X } = V,
          { timestamp: H } = te;
        this.history.push({ ...X, timestamp: H });
        const { onStart: G, onMove: B } = this.handlers;
        (w ||
          (G && G(this.lastMoveEvent, V),
          (this.startEvent = this.lastMoveEvent)),
          B && B(this.lastMoveEvent, V));
      }),
      (this.handlePointerMove = (V, w) => {
        ((this.lastMoveEvent = V),
          (this.lastMoveEventInfo = Fr(w, this.transformPagePoint)),
          Dt.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (V, w) => {
        this.end();
        const { onEnd: L, onSessionEnd: X, resumeAnimation: H } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && H && H(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const G = Wr(
          V.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Fr(w, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && L && L(V, G), X && X(V, G));
      }),
      !Kc(l))
    )
      return;
    ((this.dragSnapToOrigin = h),
      (this.handlers = o),
      (this.transformPagePoint = u),
      (this.distanceThreshold = d),
      (this.contextWindow = c || window));
    const g = Dl(l),
      p = Fr(g, this.transformPagePoint),
      { point: v } = p,
      { timestamp: b } = te;
    this.history = [{ ...v, timestamp: b }];
    const { onSessionStart: E } = o;
    (E && E(l, Wr(p, this.history)),
      (this.removeListeners = Al(
        yl(this.contextWindow, "pointermove", this.handlePointerMove),
        yl(this.contextWindow, "pointerup", this.handlePointerUp),
        yl(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      y && this.startScrollTracking(y));
  }
  startScrollTracking(l) {
    let o = l.parentElement;
    for (; o; ) {
      const u = getComputedStyle(o);
      ((x0.has(u.overflowX) || x0.has(u.overflowY)) &&
        this.scrollPositions.set(o, { x: o.scrollLeft, y: o.scrollTop }),
        (o = o.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(l) {
    const o = this.scrollPositions.get(l);
    if (!o) return;
    const u = l === window,
      c = u
        ? { x: window.scrollX, y: window.scrollY }
        : { x: l.scrollLeft, y: l.scrollTop },
      h = { x: c.x - o.x, y: c.y - o.y };
    (h.x === 0 && h.y === 0) ||
      (u
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += h.x),
          (this.lastMoveEventInfo.point.y += h.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= h.x), (this.history[0].y -= h.y)),
      this.scrollPositions.set(l, c),
      Dt.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      Jn(this.updatePoint));
  }
}
function Fr(a, l) {
  return l ? { point: l(a.point) } : a;
}
function b0(a, l) {
  return { x: a.x - l.x, y: a.y - l.y };
}
function Wr({ point: a }, l) {
  return {
    point: a,
    delta: b0(a, mg(l)),
    offset: b0(a, gT(l)),
    velocity: vT(l, 0.1),
  };
}
function gT(a) {
  return a[0];
}
function mg(a) {
  return a[a.length - 1];
}
function vT(a, l) {
  if (a.length < 2) return { x: 0, y: 0 };
  let o = a.length - 1,
    u = null;
  const c = mg(a);
  for (; o >= 0 && ((u = a[o]), !(c.timestamp - u.timestamp > Ze(l))); ) o--;
  if (!u) return { x: 0, y: 0 };
  u === a[0] &&
    a.length > 2 &&
    c.timestamp - u.timestamp > Ze(l) * 2 &&
    (u = a[1]);
  const h = Ue(c.timestamp - u.timestamp);
  if (h === 0) return { x: 0, y: 0 };
  const d = { x: (c.x - u.x) / h, y: (c.y - u.y) / h };
  return (d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d);
}
function xT(a, { min: l, max: o }, u) {
  return (
    l !== void 0 && a < l
      ? (a = u ? zt(l, a, u.min) : Math.max(a, l))
      : o !== void 0 && a > o && (a = u ? zt(o, a, u.max) : Math.min(a, o)),
    a
  );
}
function S0(a, l, o) {
  return {
    min: l !== void 0 ? a.min + l : void 0,
    max: o !== void 0 ? a.max + o - (a.max - a.min) : void 0,
  };
}
function bT(a, { top: l, left: o, bottom: u, right: c }) {
  return { x: S0(a.x, o, c), y: S0(a.y, l, u) };
}
function T0(a, l) {
  let o = l.min - a.min,
    u = l.max - a.max;
  return (
    l.max - l.min < a.max - a.min && ([o, u] = [u, o]),
    { min: o, max: u }
  );
}
function ST(a, l) {
  return { x: T0(a.x, l.x), y: T0(a.y, l.y) };
}
function TT(a, l) {
  let o = 0.5;
  const u = se(a),
    c = se(l);
  return (
    c > u
      ? (o = vl(l.min, l.max - u, a.min))
      : u > c && (o = vl(a.min, a.max - c, l.min)),
    tn(0, 1, o)
  );
}
function AT(a, l) {
  const o = {};
  return (
    l.min !== void 0 && (o.min = l.min - a.min),
    l.max !== void 0 && (o.max = l.max - a.min),
    o
  );
}
const Tc = 0.35;
function ET(a = Tc) {
  return (
    a === !1 ? (a = 0) : a === !0 && (a = Tc),
    { x: A0(a, "left", "right"), y: A0(a, "top", "bottom") }
  );
}
function A0(a, l, o) {
  return { min: E0(a, l), max: E0(a, o) };
}
function E0(a, l) {
  return typeof a == "number" ? a : a[l] || 0;
}
const MT = new WeakMap();
class DT {
  constructor(l) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Zt()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = l));
  }
  start(l, { snapToCursor: o = !1, distanceThreshold: u } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1) return;
    const h = (b) => {
        (o && this.snapToCursor(Dl(b).point), this.stopAnimation());
      },
      d = (b, E) => {
        const { drag: V, dragPropagation: w, onDragStart: L } = this.getProps();
        if (
          V &&
          !w &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = sS(V)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = b),
          (this.latestPanInfo = E),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          $e((H) => {
            let G = this.getAxisMotionValue(H).get() || 0;
            if (Ie.test(G)) {
              const { projection: B } = this.visualElement;
              if (B && B.layout) {
                const P = B.layout.layoutBox[H];
                P && (G = se(P) * (parseFloat(G) / 100));
              }
            }
            this.originPoint[H] = G;
          }),
          L && Dt.update(() => L(b, E), !1, !0),
          mc(this.visualElement, "transform"));
        const { animationState: X } = this.visualElement;
        X && X.setActive("whileDrag", !0);
      },
      y = (b, E) => {
        ((this.latestPointerEvent = b), (this.latestPanInfo = E));
        const {
          dragPropagation: V,
          dragDirectionLock: w,
          onDirectionLock: L,
          onDrag: X,
        } = this.getProps();
        if (!V && !this.openDragLock) return;
        const { offset: H } = E;
        if (w && this.currentDirection === null) {
          ((this.currentDirection = jT(H)),
            this.currentDirection !== null && L && L(this.currentDirection));
          return;
        }
        (this.updateAxis("x", E.point, H),
          this.updateAxis("y", E.point, H),
          this.visualElement.render(),
          X && Dt.update(() => X(b, E), !1, !0));
      },
      g = (b, E) => {
        ((this.latestPointerEvent = b),
          (this.latestPanInfo = E),
          this.stop(b, E),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      p = () => {
        const { dragSnapToOrigin: b } = this.getProps();
        (b || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new hg(
      l,
      {
        onSessionStart: h,
        onStart: d,
        onMove: y,
        onSessionEnd: g,
        resumeAnimation: p,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: v,
        distanceThreshold: u,
        contextWindow: dg(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(l, o) {
    const u = l || this.latestPointerEvent,
      c = o || this.latestPanInfo,
      h = this.isDragging;
    if ((this.cancel(), !h || !c || !u)) return;
    const { velocity: d } = c;
    this.startAnimation(d);
    const { onDragEnd: y } = this.getProps();
    y && Dt.postRender(() => y(u, c));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: o } = this.visualElement;
    (l && (l.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: u } = this.getProps();
    (!u &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      o && o.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(l, o, u) {
    const { drag: c } = this.getProps();
    if (!u || !ks(l, c, this.currentDirection)) return;
    const h = this.getAxisMotionValue(l);
    let d = this.originPoint[l] + u[l];
    (this.constraints &&
      this.constraints[l] &&
      (d = xT(d, this.constraints[l], this.elastic[l])),
      h.set(d));
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: o } = this.getProps(),
      u =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      c = this.constraints;
    (l && li(l)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : l && u
        ? (this.constraints = bT(u.layoutBox, l))
        : (this.constraints = !1),
      (this.elastic = ET(o)),
      c !== this.constraints &&
        !li(l) &&
        u &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        $e((h) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(h) &&
            (this.constraints[h] = AT(u.layoutBox[h], this.constraints[h]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: o } = this.getProps();
    if (!l || !li(l)) return !1;
    const u = l.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const h = _S(u, c.root, this.visualElement.getTransformPagePoint());
    let d = ST(c.layout.layoutBox, h);
    if (o) {
      const y = o(VS(d));
      ((this.hasMutatedConstraints = !!y), y && (d = _y(y)));
    }
    return d;
  }
  startAnimation(l) {
    const {
        drag: o,
        dragMomentum: u,
        dragElastic: c,
        dragTransition: h,
        dragSnapToOrigin: d,
        onDragTransitionEnd: y,
      } = this.getProps(),
      g = this.constraints || {},
      p = $e((v) => {
        if (!ks(v, o, this.currentDirection)) return;
        let b = (g && g[v]) || {};
        d && (b = { min: 0, max: 0 });
        const E = c ? 200 : 1e6,
          V = c ? 40 : 1e7,
          w = {
            type: "inertia",
            velocity: u ? l[v] : 0,
            bounceStiffness: E,
            bounceDamping: V,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...h,
            ...b,
          };
        return this.startAxisValueAnimation(v, w);
      });
    return Promise.all(p).then(y);
  }
  startAxisValueAnimation(l, o) {
    const u = this.getAxisMotionValue(l);
    return (
      mc(this.visualElement, l),
      u.start(Yc(l, u, 0, o, this.visualElement, !1))
    );
  }
  stopAnimation() {
    $e((l) => this.getAxisMotionValue(l).stop());
  }
  getAxisMotionValue(l) {
    const o = `_drag${l.toUpperCase()}`,
      u = this.visualElement.getProps(),
      c = u[o];
    return (
      c ||
      this.visualElement.getValue(l, (u.initial ? u.initial[l] : void 0) || 0)
    );
  }
  snapToCursor(l) {
    $e((o) => {
      const { drag: u } = this.getProps();
      if (!ks(o, u, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        h = this.getAxisMotionValue(o);
      if (c && c.layout) {
        const { min: d, max: y } = c.layout.layoutBox[o],
          g = h.get() || 0;
        h.set(l[o] - zt(d, y, 0.5) + g);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: l, dragConstraints: o } = this.getProps(),
      { projection: u } = this.visualElement;
    if (!li(o) || !u || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    $e((d) => {
      const y = this.getAxisMotionValue(d);
      if (y && this.constraints !== !1) {
        const g = y.get();
        c[d] = TT({ min: g, max: g }, this.constraints[d]);
      }
    });
    const { transformTemplate: h } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = h ? h({}, "") : "none"),
      u.root && u.root.updateScroll(),
      u.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      $e((d) => {
        if (!ks(d, l, null)) return;
        const y = this.getAxisMotionValue(d),
          { min: g, max: p } = this.constraints[d];
        y.set(zt(g, p, c[d]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    MT.set(this.visualElement, this);
    const l = this.visualElement.current,
      o = yl(l, "pointerdown", (p) => {
        const { drag: v, dragListener: b = !0 } = this.getProps(),
          E = p.target,
          V = E !== l && dS(E);
        v && b && !V && this.start(p);
      });
    let u;
    const c = () => {
        const { dragConstraints: p } = this.getProps();
        li(p) &&
          p.current &&
          ((this.constraints = this.resolveRefConstraints()),
          u ||
            (u = NT(l, p.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: h } = this.visualElement,
      d = h.addEventListener("measure", c);
    (h && !h.layout && (h.root && h.root.updateScroll(), h.updateLayout()),
      Dt.read(c));
    const y = Tl(window, "resize", () => this.scalePositionWithinConstraints()),
      g = h.addEventListener(
        "didUpdate",
        ({ delta: p, hasLayoutChanged: v }) => {
          this.isDragging &&
            v &&
            ($e((b) => {
              const E = this.getAxisMotionValue(b);
              E &&
                ((this.originPoint[b] += p[b].translate),
                E.set(E.get() + p[b].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (y(), o(), d(), g && g(), u && u());
    };
  }
  getProps() {
    const l = this.visualElement.getProps(),
      {
        drag: o = !1,
        dragDirectionLock: u = !1,
        dragPropagation: c = !1,
        dragConstraints: h = !1,
        dragElastic: d = Tc,
        dragMomentum: y = !0,
      } = l;
    return {
      ...l,
      drag: o,
      dragDirectionLock: u,
      dragPropagation: c,
      dragConstraints: h,
      dragElastic: d,
      dragMomentum: y,
    };
  }
}
function M0(a) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    a();
  };
}
function NT(a, l, o) {
  const u = Rp(a, M0(o)),
    c = Rp(l, M0(o));
  return () => {
    (u(), c());
  };
}
function ks(a, l, o) {
  return (l === !0 || l === a) && (o === null || o === a);
}
function jT(a, l = 10) {
  let o = null;
  return (Math.abs(a.y) > l ? (o = "y") : Math.abs(a.x) > l && (o = "x"), o);
}
class CT extends Pn {
  constructor(l) {
    (super(l),
      (this.removeGroupControls = Be),
      (this.removeListeners = Be),
      (this.controls = new DT(l)));
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    (l && (this.removeGroupControls = l.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Be));
  }
  update() {
    const { dragControls: l } = this.node.getProps(),
      { dragControls: o } = this.node.prevProps || {};
    l !== o &&
      (this.removeGroupControls(),
      l && (this.removeGroupControls = l.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const $r = (a) => (l, o) => {
  a && Dt.update(() => a(l, o), !1, !0);
};
class zT extends Pn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Be));
  }
  onPointerDown(l) {
    this.session = new hg(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: dg(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: l,
      onPanStart: o,
      onPan: u,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: $r(l),
      onStart: $r(o),
      onMove: $r(u),
      onEnd: (h, d) => {
        (delete this.session, c && Dt.postRender(() => c(h, d)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = yl(this.node.current, "pointerdown", (l) =>
      this.onPointerDown(l),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let Ir = !1;
class OT extends I.Component {
  componentDidMount() {
    const {
        visualElement: l,
        layoutGroup: o,
        switchLayoutGroup: u,
        layoutId: c,
      } = this.props,
      { projection: h } = l;
    (h &&
      (o.group && o.group.add(h),
      u && u.register && c && u.register(h),
      Ir && h.root.didUpdate(),
      h.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      h.setOptions({
        ...h.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (to.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(l) {
    const {
        layoutDependency: o,
        visualElement: u,
        drag: c,
        isPresent: h,
      } = this.props,
      { projection: d } = u;
    return (
      d &&
        ((d.isPresent = h),
        l.layoutDependency !== o &&
          d.setOptions({ ...d.options, layoutDependency: o }),
        (Ir = !0),
        c || l.layoutDependency !== o || o === void 0 || l.isPresent !== h
          ? d.willUpdate()
          : this.safeToRemove(),
        l.isPresent !== h &&
          (h
            ? d.promote()
            : d.relegate() ||
              Dt.postRender(() => {
                const y = d.getStack();
                (!y || !y.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: l } = this.props.visualElement;
    l &&
      (l.root.didUpdate(),
      Zc.postRender(() => {
        !l.currentAnimation && l.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: l,
        layoutGroup: o,
        switchLayoutGroup: u,
      } = this.props,
      { projection: c } = l;
    ((Ir = !0),
      c &&
        (c.scheduleCheckAfterUnmount(),
        o && o.group && o.group.remove(c),
        u && u.deregister && u.deregister(c)));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function pg(a) {
  const [l, o] = L2(),
    u = I.useContext(z0);
  return x.jsx(OT, {
    ...a,
    layoutGroup: u,
    switchLayoutGroup: I.useContext(cg),
    isPresent: l,
    safeToRemove: o,
  });
}
const VT = {
  pan: { Feature: zT },
  drag: { Feature: CT, ProjectionNode: ng, MeasureLayout: pg },
};
function D0(a, l, o) {
  const { props: u } = a;
  a.animationState &&
    u.whileHover &&
    a.animationState.setActive("whileHover", o === "Start");
  const c = "onHover" + o,
    h = u[c];
  h && Dt.postRender(() => h(l, Dl(l)));
}
class RT extends Pn {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = uS(
        l,
        (o, u) => (D0(this.node, u, "Start"), (c) => D0(this.node, c, "End")),
      ));
  }
  unmount() {}
}
class wT extends Pn {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Al(
      Tl(this.node.current, "focus", () => this.onFocus()),
      Tl(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function N0(a, l, o) {
  const { props: u } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled) return;
  a.animationState &&
    u.whileTap &&
    a.animationState.setActive("whileTap", o === "Start");
  const c = "onTap" + (o === "End" ? "" : o),
    h = u[c];
  h && Dt.postRender(() => h(l, Dl(l)));
}
class _T extends Pn {
  mount() {
    const { current: l } = this.node;
    if (!l) return;
    const { globalTapTarget: o, propagate: u } = this.node.props;
    this.unmount = mS(
      l,
      (c, h) => (
        N0(this.node, h, "Start"),
        (d, { success: y }) => N0(this.node, d, y ? "End" : "Cancel")
      ),
      { useGlobalTarget: o, stopPropagation: u?.tap === !1 },
    );
  }
  unmount() {}
}
const Ac = new WeakMap(),
  tc = new WeakMap(),
  UT = (a) => {
    const l = Ac.get(a.target);
    l && l(a);
  },
  BT = (a) => {
    a.forEach(UT);
  };
function LT({ root: a, ...l }) {
  const o = a || document;
  tc.has(o) || tc.set(o, {});
  const u = tc.get(o),
    c = JSON.stringify(l);
  return (
    u[c] || (u[c] = new IntersectionObserver(BT, { root: a, ...l })),
    u[c]
  );
}
function HT(a, l, o) {
  const u = LT(l);
  return (
    Ac.set(a, o),
    u.observe(a),
    () => {
      (Ac.delete(a), u.unobserve(a));
    }
  );
}
const qT = { some: 0, all: 1 };
class YT extends Pn {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: l = {} } = this.node.getProps(),
      { root: o, margin: u, amount: c = "some", once: h } = l,
      d = {
        root: o ? o.current : void 0,
        rootMargin: u,
        threshold: typeof c == "number" ? c : qT[c],
      },
      y = (g) => {
        const { isIntersecting: p } = g;
        if (
          this.isInView === p ||
          ((this.isInView = p), h && !p && this.hasEnteredView)
        )
          return;
        (p && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", p));
        const { onViewportEnter: v, onViewportLeave: b } = this.node.getProps(),
          E = p ? v : b;
        E && E(g);
      };
    return HT(this.node.current, d, y);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: l, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(GT(l, o)) && this.startObserver();
  }
  unmount() {}
}
function GT({ viewport: a = {} }, { viewport: l = {} } = {}) {
  return (o) => a[o] !== l[o];
}
const XT = {
    inView: { Feature: YT },
    tap: { Feature: _T },
    focus: { Feature: wT },
    hover: { Feature: RT },
  },
  QT = { layout: { ProjectionNode: ng, MeasureLayout: pg } },
  ZT = { ...mT, ...XT, ...VT, ...QT },
  Le = rT(ZT, cT);
const yg = (...a) =>
  a
    .filter((l, o, u) => !!l && l.trim() !== "" && u.indexOf(l) === o)
    .join(" ")
    .trim();
const KT = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const kT = (a) =>
  a.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, o, u) =>
    u ? u.toUpperCase() : o.toLowerCase(),
  );
const j0 = (a) => {
  const l = kT(a);
  return l.charAt(0).toUpperCase() + l.slice(1);
};
var JT = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const PT = (a) => {
  for (const l in a)
    if (l.startsWith("aria-") || l === "role" || l === "title") return !0;
  return !1;
};
const FT = I.forwardRef(
  (
    {
      color: a = "currentColor",
      size: l = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: u,
      className: c = "",
      children: h,
      iconNode: d,
      ...y
    },
    g,
  ) =>
    I.createElement(
      "svg",
      {
        ref: g,
        ...JT,
        width: l,
        height: l,
        stroke: a,
        strokeWidth: u ? (Number(o) * 24) / Number(l) : o,
        className: yg("lucide", c),
        ...(!h && !PT(y) && { "aria-hidden": "true" }),
        ...y,
      },
      [
        ...d.map(([p, v]) => I.createElement(p, v)),
        ...(Array.isArray(h) ? h : [h]),
      ],
    ),
);
const Kt = (a, l) => {
  const o = I.forwardRef(({ className: u, ...c }, h) =>
    I.createElement(FT, {
      ref: h,
      iconNode: l,
      className: yg(`lucide-${KT(j0(a))}`, `lucide-${a}`, u),
      ...c,
    }),
  );
  return ((o.displayName = j0(a)), o);
};
const WT = [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ],
  $T = Kt("award", WT);
const IT = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  ba = Kt("check", IT);
const tA = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  eA = Kt("chevron-down", tA);
const nA = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ],
  gg = Kt("clock", nA);
const aA = [
    ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
    ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }],
  ],
  vg = Kt("code", aA);
const iA = [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
    ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
    ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
  ],
  C0 = Kt("database", iA);
const lA = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6",
      },
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "M10 12.5 8 15l2 2.5", key: "1tg20x" }],
    ["path", { d: "m14 12.5 2 2.5-2 2.5", key: "yinavb" }],
  ],
  sA = Kt("file-code", lA);
const oA = [
    ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
    ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ],
  uA = Kt("git-branch", oA);
const rA = [
    [
      "rect",
      {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1",
      },
    ],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
  ],
  cA = Kt("lock", rA);
const fA = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1",
      },
    ],
  ],
  dA = Kt("play", fA);
const hA = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
  ],
  tf = Kt("shield", hA);
const mA = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  xg = Kt("star", mA);
const pA = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ],
  bg = Kt("target", pA);
const yA = [
    [
      "path",
      {
        d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
        key: "emmmcr",
      },
    ],
    ["path", { d: "M7 10v12", key: "1qc93n" }],
  ],
  gA = Kt("thumbs-up", yA);
const vA = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
  ],
  xA = Kt("trending-up", vA);
const bA = [
    [
      "path",
      {
        d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",
        key: "1n3hpd",
      },
    ],
    [
      "path",
      {
        d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",
        key: "rfe1zi",
      },
    ],
    ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }],
    ["path", { d: "M4 22h16", key: "57wxv0" }],
    [
      "path",
      {
        d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
        key: "1mhfuq",
      },
    ],
    ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }],
  ],
  Sg = Kt("trophy", bA);
const SA = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  TA = Kt("users", SA);
const AA = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  gl = Kt("x", AA);
const EA = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  ho = Kt("zap", EA),
  MA = "./assets/img-pc-BR9YZf9s.webp";
function DA() {
  const a = () => {
    document
      .getElementById("offer-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return x.jsx(x.Fragment, {
    children: x.jsx("section", {
      className:
        "relative bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden cursor-pointer",
      children: x.jsx("div", {
        className:
          "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28",
        children: x.jsxs("div", {
          className: "grid lg:grid-cols-2 gap-12 items-center",
          children: [
            x.jsxs(Le.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: [
                x.jsxs("div", {
                  className:
                    "inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-400/30",
                  children: [
                    x.jsx(xg, {
                      className: "w-4 h-4 text-yellow-400 fill-yellow-400",
                    }),
                    x.jsx("span", {
                      className: "text-sm",
                      children: "Vagas abertas por tempo limitado",
                    }),
                  ],
                }),
                x.jsxs("h1", {
                  className:
                    "text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 ",
                  children: [
                    "Domine ADVPL e se torne um",
                    " ",
                    x.jsx("span", {
                      className: "text-blue-400",
                      children: "Desenvolvedor ERP ",
                    }),
                    "valorizado",
                  ],
                }),
                x.jsxs("p", {
                  className: "text-xl text-slate-300 mb-8",
                  children: [
                    "O curso completo que leva você do",
                    " ",
                    x.jsx("strong", { children: "zero ao avançado" }),
                    " em ADVPL e TOTVS Protheus, com projetos reais e suporte direto",
                  ],
                }),
                x.jsx("ul", {
                  className: "space-y-4 mb-10",
                  children: [
                    "Aprenda do básico ao avançado em 8 semanas",
                    "Projetos práticos com código real de produção",
                    "Domine customizações, integrações e relatórios",
                    "Preparação completa para o mercado ERP",
                  ].map((l, o) =>
                    x.jsxs(
                      Le.li,
                      {
                        initial: { opacity: 0, x: -20 },
                        animate: { opacity: 1, x: 0 },
                        transition: { delay: 0.1 * o + 0.3 },
                        className: "flex items-start gap-3",
                        children: [
                          x.jsx("div", {
                            className: "bg-green-500 rounded-full p-1 mt-1",
                            children: x.jsx(ba, { className: "w-4 h-4" }),
                          }),
                          x.jsx("span", { className: "text-lg", children: l }),
                        ],
                      },
                      o,
                    ),
                  ),
                }),
                x.jsxs("button", {
                  onClick: a,
                  className:
                    "group bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-5 rounded-xl text-lg font-semibold shadow-2xl shadow-green-500/50 transition-all transform hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center",
                  children: [
                    x.jsx(ho, { className: "w-5 h-5" }),
                    "Quero me Tornar Desenvolvedor ADVPL",
                  ],
                }),
                x.jsx("div", {
                  className:
                    "flex items-center gap-6 mt-8 text-sm text-slate-300",
                  children: x.jsxs("div", {
                    className: "flex items-center gap-2 ml-5",
                    children: [
                      x.jsx(tf, { className: "w-5 h-5 text-green-400" }),
                      x.jsx("span", { children: "Garantia de 7 dias" }),
                    ],
                  }),
                }),
              ],
            }),
            x.jsxs(Le.div, {
              initial: { opacity: 0, sacle: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.6, delay: 0.2 },
              className: "relative",
              children: [
                x.jsxs("div", {
                  className:
                    "relative rounded-2x1 overflow-hidden shadow-2xl border-4 border-slate-700",
                  children: [
                    x.jsx("img", {
                      src: MA,
                      alt: "Desenvolvedor programando",
                      className: "w-full h-auto object-contain",
                    }),
                    x.jsx("div", {
                      className:
                        "absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent",
                    }),
                    x.jsx("div", {
                      className: "absolute bottom-6 left-6 right-6",
                      children: x.jsxs("div", {
                        className:
                          "bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 border border-slate-700",
                        children: [
                          x.jsx("div", {
                            className: "text-xs text-slate-400 mb-1 font-mono",
                            children: "User Function ADVPL",
                          }),
                          x.jsx("div", {
                            className: "text-green-400 font-mono text-sm",
                            children:
                              'MsgInfo("Bem-vindo ao Protheus!","Sucesso")',
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                x.jsxs("div", {
                  className:
                    "absolute -top-4 -right-4 bg-green-500 text-white rounded-2xl px-6 py-3 shadow-xl transform rotate-3",
                  children: [
                    x.jsx("div", {
                      className: "font-bold",
                      children: "100% Prático",
                    }),
                    x.jsx("div", {
                      className: "text-sm",
                      children: "Projetos Reais",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  });
}
function NA() {
  return x.jsx(x.Fragment, {
    children: x.jsx("section", {
      id: "offer-section",
      className: "py-20 bg-linearo-br from-slate-50  to-blue-50",
      children: x.jsxs("div", {
        className: "max-w-4xl mx-auto px-4 m:px-6 lg:px-8",
        children: [
          x.jsxs("div", {
            className: "text-center mb-12",
            children: [
              x.jsxs("h2", {
                className: "text-3xl sm:text-4xl font-bold mb-4 text-slate-900",
                children: [
                  " ",
                  "Comece Sua Transformação",
                  " ",
                  x.jsx("span", {
                    className: "text-blue-600",
                    children: "Hoje",
                  }),
                ],
              }),
              x.jsx("p", {
                className: "text-xl text-slate-600",
                children: "Acesso completo",
              }),
            ],
          }),
          x.jsxs("div", {
            className:
              "bg-white rounded-2xl shadow-2xl border-4 border-blue-600 p-8 sm:p-12",
            children: [
              x.jsxs("div", {
                className: "text-center mb-8",
                children: [
                  x.jsx("div", {
                    className:
                      "inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold mb-4",
                    children: "🔥 SUPER OFERTA",
                  }),
                  x.jsx("div", {
                    className: "text-slate-500 line-through text-xl mb-2",
                    children: "De R$ 1.597,00",
                  }),
                  x.jsxs("div", {
                    className:
                      "text-5xl sm:text-6xl font-bold text-slate-900 mb-2",
                    children: [
                      "R$ 1.200",
                      x.jsx("span", { className: "text-2xl", children: ",00" }),
                    ],
                  }),
                  x.jsx("div", {
                    className: "text-slate-600",
                    children: "ou 12x de R$126,28 sem juros",
                  }),
                ],
              }),
              x.jsxs("div", {
                className: "bg-blue-50 rounded-xl p-6 mb-8",
                children: [
                  x.jsx("h3", {
                    className: "font-bold text-lg mb-4 text-slate-900",
                    children:
                      "✨ Tudo o que você precisa para sua evolução no ADVPL:",
                  }),
                  x.jsx("ul", {
                    className: "space-y-3",
                    children: [
                      "Passo a Passo Estruturado: O mapa completo para sair do zero e virar referência.",
                      "Acompanhamento de Perto: Você nunca estará sozinho; suporte direto com instrutores.",
                      "Acervo de Scripts Prontos: Ganhe tempo com nossa biblioteca de funções exclusivas.",
                      "Certificação de Peso: Destaque-se nos processos seletivos com nossa chancela.",
                      "Acesso Imediato: Comece a transformar sua carreira agora mesmo.",
                    ].map((a, l) => {
                      const o = a.indexOf(":"),
                        u = a.slice(0, o + 1),
                        c = a.slice(o + 1);
                      return x.jsxs(
                        "li",
                        {
                          className: "flex items-start gap-3",
                          children: [
                            x.jsx(ba, {
                              className:
                                "w-5 h-5 text-green-600 shrink-0 mt-0.5",
                            }),
                            x.jsxs("span", {
                              className: "text-slate-900",
                              children: [
                                x.jsx("span", {
                                  className: "font-semibold",
                                  children: u,
                                }),
                                c,
                              ],
                            }),
                          ],
                        },
                        l,
                      );
                    }),
                  }),
                ],
              }),
              x.jsxs("button", {
                onClick: () =>
                  window.open(
                    "https://academiadoadvpl.eadplataforma.app/cart#cart-step-list",
                  ),
                className:
                  "w-full bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-6 rounded-xl font-bold shadow-2xl shadow-green-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-3 mb-6 ",
                children: [
                  x.jsx(ho, { className: "w-6 h-6" }),
                  "GARANTIR MINHA VAGA AGORA",
                ],
              }),
              x.jsxs("div", {
                className: "text-center space-y-3",
                children: [
                  x.jsxs("div", {
                    className:
                      "flex items-center justify-center gap-2 text-green-600",
                    children: [
                      x.jsx(tf, { className: "w-5 h-5" }),
                      x.jsx("span", {
                        className: "font-semibold",
                        children: "Garantia Incondicional de 7 Dias",
                      }),
                    ],
                  }),
                  x.jsx("p", {
                    className: "text-sm text-slate-600",
                    children:
                      "Se em 7 dias você não estiver satisfeito, devolvemos 100% do seu investimento.",
                  }),
                  x.jsx("div", {
                    className:
                      "flex items-center justify-center gap-6 text-sm text-slate-500 pt-4",
                    children: x.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        x.jsx(cA, { className: "w-4 h-4" }),
                        x.jsx("span", { children: "Pagamento Seguro" }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
const jA = "./assets/metodo-n4QSsu8k.webp";
function CA() {
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx("section", {
        className: "py-20 bg-white",
        children: x.jsxs("div", {
          className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            x.jsxs("div", {
              className: "text-center mb-16",
              children: [
                x.jsxs("h2", {
                  className:
                    "text-3xl sm:text-4xl font-bold mb-4 text-slate-900",
                  children: [
                    " ",
                    "Por Que Aprender ADVPL Parece Tão",
                    " ",
                    x.jsx("span", {
                      className: "text-red-600",
                      children: "Impossível?",
                    }),
                  ],
                }),
                x.jsx("p", {
                  className: "text-xl text-slate-600",
                  children: "Reconhece alguma dessas frustações?",
                }),
              ],
            }),
            x.jsx("div", {
              className: "grid md:grid-cols-3 gap-8",
              children: [
                {
                  icon: gl,
                  title: "Material Desorganizado",
                  description:
                    "Documentação confusa, tutoriais incompletos e informações espalhadas em fóruns antigos",
                },
                {
                  icon: gl,
                  title: "Código Legado Complexo",
                  description:
                    "Sistemas do Protheus com anos de customizações sem padrão, impossível de entender",
                },
                {
                  icon: gl,
                  title: "Mercado Fechado",
                  description:
                    "Empresas exigem experiência prévia, mas ninguém te ensina como começar de verdade",
                },
              ].map((a, l) =>
                x.jsxs(
                  Le.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { delay: l * 0.1 },
                    viewport: { once: !0 },
                    className:
                      "bg-red-50 border-2 border-red-200 rounded-xl p-6",
                    children: [
                      x.jsx("div", {
                        className:
                          "bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                        children: x.jsx(a.icon, {
                          className: "w-6 h-6 text-white",
                        }),
                      }),
                      x.jsx("h3", {
                        className: "font-bold text-lg mb-2 text-slate-900",
                        children: a.title,
                      }),
                      x.jsx("p", {
                        className: "text-slate-600",
                        children: a.description,
                      }),
                    ],
                  },
                  l,
                ),
              ),
            }),
            x.jsx("div", {
              className: "mt-12 text-center",
              children: x.jsx("p", {
                className: "text-xl text-slate-700 italic",
                children:
                  '"Eu perdi meses tentando aprender sozinho. Parecia que cada resposta gerava 10 anos dúidas..."',
              }),
            }),
          ],
        }),
      }),
      x.jsx("section", {
        className: "py-20 bg-linear-to-br from-blue-50 to-slate-50",
        children: x.jsxs("div", {
          className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            x.jsxs("div", {
              className: "text-center mb-16",
              children: [
                x.jsx("div", {
                  className:
                    "inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold mb-4",
                  children: "A SOLUÇÃO",
                }),
                x.jsxs("h2", {
                  className:
                    "text-3xl sm:text-4xl font-bold mb-6 text-slate-900",
                  children: [
                    "Destaque-se em",
                    x.jsx("span", {
                      className: "text-blue-600",
                      children: " ADVPL ",
                    }),
                    " partindo",
                    x.jsx("span", {
                      className: "text-blue-600",
                      children: " do Zero ",
                    }),
                  ],
                }),
                x.jsx("p", {
                  className: "text-xl text-slate-600 max-w-3xl mx-auto",
                  children:
                    "Uma metodologia passo a passo, sem enrolação e direto ao ponto para você desenvolver em TOTVS Protheus",
                }),
              ],
            }),
            x.jsxs("div", {
              className: "grid md:grid-cols-2 gap-12 items-center",
              children: [
                x.jsx("div", {
                  children: x.jsx("img", {
                    src: jA,
                    alt: "",
                    className:
                      "w-full max-w-600 aspect-auto object-contain rounded-2xl shadow-2xl",
                  }),
                }),
                x.jsx("div", {
                  className: "space-y-6",
                  children: [
                    {
                      icon: bg,
                      title: "Metodologia Progressiva",
                      description:
                        "Do básico ao avançado, sem pular etapas. Cada conceito contruído sobre o anterior.",
                    },
                    {
                      icon: vg,
                      title: "Projetos Práticos Reais",
                      description:
                        "Aprenda criando customizações que você realmente usará no dia a dia profissional.",
                    },
                    {
                      icon: TA,
                      title: "Suporte Direto",
                      description:
                        "Tire dúvidas com instrutores experientes e uma comunidade ativa e desenvolvedores.",
                    },
                    {
                      icon: xA,
                      title: "Preparação para o Mercado",
                      description:
                        "Saia do curso com portfólio pronto e confiança para buscar oportunidades.",
                    },
                  ].map((a, l) =>
                    x.jsxs(
                      Le.div,
                      {
                        initial: { opacity: 0, x: -20 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: { delay: l * 0.1 },
                        viewport: { once: !0 },
                        className: "flex gap-4",
                        children: [
                          x.jsx("div", {
                            className:
                              "bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center shrink-0",
                            children: x.jsx(a.icon, {
                              className: "w-6 h-6 text-white",
                            }),
                          }),
                          x.jsxs("div", {
                            children: [
                              x.jsx("h3", {
                                className:
                                  "font-bold text-lg mb-1 text-slate-900",
                                children: a.title,
                              }),
                              x.jsx("p", {
                                className: "text-slate-600",
                                children: a.description,
                              }),
                            ],
                          }),
                        ],
                      },
                      l,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function zA() {
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx("section", {
        className: "py-20 bg-white",
        children: x.jsxs("div", {
          className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            x.jsxs("div", {
              className: "text-center mb-16",
              children: [
                x.jsxs("h2", {
                  className:
                    "text-3xl sm:text-4xl font-bold mb-4 text-slate-900",
                  children: [
                    "O Que Você Vai ",
                    x.jsx("span", {
                      className: "text-blue-600",
                      children: "Dominar",
                    }),
                  ],
                }),
                x.jsx("p", {
                  className: "text-xl text-slate-600",
                  children:
                    "Habilidades práticas que empresas estão buscando agora",
                }),
              ],
            }),
            x.jsx("div", {
              className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
              children: [
                { icon: vg, text: "Sintaxe e fundamentos da linguagem ADVPL" },
                {
                  icon: C0,
                  text: "Dicionário de dados e estrutura do Protheus",
                },
                { icon: sA, text: "User Functions e pontos de entrada" },
                { icon: uA, text: "Customizações de telas e processos" },
                {
                  icon: dA,
                  text: "Relatórios personalizados e queries avançadas",
                },
                { icon: ho, text: "Integrações com APIs e Web Services" },
                { icon: C0, text: "Manipulação de tabelas e gatilhos" },
                { icon: Sg, text: "Debbuging e otimzação de performance" },
                { icon: $T, text: "Boas práticas e padrões de código" },
              ].map((a, l) =>
                x.jsxs(
                  Le.div,
                  {
                    initial: { opacity: 0, scale: 0.9 },
                    whileInView: { opacity: 1, scale: 1 },
                    transition: { delay: l * 0.05 },
                    viewport: { once: !0 },
                    className:
                      "flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all",
                    children: [
                      x.jsx("div", {
                        className: "bg-blue-100 p-2 rounded-lg",
                        children: x.jsx(a.icon, {
                          className: "w-5 h-5 text-blue-600",
                        }),
                      }),
                      x.jsx("span", {
                        className: "text-slate-700",
                        children: a.text,
                      }),
                    ],
                  },
                  l,
                ),
              ),
            }),
          ],
        }),
      }),
      x.jsx("section", {
        className: "py-20 bg-slate-900 text-white",
        children: x.jsxs("div", {
          className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            x.jsx("h2", {
              className: "text-3xl sm:text-4xl font-bold text-center mb-16",
              children: "Este Curso é Para Você?",
            }),
            x.jsxs("div", {
              className: "grid md:grid-cols-2 gap-8",
              children: [
                x.jsxs("div", {
                  className:
                    "bg-green-900/30 border-2 border-green-500 rounded-2xl p-8",
                  children: [
                    x.jsxs("div", {
                      className: "flex items-center gap-3 mb-6",
                      children: [
                        x.jsx("div", {
                          className: "bg-green-500 rounded-full p-2",
                          children: x.jsx(ba, { className: "w-6 h-6" }),
                        }),
                        x.jsx("h3", {
                          className: "text-2xl font-bold",
                          children: "Este Curso É PARA Você Se:",
                        }),
                      ],
                    }),
                    x.jsx("ul", {
                      className: "space-y-4",
                      children: [
                        "Você quer entrar no mercado ERP e TOTVS",
                        "É desenvolvedor e quer se especializar",
                        "É consultor Protheus e precisa de conhecimento técnico",
                        "Está começando do zero em programação ERP",
                        "Quer criar cstomizações e relatório profissionais",
                        "Busca uma carreira com alta demanda e boa remuneração",
                      ].map((a, l) =>
                        x.jsx(
                          Le.div,
                          {
                            initial: { opacity: 0, scale: 0.9 },
                            whileInView: { opacity: 1, scale: 1 },
                            transition: { delay: l * 0.2 },
                            viewport: { once: !0 },
                            children: x.jsxs(
                              "li",
                              {
                                className: "flex items-start gap-3",
                                children: [
                                  x.jsx(ba, {
                                    className:
                                      "w-5 h-5 text-green-400 shrink-0 mt-1",
                                  }),
                                  x.jsx("span", { children: a }),
                                ],
                              },
                              l,
                            ),
                          },
                          l,
                        ),
                      ),
                    }),
                  ],
                }),
                x.jsxs("div", {
                  className:
                    "bg-green-900/30 border-2 border-red-500 rounded-2xl p-8",
                  children: [
                    x.jsxs("div", {
                      className: "flex items-center gap-3 mb-6",
                      children: [
                        x.jsx("div", {
                          className: "bg-red-500 rounded-full p-2",
                          children: x.jsx(gl, { className: "w-6 h-6" }),
                        }),
                        x.jsx("h3", {
                          className: "text-2xl font-bold",
                          children: "NÃO É Para Você Se:",
                        }),
                      ],
                    }),
                    x.jsx("ul", {
                      className: "space-y-4",
                      children: [
                        "Procura soluções mágicas sem esforço",
                        "Não tem tempo para particiar e fazer os exercícios",
                        "Quer apenas teoria sem aplicação prática",
                        "Não está disposto a sair da zona de conforto",
                        "Espera resultados sem dedicação",
                        "Não tem interesse em trabalhar com ERP",
                      ].map((a, l) =>
                        x.jsx(
                          Le.div,
                          {
                            initial: { opacity: 0, scale: 0.9 },
                            whileInView: { opacity: 1, scale: 1 },
                            transition: { delay: l * 0.2 },
                            viewport: { once: !0 },
                            children: x.jsxs(
                              "li",
                              {
                                className: "flex items-start gap-3",
                                children: [
                                  x.jsx(gl, {
                                    className:
                                      "w-5 h-5 text-red-400 shrink-0 mt-1",
                                  }),
                                  x.jsx("span", {
                                    className: "text-slate-300",
                                    children: a,
                                  }),
                                ],
                              },
                              l,
                            ),
                          },
                          l,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function OA() {
  return x.jsx(x.Fragment, {
    children: x.jsx("section", {
      className: "py-20 bg-linear-to-br from-slate-50 to-blue-50",
      children: x.jsxs("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          x.jsxs("div", {
            className: "text-center mb-16",
            children: [
              x.jsxs("h2", {
                className: "text-3xl sm:text-4xl font-bold mb-4 text-slate-900",
                children: [
                  "Sua Jornada de ",
                  x.jsx("span", {
                    className: "text-blue-600",
                    children: "Transformação Profissional ",
                  }),
                ],
              }),
              x.jsx("p", {
                className: "text-xl text-slate-600 mb-4",
                children:
                  "Do zero ao desenvolvedor ADVPL completo em 5 etapas estratégicas",
              }),
              x.jsx("p", {
                className: "text-slate-600 max-w-3xl mx-auto",
                children:
                  "Cada módulo foi cuidadosamente planejado para construir suas habilidades de forma progressiva. Você começará criando seu ambiente profissional e terminará desenvolvendo integrações completas com APIs REST, exatamente como fazem os especialistas mais bem pagos do mercado.",
              }),
            ],
          }),
          x.jsx("div", {
            className: "space-y-4",
            children: [
              {
                module: "ETAPA 1",
                title:
                  "Fundação Profissional: Construa Seu Ambiente Protheus do Zero",
                lessons: "2 aulas práticas",
                description:
                  "Este é o momento onde tudo começa. Você vai entender na prática a arquitetura que sustenta milhares de empresas no Brasil e aprender a montar um ambiente Protheus completo e funcional do absoluto zero.",
                topics: [
                  "Monte o servidor de aplicação (Appserver) como um profissional",
                  "Configure o gestor de banco de dados (DBAccess) sem depender de ninguém",
                  "Crie e conecte bases de dados SQL do jeito certo",
                  "Entenda a estrutura de diretórios e tabelas que você usará em toda sua carreira",
                ],
                benefit:
                  "Ao final desta etapa, você terá seu próprio laboratório Protheus funcionando – a mesma infraestrutura usada em grandes empresas.",
              },
              {
                module: "ETAPA 2",
                title:
                  "Domínio do Sistema: Administre o Protheus Como um Especialista",
                lessons: "4 aulas práticas",
                description:
                  "Agora você vai assumir o controle total do sistema. Aprenda a gerenciar usuários, criar estruturas de dados e personalizar o Protheus através do poderoso Configurador.",
                topics: [
                  "Gerencie usuários, grupos e políticas de segurança como um administrador sênior",
                  "Crie e manipule tabelas, campos e parâmetros customizados",
                  "Implemente gatilhos automáticos que economizam horas de trabalho manual",
                  "Estruture menus personalizados para diferentes perfis de usuários",
                  "Domine validações e consultas padrão que garantem qualidade dos dados",
                ],
                benefit:
                  "Você sai desta etapa capaz de customizar o ambiente Protheus sem precisar de TI externa – uma habilidade que empresas pagam muito bem.",
              },
              {
                module: "ETAPA 3",
                title:
                  "Primeiras Linhas de Código: Escreva Seus Primeiros Programas ADVPL",
                lessons: "2 aulas práticas",
                description:
                  "Chegou a hora de programar de verdade. Configure suas ferramentas de desenvolvimento e escreva suas primeiras User Functions que vão rodar em produção.",
                topics: [
                  "Configure o Visual Studio Code como um ambiente profissional de desenvolvimento",
                  "Organize pastas, fontes e ambientes seguindo padrões de mercado",
                  "Crie suas primeiras User Functions e entenda declaração de variáveis",
                  "Acesse e manipule dados diretamente das tabelas do Protheus",
                ],
                benefit:
                  "Nesta etapa você deixa de ser apenas usuário e se torna desenvolvedor – capaz de criar soluções customizadas.",
              },
              {
                module: "ETAPA 4",
                title:
                  "Desenvolvimento Avançado: Crie Customizações que Impressionam",
                lessons: "6 aulas práticas",
                description:
                  "O momento mais poderoso do curso. Você vai trabalhar com estruturas de controle, criar relatórios profissionais e aprender a modificar o comportamento padrão do Protheus através de Pontos de Entrada.",
                topics: [
                  "Implemente lógicas complexas com condicionais (IF/ELSE, DO CASE) e loops (FOR, WHILE)",
                  "Desenvolva relatórios personalizados com TReport e FWMSPrinter",
                  "Exporte dados inteligentes para Excel com formatação profissional",
                  "Use Pontos de Entrada para adicionar regras de negócio específicas",
                  "Domine Pontos de Entrada MVC para customizações avançadas",
                  "Crie telas e objetos gráficos que transformam a experiência do usuário",
                ],
                benefit:
                  "Aqui você se torna capaz de atender demandas reais de empresas: relatórios sob medida, exportações automáticas e customizações que resolvem problemas específicos do negócio.",
              },
              {
                module: "ETAPA 5",
                title:
                  "Integração e Profissionalização: Conecte o Protheus ao Mundo",
                lessons: "4 aulas práticas",
                description:
                  "O diferencial que separa desenvolvedores comuns de especialistas valorizados. Aprenda a integrar o Protheus com sistemas externos, criar APIs REST e usar as técnicas mais modernas de desenvolvimento.",
                topics: [
                  "Automatize processos complexos com EXECAUTO",
                  "Desenvolva APIs REST para integração com outros sistemas",
                  "Aplique Orientação a Objetos para códigos mais organizados e reutilizáveis",
                  "Domine TLPP (a evolução moderna do ADVPL)",
                  "Use VS Code com todo seu potencial para debugging e produtividade",
                ],
                benefit:
                  "Esta é a etapa que te coloca no topo do mercado: capaz de criar integrações, trabalhar com tecnologias modernas e entregar soluções que conectam o Protheus a qualquer sistema.",
              },
            ].map((a, l) =>
              x.jsxs(
                Le.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: l * 0.05 },
                  viewport: { once: !0 },
                  className:
                    "bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all",
                  children: [
                    x.jsx("div", {
                      className:
                        "flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4",
                      children: x.jsxs("div", {
                        className: "flex items-start gap-4",
                        children: [
                          x.jsx("div", {
                            className:
                              "bg-linear-to-br from-blue-600 to-blue-700 text-white w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl shrink-0 shadow-lg",
                            children: l + 1,
                          }),
                          x.jsxs("div", {
                            className: "flex-1",
                            children: [
                              x.jsx("div", {
                                className:
                                  "text-sm text-blue-600 font-bold mb-1",
                                children: a.module,
                              }),
                              x.jsx("h3", {
                                className:
                                  "font-bold text-xl text-slate-900 mb-2",
                                children: a.title,
                              }),
                              x.jsxs("div", {
                                className:
                                  "flex items-center gap-2 text-slate-500 mb-3",
                                children: [
                                  x.jsx(gg, { className: "w-4 h-4" }),
                                  x.jsx("span", {
                                    className: "text-sm font-medium",
                                    children: a.lessons,
                                  }),
                                ],
                              }),
                              x.jsx("p", {
                                className:
                                  "text-slate-600 mb-4 leading-relaxed",
                                children: a.description,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    x.jsxs("div", {
                      className: "bg-blue-50 rounded-lg p-4 mb-4",
                      children: [
                        x.jsxs("h4", {
                          className:
                            "font-semibold text-slate-900 mb-3 flex items-center gap-2",
                          children: [
                            x.jsx(bg, { className: "w-4 h-4 text-blue-600" }),
                            "O que você vai aprender:",
                          ],
                        }),
                        x.jsx("ul", {
                          className: "space-y-2",
                          children: a.topics.map((o, u) =>
                            x.jsxs(
                              "li",
                              {
                                className: "flex items-start gap-2 text-sm",
                                children: [
                                  x.jsx(ba, {
                                    className:
                                      "w-4 h-4 text-green-600 shrink-0 mt-0.5",
                                  }),
                                  x.jsx("span", {
                                    className: "text-slate-700",
                                    children: o,
                                  }),
                                ],
                              },
                              u,
                            ),
                          ),
                        }),
                      ],
                    }),
                    x.jsx("div", {
                      className:
                        "bg-green-50 border-l-4 border-green-500 p-4 rounded",
                      children: x.jsxs("p", {
                        className: "text-sm text-slate-700",
                        children: [
                          x.jsx("strong", {
                            className: "text-green-700",
                            children: "💡 Resultado Prático:",
                          }),
                          " ",
                          a.benefit,
                        ],
                      }),
                    }),
                  ],
                },
                l,
              ),
            ),
          }),
          x.jsxs(Le.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            className:
              "mt-12 bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-2xl p-8 sm:p-12",
            children: [
              x.jsxs("div", {
                className: "text-center mb-8",
                children: [
                  x.jsx(Sg, {
                    className: "w-16 h-16 text-yellow-400 mx-auto mb-4",
                  }),
                  x.jsx("h3", {
                    className: "text-2xl sm:text-3xl font-bold mb-3",
                    children: "Ao Final do Curso, Você Será Capaz de:",
                  }),
                  x.jsx("p", {
                    className: "text-slate-300 text-lg",
                    children: "Habilidades que vão transformar sua carreira",
                  }),
                ],
              }),
              x.jsx("div", {
                className: "grid sm:grid-cols-2 gap-4",
                children: [
                  "Montar e administrar ambientes Protheus completos do zero",
                  "Criar customizações e User Functions que rodam em produção",
                  "Desenvolver relatórios profissionais e exportações para Excel",
                  "Implementar regras de negócio através de Pontos de Entrada",
                  "Construir telas e interfaces gráficas personalizadas",
                  "Integrar o Protheus com sistemas externos via API REST",
                  "Automatizar processos complexos com EXECAUTO",
                  "Aplicar boas práticas de código e padrões de mercado",
                  "Debugar e otimizar programas ADVPL como um especialista",
                  "Trabalhar com TLPP e as tecnologias mais modernas do ecossistema TOTVS",
                ].map((a, l) =>
                  x.jsxs(
                    Le.div,
                    {
                      initial: { opacity: 0, x: -20 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { delay: l * 0.05 },
                      viewport: { once: !0 },
                      className:
                        "flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4",
                      children: [
                        x.jsx("div", {
                          className:
                            "bg-green-500 rounded-full p-1 flex-shrink-0",
                          children: x.jsx(ba, {
                            className: "w-4 h-4 text-white",
                          }),
                        }),
                        x.jsx("span", {
                          className: "text-slate-100",
                          children: a,
                        }),
                      ],
                    },
                    l,
                  ),
                ),
              }),
              x.jsx("div", {
                className: "mt-8 text-center",
                children: x.jsx("p", {
                  className: "text-xl text-blue-300 font-semibold",
                  children:
                    "Você sairá do curso preparado para atuar profissionalmente como Desenvolvedor ADVPL",
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
const VA = "./assets/bkg-Cx06Bp_2.webp",
  RA = "./assets/img4-XSpFOjvv.webp";
function wA() {
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx("section", {
        className: "py-20 bg-white",
        children: x.jsxs("div", {
          className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            x.jsxs("div", {
              className: "text-center mb-16",
              children: [
                x.jsx("h2", {
                  className:
                    " text-3xl sm:text-4xl font-bold mb-4 text-slate-900",
                  children: "O Que Nossos Alunos Estão Dizendo",
                }),
                x.jsx("p", {
                  className: "text-xl text-slate-600",
                  children:
                    "Resultados reais de quem já transformou sua carreira",
                }),
              ],
            }),
            x.jsx("div", {
              className: "overflow-hidden w-full pb-5",
              children: x.jsx("div", {
                className: "flex gap-6 animate-marquee w-max",
                children: [
                  {
                    name: "Diogo Dorneles",
                    role: "Desenvolvedor Advpl",
                    company: "",
                    text: "Finalizei o curso e graças a ele consegui entrar no mercado de trabalho usando a linguagem Advpl. O professor tem uma ótima didática e fornece muito apoio aos alunos. Recomendo demais!",
                    rating: 5,
                  },
                  {
                    name: "Lucas Ribeiro",
                    role: "Desenvolvedor ADVPL",
                    company: "",
                    text: "Eu sempre enxerguei o mercado de TI como algo distante, difícil de alcançar. Parecia que não era pra mim. Mas tudo começou a mudar quando decidi focar na ferramenta certa e mergulhar de verdade no curso de ADVPL. Com dedicação e consistência, fui evoluindo aos poucos — e a tão sonhada transição de carreira finalmente aconteceu. Hoje atuo como Desenvolvedor, aplicando lógica e código no dia a dia para otimizar processos e gerar resultados reais.",
                    rating: 5,
                  },
                  { name: "", role: "", company: "", text: "", rating: 5 },
                  { name: "", role: "", company: "", text: "", rating: 5 },
                  {
                    name: "Diogo Dorneles",
                    role: "Desenvolvedor Advpl",
                    company: "",
                    text: "Finalizei o curso e graças a ele consegui entrar no mercado de trabalho usando a linguagem Advpl. O professor tem uma ótima didática e fornece muito apoio aos alunos. Recomendo demais!",
                    rating: 5,
                  },
                  {
                    name: "Lucas Ribeiro",
                    role: "Desenvolvedor ADVPL",
                    company: "",
                    text: "Eu sempre enxerguei o mercado de TI como algo distante, difícil de alcançar. Parecia que não era pra mim. Mas tudo começou a mudar quando decidi focar na ferramenta certa e mergulhar de verdade no curso de ADVPL. Com dedicação e consistência, fui evoluindo aos poucos — e a tão sonhada transição de carreira finalmente aconteceu. Hoje atuo como Desenvolvedor, aplicando lógica e código no dia a dia para otimizar processos e gerar resultados reais.",
                    rating: 5,
                  },
                  { name: "", role: "", company: "", text: "", rating: 5 },
                  { name: "", role: "", company: "", text: "", rating: 5 },
                ].map((a, l) =>
                  x.jsxs(
                    "div",
                    {
                      className:
                        "bg-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-blue-300 transition-all max-w-96 shrink-0",
                      children: [
                        x.jsx("div", {
                          className: "flex gap-1 mb-4",
                          children: [...Array(a.rating)].map((o, u) =>
                            x.jsx(
                              xg,
                              {
                                className:
                                  "w-5 h-5 text-yellow-400 fill-yellow-400",
                              },
                              u,
                            ),
                          ),
                        }),
                        x.jsxs("p", {
                          className: "text-slate-700 mb-6 italic",
                          children: ['"', a.text, '"'],
                        }),
                        x.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            x.jsx("div", {
                              className:
                                "w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold",
                              children: a.name
                                .split(" ")
                                .map((o) => o[0])
                                .join(""),
                            }),
                            x.jsxs("div", {
                              children: [
                                x.jsx("div", {
                                  className: "font-bold text-slate-900",
                                  children: a.name,
                                }),
                                x.jsx("div", {
                                  className: "text-sm text-slate-600",
                                  children: a.role,
                                }),
                                x.jsx("div", {
                                  className:
                                    "text-xs text-green-600 font-semibold",
                                  children: a.company,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    l,
                  ),
                ),
              }),
            }),
          ],
        }),
      }),
      x.jsx("section", {
        className:
          "bg-linear-to-r from-blue-950 from-60% to-blue-900 relative overflow-hidden",
        children: x.jsx("div", {
          className: "relative w-full bg-center bg-no-repeat bg-contain",
          style: {
            backgroundImage: `url(${VA})`,
            minHeight: "600px",
            maxHeight: "800px",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, black 60%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskComposite: "source-in",
          },
          children: x.jsx("div", {
            className:
              "py-20 text-white bg-[radial-gradient(at_0%_0%,transparent_20%,rgba(6,17,66,0.9)_40%,rgba(10,28,107,0.9)_55%,#1e3a8a_70%)]",
            children: x.jsx("div", {
              className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
              children: x.jsxs("div", {
                className: "grid md:grid-cols-2 gap-12 items-center",
                children: [
                  x.jsx(Le.div, {
                    initial: { opacity: 0, x: -20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 1.5 },
                    children: x.jsx("img", {
                      src: RA,
                      alt: "Instrutor",
                      className: "w-full h-auto",
                      style: {
                        maskImage:
                          "linear-gradient(to bottom, black 60%, transparent 100%)",
                        WebkitMaskImage:
                          "linear-gradient(to bottom, black 60%, transparent 100%)",
                      },
                    }),
                  }),
                  x.jsxs("div", {
                    children: [
                      x.jsx("div", {
                        className:
                          "inline-block bg-blue-500 px-4 py-2 rounded-full font-semibold mb-4",
                        children: "SEU INSTRUTOR",
                      }),
                      x.jsxs("h2", {
                        className: "text-3xl sm:text-4xl font-bold mb-6",
                        children: [
                          "Aprenda com Quem",
                          " ",
                          x.jsx("span", {
                            className: "text-blue-400",
                            children: "Realmente Trabalha",
                          }),
                          " ",
                          "com Protheus",
                        ],
                      }),
                      x.jsxs("p", {
                        className: "text-lg text-slate-300 mb-6",
                        children: [
                          "Olá! Sou ",
                          x.jsx("strong", { children: "Luiz Otávio" }),
                          ", desenvolvedor e consultor TOTVS há mais de 15 anos.",
                        ],
                      }),
                      x.jsx("div", {
                        className: "space-y-4 mb-8",
                        children: [
                          "+15 anos de experiência com TOTVS Protheus",
                          "+100 projetos de customização entregues",
                          "Especialista certificado TOTVS",
                          "Atuação em empresas de médio e grande porte",
                        ].map((a, l) =>
                          x.jsxs(
                            "div",
                            {
                              className: "flex items-start gap-3",
                              children: [
                                x.jsx("div", {
                                  className:
                                    "bg-blue-500 rounded-full p-1 mt-1",
                                  children: x.jsx(ba, { className: "w-4 h-4" }),
                                }),
                                x.jsx("span", {
                                  className: "text-slate-200",
                                  children: a,
                                }),
                              ],
                            },
                            l,
                          ),
                        ),
                      }),
                      x.jsx("p", {
                        className: "text-slate-300 italic",
                        children:
                          '"Minha missão é simplificar o que parece complicado e mostrar que QUALQUER pessoa pode dominar ADVPL com o método certo."',
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        }),
      }),
    ],
  });
}
function _A() {
  const [a, l] = I.useState(null);
  return x.jsx(x.Fragment, {
    children: x.jsx("section", {
      className: "py-20 b-white",
      children: x.jsxs("div", {
        className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          x.jsxs("div", {
            className: "text-center mb-12",
            children: [
              x.jsx("h2", {
                className: "text-3xl sm:text-4xl font-bold mb-4 text-slate-900",
                children: "Perguntas Frequentes",
              }),
              x.jsx("p", {
                className: "text-xl text-slate-600",
                children: "Tire suas dúvidas",
              }),
            ],
          }),
          x.jsx("div", {
            className: "space-y-4",
            children: [
              {
                question: "Preciso saber programar antes de começar?",
                answer:
                  "Não! O curso foi desenhado para iniciantes completos, Começamos do absoluto zero e vamos avançado gradualmente. Se você já tem experiência com programação, vai conseguir acelerar ainda mais.",
              },
              {
                question:
                  "O curso funciona para quem nunca mexeu com Protheus?",
                answer:
                  "Sim! Ensinamos desde a instalação e configuração do ambiente até customizações avançadas. Você vai aprender tudo que precisa, do básico ao avançado.",
              },
              {
                question: "Por quanto tempo tenho acesso ao curso?",
                answer:
                  "Você terá 1 ano de acesso completo, com liberdade total para assistir, revisar e praticar quantas vezes quiser — no seu ritmo e sem pressa.",
              },
              {
                question: "Qual é a carga horária do curso?",
                answer:
                  "São 18 aulas práticas e objetivas, focadas em resultados. Cada aula ensina exatamente o que você precisa, sem enrolação. O curso é intensivo e direto ao ponto - você pode completar em 2-3 semanas dedicando algumas horas por semana.",
              },
              {
                question:
                  "O curso é muito curto? Vou aprender tudo que preciso?",
                answer:
                  "Absolutamente! Cada uma das 18 aulas foi cuidadosamente planejada para ensinar habilidades práticas que você usará no mercado. Focamos em qualidade, não em quantidade. Você sairá dominando desde instalação do ambiente até criação de APIs REST e integrações avançadas.",
              },
              {
                question: "Recebo certificado?",
                answer:
                  "Sim! Ao concluir o curso você recebe um certificado digital de conclusão que pode ser compartilhado no LinkedIn e anexado ao seu currículo.",
              },
              {
                question: "E se eu tiver dúvidas durante o curso?",
                answer:
                  "Você terá acesso ao nosso grupo privado no WhatsApp, onde poderá tirar dúvidas diretamente com os instrutores e interagir com outros alunos. Além disso, cada aula conta com uma área de comentários para perguntas mais específicas.",
              },
            ].map((o, u) =>
              x.jsxs(
                "div",
                {
                  className:
                    "border border-slate-200 rounded-lg overflow-hidden",
                  children: [
                    x.jsxs("button", {
                      onClick: () => l(a === u ? null : u),
                      className:
                        "w-full px-6 py-4 text-left flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors",
                      children: [
                        x.jsx("span", {
                          className: "font-semibold text-slate-900",
                          children: o.question,
                        }),
                        x.jsx(eA, {
                          className: `w-5 h-5 text-slate-600 transition-transform ${a === u ? "transform rotate-180" : ""}`,
                        }),
                      ],
                    }),
                    a === u &&
                      x.jsx("div", {
                        className: "px-6 py-4 bg-white",
                        children: x.jsx("p", {
                          className: "text-slate-700",
                          children: o.answer,
                        }),
                      }),
                  ],
                },
                u,
              ),
            ),
          }),
        ],
      }),
    }),
  });
}
function UA() {
  return x.jsx(x.Fragment, {
    children: x.jsx("footer", {
      className: "bg-slate-900 text-slate-400 py-8 border-t border-slate-800",
      children: x.jsxs("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
        children: [
          x.jsx("p", {
            className: "text-sm",
            children:
              "© 2026 Curso ADVPL Avançado. Todos os direitos reservados.",
          }),
          x.jsx("p", {
            className: "text-xs mt-2",
            children:
              "Este produto não garante resultados. Resultados dependem de esforço individual.",
          }),
        ],
      }),
    }),
  });
}
function BA({ scrollToCta: a }) {
  return x.jsx(x.Fragment, {
    children: x.jsxs("section", {
      className:
        "py-20 bg-linear-to-br from-blue-900 via-slate-900 to-blue-900 text-white relative overflow-y-hidden",
      children: [
        x.jsxs("div", {
          className: "absolute inset-0 opacity-10",
          children: [
            x.jsx("div", {
              className:
                "absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl",
            }),
            x.jsx("div", {
              className:
                "absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl",
            }),
          ],
        }),
        x.jsxs("div", {
          className:
            "relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
          children: [
            x.jsxs("h2", {
              className: "text-3xl sm:text-5xl font-bold mb-6",
              children: [
                "Não Deixe Sua Carreira",
                " ",
                x.jsx("span", {
                  className: "text-blue-400",
                  children: "Esperando",
                }),
              ],
            }),
            x.jsx("p", {
              className: "text-xl text-slate-300 mb-8 max-w-2xl mx-auto",
              children:
                "Dezenas de alunos já estão construindo suas carreiras no mercado ERP enquanto você está lendo isso. A sua vez pode começar agora.",
            }),
            x.jsx("div", {
              className:
                "flex flex-col sm:flex-row gap-4 justify-center items-center mb-8",
              children: x.jsxs("button", {
                onClick: a,
                className:
                  "bg-linear-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-5 rounded-xl text-lg font-bold shadow-2xl shadow-green-500/50 transition-all transform hover:scale-105 flex items-center gap-3",
                children: [
                  x.jsx(ho, { className: "w-5 h-5" }),
                  " SIM, QUERO GARANTIR MINHA VAGA",
                ],
              }),
            }),
            x.jsxs("div", {
              className:
                "flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400",
              children: [
                x.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    x.jsx(tf, { className: "w-4 h-4" }),
                    x.jsx("span", { children: "Compra 100% Segura" }),
                  ],
                }),
                x.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    x.jsx(gg, { className: "w-4 h-4" }),
                    x.jsx("span", { children: "Acesso Imediato" }),
                  ],
                }),
                x.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    x.jsx(gA, { className: "w-4 h-4" }),
                    x.jsx("span", { children: "Método Validado e Prático" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function LA() {
  const [a, l] = I.useState(null),
    o = () => {
      document
        .getElementById("offer-section")
        ?.scrollIntoView({ behavior: "smooth" });
    };
  return x.jsxs("div", {
    className: "min-h-screen bg-slate-50",
    children: [
      x.jsx(DA, {}),
      x.jsx(CA, {}),
      x.jsx(zA, {}),
      x.jsx(OA, {}),
      x.jsx(wA, {}),
      x.jsx(NA, {}),
      x.jsx(_A, { openFaq: a, setOpenFaq: l }),
      x.jsx(BA, { scrollToCta: o }),
      x.jsx(UA, {}),
    ],
  });
}
tx.createRoot(document.getElementById("root")).render(
  x.jsx(I.StrictMode, { children: x.jsx(LA, {}) }),
);
