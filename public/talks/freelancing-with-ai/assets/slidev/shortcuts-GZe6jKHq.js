const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/slidev/DrawingLayer-BYb9_Lbt.js',
      'assets/modules/vue-BITYyB3i.js',
      'assets/slidev/SlideWrapper-C6iRWNTm.js',
      'assets/index-BivI_MQ5.js',
      'assets/modules/shiki-85yLJs1k.js',
      'assets/modules/shiki-BPvBenZD.css',
      'assets/index-D9NJHIcE.css',
      'assets/SlideWrapper-Djovh85d.css',
      'assets/slidev/context-B7EsKp3R.js',
    ]),
) => i.map(i => d[i])
import {
  t as K,
  ak as gn,
  al as _n,
  am as zt,
  E as Oe,
  z as A,
  O as xt,
  d as ve,
  a4 as Bt,
  an as Gt,
  a5 as mn,
  a3 as yn,
  B as c,
  o as d,
  b as _,
  F as z,
  ag as Fe,
  e as I,
  aa as De,
  g as M,
  h as Ae,
  ao as Wt,
  i as Z,
  c as S,
  ap as He,
  x as de,
  j as je,
  l as P,
  ab as Kt,
  f as Mt,
  ai as xn,
  aj as Ct,
  k as j,
  D as Qe,
  aq as bn,
  Q as kn,
  C as wn,
  ar as ze,
  q as me,
  s as ye,
  m as Sn,
  as as Mn,
  ae as Cn,
  at as $n,
  au as V,
  av as oe,
  S as En,
  aw as In,
} from '../modules/vue-BITYyB3i.js'
import {
  a as Se,
  F as Ye,
  l as ot,
  G as Je,
  f as bt,
  v as xe,
  H as Pn,
  D as Ee,
  _ as qe,
  I as we,
  J as Te,
  K as rt,
  L as dt,
  j as Be,
  y as $t,
  i as Rn,
  b as Et,
  t as vt,
  k as An,
  M as Nn,
  N as Ht,
  O as Ln,
  P as ee,
  c as Yt,
  C as Xt,
  p as Tn,
  Q as It,
  R as On,
  S as Dn,
  q as Pt,
  z as Rt,
  A as At,
  T as kt,
  w as Fn,
  U as Nt,
  V as ht,
  W as Vn,
  X as jn,
  Y as zn,
} from '../index-BivI_MQ5.js'
import { c as et, u as Bn, a as Gn, S as Ut, _ as Wn, G as Kn, d as Hn } from './SlideWrapper-C6iRWNTm.js'
import {
  o as Qt,
  p as Jt,
  I as Yn,
  q as Xn,
  r as Un,
  f as Zt,
  s as qt,
  _ as en,
  a as tn,
  i as nn,
  j as sn,
  t as Qn,
  d as Jn,
  e as Zn,
  n as qn,
  u as es,
  v as ts,
  w as ns,
  x as ss,
  y as as,
  z as os,
  c as rs,
} from '../modules/unplugin-icons-4dqQQYnv.js'
import { _ as ls } from '../ScrambleText-CbrnPwX3.js'
import { u as is } from './context-B7EsKp3R.js'
import { _ as U } from './IconButton.vue_vue_type_script_setup_true_lang-CDGaqduH.js'
import { t as cs } from '../modules/shiki-85yLJs1k.js'
function po(t) {
  const { next: e, nextSlide: n, prev: s, prevSlide: r } = Se(),
    { isDrawing: a } = et(),
    o = K(0),
    {
      direction: l,
      distanceX: i,
      distanceY: u,
    } = gn(t, {
      pointerTypes: ['touch'],
      onSwipeStart() {
        a.value || (o.value = _n())
      },
      onSwipeEnd() {
        if (!o.value || a.value) return
        const v = Math.abs(i.value),
          h = Math.abs(u.value)
        v / window.innerWidth > 0.3 || v > 75
          ? l.value === 'left'
            ? e()
            : s()
          : (h / window.innerHeight > 0.4 || h > 200) && (l.value === 'down' ? r() : n())
      },
    })
}
function go() {
  const { request: t, release: e } = zt()
  Oe(
    Ye,
    n => {
      n ? t('screen') : e()
    },
    { immediate: !0 },
  )
}
const us = []
let lt
const ds = () => {
    if (lt) return lt
    const {
        next: t,
        nextSlide: e,
        prev: n,
        prevSlide: s,
        hasNext: r,
        hasPrev: a,
        currentPage: o,
        total: l,
        isPresenter: i,
        enterPresenter: u,
        exitPresenter: v,
        isEmbedded: h,
        isPresenterAvailable: g,
      } = Se(),
      { drawingEnabled: m } = et(),
      { isFullscreen: y, toggle: b } = bt
    return (lt = us.reduce(
      (p, f) => f(p),
      A(() =>
        [
          { small: !0, icon: Qt, label: 'Previous Click', action: n, disabled: !a.value },
          { small: !0, icon: Jt, label: 'Next Click', action: t, disabled: !r.value },
          { small: !0, icon: Yn, label: 'Previous Slide', action: s, disabled: o.value <= 1 },
          { small: !0, icon: Xn, label: 'Next Slide', action: e, disabled: o.value >= l.value },
          'separator',
          { icon: Un, label: ot.value ? 'Hide editor' : 'Show editor', action: () => (ot.value = !ot.value) },
          {
            icon: Zt,
            label: m.value ? 'Hide drawing toolbar' : 'Show drawing toolbar',
            action: () => (m.value = !m.value),
          },
          { icon: qt, label: 'Show slide overview', action: Je },
          i.value && { icon: en, label: 'Exit Presenter Mode', action: v },
          g.value && { icon: tn, label: 'Enter Presenter Mode', action: u },
          !h.value && { icon: y.value ? nn : sn, label: y.value ? 'Close fullscreen' : 'Enter fullscreen', action: b },
        ].filter(Boolean),
      ),
    ))
  },
  Re = xt(null)
