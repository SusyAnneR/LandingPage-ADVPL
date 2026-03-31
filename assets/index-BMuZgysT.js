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
function K1() {
  if (ap) return rl;
  ap = 1;
  var i = Symbol.for("react.transitional.element"),
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
      { $$typeof: i, type: u, key: d, ref: c !== void 0 ? c : null, props: h }
    );
  }
  return ((rl.Fragment = l), (rl.jsx = o), (rl.jsxs = o), rl);
}
var ip;
function J1() {
  return (ip || ((ip = 1), (Vr.exports = K1())), Vr.exports);
}
var x = J1(),
  Rr = { exports: {} },
  nt = {};
var lp;
function k1() {
  if (lp) return nt;
  lp = 1;
  var i = Symbol.for("react.transitional.element"),
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
  var _ = {
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
      (this.updater = Y || _));
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
      (this.updater = Y || _));
  }
  var P = (B.prototype = new G());
  ((P.constructor = B), L(P, H.prototype), (P.isPureReactComponent = !0));
  var F = Array.isArray;
  function lt() {}
  var W = { H: null, A: null, T: null, S: null },
    et = Object.prototype.hasOwnProperty;
  function Mt(A, U, Y) {
    var J = Y.ref;
    return {
      $$typeof: i,
      type: A,
      key: U,
      ref: J !== void 0 ? J : null,
      props: Y,
    };
  }
  function Xt(A, U) {
    return Mt(A.type, U, A.props);
  }
  function oe(A) {
    return typeof A == "object" && A !== null && A.$$typeof === i;
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
  var Je = /\/+/g;
  function Le(A, U) {
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
  function O(A, U, Y, J, at) {
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
            case i:
            case l:
              vt = !0;
              break;
            case v:
              return ((vt = A._init), O(vt(A._payload), U, Y, J, at));
          }
      }
    if (vt)
      return (
        (at = at(A)),
        (vt = J === "" ? "." + Le(A, 0) : J),
        F(at)
          ? ((Y = ""),
            vt != null && (Y = vt.replace(Je, "$&/") + "/"),
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
                    : ("" + at.key).replace(Je, "$&/") + "/") +
                  vt,
              )),
            U.push(at)),
        1
      );
    vt = 0;
    var ae = J === "" ? "." : J + ":";
    if (F(A))
      for (var _t = 0; _t < A.length; _t++)
        ((J = A[_t]), (ut = ae + Le(J, _t)), (vt += O(J, U, Y, ut, at)));
    else if (((_t = V(A)), typeof _t == "function"))
      for (A = _t.call(A), _t = 0; !(J = A.next()).done; )
        ((J = J.value), (ut = ae + Le(J, _t++)), (vt += O(J, U, Y, ut, at)));
    else if (ut === "object") {
      if (typeof A.then == "function") return O(ue(A), U, Y, J, at);
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
    var J = [],
      at = 0;
    return (
      O(A, J, "", "", function (ut) {
        return U.call(Y, ut, at++);
      }),
      J
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
      var J = L({}, A.props),
        at = A.key;
      if (U != null)
        for (ut in (U.key !== void 0 && (at = "" + U.key), U))
          !et.call(U, ut) ||
            ut === "key" ||
            ut === "__self" ||
            ut === "__source" ||
            (ut === "ref" && U.ref === void 0) ||
            (J[ut] = U[ut]);
      var ut = arguments.length - 2;
      if (ut === 1) J.children = Y;
      else if (1 < ut) {
        for (var vt = Array(ut), ae = 0; ae < ut; ae++)
          vt[ae] = arguments[ae + 2];
        J.children = vt;
      }
      return Mt(A.type, at, J);
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
      var J,
        at = {},
        ut = null;
      if (U != null)
        for (J in (U.key !== void 0 && (ut = "" + U.key), U))
          et.call(U, J) &&
            J !== "key" &&
            J !== "__self" &&
            J !== "__source" &&
            (at[J] = U[J]);
      var vt = arguments.length - 2;
      if (vt === 1) at.children = Y;
      else if (1 < vt) {
        for (var ae = Array(vt), _t = 0; _t < vt; _t++)
          ae[_t] = arguments[_t + 2];
        at.children = ae;
      }
      if (A && A.defaultProps)
        for (J in ((vt = A.defaultProps), vt))
          at[J] === void 0 && (at[J] = vt[J]);
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
        var J = A(),
          at = W.S;
        (at !== null && at(Y, J),
          typeof J == "object" &&
            J !== null &&
            typeof J.then == "function" &&
            J.then(lt, st));
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
  _r = { exports: {} },
  cl = {},
  wr = { exports: {} },
  Ur = {};
var op;
function P1() {
  return (
    op ||
      ((op = 1),
      (function (i) {
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
                J = U + 1,
                at = O[J];
              if (0 > c(Y, Q))
                J < ht && 0 > c(at, Y)
                  ? ((O[st] = at), (O[J] = Q), (st = J))
                  : ((O[st] = Y), (O[U] = Q), (st = U));
              else if (J < ht && 0 > c(at, Q))
                ((O[st] = at), (O[J] = Q), (st = J));
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
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var h = performance;
          i.unstable_now = function () {
            return h.now();
          };
        } else {
          var d = Date,
            y = d.now();
          i.unstable_now = function () {
            return d.now() - y;
          };
        }
        var g = [],
          p = [],
          v = 1,
          b = null,
          E = 3,
          V = !1,
          _ = !1,
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
          if (((L = !1), P(O), !_))
            if (o(g) !== null) ((_ = !0), lt || ((lt = !0), Bt()));
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
          return X ? !0 : !(i.unstable_now() - Mt < et);
        }
        function oe() {
          if (((X = !1), lt)) {
            var O = i.unstable_now();
            Mt = O;
            var q = !0;
            try {
              t: {
                ((_ = !1), L && ((L = !1), G(W), (W = -1)), (V = !0));
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
                        if (((O = i.unstable_now()), typeof ht == "function")) {
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
          var Je = new MessageChannel(),
            Le = Je.port2;
          ((Je.port1.onmessage = oe),
            (Bt = function () {
              Le.postMessage(null);
            }));
        } else
          Bt = function () {
            H(oe, 0);
          };
        function ue(O, q) {
          W = H(function () {
            O(i.unstable_now());
          }, q);
        }
        ((i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (i.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (et = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return E;
          }),
          (i.unstable_next = function (O) {
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
          (i.unstable_requestPaint = function () {
            X = !0;
          }),
          (i.unstable_runWithPriority = function (O, q) {
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
          (i.unstable_scheduleCallback = function (O, q, Q) {
            var st = i.unstable_now();
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
                  _ || V || ((_ = !0), lt || ((lt = !0), Bt()))),
              O
            );
          }),
          (i.unstable_shouldYield = Xt),
          (i.unstable_wrapCallback = function (O) {
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
function F1() {
  return (up || ((up = 1), (wr.exports = P1())), wr.exports);
}
var Br = { exports: {} },
  ee = {};
var rp;
function W1() {
  if (rp) return ee;
  rp = 1;
  var i = Ec();
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
  var d = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
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
function $1() {
  if (cp) return Br.exports;
  cp = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return (i(), (Br.exports = W1()), Br.exports);
}
var fp;
function I1() {
  if (fp) return cl;
  fp = 1;
  var i = F1(),
    l = Ec(),
    o = $1();
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
    for (var n = t, a = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (((a = s.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === n) return (g(s), t);
          if (r === a) return (g(s), e);
          r = r.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== a.return) ((n = s), (a = r));
      else {
        for (var f = !1, m = s.child; m; ) {
          if (m === n) {
            ((f = !0), (n = s), (a = r));
            break;
          }
          if (m === a) {
            ((f = !0), (a = s), (n = r));
            break;
          }
          m = m.sibling;
        }
        if (!f) {
          for (m = r.child; m; ) {
            if (m === n) {
              ((f = !0), (n = r), (a = s));
              break;
            }
            if (m === a) {
              ((f = !0), (a = r), (n = s));
              break;
            }
            m = m.sibling;
          }
          if (!f) throw Error(u(189));
        }
      }
      if (n.alternate !== a) throw Error(u(190));
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
    _ = Symbol.for("react.portal"),
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
  var Je = Symbol.for("react.client.reference");
  function Le(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Je ? null : t.displayName || t.name || null;
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
        case _:
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
            e !== null ? e : Le(t.type) || "Memo"
          );
        case et:
          ((e = t._payload), (t = t._init));
          try {
            return Le(t(e));
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
  var J = A(null),
    at = A(null),
    ut = A(null),
    vt = A(null);
  function ae(t, e) {
    switch ((Y(ut, e), Y(at, t), Y(J, null), e.nodeType)) {
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
    (U(J), Y(J, t));
  }
  function _t() {
    (U(J), U(at), U(ut));
  }
  function yi(t) {
    t.memoizedState !== null && Y(vt, t);
    var e = J.current,
      n = Nm(e, t.type);
    e !== n && (Y(at, t), Y(J, n));
  }
  function Nl(t) {
    (at.current === t && (U(J), U(at)),
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
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var w = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(w.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(w, []);
                } catch (j) {
                  var C = j;
                }
                Reflect.construct(t, [], w);
              } else {
                try {
                  w.call();
                } catch (j) {
                  C = j;
                }
                t.call(w.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                C = j;
              }
              (w = t()) &&
                typeof w.catch == "function" &&
                w.catch(function () {});
            }
          } catch (j) {
            if (j && C && typeof j.stack == "string") return [j.stack, C.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      s &&
        s.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var r = a.DetermineComponentFrameRoot(),
        f = r[0],
        m = r[1];
      if (f && m) {
        var S = f.split(`
`),
          N = m.split(`
`);
        for (
          s = a = 0;
          a < S.length && !S[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; s < N.length && !N[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (a === S.length || s === N.length)
          for (
            a = S.length - 1, s = N.length - 1;
            1 <= a && 0 <= s && S[a] !== N[s];
          )
            s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (S[a] !== N[s]) {
            if (a !== 1 || s !== 1)
              do
                if ((a--, s--, 0 > s || S[a] !== N[s])) {
                  var z =
                    `
` + S[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      z.includes("<anonymous>") &&
                      (z = z.replace("<anonymous>", t.displayName)),
                    z
                  );
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      ((po = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : "") ? Fn(n) : "";
  }
  function Ag(t, e) {
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
      do ((e += Ag(t, n)), (n = t), (t = t.return));
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var go = Object.prototype.hasOwnProperty,
    vo = i.unstable_scheduleCallback,
    xo = i.unstable_cancelCallback,
    Eg = i.unstable_shouldYield,
    Mg = i.unstable_requestPaint,
    ye = i.unstable_now,
    Dg = i.unstable_getCurrentPriorityLevel,
    af = i.unstable_ImmediatePriority,
    lf = i.unstable_UserBlockingPriority,
    Cl = i.unstable_NormalPriority,
    Ng = i.unstable_LowPriority,
    sf = i.unstable_IdlePriority,
    Cg = i.log,
    jg = i.unstable_setDisableYieldValue,
    gi = null,
    ge = null;
  function Sn(t) {
    if (
      (typeof Cg == "function" && jg(t),
      ge && typeof ge.setStrictMode == "function")
    )
      try {
        ge.setStrictMode(gi, t);
      } catch {}
  }
  var ve = Math.clz32 ? Math.clz32 : Vg,
    zg = Math.log,
    Og = Math.LN2;
  function Vg(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((zg(t) / Og) | 0)) | 0);
  }
  var jl = 256,
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
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var s = 0,
      r = t.suspendedLanes,
      f = t.pingedLanes;
    t = t.warmLanes;
    var m = a & 134217727;
    return (
      m !== 0
        ? ((a = m & ~r),
          a !== 0
            ? (s = Wn(a))
            : ((f &= m),
              f !== 0
                ? (s = Wn(f))
                : n || ((n = m & ~t), n !== 0 && (s = Wn(n)))))
        : ((m = a & ~r),
          m !== 0
            ? (s = Wn(m))
            : f !== 0
              ? (s = Wn(f))
              : n || ((n = a & ~t), n !== 0 && (s = Wn(n)))),
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
  function Rg(t, e) {
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
  function _g(t, e, n, a, s, r) {
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
        w = 1 << z;
      ((m[z] = 0), (S[z] = -1));
      var C = N[z];
      if (C !== null)
        for (N[z] = null, z = 0; z < C.length; z++) {
          var j = C[z];
          j !== null && (j.lane &= -536870913);
        }
      n &= ~w;
    }
    (a !== 0 && uf(t, a, 0),
      r !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(f & ~e)));
  }
  function uf(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var a = 31 - ve(e);
    ((t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (n & 261930)));
  }
  function rf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var a = 31 - ve(n),
        s = 1 << a;
      ((s & e) | (t[a] & e) && (t[a] |= e), (n &= ~s));
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
    Ug = "__reactHandles$" + Tn,
    hf = "__reactResources$" + Tn,
    bi = "__reactMarker$" + Tn;
  function Eo(t) {
    (delete t[Pt], delete t[re], delete t[Ao], delete t[wg], delete t[Ug]);
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
          for (t = _m(t); t !== null; ) {
            if ((n = t[Pt])) return n;
            t = _m(t);
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
  function Kt(t) {
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
  var Bg = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    yf = {},
    gf = {};
  function Lg(t) {
    return go.call(gf, t)
      ? !0
      : go.call(yf, t)
        ? !1
        : Bg.test(t)
          ? (gf[t] = !0)
          : ((yf[t] = !0), !1);
  }
  function Rl(t, e, n) {
    if (Lg(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function _l(t, e, n) {
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
  function en(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + a);
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
  function Hg(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var s = a.get,
        r = a.set;
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
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
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
      t._valueTracker = Hg(t, e, "" + t[e]);
    }
  }
  function xf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      a = "";
    return (
      t && (a = vf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function wl(t) {
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
  var qg = /[\n"\\]/g;
  function Ne(t) {
    return t.replace(qg, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Do(t, e, n, a, s, r, f, m) {
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
          : a != null && t.removeAttribute("value"),
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
  function bf(t, e, n, a, s, r, f, m) {
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
    ((a = a ?? s),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = m ? t.checked : !!a),
      (t.defaultChecked = !!a),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (t.name = f),
      Mo(t));
  }
  function No(t, e, n) {
    (e === "number" && wl(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Da(t, e, n, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        ((s = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== s && (t[n].selected = s),
          s && a && (t[n].defaultSelected = !0));
    } else {
      for (n = "" + De(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          ((t[s].selected = !0), a && (t[s].defaultSelected = !0));
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
  function Tf(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(u(92));
        if (ue(a)) {
          if (1 < a.length) throw Error(u(93));
          a = a[0];
        }
        n = a;
      }
      (n == null && (n = ""), (e = n));
    }
    ((n = De(e)),
      (t.defaultValue = n),
      (a = t.textContent),
      a === n && a !== "" && a !== null && (t.value = a),
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
  var Yg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Af(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : a
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || Yg.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function Ef(t, e, n) {
    if (e != null && typeof e != "object") throw Error(u(62));
    if (((t = t.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
              ? (t.cssFloat = "")
              : (t[a] = ""));
      for (var s in e)
        ((a = e[s]), e.hasOwnProperty(s) && n[s] !== a && Af(t, s, a));
    } else for (var r in e) e.hasOwnProperty(r) && Af(t, r, e[r]);
  }
  function Co(t) {
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
  var Gg = new Map([
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
    Xg =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ul(t) {
    return Xg.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function nn() {}
  var jo = null;
  function zo(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ca = null,
    ja = null;
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
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var s = a[re] || null;
                if (!s) throw Error(u(90));
                Do(
                  a,
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
              ((a = n[e]), a.form === t.form && xf(a));
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
      var a = t(e);
      return a;
    } finally {
      if (
        ((Oo = !1),
        (Ca !== null || ja !== null) &&
          (As(), Ca && ((e = Ca), (t = ja), (ja = Ca = null), Mf(e), t)))
      )
        for (e = 0; e < t.length; e++) Mf(t[e]);
    }
  }
  function Ti(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[re] || null;
    if (a === null) return null;
    n = a[e];
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
        ((a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a));
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
      a,
      s = "value" in An ? An.value : An.textContent,
      r = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var f = n - t;
    for (a = 1; a <= f && e[n - a] === s[r - a]; a++);
    return (Bl = s.slice(t, 1 < a ? 1 - a : void 0));
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
  function Cf() {
    return !1;
  }
  function ce(t) {
    function e(n, a, s, r, f) {
      ((this._reactName = n),
        (this._targetInst = s),
        (this.type = a),
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
          : Cf),
        (this.isPropagationStopped = Cf),
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
    Qg = ce(Ei),
    _o,
    wo,
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
                ? ((_o = t.screenX - Mi.screenX), (wo = t.screenY - Mi.screenY))
                : (wo = _o = 0),
              (Mi = t)),
            _o);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : wo;
      },
    }),
    jf = ce(Yl),
    Zg = b({}, Yl, { dataTransfer: 0 }),
    Kg = ce(Zg),
    Jg = b({}, Ei, { relatedTarget: 0 }),
    Uo = ce(Jg),
    kg = b({}, In, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Pg = ce(kg),
    Fg = b({}, In, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Wg = ce(Fg),
    $g = b({}, In, { data: 0 }),
    zf = ce($g),
    Ig = {
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
    tv = {
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
    ev = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function nv(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = ev[t])
        ? !!e[t]
        : !1;
  }
  function Bo() {
    return nv;
  }
  var av = b({}, Ei, {
      key: function (t) {
        if (t.key) {
          var e = Ig[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Ll(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? tv[t.keyCode] || "Unidentified"
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
    iv = ce(av),
    lv = b({}, Yl, {
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
    Of = ce(lv),
    sv = b({}, Ei, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Bo,
    }),
    ov = ce(sv),
    uv = b({}, In, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    rv = ce(uv),
    cv = b({}, Yl, {
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
    fv = ce(cv),
    dv = b({}, In, { newState: 0, oldState: 0 }),
    hv = ce(dv),
    mv = [9, 13, 27, 32],
    Lo = an && "CompositionEvent" in window,
    Di = null;
  an && "documentMode" in document && (Di = document.documentMode);
  var pv = an && "TextEvent" in window && !Di,
    Vf = an && (!Lo || (Di && 8 < Di && 11 >= Di)),
    Rf = " ",
    _f = !1;
  function wf(t, e) {
    switch (t) {
      case "keyup":
        return mv.indexOf(e.keyCode) !== -1;
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
  function yv(t, e) {
    switch (t) {
      case "compositionend":
        return Uf(e);
      case "keypress":
        return e.which !== 32 ? null : ((_f = !0), Rf);
      case "textInput":
        return ((t = e.data), t === Rf && _f ? null : t);
      default:
        return null;
    }
  }
  function gv(t, e) {
    if (za)
      return t === "compositionend" || (!Lo && wf(t, e))
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
  var vv = {
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
    return e === "input" ? !!vv[t.type] : e === "textarea";
  }
  function Lf(t, e, n, a) {
    (Ca ? (ja ? ja.push(a) : (ja = [a])) : (Ca = a),
      (e = zs(e, "onChange")),
      0 < e.length &&
        ((n = new ql("onChange", "change", null, n, a)),
        t.push({ event: n, listeners: e })));
  }
  var Ni = null,
    Ci = null;
  function xv(t) {
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
    Ni && (Ni.detachEvent("onpropertychange", Xf), (Ci = Ni = null));
  }
  function Xf(t) {
    if (t.propertyName === "value" && Gl(Ci)) {
      var e = [];
      (Lf(e, Ci, t, zo(t)), Df(xv, e));
    }
  }
  function bv(t, e, n) {
    t === "focusin"
      ? (Gf(), (Ni = e), (Ci = n), Ni.attachEvent("onpropertychange", Xf))
      : t === "focusout" && Gf();
  }
  function Sv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Gl(Ci);
  }
  function Tv(t, e) {
    if (t === "click") return Gl(e);
  }
  function Av(t, e) {
    if (t === "input" || t === "change") return Gl(e);
  }
  function Ev(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var xe = typeof Object.is == "function" ? Object.is : Ev;
  function ji(t, e) {
    if (xe(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var s = n[a];
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
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (((a = t + n.textContent.length), t <= e && a >= e))
          return { node: n, offset: e - t };
        t = a;
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
  function Jf(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = wl(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = wl(t.document);
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
  var Mv = an && "documentMode" in document && 11 >= document.documentMode,
    Oa = null,
    Go = null,
    zi = null,
    Xo = !1;
  function kf(t, e, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Xo ||
      Oa == null ||
      Oa !== wl(a) ||
      ((a = Oa),
      "selectionStart" in a && Yo(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (zi && ji(zi, a)) ||
        ((zi = a),
        (a = zs(Go, "onSelect")),
        0 < a.length &&
          ((e = new ql("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: a }),
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
    Dv = ea("transitionrun"),
    Nv = ea("transitionstart"),
    Cv = ea("transitioncancel"),
    If = ea("transitionend"),
    td = new Map(),
    Zo =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Zo.push("scrollEnd");
  function He(t, e) {
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
    Ce = [],
    Ra = 0,
    Ko = 0;
  function Ql() {
    for (var t = Ra, e = (Ko = Ra = 0); e < t; ) {
      var n = Ce[e];
      Ce[e++] = null;
      var a = Ce[e];
      Ce[e++] = null;
      var s = Ce[e];
      Ce[e++] = null;
      var r = Ce[e];
      if (((Ce[e++] = null), a !== null && s !== null)) {
        var f = a.pending;
        (f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)),
          (a.pending = s));
      }
      r !== 0 && ed(n, s, r);
    }
  }
  function Zl(t, e, n, a) {
    ((Ce[Ra++] = t),
      (Ce[Ra++] = e),
      (Ce[Ra++] = n),
      (Ce[Ra++] = a),
      (Ko |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a));
  }
  function Jo(t, e, n, a) {
    return (Zl(t, e, n, a), Kl(t));
  }
  function na(t, e) {
    return (Zl(t, null, null, e), Kl(t));
  }
  function ed(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var s = !1, r = t.return; r !== null; )
      ((r.childLanes |= n),
        (a = r.alternate),
        a !== null && (a.childLanes |= n),
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
          (a = t[s]),
          a === null ? (t[s] = [e]) : a.push(e),
          (e.lane = n | 536870912)),
        r)
      : null;
  }
  function Kl(t) {
    if (50 < $i) throw (($i = 0), (nr = null), Error(u(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var _a = {};
  function jv(t, e, n, a) {
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
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function be(t, e, n, a) {
    return new jv(t, e, n, a);
  }
  function ko(t) {
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
  function Jl(t, e, n, a, s, r) {
    var f = 0;
    if (((a = t), typeof t == "function")) ko(t) && (f = 1);
    else if (typeof t == "string")
      f = _1(t, n, J.current)
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
                ((f = 16), (a = null));
                break t;
            }
          ((f = 29),
            (n = Error(u(130, t === null ? "null" : typeof t, ""))),
            (a = null));
      }
    return (
      (e = be(f, n, e, s)),
      (e.elementType = t),
      (e.type = a),
      (e.lanes = r),
      e
    );
  }
  function aa(t, e, n, a) {
    return ((t = be(7, t, a, e)), (t.lanes = n), t);
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
  function je(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = id.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: nf(e) }), id.set(t, e), e);
    }
    return { value: t, source: e, stack: nf(e) };
  }
  var wa = [],
    Ua = 0,
    kl = null,
    Oi = 0,
    ze = [],
    Oe = 0,
    En = null,
    ke = 1,
    Pe = "";
  function sn(t, e) {
    ((wa[Ua++] = Oi), (wa[Ua++] = kl), (kl = t), (Oi = e));
  }
  function ld(t, e, n) {
    ((ze[Oe++] = ke), (ze[Oe++] = Pe), (ze[Oe++] = En), (En = t));
    var a = ke;
    t = Pe;
    var s = 32 - ve(a) - 1;
    ((a &= ~(1 << s)), (n += 1));
    var r = 32 - ve(e) + s;
    if (30 < r) {
      var f = s - (s % 5);
      ((r = (a & ((1 << f) - 1)).toString(32)),
        (a >>= f),
        (s -= f),
        (ke = (1 << (32 - ve(e) + s)) | (n << s) | a),
        (Pe = r + t));
    } else ((ke = (1 << r) | (n << s) | a), (Pe = t));
  }
  function Wo(t) {
    t.return !== null && (sn(t, 1), ld(t, 1, 0));
  }
  function $o(t) {
    for (; t === kl; )
      ((kl = wa[--Ua]), (wa[Ua] = null), (Oi = wa[--Ua]), (wa[Ua] = null));
    for (; t === En; )
      ((En = ze[--Oe]),
        (ze[Oe] = null),
        (Pe = ze[--Oe]),
        (ze[Oe] = null),
        (ke = ze[--Oe]),
        (ze[Oe] = null));
  }
  function sd(t, e) {
    ((ze[Oe++] = ke),
      (ze[Oe++] = Pe),
      (ze[Oe++] = En),
      (ke = e.id),
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
    throw (Vi(je(e, t)), Io);
  }
  function od(t) {
    var e = t.stateNode,
      n = t.type,
      a = t.memoizedProps;
    switch (((e[Pt] = t), (e[re] = a), n)) {
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
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        ct("invalid", e);
        break;
      case "textarea":
        (ct("invalid", e), Tf(e, a.value, a.defaultValue, a.children));
    }
    ((n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      Em(e.textContent, n)
        ? (a.popover != null && (ct("beforetoggle", e), ct("toggle", e)),
          a.onScroll != null && ct("scroll", e),
          a.onScrollEnd != null && ct("scrollend", e),
          a.onClick != null && (e.onclick = nn),
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
        : (Nt = Ft ? _e(t.stateNode.nextSibling) : null);
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
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function au(t, e, n, a) {
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
                a || (f = null));
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
  function La(t, e, n, a) {
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
    (t !== null && au(e, t, n, a), (e.flags |= 262144));
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
  var zv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                }));
            };
          },
    Ov = i.unstable_scheduleCallback,
    Vv = i.unstable_NormalPriority,
    Lt = {
      $$typeof: B,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function iu() {
    return { controller: new zv(), data: new Map(), refCount: 0 };
  }
  function Ri(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Ov(Vv, function () {
          t.controller.abort();
        }));
  }
  var _i = null,
    lu = 0,
    Ha = 0,
    qa = null;
  function Rv(t, e) {
    if (_i === null) {
      var n = (_i = []);
      ((lu = 0),
        (Ha = ur()),
        (qa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (lu++, e.then(cd, cd), e);
  }
  function cd() {
    if (--lu === 0 && _i !== null) {
      qa !== null && (qa.status = "fulfilled");
      var t = _i;
      ((_i = null), (Ha = 0), (qa = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function _v(t, e) {
    var n = [],
      a = {
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
          ((a.status = "fulfilled"), (a.value = e));
          for (var s = 0; s < n.length; s++) (0, n[s])(e);
        },
        function (s) {
          for (a.status = "rejected", a.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        },
      ),
      a
    );
  }
  var fd = O.S;
  O.S = function (t, e) {
    ((kh = ye()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        Rv(t, e),
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
              function (a) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "fulfilled"), (s.value = a));
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "rejected"), (s.reason = a));
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
    wi = 0;
  function ts(t) {
    var e = wi;
    return ((wi += 1), Ga === null && (Ga = []), md(Ga, t, e));
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
    function a(M) {
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
          : ((T = Jl(D.type, D.key, D.props, null, M.mode, R)),
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
    function w(M, T, D) {
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
              (D = Jl(T.type, T.key, T.props, null, M.mode, D)),
              Ui(D, T),
              (D.return = M),
              D
            );
          case _:
            return ((T = Fo(T, M.mode, D)), (T.return = M), T);
          case et:
            return ((T = ua(T)), w(M, T, D));
        }
        if (ue(T) || Bt(T))
          return ((T = aa(T, M.mode, D, null)), (T.return = M), T);
        if (typeof T.then == "function") return w(M, ts(T), D);
        if (T.$$typeof === B) return w(M, Fl(M, T), D);
        es(M, T);
      }
      return null;
    }
    function C(M, T, D, R) {
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
          case _:
            return D.key === $ ? N(M, T, D, R) : null;
          case et:
            return ((D = ua(D)), C(M, T, D, R));
        }
        if (ue(D) || Bt(D)) return $ !== null ? null : z(M, T, D, R, null);
        if (typeof D.then == "function") return C(M, T, ts(D), R);
        if (D.$$typeof === B) return C(M, T, Fl(M, D), R);
        es(M, D);
      }
      return null;
    }
    function j(M, T, D, R, $) {
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
          case _:
            return (
              (M = M.get(R.key === null ? D : R.key) || null),
              N(T, M, R, $)
            );
          case et:
            return ((R = ua(R)), j(M, T, D, R, $));
        }
        if (ue(R) || Bt(R))
          return ((M = M.get(D) || null), z(T, M, R, $, null));
        if (typeof R.then == "function") return j(M, T, D, ts(R), $);
        if (R.$$typeof === B) return j(M, T, D, Fl(T, R), $);
        es(T, R);
      }
      return null;
    }
    function Z(M, T, D, R) {
      for (
        var $ = null, pt = null, k = T, ot = (T = 0), dt = null;
        k !== null && ot < D.length;
        ot++
      ) {
        k.index > ot ? ((dt = k), (k = null)) : (dt = k.sibling);
        var yt = C(M, k, D[ot], R);
        if (yt === null) {
          k === null && (k = dt);
          break;
        }
        (t && k && yt.alternate === null && e(M, k),
          (T = r(yt, T, ot)),
          pt === null ? ($ = yt) : (pt.sibling = yt),
          (pt = yt),
          (k = dt));
      }
      if (ot === D.length) return (n(M, k), mt && sn(M, ot), $);
      if (k === null) {
        for (; ot < D.length; ot++)
          ((k = w(M, D[ot], R)),
            k !== null &&
              ((T = r(k, T, ot)),
              pt === null ? ($ = k) : (pt.sibling = k),
              (pt = k)));
        return (mt && sn(M, ot), $);
      }
      for (k = a(k); ot < D.length; ot++)
        ((dt = j(k, M, ot, D[ot], R)),
          dt !== null &&
            (t &&
              dt.alternate !== null &&
              k.delete(dt.key === null ? ot : dt.key),
            (T = r(dt, T, ot)),
            pt === null ? ($ = dt) : (pt.sibling = dt),
            (pt = dt)));
      return (
        t &&
          k.forEach(function (Zn) {
            return e(M, Zn);
          }),
        mt && sn(M, ot),
        $
      );
    }
    function tt(M, T, D, R) {
      if (D == null) throw Error(u(151));
      for (
        var $ = null, pt = null, k = T, ot = (T = 0), dt = null, yt = D.next();
        k !== null && !yt.done;
        ot++, yt = D.next()
      ) {
        k.index > ot ? ((dt = k), (k = null)) : (dt = k.sibling);
        var Zn = C(M, k, yt.value, R);
        if (Zn === null) {
          k === null && (k = dt);
          break;
        }
        (t && k && Zn.alternate === null && e(M, k),
          (T = r(Zn, T, ot)),
          pt === null ? ($ = Zn) : (pt.sibling = Zn),
          (pt = Zn),
          (k = dt));
      }
      if (yt.done) return (n(M, k), mt && sn(M, ot), $);
      if (k === null) {
        for (; !yt.done; ot++, yt = D.next())
          ((yt = w(M, yt.value, R)),
            yt !== null &&
              ((T = r(yt, T, ot)),
              pt === null ? ($ = yt) : (pt.sibling = yt),
              (pt = yt)));
        return (mt && sn(M, ot), $);
      }
      for (k = a(k); !yt.done; ot++, yt = D.next())
        ((yt = j(k, M, ot, yt.value, R)),
          yt !== null &&
            (t &&
              yt.alternate !== null &&
              k.delete(yt.key === null ? ot : yt.key),
            (T = r(yt, T, ot)),
            pt === null ? ($ = yt) : (pt.sibling = yt),
            (pt = yt)));
      return (
        t &&
          k.forEach(function (Z1) {
            return e(M, Z1);
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
                : ((R = Jl(D.type, D.key, D.props, null, M.mode, R)),
                  Ui(R, D),
                  (R.return = M),
                  (M = R));
            }
            return f(M);
          case _:
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
        wi = 0;
        var $ = At(M, T, D, R);
        return ((Ga = null), $);
      } catch (k) {
        if (k === Ya || k === $l) throw k;
        var pt = be(29, k, null, M.mode);
        return ((pt.lanes = R), (pt.return = M), pt);
      }
    };
  }
  var ca = gd(!0),
    vd = gd(!1),
    Cn = !1;
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
  function jn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function zn(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (gt & 2) !== 0)) {
      var s = a.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (a.pending = e),
        (e = Kl(t)),
        ed(t, null, n),
        e
      );
    }
    return (Zl(t, a, e, n), Kl(t));
  }
  function Bi(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (n |= a), (e.lanes = n), rf(t, n));
    }
  }
  function cu(t, e) {
    var n = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
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
        baseState: a.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: a.shared,
        callbacks: a.callbacks,
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
  function Hi(t, e, n, a) {
    fu = !1;
    var s = t.updateQueue;
    Cn = !1;
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
      var w = s.baseState;
      ((f = 0), (z = N = S = null), (m = r));
      do {
        var C = m.lane & -536870913,
          j = C !== m.lane;
        if (j ? (ft & C) === C : (a & C) === C) {
          (C !== 0 && C === Ha && (fu = !0),
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
            C = e;
            var At = n;
            switch (tt.tag) {
              case 1:
                if (((Z = tt.payload), typeof Z == "function")) {
                  w = Z.call(At, w, C);
                  break t;
                }
                w = Z;
                break t;
              case 3:
                Z.flags = (Z.flags & -65537) | 128;
              case 0:
                if (
                  ((Z = tt.payload),
                  (C = typeof Z == "function" ? Z.call(At, w, C) : Z),
                  C == null)
                )
                  break t;
                w = b({}, w, C);
                break t;
              case 2:
                Cn = !0;
            }
          }
          ((C = m.callback),
            C !== null &&
              ((t.flags |= 64),
              j && (t.flags |= 8192),
              (j = s.callbacks),
              j === null ? (s.callbacks = [C]) : j.push(C)));
        } else
          ((j = {
            lane: C,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null,
          }),
            z === null ? ((N = z = j), (S = w)) : (z = z.next = j),
            (f |= C));
        if (((m = m.next), m === null)) {
          if (((m = s.shared.pending), m === null)) break;
          ((j = m),
            (m = j.next),
            (j.next = null),
            (s.lastBaseUpdate = j),
            (s.shared.pending = null));
        }
      } while (!0);
      (z === null && (S = w),
        (s.baseState = S),
        (s.firstBaseUpdate = N),
        (s.lastBaseUpdate = z),
        r === null && (s.shared.lanes = 0),
        (wn |= f),
        (t.lanes = f),
        (t.memoizedState = w));
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
    (Y(wt, wt.current & 1),
      Y(Se, t),
      Re === null &&
        (e === null || Xa.current !== null || e.memoizedState !== null) &&
        (Re = t));
  }
  function mu(t) {
    (Y(wt, wt.current), Y(Se, t), Re === null && (Re = t));
  }
  function Td(t) {
    t.tag === 22
      ? (Y(wt, wt.current), Y(Se, t), Re === null && (Re = t))
      : Vn();
  }
  function Vn() {
    (Y(wt, wt.current), Y(Se, Se.current));
  }
  function Te(t) {
    (U(Se), Re === t && (Re = null), U(wt));
  }
  var wt = A(0);
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
  function yu(t, e, n, a, s, r) {
    return (
      (rn = r),
      (it = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (O.H = t === null || t.memoizedState === null ? lh : Ou),
      (fa = !1),
      (r = n(a, s)),
      (fa = !1),
      Qa && (r = Ed(e, n, a, s)),
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
  function Ed(t, e, n, a) {
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
      ((O.H = sh), (r = e(n, a)));
    } while (Qa);
    return r;
  }
  function Uv() {
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
      var a = it.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (s) {
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
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = Xt;
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
    var a = t.queue;
    if (a === null) throw Error(u(311));
    a.lastRenderedReducer = n;
    var s = t.baseQueue,
      r = a.pending;
    if (r !== null) {
      if (s !== null) {
        var f = s.next;
        ((s.next = r.next), (r.next = f));
      }
      ((e.baseQueue = s = r), (a.pending = null));
    }
    if (((r = t.baseState), s === null)) t.memoizedState = r;
    else {
      e = s.next;
      var m = (f = null),
        S = null,
        N = e,
        z = !1;
      do {
        var w = N.lane & -536870913;
        if (w !== N.lane ? (ft & w) === w : (rn & w) === w) {
          var C = N.revertLane;
          if (C === 0)
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
              w === Ha && (z = !0));
          else if ((rn & C) === C) {
            ((N = N.next), C === Ha && (z = !0));
            continue;
          } else
            ((w = {
              lane: 0,
              revertLane: N.revertLane,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null,
            }),
              S === null ? ((m = S = w), (f = r)) : (S = S.next = w),
              (it.lanes |= C),
              (wn |= C));
          ((w = N.action),
            fa && n(r, w),
            (r = N.hasEagerState ? N.eagerState : n(r, w)));
        } else
          ((C = {
            lane: w,
            revertLane: N.revertLane,
            gesture: N.gesture,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null,
          }),
            S === null ? ((m = S = C), (f = r)) : (S = S.next = C),
            (it.lanes |= w),
            (wn |= w));
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
        (a.lastRenderedState = r));
    }
    return (s === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
  }
  function Tu(t) {
    var e = Ut(),
      n = e.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch,
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
    return [r, a];
  }
  function Md(t, e, n) {
    var a = it,
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
      Mu(Cd.bind(null, a, s, t), [t]),
      s.getSnapshot !== e || f || (Ht !== null && Ht.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Ka(9, { destroy: void 0 }, Nd.bind(null, a, s, n, e), null),
        Et === null)
      )
        throw Error(u(349));
      r || (rn & 127) !== 0 || Dd(a, e, n);
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
  function Nd(t, e, n, a) {
    ((e.value = n), (e.getSnapshot = a), jd(e) && zd(t));
  }
  function Cd(t, e, n) {
    return n(function () {
      jd(e) && zd(t);
    });
  }
  function jd(t) {
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
  function Od(t, e, n, a) {
    return ((t.baseState = n), Su(t, St, typeof a == "function" ? a : cn));
  }
  function Bv(t, e, n, a, s) {
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
        a(r),
        (n = e.pending),
        n === null
          ? ((r.next = e.pending = r), Vd(e, r))
          : ((r.next = n.next), (e.pending = n.next = r)));
    }
  }
  function Vd(t, e) {
    var n = e.action,
      a = e.payload,
      s = t.state;
    if (e.isTransition) {
      var r = O.T,
        f = {};
      O.T = f;
      try {
        var m = n(s, a),
          S = O.S;
        (S !== null && S(f, m), Rd(t, e, m));
      } catch (N) {
        Eu(t, e, N);
      } finally {
        (r !== null && f.types !== null && (r.types = f.types), (O.T = r));
      }
    } else
      try {
        ((r = n(s, a)), Rd(t, e, r));
      } catch (N) {
        Eu(t, e, N);
      }
  }
  function Rd(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            _d(t, e, a);
          },
          function (a) {
            return Eu(t, e, a);
          },
        )
      : _d(t, e, n);
  }
  function _d(t, e, n) {
    ((e.status = "fulfilled"),
      (e.value = n),
      wd(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Vd(t, n))));
  }
  function Eu(t, e, n) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do ((e.status = "rejected"), (e.reason = n), wd(e), (e = e.next));
      while (e !== a);
    }
    t.action = null;
  }
  function wd(t) {
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
          var a = it;
          if (mt) {
            if (Nt) {
              e: {
                for (var s = Nt, r = Ve; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break e;
                  }
                  if (((s = _e(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                ((r = s.data), (s = r === "F!" || r === "F" ? s : null));
              }
              if (s) {
                ((Nt = _e(s.nextSibling)), (a = s.data === "F!"));
                break t;
              }
            }
            Dn(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return (
      (n = ie()),
      (n.memoizedState = n.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ud,
        lastRenderedState: e,
      }),
      (n.queue = a),
      (n = nh.bind(null, it, a)),
      (a.dispatch = n),
      (a = Au(!1)),
      (r = zu.bind(null, it, !1, a.queue)),
      (a = ie()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = s),
      (n = Bv.bind(null, it, s, r, n)),
      (s.dispatch = n),
      (a.memoizedState = t),
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
        var a = Yi(e);
      } catch (f) {
        throw f === Ya ? $l : f;
      }
    else a = e;
    e = Ut();
    var s = e.queue,
      r = s.dispatch;
    return (
      n !== e.memoizedState &&
        ((it.flags |= 2048),
        Ka(9, { destroy: void 0 }, Lv.bind(null, s, n), null)),
      [a, r, t]
    );
  }
  function Lv(t, e) {
    t.action = e;
  }
  function qd(t) {
    var e = Ut(),
      n = St;
    if (n !== null) return Hd(e, n, t);
    (Ut(), (e = e.memoizedState), (n = Ut()));
    var a = n.queue.dispatch;
    return ((n.memoizedState = t), [e, a, !1]);
  }
  function Ka(t, e, n, a) {
    return (
      (t = { tag: t, create: n, deps: a, inst: e, next: null }),
      (e = it.updateQueue),
      e === null && ((e = ss()), (it.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((a = n.next), (n.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function Yd() {
    return Ut().memoizedState;
  }
  function rs(t, e, n, a) {
    var s = ie();
    ((it.flags |= t),
      (s.memoizedState = Ka(
        1 | e,
        { destroy: void 0 },
        n,
        a === void 0 ? null : a,
      )));
  }
  function cs(t, e, n, a) {
    var s = Ut();
    a = a === void 0 ? null : a;
    var r = s.memoizedState.inst;
    St !== null && a !== null && pu(a, St.memoizedState.deps)
      ? (s.memoizedState = Ka(e, r, n, a))
      : ((it.flags |= t), (s.memoizedState = Ka(1 | e, r, n, a)));
  }
  function Gd(t, e) {
    rs(8390656, 8, t, e);
  }
  function Mu(t, e) {
    cs(2048, 8, t, e);
  }
  function Hv(t) {
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
      Hv({ ref: e, nextImpl: t }),
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
  function Jd(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), cs(4, 4, Kd.bind(null, e, t), n));
  }
  function Du() {}
  function kd(t, e) {
    var n = Ut();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && pu(e, a[1]) ? a[0] : ((n.memoizedState = [t, e]), t);
  }
  function Pd(t, e) {
    var n = Ut();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && pu(e, a[1])) return a[0];
    if (((a = t()), fa)) {
      Sn(!0);
      try {
        t();
      } finally {
        Sn(!1);
      }
    }
    return ((n.memoizedState = [a, e]), a);
  }
  function Nu(t, e, n) {
    return n === void 0 || ((rn & 1073741824) !== 0 && (ft & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = Fh()), (it.lanes |= t), (wn |= t), n);
  }
  function Fd(t, e, n, a) {
    return xe(n, e)
      ? n
      : Xa.current !== null
        ? ((t = Nu(t, n, a)), xe(t, e) || (qt = !0), t)
        : (rn & 42) === 0 || ((rn & 1073741824) !== 0 && (ft & 261930) === 0)
          ? ((qt = !0), (t.memoizedState = n))
          : ((t = Fh()), (it.lanes |= t), (wn |= t), e);
  }
  function Wd(t, e, n, a, s) {
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
        var z = _v(S, a);
        Gi(t, e, z, Me(t));
      } else Gi(t, e, a, Me(t));
    } catch (w) {
      Gi(t, e, { then: function () {}, status: "rejected", reason: w }, Me());
    } finally {
      ((q.p = r),
        f !== null && m.types !== null && (f.types = m.types),
        (O.T = f));
    }
  }
  function qv() {}
  function Cu(t, e, n, a) {
    if (t.tag !== 5) throw Error(u(476));
    var s = $d(t).queue;
    Wd(
      t,
      s,
      e,
      Q,
      n === null
        ? qv
        : function () {
            return (Id(t), n(a));
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
  function ju() {
    return Wt(ll);
  }
  function th() {
    return Ut().memoizedState;
  }
  function eh() {
    return Ut().memoizedState;
  }
  function Yv(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Me();
          t = jn(n);
          var a = zn(e, t, n);
          (a !== null && (pe(a, e, n), Bi(a, e, n)),
            (e = { cache: iu() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function Gv(t, e, n) {
    var a = Me();
    ((n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      fs(t)
        ? ah(e, n)
        : ((n = Jo(t, e, n, a)), n !== null && (pe(n, t, a), ih(n, e, a))));
  }
  function nh(t, e, n) {
    var a = Me();
    Gi(t, e, n, a);
  }
  function Gi(t, e, n, a) {
    var s = {
      lane: a,
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
      if (((n = Jo(t, e, s, a)), n !== null))
        return (pe(n, t, a), ih(n, e, a), !0);
    }
    return !1;
  }
  function zu(t, e, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: ur(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      fs(t))
    ) {
      if (e) throw Error(u(479));
    } else ((e = Jo(t, n, a, 2)), e !== null && pe(e, t, 2));
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
      var a = e.lanes;
      ((a &= t.pendingLanes), (n |= a), (e.lanes = n), rf(t, n));
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
        var a = t();
        if (fa) {
          Sn(!0);
          try {
            t();
          } finally {
            Sn(!1);
          }
        }
        return ((n.memoizedState = [a, e]), a);
      },
      useReducer: function (t, e, n) {
        var a = ie();
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
          (a.memoizedState = a.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (a.queue = t),
          (t = t.dispatch = Gv.bind(null, it, t)),
          [a.memoizedState, t]
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
        var a = it,
          s = ie();
        if (mt) {
          if (n === void 0) throw Error(u(407));
          n = n();
        } else {
          if (((n = e()), Et === null)) throw Error(u(349));
          (ft & 127) !== 0 || Dd(a, e, n);
        }
        s.memoizedState = n;
        var r = { value: n, getSnapshot: e };
        return (
          (s.queue = r),
          Gd(Cd.bind(null, a, r, t), [t]),
          (a.flags |= 2048),
          Ka(9, { destroy: void 0 }, Nd.bind(null, a, r, n, e), null),
          n
        );
      },
      useId: function () {
        var t = ie(),
          e = Et.identifierPrefix;
        if (mt) {
          var n = Pe,
            a = ke;
          ((n = (a & ~(1 << (32 - ve(a) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = ls++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_"));
        } else ((n = wv++), (e = "_" + e + "r_" + n.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: ju,
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
        return (ie().memoizedState = Yv.bind(null, it));
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
      useCallback: kd,
      useContext: Wt,
      useEffect: Mu,
      useImperativeHandle: Jd,
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
      useHostTransitionStatus: ju,
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
    useCallback: kd,
    useContext: Wt,
    useEffect: Mu,
    useImperativeHandle: Jd,
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
    useHostTransitionStatus: ju,
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
  function Vu(t, e, n, a) {
    ((e = t.memoizedState),
      (n = n(a, e)),
      (n = n == null ? e : b({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var Ru = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var a = Me(),
        s = jn(a);
      ((s.payload = e),
        n != null && (s.callback = n),
        (e = zn(t, s, a)),
        e !== null && (pe(e, t, a), Bi(e, t, a)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var a = Me(),
        s = jn(a);
      ((s.tag = 1),
        (s.payload = e),
        n != null && (s.callback = n),
        (e = zn(t, s, a)),
        e !== null && (pe(e, t, a), Bi(e, t, a)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Me(),
        a = jn(n);
      ((a.tag = 2),
        e != null && (a.callback = e),
        (e = zn(t, a, n)),
        e !== null && (pe(e, t, n), Bi(e, t, n)));
    },
  };
  function oh(t, e, n, a, s, r, f) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, r, f)
        : e.prototype && e.prototype.isPureReactComponent
          ? !ji(n, a) || !ji(s, r)
          : !0
    );
  }
  function uh(t, e, n, a) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, a),
      e.state !== t && Ru.enqueueReplaceState(e, e.state, null));
  }
  function da(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e) a !== "ref" && (n[a] = e[a]);
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
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function dh(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function _u(t, e, n) {
    return (
      (n = jn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        ds(t, e);
      }),
      n
    );
  }
  function hh(t) {
    return ((t = jn(t)), (t.tag = 3), t);
  }
  function mh(t, e, n, a) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = a.value;
      ((t.payload = function () {
        return s(r);
      }),
        (t.callback = function () {
          dh(e, n, a);
        }));
    }
    var f = n.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (t.callback = function () {
        (dh(e, n, a),
          typeof s != "function" &&
            (Un === null ? (Un = new Set([this])) : Un.add(this)));
        var m = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: m !== null ? m : "",
        });
      });
  }
  function Xv(t, e, n, a, s) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
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
              a === Il
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([a])) : e.add(a),
                  lr(t, a, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === Il
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([a])) : n.add(a)),
                  lr(t, a, s)),
              !1
            );
        }
        throw Error(u(435, n.tag));
      }
      return (lr(t, a, s), Es(), !1);
    }
    if (mt)
      return (
        (e = Se.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            a !== Io && ((t = Error(u(422), { cause: a })), Vi(je(t, n))))
          : (a !== Io && ((e = Error(u(423), { cause: a })), Vi(je(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (a = je(a, n)),
            (s = _u(t.stateNode, a, s)),
            cu(t, s),
            Vt !== 4 && (Vt = 2)),
        !1
      );
    var r = Error(u(520), { cause: a });
    if (
      ((r = je(r, n)),
      Wi === null ? (Wi = [r]) : Wi.push(r),
      Vt !== 4 && (Vt = 2),
      e === null)
    )
      return !0;
    ((a = je(a, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = s & -s),
            (n.lanes |= t),
            (t = _u(n.stateNode, a, t)),
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
              mh(s, t, n, a),
              cu(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var wu = Error(u(461)),
    qt = !1;
  function $t(t, e, n, a) {
    e.child = t === null ? vd(e, null, n, a) : ca(e, t.child, n, a);
  }
  function ph(t, e, n, a, s) {
    n = n.render;
    var r = e.ref;
    if ("ref" in a) {
      var f = {};
      for (var m in a) m !== "ref" && (f[m] = a[m]);
    } else f = a;
    return (
      sa(e),
      (a = yu(t, e, n, f, r, s)),
      (m = gu()),
      t !== null && !qt
        ? (vu(t, e, s), fn(t, e, s))
        : (mt && m && Wo(e), (e.flags |= 1), $t(t, e, a, s), e.child)
    );
  }
  function yh(t, e, n, a, s) {
    if (t === null) {
      var r = n.type;
      return typeof r == "function" &&
        !ko(r) &&
        r.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = r), gh(t, e, r, a, s))
        : ((t = Jl(n.type, null, a, e, e.mode, s)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((r = t.child), !Xu(t, s))) {
      var f = r.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : ji), n(f, a) && t.ref === e.ref)
      )
        return fn(t, e, s);
    }
    return (
      (e.flags |= 1),
      (t = ln(r, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function gh(t, e, n, a, s) {
    if (t !== null) {
      var r = t.memoizedProps;
      if (ji(r, a) && t.ref === e.ref)
        if (((qt = !1), (e.pendingProps = a = r), Xu(t, s)))
          (t.flags & 131072) !== 0 && (qt = !0);
        else return ((e.lanes = t.lanes), fn(t, e, s));
    }
    return Uu(t, e, n, a, s);
  }
  function vh(t, e, n, a) {
    var s = a.children,
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
      a.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((r = r !== null ? r.baseLanes | n : n), t !== null)) {
          for (a = e.child = t.child, s = 0; a !== null; )
            ((s = s | a.lanes | a.childLanes), (a = a.sibling));
          a = s & ~r;
        } else ((a = 0), (e.child = null));
        return xh(t, e, r, n, a);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Wl(e, r !== null ? r.cachePool : null),
          r !== null ? Sd(e, r) : du(),
          Td(e));
      else
        return (
          (a = e.lanes = 536870912),
          xh(t, e, r !== null ? r.baseLanes | n : n, n, a)
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
  function xh(t, e, n, a, s) {
    var r = su();
    return (
      (r = r === null ? null : { parent: Lt._currentValue, pool: r }),
      (e.memoizedState = { baseLanes: n, cachePool: r }),
      t !== null && Wl(e, null),
      du(),
      Td(e),
      t !== null && La(t, e, a, !0),
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
  function Qv(t, e, n) {
    var a = e.pendingProps,
      s = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (mt) {
        if (a.mode === "hidden")
          return ((t = hs(e, a)), (e.lanes = 536870912), Qi(null, t));
        if (
          (mu(e),
          (t = Nt)
            ? ((t = Vm(t, Ve)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: En !== null ? { id: ke, overflow: Pe } : null,
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
      return hs(e, a);
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
          ((a = Et),
          a !== null && ((f = cf(a, n)), f !== 0 && f !== r.retryLane))
        )
          throw ((r.retryLane = f), na(t, f), pe(a, t, f), wu);
        (Es(), (e = bh(t, e, n)));
      } else
        ((t = r.treeContext),
          (Nt = _e(f.nextSibling)),
          (Ft = e),
          (mt = !0),
          (Mn = null),
          (Ve = !1),
          t !== null && sd(e, t),
          (e = hs(e, a)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = ln(t.child, { mode: a.mode, children: a.children })),
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
  function Uu(t, e, n, a, s) {
    return (
      sa(e),
      (n = yu(t, e, n, a, void 0, s)),
      (a = gu()),
      t !== null && !qt
        ? (vu(t, e, s), fn(t, e, s))
        : (mt && a && Wo(e), (e.flags |= 1), $t(t, e, n, s), e.child)
    );
  }
  function Sh(t, e, n, a, s, r) {
    return (
      sa(e),
      (e.updateQueue = null),
      (n = Ed(e, a, n, s)),
      Ad(t),
      (a = gu()),
      t !== null && !qt
        ? (vu(t, e, r), fn(t, e, r))
        : (mt && a && Wo(e), (e.flags |= 1), $t(t, e, n, r), e.child)
    );
  }
  function Th(t, e, n, a, s) {
    if ((sa(e), e.stateNode === null)) {
      var r = _a,
        f = n.contextType;
      (typeof f == "object" && f !== null && (r = Wt(f)),
        (r = new n(a, r)),
        (e.memoizedState =
          r.state !== null && r.state !== void 0 ? r.state : null),
        (r.updater = Ru),
        (e.stateNode = r),
        (r._reactInternals = e),
        (r = e.stateNode),
        (r.props = a),
        (r.state = e.memoizedState),
        (r.refs = {}),
        uu(e),
        (f = n.contextType),
        (r.context = typeof f == "object" && f !== null ? Wt(f) : _a),
        (r.state = e.memoizedState),
        (f = n.getDerivedStateFromProps),
        typeof f == "function" && (Vu(e, n, f, a), (r.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function" ||
          (typeof r.UNSAFE_componentWillMount != "function" &&
            typeof r.componentWillMount != "function") ||
          ((f = r.state),
          typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" &&
            r.UNSAFE_componentWillMount(),
          f !== r.state && Ru.enqueueReplaceState(r, r.state, null),
          Hi(e, a, r, s),
          Li(),
          (r.state = e.memoizedState)),
        typeof r.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0));
    } else if (t === null) {
      r = e.stateNode;
      var m = e.memoizedProps,
        S = da(n, m);
      r.props = S;
      var N = r.context,
        z = n.contextType;
      ((f = _a), typeof z == "object" && z !== null && (f = Wt(z)));
      var w = n.getDerivedStateFromProps;
      ((z =
        typeof w == "function" ||
        typeof r.getSnapshotBeforeUpdate == "function"),
        (m = e.pendingProps !== m),
        z ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((m || N !== f) && uh(e, r, a, f)),
        (Cn = !1));
      var C = e.memoizedState;
      ((r.state = C),
        Hi(e, a, r, s),
        Li(),
        (N = e.memoizedState),
        m || C !== N || Cn
          ? (typeof w == "function" && (Vu(e, n, w, a), (N = e.memoizedState)),
            (S = Cn || oh(e, n, S, a, C, N, f))
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
                (e.memoizedProps = a),
                (e.memoizedState = N)),
            (r.props = a),
            (r.state = N),
            (r.context = f),
            (a = S))
          : (typeof r.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1)));
    } else {
      ((r = e.stateNode),
        ru(t, e),
        (f = e.memoizedProps),
        (z = da(n, f)),
        (r.props = z),
        (w = e.pendingProps),
        (C = r.context),
        (N = n.contextType),
        (S = _a),
        typeof N == "object" && N !== null && (S = Wt(N)),
        (m = n.getDerivedStateFromProps),
        (N =
          typeof m == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function") ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((f !== w || C !== S) && uh(e, r, a, S)),
        (Cn = !1),
        (C = e.memoizedState),
        (r.state = C),
        Hi(e, a, r, s),
        Li());
      var j = e.memoizedState;
      f !== w ||
      C !== j ||
      Cn ||
      (t !== null && t.dependencies !== null && Pl(t.dependencies))
        ? (typeof m == "function" && (Vu(e, n, m, a), (j = e.memoizedState)),
          (z =
            Cn ||
            oh(e, n, z, a, C, j, S) ||
            (t !== null && t.dependencies !== null && Pl(t.dependencies)))
            ? (N ||
                (typeof r.UNSAFE_componentWillUpdate != "function" &&
                  typeof r.componentWillUpdate != "function") ||
                (typeof r.componentWillUpdate == "function" &&
                  r.componentWillUpdate(a, j, S),
                typeof r.UNSAFE_componentWillUpdate == "function" &&
                  r.UNSAFE_componentWillUpdate(a, j, S)),
              typeof r.componentDidUpdate == "function" && (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof r.componentDidUpdate != "function" ||
                (f === t.memoizedProps && C === t.memoizedState) ||
                (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate != "function" ||
                (f === t.memoizedProps && C === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = j)),
          (r.props = a),
          (r.state = j),
          (r.context = S),
          (a = z))
        : (typeof r.componentDidUpdate != "function" ||
            (f === t.memoizedProps && C === t.memoizedState) ||
            (e.flags |= 4),
          typeof r.getSnapshotBeforeUpdate != "function" ||
            (f === t.memoizedProps && C === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (r = a),
      ms(t, e),
      (a = (e.flags & 128) !== 0),
      r || a
        ? ((r = e.stateNode),
          (n =
            a && typeof n.getDerivedStateFromError != "function"
              ? null
              : r.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = ca(e, t.child, null, s)),
              (e.child = ca(e, null, n, s)))
            : $t(t, e, n, s),
          (e.memoizedState = r.state),
          (t = e.child))
        : (t = fn(t, e, s)),
      t
    );
  }
  function Ah(t, e, n, a) {
    return (ia(), (e.flags |= 256), $t(t, e, n, a), e.child);
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
    var a = e.pendingProps,
      s = !1,
      r = (e.flags & 128) !== 0,
      f;
    if (
      ((f = r) ||
        (f =
          t !== null && t.memoizedState === null ? !1 : (wt.current & 2) !== 0),
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
                  treeContext: En !== null ? { id: ke, overflow: Pe } : null,
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
      var m = a.children;
      return (
        (a = a.fallback),
        s
          ? (Vn(),
            (s = e.mode),
            (m = ps({ mode: "hidden", children: m }, s)),
            (a = aa(a, s, n, null)),
            (m.return = e),
            (a.return = e),
            (m.sibling = a),
            (e.child = m),
            (a = e.child),
            (a.memoizedState = Lu(n)),
            (a.childLanes = Hu(t, f, n)),
            (e.memoizedState = Bu),
            Qi(null, a))
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
              (m = a.fallback),
              (s = e.mode),
              (a = ps({ mode: "visible", children: a.children }, s)),
              (m = aa(m, s, n, null)),
              (m.flags |= 2),
              (a.return = e),
              (m.return = e),
              (a.sibling = m),
              (e.child = a),
              ca(e, t.child, null, n),
              (a = e.child),
              (a.memoizedState = Lu(n)),
              (a.childLanes = Hu(t, f, n)),
              (e.memoizedState = Bu),
              (e = Qi(null, a)));
      else if ((On(e), Sr(m))) {
        if (((f = m.nextSibling && m.nextSibling.dataset), f)) var N = f.dgst;
        ((f = N),
          (a = Error(u(419))),
          (a.stack = ""),
          (a.digest = f),
          Vi({ value: a, source: null, stack: null }),
          (e = Yu(t, e, n)));
      } else if (
        (qt || La(t, e, n, !1), (f = (n & t.childLanes) !== 0), qt || f)
      ) {
        if (
          ((f = Et),
          f !== null && ((a = cf(f, n)), a !== 0 && a !== S.retryLane))
        )
          throw ((S.retryLane = a), na(t, a), pe(f, t, a), wu);
        (br(m) || Es(), (e = Yu(t, e, n)));
      } else
        br(m)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = S.treeContext),
            (Nt = _e(m.nextSibling)),
            (Ft = e),
            (mt = !0),
            (Mn = null),
            (Ve = !1),
            t !== null && sd(e, t),
            (e = qu(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (Vn(),
        (m = a.fallback),
        (s = e.mode),
        (S = t.child),
        (N = S.sibling),
        (a = ln(S, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = S.subtreeFlags & 65011712),
        N !== null ? (m = ln(N, m)) : ((m = aa(m, s, n, null)), (m.flags |= 2)),
        (m.return = e),
        (a.return = e),
        (a.sibling = m),
        (e.child = a),
        Qi(null, a),
        (a = e.child),
        (m = t.child.memoizedState),
        m === null
          ? (m = Lu(n))
          : ((s = m.cachePool),
            s !== null
              ? ((S = Lt._currentValue),
                (s = s.parent !== S ? { parent: S, pool: S } : s))
              : (s = dd()),
            (m = { baseLanes: m.baseLanes | n, cachePool: s })),
        (a.memoizedState = m),
        (a.childLanes = Hu(t, f, n)),
        (e.memoizedState = Bu),
        Qi(t.child, a))
      : (On(e),
        (n = t.child),
        (t = n.sibling),
        (n = ln(n, { mode: "visible", children: a.children })),
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
    var a = t.alternate;
    (a !== null && (a.lanes |= e), nu(t.return, e, n));
  }
  function Gu(t, e, n, a, s, r) {
    var f = t.memoizedState;
    f === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: s,
          treeForkCount: r,
        })
      : ((f.isBackwards = e),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = a),
        (f.tail = n),
        (f.tailMode = s),
        (f.treeForkCount = r));
  }
  function Dh(t, e, n) {
    var a = e.pendingProps,
      s = a.revealOrder,
      r = a.tail;
    a = a.children;
    var f = wt.current,
      m = (f & 2) !== 0;
    if (
      (m ? ((f = (f & 1) | 2), (e.flags |= 128)) : (f &= 1),
      Y(wt, f),
      $t(t, e, a, n),
      (a = mt ? Oi : 0),
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
          Gu(e, !1, s, n, r, a));
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
        Gu(e, !0, n, null, r, a);
        break;
      case "together":
        Gu(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function fn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (wn |= e.lanes),
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
  function Zv(t, e, n) {
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
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (On(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? Eh(t, e, n)
              : (On(e), (t = fn(t, e, n)), t !== null ? t.sibling : null);
        On(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((a = (n & e.childLanes) !== 0),
          a || (La(t, e, n, !1), (a = (n & e.childLanes) !== 0)),
          s)
        ) {
          if (a) return Dh(t, e, n);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          Y(wt, wt.current),
          a)
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
        if (!Xu(t, n) && (e.flags & 128) === 0) return ((qt = !1), Zv(t, e, n));
        qt = (t.flags & 131072) !== 0;
      }
    else ((qt = !1), mt && (e.flags & 1048576) !== 0 && ld(e, Oi, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = ua(e.elementType)), (e.type = t), typeof t == "function"))
            ko(t)
              ? ((a = da(t, a)), (e.tag = 1), (e = Th(null, e, t, a, n)))
              : ((e.tag = 0), (e = Uu(null, e, t, a, n)));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === P) {
                ((e.tag = 11), (e = ph(null, e, t, a, n)));
                break t;
              } else if (s === W) {
                ((e.tag = 14), (e = yh(null, e, t, a, n)));
                break t;
              }
            }
            throw ((e = Le(t) || t), Error(u(306, e, "")));
          }
        }
        return e;
      case 0:
        return Uu(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((a = e.type), (s = da(a, e.pendingProps)), Th(t, e, a, s, n));
      case 3:
        t: {
          if ((ae(e, e.stateNode.containerInfo), t === null))
            throw Error(u(387));
          a = e.pendingProps;
          var r = e.memoizedState;
          ((s = r.element), ru(t, e), Hi(e, a, null, n));
          var f = e.memoizedState;
          if (
            ((a = f.cache),
            Nn(e, Lt, a),
            a !== r.cache && au(e, [Lt], n, !0),
            Li(),
            (a = f.element),
            r.isDehydrated)
          )
            if (
              ((r = { element: a, isDehydrated: !1, cache: f.cache }),
              (e.updateQueue.baseState = r),
              (e.memoizedState = r),
              e.flags & 256)
            ) {
              e = Ah(t, e, a, n);
              break t;
            } else if (a !== s) {
              ((s = je(Error(u(424)), e)), Vi(s), (e = Ah(t, e, a, n)));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  Nt = _e(t.firstChild),
                  Ft = e,
                  mt = !0,
                  Mn = null,
                  Ve = !0,
                  n = vd(e, null, a, n),
                  e.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((ia(), a === s)) {
              e = fn(t, e, n);
              break t;
            }
            $t(t, e, a, n);
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
                (a = Os(ut.current).createElement(n)),
                (a[Pt] = e),
                (a[re] = t),
                It(a, n, t),
                Kt(a),
                (e.stateNode = a))
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
            ((a = e.stateNode = wm(e.type, e.pendingProps, ut.current)),
            (Ft = e),
            (Ve = !0),
            (s = Nt),
            qn(e.type) ? ((Tr = s), (Nt = _e(a.firstChild))) : (Nt = s)),
          $t(t, e, e.pendingProps.children, n),
          ms(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            mt &&
            ((s = a = Nt) &&
              ((a = S1(a, e.type, e.pendingProps, Ve)),
              a !== null
                ? ((e.stateNode = a),
                  (Ft = e),
                  (Nt = _e(a.firstChild)),
                  (Ve = !1),
                  (s = !0))
                : (s = !1)),
            s || Dn(e)),
          yi(e),
          (s = e.type),
          (r = e.pendingProps),
          (f = t !== null ? t.memoizedProps : null),
          (a = r.children),
          gr(s, r) ? (a = null) : f !== null && gr(s, f) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((s = yu(t, e, Uv, null, null, n)), (ll._currentValue = s)),
          ms(t, e),
          $t(t, e, a, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            mt &&
            ((t = n = Nt) &&
              ((n = T1(n, e.pendingProps, Ve)),
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
          (a = e.pendingProps),
          t === null ? (e.child = ca(e, null, a, n)) : $t(t, e, a, n),
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
          (a = e.pendingProps),
          Nn(e, e.type, a.value),
          $t(t, e, a.children, n),
          e.child
        );
      case 9:
        return (
          (s = e.type._context),
          (a = e.pendingProps.children),
          sa(e),
          (s = Wt(s)),
          (a = a(s)),
          (e.flags |= 1),
          $t(t, e, a, n),
          e.child
        );
      case 14:
        return yh(t, e, e.type, e.pendingProps, n);
      case 15:
        return gh(t, e, e.type, e.pendingProps, n);
      case 19:
        return Dh(t, e, n);
      case 31:
        return Qv(t, e, n);
      case 22:
        return vh(t, e, n, e.pendingProps);
      case 24:
        return (
          sa(e),
          (a = Wt(Lt)),
          t === null
            ? ((s = su()),
              s === null &&
                ((s = Et),
                (r = iu()),
                (s.pooledCache = r),
                r.refCount++,
                r !== null && (s.pooledCacheLanes |= n),
                (s = r)),
              (e.memoizedState = { parent: a, cache: s }),
              uu(e),
              Nn(e, Lt, s))
            : ((t.lanes & n) !== 0 && (ru(t, e), Hi(e, null, null, n), Li()),
              (s = t.memoizedState),
              (r = e.memoizedState),
              s.parent !== a
                ? ((s = { parent: a, cache: a }),
                  (e.memoizedState = s),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = s),
                  Nn(e, Lt, a))
                : ((a = r.cache),
                  Nn(e, Lt, a),
                  a !== s.cache && au(e, [Lt], n, !0))),
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
  function Qu(t, e, n, a, s) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (s & 335544128) === s))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (tm()) t.flags |= 8192;
        else throw ((ra = Il), ou);
    } else t.flags &= -16777217;
  }
  function Ch(t, e) {
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
          for (var a = null; n !== null; )
            (n.alternate !== null && (a = n), (n = n.sibling));
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Ct(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      a = 0;
    if (e)
      for (var s = t.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (a |= s.subtreeFlags & 65011712),
          (a |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling));
    else
      for (s = t.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (a |= s.subtreeFlags),
          (a |= s.flags),
          (s.return = t),
          (s = s.sibling));
    return ((t.subtreeFlags |= a), (t.childLanes = n), e);
  }
  function Kv(t, e, n) {
    var a = e.pendingProps;
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
        return (Ct(e), null);
      case 1:
        return (Ct(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          un(Lt),
          _t(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ba(e)
              ? dn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), tu())),
          Ct(e),
          null
        );
      case 26:
        var s = e.type,
          r = e.memoizedState;
        return (
          t === null
            ? (dn(e),
              r !== null ? (Ct(e), Ch(e, r)) : (Ct(e), Qu(e, s, null, a, n)))
            : r
              ? r !== t.memoizedState
                ? (dn(e), Ct(e), Ch(e, r))
                : (Ct(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== a && dn(e),
                Ct(e),
                Qu(e, s, t, a, n)),
          null
        );
      case 27:
        if (
          (Nl(e),
          (n = ut.current),
          (s = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== a && dn(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(u(166));
            return (Ct(e), null);
          }
          ((t = J.current),
            Ba(e) ? od(e) : ((t = wm(s, a, n)), (e.stateNode = t), dn(e)));
        }
        return (Ct(e), null);
      case 5:
        if ((Nl(e), (s = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && dn(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(u(166));
            return (Ct(e), null);
          }
          if (((r = J.current), Ba(e))) od(e);
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
                      typeof a.is == "string"
                        ? f.createElement("select", { is: a.is })
                        : f.createElement("select")),
                      a.multiple
                        ? (r.multiple = !0)
                        : a.size && (r.size = a.size));
                    break;
                  default:
                    r =
                      typeof a.is == "string"
                        ? f.createElement(s, { is: a.is })
                        : f.createElement(s);
                }
            }
            ((r[Pt] = e), (r[re] = a));
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
            t: switch ((It(r, s, a), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && dn(e);
          }
        }
        return (
          Ct(e),
          Qu(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && dn(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(u(166));
          if (((t = ut.current), Ba(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (a = null),
              (s = Ft),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  a = s.memoizedProps;
              }
            ((t[Pt] = e),
              (t = !!(
                t.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Em(t.nodeValue, n)
              )),
              t || Dn(e, !0));
          } else
            ((t = Os(t).createTextNode(a)), (t[Pt] = e), (e.stateNode = t));
        }
        return (Ct(e), null);
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = Ba(e)), n !== null)) {
            if (t === null) {
              if (!a) throw Error(u(318));
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
            (Ct(e), (t = !1));
          } else
            ((n = tu()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (t = !0));
          if (!t) return e.flags & 256 ? (Te(e), e) : (Te(e), null);
          if ((e.flags & 128) !== 0) throw Error(u(558));
        }
        return (Ct(e), null);
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = Ba(e)), a !== null && a.dehydrated !== null)) {
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
            (Ct(e), (s = !1));
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
            : ((n = a !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((a = e.child),
                (s = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (s = a.alternate.memoizedState.cachePool.pool),
                (r = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (r = a.memoizedState.cachePool.pool),
                r !== s && (a.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              ys(e, e.updateQueue),
              Ct(e),
              null)
        );
      case 4:
        return (_t(), t === null && dr(e.stateNode.containerInfo), Ct(e), null);
      case 10:
        return (un(e.type), Ct(e), null);
      case 19:
        if ((U(wt), (a = e.memoizedState), a === null)) return (Ct(e), null);
        if (((s = (e.flags & 128) !== 0), (r = a.rendering), r === null))
          if (s) Zi(a, !1);
          else {
            if (Vt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((r = as(t)), r !== null)) {
                  for (
                    e.flags |= 128,
                      Zi(a, !1),
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
                    Y(wt, (wt.current & 1) | 2),
                    mt && sn(e, a.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              ye() > Ss &&
              ((e.flags |= 128), (s = !0), Zi(a, !1), (e.lanes = 4194304));
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
                Zi(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !r.alternate &&
                  !mt)
              )
                return (Ct(e), null);
            } else
              2 * ye() - a.renderingStartTime > Ss &&
                n !== 536870912 &&
                ((e.flags |= 128), (s = !0), Zi(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((r.sibling = e.child), (e.child = r))
            : ((t = a.last),
              t !== null ? (t.sibling = r) : (e.child = r),
              (a.last = r));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = ye()),
            (t.sibling = null),
            (n = wt.current),
            Y(wt, s ? (n & 1) | 2 : n & 1),
            mt && sn(e, a.treeForkCount),
            t)
          : (Ct(e), null);
      case 22:
      case 23:
        return (
          Te(e),
          hu(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Ct(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Ct(e),
          (n = e.updateQueue),
          n !== null && ys(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== n && (e.flags |= 2048),
          t !== null && U(oa),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          un(Lt),
          Ct(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, e.tag));
  }
  function Jv(t, e) {
    switch (($o(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          un(Lt),
          _t(),
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
        return (U(wt), null);
      case 4:
        return (_t(), null);
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
  function jh(t, e) {
    switch (($o(e), e.tag)) {
      case 3:
        (un(Lt), _t());
        break;
      case 26:
      case 27:
      case 5:
        Nl(e);
        break;
      case 4:
        _t();
        break;
      case 31:
        e.memoizedState !== null && Te(e);
        break;
      case 13:
        Te(e);
        break;
      case 19:
        U(wt);
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
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var s = a.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var r = n.create,
              f = n.inst;
            ((a = r()), (f.destroy = a));
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
      var a = e.updateQueue,
        s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        a = r;
        do {
          if ((a.tag & t) === t) {
            var f = a.inst,
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
          a = a.next;
        } while (a !== r);
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
      } catch (a) {
        bt(t, t.return, a);
      }
    }
  }
  function Oh(t, e, n) {
    ((n.props = da(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (a) {
      bt(t, e, a);
    }
  }
  function Ji(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(a)) : (n.current = a);
      }
    } catch (s) {
      bt(t, e, s);
    }
  }
  function Fe(t, e) {
    var n = t.ref,
      a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
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
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (s) {
      bt(t, t.return, s);
    }
  }
  function Zu(t, e, n) {
    try {
      var a = t.stateNode;
      (p1(a, t.type, n, e), (a[re] = e));
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
  function Ju(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
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
      a !== 4 &&
      (a === 27 && qn(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Ju(t, e, n), t = t.sibling; t !== null; )
        (Ju(t, e, n), (t = t.sibling));
  }
  function gs(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (
      a !== 4 &&
      (a === 27 && qn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (gs(t, e, n), t = t.sibling; t !== null; )
        (gs(t, e, n), (t = t.sibling));
  }
  function _h(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var a = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      (It(e, a, n), (e[Pt] = t), (e[re] = n));
    } catch (r) {
      bt(t, t.return, r);
    }
  }
  var hn = !1,
    Yt = !1,
    ku = !1,
    wh = typeof WeakSet == "function" ? WeakSet : Set,
    Jt = null;
  function kv(t, e) {
    if (((t = t.containerInfo), (pr = Ls), (t = Jf(t)), Yo(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var s = a.anchorOffset,
              r = a.focusNode;
            a = a.focusOffset;
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
              w = t,
              C = null;
            e: for (;;) {
              for (
                var j;
                w !== n || (s !== 0 && w.nodeType !== 3) || (m = f + s),
                  w !== r || (a !== 0 && w.nodeType !== 3) || (S = f + a),
                  w.nodeType === 3 && (f += w.nodeValue.length),
                  (j = w.firstChild) !== null;
              )
                ((C = w), (w = j));
              for (;;) {
                if (w === t) break e;
                if (
                  (C === n && ++N === s && (m = f),
                  C === r && ++z === a && (S = f),
                  (j = w.nextSibling) !== null)
                )
                  break;
                ((w = C), (C = w.parentNode));
              }
              w = j;
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
                  (a = n.stateNode));
                try {
                  var Z = da(n.type, s);
                  ((t = a.getSnapshotBeforeUpdate(Z, r)),
                    (a.__reactInternalSnapshotBeforeUpdate = t));
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
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (pn(t, n), a & 4 && Ki(5, n));
        break;
      case 1:
        if ((pn(t, n), a & 4))
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
        (a & 64 && zh(n), a & 512 && Ji(n, n.return));
        break;
      case 3:
        if ((pn(t, n), a & 64 && ((t = n.updateQueue), t !== null))) {
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
        e === null && a & 4 && _h(n);
      case 26:
      case 5:
        (pn(t, n), e === null && a & 4 && Vh(n), a & 512 && Ji(n, n.return));
        break;
      case 12:
        pn(t, n);
        break;
      case 31:
        (pn(t, n), a & 4 && Hh(t, n));
        break;
      case 13:
        (pn(t, n),
          a & 4 && qh(t, n),
          a & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = a1.bind(null, n)), A1(t, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || hn), !a)) {
          ((e = (e !== null && e.memoizedState !== null) || Yt), (s = hn));
          var r = Yt;
          ((hn = a),
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
  var jt = null,
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
        var a = jt,
          s = fe;
        (qn(n.type) && ((jt = n.stateNode), (fe = !1)),
          mn(t, e, n),
          nl(n.stateNode),
          (jt = a),
          (fe = s));
        break;
      case 5:
        Yt || Fe(n, e);
      case 6:
        if (
          ((a = jt),
          (s = fe),
          (jt = null),
          mn(t, e, n),
          (jt = a),
          (fe = s),
          jt !== null)
        )
          if (fe)
            try {
              (jt.nodeType === 9
                ? jt.body
                : jt.nodeName === "HTML"
                  ? jt.ownerDocument.body
                  : jt
              ).removeChild(n.stateNode);
            } catch (r) {
              bt(n, e, r);
            }
          else
            try {
              jt.removeChild(n.stateNode);
            } catch (r) {
              bt(n, e, r);
            }
        break;
      case 18:
        jt !== null &&
          (fe
            ? ((t = jt),
              zm(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                n.stateNode,
              ),
              ii(t))
            : zm(jt, n.stateNode));
        break;
      case 4:
        ((a = jt),
          (s = fe),
          (jt = n.stateNode.containerInfo),
          (fe = !0),
          mn(t, e, n),
          (jt = a),
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
          (a = n.stateNode),
          typeof a.componentWillUnmount == "function" && Oh(n, e, a)),
          mn(t, e, n));
        break;
      case 21:
        mn(t, e, n);
        break;
      case 22:
        ((Yt = (a = Yt) || n.memoizedState !== null), mn(t, e, n), (Yt = a));
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
  function Pv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new wh()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new wh()),
          e
        );
      default:
        throw Error(u(435, t.tag));
    }
  }
  function vs(t, e) {
    var n = Pv(t);
    e.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var s = i1.bind(null, t, a);
        a.then(s, s);
      }
    });
  }
  function de(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a],
          r = t,
          f = e,
          m = f;
        t: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (qn(m.type)) {
                ((jt = m.stateNode), (fe = !1));
                break t;
              }
              break;
            case 5:
              ((jt = m.stateNode), (fe = !1));
              break t;
            case 3:
            case 4:
              ((jt = m.stateNode.containerInfo), (fe = !0));
              break t;
          }
          m = m.return;
        }
        if (jt === null) throw Error(u(160));
        (Lh(r, f, s),
          (jt = null),
          (fe = !1),
          (r = s.alternate),
          r !== null && (r.return = null),
          (s.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (Yh(e, t), (e = e.sibling));
  }
  var qe = null;
  function Yh(t, e) {
    var n = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (de(e, t),
          he(t),
          a & 4 && (Rn(3, t, t.return), Ki(3, t), Rn(5, t, t.return)));
        break;
      case 1:
        (de(e, t),
          he(t),
          a & 512 && (Yt || n === null || Fe(n, n.return)),
          a & 64 &&
            hn &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? a : n.concat(a))))));
        break;
      case 26:
        var s = qe;
        if (
          (de(e, t),
          he(t),
          a & 512 && (Yt || n === null || Fe(n, n.return)),
          a & 4)
        ) {
          var r = n !== null ? n.memoizedState : null;
          if (((a = t.memoizedState), n === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  ((a = t.type),
                    (n = t.memoizedProps),
                    (s = s.ownerDocument || s));
                  e: switch (a) {
                    case "title":
                      ((r = s.getElementsByTagName("title")[0]),
                        (!r ||
                          r[bi] ||
                          r[Pt] ||
                          r.namespaceURI === "http://www.w3.org/2000/svg" ||
                          r.hasAttribute("itemprop")) &&
                          ((r = s.createElement(a)),
                          s.head.insertBefore(
                            r,
                            s.querySelector("head > title"),
                          )),
                        It(r, a, n),
                        (r[Pt] = t),
                        Kt(r),
                        (a = r));
                      break t;
                    case "link":
                      var f = Ym("link", "href", s).get(a + (n.href || ""));
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
                      ((r = s.createElement(a)),
                        It(r, a, n),
                        s.head.appendChild(r));
                      break;
                    case "meta":
                      if (
                        (f = Ym("meta", "content", s).get(
                          a + (n.content || ""),
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
                      ((r = s.createElement(a)),
                        It(r, a, n),
                        s.head.appendChild(r));
                      break;
                    default:
                      throw Error(u(468, a));
                  }
                  ((r[Pt] = t), Kt(r), (a = r));
                }
                t.stateNode = a;
              } else Gm(s, t.type, t.stateNode);
            else t.stateNode = qm(s, a, t.memoizedProps);
          else
            r !== a
              ? (r === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : r.count--,
                a === null
                  ? Gm(s, t.type, t.stateNode)
                  : qm(s, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                Zu(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (de(e, t),
          he(t),
          a & 512 && (Yt || n === null || Fe(n, n.return)),
          n !== null && a & 4 && Zu(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (de(e, t),
          he(t),
          a & 512 && (Yt || n === null || Fe(n, n.return)),
          t.flags & 32)
        ) {
          s = t.stateNode;
          try {
            Na(s, "");
          } catch (Z) {
            bt(t, t.return, Z);
          }
        }
        (a & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), Zu(t, s, n !== null ? n.memoizedProps : s)),
          a & 1024 && (ku = !0));
        break;
      case 6:
        if ((de(e, t), he(t), a & 4)) {
          if (t.stateNode === null) throw Error(u(162));
          ((a = t.memoizedProps), (n = t.stateNode));
          try {
            n.nodeValue = a;
          } catch (Z) {
            bt(t, t.return, Z);
          }
        }
        break;
      case 3:
        if (
          ((_s = null),
          (s = qe),
          (qe = Vs(e.containerInfo)),
          de(e, t),
          (qe = s),
          he(t),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ii(e.containerInfo);
          } catch (Z) {
            bt(t, t.return, Z);
          }
        ku && ((ku = !1), Gh(t));
        break;
      case 4:
        ((a = qe),
          (qe = Vs(t.stateNode.containerInfo)),
          de(e, t),
          he(t),
          (qe = a));
        break;
      case 12:
        (de(e, t), he(t));
        break;
      case 31:
        (de(e, t),
          he(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), vs(t, a))));
        break;
      case 13:
        (de(e, t),
          he(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (bs = ye()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), vs(t, a))));
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
          a & 8192)
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
                    var w = S.memoizedProps.style,
                      C =
                        w != null && w.hasOwnProperty("display")
                          ? w.display
                          : null;
                    m.style.display =
                      C == null || typeof C == "boolean" ? "" : ("" + C).trim();
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
                  var j = S.stateNode;
                  s ? Om(j, !0) : Om(S.stateNode, !1);
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
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((n = a.retryQueue),
            n !== null && ((a.retryQueue = null), vs(t, n))));
        break;
      case 19:
        (de(e, t),
          he(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), vs(t, a))));
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
        for (var n, a = t.return; a !== null; ) {
          if (Rh(a)) {
            n = a;
            break;
          }
          a = a.return;
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
            Ju(t, N, S);
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
      var a = e.alternate,
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
            (a = r),
            (s = a.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (N) {
              bt(a, a.return, N);
            }
          if (((a = r), (s = a.updateQueue), s !== null)) {
            var m = a.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  xd(S[s], m);
            } catch (N) {
              bt(a, a.return, N);
            }
          }
          (n && f & 64 && zh(r), Ji(r, r.return));
          break;
        case 27:
          _h(r);
        case 26:
        case 5:
          (yn(s, r, n), n && a === null && f & 4 && Vh(r), Ji(r, r.return));
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
          (r.memoizedState === null && yn(s, r, n), Ji(r, r.return));
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
  function Ye(t, e, n, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Xh(t, e, n, a), (e = e.sibling));
  }
  function Xh(t, e, n, a) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Ye(t, e, n, a), s & 2048 && Ki(9, e));
        break;
      case 1:
        Ye(t, e, n, a);
        break;
      case 3:
        (Ye(t, e, n, a),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Ri(t))));
        break;
      case 12:
        if (s & 2048) {
          (Ye(t, e, n, a), (t = e.stateNode));
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
        } else Ye(t, e, n, a);
        break;
      case 31:
        Ye(t, e, n, a);
        break;
      case 13:
        Ye(t, e, n, a);
        break;
      case 23:
        break;
      case 22:
        ((r = e.stateNode),
          (f = e.alternate),
          e.memoizedState !== null
            ? r._visibility & 2
              ? Ye(t, e, n, a)
              : ki(t, e)
            : r._visibility & 2
              ? Ye(t, e, n, a)
              : ((r._visibility |= 2),
                Ja(t, e, n, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          s & 2048 && Pu(f, e));
        break;
      case 24:
        (Ye(t, e, n, a), s & 2048 && Fu(e.alternate, e));
        break;
      default:
        Ye(t, e, n, a);
    }
  }
  function Ja(t, e, n, a, s) {
    for (
      s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var r = t,
        f = e,
        m = n,
        S = a,
        N = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          (Ja(r, f, m, S, s), Ki(8, f));
          break;
        case 23:
          break;
        case 22:
          var z = f.stateNode;
          (f.memoizedState !== null
            ? z._visibility & 2
              ? Ja(r, f, m, S, s)
              : ki(r, f)
            : ((z._visibility |= 2), Ja(r, f, m, S, s)),
            s && N & 2048 && Pu(f.alternate, f));
          break;
        case 24:
          (Ja(r, f, m, S, s), s && N & 2048 && Fu(f.alternate, f));
          break;
        default:
          Ja(r, f, m, S, s);
      }
      e = e.sibling;
    }
  }
  function ki(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          a = e,
          s = a.flags;
        switch (a.tag) {
          case 22:
            (ki(n, a), s & 2048 && Pu(a.alternate, a));
            break;
          case 24:
            (ki(n, a), s & 2048 && Fu(a.alternate, a));
            break;
          default:
            ki(n, a);
        }
        e = e.sibling;
      }
  }
  var Pi = 8192;
  function ka(t, e, n) {
    if (t.subtreeFlags & Pi)
      for (t = t.child; t !== null; ) (Qh(t, e, n), (t = t.sibling));
  }
  function Qh(t, e, n) {
    switch (t.tag) {
      case 26:
        (ka(t, e, n),
          t.flags & Pi &&
            t.memoizedState !== null &&
            w1(n, qe, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        ka(t, e, n);
        break;
      case 3:
      case 4:
        var a = qe;
        ((qe = Vs(t.stateNode.containerInfo)), ka(t, e, n), (qe = a));
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = Pi), (Pi = 16777216), ka(t, e, n), (Pi = a))
            : ka(t, e, n));
        break;
      default:
        ka(t, e, n);
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
          var a = e[n];
          ((Jt = a), Jh(a, t));
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
          var a = e[n];
          ((Jt = a), Jh(a, t));
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
  function Jh(t, e) {
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
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ri(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) ((a.return = n), (Jt = a));
      else
        t: for (n = t; Jt !== null; ) {
          a = Jt;
          var s = a.sibling,
            r = a.return;
          if ((Bh(a), a === n)) {
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
  var Fv = {
      getCacheForType: function (t) {
        var e = Wt(Lt),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
      cacheSignal: function () {
        return Wt(Lt).controller.signal;
      },
    },
    Wv = typeof WeakMap == "function" ? WeakMap : Map,
    gt = 0,
    Et = null,
    rt = null,
    ft = 0,
    xt = 0,
    Ae = null,
    _n = !1,
    Pa = !1,
    Wu = !1,
    gn = 0,
    Vt = 0,
    wn = 0,
    ma = 0,
    $u = 0,
    Ee = 0,
    Fa = 0,
    Wi = null,
    me = null,
    Iu = !1,
    bs = 0,
    kh = 0,
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
    var a = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || vi(t, e),
      s = a ? t1(t, e) : ir(t, e, !0),
      r = a;
    do {
      if (s === 0) {
        Pa && !a && Ln(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), r && !$v(n))) {
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
          switch (((a = t), (r = s), r)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Ln(a, e, Ee, !_n);
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
            if ((Ln(a, e, Ee, !_n), Vl(a, 0, !0) !== 0)) break t;
            ((vn = e),
              (a.timeoutHandle = Cm(
                $h.bind(
                  null,
                  a,
                  n,
                  me,
                  Ts,
                  Iu,
                  e,
                  Ee,
                  ma,
                  Fa,
                  _n,
                  r,
                  "Throttled",
                  -0,
                  0,
                ),
                s,
              )));
            break t;
          }
          $h(a, n, me, Ts, Iu, e, Ee, ma, Fa, _n, r, null, -0, 0);
        }
      }
      break;
    } while (!0);
    We(t);
  }
  function $h(t, e, n, a, s, r, f, m, S, N, z, w, C, j) {
    if (
      ((t.timeoutHandle = -1),
      (w = e.subtreeFlags),
      w & 8192 || (w & 16785408) === 16785408)
    ) {
      ((w = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: nn,
      }),
        Qh(e, r, w));
      var Z =
        (r & 62914560) === r ? bs - ye() : (r & 4194048) === r ? kh - ye() : 0;
      if (((Z = U1(w, Z)), Z !== null)) {
        ((vn = r),
          (t.cancelPendingCommit = Z(
            sm.bind(null, t, e, r, n, a, s, f, m, S, z, w, null, C, j),
          )),
          Ln(t, r, f, !N));
        return;
      }
    }
    sm(t, e, r, n, a, s, f, m, S);
  }
  function $v(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var s = n[a],
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
  function Ln(t, e, n, a) {
    ((e &= ~$u),
      (e &= ~ma),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes));
    for (var s = e; 0 < s; ) {
      var r = 31 - ve(s),
        f = 1 << r;
      ((a[r] = -1), (s &= ~f));
    }
    n !== 0 && uf(t, n, e);
  }
  function As() {
    return (gt & 6) === 0 ? (Ii(0), !1) : !0;
  }
  function ar() {
    if (rt !== null) {
      if (xt === 0) var t = rt.return;
      else ((t = rt), (on = la = null), xu(t), (Ga = null), (wi = 0), (t = rt));
      for (; t !== null; ) (jh(t.alternate, t), (t = t.return));
      rt = null;
    }
  }
  function $a(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), v1(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (vn = 0),
      ar(),
      (Et = t),
      (rt = n = ln(t.current, null)),
      (ft = e),
      (xt = 0),
      (Ae = null),
      (_n = !1),
      (Pa = vi(t, e)),
      (Wu = !1),
      (Fa = Ee = $u = ma = wn = Vt = 0),
      (me = Wi = null),
      (Iu = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var s = 31 - ve(a),
          r = 1 << s;
        ((e |= t[s]), (a &= ~r));
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
              e === wu
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (Ae = e),
      rt === null && ((Vt = 1), ds(t, je(e, t.current))));
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
    return ((O.A = Fv), t);
  }
  function Es() {
    ((Vt = 4),
      _n || ((ft & 4194048) !== ft && Se.current !== null) || (Pa = !0),
      ((wn & 134217727) === 0 && (ma & 134217727) === 0) ||
        Et === null ||
        Ln(Et, ft, Ee, !1));
  }
  function ir(t, e, n) {
    var a = gt;
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
        (Iv(), (f = Vt));
        break;
      } catch (z) {
        Ih(t, z);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (on = la = null),
      (gt = a),
      (O.H = s),
      (O.A = r),
      rt === null && ((Et = null), (ft = 0), Ql()),
      f
    );
  }
  function Iv() {
    for (; rt !== null; ) am(rt);
  }
  function t1(t, e) {
    var n = gt;
    gt |= 2;
    var a = em(),
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
        e1();
        break;
      } catch (z) {
        Ih(t, z);
      }
    while (!0);
    return (
      (on = la = null),
      (O.H = a),
      (O.A = s),
      (gt = n),
      rt !== null ? 0 : ((Et = null), (ft = 0), Ql(), Vt)
    );
  }
  function e1() {
    for (; rt !== null && !Eg(); ) am(rt);
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
        (jh(n, e), (e = rt = nd(e, gn)), (e = Nh(n, e, gn)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Ms(t) : (rt = e));
  }
  function Ia(t, e, n, a) {
    ((on = la = null), xu(e), (Ga = null), (wi = 0));
    var s = e.return;
    try {
      if (Xv(t, s, e, n, ft)) {
        ((Vt = 1), ds(t, je(n, t.current)), (rt = null));
        return;
      }
    } catch (r) {
      if (s !== null) throw ((rt = s), r);
      ((Vt = 1), ds(t, je(n, t.current)), (rt = null));
      return;
    }
    e.flags & 32768
      ? (mt || a === 1
          ? (t = !0)
          : Pa || (ft & 536870912) !== 0
            ? (t = !1)
            : ((_n = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Se.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        lm(e, t))
      : Ms(e);
  }
  function Ms(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        lm(e, _n);
        return;
      }
      t = e.return;
      var n = Kv(e.alternate, e, gn);
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
      var n = Jv(t.alternate, t);
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
  function sm(t, e, n, a, s, r, f, m, S) {
    t.cancelPendingCommit = null;
    do Ds();
    while (Qt !== 0);
    if ((gt & 6) !== 0) throw Error(u(327));
    if (e !== null) {
      if (e === t.current) throw Error(u(177));
      if (
        ((r = e.lanes | e.childLanes),
        (r |= Ko),
        _g(t, n, r, f, m, S),
        t === Et && ((rt = Et = null), (ft = 0)),
        (Wa = e),
        (Bn = t),
        (vn = n),
        (tr = r),
        (er = s),
        (Ph = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            l1(Cl, function () {
              return (fm(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = O.T), (O.T = null), (s = q.p), (q.p = 2), (f = gt), (gt |= 4));
        try {
          kv(t, e, n);
        } finally {
          ((gt = f), (q.p = s), (O.T = a));
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
        var a = q.p;
        q.p = 2;
        var s = gt;
        gt |= 4;
        try {
          Yh(e, t);
          var r = yr,
            f = Jf(t.containerInfo),
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
                var w = m.ownerDocument || document,
                  C = (w && w.defaultView) || window;
                if (C.getSelection) {
                  var j = C.getSelection(),
                    Z = m.textContent.length,
                    tt = Math.min(S.start, Z),
                    At = S.end === void 0 ? tt : Math.min(S.end, Z);
                  !j.extend && tt > At && ((f = At), (At = tt), (tt = f));
                  var M = Zf(m, tt),
                    T = Zf(m, At);
                  if (
                    M &&
                    T &&
                    (j.rangeCount !== 1 ||
                      j.anchorNode !== M.node ||
                      j.anchorOffset !== M.offset ||
                      j.focusNode !== T.node ||
                      j.focusOffset !== T.offset)
                  ) {
                    var D = w.createRange();
                    (D.setStart(M.node, M.offset),
                      j.removeAllRanges(),
                      tt > At
                        ? (j.addRange(D), j.extend(T.node, T.offset))
                        : (D.setEnd(T.node, T.offset), j.addRange(D)));
                  }
                }
              }
            }
            for (w = [], j = m; (j = j.parentNode); )
              j.nodeType === 1 &&
                w.push({ element: j, left: j.scrollLeft, top: j.scrollTop });
            for (
              typeof m.focus == "function" && m.focus(), m = 0;
              m < w.length;
              m++
            ) {
              var R = w[m];
              ((R.element.scrollLeft = R.left), (R.element.scrollTop = R.top));
            }
          }
          ((Ls = !!pr), (yr = pr = null));
        } finally {
          ((gt = s), (q.p = a), (O.T = n));
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
        var a = q.p;
        q.p = 2;
        var s = gt;
        gt |= 4;
        try {
          Uh(t, e.alternate, e);
        } finally {
          ((gt = s), (q.p = a), (O.T = n));
        }
      }
      Qt = 3;
    }
  }
  function rm() {
    if (Qt === 4 || Qt === 3) {
      ((Qt = 0), Mg());
      var t = Bn,
        e = Wa,
        n = vn,
        a = Ph;
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
      if (a !== null) {
        ((e = O.T), (s = q.p), (q.p = 2), (O.T = null));
        try {
          for (var r = t.onRecoverableError, f = 0; f < a.length; f++) {
            var m = a[f];
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
      a = O.T,
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
      ((q.p = s), (O.T = a), cm(t, e));
    }
  }
  function dm(t, e, n) {
    ((e = je(n, e)),
      (e = _u(t.stateNode, e, 2)),
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
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Un === null || !Un.has(a)))
          ) {
            ((t = je(n, t)),
              (n = hh(2)),
              (a = zn(e, n, 2)),
              a !== null && (mh(n, a, e, t), xi(a, 2), We(a)));
            break;
          }
        }
        e = e.return;
      }
  }
  function lr(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Wv();
      var s = new Set();
      a.set(e, s);
    } else ((s = a.get(e)), s === void 0 && ((s = new Set()), a.set(e, s)));
    s.has(n) ||
      ((Wu = !0), s.add(n), (t = n1.bind(null, t, e, n)), e.then(t, t));
  }
  function n1(t, e, n) {
    var a = t.pingCache;
    (a !== null && a.delete(e),
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
  function a1(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), hm(t, n));
  }
  function i1(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    (a !== null && a.delete(e), hm(t, n));
  }
  function l1(t, e) {
    return vo(t, e);
  }
  var Ns = null,
    ti = null,
    sr = !1,
    Cs = !1,
    or = !1,
    Hn = 0;
  function We(t) {
    (t !== ti &&
      t.next === null &&
      (ti === null ? (Ns = ti = t) : (ti = ti.next = t)),
      (Cs = !0),
      sr || ((sr = !0), o1()));
  }
  function Ii(t, e) {
    if (!or && Cs) {
      or = !0;
      do
        for (var n = !1, a = Ns; a !== null; ) {
          if (t !== 0) {
            var s = a.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var f = a.suspendedLanes,
                m = a.pingedLanes;
              ((r = (1 << (31 - ve(42 | t) + 1)) - 1),
                (r &= s & ~(f & ~m)),
                (r = r & 201326741 ? (r & 201326741) | 1 : r ? r | 2 : 0));
            }
            r !== 0 && ((n = !0), gm(a, r));
          } else
            ((r = ft),
              (r = Vl(
                a,
                a === Et ? r : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (r & 3) === 0 || vi(a, r) || ((n = !0), gm(a, r)));
          a = a.next;
        }
      while (n);
      or = !1;
    }
  }
  function s1() {
    mm();
  }
  function mm() {
    Cs = sr = !1;
    var t = 0;
    Hn !== 0 && g1() && (t = Hn);
    for (var e = ye(), n = null, a = Ns; a !== null; ) {
      var s = a.next,
        r = pm(a, e);
      (r === 0
        ? ((a.next = null),
          n === null ? (Ns = s) : (n.next = s),
          s === null && (ti = n))
        : ((n = a), (t !== 0 || (r & 3) !== 0) && (Cs = !0)),
        (a = s));
    }
    ((Qt !== 0 && Qt !== 5) || Ii(t), Hn !== 0 && (Hn = 0));
  }
  function pm(t, e) {
    for (
      var n = t.suspendedLanes,
        a = t.pingedLanes,
        s = t.expirationTimes,
        r = t.pendingLanes & -62914561;
      0 < r;
    ) {
      var f = 31 - ve(r),
        m = 1 << f,
        S = s[f];
      (S === -1
        ? ((m & n) === 0 || (m & a) !== 0) && (s[f] = Rg(m, e))
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
      (a = t.callbackNode),
      n === 0 ||
        (t === e && (xt === 2 || xt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && xo(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || vi(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((a !== null && xo(a), To(n))) {
        case 2:
        case 8:
          n = lf;
          break;
        case 32:
          n = Cl;
          break;
        case 268435456:
          n = sf;
          break;
        default:
          n = Cl;
      }
      return (
        (a = ym.bind(null, t)),
        (n = vo(n, a)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      a !== null && a !== null && xo(a),
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
    var a = ft;
    return (
      (a = Vl(
        t,
        t === Et ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (Wh(t, a, e),
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
  function o1() {
    x1(function () {
      (gt & 6) !== 0 ? vo(af, s1) : mm();
    });
  }
  function ur() {
    if (Hn === 0) {
      var t = Ha;
      (t === 0 && ((t = jl), (jl <<= 1), (jl & 261888) === 0 && (jl = 256)),
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
  function u1(t, e, n, a, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var r = vm((s[re] || null).action),
        f = a.submitter;
      f &&
        ((e = (e = f[re] || null)
          ? vm(e.formAction)
          : f.getAttribute("formAction")),
        e !== null && ((r = e), (f = null)));
      var m = new ql("action", "action", null, a, s);
      t.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Hn !== 0) {
                  var S = f ? xm(s, f) : new FormData(s);
                  Cu(
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
                  Cu(
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
      r1 = cr.toLowerCase(),
      c1 = cr[0].toUpperCase() + cr.slice(1);
    He(r1, "on" + c1);
  }
  (He(Ff, "onAnimationEnd"),
    He(Wf, "onAnimationIteration"),
    He($f, "onAnimationStart"),
    He("dblclick", "onDoubleClick"),
    He("focusin", "onFocus"),
    He("focusout", "onBlur"),
    He(Dv, "onTransitionRun"),
    He(Nv, "onTransitionStart"),
    He(Cv, "onTransitionCancel"),
    He(If, "onTransitionEnd"),
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
    f1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(tl),
    );
  function bm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n],
        s = a.event;
      a = a.listeners;
      t: {
        var r = void 0;
        if (e)
          for (var f = a.length - 1; 0 <= f; f--) {
            var m = a[f],
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
          for (f = 0; f < a.length; f++) {
            if (
              ((m = a[f]),
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
    var a = t + "__bubble";
    n.has(a) || (Sm(e, t, 2, !1), n.add(a));
  }
  function fr(t, e, n) {
    var a = 0;
    (e && (a |= 4), Sm(n, t, a, e));
  }
  var js = "_reactListening" + Math.random().toString(36).slice(2);
  function dr(t) {
    if (!t[js]) {
      ((t[js] = !0),
        mf.forEach(function (n) {
          n !== "selectionchange" && (f1.has(n) || fr(n, !1, t), fr(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[js] || ((e[js] = !0), fr("selectionchange", !1, e));
    }
  }
  function Sm(t, e, n, a) {
    switch (Fm(e)) {
      case 2:
        var s = H1;
        break;
      case 8:
        s = q1;
        break;
      default:
        s = Nr;
    }
    ((n = s.bind(null, e, n, t)),
      (s = void 0),
      !Vo ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (s = !0),
      a
        ? s !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: s })
          : t.addEventListener(e, n, !0)
        : s !== void 0
          ? t.addEventListener(e, n, { passive: s })
          : t.addEventListener(e, n, !1));
  }
  function hr(t, e, n, a, s) {
    var r = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var m = a.stateNode.containerInfo;
          if (m === s) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var S = f.tag;
              if ((S === 3 || S === 4) && f.stateNode.containerInfo === s)
                return;
              f = f.return;
            }
          for (; m !== null; ) {
            if (((f = Ta(m)), f === null)) return;
            if (((S = f.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              a = r = f;
              continue t;
            }
            m = m.parentNode;
          }
        }
        a = a.return;
      }
    Df(function () {
      var N = r,
        z = zo(n),
        w = [];
      t: {
        var C = td.get(t);
        if (C !== void 0) {
          var j = ql,
            Z = t;
          switch (t) {
            case "keypress":
              if (Ll(n) === 0) break t;
            case "keydown":
            case "keyup":
              j = iv;
              break;
            case "focusin":
              ((Z = "focus"), (j = Uo));
              break;
            case "focusout":
              ((Z = "blur"), (j = Uo));
              break;
            case "beforeblur":
            case "afterblur":
              j = Uo;
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
              j = jf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = Kg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = ov;
              break;
            case Ff:
            case Wf:
            case $f:
              j = Pg;
              break;
            case If:
              j = rv;
              break;
            case "scroll":
            case "scrollend":
              j = Qg;
              break;
            case "wheel":
              j = fv;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = Wg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = Of;
              break;
            case "toggle":
            case "beforetoggle":
              j = hv;
          }
          var tt = (e & 4) !== 0,
            At = !tt && (t === "scroll" || t === "scrollend"),
            M = tt ? (C !== null ? C + "Capture" : null) : C;
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
            ((C = new j(C, Z, null, n, z)),
            w.push({ event: C, listeners: tt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((C = t === "mouseover" || t === "pointerover"),
            (j = t === "mouseout" || t === "pointerout"),
            C &&
              n !== jo &&
              (Z = n.relatedTarget || n.fromElement) &&
              (Ta(Z) || Z[Sa]))
          )
            break t;
          if (
            (j || C) &&
            ((C =
              z.window === z
                ? z
                : (C = z.ownerDocument)
                  ? C.defaultView || C.parentWindow
                  : window),
            j
              ? ((Z = n.relatedTarget || n.toElement),
                (j = N),
                (Z = Z ? Ta(Z) : null),
                Z !== null &&
                  ((At = h(Z)),
                  (tt = Z.tag),
                  Z !== At || (tt !== 5 && tt !== 27 && tt !== 6)) &&
                  (Z = null))
              : ((j = null), (Z = N)),
            j !== Z)
          ) {
            if (
              ((tt = jf),
              (R = "onMouseLeave"),
              (M = "onMouseEnter"),
              (T = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((tt = Of),
                (R = "onPointerLeave"),
                (M = "onPointerEnter"),
                (T = "pointer")),
              (At = j == null ? C : Si(j)),
              (D = Z == null ? C : Si(Z)),
              (C = new tt(R, T + "leave", j, n, z)),
              (C.target = At),
              (C.relatedTarget = D),
              (R = null),
              Ta(z) === N &&
                ((tt = new tt(M, T + "enter", Z, n, z)),
                (tt.target = D),
                (tt.relatedTarget = At),
                (R = tt)),
              (At = R),
              j && Z)
            )
              e: {
                for (tt = d1, M = j, T = Z, D = 0, R = M; R; R = tt(R)) D++;
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
            (j !== null && Tm(w, C, j, tt, !1),
              Z !== null && At !== null && Tm(w, At, Z, tt, !0));
          }
        }
        t: {
          if (
            ((C = N ? Si(N) : window),
            (j = C.nodeName && C.nodeName.toLowerCase()),
            j === "select" || (j === "input" && C.type === "file"))
          )
            var pt = Hf;
          else if (Bf(C))
            if (qf) pt = Av;
            else {
              pt = Sv;
              var k = bv;
            }
          else
            ((j = C.nodeName),
              !j ||
              j.toLowerCase() !== "input" ||
              (C.type !== "checkbox" && C.type !== "radio")
                ? N && Co(N.elementType) && (pt = Hf)
                : (pt = Tv));
          if (pt && (pt = pt(t, N))) {
            Lf(w, pt, n, z);
            break t;
          }
          (k && k(t, C, N),
            t === "focusout" &&
              N &&
              C.type === "number" &&
              N.memoizedProps.value != null &&
              No(C, "number", C.value));
        }
        switch (((k = N ? Si(N) : window), t)) {
          case "focusin":
            (Bf(k) || k.contentEditable === "true") &&
              ((Oa = k), (Go = N), (zi = null));
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
            ((Xo = !1), kf(w, n, z));
            break;
          case "selectionchange":
            if (Mv) break;
          case "keydown":
          case "keyup":
            kf(w, n, z);
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
            ? wf(t, n) && (dt = "onCompositionEnd")
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
          (k = zs(N, dt)),
          0 < k.length &&
            ((dt = new zf(dt, t, null, n, z)),
            w.push({ event: dt, listeners: k }),
            ot
              ? (dt.data = ot)
              : ((ot = Uf(n)), ot !== null && (dt.data = ot)))),
          (ot = pv ? yv(t, n) : gv(t, n)) &&
            ((dt = zs(N, "onBeforeInput")),
            0 < dt.length &&
              ((k = new zf("onBeforeInput", "beforeinput", null, n, z)),
              w.push({ event: k, listeners: dt }),
              (k.data = ot))),
          u1(w, t, N, n, z));
      }
      bm(w, e);
    });
  }
  function el(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function zs(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var s = t,
        r = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          r === null ||
          ((s = Ti(t, n)),
          s != null && a.unshift(el(t, s, r)),
          (s = Ti(t, e)),
          s != null && a.push(el(t, s, r))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function d1(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Tm(t, e, n, a, s) {
    for (var r = e._reactName, f = []; n !== null && n !== a; ) {
      var m = n,
        S = m.alternate,
        N = m.stateNode;
      if (((m = m.tag), S !== null && S === a)) break;
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
  var h1 = /\r\n?/g,
    m1 = /\u0000|\uFFFD/g;
  function Am(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        h1,
        `
`,
      )
      .replace(m1, "");
  }
  function Em(t, e) {
    return ((e = Am(e)), Am(t) === e);
  }
  function Tt(t, e, n, a, s, r) {
    switch (n) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || Na(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            Na(t, "" + a);
        break;
      case "className":
        _l(t, "class", a);
        break;
      case "tabIndex":
        _l(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        _l(t, n, a);
        break;
      case "style":
        Ef(t, a, r);
        break;
      case "data":
        if (e !== "object") {
          _l(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        ((a = Ul("" + a)), t.setAttribute(n, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
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
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((a = Ul("" + a)), t.setAttribute(n, a));
        break;
      case "onClick":
        a != null && (t.onclick = nn);
        break;
      case "onScroll":
        a != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ct("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(u(61));
          if (((n = a.__html), n != null)) {
            if (s.children != null) throw Error(u(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
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
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((n = Ul("" + a)),
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
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "" + a)
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
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(n, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? t.setAttribute(n, a)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(n, a)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(n)
          : t.setAttribute(n, a);
        break;
      case "popover":
        (ct("beforetoggle", t), ct("toggle", t), Rl(t, "popover", a));
        break;
      case "xlinkActuate":
        en(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        en(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        en(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        en(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        en(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        en(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        en(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        en(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        en(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Rl(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Gg.get(n) || n), Rl(t, n, a));
    }
  }
  function mr(t, e, n, a, s, r) {
    switch (n) {
      case "style":
        Ef(t, a, r);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(u(61));
          if (((n = a.__html), n != null)) {
            if (s.children != null) throw Error(u(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Na(t, a)
          : (typeof a == "number" || typeof a == "bigint") && Na(t, "" + a);
        break;
      case "onScroll":
        a != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ct("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = nn);
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
              typeof a == "function")
            ) {
              (typeof r != "function" &&
                r !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, a, s));
              break t;
            }
            n in t
              ? (t[n] = a)
              : a === !0
                ? t.setAttribute(n, "")
                : Rl(t, n, a);
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
        var a = !1,
          s = !1,
          r;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var f = n[r];
            if (f != null)
              switch (r) {
                case "src":
                  a = !0;
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
          a && Tt(t, e, "src", n.src, n, null));
        return;
      case "input":
        ct("invalid", t);
        var m = (r = f = s = null),
          S = null,
          N = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var z = n[a];
            if (z != null)
              switch (a) {
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
                  Tt(t, e, a, z, n, null);
              }
          }
        bf(t, r, m, S, N, f, s, !1);
        return;
      case "select":
        (ct("invalid", t), (a = f = r = null));
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
                a = m;
              default:
                Tt(t, e, s, m, n, null);
            }
        ((e = r),
          (n = f),
          (t.multiple = !!a),
          e != null ? Da(t, !!a, e, !1) : n != null && Da(t, !!a, n, !0));
        return;
      case "textarea":
        (ct("invalid", t), (r = s = a = null));
        for (f in n)
          if (n.hasOwnProperty(f) && ((m = n[f]), m != null))
            switch (f) {
              case "value":
                a = m;
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
        Tf(t, a, s, r);
        return;
      case "option":
        for (S in n)
          n.hasOwnProperty(S) &&
            ((a = n[S]), a != null) &&
            (S === "selected"
              ? (t.selected =
                  a && typeof a != "function" && typeof a != "symbol")
              : Tt(t, e, S, a, n, null));
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
        for (a = 0; a < tl.length; a++) ct(tl[a], t);
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
          if (n.hasOwnProperty(N) && ((a = n[N]), a != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, e));
              default:
                Tt(t, e, N, a, n, null);
            }
        return;
      default:
        if (Co(e)) {
          for (z in n)
            n.hasOwnProperty(z) &&
              ((a = n[z]), a !== void 0 && mr(t, e, z, a, n, void 0));
          return;
        }
    }
    for (m in n)
      n.hasOwnProperty(m) && ((a = n[m]), a != null && Tt(t, e, m, a, n, null));
  }
  function p1(t, e, n, a) {
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
        for (j in n) {
          var w = n[j];
          if (n.hasOwnProperty(j) && w != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = w;
              default:
                a.hasOwnProperty(j) || Tt(t, e, j, null, a, w);
            }
        }
        for (var C in a) {
          var j = a[C];
          if (((w = n[C]), a.hasOwnProperty(C) && (j != null || w != null)))
            switch (C) {
              case "type":
                r = j;
                break;
              case "name":
                s = j;
                break;
              case "checked":
                N = j;
                break;
              case "defaultChecked":
                z = j;
                break;
              case "value":
                f = j;
                break;
              case "defaultValue":
                m = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null) throw Error(u(137, e));
                break;
              default:
                j !== w && Tt(t, e, C, j, a, w);
            }
        }
        Do(t, f, m, S, N, z, r, s);
        return;
      case "select":
        j = f = m = C = null;
        for (r in n)
          if (((S = n[r]), n.hasOwnProperty(r) && S != null))
            switch (r) {
              case "value":
                break;
              case "multiple":
                j = S;
              default:
                a.hasOwnProperty(r) || Tt(t, e, r, null, a, S);
            }
        for (s in a)
          if (
            ((r = a[s]),
            (S = n[s]),
            a.hasOwnProperty(s) && (r != null || S != null))
          )
            switch (s) {
              case "value":
                C = r;
                break;
              case "defaultValue":
                m = r;
                break;
              case "multiple":
                f = r;
              default:
                r !== S && Tt(t, e, s, r, a, S);
            }
        ((e = m),
          (n = f),
          (a = j),
          C != null
            ? Da(t, !!n, C, !1)
            : !!a != !!n &&
              (e != null ? Da(t, !!n, e, !0) : Da(t, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        j = C = null;
        for (m in n)
          if (
            ((s = n[m]),
            n.hasOwnProperty(m) && s != null && !a.hasOwnProperty(m))
          )
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                Tt(t, e, m, null, a, s);
            }
        for (f in a)
          if (
            ((s = a[f]),
            (r = n[f]),
            a.hasOwnProperty(f) && (s != null || r != null))
          )
            switch (f) {
              case "value":
                C = s;
                break;
              case "defaultValue":
                j = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(u(91));
                break;
              default:
                s !== r && Tt(t, e, f, s, a, r);
            }
        Sf(t, C, j);
        return;
      case "option":
        for (var Z in n)
          ((C = n[Z]),
            n.hasOwnProperty(Z) &&
              C != null &&
              !a.hasOwnProperty(Z) &&
              (Z === "selected" ? (t.selected = !1) : Tt(t, e, Z, null, a, C)));
        for (S in a)
          ((C = a[S]),
            (j = n[S]),
            a.hasOwnProperty(S) &&
              C !== j &&
              (C != null || j != null) &&
              (S === "selected"
                ? (t.selected =
                    C && typeof C != "function" && typeof C != "symbol")
                : Tt(t, e, S, C, a, j)));
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
          ((C = n[tt]),
            n.hasOwnProperty(tt) &&
              C != null &&
              !a.hasOwnProperty(tt) &&
              Tt(t, e, tt, null, a, C));
        for (N in a)
          if (
            ((C = a[N]),
            (j = n[N]),
            a.hasOwnProperty(N) && C !== j && (C != null || j != null))
          )
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(u(137, e));
                break;
              default:
                Tt(t, e, N, C, a, j);
            }
        return;
      default:
        if (Co(e)) {
          for (var At in n)
            ((C = n[At]),
              n.hasOwnProperty(At) &&
                C !== void 0 &&
                !a.hasOwnProperty(At) &&
                mr(t, e, At, void 0, a, C));
          for (z in a)
            ((C = a[z]),
              (j = n[z]),
              !a.hasOwnProperty(z) ||
                C === j ||
                (C === void 0 && j === void 0) ||
                mr(t, e, z, C, a, j));
          return;
        }
    }
    for (var M in n)
      ((C = n[M]),
        n.hasOwnProperty(M) &&
          C != null &&
          !a.hasOwnProperty(M) &&
          Tt(t, e, M, null, a, C));
    for (w in a)
      ((C = a[w]),
        (j = n[w]),
        !a.hasOwnProperty(w) ||
          C === j ||
          (C == null && j == null) ||
          Tt(t, e, w, C, a, j));
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
  function y1() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0;
        a < n.length;
        a++
      ) {
        var s = n[a],
          r = s.transferSize,
          f = s.initiatorType,
          m = s.duration;
        if (r && m && Mm(f)) {
          for (f = 0, m = s.responseEnd, a += 1; a < n.length; a++) {
            var S = n[a],
              N = S.startTime;
            if (N > m) break;
            var z = S.transferSize,
              w = S.initiatorType;
            z &&
              Mm(w) &&
              ((S = S.responseEnd), (f += z * (S < m ? 1 : (m - N) / (S - N))));
          }
          if ((--a, (e += (8 * (r + f)) / (s.duration / 1e3)), t++, 10 < t))
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
  function g1() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === vr
        ? !1
        : ((vr = t), !0)
      : ((vr = null), !1);
  }
  var Cm = typeof setTimeout == "function" ? setTimeout : void 0,
    v1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    jm = typeof Promise == "function" ? Promise : void 0,
    x1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof jm < "u"
          ? function (t) {
              return jm.resolve(null).then(t).catch(b1);
            }
          : Cm;
  function b1(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function qn(t) {
    return t === "head";
  }
  function zm(t, e) {
    var n = e,
      a = 0;
    do {
      var s = n.nextSibling;
      if ((t.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$" || n === "/&")) {
          if (a === 0) {
            (t.removeChild(s), ii(e));
            return;
          }
          a--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          a++;
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
      var a = n.nextSibling;
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
        a && a.nodeType === 8)
      )
        if (((n = a.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = a;
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
  function S1(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
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
      if (((t = _e(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function T1(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = _e(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Vm(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = _e(t.nextSibling)), t === null)
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
  function A1(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var a = function () {
        (e(), n.removeEventListener("DOMContentLoaded", a));
      };
      (n.addEventListener("DOMContentLoaded", a), (t._reactRetry = a));
    }
  }
  function _e(t) {
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
          if (e === 0) return _e(t.nextSibling);
          e--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function _m(t) {
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
  function wm(t, e, n) {
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
  var we = new Map(),
    Um = new Set();
  function Vs(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var xn = q.d;
  q.d = { f: E1, r: M1, D: D1, C: N1, L: C1, m: j1, X: O1, S: z1, M: V1 };
  function E1() {
    var t = xn.f(),
      e = As();
    return t || e;
  }
  function M1(t) {
    var e = Aa(t);
    e !== null && e.tag === 5 && e.type === "form" ? Id(e) : xn.r(t);
  }
  var ei = typeof document > "u" ? null : document;
  function Bm(t, e, n) {
    var a = ei;
    if (a && typeof e == "string" && e) {
      var s = Ne(e);
      ((s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        Um.has(s) ||
          (Um.add(s),
          (t = { rel: t, crossOrigin: n, href: e }),
          a.querySelector(s) === null &&
            ((e = a.createElement("link")),
            It(e, "link", t),
            Kt(e),
            a.head.appendChild(e))));
    }
  }
  function D1(t) {
    (xn.D(t), Bm("dns-prefetch", t, null));
  }
  function N1(t, e) {
    (xn.C(t, e), Bm("preconnect", t, e));
  }
  function C1(t, e, n) {
    xn.L(t, e, n);
    var a = ei;
    if (a && t && e) {
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
      we.has(r) ||
        ((t = b(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n,
        )),
        we.set(r, t),
        a.querySelector(s) !== null ||
          (e === "style" && a.querySelector(al(r))) ||
          (e === "script" && a.querySelector(il(r))) ||
          ((e = a.createElement("link")),
          It(e, "link", t),
          Kt(e),
          a.head.appendChild(e)));
    }
  }
  function j1(t, e) {
    xn.m(t, e);
    var n = ei;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        s =
          'link[rel="modulepreload"][as="' + Ne(a) + '"][href="' + Ne(t) + '"]',
        r = s;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = ai(t);
      }
      if (
        !we.has(r) &&
        ((t = b({ rel: "modulepreload", href: t }, e)),
        we.set(r, t),
        n.querySelector(s) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(il(r))) return;
        }
        ((a = n.createElement("link")),
          It(a, "link", t),
          Kt(a),
          n.head.appendChild(a));
      }
    }
  }
  function z1(t, e, n) {
    xn.S(t, e, n);
    var a = ei;
    if (a && t) {
      var s = Ea(a).hoistableStyles,
        r = ni(t);
      e = e || "default";
      var f = s.get(r);
      if (!f) {
        var m = { loading: 0, preload: null };
        if ((f = a.querySelector(al(r)))) m.loading = 5;
        else {
          ((t = b({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = we.get(r)) && Ar(t, n));
          var S = (f = a.createElement("link"));
          (Kt(S),
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
            Rs(f, e, a));
        }
        ((f = { type: "stylesheet", instance: f, count: 1, state: m }),
          s.set(r, f));
      }
    }
  }
  function O1(t, e) {
    xn.X(t, e);
    var n = ei;
    if (n && t) {
      var a = Ea(n).hoistableScripts,
        s = ai(t),
        r = a.get(s);
      r ||
        ((r = n.querySelector(il(s))),
        r ||
          ((t = b({ src: t, async: !0 }, e)),
          (e = we.get(s)) && Er(t, e),
          (r = n.createElement("script")),
          Kt(r),
          It(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        a.set(s, r));
    }
  }
  function V1(t, e) {
    xn.M(t, e);
    var n = ei;
    if (n && t) {
      var a = Ea(n).hoistableScripts,
        s = ai(t),
        r = a.get(s);
      r ||
        ((r = n.querySelector(il(s))),
        r ||
          ((t = b({ src: t, async: !0, type: "module" }, e)),
          (e = we.get(s)) && Er(t, e),
          (r = n.createElement("script")),
          Kt(r),
          It(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        a.set(s, r));
    }
  }
  function Lm(t, e, n, a) {
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
            (a = n.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, a)),
            a)
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
              we.has(t) ||
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
                we.set(t, n),
                r || R1(s, t, n, f.state))),
            e && a === null)
          )
            throw Error(u(528, ""));
          return f;
        }
        if (e && a !== null) throw Error(u(529, ""));
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
              (a = n.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, a)),
              a)
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
  function R1(t, e, n, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        It(e, "link", n),
        Kt(e),
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
          var a = t.querySelector('style[data-href~="' + Ne(n.href) + '"]');
          if (a) return ((e.instance = a), Kt(a), a);
          var s = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Kt(a),
            It(a, "style", s),
            Rs(a, n.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          s = ni(n.href);
          var r = t.querySelector(al(s));
          if (r) return ((e.state.loading |= 4), (e.instance = r), Kt(r), r);
          ((a = Hm(n)),
            (s = we.get(s)) && Ar(a, s),
            (r = (t.ownerDocument || t).createElement("link")),
            Kt(r));
          var f = r;
          return (
            (f._p = new Promise(function (m, S) {
              ((f.onload = m), (f.onerror = S));
            })),
            It(r, "link", a),
            (e.state.loading |= 4),
            Rs(r, n.precedence, t),
            (e.instance = r)
          );
        case "script":
          return (
            (r = ai(n.src)),
            (s = t.querySelector(il(r)))
              ? ((e.instance = s), Kt(s), s)
              : ((a = n),
                (s = we.get(r)) && ((a = b({}, n)), Er(a, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                Kt(s),
                It(s, "link", a),
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
        ((a = e.instance), (e.state.loading |= 4), Rs(a, n.precedence, t));
    return e.instance;
  }
  function Rs(t, e, n) {
    for (
      var a = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        s = a.length ? a[a.length - 1] : null,
        r = s,
        f = 0;
      f < a.length;
      f++
    ) {
      var m = a[f];
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
  var _s = null;
  function Ym(t, e, n) {
    if (_s === null) {
      var a = new Map(),
        s = (_s = new Map());
      s.set(n, a);
    } else ((s = _s), (a = s.get(n)), a || ((a = new Map()), s.set(n, a)));
    if (a.has(t)) return a;
    for (
      a.set(t, null), n = n.getElementsByTagName(t), s = 0;
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
        var m = a.get(f);
        m ? m.push(r) : a.set(f, [r]);
      }
    }
    return a;
  }
  function Gm(t, e, n) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function _1(t, e, n) {
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
  function w1(t, e, n, a) {
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var s = ni(a.href),
          r = e.querySelector(al(s));
        if (r) {
          ((e = r._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = ws.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = r),
            Kt(r));
          return;
        }
        ((r = e.ownerDocument || e),
          (a = Hm(a)),
          (s = we.get(s)) && Ar(a, s),
          (r = r.createElement("link")),
          Kt(r));
        var f = r;
        ((f._p = new Promise(function (m, S) {
          ((f.onload = m), (f.onerror = S));
        })),
          It(r, "link", a),
          (n.instance = r));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = ws.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n)));
    }
  }
  var Mr = 0;
  function U1(t, e) {
    return (
      t.stylesheets && t.count === 0 && Bs(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var a = setTimeout(function () {
              if ((t.stylesheets && Bs(t, t.stylesheets), t.unsuspend)) {
                var r = t.unsuspend;
                ((t.unsuspend = null), r());
              }
            }, 6e4 + e);
            0 < t.imgBytes && Mr === 0 && (Mr = 62500 * y1());
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
                ((t.unsuspend = null), clearTimeout(a), clearTimeout(s));
              }
            );
          }
        : null
    );
  }
  function ws() {
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
        e.forEach(B1, t),
        (Us = null),
        ws.call(t)));
  }
  function B1(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Us.get(t);
      if (n) var a = n.get(null);
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
            (n.set(f.dataset.precedence, f), (a = f));
        }
        a && n.set(null, a);
      }
      ((s = e.instance),
        (f = s.getAttribute("data-precedence")),
        (r = n.get(f) || a),
        r === a && n.set(null, s),
        n.set(f, s),
        this.count++,
        (a = ws.bind(this)),
        s.addEventListener("load", a),
        s.addEventListener("error", a),
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
  function L1(t, e, n, a, s, r, f, m, S) {
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
      (this.identifierPrefix = a),
      (this.onUncaughtError = s),
      (this.onCaughtError = r),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = S),
      (this.incompleteTransitions = new Map()));
  }
  function Qm(t, e, n, a, s, r, f, m, S, N, z, w) {
    return (
      (t = new L1(t, e, n, f, S, N, z, w, m)),
      (e = 1),
      r === !0 && (e |= 24),
      (r = be(3, null, null, e)),
      (t.current = r),
      (r.stateNode = t),
      (e = iu()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (r.memoizedState = { element: a, isDehydrated: n, cache: e }),
      uu(r),
      t
    );
  }
  function Zm(t) {
    return t ? ((t = _a), t) : _a;
  }
  function Km(t, e, n, a, s, r) {
    ((s = Zm(s)),
      a.context === null ? (a.context = s) : (a.pendingContext = s),
      (a = jn(e)),
      (a.payload = { element: n }),
      (r = r === void 0 ? null : r),
      r !== null && (a.callback = r),
      (n = zn(t, a, e)),
      n !== null && (pe(n, t, e), Bi(n, t, e)));
  }
  function Jm(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Dr(t, e) {
    (Jm(t, e), (t = t.alternate) && Jm(t, e));
  }
  function km(t) {
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
  function H1(t, e, n, a) {
    var s = O.T;
    O.T = null;
    var r = q.p;
    try {
      ((q.p = 2), Nr(t, e, n, a));
    } finally {
      ((q.p = r), (O.T = s));
    }
  }
  function q1(t, e, n, a) {
    var s = O.T;
    O.T = null;
    var r = q.p;
    try {
      ((q.p = 8), Nr(t, e, n, a));
    } finally {
      ((q.p = r), (O.T = s));
    }
  }
  function Nr(t, e, n, a) {
    if (Ls) {
      var s = Cr(a);
      if (s === null) (hr(t, e, a, Hs, n), Wm(t, a));
      else if (G1(s, t, e, n, a)) a.stopPropagation();
      else if ((Wm(t, a), e & 4 && -1 < Y1.indexOf(t))) {
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
          if (((r = Cr(a)), r === null && hr(t, e, a, Hs, n), r === s)) break;
          s = r;
        }
        s !== null && a.stopPropagation();
      } else hr(t, e, a, null, n);
    }
  }
  function Cr(t) {
    return ((t = zo(t)), jr(t));
  }
  var Hs = null;
  function jr(t) {
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
        switch (Dg()) {
          case af:
            return 2;
          case lf:
            return 8;
          case Cl:
          case Ng:
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
    Y1 =
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
  function ul(t, e, n, a, s, r) {
    return t === null || t.nativeEvent !== r
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: r,
          targetContainers: [s],
        }),
        e !== null && ((e = Aa(e)), e !== null && km(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function G1(t, e, n, a, s) {
    switch (e) {
      case "focusin":
        return ((Yn = ul(Yn, t, e, n, a, s)), !0);
      case "dragenter":
        return ((Gn = ul(Gn, t, e, n, a, s)), !0);
      case "mouseover":
        return ((Xn = ul(Xn, t, e, n, a, s)), !0);
      case "pointerover":
        var r = s.pointerId;
        return (sl.set(r, ul(sl.get(r) || null, t, e, n, a, s)), !0);
      case "gotpointercapture":
        return (
          (r = s.pointerId),
          ol.set(r, ul(ol.get(r) || null, t, e, n, a, s)),
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
      var n = Cr(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((jo = a), n.target.dispatchEvent(a), (jo = null));
      } else return ((e = Aa(n)), e !== null && km(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function Im(t, e, n) {
    qs(t) && n.delete(e);
  }
  function X1() {
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
        i.unstable_scheduleCallback(i.unstable_NormalPriority, X1)));
  }
  var Gs = null;
  function tp(t) {
    Gs !== t &&
      ((Gs = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        Gs === t && (Gs = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            a = t[e + 1],
            s = t[e + 2];
          if (typeof a != "function") {
            if (jr(a || n) === null) continue;
            break;
          }
          var r = Aa(n);
          r !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Cu(r, { pending: !0, data: s, method: n.method, action: a }, a, s));
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
      var a = Qn[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Qn.length && ((n = Qn[0]), n.blockedOn === null); )
      ($m(n), n.blockedOn === null && Qn.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var s = n[a],
          r = n[a + 1],
          f = s[re] || null;
        if (typeof r == "function") f || tp(n);
        else if (f) {
          var m = null;
          if (r && r.hasAttribute("formAction")) {
            if (((s = r), (f = r[re] || null))) m = f.formAction;
            else if (jr(s) !== null) continue;
          } else m = f.action;
          (typeof m == "function" ? (n[a + 1] = m) : (n.splice(a, 3), (a -= 3)),
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
      (s !== null && (s(), (s = null)), a || setTimeout(n, 20));
    }
    function n() {
      if (!a && !navigation.transition) {
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
      var a = !1,
        s = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          ((a = !0),
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
        a = Me();
      Km(n, a, t, e, null, null);
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
  var Q1 = {
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
        ((gi = Qs.inject(Q1)), (ge = Qs));
      } catch {}
  }
  return (
    (cl.createRoot = function (t, e) {
      if (!c(t)) throw Error(u(299));
      var n = !1,
        a = "",
        s = rh,
        r = ch,
        f = fh;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (r = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError)),
        (e = Qm(t, 1, !1, null, null, n, a, null, s, r, f, ep)),
        (t[Sa] = e.current),
        dr(t),
        new Or(e)
      );
    }),
    (cl.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(u(299));
      var a = !1,
        s = "",
        r = rh,
        f = ch,
        m = fh,
        S = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (r = n.onUncaughtError),
          n.onCaughtError !== void 0 && (f = n.onCaughtError),
          n.onRecoverableError !== void 0 && (m = n.onRecoverableError),
          n.formState !== void 0 && (S = n.formState)),
        (e = Qm(t, 1, !0, e, n ?? null, a, s, S, r, f, m, ep)),
        (e.context = Zm(null)),
        (n = e.current),
        (a = Me()),
        (a = So(a)),
        (s = jn(a)),
        (s.callback = null),
        zn(n, s, a),
        (n = a),
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
function tx() {
  if (dp) return _r.exports;
  dp = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return (i(), (_r.exports = I1()), _r.exports);
}
var ex = tx();
const z0 = I.createContext({});
function nx(i) {
  const l = I.useRef(null);
  return (l.current === null && (l.current = i()), l.current);
}
const ax = typeof window < "u",
  ix = ax ? I.useLayoutEffect : I.useEffect,
  Mc = I.createContext(null);
function Dc(i, l) {
  i.indexOf(l) === -1 && i.push(l);
}
function eo(i, l) {
  const o = i.indexOf(l);
  o > -1 && i.splice(o, 1);
}
const tn = (i, l, o) => (o > l ? l : o < i ? i : o);
let Nc = () => {};
const bn = {},
  O0 = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);
function V0(i) {
  return typeof i == "object" && i !== null;
}
const R0 = (i) => /^0[^.\s]+$/u.test(i);
function _0(i) {
  let l;
  return () => (l === void 0 && (l = i()), l);
}
const Be = (i) => i,
  lx = (i, l) => (o) => l(i(o)),
  Al = (...i) => i.reduce(lx),
  vl = (i, l, o) => {
    const u = l - i;
    return u === 0 ? 1 : (o - i) / u;
  };
class Cc {
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
const Qe = (i) => i * 1e3,
  Ue = (i) => i / 1e3;
function w0(i, l) {
  return l ? i * (1e3 / l) : 0;
}
const U0 = (i, l, o) =>
    (((1 - 3 * o + 3 * l) * i + (3 * o - 6 * l)) * i + 3 * l) * i,
  sx = 1e-7,
  ox = 12;
function ux(i, l, o, u, c) {
  let h,
    d,
    y = 0;
  do ((d = l + (o - l) / 2), (h = U0(d, u, c) - i), h > 0 ? (o = d) : (l = d));
  while (Math.abs(h) > sx && ++y < ox);
  return d;
}
function El(i, l, o, u) {
  if (i === l && o === u) return Be;
  const c = (h) => ux(h, 0, 1, i, o);
  return (h) => (h === 0 || h === 1 ? h : U0(c(h), l, u));
}
const B0 = (i) => (l) => (l <= 0.5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2),
  L0 = (i) => (l) => 1 - i(1 - l),
  H0 = El(0.33, 1.53, 0.69, 0.99),
  jc = L0(H0),
  q0 = B0(jc),
  Y0 = (i) =>
    (i *= 2) < 1 ? 0.5 * jc(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))),
  zc = (i) => 1 - Math.sin(Math.acos(i)),
  G0 = L0(zc),
  X0 = B0(zc),
  rx = El(0.42, 0, 1, 1),
  cx = El(0, 0, 0.58, 1),
  Q0 = El(0.42, 0, 0.58, 1),
  fx = (i) => Array.isArray(i) && typeof i[0] != "number",
  Z0 = (i) => Array.isArray(i) && typeof i[0] == "number",
  dx = {
    linear: Be,
    easeIn: rx,
    easeInOut: Q0,
    easeOut: cx,
    circIn: zc,
    circInOut: X0,
    circOut: G0,
    backIn: jc,
    backInOut: q0,
    backOut: H0,
    anticipate: Y0,
  },
  hx = (i) => typeof i == "string",
  hp = (i) => {
    if (Z0(i)) {
      Nc(i.length === 4);
      const [l, o, u, c] = i;
      return El(l, o, u, c);
    } else if (hx(i)) return dx[i];
    return i;
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
function mx(i, l) {
  let o = new Set(),
    u = new Set(),
    c = !1,
    h = !1;
  const d = new WeakSet();
  let y = { delta: 0, timestamp: 0, isProcessing: !1 };
  function g(v) {
    (d.has(v) && (p.schedule(v), i()), v(y));
  }
  const p = {
    schedule: (v, b = !1, E = !1) => {
      const _ = E && c ? o : u;
      return (b && d.add(v), _.has(v) || _.add(v), v);
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
const px = 40;
function K0(i, l) {
  let o = !1,
    u = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    h = () => (o = !0),
    d = Zs.reduce((B, P) => ((B[P] = mx(h)), B), {}),
    {
      setup: y,
      read: g,
      resolveKeyframes: p,
      preUpdate: v,
      update: b,
      preRender: E,
      render: V,
      postRender: _,
    } = d,
    L = () => {
      const B = bn.useManualTiming ? c.timestamp : performance.now();
      ((o = !1),
        bn.useManualTiming ||
          (c.delta = u ? 1e3 / 60 : Math.max(Math.min(B - c.timestamp, px), 1)),
        (c.timestamp = B),
        (c.isProcessing = !0),
        y.process(c),
        g.process(c),
        p.process(c),
        v.process(c),
        b.process(c),
        E.process(c),
        V.process(c),
        _.process(c),
        (c.isProcessing = !1),
        o && l && ((u = !1), i(L)));
    },
    X = () => {
      ((o = !0), (u = !0), c.isProcessing || i(L));
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
  cancel: kn,
  state: te,
  steps: Lr,
} = K0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Be, !0);
let ks;
function yx() {
  ks = void 0;
}
const le = {
    now: () => (
      ks === void 0 &&
        le.set(
          te.isProcessing || bn.useManualTiming
            ? te.timestamp
            : performance.now(),
        ),
      ks
    ),
    set: (i) => {
      ((ks = i), queueMicrotask(yx));
    },
  },
  J0 = (i) => (l) => typeof l == "string" && l.startsWith(i),
  k0 = J0("--"),
  gx = J0("var(--"),
  Oc = (i) => (gx(i) ? vx.test(i.split("/*")[0].trim()) : !1),
  vx =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function mp(i) {
  return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--");
}
const hi = {
    test: (i) => typeof i == "number",
    parse: parseFloat,
    transform: (i) => i,
  },
  xl = { ...hi, transform: (i) => tn(0, 1, i) },
  Ks = { ...hi, default: 1 },
  hl = (i) => Math.round(i * 1e5) / 1e5,
  Vc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function xx(i) {
  return i == null;
}
const bx =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Rc = (i, l) => (o) =>
    !!(
      (typeof o == "string" && bx.test(o) && o.startsWith(i)) ||
      (l && !xx(o) && Object.prototype.hasOwnProperty.call(o, l))
    ),
  P0 = (i, l, o) => (u) => {
    if (typeof u != "string") return u;
    const [c, h, d, y] = u.match(Vc);
    return {
      [i]: parseFloat(c),
      [l]: parseFloat(h),
      [o]: parseFloat(d),
      alpha: y !== void 0 ? parseFloat(y) : 1,
    };
  },
  Sx = (i) => tn(0, 255, i),
  Hr = { ...hi, transform: (i) => Math.round(Sx(i)) },
  ga = {
    test: Rc("rgb", "red"),
    parse: P0("red", "green", "blue"),
    transform: ({ red: i, green: l, blue: o, alpha: u = 1 }) =>
      "rgba(" +
      Hr.transform(i) +
      ", " +
      Hr.transform(l) +
      ", " +
      Hr.transform(o) +
      ", " +
      hl(xl.transform(u)) +
      ")",
  };
function Tx(i) {
  let l = "",
    o = "",
    u = "",
    c = "";
  return (
    i.length > 5
      ? ((l = i.substring(1, 3)),
        (o = i.substring(3, 5)),
        (u = i.substring(5, 7)),
        (c = i.substring(7, 9)))
      : ((l = i.substring(1, 2)),
        (o = i.substring(2, 3)),
        (u = i.substring(3, 4)),
        (c = i.substring(4, 5)),
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
const ec = { test: Rc("#"), parse: Tx, transform: ga.transform },
  Ml = (i) => ({
    test: (l) =>
      typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: (l) => `${l}${i}`,
  }),
  Kn = Ml("deg"),
  Ie = Ml("%"),
  K = Ml("px"),
  Ax = Ml("vh"),
  Ex = Ml("vw"),
  pp = {
    ...Ie,
    parse: (i) => Ie.parse(i) / 100,
    transform: (i) => Ie.transform(i * 100),
  },
  si = {
    test: Rc("hsl", "hue"),
    parse: P0("hue", "saturation", "lightness"),
    transform: ({ hue: i, saturation: l, lightness: o, alpha: u = 1 }) =>
      "hsla(" +
      Math.round(i) +
      ", " +
      Ie.transform(hl(l)) +
      ", " +
      Ie.transform(hl(o)) +
      ", " +
      hl(xl.transform(u)) +
      ")",
  },
  Gt = {
    test: (i) => ga.test(i) || ec.test(i) || si.test(i),
    parse: (i) =>
      ga.test(i) ? ga.parse(i) : si.test(i) ? si.parse(i) : ec.parse(i),
    transform: (i) =>
      typeof i == "string"
        ? i
        : i.hasOwnProperty("red")
          ? ga.transform(i)
          : si.transform(i),
    getAnimatableNone: (i) => {
      const l = Gt.parse(i);
      return ((l.alpha = 0), Gt.transform(l));
    },
  },
  Mx =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Dx(i) {
  return (
    isNaN(i) &&
    typeof i == "string" &&
    (i.match(Vc)?.length || 0) + (i.match(Mx)?.length || 0) > 0
  );
}
const F0 = "number",
  W0 = "color",
  Nx = "var",
  Cx = "var(",
  yp = "${}",
  jx =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function bl(i) {
  const l = i.toString(),
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
          : g.startsWith(Cx)
            ? (u.var.push(h), c.push(Nx), o.push(g))
            : (u.number.push(h), c.push(F0), o.push(parseFloat(g))),
        ++h,
        yp
      ),
    )
    .split(yp);
  return { values: o, split: y, indexes: u, types: c };
}
function $0(i) {
  return bl(i).values;
}
function I0(i) {
  const { split: l, types: o } = bl(i),
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
const zx = (i) =>
  typeof i == "number" ? 0 : Gt.test(i) ? Gt.getAnimatableNone(i) : i;
function Ox(i) {
  const l = $0(i);
  return I0(i)(l.map(zx));
}
const Ze = {
  test: Dx,
  parse: $0,
  createTransformer: I0,
  getAnimatableNone: Ox,
};
function qr(i, l, o) {
  return (
    o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6
      ? i + (l - i) * 6 * o
      : o < 1 / 2
        ? l
        : o < 2 / 3
          ? i + (l - i) * (2 / 3 - o) * 6
          : i
  );
}
function Vx({ hue: i, saturation: l, lightness: o, alpha: u }) {
  ((i /= 360), (l /= 100), (o /= 100));
  let c = 0,
    h = 0,
    d = 0;
  if (!l) c = h = d = o;
  else {
    const y = o < 0.5 ? o * (1 + l) : o + l - o * l,
      g = 2 * o - y;
    ((c = qr(g, y, i + 1 / 3)), (h = qr(g, y, i)), (d = qr(g, y, i - 1 / 3)));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(h * 255),
    blue: Math.round(d * 255),
    alpha: u,
  };
}
function no(i, l) {
  return (o) => (o > 0 ? l : i);
}
const zt = (i, l, o) => i + (l - i) * o,
  Yr = (i, l, o) => {
    const u = i * i,
      c = o * (l * l - u) + u;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  Rx = [ec, ga, si],
  _x = (i) => Rx.find((l) => l.test(i));
function gp(i) {
  const l = _x(i);
  if (!l) return !1;
  let o = l.parse(i);
  return (l === si && (o = Vx(o)), o);
}
const vp = (i, l) => {
    const o = gp(i),
      u = gp(l);
    if (!o || !u) return no(i, l);
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
function wx(i, l) {
  return nc.has(i) ? (o) => (o <= 0 ? i : l) : (o) => (o >= 1 ? l : i);
}
function Ux(i, l) {
  return (o) => zt(i, l, o);
}
function _c(i) {
  return typeof i == "number"
    ? Ux
    : typeof i == "string"
      ? Oc(i)
        ? no
        : Gt.test(i)
          ? vp
          : Hx
      : Array.isArray(i)
        ? ty
        : typeof i == "object"
          ? Gt.test(i)
            ? vp
            : Bx
          : no;
}
function ty(i, l) {
  const o = [...i],
    u = o.length,
    c = i.map((h, d) => _c(h)(h, l[d]));
  return (h) => {
    for (let d = 0; d < u; d++) o[d] = c[d](h);
    return o;
  };
}
function Bx(i, l) {
  const o = { ...i, ...l },
    u = {};
  for (const c in o)
    i[c] !== void 0 && l[c] !== void 0 && (u[c] = _c(i[c])(i[c], l[c]));
  return (c) => {
    for (const h in u) o[h] = u[h](c);
    return o;
  };
}
function Lx(i, l) {
  const o = [],
    u = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const h = l.types[c],
      d = i.indexes[h][u[h]],
      y = i.values[d] ?? 0;
    ((o[c] = y), u[h]++);
  }
  return o;
}
const Hx = (i, l) => {
  const o = Ze.createTransformer(l),
    u = bl(i),
    c = bl(l);
  return u.indexes.var.length === c.indexes.var.length &&
    u.indexes.color.length === c.indexes.color.length &&
    u.indexes.number.length >= c.indexes.number.length
    ? (nc.has(i) && !c.values.length) || (nc.has(l) && !u.values.length)
      ? wx(i, l)
      : Al(ty(Lx(u, c), c.values), o)
    : no(i, l);
};
function ey(i, l, o) {
  return typeof i == "number" && typeof l == "number" && typeof o == "number"
    ? zt(i, l, o)
    : _c(i)(i, l);
}
const qx = (i) => {
    const l = ({ timestamp: o }) => i(o);
    return {
      start: (o = !0) => Dt.update(l, o),
      stop: () => kn(l),
      now: () => (te.isProcessing ? te.timestamp : le.now()),
    };
  },
  ny = (i, l, o = 10) => {
    let u = "";
    const c = Math.max(Math.round(l / o), 2);
    for (let h = 0; h < c; h++)
      u += Math.round(i(h / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${u.substring(0, u.length - 2)})`;
  },
  ao = 2e4;
function wc(i) {
  let l = 0;
  const o = 50;
  let u = i.next(l);
  for (; !u.done && l < ao; ) ((l += o), (u = i.next(l)));
  return l >= ao ? 1 / 0 : l;
}
function Yx(i, l = 100, o) {
  const u = o({ ...i, keyframes: [0, l] }),
    c = Math.min(wc(u), ao);
  return {
    type: "keyframes",
    ease: (h) => u.next(c * h).value / l,
    duration: Ue(c),
  };
}
const Gx = 5;
function ay(i, l, o) {
  const u = Math.max(l - Gx, 0);
  return w0(o - i(u), l - u);
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
function Xx({
  duration: i = Rt.duration,
  bounce: l = Rt.bounce,
  velocity: o = Rt.velocity,
  mass: u = Rt.mass,
}) {
  let c,
    h,
    d = 1 - l;
  ((d = tn(Rt.minDamping, Rt.maxDamping, d)),
    (i = tn(Rt.minDuration, Rt.maxDuration, Ue(i))),
    d < 1
      ? ((c = (p) => {
          const v = p * d,
            b = v * i,
            E = v - o,
            V = ac(p, d),
            _ = Math.exp(-b);
          return Gr - (E / V) * _;
        }),
        (h = (p) => {
          const b = p * d * i,
            E = b * o + o,
            V = Math.pow(d, 2) * Math.pow(p, 2) * i,
            _ = Math.exp(-b),
            L = ac(Math.pow(p, 2), d);
          return ((-c(p) + Gr > 0 ? -1 : 1) * ((E - V) * _)) / L;
        }))
      : ((c = (p) => {
          const v = Math.exp(-p * i),
            b = (p - o) * i + 1;
          return -Gr + v * b;
        }),
        (h = (p) => {
          const v = Math.exp(-p * i),
            b = (o - p) * (i * i);
          return v * b;
        })));
  const y = 5 / i,
    g = Zx(c, h, y);
  if (((i = Qe(i)), isNaN(g)))
    return { stiffness: Rt.stiffness, damping: Rt.damping, duration: i };
  {
    const p = Math.pow(g, 2) * u;
    return { stiffness: p, damping: d * 2 * Math.sqrt(u * p), duration: i };
  }
}
const Qx = 12;
function Zx(i, l, o) {
  let u = o;
  for (let c = 1; c < Qx; c++) u = u - i(u) / l(u);
  return u;
}
function ac(i, l) {
  return i * Math.sqrt(1 - l * l);
}
const Kx = ["duration", "bounce"],
  Jx = ["stiffness", "damping", "mass"];
function xp(i, l) {
  return l.some((o) => i[o] !== void 0);
}
function kx(i) {
  let l = {
    velocity: Rt.velocity,
    stiffness: Rt.stiffness,
    damping: Rt.damping,
    mass: Rt.mass,
    isResolvedFromDuration: !1,
    ...i,
  };
  if (!xp(i, Jx) && xp(i, Kx))
    if (((l.velocity = 0), i.visualDuration)) {
      const o = i.visualDuration,
        u = (2 * Math.PI) / (o * 1.2),
        c = u * u,
        h = 2 * tn(0.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
      l = { ...l, mass: Rt.mass, stiffness: c, damping: h };
    } else {
      const o = Xx({ ...i, velocity: 0 });
      ((l = { ...l, ...o, mass: Rt.mass }), (l.isResolvedFromDuration = !0));
    }
  return l;
}
function io(i = Rt.visualDuration, l = Rt.bounce) {
  const o =
    typeof i != "object"
      ? { visualDuration: i, keyframes: [0, 1], bounce: l }
      : i;
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
    _ = E || 0,
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
        W * (((_ + L * H * X) / F) * Math.sin(F * lt) + X * Math.cos(F * lt))
      );
    };
  } else if (L === 1) B = (F) => d - Math.exp(-H * F) * (X + (_ + H * X) * F);
  else {
    const F = H * Math.sqrt(L * L - 1);
    B = (lt) => {
      const W = Math.exp(-L * H * lt),
        et = Math.min(F * lt, 300);
      return (
        d - (W * ((_ + L * H * X) * Math.sinh(et) + F * X * Math.cosh(et))) / F
      );
    };
  }
  const P = {
    calculatedDuration: (V && b) || null,
    next: (F) => {
      const lt = B(F);
      if (V) y.done = F >= b;
      else {
        let W = F === 0 ? _ : 0;
        L < 1 && (W = F === 0 ? Qe(_) : ay(B, F, lt));
        const et = Math.abs(W) <= u,
          Mt = Math.abs(d - lt) <= c;
        y.done = et && Mt;
      }
      return ((y.value = y.done ? d : lt), y);
    },
    toString: () => {
      const F = Math.min(wc(P), ao),
        lt = ny((W) => P.next(F * W).value, F, 30);
      return F + "ms " + lt;
    },
    toTransition: () => {},
  };
  return P;
}
io.applyToOptions = (i) => {
  const l = Yx(i, 100, io);
  return (
    (i.ease = l.ease),
    (i.duration = Qe(l.duration)),
    (i.type = "keyframes"),
    i
  );
};
function ic({
  keyframes: i,
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
  const b = i[0],
    E = { done: !1, value: b },
    V = (et) => (y !== void 0 && et < y) || (g !== void 0 && et > g),
    _ = (et) =>
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
        keyframes: [E.value, _(E.value)],
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
function Px(i, l, o) {
  const u = [],
    c = o || bn.mix || ey,
    h = i.length - 1;
  for (let d = 0; d < h; d++) {
    let y = c(i[d], i[d + 1]);
    if (l) {
      const g = Array.isArray(l) ? l[d] || Be : l;
      y = Al(g, y);
    }
    u.push(y);
  }
  return u;
}
function Fx(i, l, { clamp: o = !0, ease: u, mixer: c } = {}) {
  const h = i.length;
  if ((Nc(h === l.length), h === 1)) return () => l[0];
  if (h === 2 && l[0] === l[1]) return () => l[1];
  const d = i[0] === i[1];
  i[0] > i[h - 1] && ((i = [...i].reverse()), (l = [...l].reverse()));
  const y = Px(l, u, c),
    g = y.length,
    p = (v) => {
      if (d && v < i[0]) return l[0];
      let b = 0;
      if (g > 1) for (; b < i.length - 2 && !(v < i[b + 1]); b++);
      const E = vl(i[b], i[b + 1], v);
      return y[b](E);
    };
  return o ? (v) => p(tn(i[0], i[h - 1], v)) : p;
}
function Wx(i, l) {
  const o = i[i.length - 1];
  for (let u = 1; u <= l; u++) {
    const c = vl(0, l, u);
    i.push(zt(o, 1, c));
  }
}
function $x(i) {
  const l = [0];
  return (Wx(l, i.length - 1), l);
}
function Ix(i, l) {
  return i.map((o) => o * l);
}
function tb(i, l) {
  return i.map(() => l || Q0).splice(0, i.length - 1);
}
function ml({
  duration: i = 300,
  keyframes: l,
  times: o,
  ease: u = "easeInOut",
}) {
  const c = fx(u) ? u.map(hp) : hp(u),
    h = { done: !1, value: l[0] },
    d = Ix(o && o.length === l.length ? o : $x(l), i),
    y = Fx(d, l, { ease: Array.isArray(c) ? c : tb(l, c) });
  return {
    calculatedDuration: i,
    next: (g) => ((h.value = y(g)), (h.done = g >= i), h),
  };
}
const eb = (i) => i !== null;
function Uc(i, { repeat: l, repeatType: o = "loop" }, u, c = 1) {
  const h = i.filter(eb),
    y = c < 0 || (l && o !== "loop" && l % 2 === 1) ? 0 : h.length - 1;
  return !y || u === void 0 ? h[y] : u;
}
const nb = { decay: ic, inertia: ic, tween: ml, keyframes: ml, spring: io };
function iy(i) {
  typeof i.type == "string" && (i.type = nb[i.type]);
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
const ab = (i) => i / 100;
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
      ((this.mixKeyframes = Al(ab, ey(y[0], y[1]))), (y = [0, 100]));
    const p = g({ ...l, keyframes: y });
    (h === "mirror" &&
      (this.mirroredGenerator = g({
        ...l,
        keyframes: [...y].reverse(),
        velocity: -d,
      })),
      p.calculatedDuration === null && (p.calculatedDuration = wc(p)));
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
      type: _,
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
      W && _ !== ic && (F.value = Uc(v, this.options, X, this.speed)),
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
    ((l = Qe(l)),
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
    const { driver: l = qx, startTime: o } = this.options;
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
function ib(i) {
  for (let l = 1; l < i.length; l++) i[l] ?? (i[l] = i[l - 1]);
}
const va = (i) => (i * 180) / Math.PI,
  lc = (i) => {
    const l = va(Math.atan2(i[1], i[0]));
    return sc(l);
  },
  lb = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
    rotate: lc,
    rotateZ: lc,
    skewX: (i) => va(Math.atan(i[1])),
    skewY: (i) => va(Math.atan(i[2])),
    skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2,
  },
  sc = (i) => ((i = i % 360), i < 0 && (i += 360), i),
  bp = lc,
  Sp = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]),
  Tp = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]),
  sb = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Sp,
    scaleY: Tp,
    scale: (i) => (Sp(i) + Tp(i)) / 2,
    rotateX: (i) => sc(va(Math.atan2(i[6], i[5]))),
    rotateY: (i) => sc(va(Math.atan2(-i[2], i[0]))),
    rotateZ: bp,
    rotate: bp,
    skewX: (i) => va(Math.atan(i[4])),
    skewY: (i) => va(Math.atan(i[1])),
    skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2,
  };
function oc(i) {
  return i.includes("scale") ? 1 : 0;
}
function uc(i, l) {
  if (!i || i === "none") return oc(l);
  const o = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let u, c;
  if (o) ((u = sb), (c = o));
  else {
    const y = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((u = lb), (c = y));
  }
  if (!c) return oc(l);
  const h = u[l],
    d = c[1].split(",").map(ub);
  return typeof h == "function" ? h(d) : d[h];
}
const ob = (i, l) => {
  const { transform: o = "none" } = getComputedStyle(i);
  return uc(o, l);
};
function ub(i) {
  return parseFloat(i.trim());
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
  Ap = (i) => i === hi || i === K,
  rb = new Set(["x", "y", "z"]),
  cb = mi.filter((i) => !rb.has(i));
function fb(i) {
  const l = [];
  return (
    cb.forEach((o) => {
      const u = i.getValue(o);
      u !== void 0 &&
        (l.push([o, u.get()]), u.set(o.startsWith("scale") ? 1 : 0));
    }),
    l
  );
}
const Jn = {
  width: ({ x: i }, { paddingLeft: l = "0", paddingRight: o = "0" }) =>
    i.max - i.min - parseFloat(l) - parseFloat(o),
  height: ({ y: i }, { paddingTop: l = "0", paddingBottom: o = "0" }) =>
    i.max - i.min - parseFloat(l) - parseFloat(o),
  top: (i, { top: l }) => parseFloat(l),
  left: (i, { left: l }) => parseFloat(l),
  bottom: ({ y: i }, { top: l }) => parseFloat(l) + (i.max - i.min),
  right: ({ x: i }, { left: l }) => parseFloat(l) + (i.max - i.min),
  x: (i, { transform: l }) => uc(l, "x"),
  y: (i, { transform: l }) => uc(l, "y"),
};
Jn.translateX = Jn.x;
Jn.translateY = Jn.y;
const xa = new Set();
let rc = !1,
  cc = !1,
  fc = !1;
function ly() {
  if (cc) {
    const i = Array.from(xa).filter((u) => u.needsMeasurement),
      l = new Set(i.map((u) => u.element)),
      o = new Map();
    (l.forEach((u) => {
      const c = fb(u);
      c.length && (o.set(u, c), u.render());
    }),
      i.forEach((u) => u.measureInitialState()),
      l.forEach((u) => {
        u.render();
        const c = o.get(u);
        c &&
          c.forEach(([h, d]) => {
            u.getValue(h)?.set(d);
          });
      }),
      i.forEach((u) => u.measureEndState()),
      i.forEach((u) => {
        u.suspendedScrollY !== void 0 && window.scrollTo(0, u.suspendedScrollY);
      }));
  }
  ((cc = !1), (rc = !1), xa.forEach((i) => i.complete(fc)), xa.clear());
}
function sy() {
  xa.forEach((i) => {
    (i.readKeyframes(), i.needsMeasurement && (cc = !0));
  });
}
function db() {
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
    ib(l);
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
const hb = (i) => i.startsWith("--");
function oy(i, l, o) {
  hb(l) ? i.style.setProperty(l, o) : (i.style[l] = o);
}
const mb = {};
function uy(i, l) {
  const o = _0(i);
  return () => mb[l] ?? o();
}
const pb = uy(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
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
  dl = ([i, l, o, u]) => `cubic-bezier(${i}, ${l}, ${o}, ${u})`,
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
function cy(i, l) {
  if (i)
    return typeof i == "function"
      ? ry()
        ? ny(i, l)
        : "ease-out"
      : Z0(i)
        ? dl(i)
        : Array.isArray(i)
          ? i.map((o) => cy(o, l) || Ep.easeOut)
          : Ep[i];
}
function yb(
  i,
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
  return (p && (E.pseudoElement = p), i.animate(v, E));
}
function fy(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function gb({ type: i, ...l }) {
  return fy(i) && ry()
    ? i.applyToOptions(l)
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
    const p = gb(l);
    ((this.animation = yb(o, u, c, p, h)),
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
      (this.animation.currentTime = Qe(l)),
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
      l && pb()
        ? ((this.animation.timeline = l),
          o && (this.animation.rangeStart = o),
          u && (this.animation.rangeEnd = u),
          Be)
        : c(this)
    );
  }
}
const hy = { anticipate: Y0, backInOut: q0, circInOut: X0 };
function vb(i) {
  return i in hy;
}
function xb(i) {
  typeof i.ease == "string" && vb(i.ease) && (i.ease = hy[i.ease]);
}
const Xr = 10;
class bb extends dy {
  constructor(l) {
    (xb(l),
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
const Mp = (i, l) =>
  l === "zIndex"
    ? !1
    : !!(
        typeof i == "number" ||
        Array.isArray(i) ||
        (typeof i == "string" &&
          (Ze.test(i) || i === "0") &&
          !i.startsWith("url("))
      );
function Sb(i) {
  const l = i[0];
  if (i.length === 1) return !0;
  for (let o = 0; o < i.length; o++) if (i[o] !== l) return !0;
}
function Tb(i, l, o, u) {
  const c = i[0];
  if (c === null) return !1;
  if (l === "display" || l === "visibility") return !0;
  const h = i[i.length - 1],
    d = Mp(c, l),
    y = Mp(h, l);
  return !d || !y ? !1 : Sb(i) || ((o === "spring" || fy(o)) && u);
}
function dc(i) {
  ((i.duration = 0), (i.type = "keyframes"));
}
const Ab = new Set(["opacity", "clipPath", "filter", "transform"]),
  Eb = _0(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Mb(i) {
  const {
    motionValue: l,
    name: o,
    repeatDelay: u,
    repeatType: c,
    damping: h,
    type: d,
  } = i;
  if (!(l?.owner?.current instanceof HTMLElement)) return !1;
  const { onUpdate: g, transformTemplate: p } = l.owner.getProps();
  return (
    Eb() &&
    o &&
    Ab.has(o) &&
    (o !== "transform" || !p) &&
    !g &&
    !u &&
    c !== "mirror" &&
    h !== 0 &&
    d !== "inertia"
  );
}
const Db = 40;
class Nb extends Bc {
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
      (_, L, X) => this.onKeyframesResolved(_, L, E, !X),
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
      Tb(l, h, d, y) ||
        ((bn.instantAnimations || !g) && v?.(Uc(l, u, o)),
        (l[0] = l[l.length - 1]),
        dc(u),
        (u.repeat = 0)));
    const E = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > Db
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: o,
        ...u,
        keyframes: l,
      },
      V = !p && Mb(E),
      _ = E.motionValue?.owner?.current,
      L = V ? new bb({ ...E, element: _ }) : new Lc(E);
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
      this._animation || (this.keyframeResolver?.resume(), db()),
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
function my(i, l, o, u = 0, c = 1) {
  const h = Array.from(i)
      .sort((p, v) => p.sortNodePosition(v))
      .indexOf(l),
    d = i.size,
    y = (d - 1) * u;
  return typeof o == "function" ? o(h, d) : c === 1 ? h * u : y - h * u;
}
const Cb = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function jb(i) {
  const l = Cb.exec(i);
  if (!l) return [,];
  const [, o, u, c] = l;
  return [`--${o ?? u}`, c];
}
function py(i, l, o = 1) {
  const [u, c] = jb(i);
  if (!u) return;
  const h = window.getComputedStyle(l).getPropertyValue(u);
  if (h) {
    const d = h.trim();
    return O0(d) ? parseFloat(d) : d;
  }
  return Oc(c) ? py(c, l, o + 1) : c;
}
const zb = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Ob = (i) => ({
    type: "spring",
    stiffness: 550,
    damping: i === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Vb = { type: "keyframes", duration: 0.8 },
  Rb = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  _b = (i, { keyframes: l }) =>
    l.length > 2
      ? Vb
      : pi.has(i)
        ? i.startsWith("scale")
          ? Ob(l[1])
          : zb
        : Rb,
  wb = (i) => i !== null;
function Ub(i, { repeat: l, repeatType: o = "loop" }, u) {
  const c = i.filter(wb),
    h = l && o !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
  return c[h];
}
function yy(i, l) {
  if (i?.inherit && l) {
    const { inherit: o, ...u } = i;
    return { ...l, ...u };
  }
  return i;
}
function qc(i, l) {
  const o = i?.[l] ?? i?.default ?? i;
  return o !== i ? yy(o, i) : o;
}
function Bb({
  when: i,
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
  (i, l, o, u = {}, c, h) =>
  (d) => {
    const y = qc(u, i) || {},
      g = y.delay || u.delay || 0;
    let { elapsed: p = 0 } = u;
    p = p - Qe(g);
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
      name: i,
      motionValue: l,
      element: h ? void 0 : c,
    };
    (Bb(y) || Object.assign(v, _b(i, v)),
      v.duration && (v.duration = Qe(v.duration)),
      v.repeatDelay && (v.repeatDelay = Qe(v.repeatDelay)),
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
      const E = Ub(v.keyframes, y);
      if (E !== void 0) {
        Dt.update(() => {
          (v.onUpdate(E), v.onComplete());
        });
        return;
      }
    }
    return y.isSync ? new Lc(v) : new Nb(v);
  };
function Dp(i) {
  const l = [{}, {}];
  return (
    i?.values.forEach((o, u) => {
      ((l[0][u] = o.get()), (l[1][u] = o.getVelocity()));
    }),
    l
  );
}
function Gc(i, l, o, u) {
  if (typeof l == "function") {
    const [c, h] = Dp(u);
    l = l(o !== void 0 ? o : i.custom, c, h);
  }
  if (
    (typeof l == "string" && (l = i.variants && i.variants[l]),
    typeof l == "function")
  ) {
    const [c, h] = Dp(u);
    l = l(o !== void 0 ? o : i.custom, c, h);
  }
  return l;
}
function fi(i, l, o) {
  const u = i.getProps();
  return Gc(u, l, o !== void 0 ? o : u.custom, i);
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
  Lb = (i) => !isNaN(parseFloat(i));
class Hb {
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
        (this.canTrackVelocity = Lb(this.current)));
  }
  setPrevFrameValue(l = this.current) {
    ((this.prevFrameValue = l), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(l) {
    return this.on("change", l);
  }
  on(l, o) {
    this.events[l] || (this.events[l] = new Cc());
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
    return w0(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
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
function di(i, l) {
  return new Hb(i, l);
}
const hc = (i) => Array.isArray(i);
function qb(i, l, o) {
  i.hasValue(l) ? i.getValue(l).set(o) : i.addValue(l, di(o));
}
function Yb(i) {
  return hc(i) ? i[i.length - 1] || 0 : i;
}
function Gb(i, l) {
  const o = fi(i, l);
  let { transitionEnd: u = {}, transition: c = {}, ...h } = o || {};
  h = { ...h, ...u };
  for (const d in h) {
    const y = Yb(h[d]);
    qb(i, d, y);
  }
}
const ne = (i) => !!(i && i.getVelocity);
function Xb(i) {
  return !!(ne(i) && i.add);
}
function mc(i, l) {
  const o = i.getValue("willChange");
  if (Xb(o)) return o.add(l);
  if (!o && bn.WillChange) {
    const u = new bn.WillChange("auto");
    (i.addValue("willChange", u), u.add(l));
  }
}
function Xc(i) {
  return i.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const Qb = "framerAppearId",
  vy = "data-" + Xc(Qb);
function xy(i) {
  return i.props[vy];
}
function Zb({ protectedKeys: i, needsAnimating: l }, o) {
  const u = i.hasOwnProperty(o) && l[o] !== !0;
  return ((l[o] = !1), u);
}
function by(i, l, { delay: o = 0, transitionOverride: u, type: c } = {}) {
  let { transition: h, transitionEnd: d, ...y } = l;
  const g = i.getDefaultTransition();
  h = h ? yy(h, g) : g;
  const p = h?.reduceMotion;
  u && (h = u);
  const v = [],
    b = c && i.animationState && i.animationState.getState()[c];
  for (const E in y) {
    const V = i.getValue(E, i.latestValues[E] ?? null),
      _ = y[E];
    if (_ === void 0 || (b && Zb(b, E))) continue;
    const L = { delay: o, ...qc(h || {}, E) },
      X = V.get();
    if (
      X !== void 0 &&
      !V.isAnimating &&
      !Array.isArray(_) &&
      _ === X &&
      !L.velocity
    )
      continue;
    let H = !1;
    if (window.MotionHandoffAnimation) {
      const P = xy(i);
      if (P) {
        const F = window.MotionHandoffAnimation(P, E, Dt);
        F !== null && ((L.startTime = F), (H = !0));
      }
    }
    mc(i, E);
    const G = p ?? i.shouldReduceMotion;
    V.start(Yc(E, V, _, G && gy.has(E) ? { type: !1 } : L, i, H));
    const B = V.animation;
    B && v.push(B);
  }
  if (d) {
    const E = () =>
      Dt.update(() => {
        d && Gb(i, d);
      });
    v.length ? Promise.all(v).then(E) : E();
  }
  return v;
}
function pc(i, l, o = {}) {
  const u = fi(i, l, o.type === "exit" ? i.presenceContext?.custom : void 0);
  let { transition: c = i.getDefaultTransition() || {} } = u || {};
  o.transitionOverride && (c = o.transitionOverride);
  const h = u ? () => Promise.all(by(i, u, o)) : () => Promise.resolve(),
    d =
      i.variantChildren && i.variantChildren.size
        ? (g = 0) => {
            const {
              delayChildren: p = 0,
              staggerChildren: v,
              staggerDirection: b,
            } = c;
            return Kb(i, l, g, p, v, b, o);
          }
        : () => Promise.resolve(),
    { when: y } = c;
  if (y) {
    const [g, p] = y === "beforeChildren" ? [h, d] : [d, h];
    return g().then(() => p());
  } else return Promise.all([h(), d(o.delay)]);
}
function Kb(i, l, o = 0, u = 0, c = 0, h = 1, d) {
  const y = [];
  for (const g of i.variantChildren)
    (g.notify("AnimationStart", l),
      y.push(
        pc(g, l, {
          ...d,
          delay:
            o +
            (typeof u == "function" ? 0 : u) +
            my(i.variantChildren, g, u, c, h),
        }).then(() => g.notify("AnimationComplete", l)),
      ));
  return Promise.all(y);
}
function Jb(i, l, o = {}) {
  i.notify("AnimationStart", l);
  let u;
  if (Array.isArray(l)) {
    const c = l.map((h) => pc(i, h, o));
    u = Promise.all(c);
  } else if (typeof l == "string") u = pc(i, l, o);
  else {
    const c = typeof l == "function" ? fi(i, l, o.custom) : l;
    u = Promise.all(by(i, c, o));
  }
  return u.then(() => {
    i.notify("AnimationComplete", l);
  });
}
const kb = { test: (i) => i === "auto", parse: (i) => i },
  Sy = (i) => (l) => l.test(i),
  Ty = [hi, K, Ie, Kn, Ex, Ax, kb],
  Cp = (i) => Ty.find(Sy(i));
function Pb(i) {
  return typeof i == "number"
    ? i === 0
    : i !== null
      ? i === "none" || i === "0" || R0(i)
      : !0;
}
const Fb = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Wb(i) {
  const [l, o] = i.slice(0, -1).split("(");
  if (l === "drop-shadow") return i;
  const [u] = o.match(Vc) || [];
  if (!u) return i;
  const c = o.replace(u, "");
  let h = Fb.has(l) ? 1 : 0;
  return (u !== o && (h *= 100), l + "(" + h + c + ")");
}
const $b = /\b([a-z-]*)\(.*?\)/gu,
  yc = {
    ...Ze,
    getAnimatableNone: (i) => {
      const l = i.match($b);
      return l ? l.map(Wb).join(" ") : i;
    },
  },
  gc = {
    ...Ze,
    getAnimatableNone: (i) => {
      const l = Ze.parse(i);
      return Ze.createTransformer(i)(
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
  jp = { ...hi, transform: Math.round },
  Ib = {
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
    ...Ib,
    zIndex: jp,
    fillOpacity: xl,
    strokeOpacity: xl,
    numOctaves: jp,
  },
  tS = {
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
  Ay = (i) => tS[i],
  eS = new Set([yc, gc]);
function Ey(i, l) {
  let o = Ay(i);
  return (
    eS.has(o) || (o = Ze),
    o.getAnimatableNone ? o.getAnimatableNone(l) : void 0
  );
}
const nS = new Set(["auto", "none", "0"]);
function aS(i, l, o) {
  let u = 0,
    c;
  for (; u < i.length && !c; ) {
    const h = i[u];
    (typeof h == "string" && !nS.has(h) && bl(h).values.length && (c = i[u]),
      u++);
  }
  if (c && o) for (const h of l) i[h] = Ey(o, c);
}
class iS extends Hc {
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
      d = Cp(c),
      y = Cp(h),
      g = mp(c),
      p = mp(h);
    if (g !== p && Jn[u]) {
      this.needsMeasurement = !0;
      return;
    }
    if (d !== y)
      if (Ap(d) && Ap(y))
        for (let v = 0; v < l.length; v++) {
          const b = l[v];
          typeof b == "string" && (l[v] = parseFloat(b));
        }
      else Jn[u] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: o } = this,
      u = [];
    for (let c = 0; c < l.length; c++) (l[c] === null || Pb(l[c])) && u.push(c);
    u.length && aS(l, u, o);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: o, name: u } = this;
    if (!l || !l.current) return;
    (u === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Jn[u](
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
    ((u[h] = Jn[o](l.measureViewportBox(), window.getComputedStyle(l.current))),
      d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([y, g]) => {
          l.getValue(y).set(g);
        }),
      this.resolveNoneKeyframes());
  }
}
const lS = new Set(["opacity", "clipPath", "filter", "transform"]);
function My(i, l, o) {
  if (i == null) return [];
  if (i instanceof EventTarget) return [i];
  if (typeof i == "string") {
    let u = document;
    const c = o?.[i] ?? u.querySelectorAll(i);
    return c ? Array.from(c) : [];
  }
  return Array.from(i).filter((u) => u != null);
}
const Dy = (i, l) => (l && typeof i == "number" ? l.transform(i) : i);
function sS(i) {
  return V0(i) && "offsetHeight" in i;
}
const { schedule: Zc } = K0(queueMicrotask, !1),
  Xe = { x: !1, y: !1 };
function Ny() {
  return Xe.x || Xe.y;
}
function oS(i) {
  return i === "x" || i === "y"
    ? Xe[i]
      ? null
      : ((Xe[i] = !0),
        () => {
          Xe[i] = !1;
        })
    : Xe.x || Xe.y
      ? null
      : ((Xe.x = Xe.y = !0),
        () => {
          Xe.x = Xe.y = !1;
        });
}
function Cy(i, l) {
  const o = My(i),
    u = new AbortController(),
    c = { passive: !0, ...l, signal: u.signal };
  return [o, c, () => u.abort()];
}
function uS(i) {
  return !(i.pointerType === "touch" || Ny());
}
function rS(i, l, o = {}) {
  const [u, c, h] = Cy(i, o);
  return (
    u.forEach((d) => {
      let y = !1,
        g = !1,
        p;
      const v = () => {
          d.removeEventListener("pointerleave", _);
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
        _ = (X) => {
          if (X.pointerType !== "touch") {
            if (y) {
              g = !0;
              return;
            }
            b(X);
          }
        },
        L = (X) => {
          if (!uS(X)) return;
          g = !1;
          const H = l(d, X);
          typeof H == "function" &&
            ((p = H), d.addEventListener("pointerleave", _, c));
        };
      (d.addEventListener("pointerenter", L, c),
        d.addEventListener("pointerdown", V, c));
    }),
    h
  );
}
const jy = (i, l) => (l ? (i === l ? !0 : jy(i, l.parentElement)) : !1),
  Kc = (i) =>
    i.pointerType === "mouse"
      ? typeof i.button != "number" || i.button <= 0
      : i.isPrimary !== !1,
  cS = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function fS(i) {
  return cS.has(i.tagName) || i.isContentEditable === !0;
}
const dS = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function hS(i) {
  return dS.has(i.tagName) || i.isContentEditable === !0;
}
const Ps = new WeakSet();
function zp(i) {
  return (l) => {
    l.key === "Enter" && i(l);
  };
}
function Qr(i, l) {
  i.dispatchEvent(
    new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }),
  );
}
const mS = (i, l) => {
  const o = i.currentTarget;
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
function Op(i) {
  return Kc(i) && !Ny();
}
const Vp = new WeakSet();
function pS(i, l, o = {}) {
  const [u, c, h] = Cy(i, o),
    d = (y) => {
      const g = y.currentTarget;
      if (!Op(y) || Vp.has(y)) return;
      (Ps.add(g), o.stopPropagation && Vp.add(y));
      const p = l(g, y),
        v = (V, _) => {
          (window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", E),
            Ps.has(g) && Ps.delete(g),
            Op(V) && typeof p == "function" && p(V, { success: _ }));
        },
        b = (V) => {
          v(
            V,
            g === window ||
              g === document ||
              o.useGlobalTarget ||
              jy(g, V.target),
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
        sS(y) &&
          (y.addEventListener("focus", (p) => mS(p, c)),
          !fS(y) && !y.hasAttribute("tabindex") && (y.tabIndex = 0)));
    }),
    h
  );
}
function Jc(i) {
  return V0(i) && "ownerSVGElement" in i;
}
const Fs = new WeakMap();
let Ws;
const zy = (i, l, o) => (u, c) =>
    c && c[0]
      ? c[0][i + "Size"]
      : Jc(u) && "getBBox" in u
        ? u.getBBox()[l]
        : u[o],
  yS = zy("inline", "width", "offsetWidth"),
  gS = zy("block", "height", "offsetHeight");
function vS({ target: i, borderBoxSize: l }) {
  Fs.get(i)?.forEach((o) => {
    o(i, {
      get width() {
        return yS(i, l);
      },
      get height() {
        return gS(i, l);
      },
    });
  });
}
function xS(i) {
  i.forEach(vS);
}
function bS() {
  typeof ResizeObserver > "u" || (Ws = new ResizeObserver(xS));
}
function SS(i, l) {
  Ws || bS();
  const o = My(i);
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
function TS() {
  ((oi = () => {
    const i = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    $s.forEach((l) => l(i));
  }),
    window.addEventListener("resize", oi));
}
function AS(i) {
  return (
    $s.add(i),
    oi || TS(),
    () => {
      ($s.delete(i),
        !$s.size &&
          typeof oi == "function" &&
          (window.removeEventListener("resize", oi), (oi = void 0)));
    }
  );
}
function Rp(i, l) {
  return typeof i == "function" ? AS(i) : SS(i, l);
}
function ES(i) {
  return Jc(i) && i.tagName === "svg";
}
const MS = [...Ty, Gt, Ze],
  DS = (i) => MS.find(Sy(i)),
  _p = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ui = () => ({ x: _p(), y: _p() }),
  wp = () => ({ min: 0, max: 0 }),
  Zt = () => ({ x: wp(), y: wp() }),
  NS = new WeakMap();
function ro(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function Sl(i) {
  return typeof i == "string" || Array.isArray(i);
}
const kc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Pc = ["initial", ...kc];
function co(i) {
  return ro(i.animate) || Pc.some((l) => Sl(i[l]));
}
function Oy(i) {
  return !!(co(i) || i.variants);
}
function CS(i, l, o) {
  for (const u in l) {
    const c = l[u],
      h = o[u];
    if (ne(c)) i.addValue(u, c);
    else if (ne(h)) i.addValue(u, di(c, { owner: i }));
    else if (h !== c)
      if (i.hasValue(u)) {
        const d = i.getValue(u);
        d.liveStyle === !0 ? d.jump(c) : d.hasAnimated || d.set(c);
      } else {
        const d = i.getStaticValue(u);
        i.addValue(u, di(d !== void 0 ? d : c, { owner: i }));
      }
  }
  for (const u in o) l[u] === void 0 && i.removeValue(u);
  return l;
}
const vc = { current: null },
  Vy = { current: !1 },
  jS = typeof window < "u";
function zS() {
  if (((Vy.current = !0), !!jS))
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"),
        l = () => (vc.current = i.matches);
      (i.addEventListener("change", l), l());
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
function Ry(i) {
  lo = i;
}
function OS() {
  return lo;
}
class VS {
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
      const _ = E[V];
      p[V] !== void 0 && ne(_) && _.set(p[V]);
    }
  }
  mount(l) {
    if (this.hasBeenMounted)
      for (const o in this.initialValues)
        (this.values.get(o)?.jump(this.initialValues[o]),
          (this.latestValues[o] = this.initialValues[o]));
    ((this.current = l),
      NS.set(l, this),
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
          : (Vy.current || zS(), (this.shouldReduceMotion = vc.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      kn(this.notifyUpdate),
      kn(this.render),
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
      o.accelerate && lS.has(l) && this.current instanceof HTMLElement)
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
          duration: Qe(v),
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
    ((this.prevMotionValues = CS(
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
          : !DS(u) && Ze.test(o) && (u = Ey(l, o)),
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
      this.events[l] || (this.events[l] = new Cc()),
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
class _y extends VS {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = iS));
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
function wy({ top: i, left: l, right: o, bottom: u }) {
  return { x: { min: l, max: o }, y: { min: i, max: u } };
}
function RS({ x: i, y: l }) {
  return { top: l.min, right: i.max, bottom: l.max, left: i.min };
}
function _S(i, l) {
  if (!l) return i;
  const o = l({ x: i.left, y: i.top }),
    u = l({ x: i.right, y: i.bottom });
  return { top: o.y, left: o.x, bottom: u.y, right: u.x };
}
function Zr(i) {
  return i === void 0 || i === 1;
}
function xc({ scale: i, scaleX: l, scaleY: o }) {
  return !Zr(i) || !Zr(l) || !Zr(o);
}
function ya(i) {
  return (
    xc(i) ||
    Uy(i) ||
    i.z ||
    i.rotate ||
    i.rotateX ||
    i.rotateY ||
    i.skewX ||
    i.skewY
  );
}
function Uy(i) {
  return Bp(i.x) || Bp(i.y);
}
function Bp(i) {
  return i && i !== "0%";
}
function so(i, l, o) {
  const u = i - o,
    c = l * u;
  return o + c;
}
function Lp(i, l, o, u, c) {
  return (c !== void 0 && (i = so(i, c, u)), so(i, o, u) + l);
}
function bc(i, l = 0, o = 1, u, c) {
  ((i.min = Lp(i.min, l, o, u, c)), (i.max = Lp(i.max, l, o, u, c)));
}
function By(i, { x: l, y: o }) {
  (bc(i.x, l.translate, l.scale, l.originPoint),
    bc(i.y, o.translate, o.scale, o.originPoint));
}
const Hp = 0.999999999999,
  qp = 1.0000000000001;
function wS(i, l, o, u = !1) {
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
        ci(i, { x: -h.scroll.offset.x, y: -h.scroll.offset.y }),
      d && ((l.x *= d.x.scale), (l.y *= d.y.scale), By(i, d)),
      u && ya(h.latestValues) && ci(i, h.latestValues));
  }
  (l.x < qp && l.x > Hp && (l.x = 1), l.y < qp && l.y > Hp && (l.y = 1));
}
function ri(i, l) {
  ((i.min = i.min + l), (i.max = i.max + l));
}
function Yp(i, l, o, u, c = 0.5) {
  const h = zt(i.min, i.max, c);
  bc(i, l, o, h, u);
}
function Gp(i, l) {
  return typeof i == "string" ? (parseFloat(i) / 100) * (l.max - l.min) : i;
}
function ci(i, l) {
  (Yp(i.x, Gp(l.x, i.x), l.scaleX, l.scale, l.originX),
    Yp(i.y, Gp(l.y, i.y), l.scaleY, l.scale, l.originY));
}
function Ly(i, l) {
  return wy(_S(i.getBoundingClientRect(), l));
}
function US(i, l, o) {
  const u = Ly(i, o),
    { scroll: c } = l;
  return (c && (ri(u.x, c.offset.x), ri(u.y, c.offset.y)), u);
}
const BS = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  LS = mi.length;
function HS(i, l, o) {
  let u = "",
    c = !0;
  for (let h = 0; h < LS; h++) {
    const d = mi[h],
      y = i[d];
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
        const v = BS[d] || d;
        u += `${v}(${p}) `;
      }
      o && (l[d] = p);
    }
  }
  return ((u = u.trim()), o ? (u = o(l, c ? "" : u)) : c && (u = "none"), u);
}
function Fc(i, l, o) {
  const { style: u, vars: c, transformOrigin: h } = i;
  let d = !1,
    y = !1;
  for (const g in l) {
    const p = l[g];
    if (pi.has(g)) {
      d = !0;
      continue;
    } else if (k0(g)) {
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
        ? (u.transform = HS(l, i.transform, o))
        : u.transform && (u.transform = "none")),
    y)
  ) {
    const { originX: g = "50%", originY: p = "50%", originZ: v = 0 } = h;
    u.transformOrigin = `${g} ${p} ${v}`;
  }
}
function Hy(i, { style: l, vars: o }, u, c) {
  const h = i.style;
  let d;
  for (d in l) h[d] = l[d];
  c?.applyProjectionStyles(h, u);
  for (d in o) h.setProperty(d, o[d]);
}
function Xp(i, l) {
  return l.max === l.min ? 0 : (i / (l.max - l.min)) * 100;
}
const fl = {
    correct: (i, l) => {
      if (!l.target) return i;
      if (typeof i == "string")
        if (K.test(i)) i = parseFloat(i);
        else return i;
      const o = Xp(i, l.target.x),
        u = Xp(i, l.target.y);
      return `${o}% ${u}%`;
    },
  },
  qS = {
    correct: (i, { treeScale: l, projectionDelta: o }) => {
      const u = i,
        c = Ze.parse(i);
      if (c.length > 5) return u;
      const h = Ze.createTransformer(i),
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
    boxShadow: qS,
  };
function qy(i, { layout: l, layoutId: o }) {
  return (
    pi.has(i) ||
    i.startsWith("origin") ||
    ((l || o !== void 0) && (!!Sc[i] || i === "opacity"))
  );
}
function Wc(i, l, o) {
  const u = i.style,
    c = l?.style,
    h = {};
  if (!u) return h;
  for (const d in u)
    (ne(u[d]) ||
      (c && ne(c[d])) ||
      qy(d, i) ||
      o?.getValue(d)?.liveStyle !== void 0) &&
      (h[d] = u[d]);
  return h;
}
function YS(i) {
  return window.getComputedStyle(i);
}
class GS extends _y {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Hy));
  }
  readValueFromInstance(l, o) {
    if (pi.has(o)) return this.projection?.isProjecting ? oc(o) : ob(l, o);
    {
      const u = YS(l),
        c = (k0(o) ? u.getPropertyValue(o) : u[o]) || 0;
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
const XS = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  QS = { offset: "strokeDashoffset", array: "strokeDasharray" };
function ZS(i, l, o = 1, u = 0, c = !0) {
  i.pathLength = 1;
  const h = c ? XS : QS;
  ((i[h.offset] = `${-u}`), (i[h.array] = `${l} ${o}`));
}
const KS = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Yy(
  i,
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
  if ((Fc(i, y, p), g)) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  ((i.attrs = i.style), (i.style = {}));
  const { attrs: b, style: E } = i;
  (b.transform && ((E.transform = b.transform), delete b.transform),
    (E.transform || b.transformOrigin) &&
      ((E.transformOrigin = b.transformOrigin ?? "50% 50%"),
      delete b.transformOrigin),
    E.transform &&
      ((E.transformBox = v?.transformBox ?? "fill-box"),
      delete b.transformBox));
  for (const V of KS) b[V] !== void 0 && ((E[V] = b[V]), delete b[V]);
  (l !== void 0 && (b.x = l),
    o !== void 0 && (b.y = o),
    u !== void 0 && (b.scale = u),
    c !== void 0 && ZS(b, c, h, d, !1));
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
  Xy = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function JS(i, l, o, u) {
  Hy(i, l, void 0, u);
  for (const c in l.attrs) i.setAttribute(Gy.has(c) ? c : Xc(c), l.attrs[c]);
}
function Qy(i, l, o) {
  const u = Wc(i, l, o);
  for (const c in i)
    if (ne(i[c]) || ne(l[c])) {
      const h =
        mi.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      u[h] = i[c];
    }
  return u;
}
class kS extends _y {
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
    JS(l, o, u, c);
  }
  mount(l) {
    ((this.isSVGTag = Xy(l.tagName)), super.mount(l));
  }
}
const PS = Pc.length;
function Zy(i) {
  if (!i) return;
  if (!i.isControllingVariants) {
    const o = i.parent ? Zy(i.parent) || {} : {};
    return (i.props.initial !== void 0 && (o.initial = i.props.initial), o);
  }
  const l = {};
  for (let o = 0; o < PS; o++) {
    const u = Pc[o],
      c = i.props[u];
    (Sl(c) || c === !1) && (l[u] = c);
  }
  return l;
}
function Ky(i, l) {
  if (!Array.isArray(l)) return !1;
  const o = l.length;
  if (o !== i.length) return !1;
  for (let u = 0; u < o; u++) if (l[u] !== i[u]) return !1;
  return !0;
}
const FS = [...kc].reverse(),
  WS = kc.length;
function $S(i) {
  return (l) =>
    Promise.all(l.map(({ animation: o, options: u }) => Jb(i, o, u)));
}
function IS(i) {
  let l = $S(i),
    o = Qp(),
    u = !0,
    c = !1;
  const h = (p) => (v, b) => {
    const E = fi(i, b, p === "exit" ? i.presenceContext?.custom : void 0);
    if (E) {
      const { transition: V, transitionEnd: _, ...L } = E;
      v = { ...v, ...L, ..._ };
    }
    return v;
  };
  function d(p) {
    l = p(i);
  }
  function y(p) {
    const { props: v } = i,
      b = Zy(i.parent) || {},
      E = [],
      V = new Set();
    let _ = {},
      L = 1 / 0;
    for (let H = 0; H < WS; H++) {
      const G = FS[H],
        B = o[G],
        P = v[G] !== void 0 ? v[G] : b[G],
        F = Sl(P),
        lt = G === p ? B.isActive : null;
      lt === !1 && (L = H);
      let W = P === b[G] && P !== v[G] && F;
      if (
        (W && (u || c) && i.manuallyAnimateOnMount && (W = !1),
        (B.protectedKeys = { ..._ }),
        (!B.isActive && lt === null) ||
          (!P && !B.prevProp) ||
          ro(P) ||
          typeof P == "boolean")
      )
        continue;
      if (G === "exit" && B.isActive && lt !== !0) {
        B.prevResolvedValues && (_ = { ..._, ...B.prevResolvedValues });
        continue;
      }
      const et = t2(B.prevProp, P);
      let Mt = et || (G === p && B.isActive && !W && F) || (H > L && F),
        Xt = !1;
      const oe = Array.isArray(P) ? P : [P];
      let Bt = oe.reduce(h(G), {});
      lt === !1 && (Bt = {});
      const { prevResolvedValues: Je = {} } = B,
        Le = { ...Je, ...Bt },
        ue = (Q) => {
          ((Mt = !0),
            V.has(Q) && ((Xt = !0), V.delete(Q)),
            (B.needsAnimating[Q] = !0));
          const st = i.getValue(Q);
          st && (st.liveStyle = !1);
        };
      for (const Q in Le) {
        const st = Bt[Q],
          ht = Je[Q];
        if (_.hasOwnProperty(Q)) continue;
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
        B.isActive && (_ = { ..._, ...Bt }),
        (u || c) && i.blockInitialAnimation && (Mt = !1));
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
              i.manuallyAnimateOnMount &&
              i.parent
            ) {
              const { parent: ht } = i,
                A = fi(ht, Q);
              if (ht.enteringChildren && A) {
                const { delayChildren: U } = A.transition || {};
                st.delay = my(ht.enteringChildren, i, U);
              }
            }
            return { animation: Q, options: st };
          }),
        );
    }
    if (V.size) {
      const H = {};
      if (typeof v.initial != "boolean") {
        const G = fi(i, Array.isArray(v.initial) ? v.initial[0] : v.initial);
        G && G.transition && (H.transition = G.transition);
      }
      (V.forEach((G) => {
        const B = i.getBaseTarget(G),
          P = i.getValue(G);
        (P && (P.liveStyle = !0), (H[G] = B ?? null));
      }),
        E.push({ animation: H }));
    }
    let X = !!E.length;
    return (
      u &&
        (v.initial === !1 || v.initial === v.animate) &&
        !i.manuallyAnimateOnMount &&
        (X = !1),
      (u = !1),
      (c = !1),
      X ? l(E) : Promise.resolve()
    );
  }
  function g(p, v) {
    if (o[p].isActive === v) return Promise.resolve();
    (i.variantChildren?.forEach((E) => E.animationState?.setActive(p, v)),
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
function t2(i, l) {
  return typeof l == "string" ? l !== i : Array.isArray(l) ? !Ky(l, i) : !1;
}
function pa(i = !1) {
  return {
    isActive: i,
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
function Zp(i, l) {
  ((i.min = l.min), (i.max = l.max));
}
function Ge(i, l) {
  (Zp(i.x, l.x), Zp(i.y, l.y));
}
function Kp(i, l) {
  ((i.translate = l.translate),
    (i.scale = l.scale),
    (i.originPoint = l.originPoint),
    (i.origin = l.origin));
}
const Jy = 1e-4,
  e2 = 1 - Jy,
  n2 = 1 + Jy,
  ky = 0.01,
  a2 = 0 - ky,
  i2 = 0 + ky;
function se(i) {
  return i.max - i.min;
}
function l2(i, l, o) {
  return Math.abs(i - l) <= o;
}
function Jp(i, l, o, u = 0.5) {
  ((i.origin = u),
    (i.originPoint = zt(l.min, l.max, i.origin)),
    (i.scale = se(o) / se(l)),
    (i.translate = zt(o.min, o.max, i.origin) - i.originPoint),
    ((i.scale >= e2 && i.scale <= n2) || isNaN(i.scale)) && (i.scale = 1),
    ((i.translate >= a2 && i.translate <= i2) || isNaN(i.translate)) &&
      (i.translate = 0));
}
function pl(i, l, o, u) {
  (Jp(i.x, l.x, o.x, u ? u.originX : void 0),
    Jp(i.y, l.y, o.y, u ? u.originY : void 0));
}
function kp(i, l, o) {
  ((i.min = o.min + l.min), (i.max = i.min + se(l)));
}
function s2(i, l, o) {
  (kp(i.x, l.x, o.x), kp(i.y, l.y, o.y));
}
function Pp(i, l, o) {
  ((i.min = l.min - o.min), (i.max = i.min + se(l)));
}
function oo(i, l, o) {
  (Pp(i.x, l.x, o.x), Pp(i.y, l.y, o.y));
}
function Fp(i, l, o, u, c) {
  return (
    (i -= l),
    (i = so(i, 1 / o, u)),
    c !== void 0 && (i = so(i, 1 / c, u)),
    i
  );
}
function o2(i, l = 0, o = 1, u = 0.5, c, h = i, d = i) {
  if (
    (Ie.test(l) &&
      ((l = parseFloat(l)), (l = zt(d.min, d.max, l / 100) - d.min)),
    typeof l != "number")
  )
    return;
  let y = zt(h.min, h.max, u);
  (i === h && (y -= l),
    (i.min = Fp(i.min, l, o, y, c)),
    (i.max = Fp(i.max, l, o, y, c)));
}
function Wp(i, l, [o, u, c], h, d) {
  o2(i, l[o], l[u], l[c], l.scale, h, d);
}
const u2 = ["x", "scaleX", "originX"],
  r2 = ["y", "scaleY", "originY"];
function $p(i, l, o, u) {
  (Wp(i.x, l, u2, o ? o.x : void 0, u ? u.x : void 0),
    Wp(i.y, l, r2, o ? o.y : void 0, u ? u.y : void 0));
}
function Ip(i) {
  return i.translate === 0 && i.scale === 1;
}
function Py(i) {
  return Ip(i.x) && Ip(i.y);
}
function t0(i, l) {
  return i.min === l.min && i.max === l.max;
}
function c2(i, l) {
  return t0(i.x, l.x) && t0(i.y, l.y);
}
function e0(i, l) {
  return (
    Math.round(i.min) === Math.round(l.min) &&
    Math.round(i.max) === Math.round(l.max)
  );
}
function Fy(i, l) {
  return e0(i.x, l.x) && e0(i.y, l.y);
}
function n0(i) {
  return se(i.x) / se(i.y);
}
function a0(i, l) {
  return (
    i.translate === l.translate &&
    i.scale === l.scale &&
    i.originPoint === l.originPoint
  );
}
function $e(i) {
  return [i("x"), i("y")];
}
function f2(i, l, o) {
  let u = "";
  const c = i.x.translate / l.x,
    h = i.y.translate / l.y,
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
      skewY: _,
    } = o;
    (p && (u = `perspective(${p}px) ${u}`),
      v && (u += `rotate(${v}deg) `),
      b && (u += `rotateX(${b}deg) `),
      E && (u += `rotateY(${E}deg) `),
      V && (u += `skewX(${V}deg) `),
      _ && (u += `skewY(${_}deg) `));
  }
  const y = i.x.scale * l.x,
    g = i.y.scale * l.y;
  return ((y !== 1 || g !== 1) && (u += `scale(${y}, ${g})`), u || "none");
}
const Wy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  d2 = Wy.length,
  i0 = (i) => (typeof i == "string" ? parseFloat(i) : i),
  l0 = (i) => typeof i == "number" || K.test(i);
function h2(i, l, o, u, c, h) {
  c
    ? ((i.opacity = zt(0, o.opacity ?? 1, m2(u))),
      (i.opacityExit = zt(l.opacity ?? 1, 0, p2(u))))
    : h && (i.opacity = zt(l.opacity ?? 1, o.opacity ?? 1, u));
  for (let d = 0; d < d2; d++) {
    const y = `border${Wy[d]}Radius`;
    let g = s0(l, y),
      p = s0(o, y);
    if (g === void 0 && p === void 0) continue;
    (g || (g = 0),
      p || (p = 0),
      g === 0 || p === 0 || l0(g) === l0(p)
        ? ((i[y] = Math.max(zt(i0(g), i0(p), u), 0)),
          (Ie.test(p) || Ie.test(g)) && (i[y] += "%"))
        : (i[y] = p));
  }
  (l.rotate || o.rotate) && (i.rotate = zt(l.rotate || 0, o.rotate || 0, u));
}
function s0(i, l) {
  return i[l] !== void 0 ? i[l] : i.borderRadius;
}
const m2 = $y(0, 0.5, G0),
  p2 = $y(0.5, 0.95, Be);
function $y(i, l, o) {
  return (u) => (u < i ? 0 : u > l ? 1 : o(vl(i, l, u)));
}
function y2(i, l, o) {
  const u = ne(i) ? i : di(i);
  return (u.start(Yc("", u, l, o)), u.animation);
}
function Tl(i, l, o, u = { passive: !0 }) {
  return (i.addEventListener(l, o, u), () => i.removeEventListener(l, o));
}
const g2 = (i, l) => i.depth - l.depth;
class v2 {
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
    (this.isDirty && this.children.sort(g2),
      (this.isDirty = !1),
      this.children.forEach(l));
  }
}
function x2(i, l) {
  const o = le.now(),
    u = ({ timestamp: c }) => {
      const h = c - o;
      h >= l && (kn(u), i(h - l));
    };
  return (Dt.setup(u, !0), () => kn(u));
}
function Is(i) {
  return ne(i) ? i.get() : i;
}
class b2 {
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
  S2 = 1e3;
let T2 = 0;
function Jr(i, l, o, u) {
  const { latestValues: c } = l;
  c[i] && ((o[i] = c[i]), l.setStaticValue(i, 0), u && (u[i] = 0));
}
function Iy(i) {
  if (((i.hasCheckedOptimisedAppear = !0), i.root === i)) return;
  const { visualElement: l } = i.options;
  if (!l) return;
  const o = xy(l);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: c, layoutId: h } = i.options;
    window.MotionCancelOptimisedAnimation(o, "transform", Dt, !(c || h));
  }
  const { parent: u } = i;
  u && !u.hasCheckedOptimisedAppear && Iy(u);
}
function tg({
  attachResizeListener: i,
  defaultParent: l,
  measureScroll: o,
  checkIsScrollRoot: u,
  resetTransform: c,
}) {
  return class {
    constructor(d = {}, y = l?.()) {
      ((this.id = T2++),
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
            this.nodes.forEach(M2),
            this.nodes.forEach(j2),
            this.nodes.forEach(z2),
            this.nodes.forEach(D2));
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
      this.root === this && (this.nodes = new v2());
    }
    addEventListener(d, y) {
      return (
        this.eventHandlers.has(d) || this.eventHandlers.set(d, new Cc()),
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
      ((this.isSVG = Jc(d) && !ES(d)), (this.instance = d));
      const { layoutId: y, layout: g, visualElement: p } = this.options;
      if (
        (p && !p.current && p.mount(d),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (g || y) && (this.isLayoutDirty = !0),
        i)
      ) {
        let v,
          b = 0;
        const E = () => (this.root.updateBlockedByResize = !1);
        (Dt.read(() => {
          b = window.innerWidth;
        }),
          i(d, () => {
            const V = window.innerWidth;
            V !== b &&
              ((b = V),
              (this.root.updateBlockedByResize = !0),
              v && v(),
              (v = x2(E, 250)),
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
              const _ =
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
                const B = { ...qc(_, "layout"), onPlay: L, onComplete: X };
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
        kn(this.updateProjection));
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
        this.nodes && this.nodes.forEach(O2),
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
            this.nodes.forEach(C2),
            this.nodes.forEach(A2),
            this.nodes.forEach(E2))
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
      (this.nodes.forEach(N2), this.sharedNodes.forEach(V2));
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
        U2(g),
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
      if (!(this.scroll?.wasRoot || this.path.some(B2))) {
        const { scroll: p } = this.root;
        p && (ri(y.x, p.offset.x), ri(y.y, p.offset.y));
      }
      return y;
    }
    removeElementScroll(d) {
      const y = Zt();
      if ((Ge(y, d), this.scroll?.wasRoot)) return y;
      for (let g = 0; g < this.path.length; g++) {
        const p = this.path[g],
          { scroll: v, options: b } = p;
        p !== this.root &&
          v &&
          b.layoutScroll &&
          (v.wasRoot && Ge(y, d), ri(y.x, v.offset.x), ri(y.y, v.offset.y));
      }
      return y;
    }
    applyTransform(d, y = !1) {
      const g = Zt();
      Ge(g, d);
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
      Ge(y, d);
      for (let g = 0; g < this.path.length; g++) {
        const p = this.path[g];
        if (!p.instance || !ya(p.latestValues)) continue;
        xc(p.latestValues) && p.updateSnapshot();
        const v = Zt(),
          b = p.measurePageBox();
        (Ge(v, b),
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
              s2(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Ge(this.target, this.layout.layoutBox),
                By(this.target, this.targetDelta))
              : Ge(this.target, this.layout.layoutBox),
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
        Ge(this.relativeTarget, this.relativeTargetOrigin));
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
      Ge(this.layoutCorrected, this.layout.layoutBox);
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
        _ = this.layout ? this.layout.source : void 0,
        L = V !== _,
        X = this.getStack(),
        H = !X || X.members.length <= 1,
        G = !!(L && !H && this.options.crossfade === !0 && !this.path.some(_2));
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
            R2(this.relativeTarget, this.relativeTargetOrigin, E, F),
            B && c2(this.relativeTarget, B) && (this.isProjectionDirty = !1),
            B || (B = Zt()),
            Ge(B, this.relativeTarget)),
          L &&
            ((this.animationValues = v), h2(v, p, this.latestValues, F, G, H)),
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
          (kn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Dt.update(() => {
          ((to.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = di(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = y2(this.motionValue, [0, 1e3], {
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
        (this.mixTargetDelta && this.mixTargetDelta(S2),
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
        (Ge(y, g),
          ci(y, v),
          pl(this.projectionDeltaWithTransform, this.layoutCorrected, y, v));
      }
    }
    registerSharedNode(d, y) {
      (this.sharedNodes.has(d) || this.sharedNodes.set(d, new b2()),
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
      g.z && Jr("z", d, p, this.animationValues);
      for (let v = 0; v < Kr.length; v++)
        (Jr(`rotate${Kr[v]}`, d, p, this.animationValues),
          Jr(`skew${Kr[v]}`, d, p, this.animationValues));
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
      let b = f2(this.projectionDeltaWithTransform, this.treeScale, v);
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
      for (const _ in Sc) {
        if (v[_] === void 0) continue;
        const { correct: L, applyTo: X, isCSSVariable: H } = Sc[_],
          G = b === "none" ? v[_] : L(v[_], p);
        if (X) {
          const B = X.length;
          for (let P = 0; P < B; P++) d[X[P]] = G;
        } else
          H ? (this.options.visualElement.renderState.vars[_] = G) : (d[_] = G);
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
function A2(i) {
  i.updateLayout();
}
function E2(i) {
  const l = i.resumeFrom?.snapshot || i.snapshot;
  if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: u } = i.layout,
      { animationType: c } = i.options,
      h = l.source !== i.layout.source;
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
            i.relativeTarget &&
              !i.currentAnimation &&
              ((i.isProjectionDirty = !0),
              (i.relativeTarget[v].max = i.relativeTarget[v].min + E)));
        });
    const d = ui();
    pl(d, o, l.layoutBox);
    const y = ui();
    h ? pl(y, i.applyTransform(u, !0), l.measuredBox) : pl(y, o, l.layoutBox);
    const g = !Py(d);
    let p = !1;
    if (!i.resumeFrom) {
      const v = i.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: b, layout: E } = v;
        if (b && E) {
          const V = Zt();
          oo(V, l.layoutBox, b.layoutBox);
          const _ = Zt();
          (oo(_, o, E.layoutBox),
            Fy(V, _) || (p = !0),
            v.options.layoutRoot &&
              ((i.relativeTarget = _),
              (i.relativeTargetOrigin = V),
              (i.relativeParent = v)));
        }
      }
    }
    i.notifyListeners("didUpdate", {
      layout: o,
      snapshot: l,
      delta: y,
      layoutDelta: d,
      hasLayoutChanged: g,
      hasRelativeLayoutChanged: p,
    });
  } else if (i.isLead()) {
    const { onExitComplete: o } = i.options;
    o && o();
  }
  i.options.transition = void 0;
}
function M2(i) {
  i.parent &&
    (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty),
    i.isSharedProjectionDirty ||
      (i.isSharedProjectionDirty = !!(
        i.isProjectionDirty ||
        i.parent.isProjectionDirty ||
        i.parent.isSharedProjectionDirty
      )),
    i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function D2(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function N2(i) {
  i.clearSnapshot();
}
function o0(i) {
  i.clearMeasurements();
}
function u0(i) {
  i.isLayoutDirty = !1;
}
function C2(i) {
  const { visualElement: l } = i.options;
  (l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    i.resetTransform());
}
function r0(i) {
  (i.finishAnimation(),
    (i.targetDelta = i.relativeTarget = i.target = void 0),
    (i.isProjectionDirty = !0));
}
function j2(i) {
  i.resolveTargetDelta();
}
function z2(i) {
  i.calcProjection();
}
function O2(i) {
  i.resetSkewAndRotation();
}
function V2(i) {
  i.removeLeadSnapshot();
}
function c0(i, l, o) {
  ((i.translate = zt(l.translate, 0, o)),
    (i.scale = zt(l.scale, 1, o)),
    (i.origin = l.origin),
    (i.originPoint = l.originPoint));
}
function f0(i, l, o, u) {
  ((i.min = zt(l.min, o.min, u)), (i.max = zt(l.max, o.max, u)));
}
function R2(i, l, o, u) {
  (f0(i.x, l.x, o.x, u), f0(i.y, l.y, o.y, u));
}
function _2(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const w2 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  d0 = (i) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(i),
  h0 = d0("applewebkit/") && !d0("chrome/") ? Math.round : Be;
function m0(i) {
  ((i.min = h0(i.min)), (i.max = h0(i.max)));
}
function U2(i) {
  (m0(i.x), m0(i.y));
}
function eg(i, l, o) {
  return (
    i === "position" || (i === "preserve-aspect" && !l2(n0(l), n0(o), 0.2))
  );
}
function B2(i) {
  return i !== i.root && i.scroll?.wasRoot;
}
const L2 = tg({
    attachResizeListener: (i, l) => Tl(i, "resize", l),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
    }),
    checkIsScrollRoot: () => !0,
  }),
  kr = { current: void 0 },
  ng = tg({
    measureScroll: (i) => ({ x: i.scrollLeft, y: i.scrollTop }),
    defaultParent: () => {
      if (!kr.current) {
        const i = new L2({});
        (i.mount(window), i.setOptions({ layoutScroll: !0 }), (kr.current = i));
      }
      return kr.current;
    },
    resetTransform: (i, l) => {
      i.style.transform = l !== void 0 ? l : "none";
    },
    checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed",
  }),
  ag = I.createContext({
    transformPagePoint: (i) => i,
    isStatic: !1,
    reducedMotion: "never",
  });
function H2(i = !0) {
  const l = I.useContext(Mc);
  if (l === null) return [!0, null];
  const { isPresent: o, onExitComplete: u, register: c } = l,
    h = I.useId();
  I.useEffect(() => {
    if (i) return c(h);
  }, [i]);
  const d = I.useCallback(() => i && u && u(h), [h, u, i]);
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
function q2() {
  if (y0) return;
  const i = {};
  for (const l in p0) i[l] = { isEnabled: (o) => p0[l].some((u) => !!o[u]) };
  (Ry(i), (y0 = !0));
}
function lg() {
  return (q2(), OS());
}
function Y2(i) {
  const l = lg();
  for (const o in i) l[o] = { ...l[o], ...i[o] };
  Ry(l);
}
const G2 = new Set([
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
function uo(i) {
  return (
    i.startsWith("while") ||
    (i.startsWith("drag") && i !== "draggable") ||
    i.startsWith("layout") ||
    i.startsWith("onTap") ||
    i.startsWith("onPan") ||
    i.startsWith("onLayout") ||
    G2.has(i)
  );
}
let sg = (i) => !uo(i);
function X2(i) {
  typeof i == "function" && (sg = (l) => (l.startsWith("on") ? !uo(l) : i(l)));
}
try {
  X2(require("@emotion/is-prop-valid").default);
} catch {}
function Q2(i, l, o) {
  const u = {};
  for (const c in i)
    (c === "values" && typeof i.values == "object") ||
      ((sg(c) ||
        (o === !0 && uo(c)) ||
        (!l && !uo(c)) ||
        (i.draggable && c.startsWith("onDrag"))) &&
        (u[c] = i[c]));
  return u;
}
const fo = I.createContext({});
function Z2(i, l) {
  if (co(i)) {
    const { initial: o, animate: u } = i;
    return {
      initial: o === !1 || Sl(o) ? o : void 0,
      animate: Sl(u) ? u : void 0,
    };
  }
  return i.inherit !== !1 ? l : {};
}
function K2(i) {
  const { initial: l, animate: o } = Z2(i, I.useContext(fo));
  return I.useMemo(() => ({ initial: l, animate: o }), [g0(l), g0(o)]);
}
function g0(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const $c = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function og(i, l, o) {
  for (const u in l) !ne(l[u]) && !qy(u, o) && (i[u] = l[u]);
}
function J2({ transformTemplate: i }, l) {
  return I.useMemo(() => {
    const o = $c();
    return (Fc(o, l, i), Object.assign({}, o.vars, o.style));
  }, [l]);
}
function k2(i, l) {
  const o = i.style || {},
    u = {};
  return (og(u, o, i), Object.assign(u, J2(i, l)), u);
}
function P2(i, l) {
  const o = {},
    u = k2(i, l);
  return (
    i.drag &&
      i.dragListener !== !1 &&
      ((o.draggable = !1),
      (u.userSelect = u.WebkitUserSelect = u.WebkitTouchCallout = "none"),
      (u.touchAction =
        i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`)),
    i.tabIndex === void 0 &&
      (i.onTap || i.onTapStart || i.whileTap) &&
      (o.tabIndex = 0),
    (o.style = u),
    o
  );
}
const ug = () => ({ ...$c(), attrs: {} });
function F2(i, l, o, u) {
  const c = I.useMemo(() => {
    const h = ug();
    return (
      Yy(h, l, Xy(u), i.transformTemplate, i.style),
      { ...h.attrs, style: { ...h.style } }
    );
  }, [l]);
  if (i.style) {
    const h = {};
    (og(h, i.style, i), (c.style = { ...h, ...c.style }));
  }
  return c;
}
const W2 = [
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
function Ic(i) {
  return typeof i != "string" || i.includes("-")
    ? !1
    : !!(W2.indexOf(i) > -1 || /[A-Z]/u.test(i));
}
function $2(i, l, o, { latestValues: u }, c, h = !1, d) {
  const g = ((d ?? Ic(i)) ? F2 : P2)(l, u, c, i),
    p = Q2(l, typeof i == "string", h),
    v = i !== I.Fragment ? { ...p, ...g, ref: o } : {},
    { children: b } = l,
    E = I.useMemo(() => (ne(b) ? b.get() : b), [b]);
  return I.createElement(i, { ...v, children: E });
}
function I2({ scrapeMotionValuesFromProps: i, createRenderState: l }, o, u, c) {
  return { latestValues: tT(o, u, c, i), renderState: l() };
}
function tT(i, l, o, u) {
  const c = {},
    h = u(i, {});
  for (const E in h) c[E] = Is(h[E]);
  let { initial: d, animate: y } = i;
  const g = co(i),
    p = Oy(i);
  l &&
    p &&
    !g &&
    i.inherit !== !1 &&
    (d === void 0 && (d = l.initial), y === void 0 && (y = l.animate));
  let v = o ? o.initial === !1 : !1;
  v = v || d === !1;
  const b = v ? y : d;
  if (b && typeof b != "boolean" && !ro(b)) {
    const E = Array.isArray(b) ? b : [b];
    for (let V = 0; V < E.length; V++) {
      const _ = Gc(i, E[V]);
      if (_) {
        const { transitionEnd: L, transition: X, ...H } = _;
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
const rg = (i) => (l, o) => {
    const u = I.useContext(fo),
      c = I.useContext(Mc),
      h = () => I2(i, l, u, c);
    return o ? h() : nx(h);
  },
  eT = rg({ scrapeMotionValuesFromProps: Wc, createRenderState: $c }),
  nT = rg({ scrapeMotionValuesFromProps: Qy, createRenderState: ug }),
  aT = Symbol.for("motionComponentSymbol");
function iT(i, l, o) {
  const u = I.useRef(o);
  I.useInsertionEffect(() => {
    u.current = o;
  });
  const c = I.useRef(null);
  return I.useCallback(
    (h) => {
      h && i.onMount?.(h);
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
function li(i) {
  return (
    i &&
    typeof i == "object" &&
    Object.prototype.hasOwnProperty.call(i, "current")
  );
}
function lT(i, l, o, u, c, h) {
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
      ((E.current = u(i, {
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
  const _ = E.current,
    L = I.useContext(cg);
  _ &&
    !_.projection &&
    c &&
    (_.type === "html" || _.type === "svg") &&
    sT(E.current, o, c, L);
  const X = I.useRef(!1);
  I.useInsertionEffect(() => {
    _ && X.current && _.update(o, g);
  });
  const H = o[vy],
    G = I.useRef(
      !!H &&
        typeof window < "u" &&
        !window.MotionHandoffIsComplete?.(H) &&
        window.MotionHasOptimisedAnimation?.(H),
    );
  return (
    ix(() => {
      ((V.current = !0),
        _ &&
          ((X.current = !0),
          (window.MotionIsMounted = !0),
          _.updateFeatures(),
          _.scheduleRenderMicrotask(),
          G.current && _.animationState && _.animationState.animateChanges()));
    }),
    I.useEffect(() => {
      _ &&
        (!G.current && _.animationState && _.animationState.animateChanges(),
        G.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(H);
          }),
          (G.current = !1)),
        (_.enteringChildren = void 0));
    }),
    _
  );
}
function sT(i, l, o, u) {
  const {
    layoutId: c,
    layout: h,
    drag: d,
    dragConstraints: y,
    layoutScroll: g,
    layoutRoot: p,
    layoutCrossfade: v,
  } = l;
  ((i.projection = new o(
    i.latestValues,
    l["data-framer-portal-id"] ? void 0 : fg(i.parent),
  )),
    i.projection.setOptions({
      layoutId: c,
      layout: h,
      alwaysMeasureLayout: !!d || (y && li(y)),
      visualElement: i,
      animationType: typeof h == "string" ? h : "both",
      initialPromotionConfig: u,
      crossfade: v,
      layoutScroll: g,
      layoutRoot: p,
    }));
}
function fg(i) {
  if (i) return i.options.allowProjection !== !1 ? i.projection : fg(i.parent);
}
function Pr(i, { forwardMotionProps: l = !1, type: o } = {}, u, c) {
  u && Y2(u);
  const h = o ? o === "svg" : Ic(i),
    d = h ? nT : eT;
  function y(p, v) {
    let b;
    const E = { ...I.useContext(ag), ...p, layoutId: oT(p) },
      { isStatic: V } = E,
      _ = K2(p),
      L = d(p, V);
    if (!V && typeof window < "u") {
      uT();
      const X = rT(E);
      ((b = X.MeasureLayout),
        (_.visualElement = lT(i, L, E, c, X.ProjectionNode, h)));
    }
    return x.jsxs(fo.Provider, {
      value: _,
      children: [
        b && _.visualElement
          ? x.jsx(b, { visualElement: _.visualElement, ...E })
          : null,
        $2(i, p, iT(L, _.visualElement, v), L, V, l, h),
      ],
    });
  }
  y.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const g = I.forwardRef(y);
  return ((g[aT] = i), g);
}
function oT({ layoutId: i }) {
  const l = I.useContext(z0).id;
  return l && i !== void 0 ? l + "-" + i : i;
}
function uT(i, l) {
  I.useContext(ig).strict;
}
function rT(i) {
  const l = lg(),
    { drag: o, layout: u } = l;
  if (!o && !u) return {};
  const c = { ...o, ...u };
  return {
    MeasureLayout:
      o?.isEnabled(i) || u?.isEnabled(i) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode,
  };
}
function cT(i, l) {
  if (typeof Proxy > "u") return Pr;
  const o = new Map(),
    u = (h, d) => Pr(h, d, i, l),
    c = (h, d) => u(h, d);
  return new Proxy(c, {
    get: (h, d) =>
      d === "create"
        ? u
        : (o.has(d) || o.set(d, Pr(d, void 0, i, l)), o.get(d)),
  });
}
const fT = (i, l) =>
  (l.isSVG ?? Ic(i))
    ? new kS(l)
    : new GS(l, { allowProjection: i !== I.Fragment });
class dT extends Pn {
  constructor(l) {
    (super(l), l.animationState || (l.animationState = IS(l)));
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
let hT = 0;
class mT extends Pn {
  constructor() {
    (super(...arguments), (this.id = hT++));
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
const pT = { animation: { Feature: dT }, exit: { Feature: mT } };
function Dl(i) {
  return { point: { x: i.pageX, y: i.pageY } };
}
const yT = (i) => (l) => Kc(l) && i(l, Dl(l));
function yl(i, l, o, u) {
  return Tl(i, l, yT(o), u);
}
const dg = ({ current: i }) => (i ? i.ownerDocument.defaultView : null),
  v0 = (i, l) => Math.abs(i - l);
function gT(i, l) {
  const o = v0(i.x, l.x),
    u = v0(i.y, l.y);
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
          _ = this.startEvent !== null,
          L = gT(V.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!_ && !L) return;
        const { point: X } = V,
          { timestamp: H } = te;
        this.history.push({ ...X, timestamp: H });
        const { onStart: G, onMove: B } = this.handlers;
        (_ ||
          (G && G(this.lastMoveEvent, V),
          (this.startEvent = this.lastMoveEvent)),
          B && B(this.lastMoveEvent, V));
      }),
      (this.handlePointerMove = (V, _) => {
        ((this.lastMoveEvent = V),
          (this.lastMoveEventInfo = Fr(_, this.transformPagePoint)),
          Dt.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (V, _) => {
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
            : Fr(_, this.transformPagePoint),
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
      kn(this.updatePoint));
  }
}
function Fr(i, l) {
  return l ? { point: l(i.point) } : i;
}
function b0(i, l) {
  return { x: i.x - l.x, y: i.y - l.y };
}
function Wr({ point: i }, l) {
  return {
    point: i,
    delta: b0(i, mg(l)),
    offset: b0(i, vT(l)),
    velocity: xT(l, 0.1),
  };
}
function vT(i) {
  return i[0];
}
function mg(i) {
  return i[i.length - 1];
}
function xT(i, l) {
  if (i.length < 2) return { x: 0, y: 0 };
  let o = i.length - 1,
    u = null;
  const c = mg(i);
  for (; o >= 0 && ((u = i[o]), !(c.timestamp - u.timestamp > Qe(l))); ) o--;
  if (!u) return { x: 0, y: 0 };
  u === i[0] &&
    i.length > 2 &&
    c.timestamp - u.timestamp > Qe(l) * 2 &&
    (u = i[1]);
  const h = Ue(c.timestamp - u.timestamp);
  if (h === 0) return { x: 0, y: 0 };
  const d = { x: (c.x - u.x) / h, y: (c.y - u.y) / h };
  return (d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d);
}
function bT(i, { min: l, max: o }, u) {
  return (
    l !== void 0 && i < l
      ? (i = u ? zt(l, i, u.min) : Math.max(i, l))
      : o !== void 0 && i > o && (i = u ? zt(o, i, u.max) : Math.min(i, o)),
    i
  );
}
function S0(i, l, o) {
  return {
    min: l !== void 0 ? i.min + l : void 0,
    max: o !== void 0 ? i.max + o - (i.max - i.min) : void 0,
  };
}
function ST(i, { top: l, left: o, bottom: u, right: c }) {
  return { x: S0(i.x, o, c), y: S0(i.y, l, u) };
}
function T0(i, l) {
  let o = l.min - i.min,
    u = l.max - i.max;
  return (
    l.max - l.min < i.max - i.min && ([o, u] = [u, o]),
    { min: o, max: u }
  );
}
function TT(i, l) {
  return { x: T0(i.x, l.x), y: T0(i.y, l.y) };
}
function AT(i, l) {
  let o = 0.5;
  const u = se(i),
    c = se(l);
  return (
    c > u
      ? (o = vl(l.min, l.max - u, i.min))
      : u > c && (o = vl(i.min, i.max - c, l.min)),
    tn(0, 1, o)
  );
}
function ET(i, l) {
  const o = {};
  return (
    l.min !== void 0 && (o.min = l.min - i.min),
    l.max !== void 0 && (o.max = l.max - i.min),
    o
  );
}
const Tc = 0.35;
function MT(i = Tc) {
  return (
    i === !1 ? (i = 0) : i === !0 && (i = Tc),
    { x: A0(i, "left", "right"), y: A0(i, "top", "bottom") }
  );
}
function A0(i, l, o) {
  return { min: E0(i, l), max: E0(i, o) };
}
function E0(i, l) {
  return typeof i == "number" ? i : i[l] || 0;
}
const DT = new WeakMap();
class NT {
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
        const { drag: V, dragPropagation: _, onDragStart: L } = this.getProps();
        if (
          V &&
          !_ &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = oS(V)),
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
          dragDirectionLock: _,
          onDirectionLock: L,
          onDrag: X,
        } = this.getProps();
        if (!V && !this.openDragLock) return;
        const { offset: H } = E;
        if (_ && this.currentDirection === null) {
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
    if (!u || !Js(l, c, this.currentDirection)) return;
    const h = this.getAxisMotionValue(l);
    let d = this.originPoint[l] + u[l];
    (this.constraints &&
      this.constraints[l] &&
      (d = bT(d, this.constraints[l], this.elastic[l])),
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
        ? (this.constraints = ST(u.layoutBox, l))
        : (this.constraints = !1),
      (this.elastic = MT(o)),
      c !== this.constraints &&
        !li(l) &&
        u &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        $e((h) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(h) &&
            (this.constraints[h] = ET(u.layoutBox[h], this.constraints[h]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: o } = this.getProps();
    if (!l || !li(l)) return !1;
    const u = l.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const h = US(u, c.root, this.visualElement.getTransformPagePoint());
    let d = TT(c.layout.layoutBox, h);
    if (o) {
      const y = o(RS(d));
      ((this.hasMutatedConstraints = !!y), y && (d = wy(y)));
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
        if (!Js(v, o, this.currentDirection)) return;
        let b = (g && g[v]) || {};
        d && (b = { min: 0, max: 0 });
        const E = c ? 200 : 1e6,
          V = c ? 40 : 1e7,
          _ = {
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
        return this.startAxisValueAnimation(v, _);
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
      if (!Js(o, u, this.currentDirection)) return;
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
        c[d] = AT({ min: g, max: g }, this.constraints[d]);
      }
    });
    const { transformTemplate: h } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = h ? h({}, "") : "none"),
      u.root && u.root.updateScroll(),
      u.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      $e((d) => {
        if (!Js(d, l, null)) return;
        const y = this.getAxisMotionValue(d),
          { min: g, max: p } = this.constraints[d];
        y.set(zt(g, p, c[d]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    DT.set(this.visualElement, this);
    const l = this.visualElement.current,
      o = yl(l, "pointerdown", (p) => {
        const { drag: v, dragListener: b = !0 } = this.getProps(),
          E = p.target,
          V = E !== l && hS(E);
        v && b && !V && this.start(p);
      });
    let u;
    const c = () => {
        const { dragConstraints: p } = this.getProps();
        li(p) &&
          p.current &&
          ((this.constraints = this.resolveRefConstraints()),
          u ||
            (u = CT(l, p.current, () =>
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
function M0(i) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    i();
  };
}
function CT(i, l, o) {
  const u = Rp(i, M0(o)),
    c = Rp(l, M0(o));
  return () => {
    (u(), c());
  };
}
function Js(i, l, o) {
  return (l === !0 || l === i) && (o === null || o === i);
}
function jT(i, l = 10) {
  let o = null;
  return (Math.abs(i.y) > l ? (o = "y") : Math.abs(i.x) > l && (o = "x"), o);
}
class zT extends Pn {
  constructor(l) {
    (super(l),
      (this.removeGroupControls = Be),
      (this.removeListeners = Be),
      (this.controls = new NT(l)));
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
const $r = (i) => (l, o) => {
  i && Dt.update(() => i(l, o), !1, !0);
};
class OT extends Pn {
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
class VT extends I.Component {
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
function pg(i) {
  const [l, o] = H2(),
    u = I.useContext(z0);
  return x.jsx(VT, {
    ...i,
    layoutGroup: u,
    switchLayoutGroup: I.useContext(cg),
    isPresent: l,
    safeToRemove: o,
  });
}
const RT = {
  pan: { Feature: OT },
  drag: { Feature: zT, ProjectionNode: ng, MeasureLayout: pg },
};
function D0(i, l, o) {
  const { props: u } = i;
  i.animationState &&
    u.whileHover &&
    i.animationState.setActive("whileHover", o === "Start");
  const c = "onHover" + o,
    h = u[c];
  h && Dt.postRender(() => h(l, Dl(l)));
}
class _T extends Pn {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = rS(
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
function N0(i, l, o) {
  const { props: u } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled) return;
  i.animationState &&
    u.whileTap &&
    i.animationState.setActive("whileTap", o === "Start");
  const c = "onTap" + (o === "End" ? "" : o),
    h = u[c];
  h && Dt.postRender(() => h(l, Dl(l)));
}
class UT extends Pn {
  mount() {
    const { current: l } = this.node;
    if (!l) return;
    const { globalTapTarget: o, propagate: u } = this.node.props;
    this.unmount = pS(
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
  BT = (i) => {
    const l = Ac.get(i.target);
    l && l(i);
  },
  LT = (i) => {
    i.forEach(BT);
  };
function HT({ root: i, ...l }) {
  const o = i || document;
  tc.has(o) || tc.set(o, {});
  const u = tc.get(o),
    c = JSON.stringify(l);
  return (
    u[c] || (u[c] = new IntersectionObserver(LT, { root: i, ...l })),
    u[c]
  );
}
function qT(i, l, o) {
  const u = HT(l);
  return (
    Ac.set(i, o),
    u.observe(i),
    () => {
      (Ac.delete(i), u.unobserve(i));
    }
  );
}
const YT = { some: 0, all: 1 };
class GT extends Pn {
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
        threshold: typeof c == "number" ? c : YT[c],
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
    return qT(this.node.current, d, y);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: l, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(XT(l, o)) && this.startObserver();
  }
  unmount() {}
}
function XT({ viewport: i = {} }, { viewport: l = {} } = {}) {
  return (o) => i[o] !== l[o];
}
const QT = {
    inView: { Feature: GT },
    tap: { Feature: UT },
    focus: { Feature: wT },
    hover: { Feature: _T },
  },
  ZT = { layout: { ProjectionNode: ng, MeasureLayout: pg } },
  KT = { ...pT, ...QT, ...RT, ...ZT },
  Ke = cT(KT, fT);
const yg = (...i) =>
  i
    .filter((l, o, u) => !!l && l.trim() !== "" && u.indexOf(l) === o)
    .join(" ")
    .trim();
const JT = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const kT = (i) =>
  i.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, o, u) =>
    u ? u.toUpperCase() : o.toLowerCase(),
  );
const C0 = (i) => {
  const l = kT(i);
  return l.charAt(0).toUpperCase() + l.slice(1);
};
var PT = {
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
const FT = (i) => {
  for (const l in i)
    if (l.startsWith("aria-") || l === "role" || l === "title") return !0;
  return !1;
};
const WT = I.forwardRef(
  (
    {
      color: i = "currentColor",
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
        ...PT,
        width: l,
        height: l,
        stroke: i,
        strokeWidth: u ? (Number(o) * 24) / Number(l) : o,
        className: yg("lucide", c),
        ...(!h && !FT(y) && { "aria-hidden": "true" }),
        ...y,
      },
      [
        ...d.map(([p, v]) => I.createElement(p, v)),
        ...(Array.isArray(h) ? h : [h]),
      ],
    ),
);
const kt = (i, l) => {
  const o = I.forwardRef(({ className: u, ...c }, h) =>
    I.createElement(WT, {
      ref: h,
      iconNode: l,
      className: yg(`lucide-${JT(C0(i))}`, `lucide-${i}`, u),
      ...c,
    }),
  );
  return ((o.displayName = C0(i)), o);
};
const $T = [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ],
  IT = kt("award", $T);
const tA = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  ba = kt("check", tA);
const eA = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  nA = kt("chevron-down", eA);
const aA = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ],
  gg = kt("clock", aA);
const iA = [
    ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
    ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }],
  ],
  vg = kt("code", iA);
const lA = [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
    ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
    ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
  ],
  j0 = kt("database", lA);
const sA = [
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
  oA = kt("file-code", sA);
const uA = [
    ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
    ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ],
  rA = kt("git-branch", uA);
const cA = [
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
  fA = kt("lock", cA);
const dA = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1",
      },
    ],
  ],
  hA = kt("play", dA);
const mA = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
  ],
  tf = kt("shield", mA);
const pA = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  xg = kt("star", pA);
const yA = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ],
  bg = kt("target", yA);
const gA = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
  ],
  vA = kt("trending-up", gA);
const xA = [
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
  Sg = kt("trophy", xA);
const bA = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  Tg = kt("users", bA);
const SA = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  gl = kt("x", SA);
const TA = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  ho = kt("zap", TA);
function AA() {
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
                children: "Acesso complelto + bônus exclusivos",
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
                    children: "De R$ 1.997,00",
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
                    children: "ou 12x de R$ 126,28 sem juros",
                  }),
                ],
              }),
              x.jsxs("div", {
                className: "bg-blue-50 rounded-xl p-6 mb-8",
                children: [
                  x.jsx("h3", {
                    className: "font-bold text-lg mb-4 text-slate-900",
                    children: "✨ Você Recebe",
                  }),
                  x.jsx("ul", {
                    className: "space-y-3",
                    children: [
                      "Curso Completo ADVPL Especialista",
                      "Suporte Direto com os Instrutores",
                      "Acesso por 1 ano à Plataforma",
                    ].map((i, l) =>
                      x.jsxs(
                        "li",
                        {
                          className: "flex items-start gap-3",
                          children: [
                            x.jsx(ba, {
                              className:
                                "w-5 h-5 text-green-600 shrink-0 mt-0.5",
                            }),
                            x.jsx("span", {
                              className: "text-slate-700",
                              children: i,
                            }),
                          ],
                        },
                        l,
                      ),
                    ),
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
                        children: "Garantia Incondicional de 15 Dias",
                      }),
                    ],
                  }),
                  x.jsx("p", {
                    className: "text-sm text-slate-600",
                    children:
                      "Se em 15 dias você não estiver satisfeito, devolvemos 100% do seu investimento.",
                  }),
                  x.jsx("div", {
                    className:
                      "flex items-center justify-center gap-6 text-sm text-slate-500 pt-4",
                    children: x.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        x.jsx(fA, { className: "w-4 h-4" }),
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
function EA() {
  const i = () => {
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
            x.jsxs(Ke.div, {
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
                      children: "Turma de lançamento",
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
                    x.jsx("strong", { children: "zero ao especialista" }),
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
                      Ke.li,
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
                  onClick: i,
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
                      x.jsx("span", { children: "Garantia de 15 dias" }),
                    ],
                  }),
                }),
              ],
            }),
            x.jsxs(Ke.div, {
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
                      src: "./assets/img-pc.jpg",
                      alt: "Desenvolvedor programando",
                      className: "w-full",
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
function MA() {
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
              ].map((i, l) =>
                x.jsxs(
                  Ke.div,
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
                        children: x.jsx(i.icon, {
                          className: "w-6 h-6 text-white",
                        }),
                      }),
                      x.jsx("h3", {
                        className: "font-bold text-lg mb-2 text-slate-900",
                        children: i.title,
                      }),
                      x.jsx("p", {
                        className: "text-slate-600",
                        children: i.description,
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
                    "Um Método Estruturado Para  ",
                    x.jsx("span", {
                      className: "text-blue-600",
                      children: "Dominar ADVPL",
                    }),
                    " do Zero",
                  ],
                }),
                x.jsx("p", {
                  className: "text-xl text-slate-600 max-w-3xl mx-auto",
                  children:
                    "Uma metodologia passo a passo, sem enrolação e direto ao ponto para você dominar o desenvolvimento em TOTVS Protheus",
                }),
              ],
            }),
            x.jsxs("div", {
              className: "grid md:grid-cols-2 gap-12 items-center",
              children: [
                x.jsx("div", {
                  children: x.jsx("img", {
                    src: "./assets/metodo.png",
                    alt: "",
                    className: "rounded-2xl shadow-2xl",
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
                      icon: Tg,
                      title: "Suporte Direto",
                      description:
                        "Tire dúvidas com instrutores experientes e uma comunidade ativa e desenvolvedores.",
                    },
                    {
                      icon: vA,
                      title: "Preparação para o Mercado",
                      description:
                        "Saia do curso com portfólio pronto e confiança para buscar oportunidades.",
                    },
                  ].map((i, l) =>
                    x.jsxs(
                      Ke.div,
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
                            children: x.jsx(i.icon, {
                              className: "w-6 h-6 text-white",
                            }),
                          }),
                          x.jsxs("div", {
                            children: [
                              x.jsx("h3", {
                                className:
                                  "font-bold text-lg mb-1 text-slate-900",
                                children: i.title,
                              }),
                              x.jsx("p", {
                                className: "text-slate-600",
                                children: i.description,
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
function DA() {
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
                  icon: j0,
                  text: "Dicionário de dados e estrutura do Protheus",
                },
                { icon: oA, text: "User Functions e pontos de entrada" },
                { icon: rA, text: "Customizações de telas e processos" },
                {
                  icon: hA,
                  text: "Relatórios personalizados e queries avançadas",
                },
                { icon: ho, text: "Integrações com APIs e Web Services" },
                { icon: j0, text: "Manipulação de tabelas e gatilhos" },
                { icon: Sg, text: "Debbuging e otimzação de performance" },
                { icon: IT, text: "Boas práticas e padrões de código" },
              ].map((i, l) =>
                x.jsxs(
                  Ke.div,
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
                        children: x.jsx(i.icon, {
                          className: "w-5 h-5 text-blue-600",
                        }),
                      }),
                      x.jsx("span", {
                        className: "text-slate-700",
                        children: i.text,
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
                      ].map((i, l) =>
                        x.jsxs(
                          "li",
                          {
                            className: "flex items-start gap-3",
                            children: [
                              x.jsx(ba, {
                                className:
                                  "w-5 h-5 text-green-400 shrink-0 mt-1",
                              }),
                              x.jsx("span", { children: i }),
                            ],
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
                      ].map((i, l) =>
                        x.jsxs(
                          "li",
                          {
                            className: "flex items-start gap-3",
                            children: [
                              x.jsx(gl, {
                                className: "w-5 h-5 text-red-400 shrink-0 mt-1",
                              }),
                              x.jsx("span", {
                                className: "text-slate-300",
                                children: i,
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
          ],
        }),
      }),
    ],
  });
}
function NA() {
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
                  "Este é o momento onde tudo começa. Você vai dominar a arquitetura que sustenta milhares de empresas no Brasil e aprender a montar um ambiente Protheus completo e funcional do absoluto zero.",
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
                  "O momento mais poderoso do curso. Você vai dominar estruturas de controle, criar relatórios profissionais e aprender a modificar o comportamento padrão do Protheus através de Pontos de Entrada.",
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
            ].map((i, l) =>
              x.jsxs(
                Ke.div,
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
                              "bg-gradient-to-br from-blue-600 to-blue-700 text-white w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg",
                            children: l + 1,
                          }),
                          x.jsxs("div", {
                            className: "flex-1",
                            children: [
                              x.jsx("div", {
                                className:
                                  "text-sm text-blue-600 font-bold mb-1",
                                children: i.module,
                              }),
                              x.jsx("h3", {
                                className:
                                  "font-bold text-xl text-slate-900 mb-2",
                                children: i.title,
                              }),
                              x.jsxs("div", {
                                className:
                                  "flex items-center gap-2 text-slate-500 mb-3",
                                children: [
                                  x.jsx(gg, { className: "w-4 h-4" }),
                                  x.jsx("span", {
                                    className: "text-sm font-medium",
                                    children: i.lessons,
                                  }),
                                ],
                              }),
                              x.jsx("p", {
                                className:
                                  "text-slate-600 mb-4 leading-relaxed",
                                children: i.description,
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
                            "O que você vai dominar:",
                          ],
                        }),
                        x.jsx("ul", {
                          className: "space-y-2",
                          children: i.topics.map((o, u) =>
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
                          i.benefit,
                        ],
                      }),
                    }),
                  ],
                },
                l,
              ),
            ),
          }),
          x.jsxs(Ke.div, {
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
                ].map((i, l) =>
                  x.jsxs(
                    Ke.div,
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
                          children: i,
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
              className: "grid md :grid-cols-3 gap-8",
              children: [
                { name: "", role: "", company: "", text: "", rating: 5 },
                { name: "", role: "", company: "", text: "", rating: 5 },
              ].map((i, l) =>
                x.jsxs(
                  Ke.div,
                  {
                    initial: { opacity: 0, scale: 0.9 },
                    whileInView: { opacity: 1, scale: 1 },
                    transition: { delay: l * 0.1 },
                    viewport: { once: !0 },
                    className:
                      "bg-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-blue-300 transition-all",
                    children: [
                      x.jsx("div", {
                        className: "flex gap-1 mb-4",
                        children: [...Array(i.rating)].map((o, u) =>
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
                        children: ['"', i.text, '"'],
                      }),
                      x.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          x.jsx("div", {
                            className:
                              "w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold",
                            children: i.name
                              .split(" ")
                              .map((o) => o[0])
                              .join(""),
                          }),
                          x.jsxs("div", {
                            children: [
                              x.jsx("div", {
                                className: "font-bold text-slate-900",
                                children: i.name,
                              }),
                              x.jsx("div", {
                                className: "text-sm text-slate-600",
                                children: i.role,
                              }),
                              x.jsx("div", {
                                className:
                                  "text-xs text-green-600 font-semibold",
                                children: i.company,
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
          ],
        }),
      }),
      x.jsx("section", {
        className:
          "py-20 bg-linear-to-br from-slate-900 to-blue-900 text-white",
        children: x.jsx("div", {
          className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          children: x.jsxs("div", {
            className: "grid md:grid-cols-2 gap-12 items-center",
            children: [
              x.jsx(Ke.div, {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: !0 },
                children: x.jsx("img", {
                  src: "./assets/lnstrutor_perfil.png",
                  alt: "Instrutor",
                  className: "rounded-2xl shadow-2xl",
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
                      x.jsx("span", {
                        className: "text-blue-400",
                        children: "Realmente Trabalha",
                      }),
                      " com Protheus",
                    ],
                  }),
                  x.jsxs("p", {
                    className: "text-lg text-slate-300 mb-6",
                    children: [
                      "Olá! Sou ",
                      x.jsx("strong", { children: "Luis Otávio" }),
                      ", desenvolvedor e consultor TOTVS há mais de 12 anos.",
                    ],
                  }),
                  x.jsx("div", {
                    className: "space-y-4 mb-8",
                    children: [
                      "+12 anos de experiência com TOTVS Protheus",
                      "+50 projetos de customização entregues",
                      "Especialista certificado TOTVS",
                      "Atuação em empresas de médio e grande porte",
                    ].map((i, l) =>
                      x.jsxs(
                        "div",
                        {
                          className: "flex items-start gap-3",
                          children: [
                            x.jsx("div", {
                              className: "bg-blue-500 rounded-full p-1 mt-1",
                              children: x.jsx(ba, { className: "w-4 h-4" }),
                            }),
                            x.jsx("span", {
                              className: "text-slate-200",
                              children: i,
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
    ],
  });
}
function jA() {
  const [i, l] = I.useState(null);
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
                  "Você terá acesso à nossa comunidade privada no Discord com suporte direto dos instrutores e outros alunos. Além disso, há área de comentários em cada aula para dúvidas específicas.",
              },
            ].map((o, u) =>
              x.jsxs(
                "div",
                {
                  className:
                    "border border-slate-200 rounded-lg overflow-hidden",
                  children: [
                    x.jsxs("button", {
                      onClick: () => l(i === u ? null : u),
                      className:
                        "w-full px-6 py-4 text-left flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors",
                      children: [
                        x.jsx("span", {
                          className: "font-semibold text-slate-900",
                          children: o.question,
                        }),
                        x.jsx(nA, {
                          className: `w-5 h-5 text-slate-600 transition-transform ${i === u ? "transform rotate-180" : ""}`,
                        }),
                      ],
                    }),
                    i === u &&
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
function zA() {
  return x.jsx(x.Fragment, {
    children: x.jsx("footer", {
      className: "bg-slate-900 text-slate-400 py-8 border-t border-slate-800",
      children: x.jsxs("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
        children: [
          x.jsx("p", {
            className: "text-sm",
            children:
              "© 2026 Curso ADVPL Especialista. Todos os direitos reservados.",
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
function OA({ scrollToCta: i }) {
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
                "Centenas de alunos já estão construindo suas carreiras no mercado ERP enquanto você está lendo isso. A sua vez pode começar agora.",
            }),
            x.jsx("div", {
              className:
                "flex flex-col sm:flex-row gap-4 justify-center items-center mb-8",
              children: x.jsxs("button", {
                onClick: i,
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
                    x.jsx(Tg, { className: "w-4 h-4" }),
                    x.jsx("span", { children: "+2.347 Alunos" }),
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
function VA() {
  const [i, l] = I.useState(null),
    o = () => {
      document
        .getElementById("offer-section")
        ?.scrollIntoView({ behavior: "smooth" });
    };
  return x.jsxs("div", {
    className: "min-h-screen bg-slate-50",
    children: [
      x.jsx(EA, {}),
      x.jsx(MA, {}),
      x.jsx(DA, {}),
      x.jsx(NA, {}),
      x.jsx(CA, {}),
      x.jsx(AA, {}),
      x.jsx(jA, { openFaq: i, setOpenFaq: l }),
      x.jsx(OA, { scrollToCta: o }),
      x.jsx(zA, {}),
    ],
  });
}
ex.createRoot(document.getElementById("root")).render(
  x.jsx(I.StrictMode, { children: x.jsx(VA, {}) }),
);
