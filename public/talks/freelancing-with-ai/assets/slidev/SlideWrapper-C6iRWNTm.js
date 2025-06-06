import {
  t as L,
  z as b,
  B as F,
  R as Xt,
  U as ut,
  ax as Qt,
  N as zt,
  y as Jt,
  n as Wt,
  E as te,
  d as vt,
  o as Z,
  b as tt,
  g as Rt,
  ay as ee,
  az as se,
  aA as A,
  K as ne,
  e as wt,
  f as St,
  h as W,
  F as re,
  ac as ie,
  l as bt,
  c as ae,
  ap as oe,
  i as le,
} from '../modules/vue-BITYyB3i.js'
import {
  Q as jt,
  a as Ot,
  v as ft,
  Z as ct,
  $ as Pt,
  a0 as he,
  Y as ue,
  a1 as B,
  a2 as ce,
  a3 as de,
  a4 as Et,
  K as Mt,
  z as $t,
  A as Lt,
  R as fe,
  a5 as pe,
  _ as Bt,
  a6 as ge,
  a7 as me,
  a8 as ve,
  a9 as ye,
  aa as xe,
  ab as _e,
  ac as we,
} from '../index-BivI_MQ5.js'
function Se(t) {
  var e
  return { info: L(((e = jt(t)) == null ? void 0 : e.meta.slide) ?? null), update: async () => {} }
}
const dt = {}
function ps(t) {
  function e(s) {
    return dt[s] ?? (dt[s] = Se(s))
  }
  return {
    info: b({
      get() {
        return e(F(t)).info.value
      },
      set(s) {
        e(F(t)).info.value = s
      },
    }),
    update: async (s, n) => {
      const r = e(n ?? F(t)),
        i = await r.update(s)
      return i && (r.info.value = i), i
    },
  }
}
var be = Object.defineProperty,
  kt = Object.getOwnPropertySymbols,
  Pe = Object.prototype.hasOwnProperty,
  Ee = Object.prototype.propertyIsEnumerable,
  Ct = (t, e, s) => (e in t ? be(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (t[e] = s)),
  pt = (t, e) => {
    for (var s in e || (e = {})) Pe.call(e, s) && Ct(t, s, e[s])
    if (kt) for (var s of kt(e)) Ee.call(e, s) && Ct(t, s, e[s])
    return t
  },
  Me = () => ({
    emit(t, ...e) {
      for (let s = 0, n = this.events[t] || [], r = n.length; s < r; s++) n[s](...e)
    },
    events: {},
    on(t, e) {
      var s
      return (
        ((s = this.events)[t] || (s[t] = [])).push(e),
        () => {
          var n
          this.events[t] = (n = this.events[t]) == null ? void 0 : n.filter(r => e !== r)
        }
      )
    },
  })
function Dt(t, e, s, n = r => r) {
  return t * n(0.5 - e * (0.5 - s))
}
function $e(t) {
  return [-t[0], -t[1]]
}
function $(t, e) {
  return [t[0] + e[0], t[1] + e[1]]
}
function P(t, e) {
  return [t[0] - e[0], t[1] - e[1]]
}
function M(t, e) {
  return [t[0] * e, t[1] * e]
}
function Le(t, e) {
  return [t[0] / e, t[1] / e]
}
function q(t) {
  return [t[1], -t[0]]
}
function Nt(t, e) {
  return t[0] * e[0] + t[1] * e[1]
}
function ke(t, e) {
  return t[0] === e[0] && t[1] === e[1]
}
function Ce(t) {
  return Math.hypot(t[0], t[1])
}
function De(t) {
  return t[0] * t[0] + t[1] * t[1]
}
function It(t, e) {
  return De(P(t, e))
}
function Ut(t) {
  return Le(t, Ce(t))
}
function Ne(t, e) {
  return Math.hypot(t[1] - e[1], t[0] - e[0])
}
function H(t, e, s) {
  let n = Math.sin(s),
    r = Math.cos(s),
    i = t[0] - e[0],
    o = t[1] - e[1],
    a = i * r - o * n,
    l = i * n + o * r
  return [a + e[0], l + e[1]]
}
function gt(t, e, s) {
  return $(t, M(P(e, t), s))
}
function At(t, e, s) {
  return $(t, M(e, s))
}
var { min: O, PI: Ie } = Math,
  Ft = 0.275,
  Y = Ie + 1e-4
function Ae(t, e = {}) {
  let {
      size: s = 16,
      smoothing: n = 0.5,
      thinning: r = 0.5,
      simulatePressure: i = !0,
      easing: o = u => u,
      start: a = {},
      end: l = {},
      last: p = !1,
    } = e,
    { cap: v = !0, easing: y = u => u * (2 - u) } = a,
    { cap: x = !0, easing: f = u => --u * u * u + 1 } = l
  if (t.length === 0 || s <= 0) return []
  let d = t[t.length - 1].runningLength,
    c = a.taper === !1 ? 0 : a.taper === !0 ? Math.max(s, d) : a.taper,
    E = l.taper === !1 ? 0 : l.taper === !0 ? Math.max(s, d) : l.taper,
    j = Math.pow(s * n, 2),
    C = [],
    h = [],
    _ = t.slice(0, 10).reduce((u, S) => {
      let g = S.pressure
      if (i) {
        let m = O(1, S.distance / s),
          ot = O(1, 1 - m)
        g = O(1, u + (ot - u) * (m * Ft))
      }
      return (u + g) / 2
    }, t[0].pressure),
    w = Dt(s, r, t[t.length - 1].pressure, o),
    nt,
    rt = t[0].vector,
    V = t[0].point,
    X = V,
    T = V,
    z = X,
    it = !1
  for (let u = 0; u < t.length; u++) {
    let { pressure: S } = t[u],
      { point: g, vector: m, distance: ot, runningLength: G } = t[u]
    if (u < t.length - 1 && d - G < 3) continue
    if (r) {
      if (i) {
        let I = O(1, ot / s),
          ht = O(1, 1 - I)
        S = O(1, _ + (ht - _) * (I * Ft))
      }
      w = Dt(s, r, S, o)
    } else w = s / 2
    nt === void 0 && (nt = w)
    let Ht = G < c ? y(G / c) : 1,
      Yt = d - G < E ? f((d - G) / E) : 1
    w = Math.max(0.01, w * Math.min(Ht, Yt))
    let yt = (u < t.length - 1 ? t[u + 1] : t[u]).vector,
      lt = u < t.length - 1 ? Nt(m, yt) : 1,
      Zt = Nt(m, rt) < 0 && !it,
      xt = lt !== null && lt < 0
    if (Zt || xt) {
      let I = M(q(rt), w)
      for (let ht = 1 / 13, J = 0; J <= 1; J += ht)
        (T = H(P(g, I), g, Y * J)), C.push(T), (z = H($(g, I), g, Y * -J)), h.push(z)
      ;(V = T), (X = z), xt && (it = !0)
      continue
    }
    if (((it = !1), u === t.length - 1)) {
      let I = M(q(m), w)
      C.push(P(g, I)), h.push($(g, I))
      continue
    }
    let _t = M(q(gt(yt, m, lt)), w)
    ;(T = P(g, _t)),
      (u <= 1 || It(V, T) > j) && (C.push(T), (V = T)),
      (z = $(g, _t)),
      (u <= 1 || It(X, z) > j) && (h.push(z), (X = z)),
      (_ = S),
      (rt = m)
  }
  let D = t[0].point.slice(0, 2),
    N = t.length > 1 ? t[t.length - 1].point.slice(0, 2) : $(t[0].point, [1, 1]),
    at = [],
    Q = []
  if (t.length === 1) {
    if (!(c || E) || p) {
      let u = At(D, Ut(q(P(D, N))), -(nt || w)),
        S = []
      for (let g = 1 / 13, m = g; m <= 1; m += g) S.push(H(u, D, Y * 2 * m))
      return S
    }
  } else {
    if (!(c || (E && t.length === 1)))
      if (v)
        for (let S = 1 / 13, g = S; g <= 1; g += S) {
          let m = H(h[0], D, Y * g)
          at.push(m)
        }
      else {
        let S = P(C[0], h[0]),
          g = M(S, 0.5),
          m = M(S, 0.51)
        at.push(P(D, g), P(D, m), $(D, m), $(D, g))
      }
    let u = q($e(t[t.length - 1].vector))
    if (E || (c && t.length === 1)) Q.push(N)
    else if (x) {
      let S = At(N, u, w)
      for (let g = 1 / 29, m = g; m < 1; m += g) Q.push(H(S, N, Y * 3 * m))
    } else Q.push($(N, M(u, w)), $(N, M(u, w * 0.99)), P(N, M(u, w * 0.99)), P(N, M(u, w)))
  }
  return C.concat(Q, h.reverse(), at)
}
function Fe(t, e = {}) {
  var s
  let { streamline: n = 0.5, size: r = 16, last: i = !1 } = e
  if (t.length === 0) return []
  let o = 0.15 + (1 - n) * 0.85,
    a = Array.isArray(t[0]) ? t : t.map(({ x: f, y: d, pressure: c = 0.5 }) => [f, d, c])
  if (a.length === 2) {
    let f = a[1]
    a = a.slice(0, -1)
    for (let d = 1; d < 5; d++) a.push(gt(a[0], f, d / 4))
  }
  a.length === 1 && (a = [...a, [...$(a[0], [1, 1]), ...a[0].slice(2)]])
  let l = [
      {
        point: [a[0][0], a[0][1]],
        pressure: a[0][2] >= 0 ? a[0][2] : 0.25,
        vector: [1, 1],
        distance: 0,
        runningLength: 0,
      },
    ],
    p = !1,
    v = 0,
    y = l[0],
    x = a.length - 1
  for (let f = 1; f < a.length; f++) {
    let d = i && f === x ? a[f].slice(0, 2) : gt(y.point, a[f], o)
    if (ke(y.point, d)) continue
    let c = Ne(d, y.point)
    if (((v += c), f < x && !p)) {
      if (v < r) continue
      p = !0
    }
    ;(y = {
      point: d,
      pressure: a[f][2] >= 0 ? a[f][2] : 0.5,
      vector: Ut(P(y.point, d)),
      distance: c,
      runningLength: v,
    }),
      l.push(y)
  }
  return (l[0].vector = ((s = l[1]) == null ? void 0 : s.vector) || [0, 0]), l
}
function Ke(t, e = {}) {
  return Ae(Fe(t, e), e)
}
function et(t, e) {
  return t - e
}
function Te(t) {
  return t < 0 ? -1 : 1
}
function st(t) {
  return [Math.abs(t), Te(t)]
}
function Vt() {
  const t = () => (((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
  return `${t() + t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`
}
var ze = 2,
  k = ze,
  U = class {
    constructor(t) {
      ;(this.drauu = t), (this.event = void 0), (this.point = void 0), (this.start = void 0), (this.el = null)
    }
    onSelected(t) {}
    onUnselected() {}
    onStart(t) {}
    onMove(t) {
      return !1
    }
    onEnd(t) {}
    get brush() {
      return this.drauu.brush
    }
    get shiftPressed() {
      return this.drauu.shiftPressed
    }
    get altPressed() {
      return this.drauu.altPressed
    }
    get svgElement() {
      return this.drauu.el
    }
    getMousePosition(t) {
      var e, s, n
      const r = this.drauu.el,
        i = (e = this.drauu.options.coordinateScale) != null ? e : 1,
        o = (s = this.drauu.options.offset) != null ? s : { x: 0, y: 0 }
      if (this.drauu.options.coordinateTransform === !1) {
        const a = this.drauu.el.getBoundingClientRect()
        return { x: (t.pageX - a.left + o.x) * i, y: (t.pageY - a.top + o.y) * i, pressure: t.pressure }
      } else {
        const a = this.drauu.svgPoint
        ;(a.x = t.clientX + o.x), (a.y = t.clientY + o.y)
        const l = a.matrixTransform((n = r.getScreenCTM()) == null ? void 0 : n.inverse())
        return { x: l.x * i, y: l.y * i, pressure: t.pressure }
      }
    }
    createElement(t, e) {
      var s
      const n = document.createElementNS('http://www.w3.org/2000/svg', t),
        r = e ? pt(pt({}, this.brush), e) : this.brush
      return (
        n.setAttribute('fill', (s = r.fill) != null ? s : 'transparent'),
        n.setAttribute('stroke', r.color),
        n.setAttribute('stroke-width', r.size.toString()),
        n.setAttribute('stroke-linecap', 'round'),
        r.dasharray && n.setAttribute('stroke-dasharray', r.dasharray),
        n
      )
    }
    attr(t, e) {
      this.el.setAttribute(t, typeof e == 'string' ? e : e.toFixed(k))
    }
    _setEvent(t) {
      ;(this.event = t), (this.point = this.getMousePosition(t))
    }
    _eventDown(t) {
      return this._setEvent(t), (this.start = this.point), this.onStart(this.point)
    }
    _eventMove(t) {
      return this._setEvent(t), this.onMove(this.point)
    }
    _eventUp(t) {
      return this._setEvent(t), this.onEnd(this.point)
    }
  },
  Re = class Gt extends U {
    constructor() {
      super(...arguments), (this.points = [])
    }
    onStart(e) {
      return (
        (this.el = document.createElementNS('http://www.w3.org/2000/svg', 'path')),
        (this.points = [e]),
        this.attr('fill', this.brush.color),
        this.attr('d', this.getSvgData(this.points)),
        this.el
      )
    }
    onMove(e) {
      return (
        this.el || this.onStart(e),
        this.points[this.points.length - 1] !== e && this.points.push(e),
        this.attr('d', this.getSvgData(this.points)),
        !0
      )
    }
    onEnd() {
      const e = this.el
      return (this.el = null), !!e
    }
    getSvgData(e) {
      return Gt.getSvgData(e, this.brush)
    }
    static getSvgData(e, s) {
      const n = Ke(
        e,
        pt(
          { size: s.size, thinning: 0.9, simulatePressure: !1, start: { taper: 5 }, end: { taper: 5 } },
          s.stylusOptions,
        ),
      )
      if (!n.length) return ''
      const r = n.reduce(
        (i, [o, a], l, p) => {
          const [v, y] = p[(l + 1) % p.length]
          return i.push(o, a, (o + v) / 2, (a + y) / 2), i
        },
        ['M', ...n[0], 'Q'],
      )
      return r.push('Z'), r.map(i => (typeof i == 'number' ? i.toFixed(2) : i)).join(' ')
    }
  },
  je = class extends U {
    onStart(t) {
      return (this.el = this.createElement('ellipse')), this.attr('cx', t.x), this.attr('cy', t.y), this.el
    }
    onMove(t) {
      if (!this.el || !this.start) return !1
      let [e, s] = st(t.x - this.start.x),
        [n, r] = st(t.y - this.start.y)
      if (this.shiftPressed) {
        const i = Math.min(e, n)
        ;(e = i), (n = i)
      }
      if (this.altPressed)
        this.attr('cx', this.start.x), this.attr('cy', this.start.y), this.attr('rx', e), this.attr('ry', n)
      else {
        const [i, o] = [this.start.x, this.start.x + e * s].sort(et),
          [a, l] = [this.start.y, this.start.y + n * r].sort(et)
        this.attr('cx', (i + o) / 2),
          this.attr('cy', (a + l) / 2),
          this.attr('rx', (o - i) / 2),
          this.attr('ry', (l - a) / 2)
      }
      return !0
    }
    onEnd() {
      const t = this.el
      return (this.el = null), !(!t || !t.getTotalLength())
    }
  }
function qt(t, e) {
  const s = document.createElementNS('http://www.w3.org/2000/svg', 'defs'),
    n = document.createElementNS('http://www.w3.org/2000/svg', 'marker'),
    r = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  return (
    r.setAttribute('fill', e),
    n.setAttribute('id', t),
    n.setAttribute('viewBox', '0 -5 10 10'),
    n.setAttribute('refX', '5'),
    n.setAttribute('refY', '0'),
    n.setAttribute('markerWidth', '4'),
    n.setAttribute('markerHeight', '4'),
    n.setAttribute('orient', 'auto'),
    r.setAttribute('d', 'M0,-5L10,0L0,5'),
    n.appendChild(r),
    s.appendChild(n),
    s
  )
}
var Oe = class extends U {
    onStart(t) {
      if (
        ((this.el = this.createElement('line', { fill: 'transparent' })),
        this.attr('x1', t.x),
        this.attr('y1', t.y),
        this.attr('x2', t.x),
        this.attr('y2', t.y),
        this.brush.arrowEnd)
      ) {
        const e = Vt(),
          s = document.createElementNS('http://www.w3.org/2000/svg', 'g')
        return s.append(qt(e, this.brush.color)), s.append(this.el), this.attr('marker-end', `url(#${e})`), s
      }
      return this.el
    }
    onMove(t) {
      if (!this.el) return !1
      let { x: e, y: s } = t
      if (this.shiftPressed) {
        const n = t.x - this.start.x,
          r = t.y - this.start.y
        if (r !== 0) {
          let i = n / r
          ;(i = Math.round(i)),
            Math.abs(i) <= 1
              ? ((e = this.start.x + r * i), (s = this.start.y + r))
              : ((e = this.start.x + n), (s = this.start.y))
        }
      }
      return (
        this.altPressed
          ? (this.attr('x1', this.start.x * 2 - e),
            this.attr('y1', this.start.y * 2 - s),
            this.attr('x2', e),
            this.attr('y2', s))
          : (this.attr('x1', this.start.x), this.attr('y1', this.start.y), this.attr('x2', e), this.attr('y2', s)),
        !0
      )
    }
    onEnd() {
      const t = this.el
      return (this.el = null), !(!t || t.getTotalLength() < 5)
    }
  },
  Be = class extends U {
    onStart(t) {
      return (
        (this.el = this.createElement('rect')),
        this.brush.cornerRadius && (this.attr('rx', this.brush.cornerRadius), this.attr('ry', this.brush.cornerRadius)),
        this.attr('x', t.x),
        this.attr('y', t.y),
        this.el
      )
    }
    onMove(t) {
      if (!this.el || !this.start) return !1
      let [e, s] = st(t.x - this.start.x),
        [n, r] = st(t.y - this.start.y)
      if (this.shiftPressed) {
        const i = Math.min(e, n)
        ;(e = i), (n = i)
      }
      if (this.altPressed)
        this.attr('x', this.start.x - e),
          this.attr('y', this.start.y - n),
          this.attr('width', e * 2),
          this.attr('height', n * 2)
      else {
        const [i, o] = [this.start.x, this.start.x + e * s].sort(et),
          [a, l] = [this.start.y, this.start.y + n * r].sort(et)
        this.attr('x', i), this.attr('y', a), this.attr('width', o - i), this.attr('height', l - a)
      }
      return !0
    }
    onEnd() {
      const t = this.el
      return (this.el = null), !(!t || !t.getTotalLength())
    }
  }
function Ue(t, e) {
  const s = t.x - e.x,
    n = t.y - e.y
  return s * s + n * n
}
function Ve(t, e, s) {
  let n = e.x,
    r = e.y,
    i = s.x - n,
    o = s.y - r
  if (i !== 0 || o !== 0) {
    const a = ((t.x - n) * i + (t.y - r) * o) / (i * i + o * o)
    a > 1 ? ((n = s.x), (r = s.y)) : a > 0 && ((n += i * a), (r += o * a))
  }
  return (i = t.x - n), (o = t.y - r), i * i + o * o
}
function Ge(t, e) {
  let s = t[0]
  const n = [s]
  let r
  for (let i = 1, o = t.length; i < o; i++) (r = t[i]), Ue(r, s) > e && (n.push(r), (s = r))
  return s !== r && r && n.push(r), n
}
function mt(t, e, s, n, r) {
  let i = n,
    o = 0
  for (let a = e + 1; a < s; a++) {
    const l = Ve(t[a], t[e], t[s])
    l > i && ((o = a), (i = l))
  }
  i > n && (o - e > 1 && mt(t, e, o, n, r), r.push(t[o]), s - o > 1 && mt(t, o, s, n, r))
}
function qe(t, e) {
  const s = t.length - 1,
    n = [t[0]]
  return mt(t, 0, s, e, n), n.push(t[s]), n
}
function Kt(t, e, s = !1) {
  if (t.length <= 2) return t
  const n = e * e
  return (t = s ? t : Ge(t, n)), (t = qe(t, n)), t
}
var He = class R extends U {
    constructor() {
      super(...arguments), (this.points = []), (this.count = 0)
    }
    onStart(e) {
      if (((this.el = this.createElement('path', { fill: 'transparent' })), (this.points = [e]), this.brush.arrowEnd)) {
        this.arrowId = Vt()
        const s = qt(this.arrowId, this.brush.color)
        this.el.appendChild(s)
      }
      return this.el
    }
    onMove(e) {
      return (
        this.el || this.onStart(e),
        this.points[this.points.length - 1] !== e && (this.points.push(e), (this.count += 1)),
        this.count > 5 && ((this.points = Kt(this.points, 1, !0)), (this.count = 0)),
        this.attr('d', R.toSvgData(this.points)),
        !0
      )
    }
    onEnd() {
      const e = this.el
      if (((this.el = null), !e)) return !1
      if ((e.setAttribute('d', R.toSvgData(Kt(this.points, 1, !0))), !e.getTotalLength())) {
        const { x: s, y: n } = this.points[0],
          r = this.brush.size / 2
        e.setAttribute('d', `M ${s - r} ${n} a ${r},${r} 0 1,0 ${r * 2},0 a ${r},${r} 0 1,0 ${-r * 2},0`),
          e.setAttribute('fill', this.brush.color),
          e.setAttribute('stroke-width', '0')
      }
      return !0
    }
    static line(e, s) {
      const n = s.x - e.x,
        r = s.y - e.y
      return { length: Math.sqrt(n ** 2 + r ** 2), angle: Math.atan2(r, n) }
    }
    static controlPoint(e, s, n, r) {
      const i = s || e,
        o = n || e,
        a = 0.2,
        l = R.line(i, o),
        p = l.angle + (r ? Math.PI : 0),
        v = l.length * a,
        y = e.x + Math.cos(p) * v,
        x = e.y + Math.sin(p) * v
      return { x: y, y: x }
    }
    static bezierCommand(e, s, n) {
      const r = R.controlPoint(n[s - 1], n[s - 2], e),
        i = R.controlPoint(e, n[s - 1], n[s + 1], !0)
      return `C ${r.x.toFixed(k)},${r.y.toFixed(k)} ${i.x.toFixed(k)},${i.y.toFixed(k)} ${e.x.toFixed(k)},${e.y.toFixed(k)}`
    }
    static toSvgData(e) {
      return e.reduce(
        (s, n, r, i) => (r === 0 ? `M ${n.x.toFixed(k)},${n.y.toFixed(k)}` : `${s} ${R.bezierCommand(n, r, i)}`),
        '',
      )
    }
  },
  Ye = class extends U {
    constructor() {
      super(...arguments), (this.pathSubFactor = 20), (this.pathFragments = []), (this._erased = [])
    }
    onSelected(t) {
      const e = (s, n) => {
        if (s && s.length)
          for (let r = 0; r < s.length; r++) {
            const i = s[r]
            if (i.getTotalLength) {
              const o = i.getTotalLength()
              for (let a = 0; a < this.pathSubFactor; a++) {
                const l = i.getPointAtLength((o * a) / this.pathSubFactor),
                  p = i.getPointAtLength((o * (a + 1)) / this.pathSubFactor)
                this.pathFragments.push({ x1: l.x, x2: p.x, y1: l.y, y2: p.y, segment: a, element: n || i })
              }
            } else i.children && e(i.children, i)
          }
      }
      t && e(t.children)
    }
    onUnselected() {
      this.pathFragments = []
    }
    onStart(t) {
      ;(this.svgPointPrevious = this.svgElement.createSVGPoint()),
        (this.svgPointPrevious.x = t.x),
        (this.svgPointPrevious.y = t.y)
    }
    onMove(t) {
      ;(this.svgPointCurrent = this.svgElement.createSVGPoint()),
        (this.svgPointCurrent.x = t.x),
        (this.svgPointCurrent.y = t.y)
      const e = this.checkAndEraseElement()
      return (this.svgPointPrevious = this.svgPointCurrent), e
    }
    onEnd() {
      ;(this.svgPointPrevious = void 0), (this.svgPointCurrent = void 0)
      const t = this._erased
      return (
        (this._erased = []),
        {
          undo: () => t.forEach(e => this.drauu._restoreNode(e)),
          redo: () => t.forEach(e => this.drauu._removeNode(e)),
        }
      )
    }
    checkAndEraseElement() {
      if (this.pathFragments.length)
        for (let t = 0; t < this.pathFragments.length; t++) {
          const e = this.pathFragments[t],
            s = {
              x1: this.svgPointPrevious.x,
              x2: this.svgPointCurrent.x,
              y1: this.svgPointPrevious.y,
              y2: this.svgPointCurrent.y,
            }
          this.lineLineIntersect(e, s) && (this.drauu._removeNode(e.element), this._erased.push(e.element))
        }
      return (
        this._erased.length && (this.pathFragments = this.pathFragments.filter(t => !this._erased.includes(t.element))),
        this._erased.length > 0
      )
    }
    lineLineIntersect(t, e) {
      const s = t.x1,
        n = t.x2,
        r = e.x1,
        i = e.x2,
        o = t.y1,
        a = t.y2,
        l = e.y1,
        p = e.y2,
        v = (s - n) * (l - p) - (o - a) * (r - i),
        y = (s * a - o * n) * (r - i) - (s - n) * (r * p - l * i),
        x = (s * a - o * n) * (l - p) - (o - a) * (r * p - l * i),
        f = (d, c, E) => (d >= c && d <= E ? !0 : d >= E && d <= c)
      if (v === 0) return !1
      {
        const d = { x: y / v, y: x / v }
        return f(d.x, s, n) && f(d.y, o, a) && f(d.x, r, i) && f(d.y, l, p)
      }
    }
  }
function Ze(t) {
  return {
    draw: new He(t),
    stylus: new Re(t),
    line: new Oe(t),
    rectangle: new Be(t),
    ellipse: new je(t),
    eraseLine: new Ye(t),
  }
}
var Xe = class {
  constructor(t = {}) {
    ;(this.options = t),
      (this.el = null),
      (this.svgPoint = null),
      (this.eventEl = null),
      (this.shiftPressed = !1),
      (this.altPressed = !1),
      (this.drawing = !1),
      (this._emitter = Me()),
      (this._originalPointerId = null),
      (this._models = Ze(this)),
      (this._opStack = []),
      (this._opIndex = 0),
      (this._disposables = []),
      (this._elements = []),
      this.options.brush || (this.options.brush = { color: 'black', size: 3, mode: 'stylus' }),
      t.el && this.mount(t.el, t.eventTarget, t.window)
  }
  get model() {
    return this._models[this.mode]
  }
  get mounted() {
    return !!this.el
  }
  get mode() {
    return this.options.brush.mode || 'stylus'
  }
  set mode(t) {
    this._models[this.mode].onUnselected(), (this.options.brush.mode = t), this.model.onSelected(this.el)
  }
  get brush() {
    return this.options.brush
  }
  set brush(t) {
    this.options.brush = t
  }
  resolveSelector(t) {
    return typeof t == 'string' ? document.querySelector(t) : t || null
  }
  mount(t, e, s = window) {
    if (this.el) throw new Error('[drauu] already mounted, unmount previous target first')
    if (((this.el = this.resolveSelector(t)), !this.el)) throw new Error('[drauu] target element not found')
    if (this.el.tagName.toLocaleLowerCase() !== 'svg') throw new Error('[drauu] can only mount to a SVG element')
    if (!this.el.createSVGPoint)
      throw new Error(
        "[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')",
      )
    this.svgPoint = this.el.createSVGPoint()
    const n = this.resolveSelector(e) || this.el,
      r = this.eventStart.bind(this),
      i = this.eventMove.bind(this),
      o = this.eventEnd.bind(this),
      a = this.eventKeyboard.bind(this)
    n.addEventListener('pointerdown', r, { passive: !1 }),
      s.addEventListener('pointermove', i, { passive: !1 }),
      s.addEventListener('pointerup', o, { passive: !1 }),
      s.addEventListener('pointercancel', o, { passive: !1 }),
      s.addEventListener('keydown', a, !1),
      s.addEventListener('keyup', a, !1),
      this._disposables.push(() => {
        n.removeEventListener('pointerdown', r),
          s.removeEventListener('pointermove', i),
          s.removeEventListener('pointerup', o),
          s.removeEventListener('pointercancel', o),
          s.removeEventListener('keydown', a, !1),
          s.removeEventListener('keyup', a, !1)
      }),
      this._emitter.emit('mounted')
  }
  unmount() {
    this._disposables.forEach(t => t()),
      (this._disposables.length = 0),
      (this._elements.length = 0),
      (this.el = null),
      this._emitter.emit('unmounted')
  }
  on(t, e) {
    return this._emitter.on(t, e)
  }
  undo() {
    return !this.canUndo() || this.drawing
      ? !1
      : (this._opStack[--this._opIndex].undo(), this._emitter.emit('changed'), !0)
  }
  redo() {
    return !this.canRedo() || this.drawing
      ? !1
      : (this._opStack[this._opIndex++].redo(), this._emitter.emit('changed'), !0)
  }
  canRedo() {
    return this._opIndex < this._opStack.length
  }
  canUndo() {
    return this._opIndex > 0
  }
  eventMove(t) {
    !this.acceptsInput(t) ||
      !this.drawing ||
      (this.model._eventMove(t) && (t.stopPropagation(), t.preventDefault(), this._emitter.emit('changed')))
  }
  eventStart(t) {
    this.acceptsInput(t) &&
      (t.stopPropagation(),
      t.preventDefault(),
      this._currentNode && this.cancel(),
      (this.drawing = !0),
      (this._originalPointerId = t.pointerId),
      this._emitter.emit('start'),
      (this._currentNode = this.model._eventDown(t)),
      this._currentNode && this.mode !== 'eraseLine' && this.el.appendChild(this._currentNode),
      this._emitter.emit('changed'))
  }
  eventEnd(t) {
    if (!this.acceptsInput(t) || !this.drawing) return
    const e = this.model._eventUp(t)
    if (!e) this.cancel()
    else if (e === !0) {
      const s = this._currentNode
      this._appendNode(s), this.commit({ undo: () => this._removeNode(s), redo: () => this._restoreNode(s) })
    } else this.commit(e)
    ;(this.drawing = !1), this._emitter.emit('end'), this._emitter.emit('changed'), (this._originalPointerId = null)
  }
  acceptsInput(t) {
    return (
      (!this.options.acceptsInputTypes || this.options.acceptsInputTypes.includes(t.pointerType)) &&
      !(this._originalPointerId && this._originalPointerId !== t.pointerId)
    )
  }
  eventKeyboard(t) {
    ;(this.shiftPressed === t.shiftKey && this.altPressed === t.altKey) ||
      ((this.shiftPressed = t.shiftKey),
      (this.altPressed = t.altKey),
      this.model.point && this.model.onMove(this.model.point) && this._emitter.emit('changed'))
  }
  commit(t) {
    ;(this._opStack.length = this._opIndex), this._opStack.push(t), this._opIndex++
    const e = this._currentNode
    ;(this._currentNode = void 0), this._emitter.emit('committed', e)
  }
  clear() {
    ;(this._opStack.length = 0),
      (this._opIndex = 0),
      (this._elements = []),
      this.cancel(),
      (this.el.innerHTML = ''),
      this._emitter.emit('changed')
  }
  cancel() {
    this._currentNode &&
      (this.el.removeChild(this._currentNode), (this._currentNode = void 0), this._emitter.emit('canceled'))
  }
  dump() {
    return this.el.innerHTML
  }
  load(t) {
    this.clear(), (this.el.innerHTML = t)
  }
  _appendNode(t) {
    const e = this._elements.at(-1)
    e ? e.after(t) : this.el.append(t)
    const s = this._elements.push(t) - 1
    t.dataset.drauu_index = s.toString()
  }
  _removeNode(t) {
    t.remove(), (this._elements[+t.dataset.drauu_index] = null)
  }
  _restoreNode(t) {
    const e = +t.dataset.drauu_index
    this._elements[e] = t
    for (let s = e - 1; s >= 0; s--) {
      const n = this._elements[s]
      if (n) {
        n.after(t)
        return
      }
    }
    this.el.prepend(t)
  }
}
function Qe(t) {
  return new Xe(t)
}
const Je = Xt(() => {
    const { currentSlideNo: t, isPresenter: e } = Ot(),
      s = ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93', '#ffffff', '#000000'],
      n = ut('slidev-drawing-enabled', !1),
      r = ut('slidev-drawing-pinned', !1),
      i = Qt(ut('slidev-drawing-brush', { color: s[0], size: 4, mode: 'stylus' })),
      o = L(!1),
      a = L(!1),
      l = L(!1),
      p = L(!1),
      v = L('stylus'),
      y = b(() => ft.drawings.syncAll || e.value)
    let x = !1
    const f = b({
        get() {
          return v.value
        },
        set(h) {
          ;(v.value = h), h === 'arrow' ? ((c.mode = 'line'), (i.arrowEnd = !0)) : ((c.mode = h), (i.arrowEnd = !1))
        },
      }),
      d = zt({
        brush: i,
        acceptsInputTypes: b(() => (n.value && (!ft.drawings.presenterOnly || e.value) ? void 0 : ['pen'])),
        coordinateTransform: !1,
      }),
      c = Jt(Qe(d))
    function E() {
      c.clear(), y.value && Pt(t.value, '')
    }
    function j() {
      var h
      ;(l.value = c.canRedo()), (a.value = c.canUndo()), (p.value = !!((h = c.el) != null && h.children.length))
    }
    function C(h) {
      x = !0
      const _ = ct[h || t.value]
      _ != null ? c.load(_) : c.clear(), j(), (x = !1)
    }
    return (
      c.on('changed', () => {
        if ((j(), !x)) {
          const h = c.dump(),
            _ = t.value
          ;(ct[_] || '') !== h && y.value && Pt(_, c.dump())
        }
      }),
      he(h => {
        ;(x = !0), h[t.value] != null && c.load(h[t.value] || ''), (x = !1), j()
      }),
      Wt(() => {
        te(
          t,
          () => {
            c.mounted && C()
          },
          { immediate: !0 },
        )
      }),
      c.on('start', () => (o.value = !0)),
      c.on('end', () => (o.value = !1)),
      window.addEventListener(
        'keydown',
        h => {
          if (!n.value || ue.value) return
          const _ = !h.ctrlKey && !h.altKey && !h.shiftKey && !h.metaKey
          let w = !0
          h.code === 'KeyZ' && (h.ctrlKey || h.metaKey)
            ? h.shiftKey
              ? c.redo()
              : c.undo()
            : h.code === 'Escape'
              ? (n.value = !1)
              : h.code === 'KeyL' && _
                ? (f.value = 'line')
                : h.code === 'KeyA' && _
                  ? (f.value = 'arrow')
                  : h.code === 'KeyS' && _
                    ? (f.value = 'stylus')
                    : h.code === 'KeyR' && _
                      ? (f.value = 'rectangle')
                      : h.code === 'KeyE' && _
                        ? (f.value = 'ellipse')
                        : h.code === 'KeyC' && _
                          ? E()
                          : h.code.startsWith('Digit') && _ && +h.code[5] <= s.length
                            ? (i.color = s[+h.code[5] - 1])
                            : (w = !1),
            w && (h.preventDefault(), h.stopPropagation())
        },
        !1,
      ),
      {
        brush: i,
        brushColors: s,
        canClear: p,
        canRedo: l,
        canUndo: a,
        clear: E,
        drauu: c,
        drauuOptions: d,
        drawingEnabled: n,
        drawingMode: f,
        drawingPinned: r,
        drawingState: ct,
        isDrawing: o,
        loadCanvas: C,
      }
    )
  }),
  We = ['innerHTML'],
  gs = vt({
    __name: 'DrawingPreview',
    props: { page: {} },
    setup(t) {
      const { drawingState: e } = Je()
      return (s, n) =>
        F(e)[s.page]
          ? (Z(),
            tt(
              'svg',
              { key: 0, class: 'w-full h-full absolute top-0 pointer-events-none', innerHTML: F(e)[s.page] },
              null,
              8,
              We,
            ))
          : Rt('v-if', !0)
    },
  }),
  K = zt({})
let ts = [],
  es = []
B(K, '$syncUp', !0)
B(K, '$syncDown', !0)
B(K, '$paused', !1)
B(K, '$onSet', t => ts.push(t))
B(K, '$onPatch', t => es.push(t))
ce()
B(K, '$patch', async () => !1)
const ss = de(K, K, !0)
class ns {
  constructor() {
    this._capturePromises = new Map()
  }
  getSnapshot(e) {
    const s = ss.state[e]
    if (!s) return
    const n = jt(e)
    if (n && (s == null ? void 0 : s.revision) === (n == null ? void 0 : n.meta.slide.revision)) return s.image
  }
  async captureSnapshot(e, s, n = 1e3) {}
  async _captureSnapshot(e, s, n) {}
}
const Tt = new ns(),
  rs = ['id'],
  is = ['id'],
  as = ['src'],
  os = vt({
    __name: 'SlideContainer',
    props: {
      width: { type: Number },
      meta: { default: () => ({}) },
      isMain: { type: Boolean, default: !1 },
      no: { type: Number, required: !1 },
      useSnapshot: { type: Boolean, default: !1 },
    },
    setup(t) {
      const e = t,
        { isPrintMode: s } = Ot(),
        n = L(null),
        r = ee(n),
        i = L(null),
        o = b(() => e.width ?? r.width.value),
        a = b(() => (e.width ? e.width / Et.value : r.height.value)),
        l = b(() => (Mt.value && !s.value ? +Mt.value : Math.min(o.value / $t.value, a.value / Lt.value))),
        p = b(() => ({
          height: `${Lt.value}px`,
          width: `${$t.value}px`,
          transform: `translate(-50%, -50%) scale(${l.value})`,
          '--slidev-slide-scale': l.value,
        })),
        v = b(() => (e.width ? { width: `${e.width}px`, height: `${e.width / Et.value}px` } : {}))
      e.isMain && se(b(() => `:root { --slidev-slide-scale: ${l.value}; }`)), A(fe, l), A(pe, i)
      const y = b(() => {
        if (!(!e.useSnapshot || e.no == null)) return Tt.getSnapshot(e.no)
      })
      return (
        ne(() => {
          n.value && e.useSnapshot && e.no != null && Tt.captureSnapshot(e.no, n.value)
        }),
        (x, f) =>
          y.value
            ? (Z(),
              tt(
                re,
                { key: 1 },
                [
                  Rt(' Image preview '),
                  wt('img', { src: y.value, class: 'w-full object-cover', style: W(v.value) }, null, 12, as),
                ],
                64,
              ))
            : (Z(),
              tt(
                'div',
                {
                  key: 0,
                  id: t.isMain ? 'slide-container' : void 0,
                  ref_key: 'container',
                  ref: n,
                  class: 'slidev-slide-container',
                  style: W(v.value),
                },
                [
                  wt(
                    'div',
                    {
                      id: t.isMain ? 'slide-content' : void 0,
                      ref_key: 'slideElement',
                      ref: i,
                      class: 'slidev-slide-content',
                      style: W(p.value),
                    },
                    [St(x.$slots, 'default', {}, void 0, !0)],
                    12,
                    is,
                  ),
                  St(x.$slots, 'controls', {}, void 0, !0),
                ],
                12,
                rs,
              ))
      )
    },
  }),
  ms = Bt(os, [['__scopeId', 'data-v-35b3bc24']]),
  vs = { render: () => [] },
  ys = { render: () => [] },
  ls = { render: () => [] },
  hs = { render: () => [] },
  us = ['data-slidev-no'],
  cs = vt({
    __name: 'SlideWrapper',
    props: {
      clicksContext: { type: Object, required: !0 },
      renderContext: { type: String, default: 'slide' },
      route: { type: Object, required: !0 },
    },
    setup(t) {
      const e = t,
        s = b(() => {
          var i, o
          return ((o = (i = e.route.meta) == null ? void 0 : i.slide) == null ? void 0 : o.frontmatter.zoom) ?? 1
        })
      A(ge, e.route),
        A(me, e.route.meta.slide.frontmatter),
        A(ve, L(e.route.no)),
        A(ye, L(e.renderContext)),
        A(xe, ie(e, 'clicksContext')),
        A(_e, s)
      const n = b(() =>
          s.value === 1
            ? void 0
            : {
                width: `${100 / s.value}%`,
                height: `${100 / s.value}%`,
                transformOrigin: 'top left',
                transform: `scale(${s.value})`,
              },
        ),
        r = b(() => ({ ...n.value, 'user-select': ft.selectable ? void 0 : 'none' }))
      return (i, o) => (
        Z(),
        tt(
          'div',
          {
            'data-slidev-no': e.route.no,
            class: le(
              F(we)(t.route, ['slide', 'presenter'].includes(e.renderContext) ? '' : 'disable-view-transition'),
            ),
            style: W(r.value),
          },
          [bt(F(hs)), (Z(), ae(oe(e.route.component))), bt(F(ls))],
          14,
          us,
        )
      )
    },
  }),
  xs = Bt(cs, [['__scopeId', 'data-v-d740c2fd']])
export { ys as G, xs as S, gs as _, ms as a, Se as b, Je as c, vs as d, ps as u }
