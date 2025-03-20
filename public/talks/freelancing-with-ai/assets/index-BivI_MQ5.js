const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/md-DrYh4D-l.js',
      'assets/modules/vue-BITYyB3i.js',
      'assets/cover.vue_vue_type_script_setup_true_lang-B_8Wb7xH.js',
      'assets/slidev/context-B7EsKp3R.js',
      'assets/modules/shiki-85yLJs1k.js',
      'assets/modules/shiki-BPvBenZD.css',
      'assets/md-DVzTYA0o.css',
      'assets/md-DUVAcQtY.js',
      'assets/ScrambleText-CbrnPwX3.js',
      'assets/ScrambleText-CwdP0PYT.css',
      'assets/md-DF2cxo1S.js',
      'assets/slidev/image-right.vue_vue_type_script_setup_true_lang-yLOZd28R.js',
      'assets/slidev/layoutHelper-DV4UY9LA.js',
      'assets/md-B5SfJ-cL.js',
      'assets/slidev/default-D8_AmehG.js',
      'assets/md-4CTfs4RX.js',
      'assets/slidev/image.vue_vue_type_script_setup_true_lang-Chs-5GEB.js',
      'assets/md-BW3er97k.js',
      'assets/md-pUoBnpPC.js',
      'assets/md-DF8Jua-G.js',
      'assets/slidev/VClick-BEJhwFIm.js',
      'assets/md-Bn3D2Xgv.js',
      'assets/slidev/md-DCI_ILgK.js',
      'assets/md-CI56WhgM.js',
      'assets/md-DAY5JVeE.js',
      'assets/md-T4X16b86.js',
      'assets/md-Bl8bMMvy.js',
      'assets/md-CachbMJT.js',
      'assets/md-BJzfJ5h4.js',
      'assets/md-BM6aH_jm.js',
      'assets/md-DXESRNXf.js',
      'assets/md-DXOZVb30.js',
      'assets/md-BYdxOCcw.js',
      'assets/md-Yxl5RC84.js',
      'assets/md-CHkLuJc8.js',
      'assets/md-DpAxJ3y9.js',
      'assets/md-CbNrZDHW.js',
      'assets/md-DrHnyByW.js',
      'assets/md-MGLO-iWJ.js',
      'assets/md-DR6PhqZk.js',
      'assets/md-CdaM74-K.js',
      'assets/slidev/entry-D17KSbzy.js',
      'assets/modules/unplugin-icons-4dqQQYnv.js',
      'assets/entry-C9atgMLG.css',
      'assets/slidev/overview-DvtxEEUY.js',
      'assets/slidev/NoteDisplay.vue_vue_type_style_index_0_lang-BflgwZJ8.js',
      'assets/NoteDisplay-D_W-HT8I.css',
      'assets/slidev/SlideWrapper-C6iRWNTm.js',
      'assets/SlideWrapper-Djovh85d.css',
      'assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-CDGaqduH.js',
      'assets/slidev/notes-DDSBlgEu.js',
      'assets/slidev/presenter-Dx5WeT_W.js',
      'assets/slidev/shortcuts-GZe6jKHq.js',
      'assets/shortcuts-B4buz9gS.css',
      'assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-CpTXpjN0.js',
      'assets/DrawingControls-C5T1oZL5.css',
      'assets/presenter-xA5mMkQ0.css',
      'assets/slidev/play-D6kPlymz.js',
      'assets/play-CoA43pdi.css',
      'assets/slidev/404-C04dTQSt.js',
      'assets/404-ON4Alv_O.css',
    ]),
) => i.map(i => d[i])
import {
  z as b,
  n as Ws,
  A as jr,
  B as An,
  C as qs,
  t as $,
  D as tt,
  E as ee,
  G as Hr,
  H as Nr,
  I as xr,
  J as Us,
  K as Ks,
  L as E,
  M as Fr,
  o as It,
  b as hn,
  d as Js,
  F as zr,
  e as Un,
  g as Vr,
  N as P,
  O as En,
  P as Br,
  Q as qt,
  R as Gs,
  S as Wr,
  T as qr,
  U as te,
  V as Qs,
  W as Ut,
  X as Ur,
  Y as Zs,
  r as Kr,
  c as Jr,
  Z as Gr,
  _ as Qr,
  $ as Zr,
  a0 as Yr,
  a1 as Xr,
  a2 as eo,
  a3 as to,
  a4 as no,
  a5 as so,
  a6 as ro,
  a7 as oo,
  a8 as io,
  a9 as ao,
  u as lo,
} from './modules/vue-BITYyB3i.js'
import { T as co } from './modules/shiki-85yLJs1k.js'
;(function () {
  const e = document.createElement('link').relList
  if (e && e.supports && e.supports('modulepreload')) return
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r)
  new MutationObserver(r => {
    for (const o of r)
      if (o.type === 'childList')
        for (const i of o.addedNodes) i.tagName === 'LINK' && i.rel === 'modulepreload' && s(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(r) {
    const o = {}
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : r.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    )
  }
  function s(r) {
    if (r.ep) return
    r.ep = !0
    const o = n(r)
    fetch(r.href, o)
  }
})()
const H = {
  theme: './theme',
  title: 'Slidev',
  titleTemplate: '%s - Slidev',
  addons: [],
  remoteAssets: !1,
  monaco: !0,
  monacoTypesSource: 'local',
  monacoTypesAdditionalPackages: [],
  monacoTypesIgnorePackages: [],
  monacoRunAdditionalDeps: [],
  download: !1,
  export: {},
  info: `<h2>IA en el Freelancing: ¿Aliada o Liada?</h2>
<p>Presentación sobre el uso inteligente de la IA en el trabajo freelance.</p>
`,
  highlighter: 'shiki',
  twoslash: !0,
  lineNumbers: !1,
  colorSchema: 'auto',
  routerMode: 'history',
  aspectRatio: 1.7777777777777777,
  canvasWidth: 980,
  exportFilename: '',
  selectable: !1,
  themeConfig: { primary: '#3b82f6' },
  fonts: {
    sans: [
      '"Inter"',
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Noto Sans"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ],
    serif: ['"PT Serif"', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    mono: [
      '"Azeret Mono"',
      'ui-monospace',
      'SFMono-Regular',
      'Menlo',
      'Monaco',
      'Consolas',
      '"Liberation Mono"',
      '"Courier New"',
      'monospace',
    ],
    webfonts: ['Inter', 'PT Serif', 'Azeret Mono'],
    provider: 'google',
    local: [],
    italic: !0,
    weights: ['400', '500', '600', '700', '900'],
  },
  favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png',
  drawings: { enabled: !0, persist: !1, presenterOnly: !1, syncAll: !0 },
  plantUmlServer: 'https://www.plantuml.com/plantuml',
  codeCopy: !0,
  record: 'dev',
  css: 'unocss',
  presenter: !0,
  htmlAttrs: {},
  transition: 'fade',
  editor: !0,
  contextMenu: null,
  overviewSnapshots: !1,
  wakeLock: !0,
  mdc: !1,
  slidesTitle: 'Slidev',
}
function gn(t, e, n) {
  return Math.min(n, Math.max(e, t))
}
function uo(...t) {
  return ho(t).reduce((e, n) => e + n, 0)
}
function fo(t) {
  return (t = t ?? []), Array.isArray(t) ? t : [t]
}
function ho(t) {
  return fo(t).flat(1)
}
function kc(...t) {
  let e, n, s
  t.length === 1 ? ((e = 0), (s = 1), ([n] = t)) : ([e, n, s = 1] = t)
  const r = []
  let o = e
  for (; o < n; ) r.push(o), (o += s || 1)
  return r
}
function go(t) {
  return t != null
}
function po(t, e) {
  return Object.fromEntries(
    Object.entries(t)
      .map(([n, s]) => e(n, s))
      .filter(go),
  )
}
const bc = 'build',
  Ys = b(() => H.aspectRatio),
  mo = b(() => H.canvasWidth),
  wc = b(() => Math.ceil(mo.value / Ys.value)),
  yo = b(() => po(H.themeConfig || {}, (t, e) => [`--slidev-theme-${t}`, e])),
  en = H.slidesTitle,
  Sc = '/talks/freelancing-with-ai/',
  vo = [],
  _o = new Set(['title', 'titleTemplate', 'script', 'style', 'noscript']),
  Tt = new Set(['base', 'meta', 'link', 'style', 'script', 'noscript']),
  ko = new Set([
    'title',
    'titleTemplate',
    'templateParams',
    'base',
    'htmlAttrs',
    'bodyAttrs',
    'meta',
    'link',
    'style',
    'script',
    'noscript',
  ]),
  bo = new Set(['base', 'title', 'titleTemplate', 'bodyAttrs', 'htmlAttrs', 'templateParams']),
  Xs = new Set([
    'tagPosition',
    'tagPriority',
    'tagDuplicateStrategy',
    'children',
    'innerHTML',
    'textContent',
    'processTemplateParams',
  ]),
  wo = typeof window < 'u'
function Dt(t) {
  let e = 9
  for (let n = 0; n < t.length; ) e = Math.imul(e ^ t.charCodeAt(n++), 9 ** 9)
  return ((e ^ (e >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase()
}
function pn(t) {
  if (t._h) return t._h
  if (t._d) return Dt(t._d)
  let e = `${t.tag}:${t.textContent || t.innerHTML || ''}:`
  for (const n in t.props) e += `${n}:${String(t.props[n])},`
  return Dt(e)
}
function So(t, e) {
  return t instanceof Promise ? t.then(e) : e(t)
}
function mn(t, e, n, s) {
  const r =
    s ||
    tr(
      typeof e == 'object' && typeof e != 'function' && !(e instanceof Promise)
        ? { ...e }
        : { [t === 'script' || t === 'noscript' || t === 'style' ? 'innerHTML' : 'textContent']: e },
      t === 'templateParams' || t === 'titleTemplate',
    )
  if (r instanceof Promise) return r.then(i => mn(t, e, n, i))
  const o = { tag: t, props: r }
  for (const i of Xs) {
    const a = o.props[i] !== void 0 ? o.props[i] : n[i]
    a !== void 0 &&
      ((!(i === 'innerHTML' || i === 'textContent' || i === 'children') || _o.has(o.tag)) &&
        (o[i === 'children' ? 'innerHTML' : i] = a),
      delete o.props[i])
  }
  return (
    o.props.body && ((o.tagPosition = 'bodyClose'), delete o.props.body),
    o.tag === 'script' &&
      typeof o.innerHTML == 'object' &&
      ((o.innerHTML = JSON.stringify(o.innerHTML)), (o.props.type = o.props.type || 'application/json')),
    Array.isArray(o.props.content) ? o.props.content.map(i => ({ ...o, props: { ...o.props, content: i } })) : o
  )
}
function Mo(t, e) {
  var s
  const n = t === 'class' ? ' ' : ';'
  return (
    e &&
      typeof e == 'object' &&
      !Array.isArray(e) &&
      (e = Object.entries(e)
        .filter(([, r]) => r)
        .map(([r, o]) => (t === 'style' ? `${r}:${o}` : r))),
    (s = String(Array.isArray(e) ? e.join(n) : e)) == null
      ? void 0
      : s
          .split(n)
          .filter(r => !!r.trim())
          .join(n)
  )
}
function er(t, e, n, s) {
  for (let r = s; r < n.length; r += 1) {
    const o = n[r]
    if (o === 'class' || o === 'style') {
      t[o] = Mo(o, t[o])
      continue
    }
    if (t[o] instanceof Promise) return t[o].then(i => ((t[o] = i), er(t, e, n, r)))
    if (!e && !Xs.has(o)) {
      const i = String(t[o]),
        a = o.startsWith('data-')
      i === 'true' || i === ''
        ? (t[o] = a ? 'true' : !0)
        : t[o] || (a && i === 'false' ? (t[o] = 'false') : delete t[o])
    }
  }
}
function tr(t, e = !1) {
  const n = er(t, e, Object.keys(t), 0)
  return n instanceof Promise ? n.then(() => t) : t
}
const To = 10
function nr(t, e, n) {
  for (let s = n; s < e.length; s += 1) {
    const r = e[s]
    if (r instanceof Promise) return r.then(o => ((e[s] = o), nr(t, e, s)))
    Array.isArray(r) ? t.push(...r) : t.push(r)
  }
}
function Oo(t) {
  const e = [],
    n = t.resolvedInput
  for (const r in n) {
    if (!Object.prototype.hasOwnProperty.call(n, r)) continue
    const o = n[r]
    if (!(o === void 0 || !ko.has(r))) {
      if (Array.isArray(o)) {
        for (const i of o) e.push(mn(r, i, t))
        continue
      }
      e.push(mn(r, o, t))
    }
  }
  if (e.length === 0) return []
  const s = []
  return So(nr(s, e, 0), () =>
    s.map((r, o) => ((r._e = t._i), t.mode && (r._m = t.mode), (r._p = (t._i << To) + o), r)),
  )
}
const Kn = new Set(['onload', 'onerror', 'onabort', 'onprogress', 'onloadstart']),
  Jn = { base: -10, title: 10 },
  Gn = { critical: -80, high: -10, low: 20 }
function Rt(t) {
  const e = t.tagPriority
  if (typeof e == 'number') return e
  let n = 100
  return (
    t.tag === 'meta'
      ? t.props['http-equiv'] === 'content-security-policy'
        ? (n = -30)
        : t.props.charset
          ? (n = -20)
          : t.props.name === 'viewport' && (n = -15)
      : t.tag === 'link' && t.props.rel === 'preconnect'
        ? (n = 20)
        : t.tag in Jn && (n = Jn[t.tag]),
    e && e in Gn ? n + Gn[e] : n
  )
}
const Po = [
    { prefix: 'before:', offset: -1 },
    { prefix: 'after:', offset: 1 },
  ],
  $o = ['name', 'property', 'http-equiv']
function sr(t) {
  const { props: e, tag: n } = t
  if (bo.has(n)) return n
  if (n === 'link' && e.rel === 'canonical') return 'canonical'
  if (e.charset) return 'charset'
  if (e.id) return `${n}:id:${e.id}`
  for (const s of $o) if (e[s] !== void 0) return `${n}:${s}:${e[s]}`
  return !1
}
const ue = '%separator'
function Lo(t, e) {
  var s
  let n
  if (e === 's' || e === 'pageTitle') n = t.pageTitle
  else if (e.includes('.')) {
    const r = e.indexOf('.')
    n = (s = t[e.substring(0, r)]) == null ? void 0 : s[e.substring(r + 1)]
  } else n = t[e]
  return n !== void 0 ? (n || '').replace(/"/g, '\\"') : void 0
}
const Ao = new RegExp(`${ue}(?:\\s*${ue})*`, 'g')
function _t(t, e, n) {
  if (typeof t != 'string' || !t.includes('%')) return t
  let s = t
  try {
    s = decodeURI(t)
  } catch {}
  const r = s.match(/%\w+(?:\.\w+)?/g)
  if (!r) return t
  const o = t.includes(ue)
  return (
    (t = t
      .replace(/%\w+(?:\.\w+)?/g, i => {
        if (i === ue || !r.includes(i)) return i
        const a = Lo(e, i.slice(1))
        return a !== void 0 ? a : i
      })
      .trim()),
    o &&
      (t.endsWith(ue) && (t = t.slice(0, -ue.length)),
      t.startsWith(ue) && (t = t.slice(ue.length)),
      (t = t.replace(Ao, n).trim())),
    t
  )
}
function Qn(t, e) {
  return t == null ? e || null : typeof t == 'function' ? t(e) : t
}
async function Eo(t, e = {}) {
  const n = e.document || t.resolvedOptions.document
  if (!n || !t.dirty) return
  const s = { shouldRender: !0, tags: [] }
  if ((await t.hooks.callHook('dom:beforeRender', s), !!s.shouldRender))
    return (
      t._domUpdatePromise ||
        (t._domUpdatePromise = new Promise(async r => {
          var h
          const o = (await t.resolveTags()).map(d => ({ tag: d, id: Tt.has(d.tag) ? pn(d) : d.tag, shouldRender: !0 }))
          let i = t._dom
          if (!i) {
            i = { elMap: { htmlAttrs: n.documentElement, bodyAttrs: n.body } }
            const d = new Set()
            for (const f of ['body', 'head']) {
              const g = (h = n[f]) == null ? void 0 : h.children
              for (const p of g) {
                const y = p.tagName.toLowerCase()
                if (!Tt.has(y)) continue
                const m = {
                    tag: y,
                    props: await tr(p.getAttributeNames().reduce((T, S) => ({ ...T, [S]: p.getAttribute(S) }), {})),
                    innerHTML: p.innerHTML,
                  },
                  v = sr(m)
                let _ = v,
                  w = 1
                for (; _ && d.has(_); ) _ = `${v}:${w++}`
                _ && ((m._d = _), d.add(_)), (i.elMap[p.getAttribute('data-hid') || pn(m)] = p)
              }
            }
          }
          ;(i.pendingSideEffects = { ...i.sideEffects }), (i.sideEffects = {})
          function a(d, f, g) {
            const p = `${d}:${f}`
            ;(i.sideEffects[p] = g), delete i.pendingSideEffects[p]
          }
          function l({ id: d, $el: f, tag: g }) {
            const p = g.tag.endsWith('Attrs')
            if (
              ((i.elMap[d] = f),
              p ||
                (g.textContent && g.textContent !== f.textContent && (f.textContent = g.textContent),
                g.innerHTML && g.innerHTML !== f.innerHTML && (f.innerHTML = g.innerHTML),
                a(d, 'el', () => {
                  var y
                  ;(y = i.elMap[d]) == null || y.remove(), delete i.elMap[d]
                })),
              g._eventHandlers)
            )
              for (const y in g._eventHandlers)
                Object.prototype.hasOwnProperty.call(g._eventHandlers, y) &&
                  f.getAttribute(`data-${y}`) !== '' &&
                  ((g.tag === 'bodyAttrs' ? n.defaultView : f).addEventListener(
                    y.substring(2),
                    g._eventHandlers[y].bind(f),
                  ),
                  f.setAttribute(`data-${y}`, ''))
            for (const y in g.props) {
              if (!Object.prototype.hasOwnProperty.call(g.props, y)) continue
              const m = g.props[y],
                v = `attr:${y}`
              if (y === 'class') {
                if (!m) continue
                for (const _ of m.split(' '))
                  p && a(d, `${v}:${_}`, () => f.classList.remove(_)), !f.classList.contains(_) && f.classList.add(_)
              } else if (y === 'style') {
                if (!m) continue
                for (const _ of m.split(';')) {
                  const w = _.indexOf(':'),
                    T = _.substring(0, w).trim(),
                    S = _.substring(w + 1).trim()
                  a(d, `${v}:${T}`, () => {
                    f.style.removeProperty(T)
                  }),
                    f.style.setProperty(T, S)
                }
              } else
                f.getAttribute(y) !== m && f.setAttribute(y, m === !0 ? '' : String(m)),
                  p && a(d, v, () => f.removeAttribute(y))
            }
          }
          const c = [],
            u = { bodyClose: void 0, bodyOpen: void 0, head: void 0 }
          for (const d of o) {
            const { tag: f, shouldRender: g, id: p } = d
            if (g) {
              if (f.tag === 'title') {
                n.title = f.textContent
                continue
              }
              ;(d.$el = d.$el || i.elMap[p]), d.$el ? l(d) : Tt.has(f.tag) && c.push(d)
            }
          }
          for (const d of c) {
            const f = d.tag.tagPosition || 'head'
            ;(d.$el = n.createElement(d.tag.tag)),
              l(d),
              (u[f] = u[f] || n.createDocumentFragment()),
              u[f].appendChild(d.$el)
          }
          for (const d of o) await t.hooks.callHook('dom:renderTag', d, n, a)
          u.head && n.head.appendChild(u.head),
            u.bodyOpen && n.body.insertBefore(u.bodyOpen, n.body.firstChild),
            u.bodyClose && n.body.appendChild(u.bodyClose)
          for (const d in i.pendingSideEffects) i.pendingSideEffects[d]()
          ;(t._dom = i), await t.hooks.callHook('dom:rendered', { renders: o }), r()
        }).finally(() => {
          ;(t._domUpdatePromise = void 0), (t.dirty = !1)
        })),
      t._domUpdatePromise
    )
}
function Co(t, e = {}) {
  const n = e.delayFn || (s => setTimeout(s, 10))
  return (t._domDebouncedUpdatePromise =
    t._domDebouncedUpdatePromise ||
    new Promise(s =>
      n(() =>
        Eo(t, e).then(() => {
          delete t._domDebouncedUpdatePromise, s()
        }),
      ),
    ))
}
function Io(t) {
  return e => {
    var s, r
    const n =
      ((r = (s = e.resolvedOptions.document) == null ? void 0 : s.head.querySelector('script[id="unhead:payload"]')) ==
      null
        ? void 0
        : r.innerHTML) || !1
    return (
      n && e.push(JSON.parse(n)),
      {
        mode: 'client',
        hooks: {
          'entries:updated': o => {
            Co(o, t)
          },
        },
      }
    )
  }
}
function yn(t, e = {}, n) {
  for (const s in t) {
    const r = t[s],
      o = n ? `${n}:${s}` : s
    typeof r == 'object' && r !== null ? yn(r, e, o) : typeof r == 'function' && (e[o] = r)
  }
  return e
}
const Do = { run: t => t() },
  Ro = () => Do,
  rr = typeof console.createTask < 'u' ? console.createTask : Ro
function jo(t, e) {
  const n = e.shift(),
    s = rr(n)
  return t.reduce((r, o) => r.then(() => s.run(() => o(...e))), Promise.resolve())
}
function Ho(t, e) {
  const n = e.shift(),
    s = rr(n)
  return Promise.all(t.map(r => s.run(() => r(...e))))
}
function tn(t, e) {
  for (const n of [...t]) n(e)
}
class No {
  constructor() {
    ;(this._hooks = {}),
      (this._before = void 0),
      (this._after = void 0),
      (this._deprecatedMessages = void 0),
      (this._deprecatedHooks = {}),
      (this.hook = this.hook.bind(this)),
      (this.callHook = this.callHook.bind(this)),
      (this.callHookWith = this.callHookWith.bind(this))
  }
  hook(e, n, s = {}) {
    if (!e || typeof n != 'function') return () => {}
    const r = e
    let o
    for (; this._deprecatedHooks[e]; ) (o = this._deprecatedHooks[e]), (e = o.to)
    if (o && !s.allowDeprecated) {
      let i = o.message
      i || (i = `${r} hook has been deprecated` + (o.to ? `, please use ${o.to}` : '')),
        this._deprecatedMessages || (this._deprecatedMessages = new Set()),
        this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i))
    }
    if (!n.name)
      try {
        Object.defineProperty(n, 'name', { get: () => '_' + e.replace(/\W+/g, '_') + '_hook_cb', configurable: !0 })
      } catch {}
    return (
      (this._hooks[e] = this._hooks[e] || []),
      this._hooks[e].push(n),
      () => {
        n && (this.removeHook(e, n), (n = void 0))
      }
    )
  }
  hookOnce(e, n) {
    let s,
      r = (...o) => (typeof s == 'function' && s(), (s = void 0), (r = void 0), n(...o))
    return (s = this.hook(e, r)), s
  }
  removeHook(e, n) {
    if (this._hooks[e]) {
      const s = this._hooks[e].indexOf(n)
      s !== -1 && this._hooks[e].splice(s, 1), this._hooks[e].length === 0 && delete this._hooks[e]
    }
  }
  deprecateHook(e, n) {
    this._deprecatedHooks[e] = typeof n == 'string' ? { to: n } : n
    const s = this._hooks[e] || []
    delete this._hooks[e]
    for (const r of s) this.hook(e, r)
  }
  deprecateHooks(e) {
    Object.assign(this._deprecatedHooks, e)
    for (const n in e) this.deprecateHook(n, e[n])
  }
  addHooks(e) {
    const n = yn(e),
      s = Object.keys(n).map(r => this.hook(r, n[r]))
    return () => {
      for (const r of s.splice(0, s.length)) r()
    }
  }
  removeHooks(e) {
    const n = yn(e)
    for (const s in n) this.removeHook(s, n[s])
  }
  removeAllHooks() {
    for (const e in this._hooks) delete this._hooks[e]
  }
  callHook(e, ...n) {
    return n.unshift(e), this.callHookWith(jo, e, ...n)
  }
  callHookParallel(e, ...n) {
    return n.unshift(e), this.callHookWith(Ho, e, ...n)
  }
  callHookWith(e, n, ...s) {
    const r = this._before || this._after ? { name: n, args: s, context: {} } : void 0
    this._before && tn(this._before, r)
    const o = e(n in this._hooks ? [...this._hooks[n]] : [], s)
    return o instanceof Promise
      ? o.finally(() => {
          this._after && r && tn(this._after, r)
        })
      : (this._after && r && tn(this._after, r), o)
  }
  beforeEach(e) {
    return (
      (this._before = this._before || []),
      this._before.push(e),
      () => {
        if (this._before !== void 0) {
          const n = this._before.indexOf(e)
          n !== -1 && this._before.splice(n, 1)
        }
      }
    )
  }
  afterEach(e) {
    return (
      (this._after = this._after || []),
      this._after.push(e),
      () => {
        if (this._after !== void 0) {
          const n = this._after.indexOf(e)
          n !== -1 && this._after.splice(n, 1)
        }
      }
    )
  }
}
function xo() {
  return new No()
}
const Fo = new Set(['templateParams', 'htmlAttrs', 'bodyAttrs']),
  zo = {
    hooks: {
      'tag:normalise': ({ tag: t }) => {
        t.props.hid && ((t.key = t.props.hid), delete t.props.hid),
          t.props.vmid && ((t.key = t.props.vmid), delete t.props.vmid),
          t.props.key && ((t.key = t.props.key), delete t.props.key)
        const e = sr(t)
        e && !e.startsWith('meta:og:') && !e.startsWith('meta:twitter:') && delete t.key
        const n = e || (t.key ? `${t.tag}:${t.key}` : !1)
        n && (t._d = n)
      },
      'tags:resolve': t => {
        const e = Object.create(null)
        for (const s of t.tags) {
          const r = (s.key ? `${s.tag}:${s.key}` : s._d) || pn(s),
            o = e[r]
          if (o) {
            let a = s == null ? void 0 : s.tagDuplicateStrategy
            if ((!a && Fo.has(s.tag) && (a = 'merge'), a === 'merge')) {
              const l = o.props
              l.style &&
                s.props.style &&
                (l.style[l.style.length - 1] !== ';' && (l.style += ';'),
                (s.props.style = `${l.style} ${s.props.style}`)),
                l.class && s.props.class
                  ? (s.props.class = `${l.class} ${s.props.class}`)
                  : l.class && (s.props.class = l.class),
                (e[r].props = { ...l, ...s.props })
              continue
            } else if (s._e === o._e) {
              ;(o._duped = o._duped || []), (s._d = `${o._d}:${o._duped.length + 1}`), o._duped.push(s)
              continue
            } else if (Rt(s) > Rt(o)) continue
          }
          if (!(s.innerHTML || s.textContent || Object.keys(s.props).length !== 0) && Tt.has(s.tag)) {
            delete e[r]
            continue
          }
          e[r] = s
        }
        const n = []
        for (const s in e) {
          const r = e[s],
            o = r._duped
          n.push(r), o && (delete r._duped, n.push(...o))
        }
        ;(t.tags = n),
          (t.tags = t.tags.filter(s => !(s.tag === 'meta' && (s.props.name || s.props.property) && !s.props.content)))
      },
    },
  },
  Vo = new Set(['script', 'link', 'bodyAttrs']),
  Bo = t => ({
    hooks: {
      'tags:resolve': e => {
        for (const n of e.tags) {
          if (!Vo.has(n.tag)) continue
          const s = n.props
          for (const r in s) {
            if (r[0] !== 'o' || r[1] !== 'n' || !Object.prototype.hasOwnProperty.call(s, r)) continue
            const o = s[r]
            typeof o == 'function' &&
              (t.ssr && Kn.has(r) ? (s[r] = `this.dataset.${r}fired = true`) : delete s[r],
              (n._eventHandlers = n._eventHandlers || {}),
              (n._eventHandlers[r] = o))
          }
          t.ssr &&
            n._eventHandlers &&
            (n.props.src || n.props.href) &&
            (n.key = n.key || Dt(n.props.src || n.props.href))
        }
      },
      'dom:renderTag': ({ $el: e, tag: n }) => {
        var r, o
        const s = e == null ? void 0 : e.dataset
        if (s)
          for (const i in s) {
            if (!i.endsWith('fired')) continue
            const a = i.slice(0, -5)
            Kn.has(a) &&
              ((o = (r = n._eventHandlers) == null ? void 0 : r[a]) == null || o.call(e, new Event(a.substring(2))))
          }
      },
    },
  }),
  Wo = new Set(['link', 'style', 'script', 'noscript']),
  qo = {
    hooks: {
      'tag:normalise': ({ tag: t }) => {
        t.key && Wo.has(t.tag) && (t.props['data-hid'] = t._h = Dt(t.key))
      },
    },
  },
  Uo = {
    mode: 'server',
    hooks: {
      'tags:beforeResolve': t => {
        const e = {}
        let n = !1
        for (const s of t.tags)
          s._m !== 'server' ||
            (s.tag !== 'titleTemplate' && s.tag !== 'templateParams' && s.tag !== 'title') ||
            ((e[s.tag] = s.tag === 'title' || s.tag === 'titleTemplate' ? s.textContent : s.props), (n = !0))
        n &&
          t.tags.push({
            tag: 'script',
            innerHTML: JSON.stringify(e),
            props: { id: 'unhead:payload', type: 'application/json' },
          })
      },
    },
  },
  Ko = {
    hooks: {
      'tags:resolve': t => {
        var e
        for (const n of t.tags)
          if (typeof n.tagPriority == 'string')
            for (const { prefix: s, offset: r } of Po) {
              if (!n.tagPriority.startsWith(s)) continue
              const o = n.tagPriority.substring(s.length),
                i = (e = t.tags.find(a => a._d === o)) == null ? void 0 : e._p
              if (i !== void 0) {
                n._p = i + r
                break
              }
            }
        t.tags.sort((n, s) => {
          const r = Rt(n),
            o = Rt(s)
          return r < o ? -1 : r > o ? 1 : n._p - s._p
        })
      },
    },
  },
  Jo = { meta: 'content', link: 'href', htmlAttrs: 'lang' },
  Go = ['innerHTML', 'textContent'],
  Qo = t => ({
    hooks: {
      'tags:resolve': e => {
        var i
        const { tags: n } = e
        let s
        for (let a = 0; a < n.length; a += 1)
          n[a].tag === 'templateParams' && ((s = e.tags.splice(a, 1)[0].props), (a -= 1))
        const r = s || {},
          o = r.separator || '|'
        delete r.separator,
          (r.pageTitle = _t(
            r.pageTitle || ((i = n.find(a => a.tag === 'title')) == null ? void 0 : i.textContent) || '',
            r,
            o,
          ))
        for (const a of n) {
          if (a.processTemplateParams === !1) continue
          const l = Jo[a.tag]
          if (l && typeof a.props[l] == 'string') a.props[l] = _t(a.props[l], r, o)
          else if (a.processTemplateParams || a.tag === 'titleTemplate' || a.tag === 'title')
            for (const c of Go) typeof a[c] == 'string' && (a[c] = _t(a[c], r, o))
        }
        ;(t._templateParams = r), (t._separator = o)
      },
      'tags:afterResolve': ({ tags: e }) => {
        let n
        for (let s = 0; s < e.length; s += 1) {
          const r = e[s]
          r.tag === 'title' && r.processTemplateParams !== !1 && (n = r)
        }
        n != null && n.textContent && (n.textContent = _t(n.textContent, t._templateParams, t._separator))
      },
    },
  }),
  Zo = {
    hooks: {
      'tags:resolve': t => {
        const { tags: e } = t
        let n, s
        for (let r = 0; r < e.length; r += 1) {
          const o = e[r]
          o.tag === 'title' ? (n = o) : o.tag === 'titleTemplate' && (s = o)
        }
        if (s && n) {
          const r = Qn(s.textContent, n.textContent)
          r !== null ? (n.textContent = r || n.textContent) : t.tags.splice(t.tags.indexOf(n), 1)
        } else if (s) {
          const r = Qn(s.textContent)
          r !== null && ((s.textContent = r), (s.tag = 'title'), (s = void 0))
        }
        s && t.tags.splice(t.tags.indexOf(s), 1)
      },
    },
  },
  Yo = {
    hooks: {
      'tags:afterResolve': t => {
        for (const e of t.tags)
          typeof e.innerHTML == 'string' &&
            (e.innerHTML && (e.props.type === 'application/ld+json' || e.props.type === 'application/json')
              ? (e.innerHTML = e.innerHTML.replace(/</g, '\\u003C'))
              : (e.innerHTML = e.innerHTML.replace(new RegExp(`</${e.tag}`, 'g'), `<\\/${e.tag}`)))
      },
    },
  }
let or
function Xo(t = {}) {
  const e = ei(t)
  return e.use(Io()), (or = e)
}
function Zn(t, e) {
  return !t || (t === 'server' && e) || (t === 'client' && !e)
}
function ei(t = {}) {
  const e = xo()
  e.addHooks(t.hooks || {}), (t.document = t.document || (wo ? document : void 0))
  const n = !t.document,
    s = () => {
      ;(a.dirty = !0), e.callHook('entries:updated', a)
    }
  let r = 0,
    o = []
  const i = [],
    a = {
      plugins: i,
      dirty: !1,
      resolvedOptions: t,
      hooks: e,
      headEntries() {
        return o
      },
      use(l) {
        const c = typeof l == 'function' ? l(a) : l
        ;(!c.key || !i.some(u => u.key === c.key)) && (i.push(c), Zn(c.mode, n) && e.addHooks(c.hooks || {}))
      },
      push(l, c) {
        c == null || delete c.head
        const u = { _i: r++, input: l, ...c }
        return (
          Zn(u.mode, n) && (o.push(u), s()),
          {
            dispose() {
              ;(o = o.filter(h => h._i !== u._i)), s()
            },
            patch(h) {
              for (const d of o) d._i === u._i && (d.input = u.input = h)
              s()
            },
          }
        )
      },
      async resolveTags() {
        const l = { tags: [], entries: [...o] }
        await e.callHook('entries:resolve', l)
        for (const c of l.entries) {
          const u = c.resolvedInput || c.input
          if (((c.resolvedInput = await (c.transform ? c.transform(u) : u)), c.resolvedInput))
            for (const h of await Oo(c)) {
              const d = { tag: h, entry: c, resolvedOptions: a.resolvedOptions }
              await e.callHook('tag:normalise', d), l.tags.push(d.tag)
            }
        }
        return (
          await e.callHook('tags:beforeResolve', l),
          await e.callHook('tags:resolve', l),
          await e.callHook('tags:afterResolve', l),
          l.tags
        )
      },
      ssr: n,
    }
  return (
    [zo, Uo, Bo, qo, Ko, Qo, Zo, Yo, ...((t == null ? void 0 : t.plugins) || [])].forEach(l => a.use(l)),
    a.hooks.callHook('init', a),
    a
  )
}
function ti() {
  return or
}
const ni = jr[0] === '3'
function si(t) {
  return typeof t == 'function' ? t() : An(t)
}
function jt(t) {
  if (t instanceof Promise || t instanceof Date || t instanceof RegExp) return t
  const e = si(t)
  if (!t || !e) return e
  if (Array.isArray(e)) return e.map(n => jt(n))
  if (typeof e == 'object') {
    const n = {}
    for (const s in e)
      if (Object.prototype.hasOwnProperty.call(e, s)) {
        if (s === 'titleTemplate' || (s[0] === 'o' && s[1] === 'n')) {
          n[s] = An(e[s])
          continue
        }
        n[s] = jt(e[s])
      }
    return n
  }
  return e
}
const ri = {
    hooks: {
      'entries:resolve': t => {
        for (const e of t.entries) e.resolvedInput = jt(e.input)
      },
    },
  },
  ir = 'usehead'
function oi(t) {
  return {
    install(n) {
      ni && ((n.config.globalProperties.$unhead = t), (n.config.globalProperties.$head = t), n.provide(ir, t))
    },
  }.install
}
function ii(t = {}) {
  t.domDelayFn = t.domDelayFn || (n => Ws(() => setTimeout(() => n(), 0)))
  const e = Xo(t)
  return e.use(ri), (e.install = oi(e)), e
}
const Yn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  Xn = '__unhead_injection_handler__'
function ai() {
  if (Xn in Yn) return Yn[Xn]()
  const t = qs(ir)
  return t || ti()
}
function li(t, e = {}) {
  const n = e.head || ai()
  if (n) return n.ssr ? n.push(t, e) : ci(n, t, e)
}
function ci(t, e, n = {}) {
  const s = $(!1),
    r = $({})
  tt(() => {
    r.value = s.value ? {} : jt(e)
  })
  const o = t.push(r.value, n)
  return (
    ee(r, a => {
      o.patch(a)
    }),
    Us() &&
      (Hr(() => {
        o.dispose()
      }),
      Nr(() => {
        s.value = !0
      }),
      xr(() => {
        s.value = !1
      })),
    o
  )
}
function vn(t) {
  if (t === !1 || t === 'false') return null
  if (t == null || t === !0 || t === 'true') return '+1'
  if (typeof t == 'string' && '+-'.includes(t[0])) return t
  const e = +t
  return Number.isNaN(e) ? (console.error(`Invalid "at" prop value: ${t}`), null) : e
}
function ui(t) {
  return Array.isArray(t) ? [vn(t[0]), vn(t[1])] : null
}
function ar(t, e = 0, n) {
  const s = $(!1)
  let r = new Map(),
    o = new Map()
  const i = {
    get current() {
      return gn(+t.value, e, i.total)
    },
    set current(a) {
      t.value = s.value ? gn(a, e, i.total) : a
    },
    clicksStart: e,
    get relativeSizeMap() {
      return r
    },
    get maxMap() {
      return o
    },
    get isMounted() {
      return s.value
    },
    setup() {
      Ks(() => {
        ;(s.value = !0), (o = E(o)), (i.current = t.value)
      }),
        Fr(() => {
          ;(s.value = !1), (r = new Map()), (o = new Map())
        })
    },
    calculateSince(a, l = 1) {
      const c = vn(a)
      if (c == null) return null
      let u, h, d
      if (typeof c == 'string') {
        const f = i.currentOffset,
          g = +c
        ;(u = f + g), (h = f + g + l - 1), (d = g + l - 1)
      } else (u = c), (h = c + l - 1), (d = 0)
      return {
        start: u,
        end: +Number.POSITIVE_INFINITY,
        max: h,
        delta: d,
        currentOffset: b(() => i.current - u),
        isCurrent: b(() => i.current === u),
        isActive: b(() => i.current >= u),
      }
    },
    calculateRange(a) {
      const l = ui(a)
      if (l == null) return null
      const [c, u] = l
      let h, d, f
      return (
        typeof c == 'string' ? ((h = i.currentOffset + +c), (f = +c)) : ((h = c), (f = 0)),
        typeof u == 'string' ? ((d = h + +u), (f += +u)) : (d = u),
        {
          start: h,
          end: d,
          max: d,
          delta: f,
          currentOffset: b(() => i.current - h),
          isCurrent: b(() => i.current === h),
          isActive: b(() => h <= i.current && i.current < d),
        }
      )
    },
    calculate(a) {
      return Array.isArray(a) ? i.calculateRange(a) : i.calculateSince(a)
    },
    register(a, l) {
      if (!l) return
      const { delta: c, max: u } = l
      r.set(a, c), o.set(a, u)
    },
    unregister(a) {
      r.delete(a), o.delete(a)
    },
    get currentOffset() {
      return uo(...r.values())
    },
    get total() {
      return n ?? (s.value ? Math.max(0, ...o.values()) : 0)
    },
  }
  return i
}
function fi(t, e = 0) {
  var s, r
  const n = ((s = t == null ? void 0 : t.meta.slide) == null ? void 0 : s.frontmatter.clicksStart) ?? 0
  return ar($(Math.max(e, n)), n, (r = t == null ? void 0 : t.meta) == null ? void 0 : r.clicks)
}
const di = 'modulepreload',
  hi = function (t) {
    return '/talks/freelancing-with-ai/' + t
  },
  es = {},
  O = function (e, n, s) {
    let r = Promise.resolve()
    if (n && n.length > 0) {
      document.getElementsByTagName('link')
      const i = document.querySelector('meta[property=csp-nonce]'),
        a = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute('nonce'))
      r = Promise.allSettled(
        n.map(l => {
          if (((l = hi(l)), l in es)) return
          es[l] = !0
          const c = l.endsWith('.css'),
            u = c ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${l}"]${u}`)) return
          const h = document.createElement('link')
          if (
            ((h.rel = c ? 'stylesheet' : di),
            c || (h.as = 'script'),
            (h.crossOrigin = ''),
            (h.href = l),
            a && h.setAttribute('nonce', a),
            document.head.appendChild(h),
            c)
          )
            return new Promise((d, f) => {
              h.addEventListener('load', d),
                h.addEventListener('error', () => f(new Error(`Unable to preload CSS for ${l}`)))
            })
        }),
      )
    }
    function o(i) {
      const a = new Event('vite:preloadError', { cancelable: !0 })
      if (((a.payload = i), window.dispatchEvent(a), !a.defaultPrevented)) throw i
    }
    return r.then(i => {
      for (const a of i || []) a.status === 'rejected' && o(a.reason)
      return e().catch(o)
    })
  },
  gi = (t, e) => {
    const n = t.__vccOpts || t
    for (const [s, r] of e) n[s] = r
    return n
  },
  pi = {},
  mi = { class: 'px-4 py-10 text-center text-red-700 dark:text-red-500 font-bold font-mono' }
function yi(t, e) {
  return It(), hn('div', mi, ' An error occurred on this slide. Check the terminal for more information. ')
}
const C = gi(pi, [['render', yi]]),
  vi = { class: 'h-full w-full flex items-center justify-center gap-2 slidev-slide-loading' },
  _i = Js({
    __name: 'SlideLoading',
    setup(t) {
      const e = $(!1)
      return (
        Ks(() => {
          setTimeout(() => {
            e.value = !0
          }, 200)
        }),
        (n, s) => (
          It(),
          hn('div', vi, [
            e.value
              ? (It(),
                hn(
                  zr,
                  { key: 0 },
                  [
                    s[0] || (s[0] = Un('div', { class: 'i-svg-spinners-90-ring-with-bg text-xl' }, null, -1)),
                    s[1] || (s[1] = Un('div', null, 'Loading slide...', -1)),
                  ],
                  64,
                ))
              : Vr('v-if', !0),
          ])
        )
      )
    },
  }),
  ki = {
    theme: './theme',
    highlighter: 'shiki',
    info: `## IA en el Freelancing: ¿Aliada o Liada?
Presentación sobre el uso inteligente de la IA en el trabajo freelance.
`,
    fonts: { sans: 'Inter', mono: 'Azeret Mono', weights: '400,500,600,700,900' },
    themeConfig: { primary: '#3b82f6' },
    transition: 'fade',
  },
  ge = P(ki),
  bi = E({
    get layout() {
      return ge.layout
    },
    get transition() {
      return ge.transition
    },
    get class() {
      return ge.class
    },
    get clicks() {
      return ge.clicks
    },
    get name() {
      return ge.name
    },
    get preload() {
      return ge.preload
    },
    slide: {
      content: '',
      revision: 'b4e97r',
      frontmatterRaw: `theme: ./theme
highlighter: shiki
info: |
  ## IA en el Freelancing: ¿Aliada o Liada?
  Presentación sobre el uso inteligente de la IA en el trabajo freelance.
fonts:
  # Fonts will be auto-imported from Google Fonts
  sans: 'Inter'
  mono: 'Azeret Mono'
  weights: '400,500,600,700,900'
themeConfig:
  primary: '#3b82f6'
transition: fade
`,
      note: '',
      index: 0,
      noteHTML: '',
      raw: '',
      frontmatter: ge,
      filepath: '',
      start: 0,
      id: 0,
      no: 1,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  wi = { layout: 'cover', background: '/images/image-1.png' },
  pe = P(wi),
  Si = E({
    get layout() {
      return pe.layout
    },
    get transition() {
      return pe.transition
    },
    get class() {
      return pe.class
    },
    get clicks() {
      return pe.clicks
    },
    get name() {
      return pe.name
    },
    get preload() {
      return pe.preload
    },
    slide: {
      content: '',
      revision: '1v3br6',
      frontmatterRaw: `layout: cover
background: /images/image-1.png
`,
      note: '',
      title: '<ScrambleText text="Emprendimiento y Freelancing con IA: ¿Aliada o Liada?" />',
      level: 1,
      index: 1,
      noteHTML: '',
      raw: '',
      frontmatter: pe,
      filepath: '',
      start: 23,
      id: 1,
      no: 2,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  Mi = { layout: 'image-right', image: '/images/banner.jpg' },
  me = P(Mi),
  Ti = E({
    get layout() {
      return me.layout
    },
    get transition() {
      return me.transition
    },
    get class() {
      return me.class
    },
    get clicks() {
      return me.clicks
    },
    get name() {
      return me.name
    },
    get preload() {
      return me.preload
    },
    slide: {
      content: '',
      revision: 'shv1md',
      frontmatterRaw: `layout: image-right
image: /images/banner.jpg
`,
      note: '',
      title: '<ScrambleText text="Sobre mí" />',
      level: 1,
      index: 2,
      noteHTML: '',
      raw: '',
      frontmatter: me,
      filepath: '',
      start: 30,
      id: 2,
      no: 3,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  Oi = { layout: 'default' },
  ye = P(Oi),
  Pi = E({
    get layout() {
      return ye.layout
    },
    get transition() {
      return ye.transition
    },
    get class() {
      return ye.class
    },
    get clicks() {
      return ye.clicks
    },
    get name() {
      return ye.name
    },
    get preload() {
      return ye.preload
    },
    slide: {
      content: '',
      revision: '-xwkvzq',
      frontmatterRaw: `layout: default
`,
      note: '',
      index: 3,
      noteHTML: '',
      raw: '',
      frontmatter: ye,
      filepath: '',
      start: 48,
      id: 3,
      no: 4,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  $i = { layout: 'image', image: '/images/automation.png', 'background-size': 'contain' },
  ve = P($i),
  Li = E({
    get layout() {
      return ve.layout
    },
    get transition() {
      return ve.transition
    },
    get class() {
      return ve.class
    },
    get clicks() {
      return ve.clicks
    },
    get name() {
      return ve.name
    },
    get preload() {
      return ve.preload
    },
    slide: {
      content: '',
      revision: 'q3vcf0',
      frontmatterRaw: `layout: image
image: /images/automation.png
background-size: contain
`,
      note: '',
      index: 4,
      noteHTML: '',
      raw: '',
      frontmatter: ve,
      filepath: '',
      start: 65,
      id: 4,
      no: 5,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  Ai = { layout: 'image', image: '/images/is_it_worth_the_time.png', 'background-size': 'contain' },
  _e = P(Ai),
  Ei = E({
    get layout() {
      return _e.layout
    },
    get transition() {
      return _e.transition
    },
    get class() {
      return _e.class
    },
    get clicks() {
      return _e.clicks
    },
    get name() {
      return _e.name
    },
    get preload() {
      return _e.preload
    },
    slide: {
      content: '',
      revision: '-pres3c',
      frontmatterRaw: `layout: image
image: /images/is_it_worth_the_time.png
background-size: contain
`,
      note: '',
      index: 5,
      noteHTML: '',
      raw: '',
      frontmatter: _e,
      filepath: '',
      start: 71,
      id: 5,
      no: 6,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  Ci = { layout: 'statement' },
  ke = P(Ci),
  Ii = E({
    get layout() {
      return ke.layout
    },
    get transition() {
      return ke.transition
    },
    get class() {
      return ke.class
    },
    get clicks() {
      return ke.clicks
    },
    get name() {
      return ke.name
    },
    get preload() {
      return ke.preload
    },
    slide: {
      content: '',
      revision: 'sm0w3e',
      frontmatterRaw: `layout: statement
`,
      note: '',
      index: 6,
      noteHTML: '',
      raw: '',
      frontmatter: ke,
      filepath: '',
      start: 77,
      id: 6,
      no: 7,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  Di = { layout: 'image-right', image: '/images/common-sense.jpeg', 'background-size': 'contain' },
  be = P(Di),
  Ri = E({
    get layout() {
      return be.layout
    },
    get transition() {
      return be.transition
    },
    get class() {
      return be.class
    },
    get clicks() {
      return be.clicks
    },
    get name() {
      return be.name
    },
    get preload() {
      return be.preload
    },
    slide: {
      content: '',
      revision: 'p4oa77',
      frontmatterRaw: `layout: image-right
image: /images/common-sense.jpeg
background-size: contain
`,
      note: '',
      title: 'Usando el sentido "común"',
      level: 1,
      index: 7,
      noteHTML: '',
      raw: '',
      frontmatter: be,
      filepath: '',
      start: 85,
      id: 7,
      no: 8,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  ji = { layout: 'quote' },
  we = P(ji),
  Hi = E({
    get layout() {
      return we.layout
    },
    get transition() {
      return we.transition
    },
    get class() {
      return we.class
    },
    get clicks() {
      return we.clicks
    },
    get name() {
      return we.name
    },
    get preload() {
      return we.preload
    },
    slide: {
      content: '',
      revision: '1mulfx',
      frontmatterRaw: `layout: quote
`,
      note: '',
      index: 8,
      noteHTML: `<p>Effectiveness is doing the right things, while efficiency is doing things right</p>
`,
      raw: '',
      frontmatter: we,
      filepath: '',
      start: 105,
      id: 8,
      no: 9,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  Ni = { layout: 'two-cols' },
  Se = P(Ni),
  xi = E({
    get layout() {
      return Se.layout
    },
    get transition() {
      return Se.transition
    },
    get class() {
      return Se.class
    },
    get clicks() {
      return Se.clicks
    },
    get name() {
      return Se.name
    },
    get preload() {
      return Se.preload
    },
    slide: {
      content: '',
      revision: '-6kqurm',
      frontmatterRaw: `layout: two-cols
`,
      note: '',
      index: 9,
      noteHTML: '',
      raw: '',
      frontmatter: Se,
      filepath: '',
      start: 113,
      id: 9,
      no: 10,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  Fi = { layout: 'image-right', image: '/images/image-1.png' },
  Me = P(Fi),
  zi = E({
    get layout() {
      return Me.layout
    },
    get transition() {
      return Me.transition
    },
    get class() {
      return Me.class
    },
    get clicks() {
      return Me.clicks
    },
    get name() {
      return Me.name
    },
    get preload() {
      return Me.preload
    },
    slide: {
      content: '',
      revision: 'at2wwo',
      frontmatterRaw: `layout: image-right
image: /images/image-1.png
`,
      note: '',
      title: '<ScrambleText text="ChatGPT" />',
      level: 1,
      index: 10,
      noteHTML: '',
      raw: '',
      frontmatter: Me,
      filepath: '',
      start: 154,
      id: 10,
      no: 11,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  Vi = { layout: 'image-right', image: '/images/image-4.png' },
  Te = P(Vi),
  Bi = E({
    get layout() {
      return Te.layout
    },
    get transition() {
      return Te.transition
    },
    get class() {
      return Te.class
    },
    get clicks() {
      return Te.clicks
    },
    get name() {
      return Te.name
    },
    get preload() {
      return Te.preload
    },
    slide: {
      content: '',
      revision: '-i4mgcv',
      frontmatterRaw: `layout: image-right
image: /images/image-4.png
`,
      note: '',
      title: '<ScrambleText text="ChatGPT Custom GPTs" />',
      level: 1,
      index: 11,
      noteHTML: '',
      raw: '',
      frontmatter: Te,
      filepath: '',
      start: 174,
      id: 11,
      no: 12,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  Wi = { layout: 'image', image: '/images/grammar.png', 'background-size': 'contain' },
  Oe = P(Wi),
  qi = E({
    get layout() {
      return Oe.layout
    },
    get transition() {
      return Oe.transition
    },
    get class() {
      return Oe.class
    },
    get clicks() {
      return Oe.clicks
    },
    get name() {
      return Oe.name
    },
    get preload() {
      return Oe.preload
    },
    slide: {
      content: '',
      revision: 'n0cdxi',
      frontmatterRaw: `layout: image
image: /images/grammar.png
background-size: contain
`,
      note: '',
      index: 12,
      noteHTML: '',
      raw: '',
      frontmatter: Oe,
      filepath: '',
      start: 194,
      id: 12,
      no: 13,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  Ui = { layout: 'image', image: '/images/marcos-alberca-tono.png', 'background-size': 'contain' },
  Pe = P(Ui),
  Ki = E({
    get layout() {
      return Pe.layout
    },
    get transition() {
      return Pe.transition
    },
    get class() {
      return Pe.class
    },
    get clicks() {
      return Pe.clicks
    },
    get name() {
      return Pe.name
    },
    get preload() {
      return Pe.preload
    },
    slide: {
      content: '',
      revision: '-23bltq',
      frontmatterRaw: `layout: image
image: /images/marcos-alberca-tono.png
background-size: contain
`,
      note: '',
      index: 13,
      noteHTML: '',
      raw: '',
      frontmatter: Pe,
      filepath: '',
      start: 200,
      id: 13,
      no: 14,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  Ji = { layout: 'image-right', image: '/images/image-7.png' },
  $e = P(Ji),
  Gi = E({
    get layout() {
      return $e.layout
    },
    get transition() {
      return $e.transition
    },
    get class() {
      return $e.class
    },
    get clicks() {
      return $e.clicks
    },
    get name() {
      return $e.name
    },
    get preload() {
      return $e.preload
    },
    slide: {
      content: '',
      revision: '-uquykz',
      frontmatterRaw: `layout: image-right
image: /images/image-7.png
`,
      note: '',
      title: '<ScrambleText text="ChatGPT Projects" />',
      level: 1,
      index: 14,
      noteHTML: '',
      raw: '',
      frontmatter: $e,
      filepath: '',
      start: 206,
      id: 14,
      no: 15,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  Qi = { layout: 'image', image: '/images/projects.png', 'background-size': 'contain' },
  Le = P(Qi),
  Zi = E({
    get layout() {
      return Le.layout
    },
    get transition() {
      return Le.transition
    },
    get class() {
      return Le.class
    },
    get clicks() {
      return Le.clicks
    },
    get name() {
      return Le.name
    },
    get preload() {
      return Le.preload
    },
    slide: {
      content: '',
      revision: '72z4ux',
      frontmatterRaw: `layout: image
image: /images/projects.png
background-size: contain
`,
      note: '',
      index: 15,
      noteHTML: '',
      raw: '',
      frontmatter: Le,
      filepath: '',
      start: 224,
      id: 15,
      no: 16,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  Yi = { layout: 'image', image: '/images/add-to-project.png' },
  Ae = P(Yi),
  Xi = E({
    get layout() {
      return Ae.layout
    },
    get transition() {
      return Ae.transition
    },
    get class() {
      return Ae.class
    },
    get clicks() {
      return Ae.clicks
    },
    get name() {
      return Ae.name
    },
    get preload() {
      return Ae.preload
    },
    slide: {
      content: '',
      revision: '5vjqla',
      frontmatterRaw: `layout: image
image: /images/add-to-project.png
`,
      note: '',
      index: 16,
      noteHTML: '',
      raw: '',
      frontmatter: Ae,
      filepath: '',
      start: 230,
      id: 16,
      no: 17,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  ea = { layout: 'image-right', image: '/images/image-9.png' },
  Ee = P(ea),
  ta = E({
    get layout() {
      return Ee.layout
    },
    get transition() {
      return Ee.transition
    },
    get class() {
      return Ee.class
    },
    get clicks() {
      return Ee.clicks
    },
    get name() {
      return Ee.name
    },
    get preload() {
      return Ee.preload
    },
    slide: {
      content: '',
      revision: '-4ehba5',
      frontmatterRaw: `layout: image-right
image: /images/image-9.png
`,
      note: '',
      title: '<ScrambleText text="Cursor" />',
      level: 1,
      index: 17,
      noteHTML: '',
      raw: '',
      frontmatter: Ee,
      filepath: '',
      start: 235,
      id: 17,
      no: 18,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  na = { layout: 'image', image: '/images/cursor.png', 'background-size': 'contain' },
  Ce = P(na),
  sa = E({
    get layout() {
      return Ce.layout
    },
    get transition() {
      return Ce.transition
    },
    get class() {
      return Ce.class
    },
    get clicks() {
      return Ce.clicks
    },
    get name() {
      return Ce.name
    },
    get preload() {
      return Ce.preload
    },
    slide: {
      content: '',
      revision: '-i7gbib',
      frontmatterRaw: `layout: image
image: /images/cursor.png
background-size: contain
`,
      note: '',
      index: 18,
      noteHTML: '',
      raw: '',
      frontmatter: Ce,
      filepath: '',
      start: 255,
      id: 18,
      no: 19,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  ra = { layout: 'image', image: '/images/cursorrules.png', 'background-size': 'contain' },
  Ie = P(ra),
  oa = E({
    get layout() {
      return Ie.layout
    },
    get transition() {
      return Ie.transition
    },
    get class() {
      return Ie.class
    },
    get clicks() {
      return Ie.clicks
    },
    get name() {
      return Ie.name
    },
    get preload() {
      return Ie.preload
    },
    slide: {
      content: '',
      revision: 'upu2rw',
      frontmatterRaw: `layout: image
image: /images/cursorrules.png
background-size: contain
`,
      note: '',
      index: 19,
      noteHTML: '',
      raw: '',
      frontmatter: Ie,
      filepath: '',
      start: 261,
      id: 19,
      no: 20,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  ia = { layout: 'image-right', image: '/images/image-10.png' },
  De = P(ia),
  aa = E({
    get layout() {
      return De.layout
    },
    get transition() {
      return De.transition
    },
    get class() {
      return De.class
    },
    get clicks() {
      return De.clicks
    },
    get name() {
      return De.name
    },
    get preload() {
      return De.preload
    },
    slide: {
      content: '',
      revision: 'wyywgm',
      frontmatterRaw: `layout: image-right
image: /images/image-10.png
`,
      note: '',
      title: '<ScrambleText text="V0" />',
      level: 1,
      index: 20,
      noteHTML: '',
      raw: '',
      frontmatter: De,
      filepath: '',
      start: 267,
      id: 20,
      no: 21,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  la = { layout: 'image', image: '/images/v0.png', 'background-size': 'contain' },
  Re = P(la),
  ca = E({
    get layout() {
      return Re.layout
    },
    get transition() {
      return Re.transition
    },
    get class() {
      return Re.class
    },
    get clicks() {
      return Re.clicks
    },
    get name() {
      return Re.name
    },
    get preload() {
      return Re.preload
    },
    slide: {
      content: '',
      revision: 'tbr15l',
      frontmatterRaw: `layout: image
image: /images/v0.png
background-size: contain
`,
      note: '',
      index: 21,
      noteHTML: '',
      raw: '',
      frontmatter: Re,
      filepath: '',
      start: 287,
      id: 21,
      no: 22,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  ua = { layout: 'image-right', image: '/images/image-11.png' },
  je = P(ua),
  fa = E({
    get layout() {
      return je.layout
    },
    get transition() {
      return je.transition
    },
    get class() {
      return je.class
    },
    get clicks() {
      return je.clicks
    },
    get name() {
      return je.name
    },
    get preload() {
      return je.preload
    },
    slide: {
      content: '',
      revision: '-fosa3g',
      frontmatterRaw: `layout: image-right
image: /images/image-11.png
`,
      note: '',
      title: '<ScrambleText text="Make" />',
      level: 1,
      index: 22,
      noteHTML: '',
      raw: '',
      frontmatter: je,
      filepath: '',
      start: 293,
      id: 22,
      no: 23,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  da = { layout: 'image-right', image: '/images/image-1.png' },
  He = P(da),
  ha = E({
    get layout() {
      return He.layout
    },
    get transition() {
      return He.transition
    },
    get class() {
      return He.class
    },
    get clicks() {
      return He.clicks
    },
    get name() {
      return He.name
    },
    get preload() {
      return He.preload
    },
    slide: {
      content: '',
      revision: '-xtbbm5',
      frontmatterRaw: `layout: image-right
image: /images/image-1.png
`,
      note: '',
      title: '<ScrambleText text="La IA como Aliada" />',
      level: 1,
      index: 23,
      noteHTML: '',
      raw: '',
      frontmatter: He,
      filepath: '',
      start: 313,
      id: 23,
      no: 24,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  ga = { layout: 'image-right', image: '/images/image-12.png' },
  Ne = P(ga),
  pa = E({
    get layout() {
      return Ne.layout
    },
    get transition() {
      return Ne.transition
    },
    get class() {
      return Ne.class
    },
    get clicks() {
      return Ne.clicks
    },
    get name() {
      return Ne.name
    },
    get preload() {
      return Ne.preload
    },
    slide: {
      content: '',
      revision: '-xyb1ko',
      frontmatterRaw: `layout: image-right
image: /images/image-12.png
`,
      note: '',
      title: '<ScrambleText text="La IA como Liada" />',
      level: 1,
      index: 24,
      noteHTML: '',
      raw: '',
      frontmatter: Ne,
      filepath: '',
      start: 331,
      id: 24,
      no: 25,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  ma = { layout: 'default' },
  xe = P(ma),
  ya = E({
    get layout() {
      return xe.layout
    },
    get transition() {
      return xe.transition
    },
    get class() {
      return xe.class
    },
    get clicks() {
      return xe.clicks
    },
    get name() {
      return xe.name
    },
    get preload() {
      return xe.preload
    },
    slide: {
      content: '',
      revision: '-dzh7sn',
      frontmatterRaw: `layout: default
`,
      note: '',
      title: '<ScrambleText text="Conclusiones" />',
      level: 1,
      index: 25,
      noteHTML: '',
      raw: '',
      frontmatter: xe,
      filepath: '',
      start: 349,
      id: 25,
      no: 26,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  va = {},
  Fe = P(va),
  _a = E({
    get layout() {
      return Fe.layout
    },
    get transition() {
      return Fe.transition
    },
    get class() {
      return Fe.class
    },
    get clicks() {
      return Fe.clicks
    },
    get name() {
      return Fe.name
    },
    get preload() {
      return Fe.preload
    },
    slide: {
      content: '',
      revision: '-jl4c4h',
      note: '',
      title: '<ScrambleText text="¡Gracias!" />',
      level: 1,
      index: 26,
      noteHTML: '',
      raw: '',
      frontmatter: Fe,
      filepath: '',
      start: 362,
      id: 26,
      no: 27,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  ka = {},
  ze = P(ka),
  ba = E({
    get layout() {
      return ze.layout
    },
    get transition() {
      return ze.transition
    },
    get class() {
      return ze.class
    },
    get clicks() {
      return ze.clicks
    },
    get name() {
      return ze.name
    },
    get preload() {
      return ze.preload
    },
    slide: {
      content: '',
      revision: '-g9a89z',
      note: '',
      title: '<ScrambleText text="Recursos" />',
      level: 1,
      index: 27,
      noteHTML: '',
      raw: '',
      frontmatter: ze,
      filepath: '',
      start: 374,
      id: 27,
      no: 28,
    },
    __clicksContext: null,
    __preloaded: !1,
  }),
  k = new Array(28),
  I = (t, e) =>
    Br({
      loader: e,
      delay: 300,
      loadingComponent: _i,
      errorComponent: C,
      onError: n => console.error('Failed to load slide ' + (t + 1), n),
    }),
  ts = async () => {
    try {
      return k[0] ?? (k[0] = await O(() => import('./md-DrYh4D-l.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])))
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  ns = async () => {
    try {
      return k[1] ?? (k[1] = await O(() => import('./md-DUVAcQtY.js'), __vite__mapDeps([7, 8, 1, 3, 9, 2, 4, 5])))
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  ss = async () => {
    try {
      return k[2] ?? (k[2] = await O(() => import('./md-DF2cxo1S.js'), __vite__mapDeps([10, 8, 1, 3, 9, 11, 12, 4, 5])))
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  rs = async () => {
    try {
      return k[3] ?? (k[3] = await O(() => import('./md-B5SfJ-cL.js'), __vite__mapDeps([13, 1, 14, 3, 4, 5])))
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  os = async () => {
    try {
      return k[4] ?? (k[4] = await O(() => import('./md-4CTfs4RX.js'), __vite__mapDeps([15, 1, 16, 12, 3, 4, 5])))
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  is = async () => {
    try {
      return k[5] ?? (k[5] = await O(() => import('./md-BW3er97k.js'), __vite__mapDeps([17, 1, 16, 12, 3, 4, 5])))
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  as = async () => {
    try {
      return k[6] ?? (k[6] = await O(() => import('./md-pUoBnpPC.js'), __vite__mapDeps([18, 1, 3, 4, 5])))
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  ls = async () => {
    try {
      return k[7] ?? (k[7] = await O(() => import('./md-DF8Jua-G.js'), __vite__mapDeps([19, 20, 1, 3, 11, 12, 4, 5])))
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  cs = async () => {
    try {
      return k[8] ?? (k[8] = await O(() => import('./md-Bn3D2Xgv.js'), __vite__mapDeps([21, 8, 1, 3, 9, 4, 5])))
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  us = async () => {
    try {
      return k[9] ?? (k[9] = await O(() => import('./slidev/md-DCI_ILgK.js'), __vite__mapDeps([22, 20, 1, 3, 4, 5])))
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  fs = async () => {
    try {
      return (
        k[10] ??
        (k[10] = await O(() => import('./md-CI56WhgM.js'), __vite__mapDeps([23, 20, 1, 3, 8, 9, 11, 12, 4, 5])))
      )
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  ds = async () => {
    try {
      return (
        k[11] ??
        (k[11] = await O(() => import('./md-DAY5JVeE.js'), __vite__mapDeps([24, 20, 1, 3, 8, 9, 11, 12, 4, 5])))
      )
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  hs = async () => {
    try {
      return k[12] ?? (k[12] = await O(() => import('./md-T4X16b86.js'), __vite__mapDeps([25, 1, 16, 12, 3, 4, 5])))
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  gs = async () => {
    try {
      return k[13] ?? (k[13] = await O(() => import('./md-Bl8bMMvy.js'), __vite__mapDeps([26, 1, 16, 12, 3, 4, 5])))
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  ps = async () => {
    try {
      return (
        k[14] ??
        (k[14] = await O(() => import('./md-CachbMJT.js'), __vite__mapDeps([27, 20, 1, 3, 8, 9, 11, 12, 4, 5])))
      )
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  ms = async () => {
    try {
      return k[15] ?? (k[15] = await O(() => import('./md-BJzfJ5h4.js'), __vite__mapDeps([28, 1, 16, 12, 3, 4, 5])))
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  ys = async () => {
    try {
      return k[16] ?? (k[16] = await O(() => import('./md-BM6aH_jm.js'), __vite__mapDeps([29, 1, 16, 12, 3, 4, 5])))
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  vs = async () => {
    try {
      return (
        k[17] ??
        (k[17] = await O(() => import('./md-DXESRNXf.js'), __vite__mapDeps([30, 20, 1, 3, 8, 9, 11, 12, 4, 5])))
      )
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  _s = async () => {
    try {
      return k[18] ?? (k[18] = await O(() => import('./md-DXOZVb30.js'), __vite__mapDeps([31, 1, 16, 12, 3, 4, 5])))
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  ks = async () => {
    try {
      return k[19] ?? (k[19] = await O(() => import('./md-BYdxOCcw.js'), __vite__mapDeps([32, 1, 16, 12, 3, 4, 5])))
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  bs = async () => {
    try {
      return (
        k[20] ??
        (k[20] = await O(() => import('./md-Yxl5RC84.js'), __vite__mapDeps([33, 20, 1, 3, 8, 9, 11, 12, 4, 5])))
      )
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  ws = async () => {
    try {
      return k[21] ?? (k[21] = await O(() => import('./md-CHkLuJc8.js'), __vite__mapDeps([34, 1, 16, 12, 3, 4, 5])))
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  Ss = async () => {
    try {
      return (
        k[22] ??
        (k[22] = await O(() => import('./md-DpAxJ3y9.js'), __vite__mapDeps([35, 20, 1, 3, 8, 9, 11, 12, 4, 5])))
      )
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  Ms = async () => {
    try {
      return (
        k[23] ??
        (k[23] = await O(() => import('./md-CbNrZDHW.js'), __vite__mapDeps([36, 20, 1, 3, 8, 9, 11, 12, 4, 5])))
      )
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  Ts = async () => {
    try {
      return (
        k[24] ??
        (k[24] = await O(() => import('./md-DrHnyByW.js'), __vite__mapDeps([37, 20, 1, 3, 8, 9, 11, 12, 4, 5])))
      )
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  Os = async () => {
    try {
      return (
        k[25] ?? (k[25] = await O(() => import('./md-MGLO-iWJ.js'), __vite__mapDeps([38, 20, 1, 3, 8, 9, 14, 4, 5])))
      )
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  Ps = async () => {
    try {
      return k[26] ?? (k[26] = await O(() => import('./md-DR6PhqZk.js'), __vite__mapDeps([39, 8, 1, 3, 9, 14, 4, 5])))
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  $s = async () => {
    try {
      return k[27] ?? (k[27] = await O(() => import('./md-CdaM74-K.js'), __vite__mapDeps([40, 8, 1, 3, 9, 14, 4, 5])))
    } catch (t) {
      return console.error('slide failed to load', t), C
    }
  },
  wa = [
    { no: 1, meta: bi, load: ts, component: I(0, ts) },
    { no: 2, meta: Si, load: ns, component: I(1, ns) },
    { no: 3, meta: Ti, load: ss, component: I(2, ss) },
    { no: 4, meta: Pi, load: rs, component: I(3, rs) },
    { no: 5, meta: Li, load: os, component: I(4, os) },
    { no: 6, meta: Ei, load: is, component: I(5, is) },
    { no: 7, meta: Ii, load: as, component: I(6, as) },
    { no: 8, meta: Ri, load: ls, component: I(7, ls) },
    { no: 9, meta: Hi, load: cs, component: I(8, cs) },
    { no: 10, meta: xi, load: us, component: I(9, us) },
    { no: 11, meta: zi, load: fs, component: I(10, fs) },
    { no: 12, meta: Bi, load: ds, component: I(11, ds) },
    { no: 13, meta: qi, load: hs, component: I(12, hs) },
    { no: 14, meta: Ki, load: gs, component: I(13, gs) },
    { no: 15, meta: Gi, load: ps, component: I(14, ps) },
    { no: 16, meta: Zi, load: ms, component: I(15, ms) },
    { no: 17, meta: Xi, load: ys, component: I(16, ys) },
    { no: 18, meta: ta, load: vs, component: I(17, vs) },
    { no: 19, meta: sa, load: _s, component: I(18, _s) },
    { no: 20, meta: oa, load: ks, component: I(19, ks) },
    { no: 21, meta: aa, load: bs, component: I(20, bs) },
    { no: 22, meta: ca, load: ws, component: I(21, ws) },
    { no: 23, meta: fa, load: Ss, component: I(22, Ss) },
    { no: 24, meta: ha, load: Ms, component: I(23, Ms) },
    { no: 25, meta: pa, load: Ts, component: I(24, Ts) },
    { no: 26, meta: ya, load: Os, component: I(25, Os) },
    { no: 27, meta: _a, load: Ps, component: I(26, Ps) },
    { no: 28, meta: ba, load: $s, component: I(27, $s) },
  ],
  ae = En(wa),
  Kt = '$$slidev-clicks-context',
  Cn = '$$slidev-page',
  lr = '$$slidev-slide-element',
  Sa = '$$slidev-slide-scale',
  Ma = '$$slidev-context',
  Mc = '$$slidev-route',
  In = '$$slidev-render-context',
  Ta = '$$slidev-fontmatter',
  Oa = '$$slidev-slide-zoom',
  Ot = 'slidev-vclick-target',
  at = 'slidev-vclick-hidden',
  lt = 'slidev-vclick-fade',
  nn = 'slidev-vclick-hidden-explicitly',
  sn = 'slidev-vclick-current',
  rn = 'slidev-vclick-prior',
  Pt = 999999,
  Pa = ['localhost', '127.0.0.1'],
  $a = [
    'clicks',
    'clicksStart',
    'disabled',
    'hide',
    'hideInToc',
    'layout',
    'level',
    'preload',
    'routeAlias',
    'src',
    'title',
    'transition',
    'zoom',
    'dragPos',
  ],
  Tc = [
    ...$a,
    'theme',
    'titleTemplate',
    'info',
    'author',
    'keywords',
    'presenter',
    'download',
    'exportFilename',
    'export',
    'highlighter',
    'lineNumbers',
    'monaco',
    'monacoTypesSource',
    'monacoTypesAdditionalPackages',
    'monacoRunAdditionalDeps',
    'remoteAssets',
    'selectable',
    'record',
    'colorSchema',
    'routerMode',
    'aspectRatio',
    'canvasWidth',
    'themeConfig',
    'favicon',
    'plantUmlServer',
    'fonts',
    'defaults',
    'drawings',
    'htmlAttrs',
    'mdc',
    'contextMenu',
    'wakeLock',
    'overviewSnapshots',
  ],
  Dn = $(!1)
function La(t, e, { mode: n = 'replace' } = {}) {
  const s = qt()
  return b({
    get() {
      const r = s.currentRoute.value.query[t]
      return r == null ? e : Array.isArray(r) ? r.filter(Boolean) : r
    },
    set(r) {
      Ws(() => {
        ;(s.currentRoute.value.query[t] ?? (e == null ? void 0 : e.toString())) !== r.toString() &&
          s[An(n)]({ query: { ...s.currentRoute.value.query, [t]: `${r}` === e ? void 0 : r } })
      })
    },
  })
}
function Jt(t) {
  return ae.value.find(e => {
    var n
    return e.no === +t || ((n = e.meta.slide) == null ? void 0 : n.frontmatter.routeAlias) === t
  })
}
function Ze(t, e) {
  var s
  ;(typeof t == 'number' || typeof t == 'string') && (t = Jt(t))
  const n = ((s = t.meta.slide) == null ? void 0 : s.frontmatter.routeAlias) ?? t.no
  return e ? `/presenter/${n}` : `/${n}`
}
const Aa = {
  'slide-left': 'slide-left | slide-right',
  'slide-right': 'slide-right | slide-left',
  'slide-up': 'slide-up | slide-down',
  'slide-down': 'slide-down | slide-up',
}
function Ea(t, e = !1) {
  if (!t || (typeof t == 'string' && (t = { name: t }), !t.name)) return
  let n = t.name.includes('|') ? t.name : Aa[t.name] || t.name
  if (n.includes('|')) {
    const [s, r] = n.split('|').map(o => o.trim())
    n = e ? r : s
  }
  if (n) return { ...t, name: n }
}
function Ca(t, e, n) {
  var r, o
  let s =
    t > 0
      ? (r = n == null ? void 0 : n.meta) == null
        ? void 0
        : r.transition
      : (o = e == null ? void 0 : e.meta) == null
        ? void 0
        : o.transition
  return s || (s = H.transition || void 0), Ea(s, t < 0)
}
function cr(t, e, n = 1) {
  var r, o, i, a, l, c, u
  const s = e.meta.slide.level ?? n
  s && s > n && t.length > 0
    ? cr(t[t.length - 1].children, e, n + 1)
    : t.push({
        no: e.no,
        children: [],
        level: n,
        titleLevel: s,
        path: Ze(
          ((o = (r = e.meta.slide) == null ? void 0 : r.frontmatter) == null ? void 0 : o.routeAlias) ?? e.no,
          !1,
        ),
        hideInToc: !!(
          (l = (a = (i = e.meta) == null ? void 0 : i.slide) == null ? void 0 : a.frontmatter) != null && l.hideInToc
        ),
        title: (u = (c = e.meta) == null ? void 0 : c.slide) == null ? void 0 : u.title,
      })
}
function ur(t, e, n = !1, s, r) {
  return t.map(o => {
    const i = { ...o, active: o.no === (r == null ? void 0 : r.value), hasActiveParent: n }
    return (
      i.children.length > 0 && (i.children = ur(i.children, e, i.active || i.hasActiveParent, i, r)),
      s && (i.active || i.activeParent) && (s.activeParent = !0),
      i
    )
  })
}
function fr(t, e = 1) {
  return t.filter(n => !n.hideInToc).map(n => ({ ...n, children: fr(n.children, e + 1) }))
}
function Ia(t, e, n) {
  const s = b(() =>
      t.value
        .filter(o => {
          var i, a
          return (a = (i = o.meta) == null ? void 0 : i.slide) == null ? void 0 : a.title
        })
        .reduce((o, i) => (cr(o, i), o), []),
    ),
    r = b(() => ur(s.value, n.value, void 0, void 0, e))
  return b(() => fr(r.value))
}
function Da(t, e, n = $(0), s, r, o) {
  const i = b(() => ae.value.length),
    a = $(0),
    l = $(0),
    c = b(() => Ze(t.value, s.value)),
    u = b(() => t.value.no),
    h = b(() => {
      var D
      return ((D = t.value.meta) == null ? void 0 : D.layout) || (u.value === 1 ? 'cover' : 'default')
    }),
    d = b(() => e.value.current),
    f = b(() => e.value.clicksStart),
    g = b(() => e.value.total),
    p = b(() => ae.value[Math.min(ae.value.length, u.value + 1) - 1]),
    y = b(() => ae.value[Math.max(1, u.value - 1) - 1]),
    m = b(() => u.value < ae.value.length || d.value < g.value),
    v = b(() => u.value > 1 || d.value > 0),
    _ = b(() => Ca(a.value, t.value, y.value))
  ee(t, (D, V) => {
    a.value = D.no - V.no
  })
  async function w(D) {
    return !1
  }
  const T = Ia(ae, u, t)
  async function S() {
    ;(l.value = 1), g.value <= n.value ? await R() : (n.value += 1)
  }
  async function L() {
    ;(l.value = -1), n.value <= f.value ? await N(!0) : (n.value -= 1)
  }
  async function R(D = !1) {
    ;(l.value = 1), u.value < ae.value.length && (await A(u.value + 1, D && !r.value ? Pt : void 0))
  }
  async function N(D = !1) {
    ;(l.value = -1), u.value > 1 && (await A(u.value - 1, D && !r.value ? Pt : void 0))
  }
  function K() {
    return A(1)
  }
  function W() {
    return A(i.value)
  }
  async function A(D, V = 0, ie = !1) {
    var he, ot, it
    Dn.value = !1
    const rt = u.value !== D,
      se = V !== n.value,
      Y = (he = Jt(D)) == null ? void 0 : he.meta,
      x = ((ot = Y == null ? void 0 : Y.slide) == null ? void 0 : ot.frontmatter.clicksStart) ?? 0
    ;(V = gn(V, x, ((it = Y == null ? void 0 : Y.__clicksContext) == null ? void 0 : it.total) ?? Pt)),
      (ie || rt || se) &&
        (await (o == null
          ? void 0
          : o.push({
              path: Ze(D, s.value),
              query: {
                ...o.currentRoute.value.query,
                clicks: V === 0 ? void 0 : V.toString(),
                embedded: location.search.includes('embedded') ? 'true' : void 0,
              },
            })))
  }
  function j() {
    o == null || o.push({ path: Ze(u.value, !0), query: { ...o.currentRoute.value.query } })
  }
  function q() {
    o == null || o.push({ path: Ze(u.value, !1), query: { ...o.currentRoute.value.query } })
  }
  return {
    slides: ae,
    total: i,
    currentPath: c,
    currentSlideNo: u,
    currentPage: u,
    currentSlideRoute: t,
    currentLayout: h,
    currentTransition: _,
    clicksDirection: l,
    nextRoute: p,
    prevRoute: y,
    clicksContext: e,
    clicks: d,
    clicksStart: f,
    clicksTotal: g,
    hasNext: m,
    hasPrev: v,
    tocTree: T,
    navDirection: a,
    openInEditor: w,
    next: S,
    prev: L,
    go: A,
    goLast: W,
    goFirst: K,
    nextSlide: R,
    prevSlide: N,
    enterPresenter: j,
    exitPresenter: q,
  }
}
const Ra = Gs(() => {
    const t = qt(),
      e = b(() => t.currentRoute.value),
      n = b(() => (t.currentRoute.value.query, new URLSearchParams(location.search))),
      s = b(() => n.value.has('print')),
      r = b(() => n.value.get('print') === 'clicks'),
      o = b(() => n.value.has('embedded')),
      i = b(() => e.value.name === 'play'),
      a = b(() => e.value.name === 'presenter'),
      l = b(() => e.value.name === 'notes'),
      c = b(() => !a.value && (!H.remote || n.value.get('password') === H.remote)),
      u = Wr(i, a),
      h = b(() => {
        var m
        return u.value ? (((m = Jt(e.value.params.no)) == null ? void 0 : m.no) ?? 1) : 1
      }),
      d = b(() => ae.value[h.value - 1]),
      f = La('clicks', '0'),
      g = b(() => y(d.value)),
      p = b({
        get() {
          let m = +(f.value || 0)
          return Number.isNaN(m) && (m = 0), m
        },
        set(m) {
          ;(Dn.value = !1), (f.value = m.toString())
        },
      })
    function y(m) {
      var w, T
      if ((w = m == null ? void 0 : m.meta) != null && w.__clicksContext) return m.meta.__clicksContext
      const v = m.no,
        _ = ar(
          b({
            get() {
              return h.value === v ? Math.max(+(f.value ?? 0), _.clicksStart) : h.value > v ? Pt : _.clicksStart
            },
            set(S) {
              h.value === v && (f.value = S.toString())
            },
          }),
          ((T = m == null ? void 0 : m.meta.slide) == null ? void 0 : T.frontmatter.clicksStart) ?? 0,
          m == null ? void 0 : m.meta.clicks,
        )
      return m != null && m.meta && (m.meta.__clicksContext = _), _
    }
    return {
      router: t,
      currentRoute: e,
      isPrintMode: s,
      isPrintWithClicks: r,
      isEmbedded: o,
      isPlaying: i,
      isPresenter: a,
      isNotesViewer: l,
      isPresenterAvailable: c,
      hasPrimarySlide: u,
      currentSlideNo: h,
      currentSlideRoute: d,
      clicksContext: g,
      queryClicksRaw: f,
      queryClicks: p,
      getPrimaryClicks: y,
    }
  }),
  _n = Gs(() => {
    const t = Ra(),
      e = qt(),
      n = Da(t.currentSlideRoute, t.clicksContext, t.queryClicks, t.isPresenter, t.isPrintMode, e)
    return (
      ee(
        [n.total, t.currentRoute],
        async () => {
          const s = t.currentRoute.value.params.no
          t.hasPrimarySlide.value &&
            !Jt(s) &&
            (s && s !== 'index.html' ? await n.go(n.total.value, 0, !0) : await n.go(1, 0, !0))
        },
        { flush: 'pre', immediate: !0 },
      ),
      { ...n, ...t }
    )
  }),
  Ls = qr(),
  on = te('slidev-color-schema', 'auto'),
  As = b(() => H.colorSchema !== 'auto'),
  dr = b({
    get() {
      return As.value ? H.colorSchema === 'dark' : on.value === 'auto' ? Ls.value : on.value === 'dark'
    },
    set(t) {
      As.value || (on.value = t === Ls.value ? 'auto' : t ? 'dark' : 'light')
    },
  }),
  Oc = Qs(dr)
Ut &&
  ee(
    dr,
    t => {
      const e = document.querySelector('html')
      e.classList.toggle('dark', t), e.classList.toggle('light', !t)
    },
    { immediate: !0 },
  )
const Rn = Symbol.for('yaml.alias'),
  ja = Symbol.for('yaml.document'),
  Ue = Symbol.for('yaml.map'),
  hr = Symbol.for('yaml.pair'),
  jn = Symbol.for('yaml.scalar'),
  yt = Symbol.for('yaml.seq'),
  le = Symbol.for('yaml.node.type'),
  st = t => !!t && typeof t == 'object' && t[le] === Rn,
  Gt = t => !!t && typeof t == 'object' && t[le] === ja,
  gr = t => !!t && typeof t == 'object' && t[le] === Ue,
  B = t => !!t && typeof t == 'object' && t[le] === hr,
  z = t => !!t && typeof t == 'object' && t[le] === jn,
  Hn = t => !!t && typeof t == 'object' && t[le] === yt
function Z(t) {
  if (t && typeof t == 'object')
    switch (t[le]) {
      case Ue:
      case yt:
        return !0
    }
  return !1
}
function U(t) {
  if (t && typeof t == 'object')
    switch (t[le]) {
      case Rn:
      case Ue:
      case jn:
      case yt:
        return !0
    }
  return !1
}
const Ha = t => (z(t) || Z(t)) && !!t.anchor,
  Be = Symbol('break visit'),
  Na = Symbol('skip children'),
  dt = Symbol('remove node')
function pt(t, e) {
  const n = xa(e)
  Gt(t) ? Ye(null, t.contents, n, Object.freeze([t])) === dt && (t.contents = null) : Ye(null, t, n, Object.freeze([]))
}
pt.BREAK = Be
pt.SKIP = Na
pt.REMOVE = dt
function Ye(t, e, n, s) {
  const r = Fa(t, e, n, s)
  if (U(r) || B(r)) return za(t, s, r), Ye(t, r, n, s)
  if (typeof r != 'symbol') {
    if (Z(e)) {
      s = Object.freeze(s.concat(e))
      for (let o = 0; o < e.items.length; ++o) {
        const i = Ye(o, e.items[o], n, s)
        if (typeof i == 'number') o = i - 1
        else {
          if (i === Be) return Be
          i === dt && (e.items.splice(o, 1), (o -= 1))
        }
      }
    } else if (B(e)) {
      s = Object.freeze(s.concat(e))
      const o = Ye('key', e.key, n, s)
      if (o === Be) return Be
      o === dt && (e.key = null)
      const i = Ye('value', e.value, n, s)
      if (i === Be) return Be
      i === dt && (e.value = null)
    }
  }
  return r
}
function xa(t) {
  return typeof t == 'object' && (t.Collection || t.Node || t.Value)
    ? Object.assign(
        { Alias: t.Node, Map: t.Node, Scalar: t.Node, Seq: t.Node },
        t.Value && { Map: t.Value, Scalar: t.Value, Seq: t.Value },
        t.Collection && { Map: t.Collection, Seq: t.Collection },
        t,
      )
    : t
}
function Fa(t, e, n, s) {
  var r, o, i, a, l
  if (typeof n == 'function') return n(t, e, s)
  if (gr(e)) return (r = n.Map) == null ? void 0 : r.call(n, t, e, s)
  if (Hn(e)) return (o = n.Seq) == null ? void 0 : o.call(n, t, e, s)
  if (B(e)) return (i = n.Pair) == null ? void 0 : i.call(n, t, e, s)
  if (z(e)) return (a = n.Scalar) == null ? void 0 : a.call(n, t, e, s)
  if (st(e)) return (l = n.Alias) == null ? void 0 : l.call(n, t, e, s)
}
function za(t, e, n) {
  const s = e[e.length - 1]
  if (Z(s)) s.items[t] = n
  else if (B(s)) t === 'key' ? (s.key = n) : (s.value = n)
  else if (Gt(s)) s.contents = n
  else {
    const r = st(s) ? 'alias' : 'scalar'
    throw new Error(`Cannot replace node with ${r} parent`)
  }
}
function pr(t) {
  if (/[\x00-\x19\s,[\]{}]/.test(t)) {
    const n = `Anchor must not contain whitespace or control characters: ${JSON.stringify(t)}`
    throw new Error(n)
  }
  return !0
}
function ft(t, e, n, s) {
  if (s && typeof s == 'object')
    if (Array.isArray(s))
      for (let r = 0, o = s.length; r < o; ++r) {
        const i = s[r],
          a = ft(t, s, String(r), i)
        a === void 0 ? delete s[r] : a !== i && (s[r] = a)
      }
    else if (s instanceof Map)
      for (const r of Array.from(s.keys())) {
        const o = s.get(r),
          i = ft(t, s, r, o)
        i === void 0 ? s.delete(r) : i !== o && s.set(r, i)
      }
    else if (s instanceof Set)
      for (const r of Array.from(s)) {
        const o = ft(t, s, r, r)
        o === void 0 ? s.delete(r) : o !== r && (s.delete(r), s.add(o))
      }
    else
      for (const [r, o] of Object.entries(s)) {
        const i = ft(t, s, r, o)
        i === void 0 ? delete s[r] : i !== o && (s[r] = i)
      }
  return t.call(e, n, s)
}
function oe(t, e, n) {
  if (Array.isArray(t)) return t.map((s, r) => oe(s, String(r), n))
  if (t && typeof t.toJSON == 'function') {
    if (!n || !Ha(t)) return t.toJSON(e, n)
    const s = { aliasCount: 0, count: 1, res: void 0 }
    n.anchors.set(t, s),
      (n.onCreate = o => {
        ;(s.res = o), delete n.onCreate
      })
    const r = t.toJSON(e, n)
    return n.onCreate && n.onCreate(r), r
  }
  return typeof t == 'bigint' && !(n != null && n.keep) ? Number(t) : t
}
class Nn {
  constructor(e) {
    Object.defineProperty(this, le, { value: e })
  }
  clone() {
    const e = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this))
    return this.range && (e.range = this.range.slice()), e
  }
  toJS(e, { mapAsMap: n, maxAliasCount: s, onAnchor: r, reviver: o } = {}) {
    if (!Gt(e)) throw new TypeError('A document argument is required')
    const i = {
        anchors: new Map(),
        doc: e,
        keep: !0,
        mapAsMap: n === !0,
        mapKeyWarned: !1,
        maxAliasCount: typeof s == 'number' ? s : 100,
      },
      a = oe(this, '', i)
    if (typeof r == 'function') for (const { count: l, res: c } of i.anchors.values()) r(c, l)
    return typeof o == 'function' ? ft(o, { '': a }, '', a) : a
  }
}
class Va extends Nn {
  constructor(e) {
    super(Rn),
      (this.source = e),
      Object.defineProperty(this, 'tag', {
        set() {
          throw new Error('Alias nodes cannot have tags')
        },
      })
  }
  resolve(e) {
    let n
    return (
      pt(e, {
        Node: (s, r) => {
          if (r === this) return pt.BREAK
          r.anchor === this.source && (n = r)
        },
      }),
      n
    )
  }
  toJSON(e, n) {
    if (!n) return { source: this.source }
    const { anchors: s, doc: r, maxAliasCount: o } = n,
      i = this.resolve(r)
    if (!i) {
      const l = `Unresolved alias (the anchor must be set before the alias): ${this.source}`
      throw new ReferenceError(l)
    }
    let a = s.get(i)
    if ((a || (oe(i, null, n), (a = s.get(i))), !a || a.res === void 0)) {
      const l = 'This should not happen: Alias anchor was not resolved?'
      throw new ReferenceError(l)
    }
    if (o >= 0 && ((a.count += 1), a.aliasCount === 0 && (a.aliasCount = $t(r, i, s)), a.count * a.aliasCount > o)) {
      const l = 'Excessive alias count indicates a resource exhaustion attack'
      throw new ReferenceError(l)
    }
    return a.res
  }
  toString(e, n, s) {
    const r = `*${this.source}`
    if (e) {
      if ((pr(this.source), e.options.verifyAliasOrder && !e.anchors.has(this.source))) {
        const o = `Unresolved alias (the anchor must be set before the alias): ${this.source}`
        throw new Error(o)
      }
      if (e.implicitKey) return `${r} `
    }
    return r
  }
}
function $t(t, e, n) {
  if (st(e)) {
    const s = e.resolve(t),
      r = n && s && n.get(s)
    return r ? r.count * r.aliasCount : 0
  } else if (Z(e)) {
    let s = 0
    for (const r of e.items) {
      const o = $t(t, r, n)
      o > s && (s = o)
    }
    return s
  } else if (B(e)) {
    const s = $t(t, e.key, n),
      r = $t(t, e.value, n)
    return Math.max(s, r)
  }
  return 1
}
const mr = t => !t || (typeof t != 'function' && typeof t != 'object')
class F extends Nn {
  constructor(e) {
    super(jn), (this.value = e)
  }
  toJSON(e, n) {
    return n != null && n.keep ? this.value : oe(this.value, e, n)
  }
  toString() {
    return String(this.value)
  }
}
F.BLOCK_FOLDED = 'BLOCK_FOLDED'
F.BLOCK_LITERAL = 'BLOCK_LITERAL'
F.PLAIN = 'PLAIN'
F.QUOTE_DOUBLE = 'QUOTE_DOUBLE'
F.QUOTE_SINGLE = 'QUOTE_SINGLE'
function Ba(t, e, n) {
  return n.find(s => {
    var r
    return ((r = s.identify) == null ? void 0 : r.call(s, t)) && !s.format
  })
}
function Ht(t, e, n) {
  var h, d, f
  if ((Gt(t) && (t = t.contents), U(t))) return t
  if (B(t)) {
    const g = (d = (h = n.schema[Ue]).createNode) == null ? void 0 : d.call(h, n.schema, null, n)
    return g.items.push(t), g
  }
  ;(t instanceof String ||
    t instanceof Number ||
    t instanceof Boolean ||
    (typeof BigInt < 'u' && t instanceof BigInt)) &&
    (t = t.valueOf())
  const { aliasDuplicateObjects: s, onAnchor: r, onTagObj: o, schema: i, sourceObjects: a } = n
  let l
  if (s && t && typeof t == 'object') {
    if (((l = a.get(t)), l)) return l.anchor || (l.anchor = r(t)), new Va(l.anchor)
    ;(l = { anchor: null, node: null }), a.set(t, l)
  }
  let c = Ba(t, e, i.tags)
  if (!c) {
    if ((t && typeof t.toJSON == 'function' && (t = t.toJSON()), !t || typeof t != 'object')) {
      const g = new F(t)
      return l && (l.node = g), g
    }
    c = t instanceof Map ? i[Ue] : Symbol.iterator in Object(t) ? i[yt] : i[Ue]
  }
  o && (o(c), delete n.onTagObj)
  const u =
    c != null && c.createNode
      ? c.createNode(n.schema, t, n)
      : typeof ((f = c == null ? void 0 : c.nodeClass) == null ? void 0 : f.from) == 'function'
        ? c.nodeClass.from(n.schema, t, n)
        : new F(t)
  return c.default || (u.tag = c.tag), l && (l.node = u), u
}
function Es(t, e, n) {
  let s = n
  for (let r = e.length - 1; r >= 0; --r) {
    const o = e[r]
    if (typeof o == 'number' && Number.isInteger(o) && o >= 0) {
      const i = []
      ;(i[o] = s), (s = i)
    } else s = new Map([[o, s]])
  }
  return Ht(s, void 0, {
    aliasDuplicateObjects: !1,
    keepUndefined: !1,
    onAnchor: () => {
      throw new Error('This should not happen, please report a bug.')
    },
    schema: t,
    sourceObjects: new Map(),
  })
}
const Wa = t => t == null || (typeof t == 'object' && !!t[Symbol.iterator]().next().done)
class yr extends Nn {
  constructor(e, n) {
    super(e), Object.defineProperty(this, 'schema', { value: n, configurable: !0, enumerable: !1, writable: !0 })
  }
  clone(e) {
    const n = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this))
    return (
      e && (n.schema = e),
      (n.items = n.items.map(s => (U(s) || B(s) ? s.clone(e) : s))),
      this.range && (n.range = this.range.slice()),
      n
    )
  }
  addIn(e, n) {
    if (Wa(e)) this.add(n)
    else {
      const [s, ...r] = e,
        o = this.get(s, !0)
      if (Z(o)) o.addIn(r, n)
      else if (o === void 0 && this.schema) this.set(s, Es(this.schema, r, n))
      else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${r}`)
    }
  }
  deleteIn(e) {
    const [n, ...s] = e
    if (s.length === 0) return this.delete(n)
    const r = this.get(n, !0)
    if (Z(r)) return r.deleteIn(s)
    throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)
  }
  getIn(e, n) {
    const [s, ...r] = e,
      o = this.get(s, !0)
    return r.length === 0 ? (!n && z(o) ? o.value : o) : Z(o) ? o.getIn(r, n) : void 0
  }
  hasAllNullValues(e) {
    return this.items.every(n => {
      if (!B(n)) return !1
      const s = n.value
      return s == null || (e && z(s) && s.value == null && !s.commentBefore && !s.comment && !s.tag)
    })
  }
  hasIn(e) {
    const [n, ...s] = e
    if (s.length === 0) return this.has(n)
    const r = this.get(n, !0)
    return Z(r) ? r.hasIn(s) : !1
  }
  setIn(e, n) {
    const [s, ...r] = e
    if (r.length === 0) this.set(s, n)
    else {
      const o = this.get(s, !0)
      if (Z(o)) o.setIn(r, n)
      else if (o === void 0 && this.schema) this.set(s, Es(this.schema, r, n))
      else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${r}`)
    }
  }
}
const qa = t => t.replace(/^(?!$)(?: $)?/gm, '#')
function mt(t, e) {
  return /^\n+$/.test(t) ? t.substring(1) : e ? t.replace(/^(?! *$)/gm, e) : t
}
const Xe = (t, e, n) =>
    t.endsWith(`
`)
      ? mt(n, e)
      : n.includes(`
`)
        ? `
` + mt(n, e)
        : (t.endsWith(' ') ? '' : ' ') + n,
  vr = 'flow',
  kn = 'block',
  Lt = 'quoted'
function Qt(
  t,
  e,
  n = 'flow',
  { indentAtStart: s, lineWidth: r = 80, minContentWidth: o = 20, onFold: i, onOverflow: a } = {},
) {
  if (!r || r < 0) return t
  r < o && (o = 0)
  const l = Math.max(1 + o, 1 + r - e.length)
  if (t.length <= l) return t
  const c = [],
    u = {}
  let h = r - e.length
  typeof s == 'number' && (s > r - Math.max(2, o) ? c.push(0) : (h = r - s))
  let d,
    f,
    g = !1,
    p = -1,
    y = -1,
    m = -1
  n === kn && ((p = Cs(t, p, e.length)), p !== -1 && (h = p + l))
  for (let _; (_ = t[(p += 1)]); ) {
    if (n === Lt && _ === '\\') {
      switch (((y = p), t[p + 1])) {
        case 'x':
          p += 3
          break
        case 'u':
          p += 5
          break
        case 'U':
          p += 9
          break
        default:
          p += 1
      }
      m = p
    }
    if (
      _ ===
      `
`
    )
      n === kn && (p = Cs(t, p, e.length)), (h = p + e.length + l), (d = void 0)
    else {
      if (
        _ === ' ' &&
        f &&
        f !== ' ' &&
        f !==
          `
` &&
        f !== '	'
      ) {
        const w = t[p + 1]
        w &&
          w !== ' ' &&
          w !==
            `
` &&
          w !== '	' &&
          (d = p)
      }
      if (p >= h)
        if (d) c.push(d), (h = d + l), (d = void 0)
        else if (n === Lt) {
          for (; f === ' ' || f === '	'; ) (f = _), (_ = t[(p += 1)]), (g = !0)
          const w = p > m + 1 ? p - 2 : y - 1
          if (u[w]) return t
          c.push(w), (u[w] = !0), (h = w + l), (d = void 0)
        } else g = !0
    }
    f = _
  }
  if ((g && a && a(), c.length === 0)) return t
  i && i()
  let v = t.slice(0, c[0])
  for (let _ = 0; _ < c.length; ++_) {
    const w = c[_],
      T = c[_ + 1] || t.length
    w === 0
      ? (v = `
${e}${t.slice(0, T)}`)
      : (n === Lt && u[w] && (v += `${t[w]}\\`),
        (v += `
${e}${t.slice(w + 1, T)}`))
  }
  return v
}
function Cs(t, e, n) {
  let s = e,
    r = e + 1,
    o = t[r]
  for (; o === ' ' || o === '	'; )
    if (e < r + n) o = t[++e]
    else {
      do o = t[++e]
      while (
        o &&
        o !==
          `
`
      )
      ;(s = e), (r = e + 1), (o = t[r])
    }
  return s
}
const Zt = (t, e) => ({
    indentAtStart: e ? t.indent.length : t.indentAtStart,
    lineWidth: t.options.lineWidth,
    minContentWidth: t.options.minContentWidth,
  }),
  Yt = t => /^(%|---|\.\.\.)/m.test(t)
function Ua(t, e, n) {
  if (!e || e < 0) return !1
  const s = e - n,
    r = t.length
  if (r <= s) return !1
  for (let o = 0, i = 0; o < r; ++o)
    if (
      t[o] ===
      `
`
    ) {
      if (o - i > s) return !0
      if (((i = o + 1), r - i <= s)) return !1
    }
  return !0
}
function ht(t, e) {
  const n = JSON.stringify(t)
  if (e.options.doubleQuotedAsJSON) return n
  const { implicitKey: s } = e,
    r = e.options.doubleQuotedMinMultiLineLength,
    o = e.indent || (Yt(t) ? '  ' : '')
  let i = '',
    a = 0
  for (let l = 0, c = n[l]; c; c = n[++l])
    if (
      (c === ' ' &&
        n[l + 1] === '\\' &&
        n[l + 2] === 'n' &&
        ((i += n.slice(a, l) + '\\ '), (l += 1), (a = l), (c = '\\')),
      c === '\\')
    )
      switch (n[l + 1]) {
        case 'u':
          {
            i += n.slice(a, l)
            const u = n.substr(l + 2, 4)
            switch (u) {
              case '0000':
                i += '\\0'
                break
              case '0007':
                i += '\\a'
                break
              case '000b':
                i += '\\v'
                break
              case '001b':
                i += '\\e'
                break
              case '0085':
                i += '\\N'
                break
              case '00a0':
                i += '\\_'
                break
              case '2028':
                i += '\\L'
                break
              case '2029':
                i += '\\P'
                break
              default:
                u.substr(0, 2) === '00' ? (i += '\\x' + u.substr(2)) : (i += n.substr(l, 6))
            }
            ;(l += 5), (a = l + 1)
          }
          break
        case 'n':
          if (s || n[l + 2] === '"' || n.length < r) l += 1
          else {
            for (
              i +=
                n.slice(a, l) +
                `

`;
              n[l + 2] === '\\' && n[l + 3] === 'n' && n[l + 4] !== '"';

            )
              (i += `
`),
                (l += 2)
            ;(i += o), n[l + 2] === ' ' && (i += '\\'), (l += 1), (a = l + 1)
          }
          break
        default:
          l += 1
      }
  return (i = a ? i + n.slice(a) : n), s ? i : Qt(i, o, Lt, Zt(e, !1))
}
function bn(t, e) {
  if (
    e.options.singleQuote === !1 ||
    (e.implicitKey &&
      t.includes(`
`)) ||
    /[ \t]\n|\n[ \t]/.test(t)
  )
    return ht(t, e)
  const n = e.indent || (Yt(t) ? '  ' : ''),
    s =
      "'" +
      t.replace(/'/g, "''").replace(
        /\n+/g,
        `$&
${n}`,
      ) +
      "'"
  return e.implicitKey ? s : Qt(s, n, vr, Zt(e, !1))
}
function et(t, e) {
  const { singleQuote: n } = e.options
  let s
  if (n === !1) s = ht
  else {
    const r = t.includes('"'),
      o = t.includes("'")
    r && !o ? (s = bn) : o && !r ? (s = ht) : (s = n ? bn : ht)
  }
  return s(t, e)
}
let wn
try {
  wn = new RegExp(
    `(^|(?<!
))
+(?!
|$)`,
    'g',
  )
} catch {
  wn = /\n+(?!\n|$)/g
}
function At({ comment: t, type: e, value: n }, s, r, o) {
  const { blockQuote: i, commentString: a, lineWidth: l } = s.options
  if (!i || /\n[\t ]+$/.test(n) || /^\s*$/.test(n)) return et(n, s)
  const c = s.indent || (s.forceBlockIndent || Yt(n) ? '  ' : ''),
    u =
      i === 'literal'
        ? !0
        : i === 'folded' || e === F.BLOCK_FOLDED
          ? !1
          : e === F.BLOCK_LITERAL
            ? !0
            : !Ua(n, l, c.length)
  if (!n)
    return u
      ? `|
`
      : `>
`
  let h, d
  for (d = n.length; d > 0; --d) {
    const S = n[d - 1]
    if (
      S !==
        `
` &&
      S !== '	' &&
      S !== ' '
    )
      break
  }
  let f = n.substring(d)
  const g = f.indexOf(`
`)
  g === -1 ? (h = '-') : n === f || g !== f.length - 1 ? ((h = '+'), o && o()) : (h = ''),
    f &&
      ((n = n.slice(0, -f.length)),
      f[f.length - 1] ===
        `
` && (f = f.slice(0, -1)),
      (f = f.replace(wn, `$&${c}`)))
  let p = !1,
    y,
    m = -1
  for (y = 0; y < n.length; ++y) {
    const S = n[y]
    if (S === ' ') p = !0
    else if (
      S ===
      `
`
    )
      m = y
    else break
  }
  let v = n.substring(0, m < y ? m + 1 : y)
  v && ((n = n.substring(v.length)), (v = v.replace(/\n+/g, `$&${c}`)))
  let w = (u ? '|' : '>') + (p ? (c ? '2' : '1') : '') + h
  if ((t && ((w += ' ' + a(t.replace(/ ?[\r\n]+/g, ' '))), r && r()), u))
    return (
      (n = n.replace(/\n+/g, `$&${c}`)),
      `${w}
${c}${v}${n}${f}`
    )
  n = n
    .replace(
      /\n+/g,
      `
$&`,
    )
    .replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, '$1$2')
    .replace(/\n+/g, `$&${c}`)
  const T = Qt(`${v}${n}${f}`, c, kn, Zt(s, !0))
  return `${w}
${c}${T}`
}
function Ka(t, e, n, s) {
  const { type: r, value: o } = t,
    { actualString: i, implicitKey: a, indent: l, indentStep: c, inFlow: u } = e
  if (
    (a &&
      o.includes(`
`)) ||
    (u && /[[\]{},]/.test(o))
  )
    return et(o, e)
  if (!o || /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(o))
    return a ||
      u ||
      !o.includes(`
`)
      ? et(o, e)
      : At(t, e, n, s)
  if (
    !a &&
    !u &&
    r !== F.PLAIN &&
    o.includes(`
`)
  )
    return At(t, e, n, s)
  if (Yt(o)) {
    if (l === '') return (e.forceBlockIndent = !0), At(t, e, n, s)
    if (a && l === c) return et(o, e)
  }
  const h = o.replace(
    /\n+/g,
    `$&
${l}`,
  )
  if (i) {
    const d = p => {
        var y
        return p.default && p.tag !== 'tag:yaml.org,2002:str' && ((y = p.test) == null ? void 0 : y.test(h))
      },
      { compat: f, tags: g } = e.doc.schema
    if (g.some(d) || (f != null && f.some(d))) return et(o, e)
  }
  return a ? h : Qt(h, l, vr, Zt(e, !1))
}
function Ja(t, e, n, s) {
  const { implicitKey: r, inFlow: o } = e,
    i = typeof t.value == 'string' ? t : Object.assign({}, t, { value: String(t.value) })
  let { type: a } = t
  a !== F.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(i.value) && (a = F.QUOTE_DOUBLE)
  const l = u => {
    switch (u) {
      case F.BLOCK_FOLDED:
      case F.BLOCK_LITERAL:
        return r || o ? et(i.value, e) : At(i, e, n, s)
      case F.QUOTE_DOUBLE:
        return ht(i.value, e)
      case F.QUOTE_SINGLE:
        return bn(i.value, e)
      case F.PLAIN:
        return Ka(i, e, n, s)
      default:
        return null
    }
  }
  let c = l(a)
  if (c === null) {
    const { defaultKeyType: u, defaultStringType: h } = e.options,
      d = (r && u) || h
    if (((c = l(d)), c === null)) throw new Error(`Unsupported default string type ${d}`)
  }
  return c
}
function Ga(t, e) {
  const n = Object.assign(
    {
      blockQuote: !0,
      commentString: qa,
      defaultKeyType: null,
      defaultStringType: 'PLAIN',
      directives: null,
      doubleQuotedAsJSON: !1,
      doubleQuotedMinMultiLineLength: 40,
      falseStr: 'false',
      flowCollectionPadding: !0,
      indentSeq: !0,
      lineWidth: 80,
      minContentWidth: 20,
      nullStr: 'null',
      simpleKeys: !1,
      singleQuote: null,
      trueStr: 'true',
      verifyAliasOrder: !0,
    },
    t.schema.toStringOptions,
    e,
  )
  let s
  switch (n.collectionStyle) {
    case 'block':
      s = !1
      break
    case 'flow':
      s = !0
      break
    default:
      s = null
  }
  return {
    anchors: new Set(),
    doc: t,
    flowCollectionPadding: n.flowCollectionPadding ? ' ' : '',
    indent: '',
    indentStep: typeof n.indent == 'number' ? ' '.repeat(n.indent) : '  ',
    inFlow: s,
    options: n,
  }
}
function Qa(t, e) {
  var r
  if (e.tag) {
    const o = t.filter(i => i.tag === e.tag)
    if (o.length > 0) return o.find(i => i.format === e.format) ?? o[0]
  }
  let n, s
  if (z(e)) {
    s = e.value
    const o = t.filter(i => {
      var a
      return (a = i.identify) == null ? void 0 : a.call(i, s)
    })
    n = o.find(i => i.format === e.format) ?? o.find(i => !i.format)
  } else (s = e), (n = t.find(o => o.nodeClass && s instanceof o.nodeClass))
  if (!n) {
    const o = ((r = s == null ? void 0 : s.constructor) == null ? void 0 : r.name) ?? typeof s
    throw new Error(`Tag not resolved for ${o} value`)
  }
  return n
}
function Za(t, e, { anchors: n, doc: s }) {
  if (!s.directives) return ''
  const r = [],
    o = (z(t) || Z(t)) && t.anchor
  o && pr(o) && (n.add(o), r.push(`&${o}`))
  const i = t.tag ? t.tag : e.default ? null : e.tag
  return i && r.push(s.directives.tagString(i)), r.join(' ')
}
function Nt(t, e, n, s) {
  var l
  if (B(t)) return t.toString(e, n, s)
  if (st(t)) {
    if (e.doc.directives) return t.toString(e)
    if ((l = e.resolvedAliases) != null && l.has(t))
      throw new TypeError('Cannot stringify circular structure without alias nodes')
    e.resolvedAliases ? e.resolvedAliases.add(t) : (e.resolvedAliases = new Set([t])), (t = t.resolve(e.doc))
  }
  let r
  const o = U(t) ? t : e.doc.createNode(t, { onTagObj: c => (r = c) })
  r || (r = Qa(e.doc.schema.tags, o))
  const i = Za(o, r, e)
  i.length > 0 && (e.indentAtStart = (e.indentAtStart ?? 0) + i.length + 1)
  const a = typeof r.stringify == 'function' ? r.stringify(o, e, n, s) : z(o) ? Ja(o, e, n, s) : o.toString(e, n, s)
  return i
    ? z(o) || a[0] === '{' || a[0] === '['
      ? `${i} ${a}`
      : `${i}
${e.indent}${a}`
    : a
}
function Ya({ key: t, value: e }, n, s, r) {
  const {
    allNullValues: o,
    doc: i,
    indent: a,
    indentStep: l,
    options: { commentString: c, indentSeq: u, simpleKeys: h },
  } = n
  let d = (U(t) && t.comment) || null
  if (h) {
    if (d) throw new Error('With simple keys, key nodes cannot have comments')
    if (Z(t) || (!U(t) && typeof t == 'object')) {
      const L = 'With simple keys, collection cannot be used as a key value'
      throw new Error(L)
    }
  }
  let f =
    !h &&
    (!t ||
      (d && e == null && !n.inFlow) ||
      Z(t) ||
      (z(t) ? t.type === F.BLOCK_FOLDED || t.type === F.BLOCK_LITERAL : typeof t == 'object'))
  n = Object.assign({}, n, { allNullValues: !1, implicitKey: !f && (h || !o), indent: a + l })
  let g = !1,
    p = !1,
    y = Nt(
      t,
      n,
      () => (g = !0),
      () => (p = !0),
    )
  if (!f && !n.inFlow && y.length > 1024) {
    if (h) throw new Error('With simple keys, single line scalar must not span more than 1024 characters')
    f = !0
  }
  if (n.inFlow) {
    if (o || e == null) return g && s && s(), y === '' ? '?' : f ? `? ${y}` : y
  } else if ((o && !h) || (e == null && f))
    return (y = `? ${y}`), d && !g ? (y += Xe(y, n.indent, c(d))) : p && r && r(), y
  g && (d = null),
    f
      ? (d && (y += Xe(y, n.indent, c(d))),
        (y = `? ${y}
${a}:`))
      : ((y = `${y}:`), d && (y += Xe(y, n.indent, c(d))))
  let m, v, _
  U(e)
    ? ((m = !!e.spaceBefore), (v = e.commentBefore), (_ = e.comment))
    : ((m = !1), (v = null), (_ = null), e && typeof e == 'object' && (e = i.createNode(e))),
    (n.implicitKey = !1),
    !f && !d && z(e) && (n.indentAtStart = y.length + 1),
    (p = !1),
    !u &&
      l.length >= 2 &&
      !n.inFlow &&
      !f &&
      Hn(e) &&
      !e.flow &&
      !e.tag &&
      !e.anchor &&
      (n.indent = n.indent.substring(2))
  let w = !1
  const T = Nt(
    e,
    n,
    () => (w = !0),
    () => (p = !0),
  )
  let S = ' '
  if (d || m || v) {
    if (
      ((S = m
        ? `
`
        : ''),
      v)
    ) {
      const L = c(v)
      S += `
${mt(L, n.indent)}`
    }
    T === '' && !n.inFlow
      ? S ===
          `
` &&
        (S = `

`)
      : (S += `
${n.indent}`)
  } else if (!f && Z(e)) {
    const L = T[0],
      R = T.indexOf(`
`),
      N = R !== -1,
      K = n.inFlow ?? e.flow ?? e.items.length === 0
    if (N || !K) {
      let W = !1
      if (N && (L === '&' || L === '!')) {
        let A = T.indexOf(' ')
        L === '&' && A !== -1 && A < R && T[A + 1] === '!' && (A = T.indexOf(' ', A + 1)),
          (A === -1 || R < A) && (W = !0)
      }
      W ||
        (S = `
${n.indent}`)
    }
  } else
    (T === '' ||
      T[0] ===
        `
`) &&
      (S = '')
  return (y += S + T), n.inFlow ? w && s && s() : _ && !w ? (y += Xe(y, n.indent, c(_))) : p && r && r(), y
}
function Xa(t, e) {
  ;(t === 'debug' || t === 'warn') &&
    (typeof process < 'u' && process.emitWarning ? process.emitWarning(e) : console.warn(e))
}
const Is = '<<'
function _r(t, e, { key: n, value: s }) {
  if (t != null && t.doc.schema.merge && el(n))
    if (((s = st(s) ? s.resolve(t.doc) : s), Hn(s))) for (const r of s.items) an(t, e, r)
    else if (Array.isArray(s)) for (const r of s) an(t, e, r)
    else an(t, e, s)
  else {
    const r = oe(n, '', t)
    if (e instanceof Map) e.set(r, oe(s, r, t))
    else if (e instanceof Set) e.add(r)
    else {
      const o = tl(n, r, t),
        i = oe(s, o, t)
      o in e ? Object.defineProperty(e, o, { value: i, writable: !0, enumerable: !0, configurable: !0 }) : (e[o] = i)
    }
  }
  return e
}
const el = t => t === Is || (z(t) && t.value === Is && (!t.type || t.type === F.PLAIN))
function an(t, e, n) {
  const s = t && st(n) ? n.resolve(t.doc) : n
  if (!gr(s)) throw new Error('Merge sources must be maps or map aliases')
  const r = s.toJSON(null, t, Map)
  for (const [o, i] of r)
    e instanceof Map
      ? e.has(o) || e.set(o, i)
      : e instanceof Set
        ? e.add(o)
        : Object.prototype.hasOwnProperty.call(e, o) ||
          Object.defineProperty(e, o, { value: i, writable: !0, enumerable: !0, configurable: !0 })
  return e
}
function tl(t, e, n) {
  if (e === null) return ''
  if (typeof e != 'object') return String(e)
  if (U(t) && n != null && n.doc) {
    const s = Ga(n.doc, {})
    s.anchors = new Set()
    for (const o of n.anchors.keys()) s.anchors.add(o.anchor)
    ;(s.inFlow = !0), (s.inStringifyKey = !0)
    const r = t.toString(s)
    if (!n.mapKeyWarned) {
      let o = JSON.stringify(r)
      o.length > 40 && (o = o.substring(0, 36) + '..."'),
        Xa(
          n.doc.options.logLevel,
          `Keys with collection values will be stringified due to JS Object restrictions: ${o}. Set mapAsMap: true to use object keys.`,
        ),
        (n.mapKeyWarned = !0)
    }
    return r
  }
  return JSON.stringify(e)
}
function xn(t, e, n) {
  const s = Ht(t, void 0, n),
    r = Ht(e, void 0, n)
  return new ce(s, r)
}
class ce {
  constructor(e, n = null) {
    Object.defineProperty(this, le, { value: hr }), (this.key = e), (this.value = n)
  }
  clone(e) {
    let { key: n, value: s } = this
    return U(n) && (n = n.clone(e)), U(s) && (s = s.clone(e)), new ce(n, s)
  }
  toJSON(e, n) {
    const s = n != null && n.mapAsMap ? new Map() : {}
    return _r(n, s, this)
  }
  toString(e, n, s) {
    return e != null && e.doc ? Ya(this, e, n, s) : JSON.stringify(this)
  }
}
function kr(t, e, n) {
  return ((e.inFlow ?? t.flow) ? sl : nl)(t, e, n)
}
function nl(
  { comment: t, items: e },
  n,
  { blockItemPrefix: s, flowChars: r, itemIndent: o, onChompKeep: i, onComment: a },
) {
  const {
      indent: l,
      options: { commentString: c },
    } = n,
    u = Object.assign({}, n, { indent: o, type: null })
  let h = !1
  const d = []
  for (let g = 0; g < e.length; ++g) {
    const p = e[g]
    let y = null
    if (U(p)) !h && p.spaceBefore && d.push(''), xt(n, d, p.commentBefore, h), p.comment && (y = p.comment)
    else if (B(p)) {
      const v = U(p.key) ? p.key : null
      v && (!h && v.spaceBefore && d.push(''), xt(n, d, v.commentBefore, h))
    }
    h = !1
    let m = Nt(
      p,
      u,
      () => (y = null),
      () => (h = !0),
    )
    y && (m += Xe(m, o, c(y))), h && y && (h = !1), d.push(s + m)
  }
  let f
  if (d.length === 0) f = r.start + r.end
  else {
    f = d[0]
    for (let g = 1; g < d.length; ++g) {
      const p = d[g]
      f += p
        ? `
${l}${p}`
        : `
`
    }
  }
  return (
    t
      ? ((f +=
          `
` + mt(c(t), l)),
        a && a())
      : h && i && i(),
    f
  )
}
function sl({ items: t }, e, { flowChars: n, itemIndent: s }) {
  const {
    indent: r,
    indentStep: o,
    flowCollectionPadding: i,
    options: { commentString: a },
  } = e
  s += o
  const l = Object.assign({}, e, { indent: s, inFlow: !0, type: null })
  let c = !1,
    u = 0
  const h = []
  for (let g = 0; g < t.length; ++g) {
    const p = t[g]
    let y = null
    if (U(p)) p.spaceBefore && h.push(''), xt(e, h, p.commentBefore, !1), p.comment && (y = p.comment)
    else if (B(p)) {
      const v = U(p.key) ? p.key : null
      v && (v.spaceBefore && h.push(''), xt(e, h, v.commentBefore, !1), v.comment && (c = !0))
      const _ = U(p.value) ? p.value : null
      _
        ? (_.comment && (y = _.comment), _.commentBefore && (c = !0))
        : p.value == null && v != null && v.comment && (y = v.comment)
    }
    y && (c = !0)
    let m = Nt(p, l, () => (y = null))
    g < t.length - 1 && (m += ','),
      y && (m += Xe(m, s, a(y))),
      !c &&
        (h.length > u ||
          m.includes(`
`)) &&
        (c = !0),
      h.push(m),
      (u = h.length)
  }
  const { start: d, end: f } = n
  if (h.length === 0) return d + f
  if (!c) {
    const g = h.reduce((p, y) => p + y.length + 2, 2)
    c = e.options.lineWidth > 0 && g > e.options.lineWidth
  }
  if (c) {
    let g = d
    for (const p of h)
      g += p
        ? `
${o}${r}${p}`
        : `
`
    return `${g}
${r}${f}`
  } else return `${d}${i}${h.join(' ')}${i}${f}`
}
function xt({ indent: t, options: { commentString: e } }, n, s, r) {
  if ((s && r && (s = s.replace(/^\n+/, '')), s)) {
    const o = mt(e(s), t)
    n.push(o.trimStart())
  }
}
function qe(t, e) {
  const n = z(e) ? e.value : e
  for (const s of t) if (B(s) && (s.key === e || s.key === n || (z(s.key) && s.key.value === n))) return s
}
class Ge extends yr {
  static get tagName() {
    return 'tag:yaml.org,2002:map'
  }
  constructor(e) {
    super(Ue, e), (this.items = [])
  }
  static from(e, n, s) {
    const { keepUndefined: r, replacer: o } = s,
      i = new this(e),
      a = (l, c) => {
        if (typeof o == 'function') c = o.call(n, l, c)
        else if (Array.isArray(o) && !o.includes(l)) return
        ;(c !== void 0 || r) && i.items.push(xn(l, c, s))
      }
    if (n instanceof Map) for (const [l, c] of n) a(l, c)
    else if (n && typeof n == 'object') for (const l of Object.keys(n)) a(l, n[l])
    return typeof e.sortMapEntries == 'function' && i.items.sort(e.sortMapEntries), i
  }
  add(e, n) {
    var i
    let s
    B(e)
      ? (s = e)
      : !e || typeof e != 'object' || !('key' in e)
        ? (s = new ce(e, e == null ? void 0 : e.value))
        : (s = new ce(e.key, e.value))
    const r = qe(this.items, s.key),
      o = (i = this.schema) == null ? void 0 : i.sortMapEntries
    if (r) {
      if (!n) throw new Error(`Key ${s.key} already set`)
      z(r.value) && mr(s.value) ? (r.value.value = s.value) : (r.value = s.value)
    } else if (o) {
      const a = this.items.findIndex(l => o(s, l) < 0)
      a === -1 ? this.items.push(s) : this.items.splice(a, 0, s)
    } else this.items.push(s)
  }
  delete(e) {
    const n = qe(this.items, e)
    return n ? this.items.splice(this.items.indexOf(n), 1).length > 0 : !1
  }
  get(e, n) {
    const s = qe(this.items, e),
      r = s == null ? void 0 : s.value
    return (!n && z(r) ? r.value : r) ?? void 0
  }
  has(e) {
    return !!qe(this.items, e)
  }
  set(e, n) {
    this.add(new ce(e, n), !0)
  }
  toJSON(e, n, s) {
    const r = s ? new s() : n != null && n.mapAsMap ? new Map() : {}
    n != null && n.onCreate && n.onCreate(r)
    for (const o of this.items) _r(n, r, o)
    return r
  }
  toString(e, n, s) {
    if (!e) return JSON.stringify(this)
    for (const r of this.items)
      if (!B(r)) throw new Error(`Map items must all be pairs; found ${JSON.stringify(r)} instead`)
    return (
      !e.allNullValues && this.hasAllNullValues(!1) && (e = Object.assign({}, e, { allNullValues: !0 })),
      kr(this, e, {
        blockItemPrefix: '',
        flowChars: { start: '{', end: '}' },
        itemIndent: e.indent || '',
        onChompKeep: s,
        onComment: n,
      })
    )
  }
}
class br extends yr {
  static get tagName() {
    return 'tag:yaml.org,2002:seq'
  }
  constructor(e) {
    super(yt, e), (this.items = [])
  }
  add(e) {
    this.items.push(e)
  }
  delete(e) {
    const n = kt(e)
    return typeof n != 'number' ? !1 : this.items.splice(n, 1).length > 0
  }
  get(e, n) {
    const s = kt(e)
    if (typeof s != 'number') return
    const r = this.items[s]
    return !n && z(r) ? r.value : r
  }
  has(e) {
    const n = kt(e)
    return typeof n == 'number' && n < this.items.length
  }
  set(e, n) {
    const s = kt(e)
    if (typeof s != 'number') throw new Error(`Expected a valid index, not ${e}.`)
    const r = this.items[s]
    z(r) && mr(n) ? (r.value = n) : (this.items[s] = n)
  }
  toJSON(e, n) {
    const s = []
    n != null && n.onCreate && n.onCreate(s)
    let r = 0
    for (const o of this.items) s.push(oe(o, String(r++), n))
    return s
  }
  toString(e, n, s) {
    return e
      ? kr(this, e, {
          blockItemPrefix: '- ',
          flowChars: { start: '[', end: ']' },
          itemIndent: (e.indent || '') + '  ',
          onChompKeep: s,
          onComment: n,
        })
      : JSON.stringify(this)
  }
  static from(e, n, s) {
    const { replacer: r } = s,
      o = new this(e)
    if (n && Symbol.iterator in Object(n)) {
      let i = 0
      for (let a of n) {
        if (typeof r == 'function') {
          const l = n instanceof Set ? a : String(i++)
          a = r.call(n, l, a)
        }
        o.items.push(Ht(a, void 0, s))
      }
    }
    return o
  }
}
function kt(t) {
  let e = z(t) ? t.value : t
  return e && typeof e == 'string' && (e = Number(e)), typeof e == 'number' && Number.isInteger(e) && e >= 0 ? e : null
}
function rl(t, e, n) {
  const { replacer: s } = n,
    r = new br(t)
  r.tag = 'tag:yaml.org,2002:pairs'
  let o = 0
  if (e && Symbol.iterator in Object(e))
    for (let i of e) {
      typeof s == 'function' && (i = s.call(e, String(o++), i))
      let a, l
      if (Array.isArray(i))
        if (i.length === 2) (a = i[0]), (l = i[1])
        else throw new TypeError(`Expected [key, value] tuple: ${i}`)
      else if (i && i instanceof Object) {
        const c = Object.keys(i)
        if (c.length === 1) (a = c[0]), (l = i[a])
        else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)
      } else a = i
      r.items.push(xn(a, l, n))
    }
  return r
}
class Fn extends br {
  constructor() {
    super(),
      (this.add = Ge.prototype.add.bind(this)),
      (this.delete = Ge.prototype.delete.bind(this)),
      (this.get = Ge.prototype.get.bind(this)),
      (this.has = Ge.prototype.has.bind(this)),
      (this.set = Ge.prototype.set.bind(this)),
      (this.tag = Fn.tag)
  }
  toJSON(e, n) {
    if (!n) return super.toJSON(e)
    const s = new Map()
    n != null && n.onCreate && n.onCreate(s)
    for (const r of this.items) {
      let o, i
      if ((B(r) ? ((o = oe(r.key, '', n)), (i = oe(r.value, o, n))) : (o = oe(r, '', n)), s.has(o)))
        throw new Error('Ordered maps must not include duplicate keys')
      s.set(o, i)
    }
    return s
  }
  static from(e, n, s) {
    const r = rl(e, n, s),
      o = new this()
    return (o.items = r.items), o
  }
}
Fn.tag = 'tag:yaml.org,2002:omap'
class zn extends Ge {
  constructor(e) {
    super(e), (this.tag = zn.tag)
  }
  add(e) {
    let n
    B(e)
      ? (n = e)
      : e && typeof e == 'object' && 'key' in e && 'value' in e && e.value === null
        ? (n = new ce(e.key, null))
        : (n = new ce(e, null)),
      qe(this.items, n.key) || this.items.push(n)
  }
  get(e, n) {
    const s = qe(this.items, e)
    return !n && B(s) ? (z(s.key) ? s.key.value : s.key) : s
  }
  set(e, n) {
    if (typeof n != 'boolean')
      throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`)
    const s = qe(this.items, e)
    s && !n ? this.items.splice(this.items.indexOf(s), 1) : !s && n && this.items.push(new ce(e))
  }
  toJSON(e, n) {
    return super.toJSON(e, n, Set)
  }
  toString(e, n, s) {
    if (!e) return JSON.stringify(this)
    if (this.hasAllNullValues(!0)) return super.toString(Object.assign({}, e, { allNullValues: !0 }), n, s)
    throw new Error('Set items must all have null values')
  }
  static from(e, n, s) {
    const { replacer: r } = s,
      o = new this(e)
    if (n && Symbol.iterator in Object(n))
      for (let i of n) typeof r == 'function' && (i = r.call(n, i, i)), o.items.push(xn(i, null, s))
    return o
  }
}
zn.tag = 'tag:yaml.org,2002:set'
new Set('0123456789ABCDEFabcdef')
new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()")
new Set(',[]{}')
new Set(` ,[]{}
\r	`)
function Pc() {
  const t = $(Date.now()),
    e = Ur({ interval: 1e3 }),
    n = b(() => {
      const r = (e.value - t.value) / 1e3,
        o = Math.floor(r % 60)
          .toString()
          .padStart(2, '0')
      return `${Math.floor(r / 60)
        .toString()
        .padStart(2, '0')}:${o}`
    })
  function s() {
    t.value = e.value
  }
  return { timer: n, resetTimer: s }
}
function Vn(t = 5) {
  const e = [],
    n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    s = n.length
  for (let r = 0; r < t; r++) e.push(n.charAt(Math.floor(Math.random() * s)))
  return e.join('')
}
function wr() {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(2, 10)
}
function ne(t, e, n) {
  Object.defineProperty(t, e, { value: n, writable: !0, enumerable: !1 })
}
const fe = P({})
let ol = [],
  il = []
ne(fe, '$syncUp', !0)
ne(fe, '$syncDown', !0)
ne(fe, '$paused', !1)
ne(fe, '$onSet', t => ol.push(t))
ne(fe, '$onPatch', t => il.push(t))
wr()
ne(fe, '$patch', async () => !1)
const al = {
    channels: [],
    enabled: !0,
    init(t, e, n, s = !1) {
      let r
      if (!s) (r = new BroadcastChannel(t)), r.addEventListener('message', o => e(o.data)), this.channels.push(r)
      else if (s) {
        ;(this.listener = function (i) {
          i && i.key === t && i.newValue && e(JSON.parse(i.newValue))
        }),
          window.addEventListener('storage', this.listener)
        const o = window.localStorage.getItem(t)
        o && e(JSON.parse(o))
      }
      return (o, i = !1) => {
        this.enabled &&
          (!s && r && !i && r.postMessage(Zs(o)), s && !i && window.localStorage.setItem(t, JSON.stringify(o)))
      }
    },
    disable() {
      ;(this.enabled = !1),
        this.channels.forEach(t => t.close()),
        this.listener && window.removeEventListener('storage', this.listener)
    },
  },
  ll = P([al]),
  cl = new Map(),
  Ds = $({})
function Sr(t, e, n = !1) {
  const s = []
  let r = !1,
    o = !1,
    i,
    a
  const l = P(e)
  function c(f) {
    s.push(f)
  }
  function u(f, g) {
    l[f] !== g && (clearTimeout(i), (r = !0), (l[f] = g), (i = setTimeout(() => (r = !1), 0)))
  }
  function h(f) {
    r ||
      (clearTimeout(a),
      (o = !0),
      Object.entries(f).forEach(([g, p]) => {
        l[g] = p
      }),
      (a = setTimeout(() => (o = !1), 0)))
  }
  function d(f) {
    cl.set(f, { onUpdate: h, persist: n, state: l }), (Ds.value[f] = ll.map(p => p.init(f, h, l, n)).filter(p => !!p))
    function g() {
      Ds.value[f].forEach(p => (p == null ? void 0 : p(Zs(l), o))), r || s.forEach(p => p(l))
    }
    ee(l, g, { deep: !0 })
  }
  return { init: d, onPatch: c, onUpdate: h, patch: u, state: l }
}
const { init: ul, onPatch: $c, onUpdate: Lc, patch: Ac, state: Ec } = Sr(fe, fe, !1),
  Ke = P({ page: 0, clicks: 0 })
let fl = [],
  dl = []
ne(Ke, '$syncUp', !0)
ne(Ke, '$syncDown', !0)
ne(Ke, '$paused', !1)
ne(Ke, '$onSet', t => fl.push(t))
ne(Ke, '$onPatch', t => dl.push(t))
wr()
ne(Ke, '$patch', async () => !1)
const {
  init: hl,
  onPatch: gl,
  onUpdate: Cc,
  patch: Ve,
  state: Ic,
} = Sr(Ke, { page: 1, clicks: 0, clicksTotal: 0, viewerPage: 1, viewerClicks: 0, viewerClicksTotal: 0 })
function pl() {
  const t = Us().appContext.app,
    e = P({ nav: _n(), configs: H, themeConfigs: b(() => H.themeConfig) })
  t.provide(In, $('none')),
    t.provide(Ma, e),
    t.provide(
      Cn,
      b(() => e.nav.currentSlideNo),
    ),
    t.provide(Kt, En(fi()))
  for (const u of vo) u()
  const { clicksContext: n, currentSlideNo: s, hasPrimarySlide: r, isNotesViewer: o, isPresenter: i } = _n()
  li({ title: en, htmlAttrs: H.htmlAttrs }), hl(`${en} - shared`), ul(`${en} - drawings`)
  const a = `${location.origin}_${Vn()}`
  function l() {
    o.value ||
      (!i.value && !Pa.includes(location.host.split(':')[0])) ||
      (i.value
        ? (Ve('page', +s.value), Ve('clicks', n.value.current), Ve('clicksTotal', n.value.total))
        : (Ve('viewerPage', +s.value), Ve('viewerClicks', n.value.current), Ve('viewerClicksTotal', n.value.total)),
      Ve('lastUpdate', { id: a, type: i.value ? 'presenter' : 'viewer', time: new Date().getTime() }))
  }
  const c = qt()
  c.afterEach(l),
    ee(n, l),
    gl(u => {
      var h
      r.value &&
        ((h = u.lastUpdate) == null ? void 0 : h.type) === 'presenter' &&
        (+u.page != +s.value || +n.value.current != +u.clicks) &&
        ((Dn.value = !1),
        c.replace({ path: Ze(u.page, i.value), query: { ...c.currentRoute.value.query, clicks: u.clicks || 0 } }))
    })
}
const ml = Js({
    __name: 'App',
    setup(t) {
      return (
        pl(),
        tt(() => {
          for (const [e, n] of Object.entries(yo.value)) document.body.style.setProperty(e, n.toString())
        }),
        (e, n) => {
          const s = Kr('RouterView')
          return It(), Jr(s)
        }
      )
    },
  }),
  yl = []
function Dc(t, e = '') {
  var r, o
  const n = ['slidev-page', e],
    s = (o = (r = t == null ? void 0 : t.meta) == null ? void 0 : r.slide) == null ? void 0 : o.no
  return s != null && n.push(`slidev-page-${s}`), n.filter(Boolean).join(' ')
}
async function Rc() {
  const { saveAs: t } = await O(async () => {
    const { saveAs: e } = await import('./modules/file-saver-Bb21Aim5.js').then(n => n.F)
    return { saveAs: e }
  }, [])
  t(
    typeof H.download == 'string'
      ? H.download
      : H.exportFilename
        ? `${H.exportFilename}.pdf`
        : '/talks/freelancing-with-ai/slidev-exported.pdf',
    `${H.title}.pdf`,
  )
}
function nt(t, e, n) {
  var s
  return ((s = t.instance) == null ? void 0 : s.$).provides[e] ?? n
}
function vl() {
  return {
    install(t) {
      t.directive('click', {
        name: 'v-click',
        mounted(e, n) {
          const s = Et(e, n, n.value)
          s != null &&
            (e.classList.toggle(Ot, !0),
            (e.dataset.slidevClicksStart = String(s.start)),
            Number.isFinite(s.end) && (e.dataset.slidevClicksEnd = String(s.end)),
            (e.watchStopHandle = tt(() => {
              const r = s.isActive.value,
                o = s.isCurrent.value,
                i = r && !o
              s.flagHide
                ? (e.classList.toggle(s.flagFade ? lt : at, r), e.classList.toggle(nn, r))
                : e.classList.toggle(s.flagFade ? lt : at, !r),
                e.classList.toggle(sn, o),
                e.classList.toggle(rn, i)
            })))
        },
        unmounted: ln,
      }),
        t.directive('after', {
          name: 'v-after',
          mounted(e, n) {
            const s = Et(e, n, '+0')
            s != null &&
              (e.classList.toggle(Ot, !0),
              (e.watchStopHandle = tt(() => {
                const r = s.isActive.value,
                  o = s.isCurrent.value,
                  i = r && !o
                s.flagHide
                  ? (e.classList.toggle(s.flagFade ? lt : at, r), e.classList.toggle(nn, r))
                  : e.classList.toggle(s.flagFade ? lt : at, !r),
                  e.classList.toggle(sn, o),
                  e.classList.toggle(rn, i)
              })))
          },
          unmounted: ln,
        }),
        t.directive('click-hide', {
          name: 'v-click-hide',
          mounted(e, n) {
            const s = Et(e, n, n.value, !0)
            s != null &&
              (e.classList.toggle(Ot, !0),
              (e.watchStopHandle = tt(() => {
                const r = s.isActive.value,
                  o = s.isCurrent.value,
                  i = r && !o
                e.classList.toggle(s.flagFade ? lt : at, r),
                  e.classList.toggle(nn, r),
                  e.classList.toggle(sn, o),
                  e.classList.toggle(rn, i)
              })))
          },
          unmounted: ln,
        })
    },
  }
}
const Mr = new Map()
function Et(t, e, n, s = !1) {
  var h
  const r = (h = nt(e, Kt)) == null ? void 0 : h.value
  if (!t || !r) return null
  const o = s || (e.modifiers.hide !== !1 && e.modifiers.hide != null),
    i = e.modifiers.fade !== !1 && e.modifiers.fade != null,
    a = r.calculate(n)
  if (!a) return null
  r.register(t, a)
  const l = b(() => (o ? !a.isActive.value : a.isActive.value)),
    c = b(() =>
      l.value ? 'shown' : Number.isFinite(a.end) ? (r.current < a.start ? 'before' : 'after') : o ? 'after' : 'before',
    ),
    u = { ...a, isShown: l, visibilityState: c, flagFade: i, flagHide: o }
  return Mr.set(t, u), u
}
function ln(t, e) {
  var s, r
  t.classList.toggle(Ot, !1)
  const n = (s = nt(e, Kt)) == null ? void 0 : s.value
  n == null || n.unregister(t), (r = t.watchStopHandle) == null || r.call(t)
}
const jc = $(!1),
  Hc = $(!1),
  Nc = $(!1),
  _l = $(!1),
  xc = $(!0),
  Fc = Gr({ xs: 460, ...eo }),
  Ft = Qr(),
  zc = Zr(),
  Vc = b(() => Ft.height.value - Ft.width.value / Ys.value > 120),
  Bc = Yr(Ut ? document.body : null),
  Tr = Xr(),
  Wc = b(() => {
    var t
    return ['INPUT', 'TEXTAREA'].includes(((t = Tr.value) == null ? void 0 : t.tagName) || '')
  }),
  qc = b(() => {
    var t
    return ['BUTTON', 'A'].includes(((t = Tr.value) == null ? void 0 : t.tagName) || '')
  })
te('slidev-camera', 'default', { listenToStorageChanges: !1 })
te('slidev-mic', 'default', { listenToStorageChanges: !1 })
const kl = te('slidev-scale', 0),
  Uc = te('slidev-wake-lock', !0),
  Kc = te('slidev-presenter-cursor', !0, { listenToStorageChanges: !1 }),
  bl = te('slidev-show-editor', !1, { listenToStorageChanges: !1 }),
  wl = te('slidev-editor-vertical', !1, { listenToStorageChanges: !1 }),
  Sl = te('slidev-editor-width', Ut ? window.innerWidth * 0.4 : 318, { listenToStorageChanges: !1 }),
  Ml = te('slidev-editor-height', Ut ? window.innerHeight * 0.4 : 300, { listenToStorageChanges: !1 }),
  bt = En(null),
  zt = te('slidev-presenter-font-size', 1, { listenToStorageChanges: !1 }),
  wt = te('slidev-presenter-layout', 1, { listenToStorageChanges: !1 })
function Jc() {
  ;(wt.value = wt.value + 1), wt.value > 2 && (wt.value = 1)
}
function Gc() {
  zt.value = Math.min(2, zt.value + 0.1)
}
function Qc() {
  zt.value = Math.max(0.5, zt.value - 0.1)
}
const Zc = Qs(_l)
function Tl(t = qs(lr, $())) {
  const e = to(t),
    n = ee(
      [bl, wl, Sl, Ml, kl, Ft.width, Ft.height],
      () => {
        setTimeout(e.update, 300)
      },
      { flush: 'post', immediate: !0 },
    )
  return { ...e, stop: n }
}
function Ol(t) {
  return () => {}
}
function Pl(t, e, n, s = !1) {
  var Y
  function r(x) {
    return t ? nt(t, x) : ro(x)
  }
  const o = r(In),
    i = r(Ta) ?? {},
    a = r(Cn),
    l = b(() => Ol(a.value)),
    c = r(Sa) ?? $(1),
    u = r(Oa) ?? $(1),
    { left: h, top: d, stop: f } = Tl(r(lr) ?? $()),
    g = ['slide', 'presenter'].includes(o.value)
  let p = t ? 'directive' : 'prop',
    y = Vn(),
    m
  if (
    (Array.isArray(e)
      ? (m = e)
      : typeof e == 'string' && e.includes(',')
        ? (m = e.split(',').map(Number))
        : e != null &&
          ((p = 'frontmatter'),
          (y = `${e}`),
          (e = (Y = i == null ? void 0 : i.dragPos) == null ? void 0 : Y[y]),
          (m = e == null ? void 0 : e.split(',').map(Number))),
    p !== 'frontmatter' && !n)
  )
    throw new Error(
      '[Slidev] Can not identify the source position of the v-drag element, please provide an explicit `id` prop.',
    )
  const v = [f],
    _ = !s && e != null && !Number.isFinite(m == null ? void 0 : m[3])
  m ?? (m = [Number.NaN, Number.NaN, 0])
  const w = $(m[2]),
    T = $(m[0] + m[2] / 2),
    S = $(s ? 0 : (m[4] ?? 0)),
    L = b(() => (S.value * Math.PI) / 180),
    R = b(() => Math.sin(L.value)),
    N = b(() => Math.cos(L.value)),
    K = $(),
    W = $({ left: 0, top: 0, width: 0, height: 0 }),
    A = $(0)
  function j() {
    if (!K.value) return
    const x = K.value.getBoundingClientRect()
    ;(W.value = { left: x.left / u.value, top: x.top / u.value, width: x.width / u.value, height: x.height / u.value }),
      (A.value = (W.value.width + W.value.height) / c.value / (Math.abs(R.value) + Math.abs(N.value)) - w.value)
  }
  v.push(ee(w, j, { flush: 'post' }))
  const q = $(m[3] ?? 0),
    D = _ ? b({ get: () => (_ ? A.value : q.value) || 0, set: x => !_ && (q.value = x) }) : q,
    V = _ ? $(m[1]) : $(m[1] + m[3] / 2),
    ie = _ ? b({ get: () => V.value + D.value / 2, set: x => (V.value = x - D.value / 2) }) : V,
    rt = b(() =>
      Number.isFinite(T.value)
        ? {
            position: 'absolute',
            zIndex: 100,
            left: `${T.value - w.value / 2}px`,
            top: `${ie.value - D.value / 2}px`,
            width: `${w.value}px`,
            height: _ ? void 0 : `${D.value}px`,
            transformOrigin: 'center center',
            transform: `rotate(${S.value}deg)`,
          }
        : { position: 'absolute', zIndex: 100 },
    )
  v.push(
    ee([T, ie, w, D, S], ([x, he, ot, it, qn]) => {
      let Je = [x - ot / 2, he - it / 2, ot].map(Math.round).join()
      _ ? (Je += p === 'directive' ? ',NaN' : ',_') : (Je += `,${Math.round(it)}`),
        Math.round(qn) !== 0 && (Je += `,${Math.round(qn)}`),
        p === 'directive' && (Je = `[${Je}]`),
        l.value(y, Je, p, n)
    }),
  )
  const se = {
    dragId: y,
    dataSource: p,
    markdownSource: n,
    isArrow: s,
    zoom: u,
    autoHeight: _,
    x0: T,
    y0: ie,
    width: w,
    height: D,
    rotate: S,
    container: K,
    containerStyle: rt,
    watchStopHandles: v,
    dragging: b(() => bt.value === se),
    mounted() {
      g &&
        (j(),
        e ||
          setTimeout(() => {
            j(),
              (T.value = (W.value.left + W.value.width / 2 - h.value) / c.value),
              (ie.value = (W.value.top - d.value) / c.value),
              (w.value = W.value.width / c.value),
              (D.value = W.value.height / c.value)
          }, 100))
    },
    unmounted() {
      g && se.stopDragging()
    },
    startDragging() {
      j(), (bt.value = se)
    },
    stopDragging() {
      bt.value === se && (bt.value = null)
    },
  }
  return (
    v.push(
      no(K, x => {
        const he = document.querySelector('#drag-control-container')
        ;(he && x.target && he.contains(x.target)) || se.stopDragging()
      }),
      ee(so(), x => {
        x || se.stopDragging()
      }),
    ),
    se
  )
}
function $l() {
  return {
    install(t) {
      t.directive('drag', {
        name: 'v-drag',
        created(e, n, s) {
          var o
          const r = Pl(n, n.value, (o = s.props) == null ? void 0 : o.markdownSource)
          s.props && ((s.props = { ...s.props }), delete s.props.markdownSource),
            (r.container.value = e),
            (e.draggingState = r),
            (e.dataset.dragId = r.dragId),
            r.watchStopHandles.push(
              ee(
                r.containerStyle,
                i => {
                  for (const [a, l] of Object.entries(i)) l && (e.style[a] = l)
                },
                { immediate: !0 },
              ),
            ),
            e.addEventListener('dblclick', r.startDragging)
        },
        mounted(e) {
          e.draggingState.mounted()
        },
        unmounted(e) {
          const n = e.draggingState
          n.unmounted(), e.removeEventListener('dblclick', n.startDragging), n.watchStopHandles.forEach(s => s())
        },
      })
    },
  }
}
function Or() {
  return Math.floor(Math.random() * 2 ** 31)
}
class Ll {
  constructor(e) {
    this.seed = e
  }
  next() {
    return this.seed ? ((2 ** 31 - 1) & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random()
  }
}
function Sn(t, e, n) {
  if (t && t.length) {
    const [s, r] = e,
      o = (Math.PI / 180) * n,
      i = Math.cos(o),
      a = Math.sin(o)
    for (const l of t) {
      const [c, u] = l
      ;(l[0] = (c - s) * i - (u - r) * a + s), (l[1] = (c - s) * a + (u - r) * i + r)
    }
  }
}
function Al(t, e, n) {
  const s = []
  t.forEach(r => s.push(...r)), Sn(s, e, n)
}
function El(t, e) {
  return t[0] === e[0] && t[1] === e[1]
}
function Cl(t, e, n, s = 1) {
  const r = n,
    o = Math.max(e, 0.1),
    i = t[0] && t[0][0] && typeof t[0][0] == 'number' ? [t] : t,
    a = [0, 0]
  if (r) for (const c of i) Sn(c, a, r)
  const l = Il(i, o, s)
  if (r) {
    for (const c of i) Sn(c, a, -r)
    Al(l, a, -r)
  }
  return l
}
function Il(t, e, n) {
  const s = []
  for (const c of t) {
    const u = [...c]
    El(u[0], u[u.length - 1]) || u.push([u[0][0], u[0][1]]), u.length > 2 && s.push(u)
  }
  const r = []
  e = Math.max(e, 0.1)
  const o = []
  for (const c of s)
    for (let u = 0; u < c.length - 1; u++) {
      const h = c[u],
        d = c[u + 1]
      if (h[1] !== d[1]) {
        const f = Math.min(h[1], d[1])
        o.push({
          ymin: f,
          ymax: Math.max(h[1], d[1]),
          x: f === h[1] ? h[0] : d[0],
          islope: (d[0] - h[0]) / (d[1] - h[1]),
        })
      }
    }
  if (
    (o.sort((c, u) =>
      c.ymin < u.ymin
        ? -1
        : c.ymin > u.ymin
          ? 1
          : c.x < u.x
            ? -1
            : c.x > u.x
              ? 1
              : c.ymax === u.ymax
                ? 0
                : (c.ymax - u.ymax) / Math.abs(c.ymax - u.ymax),
    ),
    !o.length)
  )
    return r
  let i = [],
    a = o[0].ymin,
    l = 0
  for (; i.length || o.length; ) {
    if (o.length) {
      let c = -1
      for (let h = 0; h < o.length && !(o[h].ymin > a); h++) c = h
      o.splice(0, c + 1).forEach(h => {
        i.push({ s: a, edge: h })
      })
    }
    if (
      ((i = i.filter(c => !(c.edge.ymax <= a))),
      i.sort((c, u) => (c.edge.x === u.edge.x ? 0 : (c.edge.x - u.edge.x) / Math.abs(c.edge.x - u.edge.x))),
      (n !== 1 || l % e === 0) && i.length > 1)
    )
      for (let c = 0; c < i.length; c = c + 2) {
        const u = c + 1
        if (u >= i.length) break
        const h = i[c].edge,
          d = i[u].edge
        r.push([
          [Math.round(h.x), a],
          [Math.round(d.x), a],
        ])
      }
    ;(a += n),
      i.forEach(c => {
        c.edge.x = c.edge.x + n * c.edge.islope
      }),
      l++
  }
  return r
}
function vt(t, e) {
  var n
  const s = e.hachureAngle + 90
  let r = e.hachureGap
  r < 0 && (r = e.strokeWidth * 4), (r = Math.round(Math.max(r, 0.1)))
  let o = 1
  return (
    e.roughness >= 1 &&
      (((n = e.randomizer) === null || n === void 0 ? void 0 : n.next()) || Math.random()) > 0.7 &&
      (o = r),
    Cl(t, r, s, o || 1)
  )
}
class Bn {
  constructor(e) {
    this.helper = e
  }
  fillPolygons(e, n) {
    return this._fillPolygons(e, n)
  }
  _fillPolygons(e, n) {
    const s = vt(e, n)
    return { type: 'fillSketch', ops: this.renderLines(s, n) }
  }
  renderLines(e, n) {
    const s = []
    for (const r of e) s.push(...this.helper.doubleLineOps(r[0][0], r[0][1], r[1][0], r[1][1], n))
    return s
  }
}
function Xt(t) {
  const e = t[0],
    n = t[1]
  return Math.sqrt(Math.pow(e[0] - n[0], 2) + Math.pow(e[1] - n[1], 2))
}
class Dl extends Bn {
  fillPolygons(e, n) {
    let s = n.hachureGap
    s < 0 && (s = n.strokeWidth * 4), (s = Math.max(s, 0.1))
    const r = Object.assign({}, n, { hachureGap: s }),
      o = vt(e, r),
      i = (Math.PI / 180) * n.hachureAngle,
      a = [],
      l = s * 0.5 * Math.cos(i),
      c = s * 0.5 * Math.sin(i)
    for (const [h, d] of o) Xt([h, d]) && a.push([[h[0] - l, h[1] + c], [...d]], [[h[0] + l, h[1] - c], [...d]])
    return { type: 'fillSketch', ops: this.renderLines(a, n) }
  }
}
class Rl extends Bn {
  fillPolygons(e, n) {
    const s = this._fillPolygons(e, n),
      r = Object.assign({}, n, { hachureAngle: n.hachureAngle + 90 }),
      o = this._fillPolygons(e, r)
    return (s.ops = s.ops.concat(o.ops)), s
  }
}
class jl {
  constructor(e) {
    this.helper = e
  }
  fillPolygons(e, n) {
    n = Object.assign({}, n, { hachureAngle: 0 })
    const s = vt(e, n)
    return this.dotsOnLines(s, n)
  }
  dotsOnLines(e, n) {
    const s = []
    let r = n.hachureGap
    r < 0 && (r = n.strokeWidth * 4), (r = Math.max(r, 0.1))
    let o = n.fillWeight
    o < 0 && (o = n.strokeWidth / 2)
    const i = r / 4
    for (const a of e) {
      const l = Xt(a),
        c = l / r,
        u = Math.ceil(c) - 1,
        h = l - u * r,
        d = (a[0][0] + a[1][0]) / 2 - r / 4,
        f = Math.min(a[0][1], a[1][1])
      for (let g = 0; g < u; g++) {
        const p = f + h + g * r,
          y = d - i + Math.random() * 2 * i,
          m = p - i + Math.random() * 2 * i,
          v = this.helper.ellipse(y, m, o, o, n)
        s.push(...v.ops)
      }
    }
    return { type: 'fillSketch', ops: s }
  }
}
class Hl {
  constructor(e) {
    this.helper = e
  }
  fillPolygons(e, n) {
    const s = vt(e, n)
    return { type: 'fillSketch', ops: this.dashedLine(s, n) }
  }
  dashedLine(e, n) {
    const s = n.dashOffset < 0 ? (n.hachureGap < 0 ? n.strokeWidth * 4 : n.hachureGap) : n.dashOffset,
      r = n.dashGap < 0 ? (n.hachureGap < 0 ? n.strokeWidth * 4 : n.hachureGap) : n.dashGap,
      o = []
    return (
      e.forEach(i => {
        const a = Xt(i),
          l = Math.floor(a / (s + r)),
          c = (a + r - l * (s + r)) / 2
        let u = i[0],
          h = i[1]
        u[0] > h[0] && ((u = i[1]), (h = i[0]))
        const d = Math.atan((h[1] - u[1]) / (h[0] - u[0]))
        for (let f = 0; f < l; f++) {
          const g = f * (s + r),
            p = g + s,
            y = [u[0] + g * Math.cos(d) + c * Math.cos(d), u[1] + g * Math.sin(d) + c * Math.sin(d)],
            m = [u[0] + p * Math.cos(d) + c * Math.cos(d), u[1] + p * Math.sin(d) + c * Math.sin(d)]
          o.push(...this.helper.doubleLineOps(y[0], y[1], m[0], m[1], n))
        }
      }),
      o
    )
  }
}
class Nl {
  constructor(e) {
    this.helper = e
  }
  fillPolygons(e, n) {
    const s = n.hachureGap < 0 ? n.strokeWidth * 4 : n.hachureGap,
      r = n.zigzagOffset < 0 ? s : n.zigzagOffset
    n = Object.assign({}, n, { hachureGap: s + r })
    const o = vt(e, n)
    return { type: 'fillSketch', ops: this.zigzagLines(o, r, n) }
  }
  zigzagLines(e, n, s) {
    const r = []
    return (
      e.forEach(o => {
        const i = Xt(o),
          a = Math.round(i / (2 * n))
        let l = o[0],
          c = o[1]
        l[0] > c[0] && ((l = o[1]), (c = o[0]))
        const u = Math.atan((c[1] - l[1]) / (c[0] - l[0]))
        for (let h = 0; h < a; h++) {
          const d = h * 2 * n,
            f = (h + 1) * 2 * n,
            g = Math.sqrt(2 * Math.pow(n, 2)),
            p = [l[0] + d * Math.cos(u), l[1] + d * Math.sin(u)],
            y = [l[0] + f * Math.cos(u), l[1] + f * Math.sin(u)],
            m = [p[0] + g * Math.cos(u + Math.PI / 4), p[1] + g * Math.sin(u + Math.PI / 4)]
          r.push(
            ...this.helper.doubleLineOps(p[0], p[1], m[0], m[1], s),
            ...this.helper.doubleLineOps(m[0], m[1], y[0], y[1], s),
          )
        }
      }),
      r
    )
  }
}
const J = {}
function xl(t, e) {
  let n = t.fillStyle || 'hachure'
  if (!J[n])
    switch (n) {
      case 'zigzag':
        J[n] || (J[n] = new Dl(e))
        break
      case 'cross-hatch':
        J[n] || (J[n] = new Rl(e))
        break
      case 'dots':
        J[n] || (J[n] = new jl(e))
        break
      case 'dashed':
        J[n] || (J[n] = new Hl(e))
        break
      case 'zigzag-line':
        J[n] || (J[n] = new Nl(e))
        break
      case 'hachure':
      default:
        ;(n = 'hachure'), J[n] || (J[n] = new Bn(e))
        break
    }
  return J[n]
}
const Fl = 0,
  Mn = 1,
  Pr = 2,
  St = {
    A: 7,
    a: 7,
    C: 6,
    c: 6,
    H: 1,
    h: 1,
    L: 2,
    l: 2,
    M: 2,
    m: 2,
    Q: 4,
    q: 4,
    S: 4,
    s: 4,
    T: 2,
    t: 2,
    V: 1,
    v: 1,
    Z: 0,
    z: 0,
  }
function zl(t) {
  const e = new Array()
  for (; t !== ''; )
    if (t.match(/^([ \t\r\n,]+)/)) t = t.substr(RegExp.$1.length)
    else if (t.match(/^([aAcChHlLmMqQsStTvVzZ])/))
      (e[e.length] = { type: Fl, text: RegExp.$1 }), (t = t.substr(RegExp.$1.length))
    else if (t.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))
      (e[e.length] = { type: Mn, text: `${parseFloat(RegExp.$1)}` }), (t = t.substr(RegExp.$1.length))
    else return []
  return (e[e.length] = { type: Pr, text: '' }), e
}
function cn(t, e) {
  return t.type === e
}
function Wn(t) {
  const e = [],
    n = zl(t)
  let s = 'BOD',
    r = 0,
    o = n[r]
  for (; !cn(o, Pr); ) {
    let i = 0
    const a = []
    if (s === 'BOD')
      if (o.text === 'M' || o.text === 'm') r++, (i = St[o.text]), (s = o.text)
      else return Wn('M0,0' + t)
    else cn(o, Mn) ? (i = St[s]) : (r++, (i = St[o.text]), (s = o.text))
    if (r + i < n.length) {
      for (let l = r; l < r + i; l++) {
        const c = n[l]
        if (cn(c, Mn)) a[a.length] = +c.text
        else throw new Error('Param not a number: ' + s + ',' + c.text)
      }
      if (typeof St[s] == 'number') {
        const l = { key: s, data: a }
        e.push(l), (r += i), (o = n[r]), s === 'M' && (s = 'L'), s === 'm' && (s = 'l')
      } else throw new Error('Bad segment: ' + s)
    } else throw new Error('Path data ended short')
  }
  return e
}
function $r(t) {
  let e = 0,
    n = 0,
    s = 0,
    r = 0
  const o = []
  for (const { key: i, data: a } of t)
    switch (i) {
      case 'M':
        o.push({ key: 'M', data: [...a] }), ([e, n] = a), ([s, r] = a)
        break
      case 'm':
        ;(e += a[0]), (n += a[1]), o.push({ key: 'M', data: [e, n] }), (s = e), (r = n)
        break
      case 'L':
        o.push({ key: 'L', data: [...a] }), ([e, n] = a)
        break
      case 'l':
        ;(e += a[0]), (n += a[1]), o.push({ key: 'L', data: [e, n] })
        break
      case 'C':
        o.push({ key: 'C', data: [...a] }), (e = a[4]), (n = a[5])
        break
      case 'c': {
        const l = a.map((c, u) => (u % 2 ? c + n : c + e))
        o.push({ key: 'C', data: l }), (e = l[4]), (n = l[5])
        break
      }
      case 'Q':
        o.push({ key: 'Q', data: [...a] }), (e = a[2]), (n = a[3])
        break
      case 'q': {
        const l = a.map((c, u) => (u % 2 ? c + n : c + e))
        o.push({ key: 'Q', data: l }), (e = l[2]), (n = l[3])
        break
      }
      case 'A':
        o.push({ key: 'A', data: [...a] }), (e = a[5]), (n = a[6])
        break
      case 'a':
        ;(e += a[5]), (n += a[6]), o.push({ key: 'A', data: [a[0], a[1], a[2], a[3], a[4], e, n] })
        break
      case 'H':
        o.push({ key: 'H', data: [...a] }), (e = a[0])
        break
      case 'h':
        ;(e += a[0]), o.push({ key: 'H', data: [e] })
        break
      case 'V':
        o.push({ key: 'V', data: [...a] }), (n = a[0])
        break
      case 'v':
        ;(n += a[0]), o.push({ key: 'V', data: [n] })
        break
      case 'S':
        o.push({ key: 'S', data: [...a] }), (e = a[2]), (n = a[3])
        break
      case 's': {
        const l = a.map((c, u) => (u % 2 ? c + n : c + e))
        o.push({ key: 'S', data: l }), (e = l[2]), (n = l[3])
        break
      }
      case 'T':
        o.push({ key: 'T', data: [...a] }), (e = a[0]), (n = a[1])
        break
      case 't':
        ;(e += a[0]), (n += a[1]), o.push({ key: 'T', data: [e, n] })
        break
      case 'Z':
      case 'z':
        o.push({ key: 'Z', data: [] }), (e = s), (n = r)
        break
    }
  return o
}
function Lr(t) {
  const e = []
  let n = '',
    s = 0,
    r = 0,
    o = 0,
    i = 0,
    a = 0,
    l = 0
  for (const { key: c, data: u } of t) {
    switch (c) {
      case 'M':
        e.push({ key: 'M', data: [...u] }), ([s, r] = u), ([o, i] = u)
        break
      case 'C':
        e.push({ key: 'C', data: [...u] }), (s = u[4]), (r = u[5]), (a = u[2]), (l = u[3])
        break
      case 'L':
        e.push({ key: 'L', data: [...u] }), ([s, r] = u)
        break
      case 'H':
        ;(s = u[0]), e.push({ key: 'L', data: [s, r] })
        break
      case 'V':
        ;(r = u[0]), e.push({ key: 'L', data: [s, r] })
        break
      case 'S': {
        let h = 0,
          d = 0
        n === 'C' || n === 'S' ? ((h = s + (s - a)), (d = r + (r - l))) : ((h = s), (d = r)),
          e.push({ key: 'C', data: [h, d, ...u] }),
          (a = u[0]),
          (l = u[1]),
          (s = u[2]),
          (r = u[3])
        break
      }
      case 'T': {
        const [h, d] = u
        let f = 0,
          g = 0
        n === 'Q' || n === 'T' ? ((f = s + (s - a)), (g = r + (r - l))) : ((f = s), (g = r))
        const p = s + (2 * (f - s)) / 3,
          y = r + (2 * (g - r)) / 3,
          m = h + (2 * (f - h)) / 3,
          v = d + (2 * (g - d)) / 3
        e.push({ key: 'C', data: [p, y, m, v, h, d] }), (a = f), (l = g), (s = h), (r = d)
        break
      }
      case 'Q': {
        const [h, d, f, g] = u,
          p = s + (2 * (h - s)) / 3,
          y = r + (2 * (d - r)) / 3,
          m = f + (2 * (h - f)) / 3,
          v = g + (2 * (d - g)) / 3
        e.push({ key: 'C', data: [p, y, m, v, f, g] }), (a = h), (l = d), (s = f), (r = g)
        break
      }
      case 'A': {
        const h = Math.abs(u[0]),
          d = Math.abs(u[1]),
          f = u[2],
          g = u[3],
          p = u[4],
          y = u[5],
          m = u[6]
        h === 0 || d === 0
          ? (e.push({ key: 'C', data: [s, r, y, m, y, m] }), (s = y), (r = m))
          : (s !== y || r !== m) &&
            (Ar(s, r, y, m, h, d, f, g, p).forEach(function (_) {
              e.push({ key: 'C', data: _ })
            }),
            (s = y),
            (r = m))
        break
      }
      case 'Z':
        e.push({ key: 'Z', data: [] }), (s = o), (r = i)
        break
    }
    n = c
  }
  return e
}
function Vl(t) {
  return (Math.PI * t) / 180
}
function ct(t, e, n) {
  const s = t * Math.cos(n) - e * Math.sin(n),
    r = t * Math.sin(n) + e * Math.cos(n)
  return [s, r]
}
function Ar(t, e, n, s, r, o, i, a, l, c) {
  const u = Vl(i)
  let h = [],
    d = 0,
    f = 0,
    g = 0,
    p = 0
  if (c) [d, f, g, p] = c
  else {
    ;([t, e] = ct(t, e, -u)), ([n, s] = ct(n, s, -u))
    const A = (t - n) / 2,
      j = (e - s) / 2
    let q = (A * A) / (r * r) + (j * j) / (o * o)
    q > 1 && ((q = Math.sqrt(q)), (r = q * r), (o = q * o))
    const D = a === l ? -1 : 1,
      V = r * r,
      ie = o * o,
      rt = V * ie - V * j * j - ie * A * A,
      se = V * j * j + ie * A * A,
      Y = D * Math.sqrt(Math.abs(rt / se))
    ;(g = (Y * r * j) / o + (t + n) / 2),
      (p = (Y * -o * A) / r + (e + s) / 2),
      (d = Math.asin(parseFloat(((e - p) / o).toFixed(9)))),
      (f = Math.asin(parseFloat(((s - p) / o).toFixed(9)))),
      t < g && (d = Math.PI - d),
      n < g && (f = Math.PI - f),
      d < 0 && (d = Math.PI * 2 + d),
      f < 0 && (f = Math.PI * 2 + f),
      l && d > f && (d = d - Math.PI * 2),
      !l && f > d && (f = f - Math.PI * 2)
  }
  let y = f - d
  if (Math.abs(y) > (Math.PI * 120) / 180) {
    const A = f,
      j = n,
      q = s
    l && f > d ? (f = d + ((Math.PI * 120) / 180) * 1) : (f = d + ((Math.PI * 120) / 180) * -1),
      (n = g + r * Math.cos(f)),
      (s = p + o * Math.sin(f)),
      (h = Ar(n, s, j, q, r, o, i, 0, l, [f, A, g, p]))
  }
  y = f - d
  const m = Math.cos(d),
    v = Math.sin(d),
    _ = Math.cos(f),
    w = Math.sin(f),
    T = Math.tan(y / 4),
    S = (4 / 3) * r * T,
    L = (4 / 3) * o * T,
    R = [t, e],
    N = [t + S * v, e - L * m],
    K = [n + S * w, s - L * _],
    W = [n, s]
  if (((N[0] = 2 * R[0] - N[0]), (N[1] = 2 * R[1] - N[1]), c)) return [N, K, W].concat(h)
  {
    h = [N, K, W].concat(h)
    const A = []
    for (let j = 0; j < h.length; j += 3) {
      const q = ct(h[j][0], h[j][1], u),
        D = ct(h[j + 1][0], h[j + 1][1], u),
        V = ct(h[j + 2][0], h[j + 2][1], u)
      A.push([q[0], q[1], D[0], D[1], V[0], V[1]])
    }
    return A
  }
}
const Bl = { randOffset: Ul, randOffsetWithRange: Kl, ellipse: Tn, doubleLineOps: Jl }
function X(t, e, n, s, r) {
  return { type: 'path', ops: de(t, e, n, s, r) }
}
function gt(t, e, n) {
  const s = (t || []).length
  if (s > 2) {
    const r = []
    for (let o = 0; o < s - 1; o++) r.push(...de(t[o][0], t[o][1], t[o + 1][0], t[o + 1][1], n))
    return e && r.push(...de(t[s - 1][0], t[s - 1][1], t[0][0], t[0][1], n)), { type: 'path', ops: r }
  } else if (s === 2) return X(t[0][0], t[0][1], t[1][0], t[1][1], n)
  return { type: 'path', ops: [] }
}
function Wl(t, e) {
  return gt(t, !0, e)
}
function Er(t, e, n, s, r) {
  const o = [
    [t, e],
    [t + n, e],
    [t + n, e + s],
    [t, e + s],
  ]
  return Wl(o, r)
}
function Rs(t, e) {
  if (t.length) {
    const s = typeof t[0][0] == 'number' ? [t] : t,
      r = Mt(s[0], 1 * (1 + e.roughness * 0.2), e),
      o = e.disableMultiStroke ? [] : Mt(s[0], 1.5 * (1 + e.roughness * 0.22), Ns(e))
    for (let i = 1; i < s.length; i++) {
      const a = s[i]
      if (a.length) {
        const l = Mt(a, 1 * (1 + e.roughness * 0.2), e),
          c = e.disableMultiStroke ? [] : Mt(a, 1.5 * (1 + e.roughness * 0.22), Ns(e))
        for (const u of l) u.op !== 'move' && r.push(u)
        for (const u of c) u.op !== 'move' && o.push(u)
      }
    }
    return { type: 'path', ops: r.concat(o) }
  }
  return { type: 'path', ops: [] }
}
function Tn(t, e, n, s, r) {
  const o = Cr(n, s, r)
  return On(t, e, r, o).opset
}
function Cr(t, e, n) {
  const s = Math.sqrt(Math.PI * 2 * Math.sqrt((Math.pow(t / 2, 2) + Math.pow(e / 2, 2)) / 2)),
    r = Math.ceil(Math.max(n.curveStepCount, (n.curveStepCount / Math.sqrt(200)) * s)),
    o = (Math.PI * 2) / r
  let i = Math.abs(t / 2),
    a = Math.abs(e / 2)
  const l = 1 - n.curveFitting
  return (i += M(i * l, n)), (a += M(a * l, n)), { increment: o, rx: i, ry: a }
}
function On(t, e, n, s) {
  const [r, o] = xs(s.increment, t, e, s.rx, s.ry, 1, s.increment * Vt(0.1, Vt(0.4, 1, n), n), n)
  let i = Bt(r, null, n)
  if (!n.disableMultiStroke && n.roughness !== 0) {
    const [a] = xs(s.increment, t, e, s.rx, s.ry, 1.5, 0, n),
      l = Bt(a, null, n)
    i = i.concat(l)
  }
  return { estimatedPoints: o, opset: { type: 'path', ops: i } }
}
function js(t, e, n, s, r, o, i, a, l) {
  const c = t,
    u = e
  let h = Math.abs(n / 2),
    d = Math.abs(s / 2)
  ;(h += M(h * 0.01, l)), (d += M(d * 0.01, l))
  let f = r,
    g = o
  for (; f < 0; ) (f += Math.PI * 2), (g += Math.PI * 2)
  g - f > Math.PI * 2 && ((f = 0), (g = Math.PI * 2))
  const p = (Math.PI * 2) / l.curveStepCount,
    y = Math.min(p / 2, (g - f) / 2),
    m = Fs(y, c, u, h, d, f, g, 1, l)
  if (!l.disableMultiStroke) {
    const v = Fs(y, c, u, h, d, f, g, 1.5, l)
    m.push(...v)
  }
  return (
    i &&
      (a
        ? m.push(
            ...de(c, u, c + h * Math.cos(f), u + d * Math.sin(f), l),
            ...de(c, u, c + h * Math.cos(g), u + d * Math.sin(g), l),
          )
        : m.push({ op: 'lineTo', data: [c, u] }, { op: 'lineTo', data: [c + h * Math.cos(f), u + d * Math.sin(f)] })),
    { type: 'path', ops: m }
  )
}
function Hs(t, e) {
  const n = Lr($r(Wn(t))),
    s = []
  let r = [0, 0],
    o = [0, 0]
  for (const { key: i, data: a } of n)
    switch (i) {
      case 'M': {
        ;(o = [a[0], a[1]]), (r = [a[0], a[1]])
        break
      }
      case 'L':
        s.push(...de(o[0], o[1], a[0], a[1], e)), (o = [a[0], a[1]])
        break
      case 'C': {
        const [l, c, u, h, d, f] = a
        s.push(...Gl(l, c, u, h, d, f, o, e)), (o = [d, f])
        break
      }
      case 'Z':
        s.push(...de(o[0], o[1], r[0], r[1], e)), (o = [r[0], r[1]])
        break
    }
  return { type: 'path', ops: s }
}
function un(t, e) {
  const n = []
  for (const s of t)
    if (s.length) {
      const r = e.maxRandomnessOffset || 0,
        o = s.length
      if (o > 2) {
        n.push({ op: 'move', data: [s[0][0] + M(r, e), s[0][1] + M(r, e)] })
        for (let i = 1; i < o; i++) n.push({ op: 'lineTo', data: [s[i][0] + M(r, e), s[i][1] + M(r, e)] })
      }
    }
  return { type: 'fillPath', ops: n }
}
function Qe(t, e) {
  return xl(e, Bl).fillPolygons(t, e)
}
function ql(t, e, n, s, r, o, i) {
  const a = t,
    l = e
  let c = Math.abs(n / 2),
    u = Math.abs(s / 2)
  ;(c += M(c * 0.01, i)), (u += M(u * 0.01, i))
  let h = r,
    d = o
  for (; h < 0; ) (h += Math.PI * 2), (d += Math.PI * 2)
  d - h > Math.PI * 2 && ((h = 0), (d = Math.PI * 2))
  const f = (d - h) / i.curveStepCount,
    g = []
  for (let p = h; p <= d; p = p + f) g.push([a + c * Math.cos(p), l + u * Math.sin(p)])
  return g.push([a + c * Math.cos(d), l + u * Math.sin(d)]), g.push([a, l]), Qe([g], i)
}
function Ul(t, e) {
  return M(t, e)
}
function Kl(t, e, n) {
  return Vt(t, e, n)
}
function Jl(t, e, n, s, r) {
  return de(t, e, n, s, r, !0)
}
function Ns(t) {
  const e = Object.assign({}, t)
  return (e.randomizer = void 0), t.seed && (e.seed = t.seed + 1), e
}
function Ir(t) {
  return t.randomizer || (t.randomizer = new Ll(t.seed || 0)), t.randomizer.next()
}
function Vt(t, e, n, s = 1) {
  return n.roughness * s * (Ir(n) * (e - t) + t)
}
function M(t, e, n = 1) {
  return Vt(-t, t, e, n)
}
function de(t, e, n, s, r, o = !1) {
  const i = o ? r.disableMultiStrokeFill : r.disableMultiStroke,
    a = Pn(t, e, n, s, r, !0, !1)
  if (i) return a
  const l = Pn(t, e, n, s, r, !0, !0)
  return a.concat(l)
}
function Pn(t, e, n, s, r, o, i) {
  const a = Math.pow(t - n, 2) + Math.pow(e - s, 2),
    l = Math.sqrt(a)
  let c = 1
  l < 200 ? (c = 1) : l > 500 ? (c = 0.4) : (c = -0.0016668 * l + 1.233334)
  let u = r.maxRandomnessOffset || 0
  u * u * 100 > a && (u = l / 10)
  const h = u / 2,
    d = 0.2 + Ir(r) * 0.2
  let f = (r.bowing * r.maxRandomnessOffset * (s - e)) / 200,
    g = (r.bowing * r.maxRandomnessOffset * (t - n)) / 200
  ;(f = M(f, r, c)), (g = M(g, r, c))
  const p = [],
    y = () => M(h, r, c),
    m = () => M(u, r, c),
    v = r.preserveVertices
  return (
    i
      ? p.push({ op: 'move', data: [t + (v ? 0 : y()), e + (v ? 0 : y())] })
      : p.push({ op: 'move', data: [t + (v ? 0 : M(u, r, c)), e + (v ? 0 : M(u, r, c))] }),
    i
      ? p.push({
          op: 'bcurveTo',
          data: [
            f + t + (n - t) * d + y(),
            g + e + (s - e) * d + y(),
            f + t + 2 * (n - t) * d + y(),
            g + e + 2 * (s - e) * d + y(),
            n + (v ? 0 : y()),
            s + (v ? 0 : y()),
          ],
        })
      : p.push({
          op: 'bcurveTo',
          data: [
            f + t + (n - t) * d + m(),
            g + e + (s - e) * d + m(),
            f + t + 2 * (n - t) * d + m(),
            g + e + 2 * (s - e) * d + m(),
            n + (v ? 0 : m()),
            s + (v ? 0 : m()),
          ],
        }),
    p
  )
}
function Mt(t, e, n) {
  if (!t.length) return []
  const s = []
  s.push([t[0][0] + M(e, n), t[0][1] + M(e, n)]), s.push([t[0][0] + M(e, n), t[0][1] + M(e, n)])
  for (let r = 1; r < t.length; r++)
    s.push([t[r][0] + M(e, n), t[r][1] + M(e, n)]), r === t.length - 1 && s.push([t[r][0] + M(e, n), t[r][1] + M(e, n)])
  return Bt(s, null, n)
}
function Bt(t, e, n) {
  const s = t.length,
    r = []
  if (s > 3) {
    const o = [],
      i = 1 - n.curveTightness
    r.push({ op: 'move', data: [t[1][0], t[1][1]] })
    for (let a = 1; a + 2 < s; a++) {
      const l = t[a]
      ;(o[0] = [l[0], l[1]]),
        (o[1] = [l[0] + (i * t[a + 1][0] - i * t[a - 1][0]) / 6, l[1] + (i * t[a + 1][1] - i * t[a - 1][1]) / 6]),
        (o[2] = [t[a + 1][0] + (i * t[a][0] - i * t[a + 2][0]) / 6, t[a + 1][1] + (i * t[a][1] - i * t[a + 2][1]) / 6]),
        (o[3] = [t[a + 1][0], t[a + 1][1]]),
        r.push({ op: 'bcurveTo', data: [o[1][0], o[1][1], o[2][0], o[2][1], o[3][0], o[3][1]] })
    }
  } else
    s === 3
      ? (r.push({ op: 'move', data: [t[1][0], t[1][1]] }),
        r.push({ op: 'bcurveTo', data: [t[1][0], t[1][1], t[2][0], t[2][1], t[2][0], t[2][1]] }))
      : s === 2 && r.push(...Pn(t[0][0], t[0][1], t[1][0], t[1][1], n, !0, !0))
  return r
}
function xs(t, e, n, s, r, o, i, a) {
  const l = a.roughness === 0,
    c = [],
    u = []
  if (l) {
    ;(t = t / 4), u.push([e + s * Math.cos(-t), n + r * Math.sin(-t)])
    for (let h = 0; h <= Math.PI * 2; h = h + t) {
      const d = [e + s * Math.cos(h), n + r * Math.sin(h)]
      c.push(d), u.push(d)
    }
    u.push([e + s * Math.cos(0), n + r * Math.sin(0)]), u.push([e + s * Math.cos(t), n + r * Math.sin(t)])
  } else {
    const h = M(0.5, a) - Math.PI / 2
    u.push([M(o, a) + e + 0.9 * s * Math.cos(h - t), M(o, a) + n + 0.9 * r * Math.sin(h - t)])
    const d = Math.PI * 2 + h - 0.01
    for (let f = h; f < d; f = f + t) {
      const g = [M(o, a) + e + s * Math.cos(f), M(o, a) + n + r * Math.sin(f)]
      c.push(g), u.push(g)
    }
    u.push([
      M(o, a) + e + s * Math.cos(h + Math.PI * 2 + i * 0.5),
      M(o, a) + n + r * Math.sin(h + Math.PI * 2 + i * 0.5),
    ]),
      u.push([M(o, a) + e + 0.98 * s * Math.cos(h + i), M(o, a) + n + 0.98 * r * Math.sin(h + i)]),
      u.push([M(o, a) + e + 0.9 * s * Math.cos(h + i * 0.5), M(o, a) + n + 0.9 * r * Math.sin(h + i * 0.5)])
  }
  return [u, c]
}
function Fs(t, e, n, s, r, o, i, a, l) {
  const c = o + M(0.1, l),
    u = []
  u.push([M(a, l) + e + 0.9 * s * Math.cos(c - t), M(a, l) + n + 0.9 * r * Math.sin(c - t)])
  for (let h = c; h <= i; h = h + t) u.push([M(a, l) + e + s * Math.cos(h), M(a, l) + n + r * Math.sin(h)])
  return (
    u.push([e + s * Math.cos(i), n + r * Math.sin(i)]),
    u.push([e + s * Math.cos(i), n + r * Math.sin(i)]),
    Bt(u, null, l)
  )
}
function Gl(t, e, n, s, r, o, i, a) {
  const l = [],
    c = [a.maxRandomnessOffset || 1, (a.maxRandomnessOffset || 1) + 0.3]
  let u = [0, 0]
  const h = a.disableMultiStroke ? 1 : 2,
    d = a.preserveVertices
  for (let f = 0; f < h; f++)
    f === 0
      ? l.push({ op: 'move', data: [i[0], i[1]] })
      : l.push({ op: 'move', data: [i[0] + (d ? 0 : M(c[0], a)), i[1] + (d ? 0 : M(c[0], a))] }),
      (u = d ? [r, o] : [r + M(c[f], a), o + M(c[f], a)]),
      l.push({ op: 'bcurveTo', data: [t + M(c[f], a), e + M(c[f], a), n + M(c[f], a), s + M(c[f], a), u[0], u[1]] })
  return l
}
function ut(t) {
  return [...t]
}
function zs(t, e = 0) {
  const n = t.length
  if (n < 3) throw new Error('A curve must have at least three points.')
  const s = []
  if (n === 3) s.push(ut(t[0]), ut(t[1]), ut(t[2]), ut(t[2]))
  else {
    const r = []
    r.push(t[0], t[0])
    for (let a = 1; a < t.length; a++) r.push(t[a]), a === t.length - 1 && r.push(t[a])
    const o = [],
      i = 1 - e
    s.push(ut(r[0]))
    for (let a = 1; a + 2 < r.length; a++) {
      const l = r[a]
      ;(o[0] = [l[0], l[1]]),
        (o[1] = [l[0] + (i * r[a + 1][0] - i * r[a - 1][0]) / 6, l[1] + (i * r[a + 1][1] - i * r[a - 1][1]) / 6]),
        (o[2] = [r[a + 1][0] + (i * r[a][0] - i * r[a + 2][0]) / 6, r[a + 1][1] + (i * r[a][1] - i * r[a + 2][1]) / 6]),
        (o[3] = [r[a + 1][0], r[a + 1][1]]),
        s.push(o[1], o[2], o[3])
    }
  }
  return s
}
function Ql(t, e) {
  return Math.sqrt(Ct(t, e))
}
function Ct(t, e) {
  return Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2)
}
function Zl(t, e, n) {
  const s = Ct(e, n)
  if (s === 0) return Ct(t, e)
  let r = ((t[0] - e[0]) * (n[0] - e[0]) + (t[1] - e[1]) * (n[1] - e[1])) / s
  return (r = Math.max(0, Math.min(1, r))), Ct(t, We(e, n, r))
}
function We(t, e, n) {
  return [t[0] + (e[0] - t[0]) * n, t[1] + (e[1] - t[1]) * n]
}
function Yl(t, e) {
  const n = t[e + 0],
    s = t[e + 1],
    r = t[e + 2],
    o = t[e + 3]
  let i = 3 * s[0] - 2 * n[0] - o[0]
  i *= i
  let a = 3 * s[1] - 2 * n[1] - o[1]
  a *= a
  let l = 3 * r[0] - 2 * o[0] - n[0]
  l *= l
  let c = 3 * r[1] - 2 * o[1] - n[1]
  return (c *= c), i < l && (i = l), a < c && (a = c), i + a
}
function $n(t, e, n, s) {
  const r = s || []
  if (Yl(t, e) < n) {
    const o = t[e + 0]
    r.length ? Ql(r[r.length - 1], o) > 1 && r.push(o) : r.push(o), r.push(t[e + 3])
  } else {
    const i = t[e + 0],
      a = t[e + 1],
      l = t[e + 2],
      c = t[e + 3],
      u = We(i, a, 0.5),
      h = We(a, l, 0.5),
      d = We(l, c, 0.5),
      f = We(u, h, 0.5),
      g = We(h, d, 0.5),
      p = We(f, g, 0.5)
    $n([i, u, f, p], 0, n, r), $n([p, g, d, c], 0, n, r)
  }
  return r
}
function Xl(t, e) {
  return Wt(t, 0, t.length, e)
}
function Wt(t, e, n, s, r) {
  const o = r || [],
    i = t[e],
    a = t[n - 1]
  let l = 0,
    c = 1
  for (let u = e + 1; u < n - 1; ++u) {
    const h = Zl(t[u], i, a)
    h > l && ((l = h), (c = u))
  }
  return Math.sqrt(l) > s ? (Wt(t, e, c + 1, s, o), Wt(t, c, n, s, o)) : (o.length || o.push(i), o.push(a)), o
}
function Ln(t, e = 0.15, n) {
  const s = [],
    r = (t.length - 1) / 3
  for (let o = 0; o < r; o++) {
    const i = o * 3
    $n(t, i, e, s)
  }
  return n && n > 0 ? Wt(s, 0, s.length, n) : s
}
function ec(t, e, n) {
  const s = Wn(t),
    r = Lr($r(s)),
    o = []
  let i = [],
    a = [0, 0],
    l = []
  const c = () => {
      l.length >= 4 && i.push(...Ln(l, e)), (l = [])
    },
    u = () => {
      c(), i.length && (o.push(i), (i = []))
    }
  for (const { key: d, data: f } of r)
    switch (d) {
      case 'M':
        u(), (a = [f[0], f[1]]), i.push(a)
        break
      case 'L':
        c(), i.push([f[0], f[1]])
        break
      case 'C':
        if (!l.length) {
          const g = i.length ? i[i.length - 1] : a
          l.push([g[0], g[1]])
        }
        l.push([f[0], f[1]]), l.push([f[2], f[3]]), l.push([f[4], f[5]])
        break
      case 'Z':
        c(), i.push([a[0], a[1]])
        break
    }
  if ((u(), !n)) return o
  const h = []
  for (const d of o) {
    const f = Xl(d, n)
    f.length && h.push(f)
  }
  return h
}
const Q = 'none'
class tc {
  constructor(e) {
    ;(this.defaultOptions = {
      maxRandomnessOffset: 2,
      roughness: 1,
      bowing: 1,
      stroke: '#000',
      strokeWidth: 1,
      curveTightness: 0,
      curveFitting: 0.95,
      curveStepCount: 9,
      fillStyle: 'hachure',
      fillWeight: -1,
      hachureAngle: -41,
      hachureGap: -1,
      dashOffset: -1,
      dashGap: -1,
      zigzagOffset: -1,
      seed: 0,
      disableMultiStroke: !1,
      disableMultiStrokeFill: !1,
      preserveVertices: !1,
      fillShapeRoughnessGain: 0.8,
    }),
      (this.config = e || {}),
      this.config.options && (this.defaultOptions = this._o(this.config.options))
  }
  static newSeed() {
    return Or()
  }
  _o(e) {
    return e ? Object.assign({}, this.defaultOptions, e) : this.defaultOptions
  }
  _d(e, n, s) {
    return { shape: e, sets: n || [], options: s || this.defaultOptions }
  }
  line(e, n, s, r, o) {
    const i = this._o(o)
    return this._d('line', [X(e, n, s, r, i)], i)
  }
  rectangle(e, n, s, r, o) {
    const i = this._o(o),
      a = [],
      l = Er(e, n, s, r, i)
    if (i.fill) {
      const c = [
        [e, n],
        [e + s, n],
        [e + s, n + r],
        [e, n + r],
      ]
      i.fillStyle === 'solid' ? a.push(un([c], i)) : a.push(Qe([c], i))
    }
    return i.stroke !== Q && a.push(l), this._d('rectangle', a, i)
  }
  ellipse(e, n, s, r, o) {
    const i = this._o(o),
      a = [],
      l = Cr(s, r, i),
      c = On(e, n, i, l)
    if (i.fill)
      if (i.fillStyle === 'solid') {
        const u = On(e, n, i, l).opset
        ;(u.type = 'fillPath'), a.push(u)
      } else a.push(Qe([c.estimatedPoints], i))
    return i.stroke !== Q && a.push(c.opset), this._d('ellipse', a, i)
  }
  circle(e, n, s, r) {
    const o = this.ellipse(e, n, s, s, r)
    return (o.shape = 'circle'), o
  }
  linearPath(e, n) {
    const s = this._o(n)
    return this._d('linearPath', [gt(e, !1, s)], s)
  }
  arc(e, n, s, r, o, i, a = !1, l) {
    const c = this._o(l),
      u = [],
      h = js(e, n, s, r, o, i, a, !0, c)
    if (a && c.fill)
      if (c.fillStyle === 'solid') {
        const d = Object.assign({}, c)
        d.disableMultiStroke = !0
        const f = js(e, n, s, r, o, i, !0, !1, d)
        ;(f.type = 'fillPath'), u.push(f)
      } else u.push(ql(e, n, s, r, o, i, c))
    return c.stroke !== Q && u.push(h), this._d('arc', u, c)
  }
  curve(e, n) {
    const s = this._o(n),
      r = [],
      o = Rs(e, s)
    if (s.fill && s.fill !== Q)
      if (s.fillStyle === 'solid') {
        const i = Rs(
          e,
          Object.assign(Object.assign({}, s), {
            disableMultiStroke: !0,
            roughness: s.roughness ? s.roughness + s.fillShapeRoughnessGain : 0,
          }),
        )
        r.push({ type: 'fillPath', ops: this._mergedShape(i.ops) })
      } else {
        const i = [],
          a = e
        if (a.length) {
          const c = typeof a[0][0] == 'number' ? [a] : a
          for (const u of c)
            u.length < 3
              ? i.push(...u)
              : u.length === 3
                ? i.push(...Ln(zs([u[0], u[0], u[1], u[2]]), 10, (1 + s.roughness) / 2))
                : i.push(...Ln(zs(u), 10, (1 + s.roughness) / 2))
        }
        i.length && r.push(Qe([i], s))
      }
    return s.stroke !== Q && r.push(o), this._d('curve', r, s)
  }
  polygon(e, n) {
    const s = this._o(n),
      r = [],
      o = gt(e, !0, s)
    return (
      s.fill && (s.fillStyle === 'solid' ? r.push(un([e], s)) : r.push(Qe([e], s))),
      s.stroke !== Q && r.push(o),
      this._d('polygon', r, s)
    )
  }
  path(e, n) {
    const s = this._o(n),
      r = []
    if (!e) return this._d('path', r, s)
    e = (e || '').replace(/\n/g, ' ').replace(/(-\s)/g, '-').replace('/(ss)/g', ' ')
    const o = s.fill && s.fill !== 'transparent' && s.fill !== Q,
      i = s.stroke !== Q,
      a = !!(s.simplification && s.simplification < 1),
      l = a ? 4 - 4 * (s.simplification || 1) : (1 + s.roughness) / 2,
      c = ec(e, 1, l),
      u = Hs(e, s)
    if (o)
      if (s.fillStyle === 'solid')
        if (c.length === 1) {
          const h = Hs(
            e,
            Object.assign(Object.assign({}, s), {
              disableMultiStroke: !0,
              roughness: s.roughness ? s.roughness + s.fillShapeRoughnessGain : 0,
            }),
          )
          r.push({ type: 'fillPath', ops: this._mergedShape(h.ops) })
        } else r.push(un(c, s))
      else r.push(Qe(c, s))
    return (
      i &&
        (a
          ? c.forEach(h => {
              r.push(gt(h, !1, s))
            })
          : r.push(u)),
      this._d('path', r, s)
    )
  }
  opsToPath(e, n) {
    let s = ''
    for (const r of e.ops) {
      const o = typeof n == 'number' && n >= 0 ? r.data.map(i => +i.toFixed(n)) : r.data
      switch (r.op) {
        case 'move':
          s += `M${o[0]} ${o[1]} `
          break
        case 'bcurveTo':
          s += `C${o[0]} ${o[1]}, ${o[2]} ${o[3]}, ${o[4]} ${o[5]} `
          break
        case 'lineTo':
          s += `L${o[0]} ${o[1]} `
          break
      }
    }
    return s.trim()
  }
  toPaths(e) {
    const n = e.sets || [],
      s = e.options || this.defaultOptions,
      r = []
    for (const o of n) {
      let i = null
      switch (o.type) {
        case 'path':
          i = { d: this.opsToPath(o), stroke: s.stroke, strokeWidth: s.strokeWidth, fill: Q }
          break
        case 'fillPath':
          i = { d: this.opsToPath(o), stroke: Q, strokeWidth: 0, fill: s.fill || Q }
          break
        case 'fillSketch':
          i = this.fillSketch(o, s)
          break
      }
      i && r.push(i)
    }
    return r
  }
  fillSketch(e, n) {
    let s = n.fillWeight
    return s < 0 && (s = n.strokeWidth / 2), { d: this.opsToPath(e), stroke: n.fill || Q, strokeWidth: s, fill: Q }
  }
  _mergedShape(e) {
    return e.filter((n, s) => (s === 0 ? !0 : n.op !== 'move'))
  }
}
const Dr = 'http://www.w3.org/2000/svg',
  nc = 800
let fn = null
function sc() {
  return fn || (fn = new tc().defaultOptions), fn
}
function dn(t, e, n) {
  return {
    ...sc(),
    maxRandomnessOffset: 2,
    roughness: t === 'highlight' ? 3 : 1.5,
    bowing: 1,
    stroke: '#000',
    strokeWidth: 1.5,
    curveTightness: 0,
    curveFitting: 0.95,
    curveStepCount: 9,
    fillStyle: 'hachure',
    fillWeight: -1,
    hachureAngle: -41,
    hachureGap: -1,
    dashOffset: -1,
    dashGap: -1,
    zigzagOffset: -1,
    disableMultiStroke: t !== 'double',
    disableMultiStrokeFill: !1,
    seed: e,
    ...n,
  }
}
function rc(t) {
  const e = t.padding
  if (e || e === 0) {
    if (typeof e == 'number') return [e, e, e, e]
    if (Array.isArray(e)) {
      const n = e
      if (n.length)
        switch (n.length) {
          case 4:
            return [...n]
          case 1:
            return [n[0], n[0], n[0], n[0]]
          case 2:
            return [...n, ...n]
          case 3:
            return [...n, n[1]]
          default:
            return [n[0], n[1], n[2], n[3]]
        }
    }
  }
  return [5, 5, 5, 5]
}
function oc(t, e, n, s, r, o) {
  const i = []
  let a = n.strokeWidth || 2
  const l = rc(n),
    c = n.animate === void 0 ? !0 : !!n.animate,
    u = n.iterations || 2,
    h = n.rtl ? 1 : 0,
    d = dn('single', o, n)
  switch (n.type) {
    case 'underline': {
      const f = e.y + e.h + l[2]
      for (let g = h; g < u + h; g++) g % 2 ? i.push(X(e.x + e.w, f, e.x, f, d)) : i.push(X(e.x, f, e.x + e.w, f, d))
      break
    }
    case 'strike-through': {
      const f = e.y + e.h / 2
      for (let g = h; g < u + h; g++) g % 2 ? i.push(X(e.x + e.w, f, e.x, f, d)) : i.push(X(e.x, f, e.x + e.w, f, d))
      break
    }
    case 'box': {
      const f = e.x - l[3],
        g = e.y - l[0],
        p = e.w + (l[1] + l[3]),
        y = e.h + (l[0] + l[2])
      for (let m = 0; m < u; m++) i.push(Er(f, g, p, y, d))
      break
    }
    case 'bracket': {
      const f = Array.isArray(n.brackets) ? n.brackets : n.brackets ? [n.brackets] : ['right'],
        g = e.x - l[3] * 2,
        p = e.x + e.w + l[1] * 2,
        y = e.y - l[0] * 2,
        m = e.y + e.h + l[2] * 2
      for (const v of f) {
        let _
        switch (v) {
          case 'bottom':
            _ = [
              [g, e.y + e.h],
              [g, m],
              [p, m],
              [p, e.y + e.h],
            ]
            break
          case 'top':
            _ = [
              [g, e.y],
              [g, y],
              [p, y],
              [p, e.y],
            ]
            break
          case 'left':
            _ = [
              [e.x, y],
              [g, y],
              [g, m],
              [e.x, m],
            ]
            break
          case 'right':
            _ = [
              [e.x + e.w, y],
              [p, y],
              [p, m],
              [e.x + e.w, m],
            ]
            break
        }
        _ && i.push(gt(_, !1, d))
      }
      break
    }
    case 'crossed-off': {
      const f = e.x,
        g = e.y,
        p = f + e.w,
        y = g + e.h
      for (let m = h; m < u + h; m++) m % 2 ? i.push(X(p, y, f, g, d)) : i.push(X(f, g, p, y, d))
      for (let m = h; m < u + h; m++) m % 2 ? i.push(X(f, y, p, g, d)) : i.push(X(p, g, f, y, d))
      break
    }
    case 'circle': {
      const f = dn('double', o, n),
        g = e.w + (l[1] + l[3]),
        p = e.h + (l[0] + l[2]),
        y = e.x - l[3] + g / 2,
        m = e.y - l[0] + p / 2,
        v = Math.floor(u / 2),
        _ = u - v * 2
      for (let w = 0; w < v; w++) i.push(Tn(y, m, g, p, f))
      for (let w = 0; w < _; w++) i.push(Tn(y, m, g, p, d))
      break
    }
    case 'highlight': {
      const f = dn('highlight', o, n)
      a = e.h * 0.95
      const g = e.y + e.h / 2
      for (let p = h; p < u + h; p++) p % 2 ? i.push(X(e.x + e.w, g, e.x, g, f)) : i.push(X(e.x, g, e.x + e.w, g, f))
      break
    }
  }
  if (i.length) {
    const f = ic(i),
      g = [],
      p = []
    let y = 0
    const m = (v, _, w) => v.setAttribute(_, w)
    for (const v of f) {
      const _ = document.createElementNS(Dr, 'path')
      if (
        (m(_, 'd', v),
        m(_, 'fill', 'none'),
        m(_, 'stroke', n.color || 'currentColor'),
        m(_, 'stroke-width', `${a}`),
        n.opacity !== void 0 && m(_, 'style', `opacity:${n.opacity}`),
        c)
      ) {
        const w = _.getTotalLength()
        g.push(w), (y += w)
      }
      t.appendChild(_), p.push(_)
    }
    if (c) {
      let v = 0
      for (let _ = 0; _ < p.length; _++) {
        const w = p[_],
          T = g[_],
          S = y ? r * (T / y) : 0,
          L = s + v,
          R = w.style
        ;(R.strokeDashoffset = `${T}`),
          (R.strokeDasharray = `${T}`),
          (R.animation = `rough-notation-dash ${S}ms ease-out ${L}ms forwards`),
          (v += S)
      }
      return Vs(r + s)
    }
  }
  return Vs(0)
}
function Vs(t) {
  return new Promise(e => setTimeout(e, t))
}
function ic(t) {
  const e = []
  for (const n of t) {
    let s = ''
    for (const r of n.ops) {
      const o = r.data
      switch (r.op) {
        case 'move':
          s.trim() && e.push(s.trim()), (s = `M${o[0]} ${o[1]} `)
          break
        case 'bcurveTo':
          s += `C${o[0]} ${o[1]}, ${o[2]} ${o[3]}, ${o[4]} ${o[5]} `
          break
        case 'lineTo':
          s += `L${o[0]} ${o[1]} `
          break
      }
    }
    s.trim() && e.push(s.trim())
  }
  return e
}
function ac() {
  if (!window.__rno_kf_s) {
    const t = (window.__rno_kf_s = document.createElement('style'))
    ;(t.textContent = '@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }'), document.head.appendChild(t)
  }
}
var lc = Object.defineProperty,
  cc = (t, e, n) => (e in t ? lc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n)),
  re = (t, e, n) => (cc(t, typeof e != 'symbol' ? e + '' : e, n), n)
class uc {
  constructor(e, n) {
    re(this, '_state', 'unattached'),
      re(this, '_config'),
      re(this, '_resizing', !1),
      re(this, '_ro'),
      re(this, '_seed', Or()),
      re(this, '_e'),
      re(this, '_svg'),
      re(this, '_lastSizes', []),
      re(this, '_animationDelay', 0),
      re(this, '_resizeListener', () => {
        this._resizing ||
          ((this._resizing = !0),
          setTimeout(() => {
            ;(this._resizing = !1), this._state === 'showing' && this.haveRectsChanged() && this.show()
          }, 400))
      }),
      re(this, 'pendingRefresh'),
      (this._e = e),
      (this._config = JSON.parse(JSON.stringify(n))),
      this.attach()
  }
  getConfig(e) {
    return this._config[e]
  }
  setConfig(e, n) {
    this._config[e] !== n && ((this._config[e] = n), this.refresh())
  }
  get animate() {
    return this._config.animate
  }
  set animate(e) {
    this._config.animate = e
  }
  get animationDuration() {
    return this._config.animationDuration
  }
  set animationDuration(e) {
    this._config.animationDuration = e
  }
  get iterations() {
    return this._config.iterations
  }
  set iterations(e) {
    this._config.iterations = e
  }
  get color() {
    return this._config.color
  }
  set color(e) {
    this._config.color !== e && ((this._config.color = e), this.refresh())
  }
  get class() {
    return this._config.class
  }
  set class(e) {
    this._config.class !== e &&
      ((this._config.class = e),
      this._svg &&
        this._svg.setAttribute('class', ['rough-annotation', this._config.class || ''].filter(Boolean).join(' ')))
  }
  get strokeWidth() {
    return this._config.strokeWidth
  }
  set strokeWidth(e) {
    this._config.strokeWidth !== e && ((this._config.strokeWidth = e), this.refresh())
  }
  get padding() {
    return this._config.padding
  }
  set padding(e) {
    this._config.padding !== e && ((this._config.padding = e), this.refresh())
  }
  attach() {
    if (this._state === 'unattached' && this._e.parentElement) {
      ac()
      const e = (this._svg = document.createElementNS(Dr, 'svg'))
      e.setAttribute('class', ['rough-annotation', this._config.class || ''].filter(Boolean).join(' '))
      const n = e.style
      ;(n.position = 'absolute'),
        (n.top = '0'),
        (n.left = '0'),
        (n.overflow = 'visible'),
        (n.pointerEvents = 'none'),
        (n.width = '100px'),
        (n.height = '100px')
      const s = this._config.type === 'highlight'
      if ((this._e.insertAdjacentElement(s ? 'beforebegin' : 'afterend', e), (this._state = 'not-showing'), s)) {
        const r = window.getComputedStyle(this._e).position
        ;(!r || r === 'static') && (this._e.style.position = 'relative')
      }
      this.attachListeners()
    }
  }
  detachListeners() {
    window.removeEventListener('resize', this._resizeListener), this._ro && this._ro.unobserve(this._e)
  }
  attachListeners() {
    this.detachListeners(),
      window.addEventListener('resize', this._resizeListener, { passive: !0 }),
      !this._ro &&
        'ResizeObserver' in window &&
        (this._ro = new window.ResizeObserver(e => {
          for (const n of e) n.contentRect && this._resizeListener()
        })),
      this._ro && this._ro.observe(this._e)
  }
  haveRectsChanged() {
    if (this._lastSizes.length) {
      const e = this.rects()
      if (e.length === this._lastSizes.length) {
        for (let n = 0; n < e.length; n++) if (!this.isSameRect(e[n], this._lastSizes[n])) return !0
      } else return !0
    }
    return !1
  }
  isSameRect(e, n) {
    const s = (r, o) => Math.round(r) === Math.round(o)
    return s(e.x, n.x) && s(e.y, n.y) && s(e.w, n.w) && s(e.h, n.h)
  }
  isShowing() {
    return this._state !== 'not-showing'
  }
  refresh() {
    this.isShowing() &&
      !this.pendingRefresh &&
      (this.pendingRefresh = Promise.resolve().then(() => {
        this.isShowing() && this.show(), delete this.pendingRefresh
      }))
  }
  async show() {
    switch (this._state) {
      case 'unattached':
        break
      case 'showing':
        this.hide(), this._svg && (await this.render(this._svg, !0))
        break
      case 'not-showing':
        this.attach(), this._svg && (await this.render(this._svg, !1))
        break
    }
  }
  hide() {
    if (this._svg) for (; this._svg.lastChild; ) this._svg.removeChild(this._svg.lastChild)
    this._state = 'not-showing'
  }
  remove() {
    this._svg && this._svg.parentElement && this._svg.parentElement.removeChild(this._svg),
      (this._svg = void 0),
      (this._state = 'unattached'),
      this.detachListeners()
  }
  async render(e, n) {
    let s = this._config
    n && ((s = JSON.parse(JSON.stringify(this._config))), (s.animate = !1))
    const r = this.rects()
    let o = 0
    r.forEach(c => (o += c.w))
    const i = s.animationDuration || nc
    let a = 0
    const l = []
    for (let c = 0; c < r.length; c++) {
      const u = r[c],
        h = i * (u.w / o)
      l.push(oc(e, r[c], s, a + this._animationDelay + (this._config.delay || 0), h, this._seed)), (a += h)
    }
    return (this._lastSizes = r), (this._state = 'showing'), await Promise.all(l)
  }
  rects() {
    const e = []
    if (this._svg)
      if (this._config.multiline) {
        const n = this._e.getClientRects()
        for (let s = 0; s < n.length; s++) e.push(this.svgRect(this._svg, n[s]))
      } else e.push(this.svgRect(this._svg, this._e.getBoundingClientRect()))
    return e
  }
  svgRect(e, n) {
    const s = e.getBoundingClientRect(),
      r = n
    return { x: (r.x || r.left) - (s.x || s.left), y: (r.y || r.top) - (s.y || s.top), w: r.width, h: r.height }
  }
}
function fc(t, e) {
  return new uc(t, e)
}
function G(t, e) {
  return (t.class = [t.class, e].filter(Boolean).join(' ')), t
}
const Bs = {
    box: t => Object.assign(t, { type: 'box' }),
    circle: t => Object.assign(t, { type: 'circle' }),
    underline: t => Object.assign(t, { type: 'underline' }),
    highlight: t => Object.assign(t, { type: 'highlight' }),
    'strike-through': t => Object.assign(t, { type: 'strike-through' }),
    'crossed-off': t => Object.assign(t, { type: 'crossed-off' }),
    bracket: t => Object.assign(t, { type: 'bracket' }),
    strike: t => Object.assign(t, { type: 'strike-through' }),
    cross: t => Object.assign(t, { type: 'crossed-off' }),
    crossed: t => Object.assign(t, { type: 'crossed-off' }),
    linethrough: t => Object.assign(t, { type: 'strike-through' }),
    'line-through': t => Object.assign(t, { type: 'strike-through' }),
    black: t => G(t, 'text-black'),
    blue: t => G(t, 'text-blue'),
    cyan: t => G(t, 'text-cyan'),
    gray: t => G(t, 'text-gray'),
    green: t => G(t, 'text-green'),
    indigo: t => G(t, 'text-indigo'),
    lime: t => G(t, 'text-lime'),
    orange: t => G(t, 'text-orange'),
    pink: t => G(t, 'text-pink'),
    purple: t => G(t, 'text-purple'),
    red: t => G(t, 'text-red'),
    teal: t => G(t, 'text-teal'),
    white: t => G(t, 'text-white'),
    yellow: t => G(t, 'text-yellow'),
  },
  dc = [
    [
      /^delay-?(\d+)?$/,
      (t, e, n) => {
        const s = (t[1] ? Number.parseInt(t[1]) : n) || 300
        return (e.delay = s), e
      },
    ],
    [
      /^(?:op|opacity)-?(\d+)?$/,
      (t, e, n) => {
        const s = (t[1] ? Number.parseInt(t[1]) : n) || 100
        return (e.opacity = s / 100), e
      },
    ],
  ]
function hc() {
  return {
    install(t) {
      t.directive('mark', {
        name: 'v-mark',
        mounted: (e, n) => {
          const s = b(() => {
              const i = typeof n.value == 'object' && !Array.isArray(n.value) ? { ...n.value } : { at: n.value }
              let a = { at: i.at }
              const l = Object.entries(n.modifiers).filter(([u, h]) => {
                if (Bs[u]) return (a = Bs[u](a, h)), !1
                for (const [d, f] of dc) {
                  const g = u.match(d)
                  if (g) return (a = f(g, a, h)), !1
                }
                return !0
              })
              l.length && console.warn('[Slidev] Invalid modifiers for v-mark:', l)
              const c = { ...a, ...i }
              return c.type || (c.type = 'underline'), c
            }),
            r = fc(e, s.value),
            o = Et(e, n, s.value.at)
          if (!o) {
            r.show()
            return
          }
          e.watchStopHandle = tt(() => {
            let i
            s.value.class && (r.class = s.value.class), s.value.color && (r.color = s.value.color)
            const a = s.value.at
            a === !0 ? (i = !0) : a === !1 ? (i = !1) : (i = o.isActive.value), i != null && (i ? r.show() : r.hide())
          })
        },
        unmounted: e => {
          var n
          ;(n = e.watchStopHandle) == null || n.call(e)
        },
      })
    },
  }
}
function gc() {
  return {
    install(t) {
      const e = oo()
      t.directive('motion', {
        name: 'v-motion',
        mounted(n, s, r, o) {
          var _, w, T
          const i = nt(s, Kt),
            a = nt(s, Cn),
            l = nt(s, In),
            { currentPage: c, clicks: u, isPrintMode: h } = _n(),
            d = (r.props = { ...r.props }),
            f = { ...d.initial, ...((_ = d.variants) == null ? void 0 : _['slidev-initial']) },
            g = { ...d.enter, ...((w = d.variants) == null ? void 0 : w['slidev-enter']) },
            p = { ...d.leave, ...((T = d.variants) == null ? void 0 : T['slidev-leave']) }
          delete d.initial, delete d.enter, delete d.leave
          const y = `${Vn()}-`,
            m = []
          for (const S of Object.keys(d))
            if (S.startsWith('click-')) {
              const L = S.slice(6),
                R = L.includes('-') ? L.split('-').map(Number) : +L,
                N = y + L
              m.push({ id: N, at: R, variant: { ...d[S] }, info: i == null ? void 0 : i.value.calculate(R) }),
                delete d[S]
            }
          m.sort((S, L) => (Array.isArray(S.at) ? S.at[0] : S.at) - (Array.isArray(L.at) ? L.at[0] : L.at)),
            e.created(n, s, r, o),
            e.mounted(n, s, r, o)
          const v = n.motionInstance
          ;(v.clickIds = m.map(S => S.id)),
            v.set(f),
            (v.watchStopHandle = ee(
              [a, c, u].filter(Boolean),
              () => {
                var L
                const S = ((L = Mr.get(n)) == null ? void 0 : L.visibilityState.value) ?? 'shown'
                if (!(i != null && i.value) || !['slide', 'presenter'].includes((l == null ? void 0 : l.value) ?? '')) {
                  const R = { ...f, ...g }
                  for (const { variant: N } of m) Object.assign(R, N)
                  v.set(R)
                } else if (h.value || (a == null ? void 0 : a.value) === c.value)
                  if (S === 'shown') {
                    const R = { ...f, ...g }
                    for (const { variant: N, info: K } of m) (!K || K.isActive.value) && Object.assign(R, N)
                    h.value ? v.set(R) : v.apply(R)
                  } else v.apply(S === 'before' ? f : p)
                else v.apply(((a == null ? void 0 : a.value) ?? -1) > c.value ? f : p)
              },
              { immediate: !0 },
            ))
        },
        unmounted(n) {
          n.motionInstance.watchStopHandle()
        },
      })
    },
  }
}
const pc = []
function mc() {
  const t = []
  {
    let e = function (n) {
      if (!H.remote || H.remote === n.query.password) return !0
      if (H.remote && n.query.password === void 0) {
        const s = prompt('Enter password')
        if (H.remote === s) return !0
      }
      return n.params.no ? { path: `/${n.params.no}` } : { path: '' }
    }
    t.push(
      {
        name: 'entry',
        path: '/entry',
        component: () => O(() => import('./slidev/entry-D17KSbzy.js'), __vite__mapDeps([41, 42, 1, 4, 5, 43])),
      },
      {
        name: 'overview',
        path: '/overview',
        component: () =>
          O(() => import('./slidev/overview-DvtxEEUY.js'), __vite__mapDeps([44, 42, 1, 45, 46, 47, 48, 49, 4, 5])),
      },
      {
        name: 'notes',
        path: '/notes',
        component: () => O(() => import('./slidev/notes-DDSBlgEu.js'), __vite__mapDeps([50, 42, 1, 45, 46, 49, 4, 5])),
        beforeEnter: e,
      },
      {
        name: 'presenter',
        path: '/presenter/:no',
        component: () =>
          O(
            () => import('./slidev/presenter-Dx5WeT_W.js'),
            __vite__mapDeps([51, 42, 1, 47, 48, 52, 8, 3, 9, 49, 4, 5, 53, 45, 46, 54, 55, 56]),
          ),
        beforeEnter: e,
      },
      { path: '/presenter', redirect: { path: '/presenter/1' } },
    )
  }
  return (
    t.push(
      {
        name: 'play',
        path: '/:no',
        component: () =>
          O(
            () => import('./slidev/play-D6kPlymz.js'),
            __vite__mapDeps([57, 1, 47, 48, 52, 42, 8, 3, 9, 49, 4, 5, 53, 58]),
          ),
      },
      { path: '', redirect: { path: '/1' } },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => O(() => import('./slidev/404-C04dTQSt.js'), __vite__mapDeps([59, 1, 4, 5, 60])),
      },
    ),
    pc.reduce((e, n) => n(e), t)
  )
}
async function yc(t) {
  function e() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
  }
  e(), window.addEventListener('resize', e)
  const n = io({ history: ao('/talks/freelancing-with-ai/'), routes: mc() })
  t.use(n),
    t.use(ii()),
    t.use(vl()),
    t.use(hc()),
    t.use($l()),
    t.use(gc()),
    t.use(co, { container: '#twoslash-container' })
  const s = { app: t, router: n }
  for (const r of yl) await r(s)
}
const Rr = lo(ml)
yc(Rr)
Rr.mount('#app')
export {
  Ac as $,
  wc as A,
  Vc as B,
  Pt as C,
  Ft as D,
  wl as E,
  Uc as F,
  Zc as G,
  bc as H,
  Nc as I,
  Tr as J,
  kl as K,
  Fc as L,
  Jc as M,
  Rc as N,
  ae as O,
  _l as P,
  Jt as Q,
  Sa as R,
  Tl as S,
  zc as T,
  Dn as U,
  bt as V,
  xc as W,
  qc as X,
  Wc as Y,
  Ec as Z,
  gi as _,
  _n as a,
  $c as a0,
  ne as a1,
  wr as a2,
  Sr as a3,
  Ys as a4,
  lr as a5,
  Mc as a6,
  Ta as a7,
  Cn as a8,
  In as a9,
  Kt as aa,
  Oa as ab,
  Dc as ac,
  Ma as ad,
  Tc as ae,
  $a as af,
  Vn as ag,
  vn as ah,
  fo as ai,
  dr as b,
  fi as c,
  Ic as d,
  ar as e,
  Bc as f,
  Ze as g,
  Pc as h,
  As as i,
  Kc as j,
  wt as k,
  bl as l,
  zt as m,
  Gc as n,
  Qc as o,
  Sc as p,
  gn as q,
  kc as r,
  en as s,
  Oc as t,
  li as u,
  H as v,
  O as w,
  jc as x,
  Hc as y,
  mo as z,
}