function vs(t, e) {
  Re.value = { x: t, y: e, items: ds() }
}
function Le() {
  Re.value = null
}
function _o(t) {
  if ((xe.contextMenu !== !0 && xe.contextMenu != null && xe.contextMenu !== Pn) || t.shiftKey || t.defaultPrevented)
    return
  const { isEmbedded: e } = Se()
  e.value || (vs(t.pageX, t.pageY), t.preventDefault(), t.stopPropagation())
}
const hs = ['title', 'onClick'],
  fs = ['onClick'],
  ps = { class: 'mx-auto' },
  gs = { key: 0 },
  _s = { class: 'w-full text-xs p2' },
  ms = { class: 'text-main text-opacity-50!' },
  mo = ve({
    __name: 'ContextMenu',
    setup(t) {
      const e = K()
      ;(Bt(e, Le),
        Gt(
          document,
          'mousedown',
          i => {
            i.buttons & 2 && Le()
          },
          { passive: !0, capture: !0 },
        ))
      const n = A(() => xe.contextMenu != null),
        s = mn()
      ;(Oe(s, i => {
        i || Le()
      }),
        Bn(1))
      const { width: r, height: a } = yn(e),
        o = A(() => {
          var u
          const i = (u = Re.value) == null ? void 0 : u.x
          return i ? (i + r.value > Ee.width.value ? Ee.width.value - r.value : i) : 0
        }),
        l = A(() => {
          var u
          const i = (u = Re.value) == null ? void 0 : u.y
          return i ? (i + a.value > Ee.height.value ? Ee.height.value - a.value : i) : 0
        })
      return (i, u) =>
        c(Re)
          ? (d(),
            _(
              'div',
              {
                key: 0,
                ref_key: 'container',
                ref: e,
                style: Ae(`left:${o.value}px;top:${l.value}px`),
                class:
                  'fixed z-100 w-60 flex flex-wrap justify-items-start p-1 animate-fade-in animate-duration-100 backdrop-blur bg-main bg-opacity-75! border border-main rounded-md shadow overflow-hidden select-none',
                onContextmenu: u[1] || (u[1] = Wt(() => {}, ['prevent'])),
                onClick: u[2] || (u[2] = (...v) => c(Le) && c(Le)(...v)),
              },
              [
                (d(!0),
                _(
                  z,
                  null,
                  Fe(
                    c(Re).items.value,
                    (v, h) => (
                      d(),
                      _(
                        z,
                        { key: h },
                        [
                          v === 'separator'
                            ? (d(), _('div', { key: h, class: 'w-full my1 border-t border-main' }))
                            : v.small
                              ? (d(),
                                _(
                                  'div',
                                  {
                                    key: 1,
                                    class: Z([
                                      'p-2 w-[40px] h-[40px] inline-block text-center cursor-pointer rounded',
                                      v.disabled ? 'op40' : 'hover:bg-active',
                                    ]),
                                    title: v.label,
                                    onClick: v.action,
                                  },
                                  [(d(), S(He(v.icon)))],
                                  10,
                                  hs,
                                ))
                              : (d(),
                                _(
                                  'div',
                                  {
                                    key: 2,
                                    class: Z([
                                      'w-full grid grid-cols-[35px_1fr] p-2 pl-0 cursor-pointer rounded',
                                      v.disabled ? 'op40' : 'hover:bg-active',
                                    ]),
                                    onClick: v.action,
                                  },
                                  [
                                    I('div', ps, [(d(), S(He(v.icon)))]),
                                    typeof v.label == 'string'
                                      ? (d(), _('div', gs, de(v.label), 1))
                                      : (d(), S(He(v.label), { key: 1 })),
                                  ],
                                  10,
                                  fs,
                                )),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
                n.value
                  ? M('v-if', !0)
                  : (d(),
                    _(
                      z,
                      { key: 0 },
                      [
                        u[6] || (u[6] = I('div', { class: 'w-full my1 border-t border-main' }, null, -1)),
                        I('div', _s, [
                          I('div', ms, [
                            u[3] || (u[3] = De(' Hold ')),
                            u[4] ||
                              (u[4] = I(
                                'kbd',
                                { class: 'border px1 py0.5 border-main rounded text-primary' },
                                'Shift',
                                -1,
                              )),
                            u[5] || (u[5] = De(' and right click to open the native context menu ')),
                            M('v-if', !0),
                          ]),
                        ]),
                      ],
                      64,
                    )),
              ],
              36,
            ))
          : M('v-if', !0)
    },
  }),
  ys = {},
  xs = { class: 'w-1px opacity-10 bg-current m-1 lg:m-2' }
function bs(t, e) {
  return (d(), _('div', xs))
}
const Ge = qe(ys, [['render', bs]]),
  ks = { key: 0 },
  ws = { key: 3 },
  Ss = { key: 4 },
  Ms = { key: 5 },
  Cs = { key: 6 },
  $s = { key: 7 },
  Es = { key: 8 },
  Is = { key: 9 },
  Ps = { key: 12 },
  Rs = { key: 13 },
  As = { key: 15 },
  Ns = { key: 16 },
  Ls = { key: 18 },
  Ts = { key: 19 },
  Os = { key: 21 },
  Ds = ve({
    __name: 'title-renderer',
    props: { no: {} },
    setup(t) {
      const e = t,
        { $page: n } = is(),
        s = A(() => +(e.no ?? n.value))
      return (r, a) => {
        const o = ls
        return (
          d(),
          _('div', null, [
            s.value === 1
              ? (d(), _('p', ks, 'undefined'))
              : s.value === 2
                ? (d(), S(o, { key: 1, text: 'Emprendimiento y Freelancing con IA: ¿Aliada o Liada?' }))
                : s.value === 3
                  ? (d(), S(o, { key: 2, text: 'Sobre mí' }))
                  : s.value === 4
                    ? (d(), _('p', ws, 'undefined'))
                    : s.value === 5
                      ? (d(), _('p', Ss, 'undefined'))
                      : s.value === 6
                        ? (d(), _('p', Ms, 'undefined'))
                        : s.value === 7
                          ? (d(), _('p', Cs, 'undefined'))
                          : s.value === 8
                            ? (d(), _('p', $s, 'Usando el sentido "común"'))
                            : s.value === 9
                              ? (d(), _('p', Es, 'undefined'))
                              : s.value === 10
                                ? (d(), _('p', Is, 'undefined'))
                                : s.value === 11
                                  ? (d(), S(o, { key: 10, text: 'ChatGPT' }))
                                  : s.value === 12
                                    ? (d(), S(o, { key: 11, text: 'ChatGPT Custom GPTs' }))
                                    : s.value === 13
                                      ? (d(), _('p', Ps, 'undefined'))
                                      : s.value === 14
                                        ? (d(), _('p', Rs, 'undefined'))
                                        : s.value === 15
                                          ? (d(), S(o, { key: 14, text: 'ChatGPT Projects' }))
                                          : s.value === 16
                                            ? (d(), _('p', As, 'undefined'))
                                            : s.value === 17
                                              ? (d(), _('p', Ns, 'undefined'))
                                              : s.value === 18
                                                ? (d(), S(o, { key: 17, text: 'Cursor' }))
                                                : s.value === 19
                                                  ? (d(), _('p', Ls, 'undefined'))
                                                  : s.value === 20
                                                    ? (d(), _('p', Ts, 'undefined'))
                                                    : s.value === 21
                                                      ? (d(), S(o, { key: 20, text: 'V0' }))
                                                      : s.value === 22
                                                        ? (d(), _('p', Os, 'undefined'))
                                                        : s.value === 23
                                                          ? (d(), S(o, { key: 22, text: 'Make' }))
                                                          : s.value === 24
                                                            ? (d(), S(o, { key: 23, text: 'La IA como Aliada' }))
                                                            : s.value === 25
                                                              ? (d(), S(o, { key: 24, text: 'La IA como Liada' }))
                                                              : s.value === 26
                                                                ? (d(), S(o, { key: 25, text: 'Conclusiones' }))
                                                                : s.value === 27
                                                                  ? (d(), S(o, { key: 26, text: '¡Gracias!' }))
                                                                  : s.value === 28
                                                                    ? (d(), S(o, { key: 27, text: 'Recursos' }))
                                                                    : M('v-if', !0),
          ])
        )
      }
    },
  })
function be(t) {
  return Array.isArray ? Array.isArray(t) : rn(t) === '[object Array]'
}
const Fs = 1 / 0
function Vs(t) {
  if (typeof t == 'string') return t
  let e = t + ''
  return e == '0' && 1 / t == -Fs ? '-0' : e
}
function js(t) {
  return t == null ? '' : Vs(t)
}
function ue(t) {
  return typeof t == 'string'
}
function an(t) {
  return typeof t == 'number'
}
function zs(t) {
  return t === !0 || t === !1 || (Bs(t) && rn(t) == '[object Boolean]')
}
function on(t) {
  return typeof t == 'object'
}
function Bs(t) {
  return on(t) && t !== null
}
function te(t) {
  return t != null
}
function it(t) {
  return !t.trim().length
}
function rn(t) {
  return t == null ? (t === void 0 ? '[object Undefined]' : '[object Null]') : Object.prototype.toString.call(t)
}
const Gs = "Incorrect 'index' type",
  Ws = t => `Invalid value for key ${t}`,
  Ks = t => `Pattern length exceeds max of ${t}.`,
  Hs = t => `Missing ${t} property in key`,
  Ys = t => `Property 'weight' in key '${t}' must be a positive integer`,
  Lt = Object.prototype.hasOwnProperty
class Xs {
  constructor(e) {
    ;((this._keys = []), (this._keyMap = {}))
    let n = 0
    ;(e.forEach(s => {
      let r = ln(s)
      ;(this._keys.push(r), (this._keyMap[r.id] = r), (n += r.weight))
    }),
      this._keys.forEach(s => {
        s.weight /= n
      }))
  }
  get(e) {
    return this._keyMap[e]
  }
  keys() {
    return this._keys
  }
  toJSON() {
    return JSON.stringify(this._keys)
  }
}
function ln(t) {
  let e = null,
    n = null,
    s = null,
    r = 1,
    a = null
  if (ue(t) || be(t)) ((s = t), (e = Tt(t)), (n = ft(t)))
  else {
    if (!Lt.call(t, 'name')) throw new Error(Hs('name'))
    const o = t.name
    if (((s = o), Lt.call(t, 'weight') && ((r = t.weight), r <= 0))) throw new Error(Ys(o))
    ;((e = Tt(o)), (n = ft(o)), (a = t.getFn))
  }
  return { path: e, id: n, weight: r, src: s, getFn: a }
}
function Tt(t) {
  return be(t) ? t : t.split('.')
}
function ft(t) {
  return be(t) ? t.join('.') : t
}
function Us(t, e) {
  let n = [],
    s = !1
  const r = (a, o, l) => {
    if (te(a))
      if (!o[l]) n.push(a)
      else {
        let i = o[l]
        const u = a[i]
        if (!te(u)) return
        if (l === o.length - 1 && (ue(u) || an(u) || zs(u))) n.push(js(u))
        else if (be(u)) {
          s = !0
          for (let v = 0, h = u.length; v < h; v += 1) r(u[v], o, l + 1)
        } else o.length && r(u, o, l + 1)
      }
  }
  return (r(t, ue(e) ? e.split('.') : e, 0), s ? n : n[0])
}
const Qs = { includeMatches: !1, findAllMatches: !1, minMatchCharLength: 1 },
  Js = {
    isCaseSensitive: !1,
    includeScore: !1,
    keys: [],
    shouldSort: !0,
    sortFn: (t, e) => (t.score === e.score ? (t.idx < e.idx ? -1 : 1) : t.score < e.score ? -1 : 1),
  },
  Zs = { location: 0, threshold: 0.6, distance: 100 },
  qs = { useExtendedSearch: !1, getFn: Us, ignoreLocation: !1, ignoreFieldNorm: !1, fieldNormWeight: 1 }
var k = { ...Js, ...Qs, ...Zs, ...qs }
const ea = /[^ ]+/g
function ta(t = 1, e = 3) {
  const n = new Map(),
    s = Math.pow(10, e)
  return {
    get(r) {
      const a = r.match(ea).length
      if (n.has(a)) return n.get(a)
      const o = 1 / Math.pow(a, 0.5 * t),
        l = parseFloat(Math.round(o * s) / s)
      return (n.set(a, l), l)
    },
    clear() {
      n.clear()
    },
  }
}
class wt {
  constructor({ getFn: e = k.getFn, fieldNormWeight: n = k.fieldNormWeight } = {}) {
    ;((this.norm = ta(n, 3)), (this.getFn = e), (this.isCreated = !1), this.setIndexRecords())
  }
  setSources(e = []) {
    this.docs = e
  }
  setIndexRecords(e = []) {
    this.records = e
  }
  setKeys(e = []) {
    ;((this.keys = e),
      (this._keysMap = {}),
      e.forEach((n, s) => {
        this._keysMap[n.id] = s
      }))
  }
  create() {
    this.isCreated ||
      !this.docs.length ||
      ((this.isCreated = !0),
      ue(this.docs[0])
        ? this.docs.forEach((e, n) => {
            this._addString(e, n)
          })
        : this.docs.forEach((e, n) => {
            this._addObject(e, n)
          }),
      this.norm.clear())
  }
  add(e) {
    const n = this.size()
    ue(e) ? this._addString(e, n) : this._addObject(e, n)
  }
  removeAt(e) {
    this.records.splice(e, 1)
    for (let n = e, s = this.size(); n < s; n += 1) this.records[n].i -= 1
  }
  getValueForItemAtKeyId(e, n) {
    return e[this._keysMap[n]]
  }
  size() {
    return this.records.length
  }
  _addString(e, n) {
    if (!te(e) || it(e)) return
    let s = { v: e, i: n, n: this.norm.get(e) }
    this.records.push(s)
  }
  _addObject(e, n) {
    let s = { i: n, $: {} }
    ;(this.keys.forEach((r, a) => {
      let o = r.getFn ? r.getFn(e) : this.getFn(e, r.path)
      if (te(o)) {
        if (be(o)) {
          let l = []
          const i = [{ nestedArrIndex: -1, value: o }]
          for (; i.length; ) {
            const { nestedArrIndex: u, value: v } = i.pop()
            if (te(v))
              if (ue(v) && !it(v)) {
                let h = { v, i: u, n: this.norm.get(v) }
                l.push(h)
              } else
                be(v) &&
                  v.forEach((h, g) => {
                    i.push({ nestedArrIndex: g, value: h })
                  })
          }
          s.$[a] = l
        } else if (ue(o) && !it(o)) {
          let l = { v: o, n: this.norm.get(o) }
          s.$[a] = l
        }
      }
    }),
      this.records.push(s))
  }
  toJSON() {
    return { keys: this.keys, records: this.records }
  }
}
function cn(t, e, { getFn: n = k.getFn, fieldNormWeight: s = k.fieldNormWeight } = {}) {
  const r = new wt({ getFn: n, fieldNormWeight: s })
  return (r.setKeys(t.map(ln)), r.setSources(e), r.create(), r)
}
function na(t, { getFn: e = k.getFn, fieldNormWeight: n = k.fieldNormWeight } = {}) {
  const { keys: s, records: r } = t,
    a = new wt({ getFn: e, fieldNormWeight: n })
  return (a.setKeys(s), a.setIndexRecords(r), a)
}
function We(
  t,
  {
    errors: e = 0,
    currentLocation: n = 0,
    expectedLocation: s = 0,
    distance: r = k.distance,
    ignoreLocation: a = k.ignoreLocation,
  } = {},
) {
  const o = e / t.length
  if (a) return o
  const l = Math.abs(s - n)
  return r ? o + l / r : l ? 1 : o
}
function sa(t = [], e = k.minMatchCharLength) {
  let n = [],
    s = -1,
    r = -1,
    a = 0
  for (let o = t.length; a < o; a += 1) {
    let l = t[a]
    l && s === -1 ? (s = a) : !l && s !== -1 && ((r = a - 1), r - s + 1 >= e && n.push([s, r]), (s = -1))
  }
  return (t[a - 1] && a - s >= e && n.push([s, a - 1]), n)
}
const $e = 32
function aa(
  t,
  e,
  n,
  {
    location: s = k.location,
    distance: r = k.distance,
    threshold: a = k.threshold,
    findAllMatches: o = k.findAllMatches,
    minMatchCharLength: l = k.minMatchCharLength,
    includeMatches: i = k.includeMatches,
    ignoreLocation: u = k.ignoreLocation,
  } = {},
) {
  if (e.length > $e) throw new Error(Ks($e))
  const v = e.length,
    h = t.length,
    g = Math.max(0, Math.min(s, h))
  let m = a,
    y = g
  const b = l > 1 || i,
    p = b ? Array(h) : []
  let f
  for (; (f = t.indexOf(e, y)) > -1; ) {
    let $ = We(e, { currentLocation: f, expectedLocation: g, distance: r, ignoreLocation: u })
    if (((m = Math.min($, m)), (y = f + v), b)) {
      let W = 0
      for (; W < v; ) ((p[f + W] = 1), (W += 1))
    }
  }
  y = -1
  let N = [],
    D = 1,
    Q = v + h
  const w = 1 << (v - 1)
  for (let $ = 0; $ < v; $ += 1) {
    let W = 0,
      L = Q
    for (; W < L; )
      (We(e, { errors: $, currentLocation: g + L, expectedLocation: g, distance: r, ignoreLocation: u }) <= m
        ? (W = L)
        : (Q = L),
        (L = Math.floor((Q - W) / 2 + W)))
    Q = L
    let F = Math.max(1, g - L + 1),
      re = o ? h : Math.min(g + L, h) + v,
      le = Array(re + 2)
    le[re + 1] = (1 << $) - 1
    for (let B = re; B >= F; B -= 1) {
      let se = B - 1,
        Ie = n[t.charAt(se)]
      if (
        (b && (p[se] = +!!Ie),
        (le[B] = ((le[B + 1] << 1) | 1) & Ie),
        $ && (le[B] |= ((N[B + 1] | N[B]) << 1) | 1 | N[B + 1]),
        le[B] & w &&
          ((D = We(e, { errors: $, currentLocation: se, expectedLocation: g, distance: r, ignoreLocation: u })),
          D <= m))
      ) {
        if (((m = D), (y = se), y <= g)) break
        F = Math.max(1, 2 * g - y)
      }
    }
    if (We(e, { errors: $ + 1, currentLocation: g, expectedLocation: g, distance: r, ignoreLocation: u }) > m) break
    N = le
  }
  const T = { isMatch: y >= 0, score: Math.max(0.001, D) }
  if (b) {
    const $ = sa(p, l)
    $.length ? i && (T.indices = $) : (T.isMatch = !1)
  }
  return T
}
function oa(t) {
  let e = {}
  for (let n = 0, s = t.length; n < s; n += 1) {
    const r = t.charAt(n)
    e[r] = (e[r] || 0) | (1 << (s - n - 1))
  }
  return e
}
class un {
  constructor(
    e,
    {
      location: n = k.location,
      threshold: s = k.threshold,
      distance: r = k.distance,
      includeMatches: a = k.includeMatches,
      findAllMatches: o = k.findAllMatches,
      minMatchCharLength: l = k.minMatchCharLength,
      isCaseSensitive: i = k.isCaseSensitive,
      ignoreLocation: u = k.ignoreLocation,
    } = {},
  ) {
    if (
      ((this.options = {
        location: n,
        threshold: s,
        distance: r,
        includeMatches: a,
        findAllMatches: o,
        minMatchCharLength: l,
        isCaseSensitive: i,
        ignoreLocation: u,
      }),
      (this.pattern = i ? e : e.toLowerCase()),
      (this.chunks = []),
      !this.pattern.length)
    )
      return
    const v = (g, m) => {
        this.chunks.push({ pattern: g, alphabet: oa(g), startIndex: m })
      },
      h = this.pattern.length
    if (h > $e) {
      let g = 0
      const m = h % $e,
        y = h - m
      for (; g < y; ) (v(this.pattern.substr(g, $e), g), (g += $e))
      if (m) {
        const b = h - $e
        v(this.pattern.substr(b), b)
      }
    } else v(this.pattern, 0)
  }
  searchIn(e) {
    const { isCaseSensitive: n, includeMatches: s } = this.options
    if ((n || (e = e.toLowerCase()), this.pattern === e)) {
      let y = { isMatch: !0, score: 0 }
      return (s && (y.indices = [[0, e.length - 1]]), y)
    }
    const {
      location: r,
      distance: a,
      threshold: o,
      findAllMatches: l,
      minMatchCharLength: i,
      ignoreLocation: u,
    } = this.options
    let v = [],
      h = 0,
      g = !1
    this.chunks.forEach(({ pattern: y, alphabet: b, startIndex: p }) => {
      const {
        isMatch: f,
        score: N,
        indices: D,
      } = aa(e, y, b, {
        location: r + p,
        distance: a,
        threshold: o,
        findAllMatches: l,
        minMatchCharLength: i,
        includeMatches: s,
        ignoreLocation: u,
      })
      ;(f && (g = !0), (h += N), f && D && (v = [...v, ...D]))
    })
    let m = { isMatch: g, score: g ? h / this.chunks.length : 1 }
    return (g && s && (m.indices = v), m)
  }
}
class Me {
  constructor(e) {
    this.pattern = e
  }
  static isMultiMatch(e) {
    return Ot(e, this.multiRegex)
  }
  static isSingleMatch(e) {
    return Ot(e, this.singleRegex)
  }
  search() {}
}
function Ot(t, e) {
  const n = t.match(e)
  return n ? n[1] : null
}
class ra extends Me {
  constructor(e) {
    super(e)
  }
  static get type() {
    return 'exact'
  }
  static get multiRegex() {
    return /^="(.*)"$/
  }
  static get singleRegex() {
    return /^=(.*)$/
  }
  search(e) {
    const n = e === this.pattern
    return { isMatch: n, score: n ? 0 : 1, indices: [0, this.pattern.length - 1] }
  }
}
class la extends Me {
  constructor(e) {
    super(e)
  }
  static get type() {
    return 'inverse-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"$/
  }
  static get singleRegex() {
    return /^!(.*)$/
  }
  search(e) {
    const s = e.indexOf(this.pattern) === -1
    return { isMatch: s, score: s ? 0 : 1, indices: [0, e.length - 1] }
  }
}
class ia extends Me {
  constructor(e) {
    super(e)
  }
  static get type() {
    return 'prefix-exact'
  }
  static get multiRegex() {
    return /^\^"(.*)"$/
  }
  static get singleRegex() {
    return /^\^(.*)$/
  }
  search(e) {
    const n = e.startsWith(this.pattern)
    return { isMatch: n, score: n ? 0 : 1, indices: [0, this.pattern.length - 1] }
  }
}
class ca extends Me {
  constructor(e) {
    super(e)
  }
  static get type() {
    return 'inverse-prefix-exact'
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/
  }
  static get singleRegex() {
    return /^!\^(.*)$/
  }
  search(e) {
    const n = !e.startsWith(this.pattern)
    return { isMatch: n, score: n ? 0 : 1, indices: [0, e.length - 1] }
  }
}
class ua extends Me {
  constructor(e) {
    super(e)
  }
  static get type() {
    return 'suffix-exact'
  }
  static get multiRegex() {
    return /^"(.*)"\$$/
  }
  static get singleRegex() {
    return /^(.*)\$$/
  }
  search(e) {
    const n = e.endsWith(this.pattern)
    return { isMatch: n, score: n ? 0 : 1, indices: [e.length - this.pattern.length, e.length - 1] }
  }
}
class da extends Me {
  constructor(e) {
    super(e)
  }
  static get type() {
    return 'inverse-suffix-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/
  }
  static get singleRegex() {
    return /^!(.*)\$$/
  }
  search(e) {
    const n = !e.endsWith(this.pattern)
    return { isMatch: n, score: n ? 0 : 1, indices: [0, e.length - 1] }
  }
}
class dn extends Me {
  constructor(
    e,
    {
      location: n = k.location,
      threshold: s = k.threshold,
      distance: r = k.distance,
      includeMatches: a = k.includeMatches,
      findAllMatches: o = k.findAllMatches,
      minMatchCharLength: l = k.minMatchCharLength,
      isCaseSensitive: i = k.isCaseSensitive,
      ignoreLocation: u = k.ignoreLocation,
    } = {},
  ) {
    ;(super(e),
      (this._bitapSearch = new un(e, {
        location: n,
        threshold: s,
        distance: r,
        includeMatches: a,
        findAllMatches: o,
        minMatchCharLength: l,
        isCaseSensitive: i,
        ignoreLocation: u,
      })))
  }
  static get type() {
    return 'fuzzy'
  }
  static get multiRegex() {
    return /^"(.*)"$/
  }
  static get singleRegex() {
    return /^(.*)$/
  }
  search(e) {
    return this._bitapSearch.searchIn(e)
  }
}
class vn extends Me {
  constructor(e) {
    super(e)
  }
  static get type() {
    return 'include'
  }
  static get multiRegex() {
    return /^'"(.*)"$/
  }
  static get singleRegex() {
    return /^'(.*)$/
  }
  search(e) {
    let n = 0,
      s
    const r = [],
      a = this.pattern.length
    for (; (s = e.indexOf(this.pattern, n)) > -1; ) ((n = s + a), r.push([s, n - 1]))
    const o = !!r.length
    return { isMatch: o, score: o ? 0 : 1, indices: r }
  }
}
const pt = [ra, vn, ia, ca, da, ua, la, dn],
  Dt = pt.length,
  va = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,
  ha = '|'
function fa(t, e = {}) {
  return t.split(ha).map(n => {
    let s = n
        .trim()
        .split(va)
        .filter(a => a && !!a.trim()),
      r = []
    for (let a = 0, o = s.length; a < o; a += 1) {
      const l = s[a]
      let i = !1,
        u = -1
      for (; !i && ++u < Dt; ) {
        const v = pt[u]
        let h = v.isMultiMatch(l)
        h && (r.push(new v(h, e)), (i = !0))
      }
      if (!i)
        for (u = -1; ++u < Dt; ) {
          const v = pt[u]
          let h = v.isSingleMatch(l)
          if (h) {
            r.push(new v(h, e))
            break
          }
        }
    }
    return r
  })
}
const pa = new Set([dn.type, vn.type])
class ga {
  constructor(
    e,
    {
      isCaseSensitive: n = k.isCaseSensitive,
      includeMatches: s = k.includeMatches,
      minMatchCharLength: r = k.minMatchCharLength,
      ignoreLocation: a = k.ignoreLocation,
      findAllMatches: o = k.findAllMatches,
      location: l = k.location,
      threshold: i = k.threshold,
      distance: u = k.distance,
    } = {},
  ) {
    ;((this.query = null),
      (this.options = {
        isCaseSensitive: n,
        includeMatches: s,
        minMatchCharLength: r,
        findAllMatches: o,
        ignoreLocation: a,
        location: l,
        threshold: i,
        distance: u,
      }),
      (this.pattern = n ? e : e.toLowerCase()),
      (this.query = fa(this.pattern, this.options)))
  }
  static condition(e, n) {
    return n.useExtendedSearch
  }
  searchIn(e) {
    const n = this.query
    if (!n) return { isMatch: !1, score: 1 }
    const { includeMatches: s, isCaseSensitive: r } = this.options
    e = r ? e : e.toLowerCase()
    let a = 0,
      o = [],
      l = 0
    for (let i = 0, u = n.length; i < u; i += 1) {
      const v = n[i]
      ;((o.length = 0), (a = 0))
      for (let h = 0, g = v.length; h < g; h += 1) {
        const m = v[h],
          { isMatch: y, indices: b, score: p } = m.search(e)
        if (y) {
          if (((a += 1), (l += p), s)) {
            const f = m.constructor.type
            pa.has(f) ? (o = [...o, ...b]) : o.push(b)
          }
        } else {
          ;((l = 0), (a = 0), (o.length = 0))
          break
        }
      }
      if (a) {
        let h = { isMatch: !0, score: l / a }
        return (s && (h.indices = o), h)
      }
    }
    return { isMatch: !1, score: 1 }
  }
}
const gt = []
function _a(...t) {
  gt.push(...t)
}
function _t(t, e) {
  for (let n = 0, s = gt.length; n < s; n += 1) {
    let r = gt[n]
    if (r.condition(t, e)) return new r(t, e)
  }
  return new un(t, e)
}
const Ze = { AND: '$and', OR: '$or' },
  mt = { PATH: '$path', PATTERN: '$val' },
  yt = t => !!(t[Ze.AND] || t[Ze.OR]),
  ma = t => !!t[mt.PATH],
  ya = t => !be(t) && on(t) && !yt(t),
  Ft = t => ({ [Ze.AND]: Object.keys(t).map(e => ({ [e]: t[e] })) })
function hn(t, e, { auto: n = !0 } = {}) {
  const s = r => {
    let a = Object.keys(r)
    const o = ma(r)
    if (!o && a.length > 1 && !yt(r)) return s(Ft(r))
    if (ya(r)) {
      const i = o ? r[mt.PATH] : a[0],
        u = o ? r[mt.PATTERN] : r[i]
      if (!ue(u)) throw new Error(Ws(i))
      const v = { keyId: ft(i), pattern: u }
      return (n && (v.searcher = _t(u, e)), v)
    }
    let l = { children: [], operator: a[0] }
    return (
      a.forEach(i => {
        const u = r[i]
        be(u) &&
          u.forEach(v => {
            l.children.push(s(v))
          })
      }),
      l
    )
  }
  return (yt(t) || (t = Ft(t)), s(t))
}
function xa(t, { ignoreFieldNorm: e = k.ignoreFieldNorm }) {
  t.forEach(n => {
    let s = 1
    ;(n.matches.forEach(({ key: r, norm: a, score: o }) => {
      const l = r ? r.weight : null
      s *= Math.pow(o === 0 && l ? Number.EPSILON : o, (l || 1) * (e ? 1 : a))
    }),
      (n.score = s))
  })
}
function ba(t, e) {
  const n = t.matches
  ;((e.matches = []),
    te(n) &&
      n.forEach(s => {
        if (!te(s.indices) || !s.indices.length) return
        const { indices: r, value: a } = s
        let o = { indices: r, value: a }
        ;(s.key && (o.key = s.key.src), s.idx > -1 && (o.refIndex = s.idx), e.matches.push(o))
      }))
}
function ka(t, e) {
  e.score = t.score
}
function wa(t, e, { includeMatches: n = k.includeMatches, includeScore: s = k.includeScore } = {}) {
  const r = []
  return (
    n && r.push(ba),
    s && r.push(ka),
    t.map(a => {
      const { idx: o } = a,
        l = { item: e[o], refIndex: o }
      return (
        r.length &&
          r.forEach(i => {
            i(a, l)
          }),
        l
      )
    })
  )
}
class Ne {
  constructor(e, n = {}, s) {
    ;((this.options = { ...k, ...n }),
      this.options.useExtendedSearch,
      (this._keyStore = new Xs(this.options.keys)),
      this.setCollection(e, s))
  }
  setCollection(e, n) {
    if (((this._docs = e), n && !(n instanceof wt))) throw new Error(Gs)
    this._myIndex =
      n ||
      cn(this.options.keys, this._docs, { getFn: this.options.getFn, fieldNormWeight: this.options.fieldNormWeight })
  }
  add(e) {
    te(e) && (this._docs.push(e), this._myIndex.add(e))
  }
  remove(e = () => !1) {
    const n = []
    for (let s = 0, r = this._docs.length; s < r; s += 1) {
      const a = this._docs[s]
      e(a, s) && (this.removeAt(s), (s -= 1), (r -= 1), n.push(a))
    }
    return n
  }
  removeAt(e) {
    ;(this._docs.splice(e, 1), this._myIndex.removeAt(e))
  }
  getIndex() {
    return this._myIndex
  }
  search(e, { limit: n = -1 } = {}) {
    const { includeMatches: s, includeScore: r, shouldSort: a, sortFn: o, ignoreFieldNorm: l } = this.options
    let i = ue(e) ? (ue(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e)) : this._searchLogical(e)
    return (
      xa(i, { ignoreFieldNorm: l }),
      a && i.sort(o),
      an(n) && n > -1 && (i = i.slice(0, n)),
      wa(i, this._docs, { includeMatches: s, includeScore: r })
    )
  }
  _searchStringList(e) {
    const n = _t(e, this.options),
      { records: s } = this._myIndex,
      r = []
    return (
      s.forEach(({ v: a, i: o, n: l }) => {
        if (!te(a)) return
        const { isMatch: i, score: u, indices: v } = n.searchIn(a)
        i && r.push({ item: a, idx: o, matches: [{ score: u, value: a, norm: l, indices: v }] })
      }),
      r
    )
  }
  _searchLogical(e) {
    const n = hn(e, this.options),
      s = (l, i, u) => {
        if (!l.children) {
          const { keyId: h, searcher: g } = l,
            m = this._findMatches({
              key: this._keyStore.get(h),
              value: this._myIndex.getValueForItemAtKeyId(i, h),
              searcher: g,
            })
          return m && m.length ? [{ idx: u, item: i, matches: m }] : []
        }
        const v = []
        for (let h = 0, g = l.children.length; h < g; h += 1) {
          const m = l.children[h],
            y = s(m, i, u)
          if (y.length) v.push(...y)
          else if (l.operator === Ze.AND) return []
        }
        return v
      },
      r = this._myIndex.records,
      a = {},
      o = []
    return (
      r.forEach(({ $: l, i }) => {
        if (te(l)) {
          let u = s(n, l, i)
          u.length &&
            (a[i] || ((a[i] = { idx: i, item: l, matches: [] }), o.push(a[i])),
            u.forEach(({ matches: v }) => {
              a[i].matches.push(...v)
            }))
        }
      }),
      o
    )
  }
  _searchObjectList(e) {
    const n = _t(e, this.options),
      { keys: s, records: r } = this._myIndex,
      a = []
    return (
      r.forEach(({ $: o, i: l }) => {
        if (!te(o)) return
        let i = []
        ;(s.forEach((u, v) => {
          i.push(...this._findMatches({ key: u, value: o[v], searcher: n }))
        }),
          i.length && a.push({ idx: l, item: o, matches: i }))
      }),
      a
    )
  }
  _findMatches({ key: e, value: n, searcher: s }) {
    if (!te(n)) return []
    let r = []
    if (be(n))
      n.forEach(({ v: a, i: o, n: l }) => {
        if (!te(a)) return
        const { isMatch: i, score: u, indices: v } = s.searchIn(a)
        i && r.push({ score: u, key: e, value: a, idx: o, norm: l, indices: v })
      })
    else {
      const { v: a, n: o } = n,
        { isMatch: l, score: i, indices: u } = s.searchIn(a)
      l && r.push({ score: i, key: e, value: a, norm: o, indices: u })
    }
    return r
  }
}
Ne.version = '7.0.0'
Ne.createIndex = cn
Ne.parseIndex = na
Ne.config = k
Ne.parseQuery = hn
_a(ga)
const Sa = { class: 'bg-main transform', shadow: '~', p: 'x-4 y-2', border: '~ transparent rounded dark:main' },
  Ma = ['value', 'disabled'],
  Ca = { table: '', 'w-full': '', 'border-collapse': '' },
  $a = ['border', 'onClick'],
  Ea = {
    'text-right': '',
    op50: '',
    'text-sm': '',
    'table-cell': '',
    'py-2': '',
    'pl-4': '',
    'pr-3': '',
    'vertical-middle': '',
  },
  Ia = ve({
    __name: 'Goto',
    setup(t) {
      const e = K(),
        n = K(),
        s = K(),
        r = K(),
        a = K(''),
        o = K(0),
        { go: l, slides: i } = Se()
      function u(w) {
        return w != null
      }
      const v = A(
          () =>
            new Ne(
              i.value
                .map(w => {
                  var T
                  return (T = w.meta) == null ? void 0 : T.slide
                })
                .filter(u),
              { keys: ['no', 'title'], threshold: 0.3, shouldSort: !0, minMatchCharLength: 1 },
            ),
        ),
        h = A(() => (a.value.startsWith('/') ? a.value.substring(1) : a.value)),
        g = A(() => v.value.search(h.value).map(w => w.item)),
        m = A(() => !!g.value.length)
      function y() {
        if (m.value) {
          const w = g.value.at(o.value || 0)
          w && l(w.no)
        }
        b()
      }
      function b() {
        ;((a.value = ''), (we.value = !1))
      }
      function p(w) {
        ;(w.preventDefault(), o.value++, o.value >= g.value.length && (o.value = 0), N())
      }
      function f(w) {
        ;(w.preventDefault(), o.value--, o.value <= -2 && (o.value = g.value.length - 1), N())
      }
      function N() {
        var T
        const w = (T = r.value) == null ? void 0 : T[o.value]
        w &&
          s.value &&
          (w.offsetTop + w.offsetHeight > s.value.offsetHeight + s.value.scrollTop
            ? s.value.scrollTo({ behavior: 'smooth', top: w.offsetTop + w.offsetHeight - s.value.offsetHeight + 1 })
            : w.offsetTop < s.value.scrollTop && s.value.scrollTo({ behavior: 'smooth', top: w.offsetTop }))
      }
      function D(w) {
        ;((o.value = 0), (a.value = w.target.value))
      }
      function Q(w) {
        ;(l(w), b())
      }
      return (
        Oe(we, async w => {
          var T
          w
            ? ((a.value = ''),
              (o.value = 0),
              setTimeout(() => {
                var $
                return ($ = n.value) == null ? void 0 : $.focus()
              }, 0))
            : (T = n.value) == null || T.blur()
        }),
        Oe(Te, () => {
          var w
          ;((w = e.value) != null && w.contains(Te.value)) || b()
        }),
        (w, T) => (
          d(),
          _(
            'div',
            {
              id: 'slidev-goto-dialog',
              ref_key: 'container',
              ref: e,
              class: Z(['fixed right-5 transition-all', c(we) ? 'top-5' : '-top-20']),
              'w-90': '',
              'max-w-90': '',
              'min-w-90': '',
            },
            [
              I('div', Sa, [
                I(
                  'input',
                  {
                    id: 'slidev-goto-input',
                    ref_key: 'input',
                    ref: n,
                    value: a.value,
                    type: 'text',
                    disabled: !c(we),
                    class: Z(['outline-none bg-transparent', { 'text-red-400': !m.value && a.value }]),
                    placeholder: 'Goto...',
                    onKeydown: [je(y, ['enter']), je(b, ['escape']), je(p, ['down']), je(f, ['up'])],
                    onInput: D,
                  },
                  null,
                  42,
                  Ma,
                ),
              ]),
              g.value.length > 0
                ? (d(),
                  _(
                    'div',
                    {
                      key: 0,
                      ref_key: 'list',
                      ref: s,
                      class: 'autocomplete-list',
                      shadow: '~',
                      border: '~ transparent rounded dark:main',
                    },
                    [
                      I('ul', Ca, [
                        (d(!0),
                        _(
                          z,
                          null,
                          Fe(
                            g.value,
                            ($, W) => (
                              d(),
                              _(
                                'li',
                                {
                                  ref_for: !0,
                                  ref_key: 'items',
                                  ref: r,
                                  key: $.id,
                                  role: 'button',
                                  tabindex: '0',
                                  'cursor-pointer': '',
                                  hover: 'op100',
                                  'table-row': '',
                                  'items-center': '',
                                  border: W === 0 ? void 0 : 't main',
                                  class: Z(o.value === W ? 'bg-active op100' : 'op80'),
                                  onClick: Wt(L => Q($.no), ['stop', 'prevent']),
                                },
                                [
                                  I('div', Ea, de($.no), 1),
                                  P(
                                    c(Ds),
                                    { 'table-cell': '', 'py-2': '', 'pr-4': '', 'w-full': '', no: $.no },
                                    null,
                                    8,
                                    ['no'],
                                  ),
                                ],
                                10,
                                $a,
                              )
                            ),
                          ),
                          128,
                        )),
                      ]),
                    ],
                    512,
                  ))
                : M('v-if', !0),
            ],
            2,
          )
        )
      )
    },
  }),
  yo = qe(Ia, [['__scopeId', 'data-v-cba06e55']]),
  Pa = { render: () => [] },
  Ra = { key: 0, class: 'rounded-md bg-main text-main shadow absolute bottom-10 left-0 z-20', 'dark:border': '~ main' },
  Aa = ve({
    __name: 'MenuButton',
    props: { modelValue: { default: !1 }, disabled: { default: !1 } },
    setup(t, { emit: e }) {
      const r = Kt(t, 'modelValue', e, { passive: !0 }),
        a = K()
      return (
        Bt(a, () => {
          r.value = !1
        }),
        (o, l) => (
          d(),
          _(
            'div',
            { ref_key: 'el', ref: a, class: 'flex relative' },
            [
              I(
                'button',
                { class: Z({ disabled: t.disabled }), onClick: l[0] || (l[0] = i => (r.value = !c(r))) },
                [Mt(o.$slots, 'button', { class: Z({ disabled: t.disabled }) })],
                2,
              ),
              (d(), S(xn, null, [c(r) ? (d(), _('div', Ra, [Mt(o.$slots, 'menu')])) : M('v-if', !0)], 1024)),
            ],
            512,
          )
        )
      )
    },
  }),
  Na = { class: 'select-list' },
  La = { class: 'title' },
  Ta = { class: 'items' },
  Oa = ['onClick'],
  Da = ve({
    __name: 'SelectList',
    props: { modelValue: { type: [Object, String, Number, Boolean] }, title: { type: String }, items: { type: Array } },
    setup(t, { emit: e }) {
      const r = Kt(t, 'modelValue', e, { passive: !0 })
      return (a, o) => {
        const l = Qn
        return (
          d(),
          _('div', Na, [
            I('div', La, de(t.title), 1),
            I('div', Ta, [
              (d(!0),
              _(
                z,
                null,
                Fe(
                  t.items,
                  i => (
                    d(),
                    _(
                      'div',
                      {
                        key: i.value,
                        class: Z(['item', { active: c(r) === i.value }]),
                        onClick: () => {
                          var u
                          ;((r.value = i.value), (u = i.onClick) == null || u.call(i))
                        },
                      },
                      [
                        P(l, { class: Z(['text-green-500', { 'opacity-0': c(r) !== i.value }]) }, null, 8, ['class']),
                        De(' ' + de(i.display || i.value), 1),
                      ],
                      10,
                      Oa,
                    )
                  ),
                ),
                128,
              )),
            ]),
          ])
        )
      }
    },
  }),
  Vt = qe(Da, [['__scopeId', 'data-v-553818ec']]),
  Fa = { class: 'text-sm select-none' },
  Va = ve({
    __name: 'Settings',
    setup(t) {
      const e = [
          { display: 'Fit', value: 0 },
          { display: '1:1', value: 1 },
        ],
        { isSupported: n } = zt(),
        s = [
          { display: 'Enabled', value: !0 },
          { display: 'Disabled', value: !1 },
        ]
      return (r, a) => (
        d(),
        _('div', Fa, [
          P(
            Vt,
            {
              modelValue: c(rt),
              'onUpdate:modelValue': a[0] || (a[0] = o => (Ct(rt) ? (rt.value = o) : null)),
              title: 'Scale',
              items: e,
            },
            null,
            8,
            ['modelValue'],
          ),
          c(n)
            ? (d(),
              S(
                Vt,
                {
                  key: 0,
                  modelValue: c(Ye),
                  'onUpdate:modelValue': a[1] || (a[1] = o => (Ct(Ye) ? (Ye.value = o) : null)),
                  title: 'Wake lock',
                  items: s,
                },
                null,
                8,
                ['modelValue'],
              ))
            : M('v-if', !0),
        ])
      )
    },
  }),
  ja = { class: 'h-40px flex', p: 'l-1 t-0.5 r-2', text: 'sm leading-2' },
  za = { class: 'my-auto' },
  Ba = { class: 'opacity-50' },
  xo = ve({
    __name: 'NavControls',
    props: { persist: { default: !1 } },
    setup(t) {
      const e = t,
        {
          currentSlideNo: n,
          hasNext: s,
          hasPrev: r,
          isEmbedded: a,
          isPresenter: o,
          isPresenterAvailable: l,
          next: i,
          prev: u,
          total: v,
          enterPresenter: h,
          exitPresenter: g,
        } = Se(),
        { brush: m, drawingEnabled: y } = et(),
        b = dt.smaller('md'),
        { isFullscreen: p, toggle: f } = bt,
        N = K()
      function D() {
        N.value && Te.value && N.value.contains(Te.value) && Te.value.blur()
      }
      const Q = A(() =>
          e.persist
            ? 'text-$slidev-controls-foreground bg-transparent'
            : 'rounded-md bg-main shadow dark:border dark:border-main',
        ),
        w = xt()
      return (T, $) => {
        const W = nn,
          L = sn,
          F = Qt,
          re = Jt,
          le = qt,
          Ce = Jn,
          B = Zn,
          se = qn,
          Ie = es,
          Pe = Zt,
          tt = en,
          nt = tn,
          st = ts,
          at = ns,
          x = ss,
          O = as
        return (
          d(),
          _(
            'nav',
            { ref_key: 'root', ref: N, class: 'flex flex-col' },
            [
              I(
                'div',
                { class: Z(['flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2', Q.value]), onMouseleave: D },
                [
                  c(a)
                    ? M('v-if', !0)
                    : (d(),
                      S(
                        U,
                        { key: 0, title: c(p) ? 'Close fullscreen' : 'Enter fullscreen', onClick: c(f) },
                        { default: j(() => [c(p) ? (d(), S(W, { key: 0 })) : (d(), S(L, { key: 1 }))]), _: 1 },
                        8,
                        ['title', 'onClick'],
                      )),
                  P(
                    U,
                    { class: Z({ disabled: !c(r) }), title: 'Go to previous slide', onClick: c(u) },
                    { default: j(() => [P(F)]), _: 1 },
                    8,
                    ['class', 'onClick'],
                  ),
                  P(
                    U,
                    { class: Z({ disabled: !c(s) }), title: 'Go to next slide', onClick: c(i) },
                    { default: j(() => [P(re)]), _: 1 },
                    8,
                    ['class', 'onClick'],
                  ),
                  c(a)
                    ? M('v-if', !0)
                    : (d(),
                      S(
                        U,
                        { key: 1, title: 'Show slide overview', onClick: $[0] || ($[0] = R => c(Je)()) },
                        { default: j(() => [P(le)]), _: 1 },
                      )),
                  c(Rn)
                    ? M('v-if', !0)
                    : (d(),
                      S(
                        U,
                        {
                          key: 2,
                          title: c(Et) ? 'Switch to light mode theme' : 'Switch to dark mode theme',
                          onClick: $[1] || ($[1] = R => c(vt)()),
                        },
                        { default: j(() => [c(Et) ? (d(), S(Ce, { key: 0 })) : (d(), S(B, { key: 1 }))]), _: 1 },
                        8,
                        ['title'],
                      )),
                  P(Ge),
                  c(a)
                    ? M('v-if', !0)
                    : (d(),
                      _(
                        z,
                        { key: 3 },
                        [
                          !c(o) && !c(b) && w.value ? (d(), _(z, { key: 0 }, [P(c(w)), P(Ge)], 64)) : M('v-if', !0),
                          c(o)
                            ? (d(),
                              S(
                                U,
                                {
                                  key: 1,
                                  title: c(Be) ? 'Hide presenter cursor' : 'Show presenter cursor',
                                  onClick: $[2] || ($[2] = R => (Be.value = !c(Be))),
                                },
                                {
                                  default: j(() => [c(Be) ? (d(), S(se, { key: 0 })) : (d(), S(Ie, { key: 1 }))]),
                                  _: 1,
                                },
                                8,
                                ['title'],
                              ))
                            : M('v-if', !0),
                        ],
                        64,
                      )),
                  (!c(xe).drawings.presenterOnly || c(o)) && !c(a)
                    ? (d(),
                      _(
                        z,
                        { key: 4 },
                        [
                          P(
                            U,
                            {
                              class: 'relative',
                              title: c(y) ? 'Hide drawing toolbar' : 'Show drawing toolbar',
                              onClick: $[3] || ($[3] = R => (y.value = !c(y))),
                            },
                            {
                              default: j(() => [
                                P(Pe),
                                c(y)
                                  ? (d(),
                                    _(
                                      'div',
                                      {
                                        key: 0,
                                        class: 'absolute left-1 right-1 bottom-0 h-0.7 rounded-full',
                                        style: Ae({ background: c(m).color }),
                                      },
                                      null,
                                      4,
                                    ))
                                  : M('v-if', !0),
                              ]),
                              _: 1,
                            },
                            8,
                            ['title'],
                          ),
                          P(Ge),
                        ],
                        64,
                      ))
                    : M('v-if', !0),
                  c(a)
                    ? M('v-if', !0)
                    : (d(),
                      _(
                        z,
                        { key: 5 },
                        [
                          c(o)
                            ? (d(),
                              S(
                                U,
                                { key: 0, title: 'Play Mode', onClick: c(g) },
                                { default: j(() => [P(tt)]), _: 1 },
                                8,
                                ['onClick'],
                              ))
                            : M('v-if', !0),
                          c(l)
                            ? (d(),
                              S(
                                U,
                                { key: 1, title: 'Presenter Mode', onClick: c(h) },
                                { default: j(() => [P(nt)]), _: 1 },
                                8,
                                ['onClick'],
                              ))
                            : M('v-if', !0),
                          M('v-if', !0),
                          c(o)
                            ? (d(),
                              S(
                                U,
                                {
                                  key: 3,
                                  title: 'Toggle Presenter Layout',
                                  class: 'aspect-ratio-initial',
                                  onClick: c(Nn),
                                },
                                { default: j(() => [P(st), De(' ' + de(c(An)), 1)]), _: 1 },
                                8,
                                ['onClick'],
                              ))
                            : M('v-if', !0),
                        ],
                        64,
                      )),
                  (d(),
                  _(
                    z,
                    { key: 6 },
                    [
                      c(xe).download
                        ? (d(),
                          S(
                            U,
                            { key: 0, title: 'Download as PDF', onClick: c(Ht) },
                            { default: j(() => [P(at)]), _: 1 },
                            8,
                            ['onClick'],
                          ))
                        : M('v-if', !0),
                    ],
                    64,
                  )),
                  !c(o) && c(xe).info && !c(a)
                    ? (d(),
                      S(
                        U,
                        { key: 7, title: 'Show info', onClick: $[5] || ($[5] = R => ($t.value = !c($t))) },
                        { default: j(() => [P(x)]), _: 1 },
                      ))
                    : M('v-if', !0),
                  !c(o) && !c(a)
                    ? (d(),
                      S(
                        Aa,
                        { key: 8 },
                        {
                          button: j(() => [P(U, { title: 'Adjust settings' }, { default: j(() => [P(O)]), _: 1 })]),
                          menu: j(() => [P(Va)]),
                          _: 1,
                        },
                      ))
                    : M('v-if', !0),
                  c(a) ? M('v-if', !0) : (d(), S(Ge, { key: 9 })),
                  I('div', ja, [I('div', za, [De(de(c(n)) + ' ', 1), I('span', Ba, '/ ' + de(c(v)), 1)])]),
                  P(c(Pa)),
                ],
                34,
              ),
            ],
            512,
          )
        )
      }
    },
  }),
  Xe = K(1),
  Ue = A(() => Ln.value.length),
  H = K(0),
  St = K(0)
function Ga() {
  H.value > Xe.value && (H.value -= 1)
}
function Wa() {
  H.value < Ue.value && (H.value += 1)
}
function Ka() {
  if (H.value > Xe.value) {
    let t = H.value - St.value
    ;(t < Xe.value && (t = Xe.value), (H.value = t))
  }
}
function Ha() {
  if (H.value < Ue.value) {
    let t = H.value + St.value
    ;(t > Ue.value && (t = Ue.value), (H.value = t))
  }
}
const Ya = ['onClick'],
  Xa = { class: 'text-green font-bold' },
  Ua = { class: 'opacity-50' },
  Qa = { key: 1, class: 'opacity-50' },
  Ja = { key: 0, class: 'fixed top-4 right-4 z-20 text-gray-400 flex flex-col items-center gap-2' },
  ct = 4 * 16 * 2,
  jt = 2 * 16,
  bo = ve({
    __name: 'QuickOverview',
    setup(t) {
      const { currentSlideNo: e, go: n, slides: s } = Se()
      function r() {
        ee.value = !1
      }
      function a(g) {
        ;(n(g), r())
      }
      function o(g) {
        return g === H.value
      }
      const l = dt.smaller('xs'),
        i = dt.smaller('sm'),
        u = A(() => (l.value ? Ee.width.value - ct : i.value ? (Ee.width.value - ct - jt) / 2 : 300)),
        v = A(() => Math.floor((Ee.width.value - ct) / (u.value + jt))),
        h = K('')
      return (
        Gt('keypress', g => {
          if (!ee.value) {
            h.value = ''
            return
          }
          if (g.key === 'Enter') {
            ;(g.preventDefault(), h.value ? (a(+h.value), (h.value = '')) : a(H.value))
            return
          }
          const m = Number.parseInt(g.key.replace(/\D/g, ''))
          if (Number.isNaN(m)) {
            h.value = ''
            return
          }
          if (!h.value && m === 0) return
          if (((h.value += String(m)), +h.value >= s.value.length)) {
            h.value = ''
            return
          }
          const y = s.value.findIndex(b => `/${b.no}` === h.value)
          ;(y !== -1 && (H.value = y + 1), +h.value * 10 > s.value.length && (a(+h.value), (h.value = '')))
        }),
        Qe(() => {
          ;((H.value = e.value), (St.value = v.value))
        }),
        (g, m) => {
          const y = os,
            b = rs
          return (
            d(),
            _(
              z,
              null,
              [
                P(
                  bn,
                  {
                    'enter-active-class': 'duration-150 ease-out',
                    'enter-from-class': 'opacity-0 scale-102 !backdrop-blur-0px',
                    'leave-active-class': 'duration-200 ease-in',
                    'leave-to-class': 'opacity-0 scale-102 !backdrop-blur-0px',
                  },
                  {
                    default: j(() => [
                      c(ee)
                        ? (d(),
                          _(
                            'div',
                            {
                              key: 0,
                              class:
                                'fixed left-0 right-0 top-0 h-[calc(var(--vh,1vh)*100)] z-20 bg-main !bg-opacity-75 p-16 py-20 overflow-y-auto backdrop-blur-5px select-none',
                              onClick: r,
                            },
                            [
                              I(
                                'div',
                                {
                                  class: 'grid gap-y-4 gap-x-8 w-full',
                                  style: Ae(`grid-template-columns: repeat(auto-fit,minmax(${u.value}px,1fr))`),
                                },
                                [
                                  (d(!0),
                                  _(
                                    z,
                                    null,
                                    Fe(
                                      c(s),
                                      (p, f) => (
                                        d(),
                                        _('div', { key: p.no, class: 'relative' }, [
                                          I(
                                            'div',
                                            {
                                              class: Z([
                                                'inline-block border rounded overflow-hidden bg-main hover:border-primary transition',
                                                o(f + 1) || c(H) === f + 1 ? 'border-primary' : 'border-main',
                                              ]),
                                              onClick: N => a(p.no),
                                            },
                                            [
                                              (d(),
                                              S(
                                                Gn,
                                                {
                                                  key: p.no,
                                                  no: p.no,
                                                  'use-snapshot': c(xe).overviewSnapshots,
                                                  width: u.value,
                                                  class: 'pointer-events-none',
                                                },
                                                {
                                                  default: j(() => [
                                                    P(
                                                      Ut,
                                                      {
                                                        'clicks-context': c(Yt)(p, c(Xt)),
                                                        route: p,
                                                        'render-context': 'overview',
                                                      },
                                                      null,
                                                      8,
                                                      ['clicks-context', 'route'],
                                                    ),
                                                    P(Wn, { page: p.no }, null, 8, ['page']),
                                                  ]),
                                                  _: 2,
                                                },
                                                1032,
                                                ['no', 'use-snapshot', 'width'],
                                              )),
                                            ],
                                            10,
                                            Ya,
                                          ),
                                          I(
                                            'div',
                                            { class: 'absolute top-0', style: Ae(`left: ${u.value + 5}px`) },
                                            [
                                              h.value && String(f + 1).startsWith(h.value)
                                                ? (d(),
                                                  _(
                                                    z,
                                                    { key: 0 },
                                                    [
                                                      I('span', Xa, de(h.value), 1),
                                                      I('span', Ua, de(String(f + 1).slice(h.value.length)), 1),
                                                    ],
                                                    64,
                                                  ))
                                                : (d(), _('span', Qa, de(f + 1), 1)),
                                            ],
                                            4,
                                          ),
                                        ])
                                      ),
                                    ),
                                    128,
                                  )),
                                ],
                                4,
                              ),
                            ],
                          ))
                        : M('v-if', !0),
                    ]),
                    _: 1,
                  },
                ),
                c(ee)
                  ? (d(),
                    _('div', Ja, [
                      P(U, { title: 'Close', class: 'text-2xl', onClick: r }, { default: j(() => [P(y)]), _: 1 }),
                      (d(),
                      S(
                        U,
                        {
                          key: 0,
                          as: 'a',
                          title: 'Slides Overview',
                          target: '_blank',
                          href: `${c(Tn)}overview`,
                          'tab-index': '-1',
                          class: 'text-2xl',
                        },
                        { default: j(() => [P(b)]), _: 1 },
                        8,
                        ['href'],
                      )),
                    ]))
                  : M('v-if', !0),
              ],
              64,
            )
          )
        }
      )
    },
  })
function Za() {
  const t = kn(),
    e = K(!1)
  let n, s
  const r = typeof document < 'u' && 'startViewTransition' in document
  return (
    t.beforeResolve((a, o) => {
      var b, p, f, N
      const l = (b = It(o.params.no)) == null ? void 0 : b.meta,
        i = (p = It(a.params.no)) == null ? void 0 : p.meta,
        u = (f = l == null ? void 0 : l.slide) == null ? void 0 : f.no,
        v = (N = i == null ? void 0 : i.slide) == null ? void 0 : N.no
      if (
        (u != null &&
          v != null &&
          ((u < v ? (l == null ? void 0 : l.transition) : i == null ? void 0 : i.transition) ?? xe.transition)) !==
        'view-transition'
      ) {
        e.value = !1
        return
      }
      if (!r) {
        ;((e.value = !1),
          console.warn('View transition is not supported in your browser, fallback to normal transition.'))
        return
      }
      e.value = !0
      const g = new Promise((D, Q) => {
        ;((n = D), (s = Q))
      })
      let m
      const y = new Promise(D => (m = D))
      return (
        setTimeout(() => {
          document.startViewTransition(() => (m(), g))
        }, 50),
        y
      )
    }),
    r &&
      t.afterEach(() => {
        ;(n == null || n(), s == null || s())
      }),
    e
  )
}
const qa = ['data-drag-id'],
  ae = 10,
  ke = 10,
  ut = 'absolute border border-gray bg-gray dark:border-gray-500 dark:bg-gray-800 bg-opacity-30 ',
  Ke = 20,
  eo = ve({
    __name: 'DragControl',
    props: { data: {} },
    setup(t) {
      const { dragId: e, zoom: n, autoHeight: s, x0: r, y0: a, width: o, height: l, rotate: i, isArrow: u } = t.data,
        v = wn(On, K(1)),
        h = A(() => v.value * n.value),
        { left: g, top: m } = Dn(),
        y = u ? Number.NEGATIVE_INFINITY : 40,
        b = A(() => (i.value * Math.PI) / 180),
        p = A(() => Math.sin(b.value)),
        f = A(() => Math.cos(b.value)),
        N = A(() => o.value * f.value + l.value * p.value),
        D = A(() => o.value * p.value + l.value * f.value),
        Q = A(() => r.value - N.value / 2),
        w = A(() => a.value - D.value / 2),
        T = A(() => r.value + N.value / 2),
        $ = A(() => a.value + D.value / 2),
        W = A(() => u && o.value < 0),
        L = A(() => u && l.value < 0)
      let F = null
      function re(x) {
        if (x.buttons !== 1) return
        ;(x.preventDefault(), x.stopPropagation())
        const R = x.target.getBoundingClientRect(),
          C = o.value * f.value - l.value * p.value,
          E = o.value * p.value + l.value * f.value,
          Y = o.value * f.value + l.value * p.value,
          ne = -o.value * p.value + l.value * f.value
        ;((F = {
          x0: r.value,
          y0: a.value,
          width: o.value,
          height: l.value,
          rotate: i.value,
          dx0: x.clientX - (R.left + R.right) / 2,
          dy0: x.clientY - (R.top + R.bottom) / 2,
          ltx: r.value - C / 2,
          lty: a.value - E / 2,
          rtx: r.value + Y / 2,
          rty: a.value - ne / 2,
          lbx: r.value - Y / 2,
          lby: a.value + ne / 2,
          rbx: r.value + C / 2,
          rby: a.value + E / 2,
        }),
          x.currentTarget.setPointerCapture(x.pointerId))
      }
      function le(x) {
        if (!F || x.buttons !== 1) return
        ;(x.preventDefault(), x.stopPropagation())
        const O = (x.clientX - g.value - F.dx0) / h.value,
          R = (x.clientY - m.value - F.dy0) / h.value
        ;((r.value = Pt(O, -N.value / 2 + ke, Rt.value + N.value / 2 - ke)),
          (a.value = Pt(R, -D.value / 2 + ke, At.value + D.value / 2 - ke)))
      }
      function Ce(x) {
        F && (x.preventDefault(), x.stopPropagation(), (F = null))
      }
      function B(x, O) {
        return {
          onPointerdown: re,
          onPointermove: R => {
            if (!F || R.buttons !== 1) return
            ;(R.preventDefault(), R.stopPropagation())
            let C = (R.clientX - g.value) / h.value,
              E = (R.clientY - m.value) / h.value
            const { ltx: Y, lty: ne, rtx: he, rty: fe, lbx: pe, lby: ge, rbx: _e, rby: G } = F,
              X = F.width / F.height,
              pn = Math.max(y, y * X)
            function Ve(ie, ce) {
              if (R.shiftKey) {
                const J = Math.max(ie, ce * X, pn),
                  q = J / X
                return { w: J, h: q }
              } else return { w: Math.max(ie, y), h: Math.max(ce, y) }
            }
            if (x)
              if (O) {
                const ie = (_e - C) * f.value + (G - E) * p.value,
                  ce = -(_e - C) * p.value + (G - E) * f.value,
                  { w: J, h: q } = Ve(ie, ce)
                ;((C = _e - J * f.value + q * p.value), (E = G - J * p.value - q * f.value))
              } else {
                const ie = (he - C) * f.value - (E - fe) * p.value,
                  ce = (he - C) * p.value + (E - fe) * f.value,
                  { w: J, h: q } = Ve(ie, ce)
                ;((C = he - J * f.value - q * p.value), (E = fe - J * p.value + q * f.value))
              }
            else if (O) {
              const ie = (C - pe) * f.value - (ge - E) * p.value,
                ce = (C - pe) * p.value + (ge - E) * f.value,
                { w: J, h: q } = Ve(ie, ce)
              ;((C = pe + J * f.value + q * p.value), (E = ge + J * p.value - q * f.value))
            } else {
              const ie = (C - Y) * f.value + (E - ne) * p.value,
                ce = -(C - Y) * p.value + (E - ne) * f.value,
                { w: J, h: q } = Ve(ie, ce)
              ;((C = Y + J * f.value - q * p.value), (E = ne + J * p.value + q * f.value))
            }
            x
              ? O
                ? ((r.value = (C + _e) / 2),
                  (a.value = (E + G) / 2),
                  (o.value = (_e - C) * f.value + (G - E) * p.value),
                  (l.value = -(_e - C) * p.value + (G - E) * f.value))
                : ((r.value = (C + he) / 2),
                  (a.value = (E + fe) / 2),
                  (o.value = (he - C) * f.value - (E - fe) * p.value),
                  (l.value = (he - C) * p.value + (E - fe) * f.value))
              : O
                ? ((r.value = (C + pe) / 2),
                  (a.value = (E + ge) / 2),
                  (o.value = (C - pe) * f.value - (ge - E) * p.value),
                  (l.value = (C - pe) * p.value + (ge - E) * f.value))
                : ((r.value = (C + Y) / 2),
                  (a.value = (E + ne) / 2),
                  (o.value = (C - Y) * f.value + (E - ne) * p.value),
                  (l.value = -(C - Y) * p.value + (E - ne) * f.value))
          },
          onPointerup: Ce,
          style: {
            width: `${ae}px`,
            height: `${ae}px`,
            margin: `-${ae / 2}px`,
            left: x !== W.value ? '0' : void 0,
            right: x !== W.value ? void 0 : '0',
            top: O !== L.value ? '0' : void 0,
            bottom: O !== L.value ? void 0 : '0',
            cursor: u ? 'move' : +x + +O == 1 ? 'nesw-resize' : 'nwse-resize',
            borderRadius: u ? '50%' : void 0,
          },
          class: ut,
        }
      }
      function se(x) {
        return {
          onPointerdown: re,
          onPointermove: O => {
            if (!F || O.buttons !== 1) return
            ;(O.preventDefault(), O.stopPropagation())
            const R = (O.clientX - g.value) / h.value,
              C = (O.clientY - m.value) / h.value,
              { ltx: E, lty: Y, rtx: ne, rty: he, lbx: fe, lby: pe, rbx: ge, rby: _e } = F
            if (x === 'l') {
              const G = (ne + ge) / 2,
                X = (he + _e) / 2
              ;((o.value = Math.max((G - R) * f.value + (X - C) * p.value, y)),
                (r.value = G - (o.value * f.value) / 2),
                (a.value = X - (o.value * p.value) / 2))
            } else if (x === 'r') {
              const G = (E + fe) / 2,
                X = (Y + pe) / 2
              ;((o.value = Math.max((R - G) * f.value + (C - X) * p.value, y)),
                (r.value = G + (o.value * f.value) / 2),
                (a.value = X + (o.value * p.value) / 2))
            } else if (x === 't') {
              const G = (fe + ge) / 2,
                X = (pe + _e) / 2
              ;((l.value = Math.max((X - C) * f.value - (G - R) * p.value, y)),
                (r.value = G + (l.value * p.value) / 2),
                (a.value = X - (l.value * f.value) / 2))
            } else if (x === 'b') {
              const G = (E + ne) / 2,
                X = (Y + he) / 2
              ;((l.value = Math.max((C - X) * f.value - (R - G) * p.value, y)),
                (r.value = G - (l.value * p.value) / 2),
                (a.value = X + (l.value * f.value) / 2))
            }
          },
          onPointerup: Ce,
          style: {
            width: `${ae}px`,
            height: `${ae}px`,
            margin: `-${ae / 2}px`,
            left: x === 'l' ? '0' : x === 'r' ? '100%' : '50%',
            top: x === 't' ? '0' : x === 'b' ? '100%' : '50%',
            cursor: 'lr'.includes(x) ? 'ew-resize' : 'ns-resize',
            borderRadius: '50%',
          },
          class: ut,
        }
      }
      function Ie() {
        return {
          onPointerdown: re,
          onPointermove: x => {
            if (!F || x.buttons !== 1) return
            ;(x.preventDefault(), x.stopPropagation())
            const O = (x.clientX - g.value - F.dx0) / h.value - ae / 4,
              R = (x.clientY - m.value - F.dy0) / h.value - ae / 4
            let C = (Math.atan2(R - a.value, O - r.value) * 180) / Math.PI + 90
            const E = [0, 90, 180, 270, 360]
            for (const Y of E)
              if (Math.abs(C - Y) < 5) {
                C = Y % 360
                break
              }
            i.value = C
          },
          onPointerup: Ce,
          style: {
            width: `${ae}px`,
            height: `${ae}px`,
            margin: `-${ae / 2}px`,
            left: '50%',
            top: '-20px',
            cursor: 'grab',
            borderRadius: '50%',
          },
          class: ut,
        }
      }
      const Pe = { immediate: !1, immediateCallback: !1 },
        tt = ze(
          () => {
            T.value <= ke || r.value--
          },
          Ke,
          Pe,
        ),
        nt = ze(
          () => {
            Q.value >= Rt.value - ke || r.value++
          },
          Ke,
          Pe,
        ),
        st = ze(
          () => {
            $.value <= ke || a.value--
          },
          Ke,
          Pe,
        ),
        at = ze(
          () => {
            w.value >= At.value - ke || a.value++
          },
          Ke,
          Pe,
        )
      return (
        Qe(() => {
          function x(O, R) {
            kt[O].value ? R.resume() : R.pause()
          }
          ;(x('left', tt), x('right', nt), x('up', st), x('down', at))
        }),
        (x, O) =>
          Number.isFinite(c(r))
            ? (d(),
              _(
                'div',
                {
                  key: 0,
                  id: 'drag-control-container',
                  'data-drag-id': c(e),
                  style: Ae({
                    position: 'absolute',
                    zIndex: 100,
                    left: `${c(n) * (c(r) - Math.abs(c(o)) / 2)}px`,
                    top: `${c(n) * (c(a) - Math.abs(c(l)) / 2)}px`,
                    width: `${c(n) * Math.abs(c(o))}px`,
                    height: `${c(n) * Math.abs(c(l))}px`,
                    transformOrigin: 'center center',
                    transform: `rotate(${c(i)}deg)`,
                  }),
                  onPointerdown: re,
                  onPointermove: le,
                  onPointerup: Ce,
                },
                [
                  I(
                    'div',
                    { class: Z(['absolute inset-0 z-100 dark:b-gray-400', c(u) ? '' : 'b b-dark']) },
                    [
                      c(s)
                        ? M('v-if', !0)
                        : (d(),
                          _(
                            z,
                            { key: 0 },
                            [
                              I('div', me(ye(B(!0, !0))), null, 16),
                              I('div', me(ye(B(!1, !1))), null, 16),
                              c(u)
                                ? M('v-if', !0)
                                : (d(),
                                  _(
                                    z,
                                    { key: 0 },
                                    [I('div', me(ye(B(!0, !1))), null, 16), I('div', me(ye(B(!1, !0))), null, 16)],
                                    64,
                                  )),
                            ],
                            64,
                          )),
                      c(u)
                        ? M('v-if', !0)
                        : (d(),
                          _(
                            z,
                            { key: 1 },
                            [
                              I('div', me(ye(se('l'))), null, 16),
                              I('div', me(ye(se('r'))), null, 16),
                              c(s)
                                ? M('v-if', !0)
                                : (d(),
                                  _(
                                    z,
                                    { key: 0 },
                                    [I('div', me(ye(se('t'))), null, 16), I('div', me(ye(se('b'))), null, 16)],
                                    64,
                                  )),
                              I('div', me(ye(Ie())), null, 16),
                              I(
                                'div',
                                {
                                  class: 'absolute -top-15px w-0 b b-dashed b-dark dark:b-gray-400',
                                  style: Ae({ left: 'calc(50% - 1px)', height: c(s) ? '14px' : '10px' }),
                                },
                                null,
                                4,
                              ),
                            ],
                            64,
                          )),
                    ],
                    2,
                  ),
                ],
                44,
                qa,
              ))
            : M('v-if', !0)
      )
    },
  }),
  to = ve({
    __name: 'SlidesShow',
    props: { renderContext: {} },
    setup(t) {
      const {
        currentSlideRoute: e,
        currentTransition: n,
        getPrimaryClicks: s,
        prevRoute: r,
        nextRoute: a,
        slides: o,
        isPrintMode: l,
        isPrintWithClicks: i,
        clicksDirection: u,
      } = Se()
      function v(b) {
        b.meta.preload !== !1 && ((b.meta.__preloaded = !0), b.load())
      }
      ;(Qe(() => {
        ;(v(e.value), v(r.value), v(a.value))
      }),
        Qe(b => {
          const p = o.value,
            f = setTimeout(() => {
              p.forEach(v)
            }, 3e3)
          b(() => clearTimeout(f))
        }))
      const h = Za(),
        g = xt()
      Fn(() => import('./DrawingLayer-BYb9_Lbt.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8])).then(
        b => (g.value = b.default),
      )
      const m = A(() =>
        o.value.filter(b => {
          var p
          return ((p = b.meta) == null ? void 0 : p.__preloaded) || b === e.value
        }),
      )
      function y() {
        ;((Nt.value = !0), cs())
      }
      return (b, p) => (
        d(),
        _(
          z,
          null,
          [
            M(' Global Bottom '),
            P(c(Kn)),
            M(' Slides '),
            (d(),
            S(
              He(c(h) ? 'div' : Mn),
              Sn(c(Nt) ? {} : c(n), {
                id: 'slideshow',
                tag: 'div',
                class: { 'slidev-nav-go-forward': c(u) > 0, 'slidev-nav-go-backward': c(u) < 0 },
                onAfterLeave: y,
              }),
              {
                default: j(() => [
                  (d(!0),
                  _(
                    z,
                    null,
                    Fe(
                      m.value,
                      f => (
                        d(),
                        _(
                          z,
                          { key: f.no },
                          [
                            Math.abs(f.no - c(e).no) <= 20
                              ? Cn(
                                  (d(),
                                  S(
                                    Ut,
                                    {
                                      key: 0,
                                      'clicks-context': c(l) && !c(i) ? c(Yt)(f, c(Xt)) : c(s)(f),
                                      route: f,
                                      'render-context': b.renderContext,
                                    },
                                    null,
                                    8,
                                    ['clicks-context', 'route', 'render-context'],
                                  )),
                                  [[$n, f === c(e)]],
                                )
                              : M('v-if', !0),
                          ],
                          64,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
                _: 1,
              },
              16,
              ['class'],
            )),
            c(ht) ? (d(), S(eo, { key: 0, data: c(ht) }, null, 8, ['data'])) : M('v-if', !0),
            M(' Global Top '),
            P(c(Hn)),
            g.value ? (d(), S(c(g), { key: 1 })) : M('v-if', !0),
          ],
          64,
        )
      )
    },
  }),
  ko = qe(to, [['__scopeId', 'data-v-721ea928']]),
  no = []
function so() {
  const { go: t, goFirst: e, goLast: n, next: s, nextSlide: r, prev: a, prevSlide: o } = Se(),
    { drawingEnabled: l } = et(),
    { escape: i, space: u, shift: v, left: h, right: g, up: m, down: y, enter: b, d: p, g: f, o: N, '`': D } = kt,
    Q = {
      next: s,
      prev: a,
      nextSlide: r,
      prevSlide: o,
      go: t,
      goFirst: e,
      goLast: n,
      downloadPDF: Ht,
      toggleDark: vt,
      toggleOverview: Je,
      toggleDrawing: () => (l.value = !l.value),
      escapeOverview: () => (ee.value = !1),
      showGotoDialog: () => (we.value = !we.value),
    },
    w = V(oe(ee), oe(ht))
  let T = [
    { name: 'next_space', key: V(u, oe(v)), fn: s, autoRepeat: !0 },
    { name: 'prev_space', key: V(u, v), fn: a, autoRepeat: !0 },
    { name: 'next_right', key: V(g, oe(v), w), fn: s, autoRepeat: !0 },
    { name: 'prev_left', key: V(h, oe(v), w), fn: a, autoRepeat: !0 },
    { name: 'next_page_key', key: 'pageDown', fn: s, autoRepeat: !0 },
    { name: 'prev_page_key', key: 'pageUp', fn: a, autoRepeat: !0 },
    { name: 'next_down', key: V(y, w), fn: r, autoRepeat: !0 },
    { name: 'prev_up', key: V(m, w), fn: o, autoRepeat: !0 },
    { name: 'next_shift', key: V(g, v), fn: r, autoRepeat: !0 },
    { name: 'prev_shift', key: V(h, v), fn: o, autoRepeat: !0 },
    { name: 'toggle_dark', key: V(p, oe(l)), fn: vt },
    { name: 'toggle_overview', key: V(En(N, D), oe(l)), fn: Je },
    { name: 'hide_overview', key: V(i, oe(l)), fn: () => (ee.value = !1) },
    { name: 'goto', key: V(f, oe(l)), fn: () => (we.value = !we.value) },
    { name: 'next_overview', key: V(g, ee), fn: Wa },
    { name: 'prev_overview', key: V(h, ee), fn: Ga },
    { name: 'up_overview', key: V(m, ee), fn: Ka },
    { name: 'down_overview', key: V(y, ee), fn: Ha },
    {
      name: 'goto_from_overview',
      key: V(b, ee),
      fn: () => {
        ;(t(H.value), (ee.value = !1))
      },
    },
  ]
  const $ = new Set(T.map(L => L.name))
  for (const L of no) {
    const F = L(Q, T)
    T = T.concat(F)
  }
  if (T.filter(L => L.name && $.has(L.name)).length === 0) {
    const L = [
      '========== WARNING ==========',
      'defineShortcutsSetup did not return any of the base shortcuts.',
      'See https://sli.dev/custom/config-shortcuts.html for migration.',
      'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").',
    ].join(`

`)
    ;(alert(L), console.warn(L))
  }
  return T
}
const fn = V(oe(zn), oe(jn), Vn)
function ao(t, e, n = !1) {
  typeof t == 'string' && (t = kt[t])
  const s = V(t, fn)
  let r = 0,
    a
  const o = () => {
    if ((clearTimeout(a), !s.value)) {
      r = 0
      return
    }
    ;(n && ((a = setTimeout(o, Math.max(1e3 - r * 250, 150))), r++), e())
  }
  return Oe(s, o, { flush: 'sync' })
}
function oo(t, e) {
  return In(t, n => {
    fn.value && (n.repeat || e())
  })
}
function wo() {
  const t = so()
  ;(new Map(t.map(n => [n.key, n])).forEach(n => {
    n.fn && ao(n.key, n.fn, n.autoRepeat)
  }),
    oo('f', () => bt.toggle()))
}
export { yo as G, ko as S, Ge as V, xo as _, go as a, bo as b, mo as c, _o as o, wo as r, po as u }
