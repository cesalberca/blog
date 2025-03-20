/**
 * @vue/shared v3.5.10
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function vt(e) {
  const t = Object.create(null)
  for (const n of e.split(',')) t[n] = 1
  return n => n in t
}
const oe = {},
  ns = [],
  ze = () => {},
  Ns = () => !1,
  jn = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  gl = e => e.startsWith('onUpdate:'),
  le = Object.assign,
  yl = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  yp = Object.prototype.hasOwnProperty,
  de = (e, t) => yp.call(e, t),
  j = Array.isArray,
  ss = e => _s(e) === '[object Map]',
  Un = e => _s(e) === '[object Set]',
  Rc = e => _s(e) === '[object Date]',
  vp = e => _s(e) === '[object RegExp]',
  Q = e => typeof e == 'function',
  ne = e => typeof e == 'string',
  yt = e => typeof e == 'symbol',
  be = e => e !== null && typeof e == 'object',
  vl = e => (be(e) || Q(e)) && Q(e.then) && Q(e.catch),
  vu = Object.prototype.toString,
  _s = e => vu.call(e),
  bp = e => _s(e).slice(8, -1),
  Ii = e => _s(e) === '[object Object]',
  bl = e => ne(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  hn = vt(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  Sp = vt('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo'),
  Pi = e => {
    const t = Object.create(null)
    return n => t[n] || (t[n] = e(n))
  },
  _p = /-(\w)/g,
  we = Pi(e => e.replace(_p, (t, n) => (n ? n.toUpperCase() : ''))),
  Ep = /\B([A-Z])/g,
  ct = Pi(e => e.replace(Ep, '-$1').toLowerCase()),
  Wn = Pi(e => e.charAt(0).toUpperCase() + e.slice(1)),
  rs = Pi(e => (e ? `on${Wn(e)}` : '')),
  Qe = (e, t) => !Object.is(e, t),
  is = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  bu = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: s, value: n })
  },
  si = e => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  ri = e => {
    const t = ne(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let Ic
const Su = () =>
  Ic ||
  (Ic =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function wp(e, t) {
  return e + JSON.stringify(t, (n, s) => (typeof s == 'function' ? s.toString() : s))
}
const Tp =
    'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol',
  Cp = vt(Tp)
function cr(e) {
  if (j(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = ne(s) ? _u(s) : cr(s)
      if (r) for (const i in r) t[i] = r[i]
    }
    return t
  } else if (ne(e) || be(e)) return e
}
const Ap = /;(?![^(]*\))/g,
  Op = /:([^]+)/,
  xp = /\/\*[^]*?\*\//g
function _u(e) {
  const t = {}
  return (
    e
      .replace(xp, '')
      .split(Ap)
      .forEach(n => {
        if (n) {
          const s = n.split(Op)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function ar(e) {
  let t = ''
  if (ne(e)) t = e
  else if (j(e))
    for (let n = 0; n < e.length; n++) {
      const s = ar(e[n])
      s && (t += s + ' ')
    }
  else if (be(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
function Np(e) {
  if (!e) return null
  let { class: t, style: n } = e
  return t && !ne(t) && (e.class = ar(t)), n && (e.style = cr(n)), e
}
const Rp =
    'html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot',
  Ip =
    'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view',
  Pp =
    'annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics',
  Mp = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr',
  kp = vt(Rp),
  Fp = vt(Ip),
  Lp = vt(Pp),
  Dp = vt(Mp),
  Vp = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  $p = vt(Vp)
function Eu(e) {
  return !!e || e === ''
}
function Bp(e, t) {
  if (e.length !== t.length) return !1
  let n = !0
  for (let s = 0; n && s < e.length; s++) n = yn(e[s], t[s])
  return n
}
function yn(e, t) {
  if (e === t) return !0
  let n = Rc(e),
    s = Rc(t)
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1
  if (((n = yt(e)), (s = yt(t)), n || s)) return e === t
  if (((n = j(e)), (s = j(t)), n || s)) return n && s ? Bp(e, t) : !1
  if (((n = be(e)), (s = be(t)), n || s)) {
    if (!n || !s) return !1
    const r = Object.keys(e).length,
      i = Object.keys(t).length
    if (r !== i) return !1
    for (const o in e) {
      const l = e.hasOwnProperty(o),
        c = t.hasOwnProperty(o)
      if ((l && !c) || (!l && c) || !yn(e[o], t[o])) return !1
    }
  }
  return String(e) === String(t)
}
function Mi(e, t) {
  return e.findIndex(n => yn(n, t))
}
const wu = e => !!(e && e.__v_isRef === !0),
  Tu = e =>
    ne(e)
      ? e
      : e == null
        ? ''
        : j(e) || (be(e) && (e.toString === vu || !Q(e.toString)))
          ? wu(e)
            ? Tu(e.value)
            : JSON.stringify(e, Cu, 2)
          : String(e),
  Cu = (e, t) =>
    wu(t)
      ? Cu(e, t.value)
      : ss(t)
        ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r], i) => ((n[io(s, i) + ' =>'] = r), n), {}) }
        : Un(t)
          ? { [`Set(${t.size})`]: [...t.values()].map(n => io(n)) }
          : yt(t)
            ? io(t)
            : be(t) && !j(t) && !Ii(t)
              ? String(t)
              : t,
  io = (e, t = '') => {
    var n
    return yt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.5.10
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ze
class Sl {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Ze),
      !t && Ze && (this.index = (Ze.scopes || (Ze.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let t, n
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let t, n
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = Ze
      try {
        return (Ze = this), t()
      } finally {
        Ze = n
      }
    }
  }
  on() {
    Ze = this
  }
  off() {
    Ze = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (this.scopes) for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function Au(e) {
  return new Sl(e)
}
function ki() {
  return Ze
}
function _l(e, t = !1) {
  Ze && Ze.cleanups.push(e)
}
let _e
const oo = new WeakSet()
class Us {
  constructor(t) {
    ;(this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Ze && Ze.active && Ze.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 && ((this.flags &= -65), oo.has(this) && (oo.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || xu(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;(this.flags |= 2), Pc(this), Nu(this)
    const t = _e,
      n = Rt
    ;(_e = this), (Rt = !0)
    try {
      return this.fn()
    } finally {
      Ru(this), (_e = t), (Rt = n), (this.flags &= -3)
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Tl(t)
      ;(this.deps = this.depsTail = void 0), Pc(this), this.onStop && this.onStop(), (this.flags &= -2)
    }
  }
  trigger() {
    this.flags & 64 ? oo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    Ro(this) && this.run()
  }
  get dirty() {
    return Ro(this)
  }
}
let Ou = 0,
  es
function xu(e) {
  ;(e.flags |= 8), (e.next = es), (es = e)
}
function El() {
  Ou++
}
function wl() {
  if (--Ou > 0) return
  let e
  for (; es; ) {
    let t = es,
      n
    for (; t; ) t.flags & 1 || (t.flags &= -9), (t = t.next)
    for (t = es, es = void 0; t; ) {
      if (((n = t.next), (t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger()
        } catch (s) {
          e || (e = s)
        }
      t = n
    }
  }
  if (e) throw e
}
function Nu(e) {
  for (let t = e.deps; t; t = t.nextDep) (t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t)
}
function Ru(e) {
  let t,
    n = e.depsTail,
    s = n
  for (; s; ) {
    const r = s.prevDep
    s.version === -1 ? (s === n && (n = r), Tl(s), Hp(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r)
  }
  ;(e.deps = t), (e.depsTail = n)
}
function Ro(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || (t.dep.computed && (Iu(t.dep.computed) || t.dep.version !== t.version)))
      return !0
  return !!e._dirty
}
function Iu(e) {
  if ((e.flags & 4 && !(e.flags & 16)) || ((e.flags &= -17), e.globalVersion === Ws)) return
  e.globalVersion = Ws
  const t = e.dep
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !Ro(e))) {
    e.flags &= -3
    return
  }
  const n = _e,
    s = Rt
  ;(_e = e), (Rt = !0)
  try {
    Nu(e)
    const r = e.fn(e._value)
    ;(t.version === 0 || Qe(r, e._value)) && ((e._value = r), t.version++)
  } catch (r) {
    throw (t.version++, r)
  } finally {
    ;(_e = n), (Rt = s), Ru(e), (e.flags &= -3)
  }
}
function Tl(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && (n.subs = s),
    !n.subs && n.computed)
  ) {
    n.computed.flags &= -5
    for (let i = n.computed.deps; i; i = i.nextDep) Tl(i, !0)
  }
  !t && !--n.sc && n.map && n.map.delete(n.key)
}
function Hp(e) {
  const { prevDep: t, nextDep: n } = e
  t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0))
}
function jp(e, t) {
  e.effect instanceof Us && (e = e.effect.fn)
  const n = new Us(e)
  t && le(n, t)
  try {
    n.run()
  } catch (r) {
    throw (n.stop(), r)
  }
  const s = n.run.bind(n)
  return (s.effect = n), s
}
function Up(e) {
  e.effect.stop()
}
let Rt = !0
const Pu = []
function Sn() {
  Pu.push(Rt), (Rt = !1)
}
function _n() {
  const e = Pu.pop()
  Rt = e === void 0 ? !0 : e
}
function Pc(e) {
  const { cleanup: t } = e
  if (((e.cleanup = void 0), t)) {
    const n = _e
    _e = void 0
    try {
      t()
    } finally {
      _e = n
    }
  }
}
let Ws = 0
class Wp {
  constructor(t, n) {
    ;(this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0)
  }
}
class Fi {
  constructor(t) {
    ;(this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.target = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0)
  }
  track(t) {
    if (!_e || !Rt || _e === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== _e)
      (n = this.activeLink = new Wp(_e, this)),
        _e.deps
          ? ((n.prevDep = _e.depsTail), (_e.depsTail.nextDep = n), (_e.depsTail = n))
          : (_e.deps = _e.depsTail = n),
        Mu(n)
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep
      ;(s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = _e.depsTail),
        (n.nextDep = void 0),
        (_e.depsTail.nextDep = n),
        (_e.depsTail = n),
        _e.deps === n && (_e.deps = s)
    }
    return n
  }
  trigger(t) {
    this.version++, Ws++, this.notify(t)
  }
  notify(t) {
    El()
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
    } finally {
      wl()
    }
  }
}
function Mu(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let s = t.deps; s; s = s.nextDep) Mu(s)
    }
    const n = e.dep.subs
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e)
  }
}
const ii = new WeakMap(),
  Mn = Symbol(''),
  Io = Symbol(''),
  Ks = Symbol('')
function Je(e, t, n) {
  if (Rt && _e) {
    let s = ii.get(e)
    s || ii.set(e, (s = new Map()))
    let r = s.get(n)
    r || (s.set(n, (r = new Fi())), (r.target = e), (r.map = s), (r.key = n)), r.track()
  }
}
function zt(e, t, n, s, r, i) {
  const o = ii.get(e)
  if (!o) {
    Ws++
    return
  }
  const l = c => {
    c && c.trigger()
  }
  if ((El(), t === 'clear')) o.forEach(l)
  else {
    const c = j(e),
      f = c && bl(n)
    if (c && n === 'length') {
      const u = Number(s)
      o.forEach((a, h) => {
        ;(h === 'length' || h === Ks || (!yt(h) && h >= u)) && l(a)
      })
    } else
      switch ((n !== void 0 && l(o.get(n)), f && l(o.get(Ks)), t)) {
        case 'add':
          c ? f && l(o.get('length')) : (l(o.get(Mn)), ss(e) && l(o.get(Io)))
          break
        case 'delete':
          c || (l(o.get(Mn)), ss(e) && l(o.get(Io)))
          break
        case 'set':
          ss(e) && l(o.get(Mn))
          break
      }
  }
  wl()
}
function Kp(e, t) {
  const n = ii.get(e)
  return n && n.get(t)
}
function zn(e) {
  const t = ce(e)
  return t === e ? t : (Je(t, 'iterate', Ks), gt(e) ? t : t.map(Ke))
}
function Li(e) {
  return Je((e = ce(e)), 'iterate', Ks), e
}
const qp = {
  __proto__: null,
  [Symbol.iterator]() {
    return lo(this, Symbol.iterator, Ke)
  },
  concat(...e) {
    return zn(this).concat(...e.map(t => (j(t) ? zn(t) : t)))
  },
  entries() {
    return lo(this, 'entries', e => ((e[1] = Ke(e[1])), e))
  },
  every(e, t) {
    return Bt(this, 'every', e, t, void 0, arguments)
  },
  filter(e, t) {
    return Bt(this, 'filter', e, t, n => n.map(Ke), arguments)
  },
  find(e, t) {
    return Bt(this, 'find', e, t, Ke, arguments)
  },
  findIndex(e, t) {
    return Bt(this, 'findIndex', e, t, void 0, arguments)
  },
  findLast(e, t) {
    return Bt(this, 'findLast', e, t, Ke, arguments)
  },
  findLastIndex(e, t) {
    return Bt(this, 'findLastIndex', e, t, void 0, arguments)
  },
  forEach(e, t) {
    return Bt(this, 'forEach', e, t, void 0, arguments)
  },
  includes(...e) {
    return co(this, 'includes', e)
  },
  indexOf(...e) {
    return co(this, 'indexOf', e)
  },
  join(e) {
    return zn(this).join(e)
  },
  lastIndexOf(...e) {
    return co(this, 'lastIndexOf', e)
  },
  map(e, t) {
    return Bt(this, 'map', e, t, void 0, arguments)
  },
  pop() {
    return Cs(this, 'pop')
  },
  push(...e) {
    return Cs(this, 'push', e)
  },
  reduce(e, ...t) {
    return Mc(this, 'reduce', e, t)
  },
  reduceRight(e, ...t) {
    return Mc(this, 'reduceRight', e, t)
  },
  shift() {
    return Cs(this, 'shift')
  },
  some(e, t) {
    return Bt(this, 'some', e, t, void 0, arguments)
  },
  splice(...e) {
    return Cs(this, 'splice', e)
  },
  toReversed() {
    return zn(this).toReversed()
  },
  toSorted(e) {
    return zn(this).toSorted(e)
  },
  toSpliced(...e) {
    return zn(this).toSpliced(...e)
  },
  unshift(...e) {
    return Cs(this, 'unshift', e)
  },
  values() {
    return lo(this, 'values', Ke)
  },
}
function lo(e, t, n) {
  const s = Li(e),
    r = s[t]()
  return (
    s !== e &&
      !gt(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next()
        return i.value && (i.value = n(i.value)), i
      })),
    r
  )
}
const Gp = Array.prototype
function Bt(e, t, n, s, r, i) {
  const o = Li(e),
    l = o !== e && !gt(e),
    c = o[t]
  if (c !== Gp[t]) {
    const a = c.apply(e, i)
    return l ? Ke(a) : a
  }
  let f = n
  o !== e &&
    (l
      ? (f = function (a, h) {
          return n.call(this, Ke(a), h, e)
        })
      : n.length > 2 &&
        (f = function (a, h) {
          return n.call(this, a, h, e)
        }))
  const u = c.call(o, f, s)
  return l && r ? r(u) : u
}
function Mc(e, t, n, s) {
  const r = Li(e)
  let i = n
  return (
    r !== e &&
      (gt(e)
        ? n.length > 3 &&
          (i = function (o, l, c) {
            return n.call(this, o, l, c, e)
          })
        : (i = function (o, l, c) {
            return n.call(this, o, Ke(l), c, e)
          })),
    r[t](i, ...s)
  )
}
function co(e, t, n) {
  const s = ce(e)
  Je(s, 'iterate', Ks)
  const r = s[t](...n)
  return (r === -1 || r === !1) && Bi(n[0]) ? ((n[0] = ce(n[0])), s[t](...n)) : r
}
function Cs(e, t, n = []) {
  Sn(), El()
  const s = ce(e)[t].apply(e, n)
  return wl(), _n(), s
}
const zp = vt('__proto__,__v_isRef,__isVue'),
  ku = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter(e => e !== 'arguments' && e !== 'caller')
      .map(e => Symbol[e])
      .filter(yt),
  )
function Yp(e) {
  yt(e) || (e = String(e))
  const t = ce(this)
  return Je(t, 'has', e), t.hasOwnProperty(e)
}
class Fu {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, s) {
    const r = this._isReadonly,
      i = this._isShallow
    if (n === '__v_isReactive') return !r
    if (n === '__v_isReadonly') return r
    if (n === '__v_isShallow') return i
    if (n === '__v_raw')
      return s === (r ? (i ? Hu : Bu) : i ? $u : Vu).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const o = j(t)
    if (!r) {
      let c
      if (o && (c = qp[n])) return c
      if (n === 'hasOwnProperty') return Yp
    }
    const l = Reflect.get(t, n, Te(t) ? t : s)
    return (yt(n) ? ku.has(n) : zp(n)) || (r || Je(t, 'get', n), i)
      ? l
      : Te(l)
        ? o && bl(n)
          ? l
          : l.value
        : be(l)
          ? r
            ? Nt(l)
            : ut(l)
          : l
  }
}
class Lu extends Fu {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let i = t[n]
    if (!this._isShallow) {
      const c = vn(i)
      if ((!gt(s) && !vn(s) && ((i = ce(i)), (s = ce(s))), !j(t) && Te(i) && !Te(s)))
        return c ? !1 : ((i.value = s), !0)
    }
    const o = j(t) && bl(n) ? Number(n) < t.length : de(t, n),
      l = Reflect.set(t, n, s, Te(t) ? t : r)
    return t === ce(r) && (o ? Qe(s, i) && zt(t, 'set', n, s) : zt(t, 'add', n, s)), l
  }
  deleteProperty(t, n) {
    const s = de(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return r && s && zt(t, 'delete', n, void 0), r
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!yt(n) || !ku.has(n)) && Je(t, 'has', n), s
  }
  ownKeys(t) {
    return Je(t, 'iterate', j(t) ? 'length' : Mn), Reflect.ownKeys(t)
  }
}
class Du extends Fu {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const Jp = new Lu(),
  Xp = new Du(),
  Zp = new Lu(!0),
  Qp = new Du(!0),
  Cl = e => e,
  Di = e => Reflect.getPrototypeOf(e)
function Ar(e, t, n = !1, s = !1) {
  e = e.__v_raw
  const r = ce(e),
    i = ce(t)
  n || (Qe(t, i) && Je(r, 'get', t), Je(r, 'get', i))
  const { has: o } = Di(r),
    l = s ? Cl : n ? Ol : Ke
  if (o.call(r, t)) return l(e.get(t))
  if (o.call(r, i)) return l(e.get(i))
  e !== r && e.get(t)
}
function Or(e, t = !1) {
  const n = this.__v_raw,
    s = ce(n),
    r = ce(e)
  return t || (Qe(e, r) && Je(s, 'has', e), Je(s, 'has', r)), e === r ? n.has(e) : n.has(e) || n.has(r)
}
function xr(e, t = !1) {
  return (e = e.__v_raw), !t && Je(ce(e), 'iterate', Mn), Reflect.get(e, 'size', e)
}
function kc(e, t = !1) {
  !t && !gt(e) && !vn(e) && (e = ce(e))
  const n = ce(this)
  return Di(n).has.call(n, e) || (n.add(e), zt(n, 'add', e, e)), this
}
function Fc(e, t, n = !1) {
  !n && !gt(t) && !vn(t) && (t = ce(t))
  const s = ce(this),
    { has: r, get: i } = Di(s)
  let o = r.call(s, e)
  o || ((e = ce(e)), (o = r.call(s, e)))
  const l = i.call(s, e)
  return s.set(e, t), o ? Qe(t, l) && zt(s, 'set', e, t) : zt(s, 'add', e, t), this
}
function Lc(e) {
  const t = ce(this),
    { has: n, get: s } = Di(t)
  let r = n.call(t, e)
  r || ((e = ce(e)), (r = n.call(t, e))), s && s.call(t, e)
  const i = t.delete(e)
  return r && zt(t, 'delete', e, void 0), i
}
function Dc() {
  const e = ce(this),
    t = e.size !== 0,
    n = e.clear()
  return t && zt(e, 'clear', void 0, void 0), n
}
function Nr(e, t) {
  return function (s, r) {
    const i = this,
      o = i.__v_raw,
      l = ce(o),
      c = t ? Cl : e ? Ol : Ke
    return !e && Je(l, 'iterate', Mn), o.forEach((f, u) => s.call(r, c(f), c(u), i))
  }
}
function Rr(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = ce(r),
      o = ss(i),
      l = e === 'entries' || (e === Symbol.iterator && o),
      c = e === 'keys' && o,
      f = r[e](...s),
      u = n ? Cl : t ? Ol : Ke
    return (
      !t && Je(i, 'iterate', c ? Io : Mn),
      {
        next() {
          const { value: a, done: h } = f.next()
          return h ? { value: a, done: h } : { value: l ? [u(a[0]), u(a[1])] : u(a), done: h }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function Qt(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function em() {
  const e = {
      get(i) {
        return Ar(this, i)
      },
      get size() {
        return xr(this)
      },
      has: Or,
      add: kc,
      set: Fc,
      delete: Lc,
      clear: Dc,
      forEach: Nr(!1, !1),
    },
    t = {
      get(i) {
        return Ar(this, i, !1, !0)
      },
      get size() {
        return xr(this)
      },
      has: Or,
      add(i) {
        return kc.call(this, i, !0)
      },
      set(i, o) {
        return Fc.call(this, i, o, !0)
      },
      delete: Lc,
      clear: Dc,
      forEach: Nr(!1, !0),
    },
    n = {
      get(i) {
        return Ar(this, i, !0)
      },
      get size() {
        return xr(this, !0)
      },
      has(i) {
        return Or.call(this, i, !0)
      },
      add: Qt('add'),
      set: Qt('set'),
      delete: Qt('delete'),
      clear: Qt('clear'),
      forEach: Nr(!0, !1),
    },
    s = {
      get(i) {
        return Ar(this, i, !0, !0)
      },
      get size() {
        return xr(this, !0)
      },
      has(i) {
        return Or.call(this, i, !0)
      },
      add: Qt('add'),
      set: Qt('set'),
      delete: Qt('delete'),
      clear: Qt('clear'),
      forEach: Nr(!0, !0),
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach(i => {
      ;(e[i] = Rr(i, !1, !1)), (n[i] = Rr(i, !0, !1)), (t[i] = Rr(i, !1, !0)), (s[i] = Rr(i, !0, !0))
    }),
    [e, n, t, s]
  )
}
const [tm, nm, sm, rm] = em()
function Vi(e, t) {
  const n = t ? (e ? rm : sm) : e ? nm : tm
  return (s, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? s
          : Reflect.get(de(n, r) && r in s ? n : s, r, i)
}
const im = { get: Vi(!1, !1) },
  om = { get: Vi(!1, !0) },
  lm = { get: Vi(!0, !1) },
  cm = { get: Vi(!0, !0) },
  Vu = new WeakMap(),
  $u = new WeakMap(),
  Bu = new WeakMap(),
  Hu = new WeakMap()
function am(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function um(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : am(bp(e))
}
function ut(e) {
  return vn(e) ? e : $i(e, !1, Jp, im, Vu)
}
function Al(e) {
  return $i(e, !1, Zp, om, $u)
}
function Nt(e) {
  return $i(e, !0, Xp, lm, Bu)
}
function fm(e) {
  return $i(e, !0, Qp, cm, Hu)
}
function $i(e, t, n, s, r) {
  if (!be(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = r.get(e)
  if (i) return i
  const o = um(e)
  if (o === 0) return e
  const l = new Proxy(e, o === 2 ? s : n)
  return r.set(e, l), l
}
function dn(e) {
  return vn(e) ? dn(e.__v_raw) : !!(e && e.__v_isReactive)
}
function vn(e) {
  return !!(e && e.__v_isReadonly)
}
function gt(e) {
  return !!(e && e.__v_isShallow)
}
function Bi(e) {
  return e ? !!e.__v_raw : !1
}
function ce(e) {
  const t = e && e.__v_raw
  return t ? ce(t) : e
}
function ju(e) {
  return !de(e, '__v_skip') && Object.isExtensible(e) && bu(e, '__v_skip', !0), e
}
const Ke = e => (be(e) ? ut(e) : e),
  Ol = e => (be(e) ? Nt(e) : e)
function Te(e) {
  return e ? e.__v_isRef === !0 : !1
}
function z(e) {
  return Uu(e, !1)
}
function ur(e) {
  return Uu(e, !0)
}
function Uu(e, t) {
  return Te(e) ? e : new hm(e, t)
}
class hm {
  constructor(t, n) {
    ;(this.dep = new Fi()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : ce(t)),
      (this._value = n ? t : Ke(t)),
      (this.__v_isShallow = n)
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || gt(t) || vn(t)
    ;(t = s ? t : ce(t)), Qe(t, n) && ((this._rawValue = t), (this._value = s ? t : Ke(t)), this.dep.trigger())
  }
}
function dm(e) {
  e.dep && e.dep.trigger()
}
function $e(e) {
  return Te(e) ? e.value : e
}
function pm(e) {
  return Q(e) ? e() : $e(e)
}
const mm = {
  get: (e, t, n) => (t === '__v_raw' ? e : $e(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t]
    return Te(r) && !Te(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function xl(e) {
  return dn(e) ? e : new Proxy(e, mm)
}
class gm {
  constructor(t) {
    ;(this.__v_isRef = !0), (this._value = void 0)
    const n = (this.dep = new Fi()),
      { get: s, set: r } = t(n.track.bind(n), n.trigger.bind(n))
    ;(this._get = s), (this._set = r)
  }
  get value() {
    return (this._value = this._get())
  }
  set value(t) {
    this._set(t)
  }
}
function Hi(e) {
  return new gm(e)
}
function Wu(e) {
  const t = j(e) ? new Array(e.length) : {}
  for (const n in e) t[n] = qu(e, n)
  return t
}
class ym {
  constructor(t, n, s) {
    ;(this._object = t), (this._key = n), (this._defaultValue = s), (this.__v_isRef = !0), (this._value = void 0)
  }
  get value() {
    const t = this._object[this._key]
    return (this._value = t === void 0 ? this._defaultValue : t)
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return Kp(ce(this._object), this._key)
  }
}
class vm {
  constructor(t) {
    ;(this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0), (this._value = void 0)
  }
  get value() {
    return (this._value = this._getter())
  }
}
function Ku(e, t, n) {
  return Te(e) ? e : Q(e) ? new vm(e) : be(e) && arguments.length > 1 ? qu(e, t, n) : z(e)
}
function qu(e, t, n) {
  const s = e[t]
  return Te(s) ? s : new ym(e, t, n)
}
class bm {
  constructor(t, n, s) {
    ;(this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Fi(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Ws - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s)
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && _e !== this)) return xu(this), !0
  }
  get value() {
    const t = this.dep.track()
    return Iu(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function Sm(e, t, n = !1) {
  let s, r
  return Q(e) ? (s = e) : ((s = e.get), (r = e.set)), new bm(s, r, n)
}
const _m = { GET: 'get', HAS: 'has', ITERATE: 'iterate' },
  Em = { SET: 'set', ADD: 'add', DELETE: 'delete', CLEAR: 'clear' },
  Ir = {},
  oi = new WeakMap()
let rn
function wm() {
  return rn
}
function Gu(e, t = !1, n = rn) {
  if (n) {
    let s = oi.get(n)
    s || oi.set(n, (s = [])), s.push(e)
  }
}
function Tm(e, t, n = oe) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: c } = n,
    f = v => (r ? v : gt(v) || r === !1 || r === 0 ? qt(v, 1) : qt(v))
  let u,
    a,
    h,
    d,
    m = !1,
    y = !1
  if (
    (Te(e)
      ? ((a = () => e.value), (m = gt(e)))
      : dn(e)
        ? ((a = () => f(e)), (m = !0))
        : j(e)
          ? ((y = !0),
            (m = e.some(v => dn(v) || gt(v))),
            (a = () =>
              e.map(v => {
                if (Te(v)) return v.value
                if (dn(v)) return f(v)
                if (Q(v)) return c ? c(v, 2) : v()
              })))
          : Q(e)
            ? t
              ? (a = c ? () => c(e, 2) : e)
              : (a = () => {
                  if (h) {
                    Sn()
                    try {
                      h()
                    } finally {
                      _n()
                    }
                  }
                  const v = rn
                  rn = u
                  try {
                    return c ? c(e, 3, [d]) : e(d)
                  } finally {
                    rn = v
                  }
                })
            : (a = ze),
    t && r)
  ) {
    const v = a,
      E = r === !0 ? 1 / 0 : r
    a = () => qt(v(), E)
  }
  const w = ki(),
    S = () => {
      u.stop(), w && yl(w.effects, u)
    }
  if (i && t) {
    const v = t
    t = (...E) => {
      v(...E), S()
    }
  }
  let _ = y ? new Array(e.length).fill(Ir) : Ir
  const p = v => {
    if (!(!(u.flags & 1) || (!u.dirty && !v)))
      if (t) {
        const E = u.run()
        if (r || m || (y ? E.some((O, R) => Qe(O, _[R])) : Qe(E, _))) {
          h && h()
          const O = rn
          rn = u
          try {
            const R = [E, _ === Ir ? void 0 : y && _[0] === Ir ? [] : _, d]
            c ? c(t, 3, R) : t(...R), (_ = E)
          } finally {
            rn = O
          }
        }
      } else u.run()
  }
  return (
    l && l(p),
    (u = new Us(a)),
    (u.scheduler = o ? () => o(p, !1) : p),
    (d = v => Gu(v, !1, u)),
    (h = u.onStop =
      () => {
        const v = oi.get(u)
        if (v) {
          if (c) c(v, 4)
          else for (const E of v) E()
          oi.delete(u)
        }
      }),
    t ? (s ? p(!0) : (_ = u.run())) : o ? o(p.bind(null, !0), !0) : u.run(),
    (S.pause = u.pause.bind(u)),
    (S.resume = u.resume.bind(u)),
    (S.stop = S),
    S
  )
}
function qt(e, t = 1 / 0, n) {
  if (t <= 0 || !be(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e
  if ((n.add(e), t--, Te(e))) qt(e.value, t, n)
  else if (j(e)) for (let s = 0; s < e.length; s++) qt(e[s], t, n)
  else if (Un(e) || ss(e))
    e.forEach(s => {
      qt(s, t, n)
    })
  else if (Ii(e)) {
    for (const s in e) qt(e[s], t, n)
    for (const s of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, s) && qt(e[s], t, n)
  }
  return e
}
/**
 * @vue/runtime-core v3.5.10
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const zu = []
function Cm(e) {
  zu.push(e)
}
function Am() {
  zu.pop()
}
function Om(e, t) {}
const xm = {
    SETUP_FUNCTION: 0,
    0: 'SETUP_FUNCTION',
    RENDER_FUNCTION: 1,
    1: 'RENDER_FUNCTION',
    NATIVE_EVENT_HANDLER: 5,
    5: 'NATIVE_EVENT_HANDLER',
    COMPONENT_EVENT_HANDLER: 6,
    6: 'COMPONENT_EVENT_HANDLER',
    VNODE_HOOK: 7,
    7: 'VNODE_HOOK',
    DIRECTIVE_HOOK: 8,
    8: 'DIRECTIVE_HOOK',
    TRANSITION_HOOK: 9,
    9: 'TRANSITION_HOOK',
    APP_ERROR_HANDLER: 10,
    10: 'APP_ERROR_HANDLER',
    APP_WARN_HANDLER: 11,
    11: 'APP_WARN_HANDLER',
    FUNCTION_REF: 12,
    12: 'FUNCTION_REF',
    ASYNC_COMPONENT_LOADER: 13,
    13: 'ASYNC_COMPONENT_LOADER',
    SCHEDULER: 14,
    14: 'SCHEDULER',
    COMPONENT_UPDATE: 15,
    15: 'COMPONENT_UPDATE',
    APP_UNMOUNT_CLEANUP: 16,
    16: 'APP_UNMOUNT_CLEANUP',
  },
  Nm = {
    sp: 'serverPrefetch hook',
    bc: 'beforeCreate hook',
    c: 'created hook',
    bm: 'beforeMount hook',
    m: 'mounted hook',
    bu: 'beforeUpdate hook',
    u: 'updated',
    bum: 'beforeUnmount hook',
    um: 'unmounted hook',
    a: 'activated hook',
    da: 'deactivated hook',
    ec: 'errorCaptured hook',
    rtc: 'renderTracked hook',
    rtg: 'renderTriggered hook',
    0: 'setup function',
    1: 'render function',
    2: 'watcher getter',
    3: 'watcher callback',
    4: 'watcher cleanup function',
    5: 'native event handler',
    6: 'component event handler',
    7: 'vnode hook',
    8: 'directive hook',
    9: 'transition hook',
    10: 'app errorHandler',
    11: 'app warnHandler',
    12: 'ref function',
    13: 'async component loader',
    14: 'scheduler flush',
    15: 'component update',
    16: 'app unmount cleanup function',
  }
function Es(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    Kn(r, t, n)
  }
}
function At(e, t, n, s) {
  if (Q(e)) {
    const r = Es(e, t, n, s)
    return (
      r &&
        vl(r) &&
        r.catch(i => {
          Kn(i, t, n)
        }),
      r
    )
  }
  if (j(e)) {
    const r = []
    for (let i = 0; i < e.length; i++) r.push(At(e[i], t, n, s))
    return r
  }
}
function Kn(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } = (t && t.appContext.config) || oe
  if (t) {
    let l = t.parent
    const c = t.proxy,
      f = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; l; ) {
      const u = l.ec
      if (u) {
        for (let a = 0; a < u.length; a++) if (u[a](e, c, f) === !1) return
      }
      l = l.parent
    }
    if (i) {
      Sn(), Es(i, null, 10, [e, c, f]), _n()
      return
    }
  }
  Rm(e, n, r, s, o)
}
function Rm(e, t, n, s = !0, r = !1) {
  if (r) throw e
  console.error(e)
}
let qs = !1,
  Po = !1
const et = []
let Lt = 0
const os = []
let on = null,
  Xn = 0
const Yu = Promise.resolve()
let Nl = null
function En(e) {
  const t = Nl || Yu
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Im(e) {
  let t = qs ? Lt + 1 : 0,
    n = et.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = et[s],
      i = Gs(r)
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s)
  }
  return t
}
function Rl(e) {
  if (!(e.flags & 1)) {
    const t = Gs(e),
      n = et[et.length - 1]
    !n || (!(e.flags & 2) && t >= Gs(n)) ? et.push(e) : et.splice(Im(t), 0, e), (e.flags |= 1), Ju()
  }
}
function Ju() {
  !qs && !Po && ((Po = !0), (Nl = Yu.then(Xu)))
}
function li(e) {
  j(e) ? os.push(...e) : on && e.id === -1 ? on.splice(Xn + 1, 0, e) : e.flags & 1 || (os.push(e), (e.flags |= 1)), Ju()
}
function Vc(e, t, n = qs ? Lt + 1 : 0) {
  for (; n < et.length; n++) {
    const s = et[n]
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue
      et.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2)
    }
  }
}
function ci(e) {
  if (os.length) {
    const t = [...new Set(os)].sort((n, s) => Gs(n) - Gs(s))
    if (((os.length = 0), on)) {
      on.push(...t)
      return
    }
    for (on = t, Xn = 0; Xn < on.length; Xn++) {
      const n = on[Xn]
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2)
    }
    ;(on = null), (Xn = 0)
  }
}
const Gs = e => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function Xu(e) {
  ;(Po = !1), (qs = !0)
  try {
    for (Lt = 0; Lt < et.length; Lt++) {
      const t = et[Lt]
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Es(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; Lt < et.length; Lt++) {
      const t = et[Lt]
      t && (t.flags &= -2)
    }
    ;(Lt = 0), (et.length = 0), ci(), (qs = !1), (Nl = null), (et.length || os.length) && Xu()
  }
}
let Zn,
  Pr = []
function Zu(e, t) {
  var n, s
  ;(Zn = e),
    Zn
      ? ((Zn.enabled = !0), Pr.forEach(({ event: r, args: i }) => Zn.emit(r, ...i)), (Pr = []))
      : typeof window < 'u' &&
          window.HTMLElement &&
          !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes('jsdom'))
        ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push(i => {
            Zu(i, t)
          }),
          setTimeout(() => {
            Zn || ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (Pr = []))
          }, 3e3))
        : (Pr = [])
}
let Fe = null,
  ji = null
function zs(e) {
  const t = Fe
  return (Fe = e), (ji = (e && e.type.__scopeId) || null), t
}
function Pm(e) {
  ji = e
}
function Mm() {
  ji = null
}
const km = e => Il
function Il(e, t = Fe, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && Bo(-1)
    const i = zs(t)
    let o
    try {
      o = e(...r)
    } finally {
      zs(i), s._d && Bo(1)
    }
    return o
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function Fm(e, t) {
  if (Fe === null) return e
  const n = gr(Fe),
    s = e.dirs || (e.dirs = [])
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, c = oe] = t[r]
    i &&
      (Q(i) && (i = { mounted: i, updated: i }),
      i.deep && qt(o),
      s.push({ dir: i, instance: n, value: o, oldValue: void 0, arg: l, modifiers: c }))
  }
  return e
}
function Dt(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs
  for (let o = 0; o < r.length; o++) {
    const l = r[o]
    i && (l.oldValue = i[o].value)
    let c = l.dir[s]
    c && (Sn(), At(c, n, 8, [e.el, l, e, t]), _n())
  }
}
const Qu = Symbol('_vte'),
  ef = e => e.__isTeleport,
  Ps = e => e && (e.disabled || e.disabled === ''),
  Lm = e => e && (e.defer || e.defer === ''),
  $c = e => typeof SVGElement < 'u' && e instanceof SVGElement,
  Bc = e => typeof MathMLElement == 'function' && e instanceof MathMLElement,
  Mo = (e, t) => {
    const n = e && e.to
    return ne(n) ? (t ? t(n) : null) : n
  },
  Dm = {
    name: 'Teleport',
    __isTeleport: !0,
    process(e, t, n, s, r, i, o, l, c, f) {
      const {
          mc: u,
          pc: a,
          pbc: h,
          o: { insert: d, querySelector: m, createText: y, createComment: w },
        } = f,
        S = Ps(t.props)
      let { shapeFlag: _, children: p, dynamicChildren: v } = t
      if (e == null) {
        const E = (t.el = y('')),
          O = (t.anchor = y(''))
        d(E, n, s), d(O, n, s)
        const R = (C, T) => {
            _ & 16 && (r && r.isCE && (r.ce._teleportTarget = C), u(p, C, T, r, i, o, l, c))
          },
          x = () => {
            const C = (t.target = Mo(t.props, m)),
              T = tf(C, t, y, d)
            C && (o !== 'svg' && $c(C) ? (o = 'svg') : o !== 'mathml' && Bc(C) && (o = 'mathml'), S || (R(C, T), qr(t)))
          }
        S && (R(n, O), qr(t)), Lm(t.props) ? De(x, i) : x()
      } else {
        ;(t.el = e.el), (t.targetStart = e.targetStart)
        const E = (t.anchor = e.anchor),
          O = (t.target = e.target),
          R = (t.targetAnchor = e.targetAnchor),
          x = Ps(e.props),
          C = x ? n : O,
          T = x ? E : R
        if (
          (o === 'svg' || $c(O) ? (o = 'svg') : (o === 'mathml' || Bc(O)) && (o = 'mathml'),
          v ? (h(e.dynamicChildren, v, C, r, i, o, l), Hl(e, t, !0)) : c || a(e, t, C, T, r, i, o, l, !1),
          S)
        )
          x ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Mr(t, n, E, f, 1)
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const I = (t.target = Mo(t.props, m))
          I && Mr(t, I, null, f, 0)
        } else x && Mr(t, O, R, f, 1)
        qr(t)
      }
    },
    remove(e, t, n, { um: s, o: { remove: r } }, i) {
      const { shapeFlag: o, children: l, anchor: c, targetStart: f, targetAnchor: u, target: a, props: h } = e
      if ((a && (r(f), r(u)), i && r(c), o & 16)) {
        const d = i || !Ps(h)
        for (let m = 0; m < l.length; m++) {
          const y = l[m]
          s(y, t, n, d, !!y.dynamicChildren)
        }
      }
    },
    move: Mr,
    hydrate: Vm,
  }
function Mr(e, t, n, { o: { insert: s }, m: r }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n)
  const { el: o, anchor: l, shapeFlag: c, children: f, props: u } = e,
    a = i === 2
  if ((a && s(o, t, n), (!a || Ps(u)) && c & 16)) for (let h = 0; h < f.length; h++) r(f[h], t, n, 2)
  a && s(l, t, n)
}
function Vm(e, t, n, s, r, i, { o: { nextSibling: o, parentNode: l, querySelector: c, insert: f, createText: u } }, a) {
  const h = (t.target = Mo(t.props, c))
  if (h) {
    const d = h._lpa || h.firstChild
    if (t.shapeFlag & 16)
      if (Ps(t.props)) (t.anchor = a(o(e), t, l(e), n, s, r, i)), (t.targetStart = d), (t.targetAnchor = d && o(d))
      else {
        t.anchor = o(e)
        let m = d
        for (; m; ) {
          if (m && m.nodeType === 8) {
            if (m.data === 'teleport start anchor') t.targetStart = m
            else if (m.data === 'teleport anchor') {
              ;(t.targetAnchor = m), (h._lpa = t.targetAnchor && o(t.targetAnchor))
              break
            }
          }
          m = o(m)
        }
        t.targetAnchor || tf(h, t, u, f), a(d && o(d), t, h, n, s, r, i)
      }
    qr(t)
  }
  return t.anchor && o(t.anchor)
}
const $m = Dm
function qr(e) {
  const t = e.ctx
  if (t && t.ut) {
    let n = e.targetStart
    for (; n && n !== e.targetAnchor; ) n.nodeType === 1 && n.setAttribute('data-v-owner', t.uid), (n = n.nextSibling)
    t.ut()
  }
}
function tf(e, t, n, s) {
  const r = (t.targetStart = n('')),
    i = (t.targetAnchor = n(''))
  return (r[Qu] = i), e && (s(r, e), s(i, e)), i
}
const ln = Symbol('_leaveCb'),
  kr = Symbol('_enterCb')
function Pl() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() }
  return (
    wn(() => {
      e.isMounted = !0
    }),
    qi(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const _t = [Function, Array],
  Ml = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: _t,
    onEnter: _t,
    onAfterEnter: _t,
    onEnterCancelled: _t,
    onBeforeLeave: _t,
    onLeave: _t,
    onAfterLeave: _t,
    onLeaveCancelled: _t,
    onBeforeAppear: _t,
    onAppear: _t,
    onAfterAppear: _t,
    onAppearCancelled: _t,
  },
  nf = e => {
    const t = e.subTree
    return t.component ? nf(t.component) : t
  },
  Bm = {
    name: 'BaseTransition',
    props: Ml,
    setup(e, { slots: t }) {
      const n = Le(),
        s = Pl()
      return () => {
        const r = t.default && Ui(t.default(), !0)
        if (!r || !r.length) return
        const i = sf(r),
          o = ce(e),
          { mode: l } = o
        if (s.isLeaving) return ao(i)
        const c = Hc(i)
        if (!c) return ao(i)
        let f = hs(c, o, s, n, h => (f = h))
        c.type !== Pe && Jt(c, f)
        const u = n.subTree,
          a = u && Hc(u)
        if (a && a.type !== Pe && !xt(c, a) && nf(n).type !== Pe) {
          const h = hs(a, o, s, n)
          if ((Jt(a, h), l === 'out-in' && c.type !== Pe))
            return (
              (s.isLeaving = !0),
              (h.afterLeave = () => {
                ;(s.isLeaving = !1), n.job.flags & 8 || n.update(), delete h.afterLeave
              }),
              ao(i)
            )
          l === 'in-out' &&
            c.type !== Pe &&
            (h.delayLeave = (d, m, y) => {
              const w = of(s, a)
              ;(w[String(a.key)] = a),
                (d[ln] = () => {
                  m(), (d[ln] = void 0), delete f.delayedLeave
                }),
                (f.delayedLeave = y)
            })
        }
        return i
      }
    },
  }
function sf(e) {
  let t = e[0]
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Pe) {
        t = n
        break
      }
  }
  return t
}
const rf = Bm
function of(e, t) {
  const { leavingVNodes: n } = e
  let s = n.get(t.type)
  return s || ((s = Object.create(null)), n.set(t.type, s)), s
}
function hs(e, t, n, s, r) {
  const {
      appear: i,
      mode: o,
      persisted: l = !1,
      onBeforeEnter: c,
      onEnter: f,
      onAfterEnter: u,
      onEnterCancelled: a,
      onBeforeLeave: h,
      onLeave: d,
      onAfterLeave: m,
      onLeaveCancelled: y,
      onBeforeAppear: w,
      onAppear: S,
      onAfterAppear: _,
      onAppearCancelled: p,
    } = t,
    v = String(e.key),
    E = of(n, e),
    O = (C, T) => {
      C && At(C, s, 9, T)
    },
    R = (C, T) => {
      const I = T[1]
      O(C, T), j(C) ? C.every(A => A.length <= 1) && I() : C.length <= 1 && I()
    },
    x = {
      mode: o,
      persisted: l,
      beforeEnter(C) {
        let T = c
        if (!n.isMounted)
          if (i) T = w || c
          else return
        C[ln] && C[ln](!0)
        const I = E[v]
        I && xt(e, I) && I.el[ln] && I.el[ln](), O(T, [C])
      },
      enter(C) {
        let T = f,
          I = u,
          A = a
        if (!n.isMounted)
          if (i) (T = S || f), (I = _ || u), (A = p || a)
          else return
        let L = !1
        const G = (C[kr] = X => {
          L || ((L = !0), X ? O(A, [C]) : O(I, [C]), x.delayedLeave && x.delayedLeave(), (C[kr] = void 0))
        })
        T ? R(T, [C, G]) : G()
      },
      leave(C, T) {
        const I = String(e.key)
        if ((C[kr] && C[kr](!0), n.isUnmounting)) return T()
        O(h, [C])
        let A = !1
        const L = (C[ln] = G => {
          A || ((A = !0), T(), G ? O(y, [C]) : O(m, [C]), (C[ln] = void 0), E[I] === e && delete E[I])
        })
        ;(E[I] = e), d ? R(d, [C, L]) : L()
      },
      clone(C) {
        const T = hs(C, t, n, s, r)
        return r && r(T), T
      },
    }
  return x
}
function ao(e) {
  if (hr(e)) return (e = Vt(e)), (e.children = null), e
}
function Hc(e) {
  if (!hr(e)) return ef(e.type) && e.children ? sf(e.children) : e
  const { shapeFlag: t, children: n } = e
  if (n) {
    if (t & 16) return n[0]
    if (t & 32 && Q(n.default)) return n.default()
  }
}
function Jt(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Jt(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)), (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function Ui(e, t = !1, n) {
  let s = [],
    r = 0
  for (let i = 0; i < e.length; i++) {
    let o = e[i]
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i)
    o.type === Ve
      ? (o.patchFlag & 128 && r++, (s = s.concat(Ui(o.children, t, l))))
      : (t || o.type !== Pe) && s.push(l != null ? Vt(o, { key: l }) : o)
  }
  if (r > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2
  return s
}
/*! #__NO_SIDE_EFFECTS__ */ function fr(e, t) {
  return Q(e) ? le({ name: e.name }, t, { setup: e }) : e
}
function Hm() {
  const e = Le()
  return e ? (e.appContext.config.idPrefix || 'v') + '-' + e.ids[0] + e.ids[1]++ : ''
}
function kl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
function jm(e) {
  const t = Le(),
    n = ur(null)
  if (t) {
    const r = t.refs === oe ? (t.refs = {}) : t.refs
    Object.defineProperty(r, e, { enumerable: !0, get: () => n.value, set: i => (n.value = i) })
  }
  return n
}
function ai(e, t, n, s, r = !1) {
  if (j(e)) {
    e.forEach((m, y) => ai(m, t && (j(t) ? t[y] : t), n, s, r))
    return
  }
  if (pn(s) && !r) return
  const i = s.shapeFlag & 4 ? gr(s.component) : s.el,
    o = r ? null : i,
    { i: l, r: c } = e,
    f = t && t.r,
    u = l.refs === oe ? (l.refs = {}) : l.refs,
    a = l.setupState,
    h = ce(a),
    d = a === oe ? () => !1 : m => de(h, m)
  if ((f != null && f !== c && (ne(f) ? ((u[f] = null), d(f) && (a[f] = null)) : Te(f) && (f.value = null)), Q(c)))
    Es(c, l, 12, [o, u])
  else {
    const m = ne(c),
      y = Te(c)
    if (m || y) {
      const w = () => {
        if (e.f) {
          const S = m ? (d(c) ? a[c] : u[c]) : c.value
          r
            ? j(S) && yl(S, i)
            : j(S)
              ? S.includes(i) || S.push(i)
              : m
                ? ((u[c] = [i]), d(c) && (a[c] = u[c]))
                : ((c.value = [i]), e.k && (u[e.k] = c.value))
        } else m ? ((u[c] = o), d(c) && (a[c] = o)) : y && ((c.value = o), e.k && (u[e.k] = o))
      }
      o ? ((w.id = -1), De(w, n)) : w()
    }
  }
}
let jc = !1
const Yn = () => {
    jc || (console.error('Hydration completed but contains mismatches.'), (jc = !0))
  },
  Um = e => e.namespaceURI.includes('svg') && e.tagName !== 'foreignObject',
  Wm = e => e.namespaceURI.includes('MathML'),
  Fr = e => {
    if (e.nodeType === 1) {
      if (Um(e)) return 'svg'
      if (Wm(e)) return 'mathml'
    }
  },
  ts = e => e.nodeType === 8
function Km(e) {
  const {
      mt: t,
      p: n,
      o: { patchProp: s, createText: r, nextSibling: i, parentNode: o, remove: l, insert: c, createComment: f },
    } = e,
    u = (p, v) => {
      if (!v.hasChildNodes()) {
        n(null, p, v), ci(), (v._vnode = p)
        return
      }
      a(v.firstChild, p, null, null, null), ci(), (v._vnode = p)
    },
    a = (p, v, E, O, R, x = !1) => {
      x = x || !!v.dynamicChildren
      const C = ts(p) && p.data === '[',
        T = () => y(p, v, E, O, R, C),
        { type: I, ref: A, shapeFlag: L, patchFlag: G } = v
      let X = p.nodeType
      ;(v.el = p), G === -2 && ((x = !1), (v.dynamicChildren = null))
      let U = null
      switch (I) {
        case mn:
          X !== 3
            ? v.children === ''
              ? (c((v.el = r('')), o(p), p), (U = p))
              : (U = T())
            : (p.data !== v.children && (Yn(), (p.data = v.children)), (U = i(p)))
          break
        case Pe:
          _(p) ? ((U = i(p)), S((v.el = p.content.firstChild), p, E)) : X !== 8 || C ? (U = T()) : (U = i(p))
          break
        case Fn:
          if ((C && ((p = i(p)), (X = p.nodeType)), X === 1 || X === 3)) {
            U = p
            const Z = !v.children.length
            for (let q = 0; q < v.staticCount; q++)
              Z && (v.children += U.nodeType === 1 ? U.outerHTML : U.data),
                q === v.staticCount - 1 && (v.anchor = U),
                (U = i(U))
            return C ? i(U) : U
          } else T()
          break
        case Ve:
          C ? (U = m(p, v, E, O, R, x)) : (U = T())
          break
        default:
          if (L & 1)
            (X !== 1 || v.type.toLowerCase() !== p.tagName.toLowerCase()) && !_(p)
              ? (U = T())
              : (U = h(p, v, E, O, R, x))
          else if (L & 6) {
            v.slotScopeIds = R
            const Z = o(p)
            if (
              (C ? (U = w(p)) : ts(p) && p.data === 'teleport start' ? (U = w(p, p.data, 'teleport end')) : (U = i(p)),
              t(v, Z, null, E, O, Fr(Z), x),
              pn(v))
            ) {
              let q
              C
                ? ((q = Ee(Ve)), (q.anchor = U ? U.previousSibling : Z.lastChild))
                : (q = p.nodeType === 3 ? Wl('') : Ee('div')),
                (q.el = p),
                (v.component.subTree = q)
            }
          } else
            L & 64
              ? X !== 8
                ? (U = T())
                : (U = v.type.hydrate(p, v, E, O, R, x, e, d))
              : L & 128 && (U = v.type.hydrate(p, v, E, O, Fr(o(p)), R, x, e, a))
      }
      return A != null && ai(A, null, O, v), U
    },
    h = (p, v, E, O, R, x) => {
      x = x || !!v.dynamicChildren
      const { type: C, props: T, patchFlag: I, shapeFlag: A, dirs: L, transition: G } = v,
        X = C === 'input' || C === 'option'
      if (X || I !== -1) {
        L && Dt(v, null, E, 'created')
        let U = !1
        if (_(p)) {
          U = If(O, G) && E && E.vnode.props && E.vnode.props.appear
          const q = p.content.firstChild
          U && G.beforeEnter(q), S(q, p, E), (v.el = p = q)
        }
        if (A & 16 && !(T && (T.innerHTML || T.textContent))) {
          let q = d(p.firstChild, v, p, E, O, R, x)
          for (; q; ) {
            Lr(p, 1) || Yn()
            const xe = q
            ;(q = q.nextSibling), l(xe)
          }
        } else if (A & 8) {
          let q = v.children
          q[0] ===
            `
` &&
            (p.tagName === 'PRE' || p.tagName === 'TEXTAREA') &&
            (q = q.slice(1)),
            p.textContent !== q && (Lr(p, 0) || Yn(), (p.textContent = v.children))
        }
        if (T) {
          if (X || !x || I & 48) {
            const q = p.tagName.includes('-')
            for (const xe in T)
              ((X && (xe.endsWith('value') || xe === 'indeterminate')) || (jn(xe) && !hn(xe)) || xe[0] === '.' || q) &&
                s(p, xe, null, T[xe], void 0, E)
          } else if (T.onClick) s(p, 'onClick', null, T.onClick, void 0, E)
          else if (I & 4 && dn(T.style)) for (const q in T.style) T.style[q]
        }
        let Z
        ;(Z = T && T.onVnodeBeforeMount) && it(Z, E, v),
          L && Dt(v, null, E, 'beforeMount'),
          ((Z = T && T.onVnodeMounted) || L || U) &&
            jf(() => {
              Z && it(Z, E, v), U && G.enter(p), L && Dt(v, null, E, 'mounted')
            }, O)
      }
      return p.nextSibling
    },
    d = (p, v, E, O, R, x, C) => {
      C = C || !!v.dynamicChildren
      const T = v.children,
        I = T.length
      for (let A = 0; A < I; A++) {
        const L = C ? T[A] : (T[A] = lt(T[A])),
          G = L.type === mn
        p
          ? (G &&
              !C &&
              A + 1 < I &&
              lt(T[A + 1]).type === mn &&
              (c(r(p.data.slice(L.children.length)), E, i(p)), (p.data = L.children)),
            (p = a(p, L, O, R, x, C)))
          : G && !L.children
            ? c((L.el = r('')), E)
            : (Lr(E, 1) || Yn(), n(null, L, E, null, O, R, Fr(E), x))
      }
      return p
    },
    m = (p, v, E, O, R, x) => {
      const { slotScopeIds: C } = v
      C && (R = R ? R.concat(C) : C)
      const T = o(p),
        I = d(i(p), v, T, E, O, R, x)
      return I && ts(I) && I.data === ']' ? i((v.anchor = I)) : (Yn(), c((v.anchor = f(']')), T, I), I)
    },
    y = (p, v, E, O, R, x) => {
      if ((Lr(p.parentElement, 1) || Yn(), (v.el = null), x)) {
        const I = w(p)
        for (;;) {
          const A = i(p)
          if (A && A !== I) l(A)
          else break
        }
      }
      const C = i(p),
        T = o(p)
      return l(p), n(null, v, T, C, E, O, Fr(T), R), C
    },
    w = (p, v = '[', E = ']') => {
      let O = 0
      for (; p; )
        if (((p = i(p)), p && ts(p) && (p.data === v && O++, p.data === E))) {
          if (O === 0) return i(p)
          O--
        }
      return p
    },
    S = (p, v, E) => {
      const O = v.parentNode
      O && O.replaceChild(p, v)
      let R = E
      for (; R; ) R.vnode.el === v && (R.vnode.el = R.subTree.el = p), (R = R.parent)
    },
    _ = p => p.nodeType === 1 && p.tagName === 'TEMPLATE'
  return [u, a]
}
const Uc = 'data-allow-mismatch',
  qm = { 0: 'text', 1: 'children', 2: 'class', 3: 'style', 4: 'attribute' }
function Lr(e, t) {
  if (t === 0 || t === 1) for (; e && !e.hasAttribute(Uc); ) e = e.parentElement
  const n = e && e.getAttribute(Uc)
  if (n == null) return !1
  if (n === '') return !0
  {
    const s = n.split(',')
    return t === 0 && s.includes('children') ? !0 : n.split(',').includes(qm[t])
  }
}
const Gm =
  (e = 1e4) =>
  t => {
    const n = requestIdleCallback(t, { timeout: e })
    return () => cancelIdleCallback(n)
  }
function zm(e) {
  const { top: t, left: n, bottom: s, right: r } = e.getBoundingClientRect(),
    { innerHeight: i, innerWidth: o } = window
  return ((t > 0 && t < i) || (s > 0 && s < i)) && ((n > 0 && n < o) || (r > 0 && r < o))
}
const Ym = e => (t, n) => {
    const s = new IntersectionObserver(r => {
      for (const i of r)
        if (i.isIntersecting) {
          s.disconnect(), t()
          break
        }
    }, e)
    return (
      n(r => {
        if (r instanceof Element) {
          if (zm(r)) return t(), s.disconnect(), !1
          s.observe(r)
        }
      }),
      () => s.disconnect()
    )
  },
  Jm = e => t => {
    if (e) {
      const n = matchMedia(e)
      if (n.matches) t()
      else return n.addEventListener('change', t, { once: !0 }), () => n.removeEventListener('change', t)
    }
  },
  Xm =
    (e = []) =>
    (t, n) => {
      ne(e) && (e = [e])
      let s = !1
      const r = o => {
          s || ((s = !0), i(), t(), o.target.dispatchEvent(new o.constructor(o.type, o)))
        },
        i = () => {
          n(o => {
            for (const l of e) o.removeEventListener(l, r)
          })
        }
      return (
        n(o => {
          for (const l of e) o.addEventListener(l, r, { once: !0 })
        }),
        i
      )
    }
function Zm(e, t) {
  if (ts(e) && e.data === '[') {
    let n = 1,
      s = e.nextSibling
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1) break
      } else if (ts(s))
        if (s.data === ']') {
          if (--n === 0) break
        } else s.data === '[' && n++
      s = s.nextSibling
    }
  } else t(e)
}
const pn = e => !!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */ function Qm(e) {
  Q(e) && (e = { loader: e })
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: r = 200,
    hydrate: i,
    timeout: o,
    suspensible: l = !0,
    onError: c,
  } = e
  let f = null,
    u,
    a = 0
  const h = () => (a++, (f = null), d()),
    d = () => {
      let m
      return (
        f ||
        (m = f =
          t()
            .catch(y => {
              if (((y = y instanceof Error ? y : new Error(String(y))), c))
                return new Promise((w, S) => {
                  c(
                    y,
                    () => w(h()),
                    () => S(y),
                    a + 1,
                  )
                })
              throw y
            })
            .then(y =>
              m !== f && f
                ? f
                : (y && (y.__esModule || y[Symbol.toStringTag] === 'Module') && (y = y.default), (u = y), y),
            ))
      )
    }
  return fr({
    name: 'AsyncComponentWrapper',
    __asyncLoader: d,
    __asyncHydrate(m, y, w) {
      const S = i
        ? () => {
            const _ = i(w, p => Zm(m, p))
            _ && (y.bum || (y.bum = [])).push(_)
          }
        : w
      u ? S() : d().then(() => !y.isUnmounted && S())
    },
    get __asyncResolved() {
      return u
    },
    setup() {
      const m = ke
      if ((kl(m), u)) return () => uo(u, m)
      const y = p => {
        ;(f = null), Kn(p, m, 13, !s)
      }
      if ((l && m.suspense) || mr)
        return d()
          .then(p => () => uo(p, m))
          .catch(p => (y(p), () => (s ? Ee(s, { error: p }) : null)))
      const w = z(!1),
        S = z(),
        _ = z(!!r)
      return (
        r &&
          setTimeout(() => {
            _.value = !1
          }, r),
        o != null &&
          setTimeout(() => {
            if (!w.value && !S.value) {
              const p = new Error(`Async component timed out after ${o}ms.`)
              y(p), (S.value = p)
            }
          }, o),
        d()
          .then(() => {
            ;(w.value = !0), m.parent && hr(m.parent.vnode) && m.parent.update()
          })
          .catch(p => {
            y(p), (S.value = p)
          }),
        () => {
          if (w.value && u) return uo(u, m)
          if (S.value && s) return Ee(s, { error: S.value })
          if (n && !_.value) return Ee(n)
        }
      )
    },
  })
}
function uo(e, t) {
  const { ref: n, props: s, children: r, ce: i } = t.vnode,
    o = Ee(e, s, r)
  return (o.ref = n), (o.ce = i), delete t.vnode.ce, o
}
const hr = e => e.type.__isKeepAlive,
  eg = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] },
    setup(e, { slots: t }) {
      const n = Le(),
        s = n.ctx
      if (!s.renderer)
        return () => {
          const _ = t.default && t.default()
          return _ && _.length === 1 ? _[0] : _
        }
      const r = new Map(),
        i = new Set()
      let o = null
      const l = n.suspense,
        {
          renderer: {
            p: c,
            m: f,
            um: u,
            o: { createElement: a },
          },
        } = s,
        h = a('div')
      ;(s.activate = (_, p, v, E, O) => {
        const R = _.component
        f(_, p, v, 0, l),
          c(R.vnode, _, p, v, R, l, E, _.slotScopeIds, O),
          De(() => {
            ;(R.isDeactivated = !1), R.a && is(R.a)
            const x = _.props && _.props.onVnodeMounted
            x && it(x, R.parent, _)
          }, l)
      }),
        (s.deactivate = _ => {
          const p = _.component
          fi(p.m),
            fi(p.a),
            f(_, h, null, 1, l),
            De(() => {
              p.da && is(p.da)
              const v = _.props && _.props.onVnodeUnmounted
              v && it(v, p.parent, _), (p.isDeactivated = !0)
            }, l)
        })
      function d(_) {
        fo(_), u(_, n, l, !0)
      }
      function m(_) {
        r.forEach((p, v) => {
          const E = Ko(p.type)
          E && !_(E) && y(v)
        })
      }
      function y(_) {
        const p = r.get(_)
        p && (!o || !xt(p, o)) ? d(p) : o && fo(o), r.delete(_), i.delete(_)
      }
      fe(
        () => [e.include, e.exclude],
        ([_, p]) => {
          _ && m(v => Rs(_, v)), p && m(v => !Rs(p, v))
        },
        { flush: 'post', deep: !0 },
      )
      let w = null
      const S = () => {
        w != null &&
          (hi(n.subTree.type)
            ? De(() => {
                r.set(w, Dr(n.subTree))
              }, n.subTree.suspense)
            : r.set(w, Dr(n.subTree)))
      }
      return (
        wn(S),
        Ki(S),
        qi(() => {
          r.forEach(_ => {
            const { subTree: p, suspense: v } = n,
              E = Dr(p)
            if (_.type === E.type && _.key === E.key) {
              fo(E)
              const O = E.component.da
              O && De(O, v)
              return
            }
            d(_)
          })
        }),
        () => {
          if (((w = null), !t.default)) return (o = null)
          const _ = t.default(),
            p = _[0]
          if (_.length > 1) return (o = null), _
          if (!Xt(p) || (!(p.shapeFlag & 4) && !(p.shapeFlag & 128))) return (o = null), p
          let v = Dr(p)
          if (v.type === Pe) return (o = null), v
          const E = v.type,
            O = Ko(pn(v) ? v.type.__asyncResolved || {} : E),
            { include: R, exclude: x, max: C } = e
          if ((R && (!O || !Rs(R, O))) || (x && O && Rs(x, O))) return (v.shapeFlag &= -257), (o = v), p
          const T = v.key == null ? E : v.key,
            I = r.get(T)
          return (
            v.el && ((v = Vt(v)), p.shapeFlag & 128 && (p.ssContent = v)),
            (w = T),
            I
              ? ((v.el = I.el),
                (v.component = I.component),
                v.transition && Jt(v, v.transition),
                (v.shapeFlag |= 512),
                i.delete(T),
                i.add(T))
              : (i.add(T), C && i.size > parseInt(C, 10) && y(i.values().next().value)),
            (v.shapeFlag |= 256),
            (o = v),
            hi(p.type) ? p : v
          )
        }
      )
    },
  },
  tg = eg
function Rs(e, t) {
  return j(e) ? e.some(n => Rs(n, t)) : ne(e) ? e.split(',').includes(t) : vp(e) ? ((e.lastIndex = 0), e.test(t)) : !1
}
function lf(e, t) {
  af(e, 'a', t)
}
function cf(e, t) {
  af(e, 'da', t)
}
function af(e, t, n = ke) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((Wi(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) hr(r.parent.vnode) && ng(s, t, n, r), (r = r.parent)
  }
}
function ng(e, t, n, s) {
  const r = Wi(t, e, s, !0)
  dr(() => {
    yl(s[t], r)
  }, n)
}
function fo(e) {
  ;(e.shapeFlag &= -257), (e.shapeFlag &= -513)
}
function Dr(e) {
  return e.shapeFlag & 128 ? e.ssContent : e
}
function Wi(e, t, n = ke, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          Sn()
          const l = $n(n),
            c = At(t, n, e, o)
          return l(), _n(), c
        })
    return s ? r.unshift(i) : r.push(i), i
  }
}
const Zt =
    e =>
    (t, n = ke) => {
      ;(!mr || e === 'sp') && Wi(e, (...s) => t(...s), n)
    },
  Fl = Zt('bm'),
  wn = Zt('m'),
  uf = Zt('bu'),
  Ki = Zt('u'),
  qi = Zt('bum'),
  dr = Zt('um'),
  ff = Zt('sp'),
  hf = Zt('rtg'),
  df = Zt('rtc')
function pf(e, t = ke) {
  Wi('ec', e, t)
}
const Ll = 'components',
  sg = 'directives'
function rg(e, t) {
  return Dl(Ll, e, !0, t) || e
}
const mf = Symbol.for('v-ndc')
function ig(e) {
  return ne(e) ? Dl(Ll, e, !1) || e : e || mf
}
function og(e) {
  return Dl(sg, e)
}
function Dl(e, t, n = !0, s = !1) {
  const r = Fe || ke
  if (r) {
    const i = r.type
    if (e === Ll) {
      const l = Ko(i, !1)
      if (l && (l === t || l === we(t) || l === Wn(we(t)))) return i
    }
    const o = Wc(r[e] || i[e], t) || Wc(r.appContext[e], t)
    return !o && s ? i : o
  }
}
function Wc(e, t) {
  return e && (e[t] || e[we(t)] || e[Wn(we(t))])
}
function lg(e, t, n, s) {
  let r
  const i = n && n[s],
    o = j(e)
  if (o || ne(e)) {
    const l = o && dn(e)
    let c = !1
    l && ((c = !gt(e)), (e = Li(e))), (r = new Array(e.length))
    for (let f = 0, u = e.length; f < u; f++) r[f] = t(c ? Ke(e[f]) : e[f], f, void 0, i && i[f])
  } else if (typeof e == 'number') {
    r = new Array(e)
    for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i && i[l])
  } else if (be(e))
    if (e[Symbol.iterator]) r = Array.from(e, (l, c) => t(l, c, void 0, i && i[c]))
    else {
      const l = Object.keys(e)
      r = new Array(l.length)
      for (let c = 0, f = l.length; c < f; c++) {
        const u = l[c]
        r[c] = t(e[u], u, c, i && i[c])
      }
    }
  else r = []
  return n && (n[s] = r), r
}
function cg(e, t) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n]
    if (j(s)) for (let r = 0; r < s.length; r++) e[s[r].name] = s[r].fn
    else
      s &&
        (e[s.name] = s.key
          ? (...r) => {
              const i = s.fn(...r)
              return i && (i.key = s.key), i
            }
          : s.fn)
  }
  return e
}
function ag(e, t, n = {}, s, r) {
  if (Fe.ce || (Fe.parent && pn(Fe.parent) && Fe.parent.ce))
    return t !== 'default' && (n.name = t), Xs(), di(Ve, null, [Ee('slot', n, s && s())], 64)
  let i = e[t]
  i && i._c && (i._d = !1), Xs()
  const o = i && Vl(i(n)),
    l = di(
      Ve,
      { key: (n.key || (o && o.key) || `_${t}`) + (!o && s ? '_fb' : '') },
      o || (s ? s() : []),
      o && e._ === 1 ? 64 : -2,
    )
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']), i && i._c && (i._d = !0), l
}
function Vl(e) {
  return e.some(t => (Xt(t) ? !(t.type === Pe || (t.type === Ve && !Vl(t.children))) : !0)) ? e : null
}
function ug(e, t) {
  const n = {}
  for (const s in e) n[t && /[A-Z]/.test(s) ? `on:${s}` : rs(s)] = e[s]
  return n
}
const ko = e => (e ? (Yf(e) ? gr(e) : ko(e.parent)) : null),
  Ms = le(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => ko(e.parent),
    $root: e => ko(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => $l(e),
    $forceUpdate: e =>
      e.f ||
      (e.f = () => {
        Rl(e.update)
      }),
    $nextTick: e => e.n || (e.n = En.bind(e.proxy)),
    $watch: e => Bg.bind(e),
  }),
  ho = (e, t) => e !== oe && !e.__isScriptSetup && de(e, t),
  Fo = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: c } = e
      let f
      if (t[0] !== '$') {
        const d = o[t]
        if (d !== void 0)
          switch (d) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (ho(s, t)) return (o[t] = 1), s[t]
          if (r !== oe && de(r, t)) return (o[t] = 2), r[t]
          if ((f = e.propsOptions[0]) && de(f, t)) return (o[t] = 3), i[t]
          if (n !== oe && de(n, t)) return (o[t] = 4), n[t]
          Lo && (o[t] = 0)
        }
      }
      const u = Ms[t]
      let a, h
      if (u) return t === '$attrs' && Je(e.attrs, 'get', ''), u(e)
      if ((a = l.__cssModules) && (a = a[t])) return a
      if (n !== oe && de(n, t)) return (o[t] = 4), n[t]
      if (((h = c.config.globalProperties), de(h, t))) return h[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e
      return ho(r, t)
        ? ((r[t] = n), !0)
        : s !== oe && de(s, t)
          ? ((s[t] = n), !0)
          : de(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((i[t] = n), !0)
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i } }, o) {
      let l
      return (
        !!n[o] ||
        (e !== oe && de(e, o)) ||
        ho(t, o) ||
        ((l = i[0]) && de(l, o)) ||
        de(s, o) ||
        de(Ms, o) ||
        de(r.config.globalProperties, o)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : de(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  },
  fg = le({}, Fo, {
    get(e, t) {
      if (t !== Symbol.unscopables) return Fo.get(e, t, e)
    },
    has(e, t) {
      return t[0] !== '_' && !Cp(t)
    },
  })
function hg() {
  return null
}
function dg() {
  return null
}
function pg(e) {}
function mg(e) {}
function gg() {
  return null
}
function yg() {}
function vg(e, t) {
  return null
}
function bg() {
  return gf().slots
}
function Sg() {
  return gf().attrs
}
function gf() {
  const e = Le()
  return e.setupContext || (e.setupContext = Qf(e))
}
function Ys(e) {
  return j(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
function _g(e, t) {
  const n = Ys(e)
  for (const s in t) {
    if (s.startsWith('__skip')) continue
    let r = n[s]
    r
      ? j(r) || Q(r)
        ? (r = n[s] = { type: r, default: t[s] })
        : (r.default = t[s])
      : r === null && (r = n[s] = { default: t[s] }),
      r && t[`__skip_${s}`] && (r.skipFactory = !0)
  }
  return n
}
function Eg(e, t) {
  return !e || !t ? e || t : j(e) && j(t) ? e.concat(t) : le({}, Ys(e), Ys(t))
}
function wg(e, t) {
  const n = {}
  for (const s in e) t.includes(s) || Object.defineProperty(n, s, { enumerable: !0, get: () => e[s] })
  return n
}
function Tg(e) {
  const t = Le()
  let n = e()
  return (
    jo(),
    vl(n) &&
      (n = n.catch(s => {
        throw ($n(t), s)
      })),
    [n, () => $n(t)]
  )
}
let Lo = !0
function Cg(e) {
  const t = $l(e),
    n = e.proxy,
    s = e.ctx
  ;(Lo = !1), t.beforeCreate && Kc(t.beforeCreate, e, 'bc')
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: f,
    created: u,
    beforeMount: a,
    mounted: h,
    beforeUpdate: d,
    updated: m,
    activated: y,
    deactivated: w,
    beforeDestroy: S,
    beforeUnmount: _,
    destroyed: p,
    unmounted: v,
    render: E,
    renderTracked: O,
    renderTriggered: R,
    errorCaptured: x,
    serverPrefetch: C,
    expose: T,
    inheritAttrs: I,
    components: A,
    directives: L,
    filters: G,
  } = t
  if ((f && Ag(f, s, null), o))
    for (const Z in o) {
      const q = o[Z]
      Q(q) && (s[Z] = q.bind(n))
    }
  if (r) {
    const Z = r.call(n, n)
    be(Z) && (e.data = ut(Z))
  }
  if (((Lo = !0), i))
    for (const Z in i) {
      const q = i[Z],
        xe = Q(q) ? q.bind(n, n) : Q(q.get) ? q.get.bind(n, n) : ze,
        tt = !Q(q) && Q(q.set) ? q.set.bind(n) : ze,
        nt = ie({ get: xe, set: tt })
      Object.defineProperty(s, Z, { enumerable: !0, configurable: !0, get: () => nt.value, set: st => (nt.value = st) })
    }
  if (l) for (const Z in l) yf(l[Z], s, n, Z)
  if (c) {
    const Z = Q(c) ? c.call(n) : c
    Reflect.ownKeys(Z).forEach(q => {
      ls(q, Z[q])
    })
  }
  u && Kc(u, e, 'c')
  function U(Z, q) {
    j(q) ? q.forEach(xe => Z(xe.bind(n))) : q && Z(q.bind(n))
  }
  if (
    (U(Fl, a),
    U(wn, h),
    U(uf, d),
    U(Ki, m),
    U(lf, y),
    U(cf, w),
    U(pf, x),
    U(df, O),
    U(hf, R),
    U(qi, _),
    U(dr, v),
    U(ff, C),
    j(T))
  )
    if (T.length) {
      const Z = e.exposed || (e.exposed = {})
      T.forEach(q => {
        Object.defineProperty(Z, q, { get: () => n[q], set: xe => (n[q] = xe) })
      })
    } else e.exposed || (e.exposed = {})
  E && e.render === ze && (e.render = E),
    I != null && (e.inheritAttrs = I),
    A && (e.components = A),
    L && (e.directives = L),
    C && kl(e)
}
function Ag(e, t, n = ze) {
  j(e) && (e = Do(e))
  for (const s in e) {
    const r = e[s]
    let i
    be(r) ? ('default' in r ? (i = Tt(r.from || s, r.default, !0)) : (i = Tt(r.from || s))) : (i = Tt(r)),
      Te(i)
        ? Object.defineProperty(t, s, { enumerable: !0, configurable: !0, get: () => i.value, set: o => (i.value = o) })
        : (t[s] = i)
  }
}
function Kc(e, t, n) {
  At(j(e) ? e.map(s => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function yf(e, t, n, s) {
  let r = s.includes('.') ? Vf(n, s) : () => n[s]
  if (ne(e)) {
    const i = t[e]
    Q(i) && fe(r, i)
  } else if (Q(e)) fe(r, e.bind(n))
  else if (be(e))
    if (j(e)) e.forEach(i => yf(i, t, n, s))
    else {
      const i = Q(e.handler) ? e.handler.bind(n) : t[e.handler]
      Q(i) && fe(r, i, e)
    }
}
function $l(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = i.get(t)
  let c
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
        ? (c = t)
        : ((c = {}), r.length && r.forEach(f => ui(c, f, o, !0)), ui(c, t, o)),
    be(t) && i.set(t, c),
    c
  )
}
function ui(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t
  i && ui(e, i, n, !0), r && r.forEach(o => ui(e, o, n, !0))
  for (const o in t)
    if (!(s && o === 'expose')) {
      const l = Og[o] || (n && n[o])
      e[o] = l ? l(e[o], t[o]) : t[o]
    }
  return e
}
const Og = {
  data: qc,
  props: Gc,
  emits: Gc,
  methods: Is,
  computed: Is,
  beforeCreate: Xe,
  created: Xe,
  beforeMount: Xe,
  mounted: Xe,
  beforeUpdate: Xe,
  updated: Xe,
  beforeDestroy: Xe,
  beforeUnmount: Xe,
  destroyed: Xe,
  unmounted: Xe,
  activated: Xe,
  deactivated: Xe,
  errorCaptured: Xe,
  serverPrefetch: Xe,
  components: Is,
  directives: Is,
  watch: Ng,
  provide: qc,
  inject: xg,
}
function qc(e, t) {
  return t
    ? e
      ? function () {
          return le(Q(e) ? e.call(this, this) : e, Q(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function xg(e, t) {
  return Is(Do(e), Do(t))
}
function Do(e) {
  if (j(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function Xe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Is(e, t) {
  return e ? le(Object.create(null), e, t) : t
}
function Gc(e, t) {
  return e ? (j(e) && j(t) ? [...new Set([...e, ...t])] : le(Object.create(null), Ys(e), Ys(t ?? {}))) : t
}
function Ng(e, t) {
  if (!e) return t
  if (!t) return e
  const n = le(Object.create(null), e)
  for (const s in t) n[s] = Xe(e[s], t[s])
  return n
}
function vf() {
  return {
    app: null,
    config: {
      isNativeTag: Ns,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let Rg = 0
function Ig(e, t) {
  return function (s, r = null) {
    Q(s) || (s = le({}, s)), r != null && !be(r) && (r = null)
    const i = vf(),
      o = new WeakSet(),
      l = []
    let c = !1
    const f = (i.app = {
      _uid: Rg++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: th,
      get config() {
        return i.config
      },
      set config(u) {},
      use(u, ...a) {
        return o.has(u) || (u && Q(u.install) ? (o.add(u), u.install(f, ...a)) : Q(u) && (o.add(u), u(f, ...a))), f
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), f
      },
      component(u, a) {
        return a ? ((i.components[u] = a), f) : i.components[u]
      },
      directive(u, a) {
        return a ? ((i.directives[u] = a), f) : i.directives[u]
      },
      mount(u, a, h) {
        if (!c) {
          const d = f._ceVNode || Ee(s, r)
          return (
            (d.appContext = i),
            h === !0 ? (h = 'svg') : h === !1 && (h = void 0),
            a && t ? t(d, u) : e(d, u, h),
            (c = !0),
            (f._container = u),
            (u.__vue_app__ = f),
            gr(d.component)
          )
        }
      },
      onUnmount(u) {
        l.push(u)
      },
      unmount() {
        c && (At(l, f._instance, 16), e(null, f._container), delete f._container.__vue_app__)
      },
      provide(u, a) {
        return (i.provides[u] = a), f
      },
      runWithContext(u) {
        const a = kn
        kn = f
        try {
          return u()
        } finally {
          kn = a
        }
      },
    })
    return f
  }
}
let kn = null
function ls(e, t) {
  if (ke) {
    let n = ke.provides
    const s = ke.parent && ke.parent.provides
    s === n && (n = ke.provides = Object.create(s)), (n[e] = t)
  }
}
function Tt(e, t, n = !1) {
  const s = ke || Fe
  if (s || kn) {
    const r = kn
      ? kn._context.provides
      : s
        ? s.parent == null
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && Q(t) ? t.call(s && s.proxy) : t
  }
}
function Pg() {
  return !!(ke || Fe || kn)
}
const bf = {},
  Sf = () => Object.create(bf),
  _f = e => Object.getPrototypeOf(e) === bf
function Mg(e, t, n, s = !1) {
  const r = {},
    i = Sf()
  ;(e.propsDefaults = Object.create(null)), Ef(e, t, r, i)
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0)
  n ? (e.props = s ? r : Al(r)) : e.type.props ? (e.props = r) : (e.props = i), (e.attrs = i)
}
function kg(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    l = ce(r),
    [c] = e.propsOptions
  let f = !1
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = e.vnode.dynamicProps
      for (let a = 0; a < u.length; a++) {
        let h = u[a]
        if (Gi(e.emitsOptions, h)) continue
        const d = t[h]
        if (c)
          if (de(i, h)) d !== i[h] && ((i[h] = d), (f = !0))
          else {
            const m = we(h)
            r[m] = Vo(c, l, m, d, e, !1)
          }
        else d !== i[h] && ((i[h] = d), (f = !0))
      }
    }
  } else {
    Ef(e, t, r, i) && (f = !0)
    let u
    for (const a in l)
      (!t || (!de(t, a) && ((u = ct(a)) === a || !de(t, u)))) &&
        (c ? n && (n[a] !== void 0 || n[u] !== void 0) && (r[a] = Vo(c, l, a, void 0, e, !0)) : delete r[a])
    if (i !== l) for (const a in i) (!t || !de(t, a)) && (delete i[a], (f = !0))
  }
  f && zt(e.attrs, 'set', '')
}
function Ef(e, t, n, s) {
  const [r, i] = e.propsOptions
  let o = !1,
    l
  if (t)
    for (let c in t) {
      if (hn(c)) continue
      const f = t[c]
      let u
      r && de(r, (u = we(c)))
        ? !i || !i.includes(u)
          ? (n[u] = f)
          : ((l || (l = {}))[u] = f)
        : Gi(e.emitsOptions, c) || ((!(c in s) || f !== s[c]) && ((s[c] = f), (o = !0)))
    }
  if (i) {
    const c = ce(n),
      f = l || oe
    for (let u = 0; u < i.length; u++) {
      const a = i[u]
      n[a] = Vo(r, c, a, f[a], e, !de(f, a))
    }
  }
  return o
}
function Vo(e, t, n, s, r, i) {
  const o = e[n]
  if (o != null) {
    const l = de(o, 'default')
    if (l && s === void 0) {
      const c = o.default
      if (o.type !== Function && !o.skipFactory && Q(c)) {
        const { propsDefaults: f } = r
        if (n in f) s = f[n]
        else {
          const u = $n(r)
          ;(s = f[n] = c.call(null, t)), u()
        }
      } else s = c
      r.ce && r.ce._setProp(n, s)
    }
    o[0] && (i && !l ? (s = !1) : o[1] && (s === '' || s === ct(n)) && (s = !0))
  }
  return s
}
const Fg = new WeakMap()
function wf(e, t, n = !1) {
  const s = n ? Fg : t.propsCache,
    r = s.get(e)
  if (r) return r
  const i = e.props,
    o = {},
    l = []
  let c = !1
  if (!Q(e)) {
    const u = a => {
      c = !0
      const [h, d] = wf(a, t, !0)
      le(o, h), d && l.push(...d)
    }
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
  }
  if (!i && !c) return be(e) && s.set(e, ns), ns
  if (j(i))
    for (let u = 0; u < i.length; u++) {
      const a = we(i[u])
      zc(a) && (o[a] = oe)
    }
  else if (i)
    for (const u in i) {
      const a = we(u)
      if (zc(a)) {
        const h = i[u],
          d = (o[a] = j(h) || Q(h) ? { type: h } : le({}, h)),
          m = d.type
        let y = !1,
          w = !0
        if (j(m))
          for (let S = 0; S < m.length; ++S) {
            const _ = m[S],
              p = Q(_) && _.name
            if (p === 'Boolean') {
              y = !0
              break
            } else p === 'String' && (w = !1)
          }
        else y = Q(m) && m.name === 'Boolean'
        ;(d[0] = y), (d[1] = w), (y || de(d, 'default')) && l.push(a)
      }
    }
  const f = [o, l]
  return be(e) && s.set(e, f), f
}
function zc(e) {
  return e[0] !== '$' && !hn(e)
}
const Tf = e => e[0] === '_' || e === '$stable',
  Bl = e => (j(e) ? e.map(lt) : [lt(e)]),
  Lg = (e, t, n) => {
    if (t._n) return t
    const s = Il((...r) => Bl(t(...r)), n)
    return (s._c = !1), s
  },
  Cf = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (Tf(r)) continue
      const i = e[r]
      if (Q(i)) t[r] = Lg(r, i, s)
      else if (i != null) {
        const o = Bl(i)
        t[r] = () => o
      }
    }
  },
  Af = (e, t) => {
    const n = Bl(t)
    e.slots.default = () => n
  },
  Of = (e, t, n) => {
    for (const s in t) (n || s !== '_') && (e[s] = t[s])
  },
  Dg = (e, t, n) => {
    const s = (e.slots = Sf())
    if (e.vnode.shapeFlag & 32) {
      const r = t._
      r ? (Of(s, t, n), n && bu(s, '_', r, !0)) : Cf(t, s)
    } else t && Af(e, t)
  },
  Vg = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let i = !0,
      o = oe
    if (s.shapeFlag & 32) {
      const l = t._
      l ? (n && l === 1 ? (i = !1) : Of(r, t, n)) : ((i = !t.$stable), Cf(t, r)), (o = t)
    } else t && (Af(e, t), (o = { default: 1 }))
    if (i) for (const l in r) !Tf(l) && o[l] == null && delete r[l]
  },
  De = jf
function xf(e) {
  return Rf(e)
}
function Nf(e) {
  return Rf(e, Km)
}
function Rf(e, t) {
  const n = Su()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: c,
      setText: f,
      setElementText: u,
      parentNode: a,
      nextSibling: h,
      setScopeId: d = ze,
      insertStaticContent: m,
    } = e,
    y = (g, b, N, k = null, P = null, F = null, B = void 0, $ = null, V = !!b.dynamicChildren) => {
      if (g === b) return
      g && !xt(g, b) && ((k = M(g)), st(g, P, F, !0), (g = null)),
        b.patchFlag === -2 && ((V = !1), (b.dynamicChildren = null))
      const { type: D, ref: ee, shapeFlag: W } = b
      switch (D) {
        case mn:
          w(g, b, N, k)
          break
        case Pe:
          S(g, b, N, k)
          break
        case Fn:
          g == null && _(b, N, k, B)
          break
        case Ve:
          A(g, b, N, k, P, F, B, $, V)
          break
        default:
          W & 1
            ? E(g, b, N, k, P, F, B, $, V)
            : W & 6
              ? L(g, b, N, k, P, F, B, $, V)
              : (W & 64 || W & 128) && D.process(g, b, N, k, P, F, B, $, V, Y)
      }
      ee != null && P && ai(ee, g && g.ref, F, b || g, !b)
    },
    w = (g, b, N, k) => {
      if (g == null) s((b.el = l(b.children)), N, k)
      else {
        const P = (b.el = g.el)
        b.children !== g.children && f(P, b.children)
      }
    },
    S = (g, b, N, k) => {
      g == null ? s((b.el = c(b.children || '')), N, k) : (b.el = g.el)
    },
    _ = (g, b, N, k) => {
      ;[g.el, g.anchor] = m(g.children, b, N, k, g.el, g.anchor)
    },
    p = ({ el: g, anchor: b }, N, k) => {
      let P
      for (; g && g !== b; ) (P = h(g)), s(g, N, k), (g = P)
      s(b, N, k)
    },
    v = ({ el: g, anchor: b }) => {
      let N
      for (; g && g !== b; ) (N = h(g)), r(g), (g = N)
      r(b)
    },
    E = (g, b, N, k, P, F, B, $, V) => {
      b.type === 'svg' ? (B = 'svg') : b.type === 'math' && (B = 'mathml'),
        g == null ? O(b, N, k, P, F, B, $, V) : C(g, b, P, F, B, $, V)
    },
    O = (g, b, N, k, P, F, B, $) => {
      let V, D
      const { props: ee, shapeFlag: W, transition: J, dirs: te } = g
      if (
        ((V = g.el = o(g.type, F, ee && ee.is, ee)),
        W & 8 ? u(V, g.children) : W & 16 && x(g.children, V, null, k, P, po(g, F), B, $),
        te && Dt(g, null, k, 'created'),
        R(V, g, g.scopeId, B, k),
        ee)
      ) {
        for (const Se in ee) Se !== 'value' && !hn(Se) && i(V, Se, null, ee[Se], F, k)
        'value' in ee && i(V, 'value', null, ee.value, F), (D = ee.onVnodeBeforeMount) && it(D, k, g)
      }
      te && Dt(g, null, k, 'beforeMount')
      const ae = If(P, J)
      ae && J.beforeEnter(V),
        s(V, b, N),
        ((D = ee && ee.onVnodeMounted) || ae || te) &&
          De(() => {
            D && it(D, k, g), ae && J.enter(V), te && Dt(g, null, k, 'mounted')
          }, P)
    },
    R = (g, b, N, k, P) => {
      if ((N && d(g, N), k)) for (let F = 0; F < k.length; F++) d(g, k[F])
      if (P) {
        let F = P.subTree
        if (b === F || (hi(F.type) && (F.ssContent === b || F.ssFallback === b))) {
          const B = P.vnode
          R(g, B, B.scopeId, B.slotScopeIds, P.parent)
        }
      }
    },
    x = (g, b, N, k, P, F, B, $, V = 0) => {
      for (let D = V; D < g.length; D++) {
        const ee = (g[D] = $ ? cn(g[D]) : lt(g[D]))
        y(null, ee, b, N, k, P, F, B, $)
      }
    },
    C = (g, b, N, k, P, F, B) => {
      const $ = (b.el = g.el)
      let { patchFlag: V, dynamicChildren: D, dirs: ee } = b
      V |= g.patchFlag & 16
      const W = g.props || oe,
        J = b.props || oe
      let te
      if (
        (N && Tn(N, !1),
        (te = J.onVnodeBeforeUpdate) && it(te, N, b, g),
        ee && Dt(b, g, N, 'beforeUpdate'),
        N && Tn(N, !0),
        ((W.innerHTML && J.innerHTML == null) || (W.textContent && J.textContent == null)) && u($, ''),
        D ? T(g.dynamicChildren, D, $, N, k, po(b, P), F) : B || q(g, b, $, null, N, k, po(b, P), F, !1),
        V > 0)
      ) {
        if (V & 16) I($, W, J, N, P)
        else if (
          (V & 2 && W.class !== J.class && i($, 'class', null, J.class, P),
          V & 4 && i($, 'style', W.style, J.style, P),
          V & 8)
        ) {
          const ae = b.dynamicProps
          for (let Se = 0; Se < ae.length; Se++) {
            const ye = ae[Se],
              ft = W[ye],
              je = J[ye]
            ;(je !== ft || ye === 'value') && i($, ye, ft, je, P, N)
          }
        }
        V & 1 && g.children !== b.children && u($, b.children)
      } else !B && D == null && I($, W, J, N, P)
      ;((te = J.onVnodeUpdated) || ee) &&
        De(() => {
          te && it(te, N, b, g), ee && Dt(b, g, N, 'updated')
        }, k)
    },
    T = (g, b, N, k, P, F, B) => {
      for (let $ = 0; $ < b.length; $++) {
        const V = g[$],
          D = b[$],
          ee = V.el && (V.type === Ve || !xt(V, D) || V.shapeFlag & 70) ? a(V.el) : N
        y(V, D, ee, null, k, P, F, B, !0)
      }
    },
    I = (g, b, N, k, P) => {
      if (b !== N) {
        if (b !== oe) for (const F in b) !hn(F) && !(F in N) && i(g, F, b[F], null, P, k)
        for (const F in N) {
          if (hn(F)) continue
          const B = N[F],
            $ = b[F]
          B !== $ && F !== 'value' && i(g, F, $, B, P, k)
        }
        'value' in N && i(g, 'value', b.value, N.value, P)
      }
    },
    A = (g, b, N, k, P, F, B, $, V) => {
      const D = (b.el = g ? g.el : l('')),
        ee = (b.anchor = g ? g.anchor : l(''))
      let { patchFlag: W, dynamicChildren: J, slotScopeIds: te } = b
      te && ($ = $ ? $.concat(te) : te),
        g == null
          ? (s(D, N, k), s(ee, N, k), x(b.children || [], N, ee, P, F, B, $, V))
          : W > 0 && W & 64 && J && g.dynamicChildren
            ? (T(g.dynamicChildren, J, N, P, F, B, $), (b.key != null || (P && b === P.subTree)) && Hl(g, b, !0))
            : q(g, b, N, ee, P, F, B, $, V)
    },
    L = (g, b, N, k, P, F, B, $, V) => {
      ;(b.slotScopeIds = $),
        g == null ? (b.shapeFlag & 512 ? P.ctx.activate(b, N, k, B, V) : G(b, N, k, P, F, B, V)) : X(g, b, V)
    },
    G = (g, b, N, k, P, F, B) => {
      const $ = (g.component = zf(g, k, P))
      if ((hr(g) && ($.ctx.renderer = Y), Jf($, !1, B), $.asyncDep)) {
        if ((P && P.registerDep($, U, B), !g.el)) {
          const V = ($.subTree = Ee(Pe))
          S(null, V, b, N)
        }
      } else U($, g, b, N, P, F, B)
    },
    X = (g, b, N) => {
      const k = (b.component = g.component)
      if (qg(g, b, N))
        if (k.asyncDep && !k.asyncResolved) {
          Z(k, b, N)
          return
        } else (k.next = b), k.update()
      else (b.el = g.el), (k.vnode = b)
    },
    U = (g, b, N, k, P, F, B) => {
      const $ = () => {
        if (g.isMounted) {
          let { next: W, bu: J, u: te, parent: ae, vnode: Se } = g
          {
            const ht = Pf(g)
            if (ht) {
              W && ((W.el = Se.el), Z(g, W, B)),
                ht.asyncDep.then(() => {
                  g.isUnmounted || $()
                })
              return
            }
          }
          let ye = W,
            ft
          Tn(g, !1),
            W ? ((W.el = Se.el), Z(g, W, B)) : (W = Se),
            J && is(J),
            (ft = W.props && W.props.onVnodeBeforeUpdate) && it(ft, ae, W, Se),
            Tn(g, !0)
          const je = Gr(g),
            Ot = g.subTree
          ;(g.subTree = je),
            y(Ot, je, a(Ot.el), M(Ot), g, P, F),
            (W.el = je.el),
            ye === null && jl(g, je.el),
            te && De(te, P),
            (ft = W.props && W.props.onVnodeUpdated) && De(() => it(ft, ae, W, Se), P)
        } else {
          let W
          const { el: J, props: te } = b,
            { bm: ae, m: Se, parent: ye, root: ft, type: je } = g,
            Ot = pn(b)
          if ((Tn(g, !1), ae && is(ae), !Ot && (W = te && te.onVnodeBeforeMount) && it(W, ye, b), Tn(g, !0), J && Ce)) {
            const ht = () => {
              ;(g.subTree = Gr(g)), Ce(J, g.subTree, g, P, null)
            }
            Ot && je.__asyncHydrate ? je.__asyncHydrate(J, g, ht) : ht()
          } else {
            ft.ce && ft.ce._injectChildStyle(je)
            const ht = (g.subTree = Gr(g))
            y(null, ht, N, k, g, P, F), (b.el = ht.el)
          }
          if ((Se && De(Se, P), !Ot && (W = te && te.onVnodeMounted))) {
            const ht = b
            De(() => it(W, ye, ht), P)
          }
          ;(b.shapeFlag & 256 || (ye && pn(ye.vnode) && ye.vnode.shapeFlag & 256)) && g.a && De(g.a, P),
            (g.isMounted = !0),
            (b = N = k = null)
        }
      }
      g.scope.on()
      const V = (g.effect = new Us($))
      g.scope.off()
      const D = (g.update = V.run.bind(V)),
        ee = (g.job = V.runIfDirty.bind(V))
      ;(ee.i = g), (ee.id = g.uid), (V.scheduler = () => Rl(ee)), Tn(g, !0), D()
    },
    Z = (g, b, N) => {
      b.component = g
      const k = g.vnode.props
      ;(g.vnode = b), (g.next = null), kg(g, b.props, k, N), Vg(g, b.children, N), Sn(), Vc(g), _n()
    },
    q = (g, b, N, k, P, F, B, $, V = !1) => {
      const D = g && g.children,
        ee = g ? g.shapeFlag : 0,
        W = b.children,
        { patchFlag: J, shapeFlag: te } = b
      if (J > 0) {
        if (J & 128) {
          tt(D, W, N, k, P, F, B, $, V)
          return
        } else if (J & 256) {
          xe(D, W, N, k, P, F, B, $, V)
          return
        }
      }
      te & 8
        ? (ee & 16 && St(D, P, F), W !== D && u(N, W))
        : ee & 16
          ? te & 16
            ? tt(D, W, N, k, P, F, B, $, V)
            : St(D, P, F, !0)
          : (ee & 8 && u(N, ''), te & 16 && x(W, N, k, P, F, B, $, V))
    },
    xe = (g, b, N, k, P, F, B, $, V) => {
      ;(g = g || ns), (b = b || ns)
      const D = g.length,
        ee = b.length,
        W = Math.min(D, ee)
      let J
      for (J = 0; J < W; J++) {
        const te = (b[J] = V ? cn(b[J]) : lt(b[J]))
        y(g[J], te, N, null, P, F, B, $, V)
      }
      D > ee ? St(g, P, F, !0, !1, W) : x(b, N, k, P, F, B, $, V, W)
    },
    tt = (g, b, N, k, P, F, B, $, V) => {
      let D = 0
      const ee = b.length
      let W = g.length - 1,
        J = ee - 1
      for (; D <= W && D <= J; ) {
        const te = g[D],
          ae = (b[D] = V ? cn(b[D]) : lt(b[D]))
        if (xt(te, ae)) y(te, ae, N, null, P, F, B, $, V)
        else break
        D++
      }
      for (; D <= W && D <= J; ) {
        const te = g[W],
          ae = (b[J] = V ? cn(b[J]) : lt(b[J]))
        if (xt(te, ae)) y(te, ae, N, null, P, F, B, $, V)
        else break
        W--, J--
      }
      if (D > W) {
        if (D <= J) {
          const te = J + 1,
            ae = te < ee ? b[te].el : k
          for (; D <= J; ) y(null, (b[D] = V ? cn(b[D]) : lt(b[D])), N, ae, P, F, B, $, V), D++
        }
      } else if (D > J) for (; D <= W; ) st(g[D], P, F, !0), D++
      else {
        const te = D,
          ae = D,
          Se = new Map()
        for (D = ae; D <= J; D++) {
          const dt = (b[D] = V ? cn(b[D]) : lt(b[D]))
          dt.key != null && Se.set(dt.key, D)
        }
        let ye,
          ft = 0
        const je = J - ae + 1
        let Ot = !1,
          ht = 0
        const Ts = new Array(je)
        for (D = 0; D < je; D++) Ts[D] = 0
        for (D = te; D <= W; D++) {
          const dt = g[D]
          if (ft >= je) {
            st(dt, P, F, !0)
            continue
          }
          let Mt
          if (dt.key != null) Mt = Se.get(dt.key)
          else
            for (ye = ae; ye <= J; ye++)
              if (Ts[ye - ae] === 0 && xt(dt, b[ye])) {
                Mt = ye
                break
              }
          Mt === void 0
            ? st(dt, P, F, !0)
            : ((Ts[Mt - ae] = D + 1), Mt >= ht ? (ht = Mt) : (Ot = !0), y(dt, b[Mt], N, null, P, F, B, $, V), ft++)
        }
        const xc = Ot ? $g(Ts) : ns
        for (ye = xc.length - 1, D = je - 1; D >= 0; D--) {
          const dt = ae + D,
            Mt = b[dt],
            Nc = dt + 1 < ee ? b[dt + 1].el : k
          Ts[D] === 0 ? y(null, Mt, N, Nc, P, F, B, $, V) : Ot && (ye < 0 || D !== xc[ye] ? nt(Mt, N, Nc, 2) : ye--)
        }
      }
    },
    nt = (g, b, N, k, P = null) => {
      const { el: F, type: B, transition: $, children: V, shapeFlag: D } = g
      if (D & 6) {
        nt(g.component.subTree, b, N, k)
        return
      }
      if (D & 128) {
        g.suspense.move(b, N, k)
        return
      }
      if (D & 64) {
        B.move(g, b, N, Y)
        return
      }
      if (B === Ve) {
        s(F, b, N)
        for (let W = 0; W < V.length; W++) nt(V[W], b, N, k)
        s(g.anchor, b, N)
        return
      }
      if (B === Fn) {
        p(g, b, N)
        return
      }
      if (k !== 2 && D & 1 && $)
        if (k === 0) $.beforeEnter(F), s(F, b, N), De(() => $.enter(F), P)
        else {
          const { leave: W, delayLeave: J, afterLeave: te } = $,
            ae = () => s(F, b, N),
            Se = () => {
              W(F, () => {
                ae(), te && te()
              })
            }
          J ? J(F, ae, Se) : Se()
        }
      else s(F, b, N)
    },
    st = (g, b, N, k = !1, P = !1) => {
      const {
        type: F,
        props: B,
        ref: $,
        children: V,
        dynamicChildren: D,
        shapeFlag: ee,
        patchFlag: W,
        dirs: J,
        cacheIndex: te,
      } = g
      if (
        (W === -2 && (P = !1), $ != null && ai($, null, N, g, !0), te != null && (b.renderCache[te] = void 0), ee & 256)
      ) {
        b.ctx.deactivate(g)
        return
      }
      const ae = ee & 1 && J,
        Se = !pn(g)
      let ye
      if ((Se && (ye = B && B.onVnodeBeforeUnmount) && it(ye, b, g), ee & 6)) Cr(g.component, N, k)
      else {
        if (ee & 128) {
          g.suspense.unmount(N, k)
          return
        }
        ae && Dt(g, null, b, 'beforeUnmount'),
          ee & 64
            ? g.type.remove(g, b, N, Y, k)
            : D && !D.hasOnce && (F !== Ve || (W > 0 && W & 64))
              ? St(D, b, N, !1, !0)
              : ((F === Ve && W & 384) || (!P && ee & 16)) && St(V, b, N),
          k && qn(g)
      }
      ;((Se && (ye = B && B.onVnodeUnmounted)) || ae) &&
        De(() => {
          ye && it(ye, b, g), ae && Dt(g, null, b, 'unmounted')
        }, N)
    },
    qn = g => {
      const { type: b, el: N, anchor: k, transition: P } = g
      if (b === Ve) {
        Gn(N, k)
        return
      }
      if (b === Fn) {
        v(g)
        return
      }
      const F = () => {
        r(N), P && !P.persisted && P.afterLeave && P.afterLeave()
      }
      if (g.shapeFlag & 1 && P && !P.persisted) {
        const { leave: B, delayLeave: $ } = P,
          V = () => B(N, F)
        $ ? $(g.el, F, V) : V()
      } else F()
    },
    Gn = (g, b) => {
      let N
      for (; g !== b; ) (N = h(g)), r(g), (g = N)
      r(b)
    },
    Cr = (g, b, N) => {
      const { bum: k, scope: P, job: F, subTree: B, um: $, m: V, a: D } = g
      fi(V),
        fi(D),
        k && is(k),
        P.stop(),
        F && ((F.flags |= 8), st(B, g, b, N)),
        $ && De($, b),
        De(() => {
          g.isUnmounted = !0
        }, b),
        b &&
          b.pendingBranch &&
          !b.isUnmounted &&
          g.asyncDep &&
          !g.asyncResolved &&
          g.suspenseId === b.pendingId &&
          (b.deps--, b.deps === 0 && b.resolve())
    },
    St = (g, b, N, k = !1, P = !1, F = 0) => {
      for (let B = F; B < g.length; B++) st(g[B], b, N, k, P)
    },
    M = g => {
      if (g.shapeFlag & 6) return M(g.component.subTree)
      if (g.shapeFlag & 128) return g.suspense.next()
      const b = h(g.anchor || g.el),
        N = b && b[Qu]
      return N ? h(N) : b
    }
  let K = !1
  const H = (g, b, N) => {
      g == null ? b._vnode && st(b._vnode, null, null, !0) : y(b._vnode || null, g, b, null, null, null, N),
        (b._vnode = g),
        K || ((K = !0), Vc(), ci(), (K = !1))
    },
    Y = { p: y, um: st, m: nt, r: qn, mt: G, mc: x, pc: q, pbc: T, n: M, o: e }
  let ge, Ce
  return t && ([ge, Ce] = t(Y)), { render: H, hydrate: ge, createApp: Ig(H, ge) }
}
function po({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n
}
function Tn({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function If(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Hl(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (j(s) && j(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i]
      let l = r[i]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = r[i] = cn(r[i])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && Hl(o, l)),
        l.type === mn && (l.el = o.el)
    }
}
function $g(e) {
  const t = e.slice(),
    n = [0]
  let s, r, i, o, l
  const c = e.length
  for (s = 0; s < c; s++) {
    const f = e[s]
    if (f !== 0) {
      if (((r = n[n.length - 1]), e[r] < f)) {
        ;(t[s] = r), n.push(s)
        continue
      }
      for (i = 0, o = n.length - 1; i < o; ) (l = (i + o) >> 1), e[n[l]] < f ? (i = l + 1) : (o = l)
      f < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s))
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o])
  return n
}
function Pf(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Pf(t)
}
function fi(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const Mf = Symbol.for('v-scx'),
  kf = () => Tt(Mf)
function Ff(e, t) {
  return pr(e, null, t)
}
function Lf(e, t) {
  return pr(e, null, { flush: 'post' })
}
function Df(e, t) {
  return pr(e, null, { flush: 'sync' })
}
function fe(e, t, n) {
  return pr(e, t, n)
}
function pr(e, t, n = oe) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    l = le({}, n)
  let c
  if (mr)
    if (i === 'sync') {
      const h = kf()
      c = h.__watcherHandles || (h.__watcherHandles = [])
    } else if (!t || s) l.once = !0
    else {
      const h = () => {}
      return (h.stop = ze), (h.resume = ze), (h.pause = ze), h
    }
  const f = ke
  l.call = (h, d, m) => At(h, f, d, m)
  let u = !1
  i === 'post'
    ? (l.scheduler = h => {
        De(h, f && f.suspense)
      })
    : i !== 'sync' &&
      ((u = !0),
      (l.scheduler = (h, d) => {
        d ? h() : Rl(h)
      })),
    (l.augmentJob = h => {
      t && (h.flags |= 4), u && ((h.flags |= 2), f && ((h.id = f.uid), (h.i = f)))
    })
  const a = Tm(e, t, l)
  return c && c.push(a), a
}
function Bg(e, t, n) {
  const s = this.proxy,
    r = ne(e) ? (e.includes('.') ? Vf(s, e) : () => s[e]) : e.bind(s, s)
  let i
  Q(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = $n(this),
    l = pr(r, i.bind(s), n)
  return o(), l
}
function Vf(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
function Hg(e, t, n = oe) {
  const s = Le(),
    r = we(t),
    i = ct(t),
    o = $f(e, t),
    l = Hi((c, f) => {
      let u,
        a = oe,
        h
      return (
        Df(() => {
          const d = e[t]
          Qe(u, d) && ((u = d), f())
        }),
        {
          get() {
            return c(), n.get ? n.get(u) : u
          },
          set(d) {
            const m = n.set ? n.set(d) : d
            if (!Qe(m, u) && !(a !== oe && Qe(d, a))) return
            const y = s.vnode.props
            ;(y &&
              (t in y || r in y || i in y) &&
              (`onUpdate:${t}` in y || `onUpdate:${r}` in y || `onUpdate:${i}` in y)) ||
              ((u = d), f()),
              s.emit(`update:${t}`, m),
              Qe(d, m) && Qe(d, a) && !Qe(m, h) && f(),
              (a = d),
              (h = m)
          },
        }
      )
    })
  return (
    (l[Symbol.iterator] = () => {
      let c = 0
      return {
        next() {
          return c < 2 ? { value: c++ ? o || oe : l, done: !1 } : { done: !0 }
        },
      }
    }),
    l
  )
}
const $f = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${we(t)}Modifiers`] || e[`${ct(t)}Modifiers`]
function jg(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || oe
  let r = n
  const i = t.startsWith('update:'),
    o = i && $f(s, t.slice(7))
  o && (o.trim && (r = n.map(u => (ne(u) ? u.trim() : u))), o.number && (r = n.map(si)))
  let l,
    c = s[(l = rs(t))] || s[(l = rs(we(t)))]
  !c && i && (c = s[(l = rs(ct(t)))]), c && At(c, e, 6, r)
  const f = s[l + 'Once']
  if (f) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), At(f, e, 6, r)
  }
}
function Bf(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const i = e.emits
  let o = {},
    l = !1
  if (!Q(e)) {
    const c = f => {
      const u = Bf(f, t, !0)
      u && ((l = !0), le(o, u))
    }
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
  }
  return !i && !l
    ? (be(e) && s.set(e, null), null)
    : (j(i) ? i.forEach(c => (o[c] = null)) : le(o, i), be(e) && s.set(e, o), o)
}
function Gi(e, t) {
  return !e || !jn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')), de(e, t[0].toLowerCase() + t.slice(1)) || de(e, ct(t)) || de(e, t))
}
function Gr(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [i],
      slots: o,
      attrs: l,
      emit: c,
      render: f,
      renderCache: u,
      props: a,
      data: h,
      setupState: d,
      ctx: m,
      inheritAttrs: y,
    } = e,
    w = zs(e)
  let S, _
  try {
    if (n.shapeFlag & 4) {
      const v = r || s,
        E = v
      ;(S = lt(f.call(E, v, u, a, d, h, m))), (_ = l)
    } else {
      const v = t
      ;(S = lt(v.length > 1 ? v(a, { attrs: l, slots: o, emit: c }) : v(a, null))), (_ = t.props ? l : Wg(l))
    }
  } catch (v) {
    ;(ks.length = 0), Kn(v, e, 1), (S = Ee(Pe))
  }
  let p = S
  if (_ && y !== !1) {
    const v = Object.keys(_),
      { shapeFlag: E } = p
    v.length && E & 7 && (i && v.some(gl) && (_ = Kg(_, i)), (p = Vt(p, _, !1, !0)))
  }
  return (
    n.dirs && ((p = Vt(p, null, !1, !0)), (p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Jt(p, n.transition),
    (S = p),
    zs(w),
    S
  )
}
function Ug(e, t = !0) {
  let n
  for (let s = 0; s < e.length; s++) {
    const r = e[s]
    if (Xt(r)) {
      if (r.type !== Pe || r.children === 'v-if') {
        if (n) return
        n = r
      }
    } else return
  }
  return n
}
const Wg = e => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || jn(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Kg = (e, t) => {
    const n = {}
    for (const s in e) (!gl(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function qg(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: c } = t,
    f = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return s ? Yc(s, o, f) : !!o
    if (c & 8) {
      const u = t.dynamicProps
      for (let a = 0; a < u.length; a++) {
        const h = u[a]
        if (o[h] !== s[h] && !Gi(f, h)) return !0
      }
    }
  } else return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? (o ? Yc(s, o, f) : !0) : !!o
  return !1
}
function Yc(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const i = s[r]
    if (t[i] !== e[i] && !Gi(n, i)) return !0
  }
  return !1
}
function jl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)) ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const hi = e => e.__isSuspense
let $o = 0
const Gg = {
    name: 'Suspense',
    __isSuspense: !0,
    process(e, t, n, s, r, i, o, l, c, f) {
      if (e == null) Yg(t, n, s, r, i, o, l, c, f)
      else {
        if (i && i.deps > 0 && !e.suspense.isInFallback) {
          ;(t.suspense = e.suspense), (t.suspense.vnode = t), (t.el = e.el)
          return
        }
        Jg(e, t, n, s, r, o, l, c, f)
      }
    },
    hydrate: Xg,
    normalize: Zg,
  },
  zg = Gg
function Js(e, t) {
  const n = e.props && e.props[t]
  Q(n) && n()
}
function Yg(e, t, n, s, r, i, o, l, c) {
  const {
      p: f,
      o: { createElement: u },
    } = c,
    a = u('div'),
    h = (e.suspense = Hf(e, r, s, t, a, n, i, o, l, c))
  f(null, (h.pendingBranch = e.ssContent), a, null, s, h, i, o),
    h.deps > 0
      ? (Js(e, 'onPending'), Js(e, 'onFallback'), f(null, e.ssFallback, t, n, s, null, i, o), cs(h, e.ssFallback))
      : h.resolve(!1, !0)
}
function Jg(e, t, n, s, r, i, o, l, { p: c, um: f, o: { createElement: u } }) {
  const a = (t.suspense = e.suspense)
  ;(a.vnode = t), (t.el = e.el)
  const h = t.ssContent,
    d = t.ssFallback,
    { activeBranch: m, pendingBranch: y, isInFallback: w, isHydrating: S } = a
  if (y)
    (a.pendingBranch = h),
      xt(h, y)
        ? (c(y, h, a.hiddenContainer, null, r, a, i, o, l),
          a.deps <= 0 ? a.resolve() : w && (S || (c(m, d, n, s, r, null, i, o, l), cs(a, d))))
        : ((a.pendingId = $o++),
          S ? ((a.isHydrating = !1), (a.activeBranch = y)) : f(y, r, a),
          (a.deps = 0),
          (a.effects.length = 0),
          (a.hiddenContainer = u('div')),
          w
            ? (c(null, h, a.hiddenContainer, null, r, a, i, o, l),
              a.deps <= 0 ? a.resolve() : (c(m, d, n, s, r, null, i, o, l), cs(a, d)))
            : m && xt(h, m)
              ? (c(m, h, n, s, r, a, i, o, l), a.resolve(!0))
              : (c(null, h, a.hiddenContainer, null, r, a, i, o, l), a.deps <= 0 && a.resolve()))
  else if (m && xt(h, m)) c(m, h, n, s, r, a, i, o, l), cs(a, h)
  else if (
    (Js(t, 'onPending'),
    (a.pendingBranch = h),
    h.shapeFlag & 512 ? (a.pendingId = h.component.suspenseId) : (a.pendingId = $o++),
    c(null, h, a.hiddenContainer, null, r, a, i, o, l),
    a.deps <= 0)
  )
    a.resolve()
  else {
    const { timeout: _, pendingId: p } = a
    _ > 0
      ? setTimeout(() => {
          a.pendingId === p && a.fallback(d)
        }, _)
      : _ === 0 && a.fallback(d)
  }
}
function Hf(e, t, n, s, r, i, o, l, c, f, u = !1) {
  const {
    p: a,
    m: h,
    um: d,
    n: m,
    o: { parentNode: y, remove: w },
  } = f
  let S
  const _ = Qg(e)
  _ && t && t.pendingBranch && ((S = t.pendingId), t.deps++)
  const p = e.props ? ri(e.props.timeout) : void 0,
    v = i,
    E = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: o,
      container: s,
      hiddenContainer: r,
      deps: 0,
      pendingId: $o++,
      timeout: typeof p == 'number' ? p : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !u,
      isHydrating: u,
      isUnmounted: !1,
      effects: [],
      resolve(O = !1, R = !1) {
        const {
          vnode: x,
          activeBranch: C,
          pendingBranch: T,
          pendingId: I,
          effects: A,
          parentComponent: L,
          container: G,
        } = E
        let X = !1
        E.isHydrating
          ? (E.isHydrating = !1)
          : O ||
            ((X = C && T.transition && T.transition.mode === 'out-in'),
            X &&
              (C.transition.afterLeave = () => {
                I === E.pendingId && (h(T, G, i === v ? m(C) : i, 0), li(A))
              }),
            C && (y(C.el) === G && (i = m(C)), d(C, L, E, !0)),
            X || h(T, G, i, 0)),
          cs(E, T),
          (E.pendingBranch = null),
          (E.isInFallback = !1)
        let U = E.parent,
          Z = !1
        for (; U; ) {
          if (U.pendingBranch) {
            U.effects.push(...A), (Z = !0)
            break
          }
          U = U.parent
        }
        !Z && !X && li(A),
          (E.effects = []),
          _ && t && t.pendingBranch && S === t.pendingId && (t.deps--, t.deps === 0 && !R && t.resolve()),
          Js(x, 'onResolve')
      },
      fallback(O) {
        if (!E.pendingBranch) return
        const { vnode: R, activeBranch: x, parentComponent: C, container: T, namespace: I } = E
        Js(R, 'onFallback')
        const A = m(x),
          L = () => {
            E.isInFallback && (a(null, O, T, A, C, null, I, l, c), cs(E, O))
          },
          G = O.transition && O.transition.mode === 'out-in'
        G && (x.transition.afterLeave = L), (E.isInFallback = !0), d(x, C, null, !0), G || L()
      },
      move(O, R, x) {
        E.activeBranch && h(E.activeBranch, O, R, x), (E.container = O)
      },
      next() {
        return E.activeBranch && m(E.activeBranch)
      },
      registerDep(O, R, x) {
        const C = !!E.pendingBranch
        C && E.deps++
        const T = O.vnode.el
        O.asyncDep
          .catch(I => {
            Kn(I, O, 0)
          })
          .then(I => {
            if (O.isUnmounted || E.isUnmounted || E.pendingId !== O.suspenseId) return
            O.asyncResolved = !0
            const { vnode: A } = O
            Uo(O, I, !1), T && (A.el = T)
            const L = !T && O.subTree.el
            R(O, A, y(T || O.subTree.el), T ? null : m(O.subTree), E, o, x),
              L && w(L),
              jl(O, A.el),
              C && --E.deps === 0 && E.resolve()
          })
      },
      unmount(O, R) {
        ;(E.isUnmounted = !0),
          E.activeBranch && d(E.activeBranch, n, O, R),
          E.pendingBranch && d(E.pendingBranch, n, O, R)
      },
    }
  return E
}
function Xg(e, t, n, s, r, i, o, l, c) {
  const f = (t.suspense = Hf(t, s, n, e.parentNode, document.createElement('div'), null, r, i, o, l, !0)),
    u = c(e, (f.pendingBranch = t.ssContent), n, f, i, o)
  return f.deps === 0 && f.resolve(!1, !0), u
}
function Zg(e) {
  const { shapeFlag: t, children: n } = e,
    s = t & 32
  ;(e.ssContent = Jc(s ? n.default : n)), (e.ssFallback = s ? Jc(n.fallback) : Ee(Pe))
}
function Jc(e) {
  let t
  if (Q(e)) {
    const n = Vn && e._c
    n && ((e._d = !1), Xs()), (e = e()), n && ((e._d = !0), (t = qe), Uf())
  }
  return j(e) && (e = Ug(e)), (e = lt(e)), t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)), e
}
function jf(e, t) {
  t && t.pendingBranch ? (j(e) ? t.effects.push(...e) : t.effects.push(e)) : li(e)
}
function cs(e, t) {
  e.activeBranch = t
  const { vnode: n, parentComponent: s } = e
  let r = t.el
  for (; !r && t.component; ) (t = t.component.subTree), (r = t.el)
  ;(n.el = r), s && s.subTree === n && ((s.vnode.el = r), jl(s, r))
}
function Qg(e) {
  const t = e.props && e.props.suspensible
  return t != null && t !== !1
}
const Ve = Symbol.for('v-fgt'),
  mn = Symbol.for('v-txt'),
  Pe = Symbol.for('v-cmt'),
  Fn = Symbol.for('v-stc'),
  ks = []
let qe = null
function Xs(e = !1) {
  ks.push((qe = e ? null : []))
}
function Uf() {
  ks.pop(), (qe = ks[ks.length - 1] || null)
}
let Vn = 1
function Bo(e) {
  ;(Vn += e), e < 0 && qe && (qe.hasOnce = !0)
}
function Wf(e) {
  return (e.dynamicChildren = Vn > 0 ? qe || ns : null), Uf(), Vn > 0 && qe && qe.push(e), e
}
function ey(e, t, n, s, r, i) {
  return Wf(Ul(e, t, n, s, r, i, !0))
}
function di(e, t, n, s, r) {
  return Wf(Ee(e, t, n, s, r, !0))
}
function Xt(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function xt(e, t) {
  return e.type === t.type && e.key === t.key
}
function ty(e) {}
const Kf = ({ key: e }) => e ?? null,
  zr = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (ne(e) || Te(e) || Q(e) ? { i: Fe, r: e, k: t, f: !!n } : e) : null
  )
function Ul(e, t = null, n = null, s = 0, r = null, i = e === Ve ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Kf(t),
    ref: t && zr(t),
    scopeId: ji,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Fe,
  }
  return (
    l ? (Kl(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= ne(n) ? 8 : 16),
    Vn > 0 && !o && qe && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && qe.push(c),
    c
  )
}
const Ee = ny
function ny(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === mf) && (e = Pe), Xt(e))) {
    const l = Vt(e, t, !0)
    return (
      n && Kl(l, n),
      Vn > 0 && !i && qe && (l.shapeFlag & 6 ? (qe[qe.indexOf(e)] = l) : qe.push(l)),
      (l.patchFlag = -2),
      l
    )
  }
  if ((uy(e) && (e = e.__vccOpts), t)) {
    t = qf(t)
    let { class: l, style: c } = t
    l && !ne(l) && (t.class = ar(l)), be(c) && (Bi(c) && !j(c) && (c = le({}, c)), (t.style = cr(c)))
  }
  const o = ne(e) ? 1 : hi(e) ? 128 : ef(e) ? 64 : be(e) ? 4 : Q(e) ? 2 : 0
  return Ul(e, t, n, s, r, o, i, !0)
}
function qf(e) {
  return e ? (Bi(e) || _f(e) ? le({}, e) : e) : null
}
function Vt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e,
    f = t ? Gf(r || {}, t) : r,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: f,
      key: f && Kf(f),
      ref: t && t.ref ? (n && i ? (j(i) ? i.concat(zr(t)) : [i, zr(t)]) : zr(t)) : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Ve ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Vt(e.ssContent),
      ssFallback: e.ssFallback && Vt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  return c && s && Jt(u, c.clone(u)), u
}
function Wl(e = ' ', t = 0) {
  return Ee(mn, null, e, t)
}
function sy(e, t) {
  const n = Ee(Fn, null, e)
  return (n.staticCount = t), n
}
function ry(e = '', t = !1) {
  return t ? (Xs(), di(Pe, null, e)) : Ee(Pe, null, e)
}
function lt(e) {
  return e == null || typeof e == 'boolean'
    ? Ee(Pe)
    : j(e)
      ? Ee(Ve, null, e.slice())
      : Xt(e)
        ? cn(e)
        : Ee(mn, null, String(e))
}
function cn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Vt(e)
}
function Kl(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (j(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), Kl(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !_f(t)
        ? (t._ctx = Fe)
        : r === 3 && Fe && (Fe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    Q(t) ? ((t = { default: t, _ctx: Fe }), (n = 32)) : ((t = String(t)), s & 64 ? ((n = 16), (t = [Wl(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Gf(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class') t.class !== s.class && (t.class = ar([t.class, s.class]))
      else if (r === 'style') t.style = cr([t.style, s.style])
      else if (jn(r)) {
        const i = t[r],
          o = s[r]
        o && i !== o && !(j(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function it(e, t, n, s = null) {
  At(e, t, 7, [n, s])
}
const iy = vf()
let oy = 0
function zf(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || iy,
    i = {
      uid: oy++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Sl(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: wf(s, r),
      emitsOptions: Bf(s, r),
      emit: null,
      emitted: null,
      propsDefaults: oe,
      inheritAttrs: s.inheritAttrs,
      ctx: oe,
      data: oe,
      props: oe,
      attrs: oe,
      slots: oe,
      refs: oe,
      setupState: oe,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (i.ctx = { _: i }), (i.root = t ? t.root : i), (i.emit = jg.bind(null, i)), e.ce && e.ce(i), i
}
let ke = null
const Le = () => ke || Fe
let pi, Ho
{
  const e = Su(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        i => {
          r.length > 1 ? r.forEach(o => o(i)) : r[0](i)
        }
      )
    }
  ;(pi = t('__VUE_INSTANCE_SETTERS__', n => (ke = n))), (Ho = t('__VUE_SSR_SETTERS__', n => (mr = n)))
}
const $n = e => {
    const t = ke
    return (
      pi(e),
      e.scope.on(),
      () => {
        e.scope.off(), pi(t)
      }
    )
  },
  jo = () => {
    ke && ke.scope.off(), pi(null)
  }
function Yf(e) {
  return e.vnode.shapeFlag & 4
}
let mr = !1
function Jf(e, t = !1, n = !1) {
  t && Ho(t)
  const { props: s, children: r } = e.vnode,
    i = Yf(e)
  Mg(e, s, i, t), Dg(e, r, n)
  const o = i ? ly(e, t) : void 0
  return t && Ho(!1), o
}
function ly(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Fo))
  const { setup: s } = n
  if (s) {
    const r = (e.setupContext = s.length > 1 ? Qf(e) : null),
      i = $n(e)
    Sn()
    const o = Es(s, e, 0, [e.props, r])
    if ((_n(), i(), vl(o))) {
      if ((pn(e) || kl(e), o.then(jo, jo), t))
        return o
          .then(l => {
            Uo(e, l, t)
          })
          .catch(l => {
            Kn(l, e, 0)
          })
      e.asyncDep = o
    } else Uo(e, o, t)
  } else Zf(e, t)
}
function Uo(e, t, n) {
  Q(t) ? (e.type.__ssrInlineRender ? (e.ssrRender = t) : (e.render = t)) : be(t) && (e.setupState = xl(t)), Zf(e, n)
}
let mi, Wo
function Xf(e) {
  ;(mi = e),
    (Wo = t => {
      t.render._rc && (t.withProxy = new Proxy(t.ctx, fg))
    })
}
const cy = () => !mi
function Zf(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && mi && !s.render) {
      const r = s.template || $l(e).template
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = s,
          f = le(le({ isCustomElement: i, delimiters: l }, o), c)
        s.render = mi(r, f)
      }
    }
    ;(e.render = s.render || ze), Wo && Wo(e)
  }
  {
    const r = $n(e)
    Sn()
    try {
      Cg(e)
    } finally {
      _n(), r()
    }
  }
}
const ay = {
  get(e, t) {
    return Je(e, 'get', ''), e[t]
  },
}
function Qf(e) {
  const t = n => {
    e.exposed = n || {}
  }
  return { attrs: new Proxy(e.attrs, ay), slots: e.slots, emit: e.emit, expose: t }
}
function gr(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(xl(ju(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in Ms) return Ms[n](e)
          },
          has(t, n) {
            return n in t || n in Ms
          },
        }))
    : e.proxy
}
function Ko(e, t = !0) {
  return Q(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function uy(e) {
  return Q(e) && '__vccOpts' in e
}
const ie = (e, t) => Sm(e, t, mr)
function zi(e, t, n) {
  const s = arguments.length
  return s === 2
    ? be(t) && !j(t)
      ? Xt(t)
        ? Ee(e, null, [t])
        : Ee(e, t)
      : Ee(e, null, t)
    : (s > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : s === 3 && Xt(n) && (n = [n]), Ee(e, t, n))
}
function fy() {}
function hy(e, t, n, s) {
  const r = n[s]
  if (r && eh(r, e)) return r
  const i = t()
  return (i.memo = e.slice()), (i.cacheIndex = s), (n[s] = i)
}
function eh(e, t) {
  const n = e.memo
  if (n.length != t.length) return !1
  for (let s = 0; s < n.length; s++) if (Qe(n[s], t[s])) return !1
  return Vn > 0 && qe && qe.push(e), !0
}
const th = '3.5.10',
  dy = ze,
  py = Nm,
  my = Zn,
  gy = Zu,
  yy = {
    createComponentInstance: zf,
    setupComponent: Jf,
    renderComponentRoot: Gr,
    setCurrentRenderingInstance: zs,
    isVNode: Xt,
    normalizeVNode: lt,
    getComponentPublicInstance: gr,
    ensureValidVNode: Vl,
    pushWarningContext: Cm,
    popWarningContext: Am,
  },
  vy = yy,
  by = null,
  Sy = null,
  _y = null
/**
 * @vue/runtime-dom v3.5.10
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let qo
const Xc = typeof window < 'u' && window.trustedTypes
if (Xc)
  try {
    qo = Xc.createPolicy('vue', { createHTML: e => e })
  } catch {}
const nh = qo ? e => qo.createHTML(e) : e => e,
  Ey = 'http://www.w3.org/2000/svg',
  wy = 'http://www.w3.org/1998/Math/MathML',
  Kt = typeof document < 'u' ? document : null,
  Zc = Kt && Kt.createElement('template'),
  Ty = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: e => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? Kt.createElementNS(Ey, e)
          : t === 'mathml'
            ? Kt.createElementNS(wy, e)
            : n
              ? Kt.createElement(e, { is: n })
              : Kt.createElement(e)
      return e === 'select' && s && s.multiple != null && r.setAttribute('multiple', s.multiple), r
    },
    createText: e => Kt.createTextNode(e),
    createComment: e => Kt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Kt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild
      if (r && (r === i || r.nextSibling))
        for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); );
      else {
        Zc.innerHTML = nh(s === 'svg' ? `<svg>${e}</svg>` : s === 'mathml' ? `<math>${e}</math>` : e)
        const l = Zc.content
        if (s === 'svg' || s === 'mathml') {
          const c = l.firstChild
          for (; c.firstChild; ) l.appendChild(c.firstChild)
          l.removeChild(c)
        }
        t.insertBefore(l, n)
      }
      return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    },
  },
  en = 'transition',
  As = 'animation',
  ds = Symbol('_vtc'),
  sh = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  rh = le({}, Ml, sh),
  Cy = e => ((e.displayName = 'Transition'), (e.props = rh), e),
  Ay = Cy((e, { slots: t }) => zi(rf, ih(e), t)),
  Cn = (e, t = []) => {
    j(e) ? e.forEach(n => n(...t)) : e && e(...t)
  },
  Qc = e => (e ? (j(e) ? e.some(t => t.length > 1) : e.length > 1) : !1)
function ih(e) {
  const t = {}
  for (const A in e) A in sh || (t[A] = e[A])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: s,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = i,
      appearActiveClass: f = o,
      appearToClass: u = l,
      leaveFromClass: a = `${n}-leave-from`,
      leaveActiveClass: h = `${n}-leave-active`,
      leaveToClass: d = `${n}-leave-to`,
    } = e,
    m = Oy(r),
    y = m && m[0],
    w = m && m[1],
    {
      onBeforeEnter: S,
      onEnter: _,
      onEnterCancelled: p,
      onLeave: v,
      onLeaveCancelled: E,
      onBeforeAppear: O = S,
      onAppear: R = _,
      onAppearCancelled: x = p,
    } = t,
    C = (A, L, G) => {
      sn(A, L ? u : l), sn(A, L ? f : o), G && G()
    },
    T = (A, L) => {
      ;(A._isLeaving = !1), sn(A, a), sn(A, d), sn(A, h), L && L()
    },
    I = A => (L, G) => {
      const X = A ? R : _,
        U = () => C(L, A, G)
      Cn(X, [L, U]),
        ea(() => {
          sn(L, A ? c : i), Ut(L, A ? u : l), Qc(X) || ta(L, s, y, U)
        })
    }
  return le(t, {
    onBeforeEnter(A) {
      Cn(S, [A]), Ut(A, i), Ut(A, o)
    },
    onBeforeAppear(A) {
      Cn(O, [A]), Ut(A, c), Ut(A, f)
    },
    onEnter: I(!1),
    onAppear: I(!0),
    onLeave(A, L) {
      A._isLeaving = !0
      const G = () => T(A, L)
      Ut(A, a),
        Ut(A, h),
        lh(),
        ea(() => {
          A._isLeaving && (sn(A, a), Ut(A, d), Qc(v) || ta(A, s, w, G))
        }),
        Cn(v, [A, G])
    },
    onEnterCancelled(A) {
      C(A, !1), Cn(p, [A])
    },
    onAppearCancelled(A) {
      C(A, !0), Cn(x, [A])
    },
    onLeaveCancelled(A) {
      T(A), Cn(E, [A])
    },
  })
}
function Oy(e) {
  if (e == null) return null
  if (be(e)) return [mo(e.enter), mo(e.leave)]
  {
    const t = mo(e)
    return [t, t]
  }
}
function mo(e) {
  return ri(e)
}
function Ut(e, t) {
  t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e[ds] || (e[ds] = new Set())).add(t)
}
function sn(e, t) {
  t.split(/\s+/).forEach(s => s && e.classList.remove(s))
  const n = e[ds]
  n && (n.delete(t), n.size || (e[ds] = void 0))
}
function ea(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let xy = 0
function ta(e, t, n, s) {
  const r = (e._endId = ++xy),
    i = () => {
      r === e._endId && s()
    }
  if (n != null) return setTimeout(i, n)
  const { type: o, timeout: l, propCount: c } = oh(e, t)
  if (!o) return s()
  const f = o + 'end'
  let u = 0
  const a = () => {
      e.removeEventListener(f, h), i()
    },
    h = d => {
      d.target === e && ++u >= c && a()
    }
  setTimeout(() => {
    u < c && a()
  }, l + 1),
    e.addEventListener(f, h)
}
function oh(e, t) {
  const n = window.getComputedStyle(e),
    s = m => (n[m] || '').split(', '),
    r = s(`${en}Delay`),
    i = s(`${en}Duration`),
    o = na(r, i),
    l = s(`${As}Delay`),
    c = s(`${As}Duration`),
    f = na(l, c)
  let u = null,
    a = 0,
    h = 0
  t === en
    ? o > 0 && ((u = en), (a = o), (h = i.length))
    : t === As
      ? f > 0 && ((u = As), (a = f), (h = c.length))
      : ((a = Math.max(o, f)), (u = a > 0 ? (o > f ? en : As) : null), (h = u ? (u === en ? i.length : c.length) : 0))
  const d = u === en && /\b(transform|all)(,|$)/.test(s(`${en}Property`).toString())
  return { type: u, timeout: a, propCount: h, hasTransform: d }
}
function na(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, s) => sa(n) + sa(e[s])))
}
function sa(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function lh() {
  return document.body.offsetHeight
}
function Ny(e, t, n) {
  const s = e[ds]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t)
}
const gi = Symbol('_vod'),
  ch = Symbol('_vsh'),
  ah = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e[gi] = e.style.display === 'none' ? '' : e.style.display), n && t ? n.beforeEnter(e) : Os(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), Os(e, !0), s.enter(e))
            : s.leave(e, () => {
                Os(e, !1)
              })
          : Os(e, t))
    },
    beforeUnmount(e, { value: t }) {
      Os(e, t)
    },
  }
function Os(e, t) {
  ;(e.style.display = t ? e[gi] : 'none'), (e[ch] = !t)
}
function Ry() {
  ah.getSSRProps = ({ value: e }) => {
    if (!e) return { style: { display: 'none' } }
  }
}
const uh = Symbol('')
function Iy(e) {
  const t = Le()
  if (!t) return
  const n = (t.ut = (r = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(i => yi(i, r))
    }),
    s = () => {
      const r = e(t.proxy)
      t.ce ? yi(t.ce, r) : Go(t.subTree, r), n(r)
    }
  Fl(() => {
    Lf(s)
  }),
    wn(() => {
      const r = new MutationObserver(s)
      r.observe(t.subTree.el.parentNode, { childList: !0 }), dr(() => r.disconnect())
    })
}
function Go(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense
    ;(e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          Go(n.activeBranch, t)
        })
  }
  for (; e.component; ) e = e.component.subTree
  if (e.shapeFlag & 1 && e.el) yi(e.el, t)
  else if (e.type === Ve) e.children.forEach(n => Go(n, t))
  else if (e.type === Fn) {
    let { el: n, anchor: s } = e
    for (; n && (yi(n, t), n !== s); ) n = n.nextSibling
  }
}
function yi(e, t) {
  if (e.nodeType === 1) {
    const n = e.style
    let s = ''
    for (const r in t) n.setProperty(`--${r}`, t[r]), (s += `--${r}: ${t[r]};`)
    n[uh] = s
  }
}
const Py = /(^|;)\s*display\s*:/
function My(e, t, n) {
  const s = e.style,
    r = ne(n)
  let i = !1
  if (n && !r) {
    if (t)
      if (ne(t))
        for (const o of t.split(';')) {
          const l = o.slice(0, o.indexOf(':')).trim()
          n[l] == null && Yr(s, l, '')
        }
      else for (const o in t) n[o] == null && Yr(s, o, '')
    for (const o in n) o === 'display' && (i = !0), Yr(s, o, n[o])
  } else if (r) {
    if (t !== n) {
      const o = s[uh]
      o && (n += ';' + o), (s.cssText = n), (i = Py.test(n))
    }
  } else t && e.removeAttribute('style')
  gi in e && ((e[gi] = i ? s.display : ''), e[ch] && (s.display = 'none'))
}
const ra = /\s*!important$/
function Yr(e, t, n) {
  if (j(n)) n.forEach(s => Yr(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = ky(e, t)
    ra.test(n) ? e.setProperty(ct(s), n.replace(ra, ''), 'important') : (e[s] = n)
  }
}
const ia = ['Webkit', 'Moz', 'ms'],
  go = {}
function ky(e, t) {
  const n = go[t]
  if (n) return n
  let s = we(t)
  if (s !== 'filter' && s in e) return (go[t] = s)
  s = Wn(s)
  for (let r = 0; r < ia.length; r++) {
    const i = ia[r] + s
    if (i in e) return (go[t] = i)
  }
  return t
}
const oa = 'http://www.w3.org/1999/xlink'
function la(e, t, n, s, r, i = $p(t)) {
  s && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(oa, t.slice(6, t.length))
      : e.setAttributeNS(oa, t, n)
    : n == null || (i && !Eu(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : yt(n) ? String(n) : n)
}
function ca(e, t, n, s) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? nh(n) : n)
    return
  }
  const r = e.tagName
  if (t === 'value' && r !== 'PROGRESS' && !r.includes('-')) {
    const o = r === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      l = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n)
    ;(o !== l || !('_value' in e)) && (e.value = l), n == null && e.removeAttribute(t), (e._value = n)
    return
  }
  let i = !1
  if (n === '' || n == null) {
    const o = typeof e[t]
    o === 'boolean'
      ? (n = Eu(n))
      : n == null && o === 'string'
        ? ((n = ''), (i = !0))
        : o === 'number' && ((n = 0), (i = !0))
  }
  try {
    e[t] = n
  } catch {}
  i && e.removeAttribute(t)
}
function Gt(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function Fy(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const aa = Symbol('_vei')
function Ly(e, t, n, s, r = null) {
  const i = e[aa] || (e[aa] = {}),
    o = i[t]
  if (s && o) o.value = s
  else {
    const [l, c] = Dy(t)
    if (s) {
      const f = (i[t] = By(s, r))
      Gt(e, l, f, c)
    } else o && (Fy(e, l, o, c), (i[t] = void 0))
  }
}
const ua = /(?:Once|Passive|Capture)$/
function Dy(e) {
  let t
  if (ua.test(e)) {
    t = {}
    let s
    for (; (s = e.match(ua)); ) (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : ct(e.slice(2)), t]
}
let yo = 0
const Vy = Promise.resolve(),
  $y = () => yo || (Vy.then(() => (yo = 0)), (yo = Date.now()))
function By(e, t) {
  const n = s => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    At(Hy(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = $y()), n
}
function Hy(e, t) {
  if (j(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map(s => r => !r._stopped && s && s(r))
    )
  } else return t
}
const fa = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
  jy = (e, t, n, s, r, i) => {
    const o = r === 'svg'
    t === 'class'
      ? Ny(e, s, o)
      : t === 'style'
        ? My(e, n, s)
        : jn(t)
          ? gl(t) || Ly(e, t, n, s, i)
          : (t[0] === '.' ? ((t = t.slice(1)), !0) : t[0] === '^' ? ((t = t.slice(1)), !1) : Uy(e, t, s, o))
            ? (ca(e, t, s),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                la(e, t, s, o, i, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !ne(s))
              ? ca(e, we(t), s)
              : (t === 'true-value' ? (e._trueValue = s) : t === 'false-value' && (e._falseValue = s), la(e, t, s, o))
  }
function Uy(e, t, n, s) {
  if (s) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && fa(t) && Q(n)))
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const r = e.tagName
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE') return !1
  }
  return fa(t) && ne(n) ? !1 : t in e
}
const ha = {}
/*! #__NO_SIDE_EFFECTS__ */ function fh(e, t, n) {
  const s = fr(e, t)
  Ii(s) && le(s, t)
  class r extends Yi {
    constructor(o) {
      super(s, o, n)
    }
  }
  return (r.def = s), r
}
/*! #__NO_SIDE_EFFECTS__ */ const Wy = (e, t) => fh(e, t, wh),
  Ky = typeof HTMLElement < 'u' ? HTMLElement : class {}
class Yi extends Ky {
  constructor(t, n = {}, s = zo) {
    super(),
      (this._def = t),
      (this._props = n),
      (this._createApp = s),
      (this._isVueCE = !0),
      (this._instance = null),
      (this._app = null),
      (this._nonce = this._def.nonce),
      (this._connected = !1),
      (this._resolved = !1),
      (this._numberProps = null),
      (this._styleChildren = new WeakSet()),
      (this._ob = null),
      this.shadowRoot && s !== zo
        ? (this._root = this.shadowRoot)
        : t.shadowRoot !== !1
          ? (this.attachShadow({ mode: 'open' }), (this._root = this.shadowRoot))
          : (this._root = this),
      this._def.__asyncLoader || this._resolveProps(this._def)
  }
  connectedCallback() {
    if (!this.isConnected) return
    this.shadowRoot || this._parseSlots(), (this._connected = !0)
    let t = this
    for (; (t = t && (t.parentNode || t.host)); )
      if (t instanceof Yi) {
        this._parent = t
        break
      }
    this._instance ||
      (this._resolved
        ? (this._setParent(), this._update())
        : t && t._pendingResolve
          ? (this._pendingResolve = t._pendingResolve.then(() => {
              ;(this._pendingResolve = void 0), this._resolveDef()
            }))
          : this._resolveDef())
  }
  _setParent(t = this._parent) {
    t && ((this._instance.parent = t._instance), (this._instance.provides = t._instance.provides))
  }
  disconnectedCallback() {
    ;(this._connected = !1),
      En(() => {
        this._connected ||
          (this._ob && (this._ob.disconnect(), (this._ob = null)),
          this._app && this._app.unmount(),
          this._instance && (this._instance.ce = void 0),
          (this._app = this._instance = null))
      })
  }
  _resolveDef() {
    if (this._pendingResolve) return
    for (let s = 0; s < this.attributes.length; s++) this._setAttr(this.attributes[s].name)
    ;(this._ob = new MutationObserver(s => {
      for (const r of s) this._setAttr(r.attributeName)
    })),
      this._ob.observe(this, { attributes: !0 })
    const t = (s, r = !1) => {
        ;(this._resolved = !0), (this._pendingResolve = void 0)
        const { props: i, styles: o } = s
        let l
        if (i && !j(i))
          for (const c in i) {
            const f = i[c]
            ;(f === Number || (f && f.type === Number)) &&
              (c in this._props && (this._props[c] = ri(this._props[c])),
              ((l || (l = Object.create(null)))[we(c)] = !0))
          }
        ;(this._numberProps = l), r && this._resolveProps(s), this.shadowRoot && this._applyStyles(o), this._mount(s)
      },
      n = this._def.__asyncLoader
    n ? (this._pendingResolve = n().then(s => t((this._def = s), !0))) : t(this._def)
  }
  _mount(t) {
    ;(this._app = this._createApp(t)),
      t.configureApp && t.configureApp(this._app),
      (this._app._ceVNode = this._createVNode()),
      this._app.mount(this._root)
    const n = this._instance && this._instance.exposed
    if (n) for (const s in n) de(this, s) || Object.defineProperty(this, s, { get: () => $e(n[s]) })
  }
  _resolveProps(t) {
    const { props: n } = t,
      s = j(n) ? n : Object.keys(n || {})
    for (const r of Object.keys(this)) r[0] !== '_' && s.includes(r) && this._setProp(r, this[r])
    for (const r of s.map(we))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r)
        },
        set(i) {
          this._setProp(r, i, !0, !0)
        },
      })
  }
  _setAttr(t) {
    if (t.startsWith('data-v-')) return
    const n = this.hasAttribute(t)
    let s = n ? this.getAttribute(t) : ha
    const r = we(t)
    n && this._numberProps && this._numberProps[r] && (s = ri(s)), this._setProp(r, s, !1, !0)
  }
  _getProp(t) {
    return this._props[t]
  }
  _setProp(t, n, s = !0, r = !1) {
    n !== this._props[t] &&
      (n === ha
        ? delete this._props[t]
        : ((this._props[t] = n), t === 'key' && this._app && (this._app._ceVNode.key = n)),
      r && this._instance && this._update(),
      s &&
        (n === !0
          ? this.setAttribute(ct(t), '')
          : typeof n == 'string' || typeof n == 'number'
            ? this.setAttribute(ct(t), n + '')
            : n || this.removeAttribute(ct(t))))
  }
  _update() {
    Eh(this._createVNode(), this._root)
  }
  _createVNode() {
    const t = {}
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this))
    const n = Ee(this._def, le(t, this._props))
    return (
      this._instance ||
        (n.ce = s => {
          ;(this._instance = s), (s.ce = this), (s.isCE = !0)
          const r = (i, o) => {
            this.dispatchEvent(new CustomEvent(i, Ii(o[0]) ? le({ detail: o }, o[0]) : { detail: o }))
          }
          ;(s.emit = (i, ...o) => {
            r(i, o), ct(i) !== i && r(ct(i), o)
          }),
            this._setParent()
        }),
      n
    )
  }
  _applyStyles(t, n) {
    if (!t) return
    if (n) {
      if (n === this._def || this._styleChildren.has(n)) return
      this._styleChildren.add(n)
    }
    const s = this._nonce
    for (let r = t.length - 1; r >= 0; r--) {
      const i = document.createElement('style')
      s && i.setAttribute('nonce', s), (i.textContent = t[r]), this.shadowRoot.prepend(i)
    }
  }
  _parseSlots() {
    const t = (this._slots = {})
    let n
    for (; (n = this.firstChild); ) {
      const s = (n.nodeType === 1 && n.getAttribute('slot')) || 'default'
      ;(t[s] || (t[s] = [])).push(n), this.removeChild(n)
    }
  }
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll('slot'),
      n = this._instance.type.__scopeId
    for (let s = 0; s < t.length; s++) {
      const r = t[s],
        i = r.getAttribute('name') || 'default',
        o = this._slots[i],
        l = r.parentNode
      if (o)
        for (const c of o) {
          if (n && c.nodeType === 1) {
            const f = n + '-s',
              u = document.createTreeWalker(c, 1)
            c.setAttribute(f, '')
            let a
            for (; (a = u.nextNode()); ) a.setAttribute(f, '')
          }
          l.insertBefore(c, r)
        }
      else for (; r.firstChild; ) l.insertBefore(r.firstChild, r)
      l.removeChild(r)
    }
  }
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t)
  }
  _removeChildStyle(t) {}
}
function hh(e) {
  const t = Le(),
    n = t && t.ce
  return n || null
}
function qy() {
  const e = hh()
  return e && e.shadowRoot
}
function Gy(e = '$style') {
  {
    const t = Le()
    if (!t) return oe
    const n = t.type.__cssModules
    if (!n) return oe
    const s = n[e]
    return s || oe
  }
}
const dh = new WeakMap(),
  ph = new WeakMap(),
  vi = Symbol('_moveCb'),
  da = Symbol('_enterCb'),
  zy = e => (delete e.props.mode, e),
  Yy = zy({
    name: 'TransitionGroup',
    props: le({}, rh, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = Le(),
        s = Pl()
      let r, i
      return (
        Ki(() => {
          if (!r.length) return
          const o = e.moveClass || `${e.name || 'v'}-move`
          if (!ev(r[0].el, n.vnode.el, o)) return
          r.forEach(Xy), r.forEach(Zy)
          const l = r.filter(Qy)
          lh(),
            l.forEach(c => {
              const f = c.el,
                u = f.style
              Ut(f, o), (u.transform = u.webkitTransform = u.transitionDuration = '')
              const a = (f[vi] = h => {
                ;(h && h.target !== f) ||
                  ((!h || /transform$/.test(h.propertyName)) &&
                    (f.removeEventListener('transitionend', a), (f[vi] = null), sn(f, o)))
              })
              f.addEventListener('transitionend', a)
            })
        }),
        () => {
          const o = ce(e),
            l = ih(o)
          let c = o.tag || Ve
          if (((r = []), i))
            for (let f = 0; f < i.length; f++) {
              const u = i[f]
              u.el &&
                u.el instanceof Element &&
                (r.push(u), Jt(u, hs(u, l, s, n)), dh.set(u, u.el.getBoundingClientRect()))
            }
          i = t.default ? Ui(t.default()) : []
          for (let f = 0; f < i.length; f++) {
            const u = i[f]
            u.key != null && Jt(u, hs(u, l, s, n))
          }
          return Ee(c, null, i)
        }
      )
    },
  }),
  Jy = Yy
function Xy(e) {
  const t = e.el
  t[vi] && t[vi](), t[da] && t[da]()
}
function Zy(e) {
  ph.set(e, e.el.getBoundingClientRect())
}
function Qy(e) {
  const t = dh.get(e),
    n = ph.get(e),
    s = t.left - n.left,
    r = t.top - n.top
  if (s || r) {
    const i = e.el.style
    return (i.transform = i.webkitTransform = `translate(${s}px,${r}px)`), (i.transitionDuration = '0s'), e
  }
}
function ev(e, t, n) {
  const s = e.cloneNode(),
    r = e[ds]
  r &&
    r.forEach(l => {
      l.split(/\s+/).forEach(c => c && s.classList.remove(c))
    }),
    n.split(/\s+/).forEach(l => l && s.classList.add(l)),
    (s.style.display = 'none')
  const i = t.nodeType === 1 ? t : t.parentNode
  i.appendChild(s)
  const { hasTransform: o } = oh(s)
  return i.removeChild(s), o
}
const bn = e => {
  const t = e.props['onUpdate:modelValue'] || !1
  return j(t) ? n => is(t, n) : t
}
function tv(e) {
  e.target.composing = !0
}
function pa(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')))
}
const Ct = Symbol('_assign'),
  bi = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
      e[Ct] = bn(r)
      const i = s || (r.props && r.props.type === 'number')
      Gt(e, t ? 'change' : 'input', o => {
        if (o.target.composing) return
        let l = e.value
        n && (l = l.trim()), i && (l = si(l)), e[Ct](l)
      }),
        n &&
          Gt(e, 'change', () => {
            e.value = e.value.trim()
          }),
        t || (Gt(e, 'compositionstart', tv), Gt(e, 'compositionend', pa), Gt(e, 'change', pa))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ''
    },
    beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
      if (((e[Ct] = bn(o)), e.composing)) return
      const l = (i || e.type === 'number') && !/^0\d/.test(e.value) ? si(e.value) : e.value,
        c = t ?? ''
      l !== c &&
        ((document.activeElement === e && e.type !== 'range' && ((s && t === n) || (r && e.value.trim() === c))) ||
          (e.value = c))
    },
  },
  ql = {
    deep: !0,
    created(e, t, n) {
      ;(e[Ct] = bn(n)),
        Gt(e, 'change', () => {
          const s = e._modelValue,
            r = ps(e),
            i = e.checked,
            o = e[Ct]
          if (j(s)) {
            const l = Mi(s, r),
              c = l !== -1
            if (i && !c) o(s.concat(r))
            else if (!i && c) {
              const f = [...s]
              f.splice(l, 1), o(f)
            }
          } else if (Un(s)) {
            const l = new Set(s)
            i ? l.add(r) : l.delete(r), o(l)
          } else o(gh(e, i))
        })
    },
    mounted: ma,
    beforeUpdate(e, t, n) {
      ;(e[Ct] = bn(n)), ma(e, t, n)
    },
  }
function ma(e, { value: t }, n) {
  e._modelValue = t
  let s
  j(t) ? (s = Mi(t, n.props.value) > -1) : Un(t) ? (s = t.has(n.props.value)) : (s = yn(t, gh(e, !0))),
    e.checked !== s && (e.checked = s)
}
const Gl = {
    created(e, { value: t }, n) {
      ;(e.checked = yn(t, n.props.value)),
        (e[Ct] = bn(n)),
        Gt(e, 'change', () => {
          e[Ct](ps(e))
        })
    },
    beforeUpdate(e, { value: t, oldValue: n }, s) {
      ;(e[Ct] = bn(s)), t !== n && (e.checked = yn(t, s.props.value))
    },
  },
  mh = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, s) {
      const r = Un(t)
      Gt(e, 'change', () => {
        const i = Array.prototype.filter.call(e.options, o => o.selected).map(o => (n ? si(ps(o)) : ps(o)))
        e[Ct](e.multiple ? (r ? new Set(i) : i) : i[0]),
          (e._assigning = !0),
          En(() => {
            e._assigning = !1
          })
      }),
        (e[Ct] = bn(s))
    },
    mounted(e, { value: t }) {
      ga(e, t)
    },
    beforeUpdate(e, t, n) {
      e[Ct] = bn(n)
    },
    updated(e, { value: t }) {
      e._assigning || ga(e, t)
    },
  }
function ga(e, t) {
  const n = e.multiple,
    s = j(t)
  if (!(n && !s && !Un(t))) {
    for (let r = 0, i = e.options.length; r < i; r++) {
      const o = e.options[r],
        l = ps(o)
      if (n)
        if (s) {
          const c = typeof l
          c === 'string' || c === 'number'
            ? (o.selected = t.some(f => String(f) === String(l)))
            : (o.selected = Mi(t, l) > -1)
        } else o.selected = t.has(l)
      else if (yn(ps(o), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r)
        return
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
  }
}
function ps(e) {
  return '_value' in e ? e._value : e.value
}
function gh(e, t) {
  const n = t ? '_trueValue' : '_falseValue'
  return n in e ? e[n] : t
}
const yh = {
  created(e, t, n) {
    Vr(e, t, n, null, 'created')
  },
  mounted(e, t, n) {
    Vr(e, t, n, null, 'mounted')
  },
  beforeUpdate(e, t, n, s) {
    Vr(e, t, n, s, 'beforeUpdate')
  },
  updated(e, t, n, s) {
    Vr(e, t, n, s, 'updated')
  },
}
function vh(e, t) {
  switch (e) {
    case 'SELECT':
      return mh
    case 'TEXTAREA':
      return bi
    default:
      switch (t) {
        case 'checkbox':
          return ql
        case 'radio':
          return Gl
        default:
          return bi
      }
  }
}
function Vr(e, t, n, s, r) {
  const o = vh(e.tagName, n.props && n.props.type)[r]
  o && o(e, t, n, s)
}
function nv() {
  ;(bi.getSSRProps = ({ value: e }) => ({ value: e })),
    (Gl.getSSRProps = ({ value: e }, t) => {
      if (t.props && yn(t.props.value, e)) return { checked: !0 }
    }),
    (ql.getSSRProps = ({ value: e }, t) => {
      if (j(e)) {
        if (t.props && Mi(e, t.props.value) > -1) return { checked: !0 }
      } else if (Un(e)) {
        if (t.props && e.has(t.props.value)) return { checked: !0 }
      } else if (e) return { checked: !0 }
    }),
    (yh.getSSRProps = (e, t) => {
      if (typeof t.type != 'string') return
      const n = vh(t.type.toUpperCase(), t.props && t.props.type)
      if (n.getSSRProps) return n.getSSRProps(e, t)
    })
}
const sv = ['ctrl', 'shift', 'alt', 'meta'],
  rv = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => 'button' in e && e.button !== 0,
    middle: e => 'button' in e && e.button !== 1,
    right: e => 'button' in e && e.button !== 2,
    exact: (e, t) => sv.some(n => e[`${n}Key`] && !t.includes(n)),
  },
  iv = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r, ...i) => {
        for (let o = 0; o < t.length; o++) {
          const l = rv[t[o]]
          if (l && l(r, t)) return
        }
        return e(r, ...i)
      })
    )
  },
  ov = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  lv = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = r => {
        if (!('key' in r)) return
        const i = ct(r.key)
        if (t.some(o => o === i || ov[o] === i)) return e(r)
      })
    )
  },
  bh = le({ patchProp: jy }, Ty)
let Fs,
  ya = !1
function Sh() {
  return Fs || (Fs = xf(bh))
}
function _h() {
  return (Fs = ya ? Fs : Nf(bh)), (ya = !0), Fs
}
const Eh = (...e) => {
    Sh().render(...e)
  },
  cv = (...e) => {
    _h().hydrate(...e)
  },
  zo = (...e) => {
    const t = Sh().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = s => {
        const r = Ch(s)
        if (!r) return
        const i = t._component
        !Q(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = '')
        const o = n(r, !1, Th(r))
        return r instanceof Element && (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')), o
      }),
      t
    )
  },
  wh = (...e) => {
    const t = _h().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = s => {
        const r = Ch(s)
        if (r) return n(r, !0, Th(r))
      }),
      t
    )
  }
function Th(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function Ch(e) {
  return ne(e) ? document.querySelector(e) : e
}
let va = !1
const av = () => {
    va || ((va = !0), nv(), Ry())
  },
  uv = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        BaseTransition: rf,
        BaseTransitionPropsValidators: Ml,
        Comment: Pe,
        DeprecationTypes: _y,
        EffectScope: Sl,
        ErrorCodes: xm,
        ErrorTypeStrings: py,
        Fragment: Ve,
        KeepAlive: tg,
        ReactiveEffect: Us,
        Static: Fn,
        Suspense: zg,
        Teleport: $m,
        Text: mn,
        TrackOpTypes: _m,
        Transition: Ay,
        TransitionGroup: Jy,
        TriggerOpTypes: Em,
        VueElement: Yi,
        assertNumber: Om,
        callWithAsyncErrorHandling: At,
        callWithErrorHandling: Es,
        camelize: we,
        capitalize: Wn,
        cloneVNode: Vt,
        compatUtils: Sy,
        computed: ie,
        createApp: zo,
        createBlock: di,
        createCommentVNode: ry,
        createElementBlock: ey,
        createElementVNode: Ul,
        createHydrationRenderer: Nf,
        createPropsRestProxy: wg,
        createRenderer: xf,
        createSSRApp: wh,
        createSlots: cg,
        createStaticVNode: sy,
        createTextVNode: Wl,
        createVNode: Ee,
        customRef: Hi,
        defineAsyncComponent: Qm,
        defineComponent: fr,
        defineCustomElement: fh,
        defineEmits: dg,
        defineExpose: pg,
        defineModel: yg,
        defineOptions: mg,
        defineProps: hg,
        defineSSRCustomElement: Wy,
        defineSlots: gg,
        devtools: my,
        effect: jp,
        effectScope: Au,
        getCurrentInstance: Le,
        getCurrentScope: ki,
        getCurrentWatcher: wm,
        getTransitionRawChildren: Ui,
        guardReactiveProps: qf,
        h: zi,
        handleError: Kn,
        hasInjectionContext: Pg,
        hydrate: cv,
        hydrateOnIdle: Gm,
        hydrateOnInteraction: Xm,
        hydrateOnMediaQuery: Jm,
        hydrateOnVisible: Ym,
        initCustomFormatter: fy,
        initDirectivesForSSR: av,
        inject: Tt,
        isMemoSame: eh,
        isProxy: Bi,
        isReactive: dn,
        isReadonly: vn,
        isRef: Te,
        isRuntimeOnly: cy,
        isShallow: gt,
        isVNode: Xt,
        markRaw: ju,
        mergeDefaults: _g,
        mergeModels: Eg,
        mergeProps: Gf,
        nextTick: En,
        normalizeClass: ar,
        normalizeProps: Np,
        normalizeStyle: cr,
        onActivated: lf,
        onBeforeMount: Fl,
        onBeforeUnmount: qi,
        onBeforeUpdate: uf,
        onDeactivated: cf,
        onErrorCaptured: pf,
        onMounted: wn,
        onRenderTracked: df,
        onRenderTriggered: hf,
        onScopeDispose: _l,
        onServerPrefetch: ff,
        onUnmounted: dr,
        onUpdated: Ki,
        onWatcherCleanup: Gu,
        openBlock: Xs,
        popScopeId: Mm,
        provide: ls,
        proxyRefs: xl,
        pushScopeId: Pm,
        queuePostFlushCb: li,
        reactive: ut,
        readonly: Nt,
        ref: z,
        registerRuntimeCompiler: Xf,
        render: Eh,
        renderList: lg,
        renderSlot: ag,
        resolveComponent: rg,
        resolveDirective: og,
        resolveDynamicComponent: ig,
        resolveFilter: by,
        resolveTransitionHooks: hs,
        setBlockTracking: Bo,
        setDevtoolsHook: gy,
        setTransitionHooks: Jt,
        shallowReactive: Al,
        shallowReadonly: fm,
        shallowRef: ur,
        ssrContextKey: Mf,
        ssrUtils: vy,
        stop: Up,
        toDisplayString: Tu,
        toHandlerKey: rs,
        toHandlers: ug,
        toRaw: ce,
        toRef: Ku,
        toRefs: Wu,
        toValue: pm,
        transformVNodeArgs: ty,
        triggerRef: dm,
        unref: $e,
        useAttrs: Sg,
        useCssModule: Gy,
        useCssVars: Iy,
        useHost: hh,
        useId: Hm,
        useModel: Hg,
        useSSRContext: kf,
        useShadowRoot: qy,
        useSlots: bg,
        useTemplateRef: jm,
        useTransitionState: Pl,
        vModelCheckbox: ql,
        vModelDynamic: yh,
        vModelRadio: Gl,
        vModelSelect: mh,
        vModelText: bi,
        vShow: ah,
        version: th,
        warn: dy,
        watch: fe,
        watchEffect: Ff,
        watchPostEffect: Lf,
        watchSyncEffect: Df,
        withAsyncContext: Tg,
        withCtx: Il,
        withDefaults: vg,
        withDirectives: Fm,
        withKeys: lv,
        withMemo: hy,
        withModifiers: iv,
        withScopeId: km,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  )
/**
 * @vue/compiler-core v3.5.10
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Zs = Symbol(''),
  Ls = Symbol(''),
  zl = Symbol(''),
  Si = Symbol(''),
  Ah = Symbol(''),
  Bn = Symbol(''),
  Oh = Symbol(''),
  xh = Symbol(''),
  Yl = Symbol(''),
  Jl = Symbol(''),
  yr = Symbol(''),
  Xl = Symbol(''),
  Nh = Symbol(''),
  Zl = Symbol(''),
  Ql = Symbol(''),
  ec = Symbol(''),
  tc = Symbol(''),
  nc = Symbol(''),
  sc = Symbol(''),
  Rh = Symbol(''),
  Ih = Symbol(''),
  Ji = Symbol(''),
  _i = Symbol(''),
  rc = Symbol(''),
  ic = Symbol(''),
  Qs = Symbol(''),
  vr = Symbol(''),
  oc = Symbol(''),
  Yo = Symbol(''),
  fv = Symbol(''),
  Jo = Symbol(''),
  Ei = Symbol(''),
  hv = Symbol(''),
  dv = Symbol(''),
  lc = Symbol(''),
  pv = Symbol(''),
  mv = Symbol(''),
  cc = Symbol(''),
  Ph = Symbol(''),
  ms = {
    [Zs]: 'Fragment',
    [Ls]: 'Teleport',
    [zl]: 'Suspense',
    [Si]: 'KeepAlive',
    [Ah]: 'BaseTransition',
    [Bn]: 'openBlock',
    [Oh]: 'createBlock',
    [xh]: 'createElementBlock',
    [Yl]: 'createVNode',
    [Jl]: 'createElementVNode',
    [yr]: 'createCommentVNode',
    [Xl]: 'createTextVNode',
    [Nh]: 'createStaticVNode',
    [Zl]: 'resolveComponent',
    [Ql]: 'resolveDynamicComponent',
    [ec]: 'resolveDirective',
    [tc]: 'resolveFilter',
    [nc]: 'withDirectives',
    [sc]: 'renderList',
    [Rh]: 'renderSlot',
    [Ih]: 'createSlots',
    [Ji]: 'toDisplayString',
    [_i]: 'mergeProps',
    [rc]: 'normalizeClass',
    [ic]: 'normalizeStyle',
    [Qs]: 'normalizeProps',
    [vr]: 'guardReactiveProps',
    [oc]: 'toHandlers',
    [Yo]: 'camelize',
    [fv]: 'capitalize',
    [Jo]: 'toHandlerKey',
    [Ei]: 'setBlockTracking',
    [hv]: 'pushScopeId',
    [dv]: 'popScopeId',
    [lc]: 'withCtx',
    [pv]: 'unref',
    [mv]: 'isRef',
    [cc]: 'withMemo',
    [Ph]: 'isMemoSame',
  }
function gv(e) {
  Object.getOwnPropertySymbols(e).forEach(t => {
    ms[t] = e[t]
  })
}
const bt = { start: { line: 1, column: 1, offset: 0 }, end: { line: 1, column: 1, offset: 0 }, source: '' }
function yv(e, t = '') {
  return {
    type: 0,
    source: t,
    children: e,
    helpers: new Set(),
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: [],
    temps: 0,
    codegenNode: void 0,
    loc: bt,
  }
}
function er(e, t, n, s, r, i, o, l = !1, c = !1, f = !1, u = bt) {
  return (
    e && (l ? (e.helper(Bn), e.helper(vs(e.inSSR, f))) : e.helper(ys(e.inSSR, f)), o && e.helper(nc)),
    {
      type: 13,
      tag: t,
      props: n,
      children: s,
      patchFlag: r,
      dynamicProps: i,
      directives: o,
      isBlock: l,
      disableTracking: c,
      isComponent: f,
      loc: u,
    }
  )
}
function Ln(e, t = bt) {
  return { type: 17, loc: t, elements: e }
}
function wt(e, t = bt) {
  return { type: 15, loc: t, properties: e }
}
function Re(e, t) {
  return { type: 16, loc: bt, key: ne(e) ? se(e, !0) : e, value: t }
}
function se(e, t = !1, n = bt, s = 0) {
  return { type: 4, loc: n, content: e, isStatic: t, constType: t ? 3 : s }
}
function It(e, t = bt) {
  return { type: 8, loc: t, children: e }
}
function Me(e, t = [], n = bt) {
  return { type: 14, loc: n, callee: e, arguments: t }
}
function gs(e, t = void 0, n = !1, s = !1, r = bt) {
  return { type: 18, params: e, returns: t, newline: n, isSlot: s, loc: r }
}
function Xo(e, t, n, s = !0) {
  return { type: 19, test: e, consequent: t, alternate: n, newline: s, loc: bt }
}
function vv(e, t, n = !1) {
  return { type: 20, index: e, value: t, needPauseTracking: n, needArraySpread: !1, loc: bt }
}
function bv(e) {
  return { type: 21, body: e, loc: bt }
}
function ys(e, t) {
  return e || t ? Yl : Jl
}
function vs(e, t) {
  return e || t ? Oh : xh
}
function ac(e, { helper: t, removeHelper: n, inSSR: s }) {
  e.isBlock || ((e.isBlock = !0), n(ys(s, e.isComponent)), t(Bn), t(vs(s, e.isComponent)))
}
const ba = new Uint8Array([123, 123]),
  Sa = new Uint8Array([125, 125])
function _a(e) {
  return (e >= 97 && e <= 122) || (e >= 65 && e <= 90)
}
function pt(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13
}
function tn(e) {
  return e === 47 || e === 62 || pt(e)
}
function wi(e) {
  const t = new Uint8Array(e.length)
  for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n)
  return t
}
const Ue = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  CdataEnd: new Uint8Array([93, 93, 62]),
  CommentEnd: new Uint8Array([45, 45, 62]),
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]),
}
class Sv {
  constructor(t, n) {
    ;(this.stack = t),
      (this.cbs = n),
      (this.state = 1),
      (this.buffer = ''),
      (this.sectionStart = 0),
      (this.index = 0),
      (this.entityStart = 0),
      (this.baseState = 1),
      (this.inRCDATA = !1),
      (this.inXML = !1),
      (this.inVPre = !1),
      (this.newlines = []),
      (this.mode = 0),
      (this.delimiterOpen = ba),
      (this.delimiterClose = Sa),
      (this.delimiterIndex = -1),
      (this.currentSequence = void 0),
      (this.sequenceIndex = 0)
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0
  }
  reset() {
    ;(this.state = 1),
      (this.mode = 0),
      (this.buffer = ''),
      (this.sectionStart = 0),
      (this.index = 0),
      (this.baseState = 1),
      (this.inRCDATA = !1),
      (this.currentSequence = void 0),
      (this.newlines.length = 0),
      (this.delimiterOpen = ba),
      (this.delimiterClose = Sa)
  }
  getPos(t) {
    let n = 1,
      s = t + 1
    for (let r = this.newlines.length - 1; r >= 0; r--) {
      const i = this.newlines[r]
      if (t > i) {
        ;(n = r + 2), (s = t - i)
        break
      }
    }
    return { column: s, line: n, offset: t }
  }
  peek() {
    return this.buffer.charCodeAt(this.index + 1)
  }
  stateText(t) {
    t === 60
      ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index),
        (this.state = 5),
        (this.sectionStart = this.index))
      : !this.inVPre &&
        t === this.delimiterOpen[0] &&
        ((this.state = 2), (this.delimiterIndex = 0), this.stateInterpolationOpen(t))
  }
  stateInterpolationOpen(t) {
    if (t === this.delimiterOpen[this.delimiterIndex])
      if (this.delimiterIndex === this.delimiterOpen.length - 1) {
        const n = this.index + 1 - this.delimiterOpen.length
        n > this.sectionStart && this.cbs.ontext(this.sectionStart, n), (this.state = 3), (this.sectionStart = n)
      } else this.delimiterIndex++
    else this.inRCDATA ? ((this.state = 32), this.stateInRCDATA(t)) : ((this.state = 1), this.stateText(t))
  }
  stateInterpolation(t) {
    t === this.delimiterClose[0] && ((this.state = 4), (this.delimiterIndex = 0), this.stateInterpolationClose(t))
  }
  stateInterpolationClose(t) {
    t === this.delimiterClose[this.delimiterIndex]
      ? this.delimiterIndex === this.delimiterClose.length - 1
        ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1),
          this.inRCDATA ? (this.state = 32) : (this.state = 1),
          (this.sectionStart = this.index + 1))
        : this.delimiterIndex++
      : ((this.state = 3), this.stateInterpolation(t))
  }
  stateSpecialStartSequence(t) {
    const n = this.sequenceIndex === this.currentSequence.length
    if (!(n ? tn(t) : (t | 32) === this.currentSequence[this.sequenceIndex])) this.inRCDATA = !1
    else if (!n) {
      this.sequenceIndex++
      return
    }
    ;(this.sequenceIndex = 0), (this.state = 6), this.stateInTagName(t)
  }
  stateInRCDATA(t) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (t === 62 || pt(t)) {
        const n = this.index - this.currentSequence.length
        if (this.sectionStart < n) {
          const s = this.index
          ;(this.index = n), this.cbs.ontext(this.sectionStart, n), (this.index = s)
        }
        ;(this.sectionStart = n + 2), this.stateInClosingTagName(t), (this.inRCDATA = !1)
        return
      }
      this.sequenceIndex = 0
    }
    ;(t | 32) === this.currentSequence[this.sequenceIndex]
      ? (this.sequenceIndex += 1)
      : this.sequenceIndex === 0
        ? this.currentSequence === Ue.TitleEnd || (this.currentSequence === Ue.TextareaEnd && !this.inSFCRoot)
          ? !this.inVPre &&
            t === this.delimiterOpen[0] &&
            ((this.state = 2), (this.delimiterIndex = 0), this.stateInterpolationOpen(t))
          : this.fastForwardTo(60) && (this.sequenceIndex = 1)
        : (this.sequenceIndex = +(t === 60))
  }
  stateCDATASequence(t) {
    t === Ue.Cdata[this.sequenceIndex]
      ? ++this.sequenceIndex === Ue.Cdata.length &&
        ((this.state = 28),
        (this.currentSequence = Ue.CdataEnd),
        (this.sequenceIndex = 0),
        (this.sectionStart = this.index + 1))
      : ((this.sequenceIndex = 0), (this.state = 23), this.stateInDeclaration(t))
  }
  fastForwardTo(t) {
    for (; ++this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index)
      if ((n === 10 && this.newlines.push(this.index), n === t)) return !0
    }
    return (this.index = this.buffer.length - 1), !1
  }
  stateInCommentLike(t) {
    t === this.currentSequence[this.sequenceIndex]
      ? ++this.sequenceIndex === this.currentSequence.length &&
        (this.currentSequence === Ue.CdataEnd
          ? this.cbs.oncdata(this.sectionStart, this.index - 2)
          : this.cbs.oncomment(this.sectionStart, this.index - 2),
        (this.sequenceIndex = 0),
        (this.sectionStart = this.index + 1),
        (this.state = 1))
      : this.sequenceIndex === 0
        ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1)
        : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0)
  }
  startSpecial(t, n) {
    this.enterRCDATA(t, n), (this.state = 31)
  }
  enterRCDATA(t, n) {
    ;(this.inRCDATA = !0), (this.currentSequence = t), (this.sequenceIndex = n)
  }
  stateBeforeTagName(t) {
    t === 33
      ? ((this.state = 22), (this.sectionStart = this.index + 1))
      : t === 63
        ? ((this.state = 24), (this.sectionStart = this.index + 1))
        : _a(t)
          ? ((this.sectionStart = this.index),
            this.mode === 0
              ? (this.state = 6)
              : this.inSFCRoot
                ? (this.state = 34)
                : this.inXML
                  ? (this.state = 6)
                  : t === 116
                    ? (this.state = 30)
                    : (this.state = t === 115 ? 29 : 6))
          : t === 47
            ? (this.state = 8)
            : ((this.state = 1), this.stateText(t))
  }
  stateInTagName(t) {
    tn(t) && this.handleTagName(t)
  }
  stateInSFCRootTagName(t) {
    if (tn(t)) {
      const n = this.buffer.slice(this.sectionStart, this.index)
      n !== 'template' && this.enterRCDATA(wi('</' + n), 0), this.handleTagName(t)
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index),
      (this.sectionStart = -1),
      (this.state = 11),
      this.stateBeforeAttrName(t)
  }
  stateBeforeClosingTagName(t) {
    pt(t) ||
      (t === 62
        ? ((this.state = 1), (this.sectionStart = this.index + 1))
        : ((this.state = _a(t) ? 9 : 27), (this.sectionStart = this.index)))
  }
  stateInClosingTagName(t) {
    ;(t === 62 || pt(t)) &&
      (this.cbs.onclosetag(this.sectionStart, this.index),
      (this.sectionStart = -1),
      (this.state = 10),
      this.stateAfterClosingTagName(t))
  }
  stateAfterClosingTagName(t) {
    t === 62 && ((this.state = 1), (this.sectionStart = this.index + 1))
  }
  stateBeforeAttrName(t) {
    t === 62
      ? (this.cbs.onopentagend(this.index),
        this.inRCDATA ? (this.state = 32) : (this.state = 1),
        (this.sectionStart = this.index + 1))
      : t === 47
        ? (this.state = 7)
        : t === 60 && this.peek() === 47
          ? (this.cbs.onopentagend(this.index), (this.state = 5), (this.sectionStart = this.index))
          : pt(t) || this.handleAttrStart(t)
  }
  handleAttrStart(t) {
    t === 118 && this.peek() === 45
      ? ((this.state = 13), (this.sectionStart = this.index))
      : t === 46 || t === 58 || t === 64 || t === 35
        ? (this.cbs.ondirname(this.index, this.index + 1), (this.state = 14), (this.sectionStart = this.index + 1))
        : ((this.state = 12), (this.sectionStart = this.index))
  }
  stateInSelfClosingTag(t) {
    t === 62
      ? (this.cbs.onselfclosingtag(this.index),
        (this.state = 1),
        (this.sectionStart = this.index + 1),
        (this.inRCDATA = !1))
      : pt(t) || ((this.state = 11), this.stateBeforeAttrName(t))
  }
  stateInAttrName(t) {
    ;(t === 61 || tn(t)) && (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t))
  }
  stateInDirName(t) {
    t === 61 || tn(t)
      ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(t))
      : t === 58
        ? (this.cbs.ondirname(this.sectionStart, this.index), (this.state = 14), (this.sectionStart = this.index + 1))
        : t === 46 &&
          (this.cbs.ondirname(this.sectionStart, this.index), (this.state = 16), (this.sectionStart = this.index + 1))
  }
  stateInDirArg(t) {
    t === 61 || tn(t)
      ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(t))
      : t === 91
        ? (this.state = 15)
        : t === 46 &&
          (this.cbs.ondirarg(this.sectionStart, this.index), (this.state = 16), (this.sectionStart = this.index + 1))
  }
  stateInDynamicDirArg(t) {
    t === 93
      ? (this.state = 14)
      : (t === 61 || tn(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t))
  }
  stateInDirModifier(t) {
    t === 61 || tn(t)
      ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(t))
      : t === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), (this.sectionStart = this.index + 1))
  }
  handleAttrNameEnd(t) {
    ;(this.sectionStart = this.index),
      (this.state = 17),
      this.cbs.onattribnameend(this.index),
      this.stateAfterAttrName(t)
  }
  stateAfterAttrName(t) {
    t === 61
      ? (this.state = 18)
      : t === 47 || t === 62
        ? (this.cbs.onattribend(0, this.sectionStart),
          (this.sectionStart = -1),
          (this.state = 11),
          this.stateBeforeAttrName(t))
        : pt(t) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(t))
  }
  stateBeforeAttrValue(t) {
    t === 34
      ? ((this.state = 19), (this.sectionStart = this.index + 1))
      : t === 39
        ? ((this.state = 20), (this.sectionStart = this.index + 1))
        : pt(t) || ((this.sectionStart = this.index), (this.state = 21), this.stateInAttrValueNoQuotes(t))
  }
  handleInAttrValue(t, n) {
    ;(t === n || this.fastForwardTo(n)) &&
      (this.cbs.onattribdata(this.sectionStart, this.index),
      (this.sectionStart = -1),
      this.cbs.onattribend(n === 34 ? 3 : 2, this.index + 1),
      (this.state = 11))
  }
  stateInAttrValueDoubleQuotes(t) {
    this.handleInAttrValue(t, 34)
  }
  stateInAttrValueSingleQuotes(t) {
    this.handleInAttrValue(t, 39)
  }
  stateInAttrValueNoQuotes(t) {
    pt(t) || t === 62
      ? (this.cbs.onattribdata(this.sectionStart, this.index),
        (this.sectionStart = -1),
        this.cbs.onattribend(1, this.index),
        (this.state = 11),
        this.stateBeforeAttrName(t))
      : (t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(18, this.index)
  }
  stateBeforeDeclaration(t) {
    t === 91 ? ((this.state = 26), (this.sequenceIndex = 0)) : (this.state = t === 45 ? 25 : 23)
  }
  stateInDeclaration(t) {
    ;(t === 62 || this.fastForwardTo(62)) && ((this.state = 1), (this.sectionStart = this.index + 1))
  }
  stateInProcessingInstruction(t) {
    ;(t === 62 || this.fastForwardTo(62)) &&
      (this.cbs.onprocessinginstruction(this.sectionStart, this.index),
      (this.state = 1),
      (this.sectionStart = this.index + 1))
  }
  stateBeforeComment(t) {
    t === 45
      ? ((this.state = 28),
        (this.currentSequence = Ue.CommentEnd),
        (this.sequenceIndex = 2),
        (this.sectionStart = this.index + 1))
      : (this.state = 23)
  }
  stateInSpecialComment(t) {
    ;(t === 62 || this.fastForwardTo(62)) &&
      (this.cbs.oncomment(this.sectionStart, this.index), (this.state = 1), (this.sectionStart = this.index + 1))
  }
  stateBeforeSpecialS(t) {
    t === Ue.ScriptEnd[3]
      ? this.startSpecial(Ue.ScriptEnd, 4)
      : t === Ue.StyleEnd[3]
        ? this.startSpecial(Ue.StyleEnd, 4)
        : ((this.state = 6), this.stateInTagName(t))
  }
  stateBeforeSpecialT(t) {
    t === Ue.TitleEnd[3]
      ? this.startSpecial(Ue.TitleEnd, 4)
      : t === Ue.TextareaEnd[3]
        ? this.startSpecial(Ue.TextareaEnd, 4)
        : ((this.state = 6), this.stateInTagName(t))
  }
  startEntity() {}
  stateInEntity() {}
  parse(t) {
    for (this.buffer = t; this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index)
      switch ((n === 10 && this.newlines.push(this.index), this.state)) {
        case 1: {
          this.stateText(n)
          break
        }
        case 2: {
          this.stateInterpolationOpen(n)
          break
        }
        case 3: {
          this.stateInterpolation(n)
          break
        }
        case 4: {
          this.stateInterpolationClose(n)
          break
        }
        case 31: {
          this.stateSpecialStartSequence(n)
          break
        }
        case 32: {
          this.stateInRCDATA(n)
          break
        }
        case 26: {
          this.stateCDATASequence(n)
          break
        }
        case 19: {
          this.stateInAttrValueDoubleQuotes(n)
          break
        }
        case 12: {
          this.stateInAttrName(n)
          break
        }
        case 13: {
          this.stateInDirName(n)
          break
        }
        case 14: {
          this.stateInDirArg(n)
          break
        }
        case 15: {
          this.stateInDynamicDirArg(n)
          break
        }
        case 16: {
          this.stateInDirModifier(n)
          break
        }
        case 28: {
          this.stateInCommentLike(n)
          break
        }
        case 27: {
          this.stateInSpecialComment(n)
          break
        }
        case 11: {
          this.stateBeforeAttrName(n)
          break
        }
        case 6: {
          this.stateInTagName(n)
          break
        }
        case 34: {
          this.stateInSFCRootTagName(n)
          break
        }
        case 9: {
          this.stateInClosingTagName(n)
          break
        }
        case 5: {
          this.stateBeforeTagName(n)
          break
        }
        case 17: {
          this.stateAfterAttrName(n)
          break
        }
        case 20: {
          this.stateInAttrValueSingleQuotes(n)
          break
        }
        case 18: {
          this.stateBeforeAttrValue(n)
          break
        }
        case 8: {
          this.stateBeforeClosingTagName(n)
          break
        }
        case 10: {
          this.stateAfterClosingTagName(n)
          break
        }
        case 29: {
          this.stateBeforeSpecialS(n)
          break
        }
        case 30: {
          this.stateBeforeSpecialT(n)
          break
        }
        case 21: {
          this.stateInAttrValueNoQuotes(n)
          break
        }
        case 7: {
          this.stateInSelfClosingTag(n)
          break
        }
        case 23: {
          this.stateInDeclaration(n)
          break
        }
        case 22: {
          this.stateBeforeDeclaration(n)
          break
        }
        case 25: {
          this.stateBeforeComment(n)
          break
        }
        case 24: {
          this.stateInProcessingInstruction(n)
          break
        }
        case 33: {
          this.stateInEntity()
          break
        }
      }
      this.index++
    }
    this.cleanup(), this.finish()
  }
  cleanup() {
    this.sectionStart !== this.index &&
      (this.state === 1 || (this.state === 32 && this.sequenceIndex === 0)
        ? (this.cbs.ontext(this.sectionStart, this.index), (this.sectionStart = this.index))
        : (this.state === 19 || this.state === 20 || this.state === 21) &&
          (this.cbs.onattribdata(this.sectionStart, this.index), (this.sectionStart = this.index)))
  }
  finish() {
    this.handleTrailingData(), this.cbs.onend()
  }
  handleTrailingData() {
    const t = this.buffer.length
    this.sectionStart >= t ||
      (this.state === 28
        ? this.currentSequence === Ue.CdataEnd
          ? this.cbs.oncdata(this.sectionStart, t)
          : this.cbs.oncomment(this.sectionStart, t)
        : this.state === 6 ||
          this.state === 11 ||
          this.state === 18 ||
          this.state === 17 ||
          this.state === 12 ||
          this.state === 13 ||
          this.state === 14 ||
          this.state === 15 ||
          this.state === 16 ||
          this.state === 20 ||
          this.state === 19 ||
          this.state === 21 ||
          this.state === 9 ||
          this.cbs.ontext(this.sectionStart, t))
  }
  emitCodePoint(t, n) {}
}
function Ea(e, { compatConfig: t }) {
  const n = t && t[e]
  return e === 'MODE' ? n || 3 : n
}
function Dn(e, t) {
  const n = Ea('MODE', t),
    s = Ea(e, t)
  return n === 3 ? s === !0 : s !== !1
}
function tr(e, t, n, ...s) {
  return Dn(e, t)
}
function uc(e) {
  throw e
}
function Mh(e) {}
function Oe(e, t, n, s) {
  const r = `https://vuejs.org/error-reference/#compiler-${e}`,
    i = new SyntaxError(String(r))
  return (i.code = e), (i.loc = t), i
}
const at = e => e.type === 4 && e.isStatic
function kh(e) {
  switch (e) {
    case 'Teleport':
    case 'teleport':
      return Ls
    case 'Suspense':
    case 'suspense':
      return zl
    case 'KeepAlive':
    case 'keep-alive':
      return Si
    case 'BaseTransition':
    case 'base-transition':
      return Ah
  }
}
const _v = /^\d|[^\$\w\xA0-\uFFFF]/,
  fc = e => !_v.test(e),
  Ev = /[A-Za-z_$\xA0-\uFFFF]/,
  wv = /[\.\?\w$\xA0-\uFFFF]/,
  Tv = /\s+[.[]\s*|\s*[.[]\s+/g,
  Fh = e => (e.type === 4 ? e.content : e.loc.source),
  Cv = e => {
    const t = Fh(e)
      .trim()
      .replace(Tv, l => l.trim())
    let n = 0,
      s = [],
      r = 0,
      i = 0,
      o = null
    for (let l = 0; l < t.length; l++) {
      const c = t.charAt(l)
      switch (n) {
        case 0:
          if (c === '[') s.push(n), (n = 1), r++
          else if (c === '(') s.push(n), (n = 2), i++
          else if (!(l === 0 ? Ev : wv).test(c)) return !1
          break
        case 1:
          c === "'" || c === '"' || c === '`'
            ? (s.push(n), (n = 3), (o = c))
            : c === '['
              ? r++
              : c === ']' && (--r || (n = s.pop()))
          break
        case 2:
          if (c === "'" || c === '"' || c === '`') s.push(n), (n = 3), (o = c)
          else if (c === '(') i++
          else if (c === ')') {
            if (l === t.length - 1) return !1
            --i || (n = s.pop())
          }
          break
        case 3:
          c === o && ((n = s.pop()), (o = null))
          break
      }
    }
    return !r && !i
  },
  Lh = Cv,
  Av = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,
  Ov = e => Av.test(Fh(e)),
  xv = Ov
function Et(e, t, n = !1) {
  for (let s = 0; s < e.props.length; s++) {
    const r = e.props[s]
    if (r.type === 7 && (n || r.exp) && (ne(t) ? r.name === t : t.test(r.name))) return r
  }
}
function Xi(e, t, n = !1, s = !1) {
  for (let r = 0; r < e.props.length; r++) {
    const i = e.props[r]
    if (i.type === 6) {
      if (n) continue
      if (i.name === t && (i.value || s)) return i
    } else if (i.name === 'bind' && (i.exp || s) && Rn(i.arg, t)) return i
  }
}
function Rn(e, t) {
  return !!(e && at(e) && e.content === t)
}
function Nv(e) {
  return e.props.some(t => t.type === 7 && t.name === 'bind' && (!t.arg || t.arg.type !== 4 || !t.arg.isStatic))
}
function vo(e) {
  return e.type === 5 || e.type === 2
}
function Rv(e) {
  return e.type === 7 && e.name === 'slot'
}
function Ti(e) {
  return e.type === 1 && e.tagType === 3
}
function Ci(e) {
  return e.type === 1 && e.tagType === 2
}
const Iv = new Set([Qs, vr])
function Dh(e, t = []) {
  if (e && !ne(e) && e.type === 14) {
    const n = e.callee
    if (!ne(n) && Iv.has(n)) return Dh(e.arguments[0], t.concat(e))
  }
  return [e, t]
}
function Ai(e, t, n) {
  let s,
    r = e.type === 13 ? e.props : e.arguments[2],
    i = [],
    o
  if (r && !ne(r) && r.type === 14) {
    const l = Dh(r)
    ;(r = l[0]), (i = l[1]), (o = i[i.length - 1])
  }
  if (r == null || ne(r)) s = wt([t])
  else if (r.type === 14) {
    const l = r.arguments[0]
    !ne(l) && l.type === 15
      ? wa(t, l) || l.properties.unshift(t)
      : r.callee === oc
        ? (s = Me(n.helper(_i), [wt([t]), r]))
        : r.arguments.unshift(wt([t])),
      !s && (s = r)
  } else
    r.type === 15
      ? (wa(t, r) || r.properties.unshift(t), (s = r))
      : ((s = Me(n.helper(_i), [wt([t]), r])), o && o.callee === vr && (o = i[i.length - 2]))
  e.type === 13 ? (o ? (o.arguments[0] = s) : (e.props = s)) : o ? (o.arguments[0] = s) : (e.arguments[2] = s)
}
function wa(e, t) {
  let n = !1
  if (e.key.type === 4) {
    const s = e.key.content
    n = t.properties.some(r => r.key.type === 4 && r.key.content === s)
  }
  return n
}
function nr(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, s) => (n === '-' ? '_' : e.charCodeAt(s).toString()))}`
}
function Pv(e) {
  return e.type === 14 && e.callee === cc ? e.arguments[1].returns : e
}
const Mv = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/,
  Vh = {
    parseMode: 'base',
    ns: 0,
    delimiters: ['{{', '}}'],
    getNamespace: () => 0,
    isVoidTag: Ns,
    isPreTag: Ns,
    isIgnoreNewlineTag: Ns,
    isCustomElement: Ns,
    onError: uc,
    onWarn: Mh,
    comments: !1,
    prefixIdentifiers: !1,
  }
let pe = Vh,
  sr = null,
  Yt = '',
  We = null,
  ue = null,
  rt = '',
  Wt = -1,
  xn = -1,
  hc = 0,
  an = !1,
  Zo = null
const Ae = [],
  Ne = new Sv(Ae, {
    onerr: Ht,
    ontext(e, t) {
      $r(He(e, t), e, t)
    },
    ontextentity(e, t, n) {
      $r(e, t, n)
    },
    oninterpolation(e, t) {
      if (an) return $r(He(e, t), e, t)
      let n = e + Ne.delimiterOpen.length,
        s = t - Ne.delimiterClose.length
      for (; pt(Yt.charCodeAt(n)); ) n++
      for (; pt(Yt.charCodeAt(s - 1)); ) s--
      let r = He(n, s)
      r.includes('&') && (r = pe.decodeEntities(r, !1)), Qo({ type: 5, content: Xr(r, !1, Ie(n, s)), loc: Ie(e, t) })
    },
    onopentagname(e, t) {
      const n = He(e, t)
      We = {
        type: 1,
        tag: n,
        ns: pe.getNamespace(n, Ae[0], pe.ns),
        tagType: 0,
        props: [],
        children: [],
        loc: Ie(e - 1, t),
        codegenNode: void 0,
      }
    },
    onopentagend(e) {
      Ca(e)
    },
    onclosetag(e, t) {
      const n = He(e, t)
      if (!pe.isVoidTag(n)) {
        let s = !1
        for (let r = 0; r < Ae.length; r++)
          if (Ae[r].tag.toLowerCase() === n.toLowerCase()) {
            ;(s = !0), r > 0 && Ht(24, Ae[0].loc.start.offset)
            for (let o = 0; o <= r; o++) {
              const l = Ae.shift()
              Jr(l, t, o < r)
            }
            break
          }
        s || Ht(23, $h(e, 60))
      }
    },
    onselfclosingtag(e) {
      const t = We.tag
      ;(We.isSelfClosing = !0), Ca(e), Ae[0] && Ae[0].tag === t && Jr(Ae.shift(), e)
    },
    onattribname(e, t) {
      ue = { type: 6, name: He(e, t), nameLoc: Ie(e, t), value: void 0, loc: Ie(e) }
    },
    ondirname(e, t) {
      const n = He(e, t),
        s = n === '.' || n === ':' ? 'bind' : n === '@' ? 'on' : n === '#' ? 'slot' : n.slice(2)
      if ((!an && s === '' && Ht(26, e), an || s === ''))
        ue = { type: 6, name: n, nameLoc: Ie(e, t), value: void 0, loc: Ie(e) }
      else if (
        ((ue = {
          type: 7,
          name: s,
          rawName: n,
          exp: void 0,
          arg: void 0,
          modifiers: n === '.' ? [se('prop')] : [],
          loc: Ie(e),
        }),
        s === 'pre')
      ) {
        ;(an = Ne.inVPre = !0), (Zo = We)
        const r = We.props
        for (let i = 0; i < r.length; i++) r[i].type === 7 && (r[i] = Uv(r[i]))
      }
    },
    ondirarg(e, t) {
      if (e === t) return
      const n = He(e, t)
      if (an) (ue.name += n), In(ue.nameLoc, t)
      else {
        const s = n[0] !== '['
        ue.arg = Xr(s ? n : n.slice(1, -1), s, Ie(e, t), s ? 3 : 0)
      }
    },
    ondirmodifier(e, t) {
      const n = He(e, t)
      if (an) (ue.name += '.' + n), In(ue.nameLoc, t)
      else if (ue.name === 'slot') {
        const s = ue.arg
        s && ((s.content += '.' + n), In(s.loc, t))
      } else {
        const s = se(n, !0, Ie(e, t))
        ue.modifiers.push(s)
      }
    },
    onattribdata(e, t) {
      ;(rt += He(e, t)), Wt < 0 && (Wt = e), (xn = t)
    },
    onattribentity(e, t, n) {
      ;(rt += e), Wt < 0 && (Wt = t), (xn = n)
    },
    onattribnameend(e) {
      const t = ue.loc.start.offset,
        n = He(t, e)
      ue.type === 7 && (ue.rawName = n), We.props.some(s => (s.type === 7 ? s.rawName : s.name) === n) && Ht(2, t)
    },
    onattribend(e, t) {
      if (We && ue) {
        if ((In(ue.loc, t), e !== 0))
          if ((rt.includes('&') && (rt = pe.decodeEntities(rt, !0)), ue.type === 6))
            ue.name === 'class' && (rt = Hh(rt).trim()),
              e === 1 && !rt && Ht(13, t),
              (ue.value = { type: 2, content: rt, loc: e === 1 ? Ie(Wt, xn) : Ie(Wt - 1, xn + 1) }),
              Ne.inSFCRoot &&
                We.tag === 'template' &&
                ue.name === 'lang' &&
                rt &&
                rt !== 'html' &&
                Ne.enterRCDATA(wi('</template'), 0)
          else {
            let n = 0
            ;(ue.exp = Xr(rt, !1, Ie(Wt, xn), 0, n)), ue.name === 'for' && (ue.forParseResult = Fv(ue.exp))
            let s = -1
            ue.name === 'bind' &&
              (s = ue.modifiers.findIndex(r => r.content === 'sync')) > -1 &&
              tr('COMPILER_V_BIND_SYNC', pe, ue.loc, ue.rawName) &&
              ((ue.name = 'model'), ue.modifiers.splice(s, 1))
          }
        ;(ue.type !== 7 || ue.name !== 'pre') && We.props.push(ue)
      }
      ;(rt = ''), (Wt = xn = -1)
    },
    oncomment(e, t) {
      pe.comments && Qo({ type: 3, content: He(e, t), loc: Ie(e - 4, t + 3) })
    },
    onend() {
      const e = Yt.length
      for (let t = 0; t < Ae.length; t++) Jr(Ae[t], e - 1), Ht(24, Ae[t].loc.start.offset)
    },
    oncdata(e, t) {
      Ae[0].ns !== 0 ? $r(He(e, t), e, t) : Ht(1, e - 9)
    },
    onprocessinginstruction(e) {
      ;(Ae[0] ? Ae[0].ns : pe.ns) === 0 && Ht(21, e - 1)
    },
  }),
  Ta = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
  kv = /^\(|\)$/g
function Fv(e) {
  const t = e.loc,
    n = e.content,
    s = n.match(Mv)
  if (!s) return
  const [, r, i] = s,
    o = (a, h, d = !1) => {
      const m = t.start.offset + h,
        y = m + a.length
      return Xr(a, !1, Ie(m, y), 0, d ? 1 : 0)
    },
    l = { source: o(i.trim(), n.indexOf(i, r.length)), value: void 0, key: void 0, index: void 0, finalized: !1 }
  let c = r.trim().replace(kv, '').trim()
  const f = r.indexOf(c),
    u = c.match(Ta)
  if (u) {
    c = c.replace(Ta, '').trim()
    const a = u[1].trim()
    let h
    if ((a && ((h = n.indexOf(a, f + c.length)), (l.key = o(a, h, !0))), u[2])) {
      const d = u[2].trim()
      d && (l.index = o(d, n.indexOf(d, l.key ? h + a.length : f + c.length), !0))
    }
  }
  return c && (l.value = o(c, f, !0)), l
}
function He(e, t) {
  return Yt.slice(e, t)
}
function Ca(e) {
  Ne.inSFCRoot && (We.innerLoc = Ie(e + 1, e + 1)), Qo(We)
  const { tag: t, ns: n } = We
  n === 0 && pe.isPreTag(t) && hc++,
    pe.isVoidTag(t) ? Jr(We, e) : (Ae.unshift(We), (n === 1 || n === 2) && (Ne.inXML = !0)),
    (We = null)
}
function $r(e, t, n) {
  {
    const i = Ae[0] && Ae[0].tag
    i !== 'script' && i !== 'style' && e.includes('&') && (e = pe.decodeEntities(e, !1))
  }
  const s = Ae[0] || sr,
    r = s.children[s.children.length - 1]
  r && r.type === 2 ? ((r.content += e), In(r.loc, n)) : s.children.push({ type: 2, content: e, loc: Ie(t, n) })
}
function Jr(e, t, n = !1) {
  n ? In(e.loc, $h(t, 60)) : In(e.loc, Lv(t, 62) + 1),
    Ne.inSFCRoot &&
      (e.children.length
        ? (e.innerLoc.end = le({}, e.children[e.children.length - 1].loc.end))
        : (e.innerLoc.end = le({}, e.innerLoc.start)),
      (e.innerLoc.source = He(e.innerLoc.start.offset, e.innerLoc.end.offset)))
  const { tag: s, ns: r, children: i } = e
  if (
    (an || (s === 'slot' ? (e.tagType = 2) : Aa(e) ? (e.tagType = 3) : Vv(e) && (e.tagType = 1)),
    Ne.inRCDATA || (e.children = Bh(i)),
    r === 0 && pe.isIgnoreNewlineTag(s))
  ) {
    const o = i[0]
    o && o.type === 2 && (o.content = o.content.replace(/^\r?\n/, ''))
  }
  r === 0 && pe.isPreTag(s) && hc--,
    Zo === e && ((an = Ne.inVPre = !1), (Zo = null)),
    Ne.inXML && (Ae[0] ? Ae[0].ns : pe.ns) === 0 && (Ne.inXML = !1)
  {
    const o = e.props
    if (!Ne.inSFCRoot && Dn('COMPILER_NATIVE_TEMPLATE', pe) && e.tag === 'template' && !Aa(e)) {
      const c = Ae[0] || sr,
        f = c.children.indexOf(e)
      c.children.splice(f, 1, ...e.children)
    }
    const l = o.find(c => c.type === 6 && c.name === 'inline-template')
    l &&
      tr('COMPILER_INLINE_TEMPLATE', pe, l.loc) &&
      e.children.length &&
      (l.value = {
        type: 2,
        content: He(e.children[0].loc.start.offset, e.children[e.children.length - 1].loc.end.offset),
        loc: l.loc,
      })
  }
}
function Lv(e, t) {
  let n = e
  for (; Yt.charCodeAt(n) !== t && n < Yt.length - 1; ) n++
  return n
}
function $h(e, t) {
  let n = e
  for (; Yt.charCodeAt(n) !== t && n >= 0; ) n--
  return n
}
const Dv = new Set(['if', 'else', 'else-if', 'for', 'slot'])
function Aa({ tag: e, props: t }) {
  if (e === 'template') {
    for (let n = 0; n < t.length; n++) if (t[n].type === 7 && Dv.has(t[n].name)) return !0
  }
  return !1
}
function Vv({ tag: e, props: t }) {
  if (pe.isCustomElement(e)) return !1
  if (
    e === 'component' ||
    $v(e.charCodeAt(0)) ||
    kh(e) ||
    (pe.isBuiltInComponent && pe.isBuiltInComponent(e)) ||
    (pe.isNativeTag && !pe.isNativeTag(e))
  )
    return !0
  for (let n = 0; n < t.length; n++) {
    const s = t[n]
    if (s.type === 6) {
      if (s.name === 'is' && s.value) {
        if (s.value.content.startsWith('vue:')) return !0
        if (tr('COMPILER_IS_ON_ELEMENT', pe, s.loc)) return !0
      }
    } else if (s.name === 'bind' && Rn(s.arg, 'is') && tr('COMPILER_IS_ON_ELEMENT', pe, s.loc)) return !0
  }
  return !1
}
function $v(e) {
  return e > 64 && e < 91
}
const Bv = /\r\n/g
function Bh(e, t) {
  const n = pe.whitespace !== 'preserve'
  let s = !1
  for (let r = 0; r < e.length; r++) {
    const i = e[r]
    if (i.type === 2)
      if (hc)
        i.content = i.content.replace(
          Bv,
          `
`,
        )
      else if (Hv(i.content)) {
        const o = e[r - 1] && e[r - 1].type,
          l = e[r + 1] && e[r + 1].type
        !o || !l || (n && ((o === 3 && (l === 3 || l === 1)) || (o === 1 && (l === 3 || (l === 1 && jv(i.content))))))
          ? ((s = !0), (e[r] = null))
          : (i.content = ' ')
      } else n && (i.content = Hh(i.content))
  }
  return s ? e.filter(Boolean) : e
}
function Hv(e) {
  for (let t = 0; t < e.length; t++) if (!pt(e.charCodeAt(t))) return !1
  return !0
}
function jv(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t)
    if (n === 10 || n === 13) return !0
  }
  return !1
}
function Hh(e) {
  let t = '',
    n = !1
  for (let s = 0; s < e.length; s++) pt(e.charCodeAt(s)) ? n || ((t += ' '), (n = !0)) : ((t += e[s]), (n = !1))
  return t
}
function Qo(e) {
  ;(Ae[0] || sr).children.push(e)
}
function Ie(e, t) {
  return { start: Ne.getPos(e), end: t == null ? t : Ne.getPos(t), source: t == null ? t : He(e, t) }
}
function In(e, t) {
  ;(e.end = Ne.getPos(t)), (e.source = He(e.start.offset, t))
}
function Uv(e) {
  const t = {
    type: 6,
    name: e.rawName,
    nameLoc: Ie(e.loc.start.offset, e.loc.start.offset + e.rawName.length),
    value: void 0,
    loc: e.loc,
  }
  if (e.exp) {
    const n = e.exp.loc
    n.end.offset < e.loc.end.offset && (n.start.offset--, n.start.column--, n.end.offset++, n.end.column++),
      (t.value = { type: 2, content: e.exp.content, loc: n })
  }
  return t
}
function Xr(e, t = !1, n, s = 0, r = 0) {
  return se(e, t, n, s)
}
function Ht(e, t, n) {
  pe.onError(Oe(e, Ie(t, t)))
}
function Wv() {
  Ne.reset(), (We = null), (ue = null), (rt = ''), (Wt = -1), (xn = -1), (Ae.length = 0)
}
function Kv(e, t) {
  if ((Wv(), (Yt = e), (pe = le({}, Vh)), t)) {
    let r
    for (r in t) t[r] != null && (pe[r] = t[r])
  }
  ;(Ne.mode = pe.parseMode === 'html' ? 1 : pe.parseMode === 'sfc' ? 2 : 0), (Ne.inXML = pe.ns === 1 || pe.ns === 2)
  const n = t && t.delimiters
  n && ((Ne.delimiterOpen = wi(n[0])), (Ne.delimiterClose = wi(n[1])))
  const s = (sr = yv([], e))
  return Ne.parse(Yt), (s.loc = Ie(0, e.length)), (s.children = Bh(s.children)), (sr = null), s
}
function qv(e, t) {
  Zr(e, void 0, t, jh(e, e.children[0]))
}
function jh(e, t) {
  const { children: n } = e
  return n.length === 1 && t.type === 1 && !Ci(t)
}
function Zr(e, t, n, s = !1, r = !1) {
  const { children: i } = e,
    o = []
  for (let u = 0; u < i.length; u++) {
    const a = i[u]
    if (a.type === 1 && a.tagType === 0) {
      const h = s ? 0 : mt(a, n)
      if (h > 0) {
        if (h >= 2) {
          ;(a.codegenNode.patchFlag = -1), o.push(a)
          continue
        }
      } else {
        const d = a.codegenNode
        if (d.type === 13) {
          const m = d.patchFlag
          if ((m === void 0 || m === 512 || m === 1) && Wh(a, n) >= 2) {
            const y = Kh(a)
            y && (d.props = n.hoist(y))
          }
          d.dynamicProps && (d.dynamicProps = n.hoist(d.dynamicProps))
        }
      }
    } else if (a.type === 12 && (s ? 0 : mt(a, n)) >= 2) {
      o.push(a)
      continue
    }
    if (a.type === 1) {
      const h = a.tagType === 1
      h && n.scopes.vSlot++, Zr(a, e, n, !1, r), h && n.scopes.vSlot--
    } else if (a.type === 11) Zr(a, e, n, a.children.length === 1, !0)
    else if (a.type === 9)
      for (let h = 0; h < a.branches.length; h++) Zr(a.branches[h], e, n, a.branches[h].children.length === 1, r)
  }
  let l = !1
  if (o.length === i.length && e.type === 1) {
    if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && j(e.codegenNode.children))
      (e.codegenNode.children = c(Ln(e.codegenNode.children))), (l = !0)
    else if (
      e.tagType === 1 &&
      e.codegenNode &&
      e.codegenNode.type === 13 &&
      e.codegenNode.children &&
      !j(e.codegenNode.children) &&
      e.codegenNode.children.type === 15
    ) {
      const u = f(e.codegenNode, 'default')
      u && ((u.returns = c(Ln(u.returns))), (l = !0))
    } else if (
      e.tagType === 3 &&
      t &&
      t.type === 1 &&
      t.tagType === 1 &&
      t.codegenNode &&
      t.codegenNode.type === 13 &&
      t.codegenNode.children &&
      !j(t.codegenNode.children) &&
      t.codegenNode.children.type === 15
    ) {
      const u = Et(e, 'slot', !0),
        a = u && u.arg && f(t.codegenNode, u.arg)
      a && ((a.returns = c(Ln(a.returns))), (l = !0))
    }
  }
  if (!l) for (const u of o) u.codegenNode = n.cache(u.codegenNode)
  function c(u) {
    const a = n.cache(u)
    return r && n.hmr && (a.needArraySpread = !0), a
  }
  function f(u, a) {
    if (u.children && !j(u.children) && u.children.type === 15) {
      const h = u.children.properties.find(d => d.key === a || d.key.content === a)
      return h && h.value
    }
  }
  o.length && n.transformHoist && n.transformHoist(i, n, e)
}
function mt(e, t) {
  const { constantCache: n } = t
  switch (e.type) {
    case 1:
      if (e.tagType !== 0) return 0
      const s = n.get(e)
      if (s !== void 0) return s
      const r = e.codegenNode
      if (r.type !== 13 || (r.isBlock && e.tag !== 'svg' && e.tag !== 'foreignObject' && e.tag !== 'math')) return 0
      if (r.patchFlag === void 0) {
        let o = 3
        const l = Wh(e, t)
        if (l === 0) return n.set(e, 0), 0
        l < o && (o = l)
        for (let c = 0; c < e.children.length; c++) {
          const f = mt(e.children[c], t)
          if (f === 0) return n.set(e, 0), 0
          f < o && (o = f)
        }
        if (o > 1)
          for (let c = 0; c < e.props.length; c++) {
            const f = e.props[c]
            if (f.type === 7 && f.name === 'bind' && f.exp) {
              const u = mt(f.exp, t)
              if (u === 0) return n.set(e, 0), 0
              u < o && (o = u)
            }
          }
        if (r.isBlock) {
          for (let c = 0; c < e.props.length; c++) if (e.props[c].type === 7) return n.set(e, 0), 0
          t.removeHelper(Bn),
            t.removeHelper(vs(t.inSSR, r.isComponent)),
            (r.isBlock = !1),
            t.helper(ys(t.inSSR, r.isComponent))
        }
        return n.set(e, o), o
      } else return n.set(e, 0), 0
    case 2:
    case 3:
      return 3
    case 9:
    case 11:
    case 10:
      return 0
    case 5:
    case 12:
      return mt(e.content, t)
    case 4:
      return e.constType
    case 8:
      let i = 3
      for (let o = 0; o < e.children.length; o++) {
        const l = e.children[o]
        if (ne(l) || yt(l)) continue
        const c = mt(l, t)
        if (c === 0) return 0
        c < i && (i = c)
      }
      return i
    case 20:
      return 2
    default:
      return 0
  }
}
const Gv = new Set([rc, ic, Qs, vr])
function Uh(e, t) {
  if (e.type === 14 && !ne(e.callee) && Gv.has(e.callee)) {
    const n = e.arguments[0]
    if (n.type === 4) return mt(n, t)
    if (n.type === 14) return Uh(n, t)
  }
  return 0
}
function Wh(e, t) {
  let n = 3
  const s = Kh(e)
  if (s && s.type === 15) {
    const { properties: r } = s
    for (let i = 0; i < r.length; i++) {
      const { key: o, value: l } = r[i],
        c = mt(o, t)
      if (c === 0) return c
      c < n && (n = c)
      let f
      if ((l.type === 4 ? (f = mt(l, t)) : l.type === 14 ? (f = Uh(l, t)) : (f = 0), f === 0)) return f
      f < n && (n = f)
    }
  }
  return n
}
function Kh(e) {
  const t = e.codegenNode
  if (t.type === 13) return t.props
}
function zv(
  e,
  {
    filename: t = '',
    prefixIdentifiers: n = !1,
    hoistStatic: s = !1,
    hmr: r = !1,
    cacheHandlers: i = !1,
    nodeTransforms: o = [],
    directiveTransforms: l = {},
    transformHoist: c = null,
    isBuiltInComponent: f = ze,
    isCustomElement: u = ze,
    expressionPlugins: a = [],
    scopeId: h = null,
    slotted: d = !0,
    ssr: m = !1,
    inSSR: y = !1,
    ssrCssVars: w = '',
    bindingMetadata: S = oe,
    inline: _ = !1,
    isTS: p = !1,
    onError: v = uc,
    onWarn: E = Mh,
    compatConfig: O,
  },
) {
  const R = t.replace(/\?.*$/, '').match(/([^/\\]+)\.\w+$/),
    x = {
      filename: t,
      selfName: R && Wn(we(R[1])),
      prefixIdentifiers: n,
      hoistStatic: s,
      hmr: r,
      cacheHandlers: i,
      nodeTransforms: o,
      directiveTransforms: l,
      transformHoist: c,
      isBuiltInComponent: f,
      isCustomElement: u,
      expressionPlugins: a,
      scopeId: h,
      slotted: d,
      ssr: m,
      inSSR: y,
      ssrCssVars: w,
      bindingMetadata: S,
      inline: _,
      isTS: p,
      onError: v,
      onWarn: E,
      compatConfig: O,
      root: e,
      helpers: new Map(),
      components: new Set(),
      directives: new Set(),
      hoists: [],
      imports: [],
      cached: [],
      constantCache: new WeakMap(),
      temps: 0,
      identifiers: Object.create(null),
      scopes: { vFor: 0, vSlot: 0, vPre: 0, vOnce: 0 },
      parent: null,
      grandParent: null,
      currentNode: e,
      childIndex: 0,
      inVOnce: !1,
      helper(C) {
        const T = x.helpers.get(C) || 0
        return x.helpers.set(C, T + 1), C
      },
      removeHelper(C) {
        const T = x.helpers.get(C)
        if (T) {
          const I = T - 1
          I ? x.helpers.set(C, I) : x.helpers.delete(C)
        }
      },
      helperString(C) {
        return `_${ms[x.helper(C)]}`
      },
      replaceNode(C) {
        x.parent.children[x.childIndex] = x.currentNode = C
      },
      removeNode(C) {
        const T = x.parent.children,
          I = C ? T.indexOf(C) : x.currentNode ? x.childIndex : -1
        !C || C === x.currentNode
          ? ((x.currentNode = null), x.onNodeRemoved())
          : x.childIndex > I && (x.childIndex--, x.onNodeRemoved()),
          x.parent.children.splice(I, 1)
      },
      onNodeRemoved: ze,
      addIdentifiers(C) {},
      removeIdentifiers(C) {},
      hoist(C) {
        ne(C) && (C = se(C)), x.hoists.push(C)
        const T = se(`_hoisted_${x.hoists.length}`, !1, C.loc, 2)
        return (T.hoisted = C), T
      },
      cache(C, T = !1) {
        const I = vv(x.cached.length, C, T)
        return x.cached.push(I), I
      },
    }
  return (x.filters = new Set()), x
}
function Yv(e, t) {
  const n = zv(e, t)
  Zi(e, n),
    t.hoistStatic && qv(e, n),
    t.ssr || Jv(e, n),
    (e.helpers = new Set([...n.helpers.keys()])),
    (e.components = [...n.components]),
    (e.directives = [...n.directives]),
    (e.imports = n.imports),
    (e.hoists = n.hoists),
    (e.temps = n.temps),
    (e.cached = n.cached),
    (e.transformed = !0),
    (e.filters = [...n.filters])
}
function Jv(e, t) {
  const { helper: n } = t,
    { children: s } = e
  if (s.length === 1) {
    const r = s[0]
    if (jh(e, r) && r.codegenNode) {
      const i = r.codegenNode
      i.type === 13 && ac(i, t), (e.codegenNode = i)
    } else e.codegenNode = r
  } else if (s.length > 1) {
    let r = 64
    e.codegenNode = er(t, n(Zs), void 0, e.children, r, void 0, void 0, !0, void 0, !1)
  }
}
function Xv(e, t) {
  let n = 0
  const s = () => {
    n--
  }
  for (; n < e.children.length; n++) {
    const r = e.children[n]
    ne(r) || ((t.grandParent = t.parent), (t.parent = e), (t.childIndex = n), (t.onNodeRemoved = s), Zi(r, t))
  }
}
function Zi(e, t) {
  t.currentNode = e
  const { nodeTransforms: n } = t,
    s = []
  for (let i = 0; i < n.length; i++) {
    const o = n[i](e, t)
    if ((o && (j(o) ? s.push(...o) : s.push(o)), t.currentNode)) e = t.currentNode
    else return
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(yr)
      break
    case 5:
      t.ssr || t.helper(Ji)
      break
    case 9:
      for (let i = 0; i < e.branches.length; i++) Zi(e.branches[i], t)
      break
    case 10:
    case 11:
    case 1:
    case 0:
      Xv(e, t)
      break
  }
  t.currentNode = e
  let r = s.length
  for (; r--; ) s[r]()
}
function qh(e, t) {
  const n = ne(e) ? s => s === e : s => e.test(s)
  return (s, r) => {
    if (s.type === 1) {
      const { props: i } = s
      if (s.tagType === 3 && i.some(Rv)) return
      const o = []
      for (let l = 0; l < i.length; l++) {
        const c = i[l]
        if (c.type === 7 && n(c.name)) {
          i.splice(l, 1), l--
          const f = t(s, c, r)
          f && o.push(f)
        }
      }
      return o
    }
  }
}
const Qi = '/*@__PURE__*/',
  Gh = e => `${ms[e]}: _${ms[e]}`
function Zv(
  e,
  {
    mode: t = 'function',
    prefixIdentifiers: n = t === 'module',
    sourceMap: s = !1,
    filename: r = 'template.vue.html',
    scopeId: i = null,
    optimizeImports: o = !1,
    runtimeGlobalName: l = 'Vue',
    runtimeModuleName: c = 'vue',
    ssrRuntimeModuleName: f = 'vue/server-renderer',
    ssr: u = !1,
    isTS: a = !1,
    inSSR: h = !1,
  },
) {
  const d = {
    mode: t,
    prefixIdentifiers: n,
    sourceMap: s,
    filename: r,
    scopeId: i,
    optimizeImports: o,
    runtimeGlobalName: l,
    runtimeModuleName: c,
    ssrRuntimeModuleName: f,
    ssr: u,
    isTS: a,
    inSSR: h,
    source: e.source,
    code: '',
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: !1,
    map: void 0,
    helper(y) {
      return `_${ms[y]}`
    },
    push(y, w = -2, S) {
      d.code += y
    },
    indent() {
      m(++d.indentLevel)
    },
    deindent(y = !1) {
      y ? --d.indentLevel : m(--d.indentLevel)
    },
    newline() {
      m(d.indentLevel)
    },
  }
  function m(y) {
    d.push(
      `
` + '  '.repeat(y),
      0,
    )
  }
  return d
}
function Qv(e, t = {}) {
  const n = Zv(e, t)
  t.onContextCreated && t.onContextCreated(n)
  const { mode: s, push: r, prefixIdentifiers: i, indent: o, deindent: l, newline: c, scopeId: f, ssr: u } = n,
    a = Array.from(e.helpers),
    h = a.length > 0,
    d = !i && s !== 'module'
  e0(e, n)
  const y = u ? 'ssrRender' : 'render',
    S = (u ? ['_ctx', '_push', '_parent', '_attrs'] : ['_ctx', '_cache']).join(', ')
  if (
    (r(`function ${y}(${S}) {`),
    o(),
    d &&
      (r('with (_ctx) {'),
      o(),
      h &&
        (r(
          `const { ${a.map(Gh).join(', ')} } = _Vue
`,
          -1,
        ),
        c())),
    e.components.length && (bo(e.components, 'component', n), (e.directives.length || e.temps > 0) && c()),
    e.directives.length && (bo(e.directives, 'directive', n), e.temps > 0 && c()),
    e.filters && e.filters.length && (c(), bo(e.filters, 'filter', n), c()),
    e.temps > 0)
  ) {
    r('let ')
    for (let _ = 0; _ < e.temps; _++) r(`${_ > 0 ? ', ' : ''}_temp${_}`)
  }
  return (
    (e.components.length || e.directives.length || e.temps) &&
      (r(
        `
`,
        0,
      ),
      c()),
    u || r('return '),
    e.codegenNode ? Ye(e.codegenNode, n) : r('null'),
    d && (l(), r('}')),
    l(),
    r('}'),
    { ast: e, code: n.code, preamble: '', map: n.map ? n.map.toJSON() : void 0 }
  )
}
function e0(e, t) {
  const {
      ssr: n,
      prefixIdentifiers: s,
      push: r,
      newline: i,
      runtimeModuleName: o,
      runtimeGlobalName: l,
      ssrRuntimeModuleName: c,
    } = t,
    f = l,
    u = Array.from(e.helpers)
  if (
    u.length > 0 &&
    (r(
      `const _Vue = ${f}
`,
      -1,
    ),
    e.hoists.length)
  ) {
    const a = [Yl, Jl, yr, Xl, Nh]
      .filter(h => u.includes(h))
      .map(Gh)
      .join(', ')
    r(
      `const { ${a} } = _Vue
`,
      -1,
    )
  }
  t0(e.hoists, t), i(), r('return ')
}
function bo(e, t, { helper: n, push: s, newline: r, isTS: i }) {
  const o = n(t === 'filter' ? tc : t === 'component' ? Zl : ec)
  for (let l = 0; l < e.length; l++) {
    let c = e[l]
    const f = c.endsWith('__self')
    f && (c = c.slice(0, -6)),
      s(`const ${nr(c, t)} = ${o}(${JSON.stringify(c)}${f ? ', true' : ''})${i ? '!' : ''}`),
      l < e.length - 1 && r()
  }
}
function t0(e, t) {
  if (!e.length) return
  t.pure = !0
  const { push: n, newline: s } = t
  s()
  for (let r = 0; r < e.length; r++) {
    const i = e[r]
    i && (n(`const _hoisted_${r + 1} = `), Ye(i, t), s())
  }
  t.pure = !1
}
function dc(e, t) {
  const n = e.length > 3 || !1
  t.push('['), n && t.indent(), br(e, t, n), n && t.deindent(), t.push(']')
}
function br(e, t, n = !1, s = !0) {
  const { push: r, newline: i } = t
  for (let o = 0; o < e.length; o++) {
    const l = e[o]
    ne(l) ? r(l, -3) : j(l) ? dc(l, t) : Ye(l, t), o < e.length - 1 && (n ? (s && r(','), i()) : s && r(', '))
  }
}
function Ye(e, t) {
  if (ne(e)) {
    t.push(e, -3)
    return
  }
  if (yt(e)) {
    t.push(t.helper(e))
    return
  }
  switch (e.type) {
    case 1:
    case 9:
    case 11:
      Ye(e.codegenNode, t)
      break
    case 2:
      n0(e, t)
      break
    case 4:
      zh(e, t)
      break
    case 5:
      s0(e, t)
      break
    case 12:
      Ye(e.codegenNode, t)
      break
    case 8:
      Yh(e, t)
      break
    case 3:
      i0(e, t)
      break
    case 13:
      o0(e, t)
      break
    case 14:
      c0(e, t)
      break
    case 15:
      a0(e, t)
      break
    case 17:
      u0(e, t)
      break
    case 18:
      f0(e, t)
      break
    case 19:
      h0(e, t)
      break
    case 20:
      d0(e, t)
      break
    case 21:
      br(e.body, t, !0, !1)
      break
  }
}
function n0(e, t) {
  t.push(JSON.stringify(e.content), -3, e)
}
function zh(e, t) {
  const { content: n, isStatic: s } = e
  t.push(s ? JSON.stringify(n) : n, -3, e)
}
function s0(e, t) {
  const { push: n, helper: s, pure: r } = t
  r && n(Qi), n(`${s(Ji)}(`), Ye(e.content, t), n(')')
}
function Yh(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const s = e.children[n]
    ne(s) ? t.push(s, -3) : Ye(s, t)
  }
}
function r0(e, t) {
  const { push: n } = t
  if (e.type === 8) n('['), Yh(e, t), n(']')
  else if (e.isStatic) {
    const s = fc(e.content) ? e.content : JSON.stringify(e.content)
    n(s, -2, e)
  } else n(`[${e.content}]`, -3, e)
}
function i0(e, t) {
  const { push: n, helper: s, pure: r } = t
  r && n(Qi), n(`${s(yr)}(${JSON.stringify(e.content)})`, -3, e)
}
function o0(e, t) {
  const { push: n, helper: s, pure: r } = t,
    {
      tag: i,
      props: o,
      children: l,
      patchFlag: c,
      dynamicProps: f,
      directives: u,
      isBlock: a,
      disableTracking: h,
      isComponent: d,
    } = e
  let m
  c && (m = String(c)), u && n(s(nc) + '('), a && n(`(${s(Bn)}(${h ? 'true' : ''}), `), r && n(Qi)
  const y = a ? vs(t.inSSR, d) : ys(t.inSSR, d)
  n(s(y) + '(', -2, e), br(l0([i, o, l, m, f]), t), n(')'), a && n(')'), u && (n(', '), Ye(u, t), n(')'))
}
function l0(e) {
  let t = e.length
  for (; t-- && e[t] == null; );
  return e.slice(0, t + 1).map(n => n || 'null')
}
function c0(e, t) {
  const { push: n, helper: s, pure: r } = t,
    i = ne(e.callee) ? e.callee : s(e.callee)
  r && n(Qi), n(i + '(', -2, e), br(e.arguments, t), n(')')
}
function a0(e, t) {
  const { push: n, indent: s, deindent: r, newline: i } = t,
    { properties: o } = e
  if (!o.length) {
    n('{}', -2, e)
    return
  }
  const l = o.length > 1 || !1
  n(l ? '{' : '{ '), l && s()
  for (let c = 0; c < o.length; c++) {
    const { key: f, value: u } = o[c]
    r0(f, t), n(': '), Ye(u, t), c < o.length - 1 && (n(','), i())
  }
  l && r(), n(l ? '}' : ' }')
}
function u0(e, t) {
  dc(e.elements, t)
}
function f0(e, t) {
  const { push: n, indent: s, deindent: r } = t,
    { params: i, returns: o, body: l, newline: c, isSlot: f } = e
  f && n(`_${ms[lc]}(`),
    n('(', -2, e),
    j(i) ? br(i, t) : i && Ye(i, t),
    n(') => '),
    (c || l) && (n('{'), s()),
    o ? (c && n('return '), j(o) ? dc(o, t) : Ye(o, t)) : l && Ye(l, t),
    (c || l) && (r(), n('}')),
    f && (e.isNonScopedSlot && n(', undefined, true'), n(')'))
}
function h0(e, t) {
  const { test: n, consequent: s, alternate: r, newline: i } = e,
    { push: o, indent: l, deindent: c, newline: f } = t
  if (n.type === 4) {
    const a = !fc(n.content)
    a && o('('), zh(n, t), a && o(')')
  } else o('('), Ye(n, t), o(')')
  i && l(), t.indentLevel++, i || o(' '), o('? '), Ye(s, t), t.indentLevel--, i && f(), i || o(' '), o(': ')
  const u = r.type === 19
  u || t.indentLevel++, Ye(r, t), u || t.indentLevel--, i && c(!0)
}
function d0(e, t) {
  const { push: n, helper: s, indent: r, deindent: i, newline: o } = t,
    { needPauseTracking: l, needArraySpread: c } = e
  c && n('[...('),
    n(`_cache[${e.index}] || (`),
    l && (r(), n(`${s(Ei)}(-1),`), o(), n('(')),
    n(`_cache[${e.index}] = `),
    Ye(e.value, t),
    l && (n(`).cacheIndex = ${e.index},`), o(), n(`${s(Ei)}(1),`), o(), n(`_cache[${e.index}]`), i()),
    n(')'),
    c && n(')]')
}
new RegExp(
  '\\b' +
    'arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield'
      .split(',')
      .join('\\b|\\b') +
    '\\b',
)
const p0 = qh(/^(if|else|else-if)$/, (e, t, n) =>
  m0(e, t, n, (s, r, i) => {
    const o = n.parent.children
    let l = o.indexOf(s),
      c = 0
    for (; l-- >= 0; ) {
      const f = o[l]
      f && f.type === 9 && (c += f.branches.length)
    }
    return () => {
      if (i) s.codegenNode = xa(r, c, n)
      else {
        const f = g0(s.codegenNode)
        f.alternate = xa(r, c + s.branches.length - 1, n)
      }
    }
  }),
)
function m0(e, t, n, s) {
  if (t.name !== 'else' && (!t.exp || !t.exp.content.trim())) {
    const r = t.exp ? t.exp.loc : e.loc
    n.onError(Oe(28, t.loc)), (t.exp = se('true', !1, r))
  }
  if (t.name === 'if') {
    const r = Oa(e, t),
      i = { type: 9, loc: e.loc, branches: [r] }
    if ((n.replaceNode(i), s)) return s(i, r, !0)
  } else {
    const r = n.parent.children
    let i = r.indexOf(e)
    for (; i-- >= -1; ) {
      const o = r[i]
      if (o && o.type === 3) {
        n.removeNode(o)
        continue
      }
      if (o && o.type === 2 && !o.content.trim().length) {
        n.removeNode(o)
        continue
      }
      if (o && o.type === 9) {
        t.name === 'else-if' && o.branches[o.branches.length - 1].condition === void 0 && n.onError(Oe(30, e.loc)),
          n.removeNode()
        const l = Oa(e, t)
        o.branches.push(l)
        const c = s && s(o, l, !1)
        Zi(l, n), c && c(), (n.currentNode = null)
      } else n.onError(Oe(30, e.loc))
      break
    }
  }
}
function Oa(e, t) {
  const n = e.tagType === 3
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === 'else' ? void 0 : t.exp,
    children: n && !Et(e, 'for') ? e.children : [e],
    userKey: Xi(e, 'key'),
    isTemplateIf: n,
  }
}
function xa(e, t, n) {
  return e.condition ? Xo(e.condition, Na(e, t, n), Me(n.helper(yr), ['""', 'true'])) : Na(e, t, n)
}
function Na(e, t, n) {
  const { helper: s } = n,
    r = Re('key', se(`${t}`, !1, bt, 2)),
    { children: i } = e,
    o = i[0]
  if (i.length !== 1 || o.type !== 1)
    if (i.length === 1 && o.type === 11) {
      const c = o.codegenNode
      return Ai(c, r, n), c
    } else return er(n, s(Zs), wt([r]), i, 64, void 0, void 0, !0, !1, !1, e.loc)
  else {
    const c = o.codegenNode,
      f = Pv(c)
    return f.type === 13 && ac(f, n), Ai(f, r, n), c
  }
}
function g0(e) {
  for (;;)
    if (e.type === 19)
      if (e.alternate.type === 19) e = e.alternate
      else return e
    else e.type === 20 && (e = e.value)
}
const y0 = (e, t, n) => {
    const { modifiers: s, loc: r } = e,
      i = e.arg
    let { exp: o } = e
    if ((o && o.type === 4 && !o.content.trim() && (o = void 0), !o)) {
      if (i.type !== 4 || !i.isStatic) return n.onError(Oe(52, i.loc)), { props: [Re(i, se('', !0, r))] }
      Jh(e), (o = e.exp)
    }
    return (
      i.type !== 4
        ? (i.children.unshift('('), i.children.push(') || ""'))
        : i.isStatic || (i.content = `${i.content} || ""`),
      s.some(l => l.content === 'camel') &&
        (i.type === 4
          ? i.isStatic
            ? (i.content = we(i.content))
            : (i.content = `${n.helperString(Yo)}(${i.content})`)
          : (i.children.unshift(`${n.helperString(Yo)}(`), i.children.push(')'))),
      n.inSSR || (s.some(l => l.content === 'prop') && Ra(i, '.'), s.some(l => l.content === 'attr') && Ra(i, '^')),
      { props: [Re(i, o)] }
    )
  },
  Jh = (e, t) => {
    const n = e.arg,
      s = we(n.content)
    e.exp = se(s, !1, n.loc)
  },
  Ra = (e, t) => {
    e.type === 4
      ? e.isStatic
        ? (e.content = t + e.content)
        : (e.content = `\`${t}\${${e.content}}\``)
      : (e.children.unshift(`'${t}' + (`), e.children.push(')'))
  },
  v0 = qh('for', (e, t, n) => {
    const { helper: s, removeHelper: r } = n
    return b0(e, t, n, i => {
      const o = Me(s(sc), [i.source]),
        l = Ti(e),
        c = Et(e, 'memo'),
        f = Xi(e, 'key', !1, !0)
      f && f.type === 7 && !f.exp && Jh(f)
      const u = f && (f.type === 6 ? (f.value ? se(f.value.content, !0) : void 0) : f.exp),
        a = f && u ? Re('key', u) : null,
        h = i.source.type === 4 && i.source.constType > 0,
        d = h ? 64 : f ? 128 : 256
      return (
        (i.codegenNode = er(n, s(Zs), void 0, o, d, void 0, void 0, !0, !h, !1, e.loc)),
        () => {
          let m
          const { children: y } = i,
            w = y.length !== 1 || y[0].type !== 1,
            S = Ci(e) ? e : l && e.children.length === 1 && Ci(e.children[0]) ? e.children[0] : null
          if (
            (S
              ? ((m = S.codegenNode), l && a && Ai(m, a, n))
              : w
                ? (m = er(n, s(Zs), a ? wt([a]) : void 0, e.children, 64, void 0, void 0, !0, void 0, !1))
                : ((m = y[0].codegenNode),
                  l && a && Ai(m, a, n),
                  m.isBlock !== !h &&
                    (m.isBlock ? (r(Bn), r(vs(n.inSSR, m.isComponent))) : r(ys(n.inSSR, m.isComponent))),
                  (m.isBlock = !h),
                  m.isBlock ? (s(Bn), s(vs(n.inSSR, m.isComponent))) : s(ys(n.inSSR, m.isComponent))),
            c)
          ) {
            const _ = gs(el(i.parseResult, [se('_cached')]))
            ;(_.body = bv([
              It(['const _memo = (', c.exp, ')']),
              It([
                'if (_cached',
                ...(u ? [' && _cached.key === ', u] : []),
                ` && ${n.helperString(Ph)}(_cached, _memo)) return _cached`,
              ]),
              It(['const _item = ', m]),
              se('_item.memo = _memo'),
              se('return _item'),
            ])),
              o.arguments.push(_, se('_cache'), se(String(n.cached.length))),
              n.cached.push(null)
          } else o.arguments.push(gs(el(i.parseResult), m, !0))
        }
      )
    })
  })
function b0(e, t, n, s) {
  if (!t.exp) {
    n.onError(Oe(31, t.loc))
    return
  }
  const r = t.forParseResult
  if (!r) {
    n.onError(Oe(32, t.loc))
    return
  }
  Xh(r)
  const { addIdentifiers: i, removeIdentifiers: o, scopes: l } = n,
    { source: c, value: f, key: u, index: a } = r,
    h = {
      type: 11,
      loc: t.loc,
      source: c,
      valueAlias: f,
      keyAlias: u,
      objectIndexAlias: a,
      parseResult: r,
      children: Ti(e) ? e.children : [e],
    }
  n.replaceNode(h), l.vFor++
  const d = s && s(h)
  return () => {
    l.vFor--, d && d()
  }
}
function Xh(e, t) {
  e.finalized || (e.finalized = !0)
}
function el({ value: e, key: t, index: n }, s = []) {
  return S0([e, t, n, ...s])
}
function S0(e) {
  let t = e.length
  for (; t-- && !e[t]; );
  return e.slice(0, t + 1).map((n, s) => n || se('_'.repeat(s + 1), !1))
}
const Ia = se('undefined', !1),
  _0 = (e, t) => {
    if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
      const n = Et(e, 'slot')
      if (n)
        return (
          n.exp,
          t.scopes.vSlot++,
          () => {
            t.scopes.vSlot--
          }
        )
    }
  },
  E0 = (e, t, n, s) => gs(e, n, !1, !0, n.length ? n[0].loc : s)
function w0(e, t, n = E0) {
  t.helper(lc)
  const { children: s, loc: r } = e,
    i = [],
    o = []
  let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0
  const c = Et(e, 'slot', !0)
  if (c) {
    const { arg: w, exp: S } = c
    w && !at(w) && (l = !0), i.push(Re(w || se('default', !0), n(S, void 0, s, r)))
  }
  let f = !1,
    u = !1
  const a = [],
    h = new Set()
  let d = 0
  for (let w = 0; w < s.length; w++) {
    const S = s[w]
    let _
    if (!Ti(S) || !(_ = Et(S, 'slot', !0))) {
      S.type !== 3 && a.push(S)
      continue
    }
    if (c) {
      t.onError(Oe(37, _.loc))
      break
    }
    f = !0
    const { children: p, loc: v } = S,
      { arg: E = se('default', !0), exp: O, loc: R } = _
    let x
    at(E) ? (x = E ? E.content : 'default') : (l = !0)
    const C = Et(S, 'for'),
      T = n(O, C, p, v)
    let I, A
    if ((I = Et(S, 'if'))) (l = !0), o.push(Xo(I.exp, Br(E, T, d++), Ia))
    else if ((A = Et(S, /^else(-if)?$/, !0))) {
      let L = w,
        G
      for (; L-- && ((G = s[L]), G.type === 3); );
      if (G && Ti(G) && Et(G, /^(else-)?if$/)) {
        let X = o[o.length - 1]
        for (; X.alternate.type === 19; ) X = X.alternate
        X.alternate = A.exp ? Xo(A.exp, Br(E, T, d++), Ia) : Br(E, T, d++)
      } else t.onError(Oe(30, A.loc))
    } else if (C) {
      l = !0
      const L = C.forParseResult
      L ? (Xh(L), o.push(Me(t.helper(sc), [L.source, gs(el(L), Br(E, T), !0)]))) : t.onError(Oe(32, C.loc))
    } else {
      if (x) {
        if (h.has(x)) {
          t.onError(Oe(38, R))
          continue
        }
        h.add(x), x === 'default' && (u = !0)
      }
      i.push(Re(E, T))
    }
  }
  if (!c) {
    const w = (S, _) => {
      const p = n(S, void 0, _, r)
      return t.compatConfig && (p.isNonScopedSlot = !0), Re('default', p)
    }
    f
      ? a.length && a.some(S => Zh(S)) && (u ? t.onError(Oe(39, a[0].loc)) : i.push(w(void 0, a)))
      : i.push(w(void 0, s))
  }
  const m = l ? 2 : Qr(e.children) ? 3 : 1
  let y = wt(i.concat(Re('_', se(m + '', !1))), r)
  return o.length && (y = Me(t.helper(Ih), [y, Ln(o)])), { slots: y, hasDynamicSlots: l }
}
function Br(e, t, n) {
  const s = [Re('name', e), Re('fn', t)]
  return n != null && s.push(Re('key', se(String(n), !0))), wt(s)
}
function Qr(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t]
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || Qr(n.children)) return !0
        break
      case 9:
        if (Qr(n.branches)) return !0
        break
      case 10:
      case 11:
        if (Qr(n.children)) return !0
        break
    }
  }
  return !1
}
function Zh(e) {
  return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : Zh(e.content)
}
const Qh = new WeakMap(),
  T0 = (e, t) =>
    function () {
      if (((e = t.currentNode), !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))) return
      const { tag: s, props: r } = e,
        i = e.tagType === 1
      let o = i ? C0(e, t) : `"${s}"`
      const l = be(o) && o.callee === Ql
      let c,
        f,
        u = 0,
        a,
        h,
        d,
        m = l || o === Ls || o === zl || (!i && (s === 'svg' || s === 'foreignObject' || s === 'math'))
      if (r.length > 0) {
        const y = ed(e, t, void 0, i, l)
        ;(c = y.props), (u = y.patchFlag), (h = y.dynamicPropNames)
        const w = y.directives
        ;(d = w && w.length ? Ln(w.map(S => O0(S, t))) : void 0), y.shouldUseBlock && (m = !0)
      }
      if (e.children.length > 0)
        if ((o === Si && ((m = !0), (u |= 1024)), i && o !== Ls && o !== Si)) {
          const { slots: w, hasDynamicSlots: S } = w0(e, t)
          ;(f = w), S && (u |= 1024)
        } else if (e.children.length === 1 && o !== Ls) {
          const w = e.children[0],
            S = w.type,
            _ = S === 5 || S === 8
          _ && mt(w, t) === 0 && (u |= 1), _ || S === 2 ? (f = w) : (f = e.children)
        } else f = e.children
      h && h.length && (a = x0(h)), (e.codegenNode = er(t, o, c, f, u === 0 ? void 0 : u, a, d, !!m, !1, i, e.loc))
    }
function C0(e, t, n = !1) {
  let { tag: s } = e
  const r = tl(s),
    i = Xi(e, 'is', !1, !0)
  if (i)
    if (r || Dn('COMPILER_IS_ON_ELEMENT', t)) {
      let l
      if (
        (i.type === 6 ? (l = i.value && se(i.value.content, !0)) : ((l = i.exp), l || (l = se('is', !1, i.arg.loc))), l)
      )
        return Me(t.helper(Ql), [l])
    } else i.type === 6 && i.value.content.startsWith('vue:') && (s = i.value.content.slice(4))
  const o = kh(s) || t.isBuiltInComponent(s)
  return o ? (n || t.helper(o), o) : (t.helper(Zl), t.components.add(s), nr(s, 'component'))
}
function ed(e, t, n = e.props, s, r, i = !1) {
  const { tag: o, loc: l, children: c } = e
  let f = []
  const u = [],
    a = [],
    h = c.length > 0
  let d = !1,
    m = 0,
    y = !1,
    w = !1,
    S = !1,
    _ = !1,
    p = !1,
    v = !1
  const E = [],
    O = T => {
      f.length && (u.push(wt(Pa(f), l)), (f = [])), T && u.push(T)
    },
    R = () => {
      t.scopes.vFor > 0 && f.push(Re(se('ref_for', !0), se('true')))
    },
    x = ({ key: T, value: I }) => {
      if (at(T)) {
        const A = T.content,
          L = jn(A)
        if (
          (L && (!s || r) && A.toLowerCase() !== 'onclick' && A !== 'onUpdate:modelValue' && !hn(A) && (_ = !0),
          L && hn(A) && (v = !0),
          L && I.type === 14 && (I = I.arguments[0]),
          I.type === 20 || ((I.type === 4 || I.type === 8) && mt(I, t) > 0))
        )
          return
        A === 'ref'
          ? (y = !0)
          : A === 'class'
            ? (w = !0)
            : A === 'style'
              ? (S = !0)
              : A !== 'key' && !E.includes(A) && E.push(A),
          s && (A === 'class' || A === 'style') && !E.includes(A) && E.push(A)
      } else p = !0
    }
  for (let T = 0; T < n.length; T++) {
    const I = n[T]
    if (I.type === 6) {
      const { loc: A, name: L, nameLoc: G, value: X } = I
      let U = !0
      if (
        (L === 'ref' && ((y = !0), R()),
        L === 'is' && (tl(o) || (X && X.content.startsWith('vue:')) || Dn('COMPILER_IS_ON_ELEMENT', t)))
      )
        continue
      f.push(Re(se(L, !0, G), se(X ? X.content : '', U, X ? X.loc : A)))
    } else {
      const { name: A, arg: L, exp: G, loc: X, modifiers: U } = I,
        Z = A === 'bind',
        q = A === 'on'
      if (A === 'slot') {
        s || t.onError(Oe(40, X))
        continue
      }
      if (
        A === 'once' ||
        A === 'memo' ||
        A === 'is' ||
        (Z && Rn(L, 'is') && (tl(o) || Dn('COMPILER_IS_ON_ELEMENT', t))) ||
        (q && i)
      )
        continue
      if (
        (((Z && Rn(L, 'key')) || (q && h && Rn(L, 'vue:before-update'))) && (d = !0),
        Z && Rn(L, 'ref') && R(),
        !L && (Z || q))
      ) {
        if (((p = !0), G))
          if (Z) {
            if ((R(), O(), Dn('COMPILER_V_BIND_OBJECT_ORDER', t))) {
              u.unshift(G)
              continue
            }
            u.push(G)
          } else O({ type: 14, loc: X, callee: t.helper(oc), arguments: s ? [G] : [G, 'true'] })
        else t.onError(Oe(Z ? 34 : 35, X))
        continue
      }
      Z && U.some(tt => tt.content === 'prop') && (m |= 32)
      const xe = t.directiveTransforms[A]
      if (xe) {
        const { props: tt, needRuntime: nt } = xe(I, e, t)
        !i && tt.forEach(x), q && L && !at(L) ? O(wt(tt, l)) : f.push(...tt), nt && (a.push(I), yt(nt) && Qh.set(I, nt))
      } else Sp(A) || (a.push(I), h && (d = !0))
    }
  }
  let C
  if (
    (u.length ? (O(), u.length > 1 ? (C = Me(t.helper(_i), u, l)) : (C = u[0])) : f.length && (C = wt(Pa(f), l)),
    p ? (m |= 16) : (w && !s && (m |= 2), S && !s && (m |= 4), E.length && (m |= 8), _ && (m |= 32)),
    !d && (m === 0 || m === 32) && (y || v || a.length > 0) && (m |= 512),
    !t.inSSR && C)
  )
    switch (C.type) {
      case 15:
        let T = -1,
          I = -1,
          A = !1
        for (let X = 0; X < C.properties.length; X++) {
          const U = C.properties[X].key
          at(U) ? (U.content === 'class' ? (T = X) : U.content === 'style' && (I = X)) : U.isHandlerKey || (A = !0)
        }
        const L = C.properties[T],
          G = C.properties[I]
        A
          ? (C = Me(t.helper(Qs), [C]))
          : (L && !at(L.value) && (L.value = Me(t.helper(rc), [L.value])),
            G &&
              (S || (G.value.type === 4 && G.value.content.trim()[0] === '[') || G.value.type === 17) &&
              (G.value = Me(t.helper(ic), [G.value])))
        break
      case 14:
        break
      default:
        C = Me(t.helper(Qs), [Me(t.helper(vr), [C])])
        break
    }
  return { props: C, directives: a, patchFlag: m, dynamicPropNames: E, shouldUseBlock: d }
}
function Pa(e) {
  const t = new Map(),
    n = []
  for (let s = 0; s < e.length; s++) {
    const r = e[s]
    if (r.key.type === 8 || !r.key.isStatic) {
      n.push(r)
      continue
    }
    const i = r.key.content,
      o = t.get(i)
    o ? (i === 'style' || i === 'class' || jn(i)) && A0(o, r) : (t.set(i, r), n.push(r))
  }
  return n
}
function A0(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : (e.value = Ln([e.value, t.value], e.loc))
}
function O0(e, t) {
  const n = [],
    s = Qh.get(e)
  s ? n.push(t.helperString(s)) : (t.helper(ec), t.directives.add(e.name), n.push(nr(e.name, 'directive')))
  const { loc: r } = e
  if ((e.exp && n.push(e.exp), e.arg && (e.exp || n.push('void 0'), n.push(e.arg)), Object.keys(e.modifiers).length)) {
    e.arg || (e.exp || n.push('void 0'), n.push('void 0'))
    const i = se('true', !1, r)
    n.push(
      wt(
        e.modifiers.map(o => Re(o, i)),
        r,
      ),
    )
  }
  return Ln(n, e.loc)
}
function x0(e) {
  let t = '['
  for (let n = 0, s = e.length; n < s; n++) (t += JSON.stringify(e[n])), n < s - 1 && (t += ', ')
  return t + ']'
}
function tl(e) {
  return e === 'component' || e === 'Component'
}
const N0 = (e, t) => {
  if (Ci(e)) {
    const { children: n, loc: s } = e,
      { slotName: r, slotProps: i } = R0(e, t),
      o = [t.prefixIdentifiers ? '_ctx.$slots' : '$slots', r, '{}', 'undefined', 'true']
    let l = 2
    i && ((o[2] = i), (l = 3)),
      n.length && ((o[3] = gs([], n, !1, !1, s)), (l = 4)),
      t.scopeId && !t.slotted && (l = 5),
      o.splice(l),
      (e.codegenNode = Me(t.helper(Rh), o, s))
  }
}
function R0(e, t) {
  let n = '"default"',
    s
  const r = []
  for (let i = 0; i < e.props.length; i++) {
    const o = e.props[i]
    if (o.type === 6)
      o.value && (o.name === 'name' ? (n = JSON.stringify(o.value.content)) : ((o.name = we(o.name)), r.push(o)))
    else if (o.name === 'bind' && Rn(o.arg, 'name')) {
      if (o.exp) n = o.exp
      else if (o.arg && o.arg.type === 4) {
        const l = we(o.arg.content)
        n = o.exp = se(l, !1, o.arg.loc)
      }
    } else o.name === 'bind' && o.arg && at(o.arg) && (o.arg.content = we(o.arg.content)), r.push(o)
  }
  if (r.length > 0) {
    const { props: i, directives: o } = ed(e, t, r, !1, !1)
    ;(s = i), o.length && t.onError(Oe(36, o[0].loc))
  }
  return { slotName: n, slotProps: s }
}
const td = (e, t, n, s) => {
    const { loc: r, modifiers: i, arg: o } = e
    !e.exp && !i.length && n.onError(Oe(35, r))
    let l
    if (o.type === 4)
      if (o.isStatic) {
        let a = o.content
        a.startsWith('vue:') && (a = `vnode-${a.slice(4)}`)
        const h = t.tagType !== 0 || a.startsWith('vnode') || !/[A-Z]/.test(a) ? rs(we(a)) : `on:${a}`
        l = se(h, !0, o.loc)
      } else l = It([`${n.helperString(Jo)}(`, o, ')'])
    else (l = o), l.children.unshift(`${n.helperString(Jo)}(`), l.children.push(')')
    let c = e.exp
    c && !c.content.trim() && (c = void 0)
    let f = n.cacheHandlers && !c && !n.inVOnce
    if (c) {
      const a = Lh(c),
        h = !(a || xv(c)),
        d = c.content.includes(';')
      ;(h || (f && a)) && (c = It([`${h ? '$event' : '(...args)'} => ${d ? '{' : '('}`, c, d ? '}' : ')']))
    }
    let u = { props: [Re(l, c || se('() => {}', !1, r))] }
    return (
      s && (u = s(u)),
      f && (u.props[0].value = n.cache(u.props[0].value)),
      u.props.forEach(a => (a.key.isHandlerKey = !0)),
      u
    )
  },
  I0 = (e, t) => {
    if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
      return () => {
        const n = e.children
        let s,
          r = !1
        for (let i = 0; i < n.length; i++) {
          const o = n[i]
          if (vo(o)) {
            r = !0
            for (let l = i + 1; l < n.length; l++) {
              const c = n[l]
              if (vo(c)) s || (s = n[i] = It([o], o.loc)), s.children.push(' + ', c), n.splice(l, 1), l--
              else {
                s = void 0
                break
              }
            }
          }
        }
        if (
          !(
            !r ||
            (n.length === 1 &&
              (e.type === 0 ||
                (e.type === 1 &&
                  e.tagType === 0 &&
                  !e.props.find(i => i.type === 7 && !t.directiveTransforms[i.name]) &&
                  e.tag !== 'template')))
          )
        )
          for (let i = 0; i < n.length; i++) {
            const o = n[i]
            if (vo(o) || o.type === 8) {
              const l = []
              ;(o.type !== 2 || o.content !== ' ') && l.push(o),
                !t.ssr && mt(o, t) === 0 && l.push('1'),
                (n[i] = { type: 12, content: o, loc: o.loc, codegenNode: Me(t.helper(Xl), l) })
            }
          }
      }
  },
  Ma = new WeakSet(),
  P0 = (e, t) => {
    if (e.type === 1 && Et(e, 'once', !0))
      return Ma.has(e) || t.inVOnce || t.inSSR
        ? void 0
        : (Ma.add(e),
          (t.inVOnce = !0),
          t.helper(Ei),
          () => {
            t.inVOnce = !1
            const n = t.currentNode
            n.codegenNode && (n.codegenNode = t.cache(n.codegenNode, !0))
          })
  },
  nd = (e, t, n) => {
    const { exp: s, arg: r } = e
    if (!s) return n.onError(Oe(41, e.loc)), Hr()
    const i = s.loc.source.trim(),
      o = s.type === 4 ? s.content : i,
      l = n.bindingMetadata[i]
    if (l === 'props' || l === 'props-aliased') return n.onError(Oe(44, s.loc)), Hr()
    if (!o.trim() || (!Lh(s) && !!1)) return n.onError(Oe(42, s.loc)), Hr()
    const f = r || se('modelValue', !0),
      u = r ? (at(r) ? `onUpdate:${we(r.content)}` : It(['"onUpdate:" + ', r])) : 'onUpdate:modelValue'
    let a
    const h = n.isTS ? '($event: any)' : '$event'
    a = It([`${h} => ((`, s, ') = $event)'])
    const d = [Re(f, e.exp), Re(u, a)]
    if (e.modifiers.length && t.tagType === 1) {
      const m = e.modifiers
          .map(w => w.content)
          .map(w => (fc(w) ? w : JSON.stringify(w)) + ': true')
          .join(', '),
        y = r ? (at(r) ? `${r.content}Modifiers` : It([r, ' + "Modifiers"'])) : 'modelModifiers'
      d.push(Re(y, se(`{ ${m} }`, !1, e.loc, 2)))
    }
    return Hr(d)
  }
function Hr(e = []) {
  return { props: e }
}
const M0 = /[\w).+\-_$\]]/,
  k0 = (e, t) => {
    Dn('COMPILER_FILTERS', t) &&
      (e.type === 5
        ? Oi(e.content, t)
        : e.type === 1 &&
          e.props.forEach(n => {
            n.type === 7 && n.name !== 'for' && n.exp && Oi(n.exp, t)
          }))
  }
function Oi(e, t) {
  if (e.type === 4) ka(e, t)
  else
    for (let n = 0; n < e.children.length; n++) {
      const s = e.children[n]
      typeof s == 'object' && (s.type === 4 ? ka(s, t) : s.type === 8 ? Oi(e, t) : s.type === 5 && Oi(s.content, t))
    }
}
function ka(e, t) {
  const n = e.content
  let s = !1,
    r = !1,
    i = !1,
    o = !1,
    l = 0,
    c = 0,
    f = 0,
    u = 0,
    a,
    h,
    d,
    m,
    y = []
  for (d = 0; d < n.length; d++)
    if (((h = a), (a = n.charCodeAt(d)), s)) a === 39 && h !== 92 && (s = !1)
    else if (r) a === 34 && h !== 92 && (r = !1)
    else if (i) a === 96 && h !== 92 && (i = !1)
    else if (o) a === 47 && h !== 92 && (o = !1)
    else if (a === 124 && n.charCodeAt(d + 1) !== 124 && n.charCodeAt(d - 1) !== 124 && !l && !c && !f)
      m === void 0 ? ((u = d + 1), (m = n.slice(0, d).trim())) : w()
    else {
      switch (a) {
        case 34:
          r = !0
          break
        case 39:
          s = !0
          break
        case 96:
          i = !0
          break
        case 40:
          f++
          break
        case 41:
          f--
          break
        case 91:
          c++
          break
        case 93:
          c--
          break
        case 123:
          l++
          break
        case 125:
          l--
          break
      }
      if (a === 47) {
        let S = d - 1,
          _
        for (; S >= 0 && ((_ = n.charAt(S)), _ === ' '); S--);
        ;(!_ || !M0.test(_)) && (o = !0)
      }
    }
  m === void 0 ? (m = n.slice(0, d).trim()) : u !== 0 && w()
  function w() {
    y.push(n.slice(u, d).trim()), (u = d + 1)
  }
  if (y.length) {
    for (d = 0; d < y.length; d++) m = F0(m, y[d], t)
    ;(e.content = m), (e.ast = void 0)
  }
}
function F0(e, t, n) {
  n.helper(tc)
  const s = t.indexOf('(')
  if (s < 0) return n.filters.add(t), `${nr(t, 'filter')}(${e})`
  {
    const r = t.slice(0, s),
      i = t.slice(s + 1)
    return n.filters.add(r), `${nr(r, 'filter')}(${e}${i !== ')' ? ',' + i : i}`
  }
}
const Fa = new WeakSet(),
  L0 = (e, t) => {
    if (e.type === 1) {
      const n = Et(e, 'memo')
      return !n || Fa.has(e)
        ? void 0
        : (Fa.add(e),
          () => {
            const s = e.codegenNode || t.currentNode.codegenNode
            s &&
              s.type === 13 &&
              (e.tagType !== 1 && ac(s, t),
              (e.codegenNode = Me(t.helper(cc), [n.exp, gs(void 0, s), '_cache', String(t.cached.length)])),
              t.cached.push(null))
          })
    }
  }
function D0(e) {
  return [[P0, p0, L0, v0, k0, N0, T0, _0, I0], { on: td, bind: y0, model: nd }]
}
function V0(e, t = {}) {
  const n = t.onError || uc,
    s = t.mode === 'module'
  t.prefixIdentifiers === !0 ? n(Oe(47)) : s && n(Oe(48))
  const r = !1
  t.cacheHandlers && n(Oe(49)), t.scopeId && !s && n(Oe(50))
  const i = le({}, t, { prefixIdentifiers: r }),
    o = ne(e) ? Kv(e, i) : e,
    [l, c] = D0()
  return (
    Yv(
      o,
      le({}, i, {
        nodeTransforms: [...l, ...(t.nodeTransforms || [])],
        directiveTransforms: le({}, c, t.directiveTransforms || {}),
      }),
    ),
    Qv(o, i)
  )
}
const $0 = () => ({ props: [] })
/**
 * @vue/compiler-dom v3.5.10
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const sd = Symbol(''),
  rd = Symbol(''),
  id = Symbol(''),
  od = Symbol(''),
  nl = Symbol(''),
  ld = Symbol(''),
  cd = Symbol(''),
  ad = Symbol(''),
  ud = Symbol(''),
  fd = Symbol('')
gv({
  [sd]: 'vModelRadio',
  [rd]: 'vModelCheckbox',
  [id]: 'vModelText',
  [od]: 'vModelSelect',
  [nl]: 'vModelDynamic',
  [ld]: 'withModifiers',
  [cd]: 'withKeys',
  [ad]: 'vShow',
  [ud]: 'Transition',
  [fd]: 'TransitionGroup',
})
let Jn
function B0(e, t = !1) {
  return (
    Jn || (Jn = document.createElement('div')),
    t
      ? ((Jn.innerHTML = `<div foo="${e.replace(/"/g, '&quot;')}">`), Jn.children[0].getAttribute('foo'))
      : ((Jn.innerHTML = e), Jn.textContent)
  )
}
const H0 = {
    parseMode: 'html',
    isVoidTag: Dp,
    isNativeTag: e => kp(e) || Fp(e) || Lp(e),
    isPreTag: e => e === 'pre',
    isIgnoreNewlineTag: e => e === 'pre' || e === 'textarea',
    decodeEntities: B0,
    isBuiltInComponent: e => {
      if (e === 'Transition' || e === 'transition') return ud
      if (e === 'TransitionGroup' || e === 'transition-group') return fd
    },
    getNamespace(e, t, n) {
      let s = t ? t.ns : n
      if (t && s === 2)
        if (t.tag === 'annotation-xml') {
          if (e === 'svg') return 1
          t.props.some(
            r =>
              r.type === 6 &&
              r.name === 'encoding' &&
              r.value != null &&
              (r.value.content === 'text/html' || r.value.content === 'application/xhtml+xml'),
          ) && (s = 0)
        } else /^m(?:[ions]|text)$/.test(t.tag) && e !== 'mglyph' && e !== 'malignmark' && (s = 0)
      else t && s === 1 && (t.tag === 'foreignObject' || t.tag === 'desc' || t.tag === 'title') && (s = 0)
      if (s === 0) {
        if (e === 'svg') return 1
        if (e === 'math') return 2
      }
      return s
    },
  },
  j0 = e => {
    e.type === 1 &&
      e.props.forEach((t, n) => {
        t.type === 6 &&
          t.name === 'style' &&
          t.value &&
          (e.props[n] = {
            type: 7,
            name: 'bind',
            arg: se('style', !0, t.loc),
            exp: U0(t.value.content, t.loc),
            modifiers: [],
            loc: t.loc,
          })
      })
  },
  U0 = (e, t) => {
    const n = _u(e)
    return se(JSON.stringify(n), !1, t, 3)
  }
function gn(e, t) {
  return Oe(e, t)
}
const W0 = (e, t, n) => {
    const { exp: s, loc: r } = e
    return (
      s || n.onError(gn(53, r)),
      t.children.length && (n.onError(gn(54, r)), (t.children.length = 0)),
      { props: [Re(se('innerHTML', !0, r), s || se('', !0))] }
    )
  },
  K0 = (e, t, n) => {
    const { exp: s, loc: r } = e
    return (
      s || n.onError(gn(55, r)),
      t.children.length && (n.onError(gn(56, r)), (t.children.length = 0)),
      { props: [Re(se('textContent', !0), s ? (mt(s, n) > 0 ? s : Me(n.helperString(Ji), [s], r)) : se('', !0))] }
    )
  },
  q0 = (e, t, n) => {
    const s = nd(e, t, n)
    if (!s.props.length || t.tagType === 1) return s
    e.arg && n.onError(gn(58, e.arg.loc))
    const { tag: r } = t,
      i = n.isCustomElement(r)
    if (r === 'input' || r === 'textarea' || r === 'select' || i) {
      let o = id,
        l = !1
      if (r === 'input' || i) {
        const c = Xi(t, 'type')
        if (c) {
          if (c.type === 7) o = nl
          else if (c.value)
            switch (c.value.content) {
              case 'radio':
                o = sd
                break
              case 'checkbox':
                o = rd
                break
              case 'file':
                ;(l = !0), n.onError(gn(59, e.loc))
                break
            }
        } else Nv(t) && (o = nl)
      } else r === 'select' && (o = od)
      l || (s.needRuntime = n.helper(o))
    } else n.onError(gn(57, e.loc))
    return (s.props = s.props.filter(o => !(o.key.type === 4 && o.key.content === 'modelValue'))), s
  },
  G0 = vt('passive,once,capture'),
  z0 = vt('stop,prevent,self,ctrl,shift,alt,meta,exact,middle'),
  Y0 = vt('left,right'),
  hd = vt('onkeyup,onkeydown,onkeypress'),
  J0 = (e, t, n, s) => {
    const r = [],
      i = [],
      o = []
    for (let l = 0; l < t.length; l++) {
      const c = t[l].content
      ;(c === 'native' && tr('COMPILER_V_ON_NATIVE', n)) || G0(c)
        ? o.push(c)
        : Y0(c)
          ? at(e)
            ? hd(e.content.toLowerCase())
              ? r.push(c)
              : i.push(c)
            : (r.push(c), i.push(c))
          : z0(c)
            ? i.push(c)
            : r.push(c)
    }
    return { keyModifiers: r, nonKeyModifiers: i, eventOptionModifiers: o }
  },
  La = (e, t) =>
    at(e) && e.content.toLowerCase() === 'onclick'
      ? se(t, !0)
      : e.type !== 4
        ? It(['(', e, `) === "onClick" ? "${t}" : (`, e, ')'])
        : e,
  X0 = (e, t, n) =>
    td(e, t, n, s => {
      const { modifiers: r } = e
      if (!r.length) return s
      let { key: i, value: o } = s.props[0]
      const { keyModifiers: l, nonKeyModifiers: c, eventOptionModifiers: f } = J0(i, r, n, e.loc)
      if (
        (c.includes('right') && (i = La(i, 'onContextmenu')),
        c.includes('middle') && (i = La(i, 'onMouseup')),
        c.length && (o = Me(n.helper(ld), [o, JSON.stringify(c)])),
        l.length && (!at(i) || hd(i.content.toLowerCase())) && (o = Me(n.helper(cd), [o, JSON.stringify(l)])),
        f.length)
      ) {
        const u = f.map(Wn).join('')
        i = at(i) ? se(`${i.content}${u}`, !0) : It(['(', i, `) + "${u}"`])
      }
      return { props: [Re(i, o)] }
    }),
  Z0 = (e, t, n) => {
    const { exp: s, loc: r } = e
    return s || n.onError(gn(61, r)), { props: [], needRuntime: n.helper(ad) }
  },
  Q0 = (e, t) => {
    e.type === 1 && e.tagType === 0 && (e.tag === 'script' || e.tag === 'style') && t.removeNode()
  },
  eb = [j0],
  tb = { cloak: $0, html: W0, text: K0, model: q0, on: X0, show: Z0 }
function nb(e, t = {}) {
  return V0(
    e,
    le({}, H0, t, {
      nodeTransforms: [Q0, ...eb, ...(t.nodeTransforms || [])],
      directiveTransforms: le({}, tb, t.directiveTransforms || {}),
      transformHoist: null,
    }),
  )
}
/**
 * vue v3.5.10
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Da = Object.create(null)
function sb(e, t) {
  if (!ne(e))
    if (e.nodeType) e = e.innerHTML
    else return ze
  const n = wp(e, t),
    s = Da[n]
  if (s) return s
  if (e[0] === '#') {
    const l = document.querySelector(e)
    e = l ? l.innerHTML : ''
  }
  const r = le({ hoistStatic: !0, onError: void 0, onWarn: ze }, t)
  !r.isCustomElement && typeof customElements < 'u' && (r.isCustomElement = l => !!customElements.get(l))
  const { code: i } = nb(e, r),
    o = new Function('Vue', i)(uv)
  return (o._rc = !0), (Da[n] = o)
}
Xf(sb)
/*!
 * vue-router v4.4.5
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Qn = typeof document < 'u'
function dd(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function rb(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module' || (e.default && dd(e.default))
}
const ve = Object.assign
function So(e, t) {
  const n = {}
  for (const s in t) {
    const r = t[s]
    n[s] = Pt(r) ? r.map(e) : e(r)
  }
  return n
}
const Ds = () => {},
  Pt = Array.isArray,
  pd = /#/g,
  ib = /&/g,
  ob = /\//g,
  lb = /=/g,
  cb = /\?/g,
  md = /\+/g,
  ab = /%5B/g,
  ub = /%5D/g,
  gd = /%5E/g,
  fb = /%60/g,
  yd = /%7B/g,
  hb = /%7C/g,
  vd = /%7D/g,
  db = /%20/g
function pc(e) {
  return encodeURI('' + e)
    .replace(hb, '|')
    .replace(ab, '[')
    .replace(ub, ']')
}
function pb(e) {
  return pc(e).replace(yd, '{').replace(vd, '}').replace(gd, '^')
}
function sl(e) {
  return pc(e)
    .replace(md, '%2B')
    .replace(db, '+')
    .replace(pd, '%23')
    .replace(ib, '%26')
    .replace(fb, '`')
    .replace(yd, '{')
    .replace(vd, '}')
    .replace(gd, '^')
}
function mb(e) {
  return sl(e).replace(lb, '%3D')
}
function gb(e) {
  return pc(e).replace(pd, '%23').replace(cb, '%3F')
}
function yb(e) {
  return e == null ? '' : gb(e).replace(ob, '%2F')
}
function rr(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const vb = /\/$/,
  bb = e => e.replace(vb, '')
function _o(e, t, n = '/') {
  let s,
    r = {},
    i = '',
    o = ''
  const l = t.indexOf('#')
  let c = t.indexOf('?')
  return (
    l < c && l >= 0 && (c = -1),
    c > -1 && ((s = t.slice(0, c)), (i = t.slice(c + 1, l > -1 ? l : t.length)), (r = e(i))),
    l > -1 && ((s = s || t.slice(0, l)), (o = t.slice(l, t.length))),
    (s = wb(s ?? t, n)),
    { fullPath: s + (i && '?') + i + o, path: s, query: r, hash: rr(o) }
  )
}
function Sb(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function Va(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function _b(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1
  return (
    s > -1 &&
    s === r &&
    bs(t.matched[s], n.matched[r]) &&
    bd(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function bs(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function bd(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!Eb(e[n], t[n])) return !1
  return !0
}
function Eb(e, t) {
  return Pt(e) ? $a(e, t) : Pt(t) ? $a(t, e) : e === t
}
function $a(e, t) {
  return Pt(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t
}
function wb(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    s = e.split('/'),
    r = s[s.length - 1]
  ;(r === '..' || r === '.') && s.push('')
  let i = n.length - 1,
    o,
    l
  for (o = 0; o < s.length; o++)
    if (((l = s[o]), l !== '.'))
      if (l === '..') i > 1 && i--
      else break
  return n.slice(0, i).join('/') + '/' + s.slice(o).join('/')
}
const nn = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0,
}
var ir
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(ir || (ir = {}))
var Vs
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(Vs || (Vs = {}))
function Tb(e) {
  if (!e)
    if (Qn) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), bb(e)
}
const Cb = /^[^#]+#/
function Ab(e, t) {
  return e.replace(Cb, '#') + t
}
function Ob(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect()
  return { behavior: t.behavior, left: s.left - n.left - (t.left || 0), top: s.top - n.top - (t.top || 0) }
}
const eo = () => ({ left: window.scrollX, top: window.scrollY })
function xb(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      s = typeof n == 'string' && n.startsWith('#'),
      r = typeof n == 'string' ? (s ? document.getElementById(n.slice(1)) : document.querySelector(n)) : n
    if (!r) return
    t = Ob(r, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function Ba(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const rl = new Map()
function Nb(e, t) {
  rl.set(e, t)
}
function Rb(e) {
  const t = rl.get(e)
  return rl.delete(e), t
}
let Ib = () => location.protocol + '//' + location.host
function Sd(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    i = e.indexOf('#')
  if (i > -1) {
    let l = r.includes(e.slice(i)) ? e.slice(i).length : 1,
      c = r.slice(l)
    return c[0] !== '/' && (c = '/' + c), Va(c, '')
  }
  return Va(n, e) + s + r
}
function Pb(e, t, n, s) {
  let r = [],
    i = [],
    o = null
  const l = ({ state: h }) => {
    const d = Sd(e, location),
      m = n.value,
      y = t.value
    let w = 0
    if (h) {
      if (((n.value = d), (t.value = h), o && o === m)) {
        o = null
        return
      }
      w = y ? h.position - y.position : 0
    } else s(d)
    r.forEach(S => {
      S(n.value, m, { delta: w, type: ir.pop, direction: w ? (w > 0 ? Vs.forward : Vs.back) : Vs.unknown })
    })
  }
  function c() {
    o = n.value
  }
  function f(h) {
    r.push(h)
    const d = () => {
      const m = r.indexOf(h)
      m > -1 && r.splice(m, 1)
    }
    return i.push(d), d
  }
  function u() {
    const { history: h } = window
    h.state && h.replaceState(ve({}, h.state, { scroll: eo() }), '')
  }
  function a() {
    for (const h of i) h()
    ;(i = []), window.removeEventListener('popstate', l), window.removeEventListener('beforeunload', u)
  }
  return (
    window.addEventListener('popstate', l),
    window.addEventListener('beforeunload', u, { passive: !0 }),
    { pauseListeners: c, listen: f, destroy: a }
  )
}
function Ha(e, t, n, s = !1, r = !1) {
  return { back: e, current: t, forward: n, replaced: s, position: window.history.length, scroll: r ? eo() : null }
}
function Mb(e) {
  const { history: t, location: n } = window,
    s = { value: Sd(e, n) },
    r = { value: t.state }
  r.value ||
    i(s.value, { back: null, current: s.value, forward: null, position: t.length - 1, replaced: !0, scroll: null }, !0)
  function i(c, f, u) {
    const a = e.indexOf('#'),
      h = a > -1 ? (n.host && document.querySelector('base') ? e : e.slice(a)) + c : Ib() + e + c
    try {
      t[u ? 'replaceState' : 'pushState'](f, '', h), (r.value = f)
    } catch (d) {
      console.error(d), n[u ? 'replace' : 'assign'](h)
    }
  }
  function o(c, f) {
    const u = ve({}, t.state, Ha(r.value.back, c, r.value.forward, !0), f, { position: r.value.position })
    i(c, u, !0), (s.value = c)
  }
  function l(c, f) {
    const u = ve({}, r.value, t.state, { forward: c, scroll: eo() })
    i(u.current, u, !0)
    const a = ve({}, Ha(s.value, c, null), { position: u.position + 1 }, f)
    i(c, a, !1), (s.value = c)
  }
  return { location: s, state: r, push: l, replace: o }
}
function X1(e) {
  e = Tb(e)
  const t = Mb(e),
    n = Pb(e, t.state, t.location, t.replace)
  function s(i, o = !0) {
    o || n.pauseListeners(), history.go(i)
  }
  const r = ve({ location: '', base: e, go: s, createHref: Ab.bind(null, e) }, t, n)
  return (
    Object.defineProperty(r, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(r, 'state', { enumerable: !0, get: () => t.state.value }),
    r
  )
}
function kb(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function _d(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const Ed = Symbol('')
var ja
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'), (e[(e.cancelled = 8)] = 'cancelled'), (e[(e.duplicated = 16)] = 'duplicated')
})(ja || (ja = {}))
function Ss(e, t) {
  return ve(new Error(), { type: e, [Ed]: !0 }, t)
}
function jt(e, t) {
  return e instanceof Error && Ed in e && (t == null || !!(e.type & t))
}
const Ua = '[^/]+?',
  Fb = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Lb = /[.+*?^${}()[\]/\\]/g
function Db(e, t) {
  const n = ve({}, Fb, t),
    s = []
  let r = n.start ? '^' : ''
  const i = []
  for (const f of e) {
    const u = f.length ? [] : [90]
    n.strict && !f.length && (r += '/')
    for (let a = 0; a < f.length; a++) {
      const h = f[a]
      let d = 40 + (n.sensitive ? 0.25 : 0)
      if (h.type === 0) a || (r += '/'), (r += h.value.replace(Lb, '\\$&')), (d += 40)
      else if (h.type === 1) {
        const { value: m, repeatable: y, optional: w, regexp: S } = h
        i.push({ name: m, repeatable: y, optional: w })
        const _ = S || Ua
        if (_ !== Ua) {
          d += 10
          try {
            new RegExp(`(${_})`)
          } catch (v) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${_}): ` + v.message)
          }
        }
        let p = y ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`
        a || (p = w && f.length < 2 ? `(?:/${p})` : '/' + p),
          w && (p += '?'),
          (r += p),
          (d += 20),
          w && (d += -8),
          y && (d += -20),
          _ === '.*' && (d += -50)
      }
      u.push(d)
    }
    s.push(u)
  }
  if (n.strict && n.end) {
    const f = s.length - 1
    s[f][s[f].length - 1] += 0.7000000000000001
  }
  n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && (r += '(?:/|$)')
  const o = new RegExp(r, n.sensitive ? '' : 'i')
  function l(f) {
    const u = f.match(o),
      a = {}
    if (!u) return null
    for (let h = 1; h < u.length; h++) {
      const d = u[h] || '',
        m = i[h - 1]
      a[m.name] = d && m.repeatable ? d.split('/') : d
    }
    return a
  }
  function c(f) {
    let u = '',
      a = !1
    for (const h of e) {
      ;(!a || !u.endsWith('/')) && (u += '/'), (a = !1)
      for (const d of h)
        if (d.type === 0) u += d.value
        else if (d.type === 1) {
          const { value: m, repeatable: y, optional: w } = d,
            S = m in f ? f[m] : ''
          if (Pt(S) && !y)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`)
          const _ = Pt(S) ? S.join('/') : S
          if (!_)
            if (w) h.length < 2 && (u.endsWith('/') ? (u = u.slice(0, -1)) : (a = !0))
            else throw new Error(`Missing required param "${m}"`)
          u += _
        }
    }
    return u || '/'
  }
  return { re: o, score: s, keys: i, parse: l, stringify: c }
}
function Vb(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n]
    if (s) return s
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0
}
function wd(e, t) {
  let n = 0
  const s = e.score,
    r = t.score
  for (; n < s.length && n < r.length; ) {
    const i = Vb(s[n], r[n])
    if (i) return i
    n++
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (Wa(s)) return 1
    if (Wa(r)) return -1
  }
  return r.length - s.length
}
function Wa(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const $b = { type: 0, value: '' },
  Bb = /[a-zA-Z0-9_]/
function Hb(e) {
  if (!e) return [[]]
  if (e === '/') return [[$b]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(d) {
    throw new Error(`ERR (${n})/"${f}": ${d}`)
  }
  let n = 0,
    s = n
  const r = []
  let i
  function o() {
    i && r.push(i), (i = [])
  }
  let l = 0,
    c,
    f = '',
    u = ''
  function a() {
    f &&
      (n === 0
        ? i.push({ type: 0, value: f })
        : n === 1 || n === 2 || n === 3
          ? (i.length > 1 &&
              (c === '*' || c === '+') &&
              t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),
            i.push({
              type: 1,
              value: f,
              regexp: u,
              repeatable: c === '*' || c === '+',
              optional: c === '*' || c === '?',
            }))
          : t('Invalid state to consume buffer'),
      (f = ''))
  }
  function h() {
    f += c
  }
  for (; l < e.length; ) {
    if (((c = e[l++]), c === '\\' && n !== 2)) {
      ;(s = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        c === '/' ? (f && a(), o()) : c === ':' ? (a(), (n = 1)) : h()
        break
      case 4:
        h(), (n = s)
        break
      case 1:
        c === '(' ? (n = 2) : Bb.test(c) ? h() : (a(), (n = 0), c !== '*' && c !== '?' && c !== '+' && l--)
        break
      case 2:
        c === ')' ? (u[u.length - 1] == '\\' ? (u = u.slice(0, -1) + c) : (n = 3)) : (u += c)
        break
      case 3:
        a(), (n = 0), c !== '*' && c !== '?' && c !== '+' && l--, (u = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), a(), o(), r
}
function jb(e, t, n) {
  const s = Db(Hb(e.path), n),
    r = ve(s, { record: e, parent: t, children: [], alias: [] })
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}
function Ub(e, t) {
  const n = [],
    s = new Map()
  t = za({ strict: !1, end: !0, sensitive: !1 }, t)
  function r(a) {
    return s.get(a)
  }
  function i(a, h, d) {
    const m = !d,
      y = qa(a)
    y.aliasOf = d && d.record
    const w = za(t, a),
      S = [y]
    if ('alias' in a) {
      const v = typeof a.alias == 'string' ? [a.alias] : a.alias
      for (const E of v)
        S.push(
          qa(ve({}, y, { components: d ? d.record.components : y.components, path: E, aliasOf: d ? d.record : y })),
        )
    }
    let _, p
    for (const v of S) {
      const { path: E } = v
      if (h && E[0] !== '/') {
        const O = h.record.path,
          R = O[O.length - 1] === '/' ? '' : '/'
        v.path = h.record.path + (E && R + E)
      }
      if (
        ((_ = jb(v, h, w)),
        d ? d.alias.push(_) : ((p = p || _), p !== _ && p.alias.push(_), m && a.name && !Ga(_) && o(a.name)),
        Td(_) && c(_),
        y.children)
      ) {
        const O = y.children
        for (let R = 0; R < O.length; R++) i(O[R], _, d && d.children[R])
      }
      d = d || _
    }
    return p
      ? () => {
          o(p)
        }
      : Ds
  }
  function o(a) {
    if (_d(a)) {
      const h = s.get(a)
      h && (s.delete(a), n.splice(n.indexOf(h), 1), h.children.forEach(o), h.alias.forEach(o))
    } else {
      const h = n.indexOf(a)
      h > -1 && (n.splice(h, 1), a.record.name && s.delete(a.record.name), a.children.forEach(o), a.alias.forEach(o))
    }
  }
  function l() {
    return n
  }
  function c(a) {
    const h = qb(a, n)
    n.splice(h, 0, a), a.record.name && !Ga(a) && s.set(a.record.name, a)
  }
  function f(a, h) {
    let d,
      m = {},
      y,
      w
    if ('name' in a && a.name) {
      if (((d = s.get(a.name)), !d)) throw Ss(1, { location: a })
      ;(w = d.record.name),
        (m = ve(
          Ka(
            h.params,
            d.keys
              .filter(p => !p.optional)
              .concat(d.parent ? d.parent.keys.filter(p => p.optional) : [])
              .map(p => p.name),
          ),
          a.params &&
            Ka(
              a.params,
              d.keys.map(p => p.name),
            ),
        )),
        (y = d.stringify(m))
    } else if (a.path != null)
      (y = a.path), (d = n.find(p => p.re.test(y))), d && ((m = d.parse(y)), (w = d.record.name))
    else {
      if (((d = h.name ? s.get(h.name) : n.find(p => p.re.test(h.path))), !d))
        throw Ss(1, { location: a, currentLocation: h })
      ;(w = d.record.name), (m = ve({}, h.params, a.params)), (y = d.stringify(m))
    }
    const S = []
    let _ = d
    for (; _; ) S.unshift(_.record), (_ = _.parent)
    return { name: w, path: y, params: m, matched: S, meta: Kb(S) }
  }
  e.forEach(a => i(a))
  function u() {
    ;(n.length = 0), s.clear()
  }
  return { addRoute: i, resolve: f, removeRoute: o, clearRoutes: u, getRoutes: l, getRecordMatcher: r }
}
function Ka(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function qa(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Wb(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component },
  }
  return Object.defineProperty(t, 'mods', { value: {} }), t
}
function Wb(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == 'object' ? n[s] : n
  return t
}
function Ga(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Kb(e) {
  return e.reduce((t, n) => ve(t, n.meta), {})
}
function za(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
function qb(e, t) {
  let n = 0,
    s = t.length
  for (; n !== s; ) {
    const i = (n + s) >> 1
    wd(e, t[i]) < 0 ? (s = i) : (n = i + 1)
  }
  const r = Gb(e)
  return r && (s = t.lastIndexOf(r, s - 1)), s
}
function Gb(e) {
  let t = e
  for (; (t = t.parent); ) if (Td(t) && wd(e, t) === 0) return t
}
function Td({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect)
}
function zb(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const s = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let r = 0; r < s.length; ++r) {
    const i = s[r].replace(md, ' '),
      o = i.indexOf('='),
      l = rr(o < 0 ? i : i.slice(0, o)),
      c = o < 0 ? null : rr(i.slice(o + 1))
    if (l in t) {
      let f = t[l]
      Pt(f) || (f = t[l] = [f]), f.push(c)
    } else t[l] = c
  }
  return t
}
function Ya(e) {
  let t = ''
  for (let n in e) {
    const s = e[n]
    if (((n = mb(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Pt(s) ? s.map(i => i && sl(i)) : [s && sl(s)]).forEach(i => {
      i !== void 0 && ((t += (t.length ? '&' : '') + n), i != null && (t += '=' + i))
    })
  }
  return t
}
function Yb(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 && (t[n] = Pt(s) ? s.map(r => (r == null ? null : '' + r)) : s == null ? s : '' + s)
  }
  return t
}
const Jb = Symbol(''),
  Ja = Symbol(''),
  to = Symbol(''),
  Cd = Symbol(''),
  il = Symbol('')
function xs() {
  let e = []
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s)
        r > -1 && e.splice(r, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function un(e, t, n, s, r, i = o => o()) {
  const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || [])
  return () =>
    new Promise((l, c) => {
      const f = h => {
          h === !1
            ? c(Ss(4, { from: n, to: t }))
            : h instanceof Error
              ? c(h)
              : kb(h)
                ? c(Ss(2, { from: t, to: h }))
                : (o && s.enterCallbacks[r] === o && typeof h == 'function' && o.push(h), l())
        },
        u = i(() => e.call(s && s.instances[r], t, n, f))
      let a = Promise.resolve(u)
      e.length < 3 && (a = a.then(f)), a.catch(h => c(h))
    })
}
function Eo(e, t, n, s, r = i => i()) {
  const i = []
  for (const o of e)
    for (const l in o.components) {
      let c = o.components[l]
      if (!(t !== 'beforeRouteEnter' && !o.instances[l]))
        if (dd(c)) {
          const u = (c.__vccOpts || c)[t]
          u && i.push(un(u, n, s, o, l, r))
        } else {
          let f = c()
          i.push(() =>
            f.then(u => {
              if (!u) throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`)
              const a = rb(u) ? u.default : u
              ;(o.mods[l] = u), (o.components[l] = a)
              const d = (a.__vccOpts || a)[t]
              return d && un(d, n, s, o, l, r)()
            }),
          )
        }
    }
  return i
}
function Xa(e) {
  const t = Tt(to),
    n = Tt(Cd),
    s = ie(() => {
      const c = $e(e.to)
      return t.resolve(c)
    }),
    r = ie(() => {
      const { matched: c } = s.value,
        { length: f } = c,
        u = c[f - 1],
        a = n.matched
      if (!u || !a.length) return -1
      const h = a.findIndex(bs.bind(null, u))
      if (h > -1) return h
      const d = Za(c[f - 2])
      return f > 1 && Za(u) === d && a[a.length - 1].path !== d ? a.findIndex(bs.bind(null, c[f - 2])) : h
    }),
    i = ie(() => r.value > -1 && eS(n.params, s.value.params)),
    o = ie(() => r.value > -1 && r.value === n.matched.length - 1 && bd(n.params, s.value.params))
  function l(c = {}) {
    return Qb(c) ? t[$e(e.replace) ? 'replace' : 'push']($e(e.to)).catch(Ds) : Promise.resolve()
  }
  return { route: s, href: ie(() => s.value.href), isActive: i, isExactActive: o, navigate: l }
}
const Xb = fr({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: Xa,
    setup(e, { slots: t }) {
      const n = ut(Xa(e)),
        { options: s } = Tt(to),
        r = ie(() => ({
          [Qa(e.activeClass, s.linkActiveClass, 'router-link-active')]: n.isActive,
          [Qa(e.exactActiveClass, s.linkExactActiveClass, 'router-link-exact-active')]: n.isExactActive,
        }))
      return () => {
        const i = t.default && t.default(n)
        return e.custom
          ? i
          : zi(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              i,
            )
      }
    },
  }),
  Zb = Xb
function Qb(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function eS(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n]
    if (typeof s == 'string') {
      if (s !== r) return !1
    } else if (!Pt(r) || r.length !== s.length || s.some((i, o) => i !== r[o])) return !1
  }
  return !0
}
function Za(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const Qa = (e, t, n) => e ?? t ?? n,
  tS = fr({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = Tt(il),
        r = ie(() => e.route || s.value),
        i = Tt(Ja, 0),
        o = ie(() => {
          let f = $e(i)
          const { matched: u } = r.value
          let a
          for (; (a = u[f]) && !a.components; ) f++
          return f
        }),
        l = ie(() => r.value.matched[o.value])
      ls(
        Ja,
        ie(() => o.value + 1),
      ),
        ls(Jb, l),
        ls(il, r)
      const c = z()
      return (
        fe(
          () => [c.value, l.value, e.name],
          ([f, u, a], [h, d, m]) => {
            u &&
              ((u.instances[a] = f),
              d &&
                d !== u &&
                f &&
                f === h &&
                (u.leaveGuards.size || (u.leaveGuards = d.leaveGuards),
                u.updateGuards.size || (u.updateGuards = d.updateGuards))),
              f && u && (!d || !bs(u, d) || !h) && (u.enterCallbacks[a] || []).forEach(y => y(f))
          },
          { flush: 'post' },
        ),
        () => {
          const f = r.value,
            u = e.name,
            a = l.value,
            h = a && a.components[u]
          if (!h) return eu(n.default, { Component: h, route: f })
          const d = a.props[u],
            m = d ? (d === !0 ? f.params : typeof d == 'function' ? d(f) : d) : null,
            w = zi(
              h,
              ve({}, m, t, {
                onVnodeUnmounted: S => {
                  S.component.isUnmounted && (a.instances[u] = null)
                },
                ref: c,
              }),
            )
          return eu(n.default, { Component: w, route: f }) || w
        }
      )
    },
  })
function eu(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const nS = tS
function Z1(e) {
  const t = Ub(e.routes, e),
    n = e.parseQuery || zb,
    s = e.stringifyQuery || Ya,
    r = e.history,
    i = xs(),
    o = xs(),
    l = xs(),
    c = ur(nn)
  let f = nn
  Qn && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const u = So.bind(null, M => '' + M),
    a = So.bind(null, yb),
    h = So.bind(null, rr)
  function d(M, K) {
    let H, Y
    return _d(M) ? ((H = t.getRecordMatcher(M)), (Y = K)) : (Y = M), t.addRoute(Y, H)
  }
  function m(M) {
    const K = t.getRecordMatcher(M)
    K && t.removeRoute(K)
  }
  function y() {
    return t.getRoutes().map(M => M.record)
  }
  function w(M) {
    return !!t.getRecordMatcher(M)
  }
  function S(M, K) {
    if (((K = ve({}, K || c.value)), typeof M == 'string')) {
      const b = _o(n, M, K.path),
        N = t.resolve({ path: b.path }, K),
        k = r.createHref(b.fullPath)
      return ve(b, N, { params: h(N.params), hash: rr(b.hash), redirectedFrom: void 0, href: k })
    }
    let H
    if (M.path != null) H = ve({}, M, { path: _o(n, M.path, K.path).path })
    else {
      const b = ve({}, M.params)
      for (const N in b) b[N] == null && delete b[N]
      ;(H = ve({}, M, { params: a(b) })), (K.params = a(K.params))
    }
    const Y = t.resolve(H, K),
      ge = M.hash || ''
    Y.params = u(h(Y.params))
    const Ce = Sb(s, ve({}, M, { hash: pb(ge), path: Y.path })),
      g = r.createHref(Ce)
    return ve({ fullPath: Ce, hash: ge, query: s === Ya ? Yb(M.query) : M.query || {} }, Y, {
      redirectedFrom: void 0,
      href: g,
    })
  }
  function _(M) {
    return typeof M == 'string' ? _o(n, M, c.value.path) : ve({}, M)
  }
  function p(M, K) {
    if (f !== M) return Ss(8, { from: K, to: M })
  }
  function v(M) {
    return R(M)
  }
  function E(M) {
    return v(ve(_(M), { replace: !0 }))
  }
  function O(M) {
    const K = M.matched[M.matched.length - 1]
    if (K && K.redirect) {
      const { redirect: H } = K
      let Y = typeof H == 'function' ? H(M) : H
      return (
        typeof Y == 'string' && ((Y = Y.includes('?') || Y.includes('#') ? (Y = _(Y)) : { path: Y }), (Y.params = {})),
        ve({ query: M.query, hash: M.hash, params: Y.path != null ? {} : M.params }, Y)
      )
    }
  }
  function R(M, K) {
    const H = (f = S(M)),
      Y = c.value,
      ge = M.state,
      Ce = M.force,
      g = M.replace === !0,
      b = O(H)
    if (b) return R(ve(_(b), { state: typeof b == 'object' ? ve({}, ge, b.state) : ge, force: Ce, replace: g }), K || H)
    const N = H
    N.redirectedFrom = K
    let k
    return (
      !Ce && _b(s, Y, H) && ((k = Ss(16, { to: N, from: Y })), nt(Y, Y, !0, !1)),
      (k ? Promise.resolve(k) : T(N, Y))
        .catch(P => (jt(P) ? (jt(P, 2) ? P : tt(P)) : q(P, N, Y)))
        .then(P => {
          if (P) {
            if (jt(P, 2))
              return R(
                ve({ replace: g }, _(P.to), {
                  state: typeof P.to == 'object' ? ve({}, ge, P.to.state) : ge,
                  force: Ce,
                }),
                K || N,
              )
          } else P = A(N, Y, !0, g, ge)
          return I(N, Y, P), P
        })
    )
  }
  function x(M, K) {
    const H = p(M, K)
    return H ? Promise.reject(H) : Promise.resolve()
  }
  function C(M) {
    const K = Gn.values().next().value
    return K && typeof K.runWithContext == 'function' ? K.runWithContext(M) : M()
  }
  function T(M, K) {
    let H
    const [Y, ge, Ce] = sS(M, K)
    H = Eo(Y.reverse(), 'beforeRouteLeave', M, K)
    for (const b of Y)
      b.leaveGuards.forEach(N => {
        H.push(un(N, M, K))
      })
    const g = x.bind(null, M, K)
    return (
      H.push(g),
      St(H)
        .then(() => {
          H = []
          for (const b of i.list()) H.push(un(b, M, K))
          return H.push(g), St(H)
        })
        .then(() => {
          H = Eo(ge, 'beforeRouteUpdate', M, K)
          for (const b of ge)
            b.updateGuards.forEach(N => {
              H.push(un(N, M, K))
            })
          return H.push(g), St(H)
        })
        .then(() => {
          H = []
          for (const b of Ce)
            if (b.beforeEnter)
              if (Pt(b.beforeEnter)) for (const N of b.beforeEnter) H.push(un(N, M, K))
              else H.push(un(b.beforeEnter, M, K))
          return H.push(g), St(H)
        })
        .then(
          () => (
            M.matched.forEach(b => (b.enterCallbacks = {})), (H = Eo(Ce, 'beforeRouteEnter', M, K, C)), H.push(g), St(H)
          ),
        )
        .then(() => {
          H = []
          for (const b of o.list()) H.push(un(b, M, K))
          return H.push(g), St(H)
        })
        .catch(b => (jt(b, 8) ? b : Promise.reject(b)))
    )
  }
  function I(M, K, H) {
    l.list().forEach(Y => C(() => Y(M, K, H)))
  }
  function A(M, K, H, Y, ge) {
    const Ce = p(M, K)
    if (Ce) return Ce
    const g = K === nn,
      b = Qn ? history.state : {}
    H && (Y || g ? r.replace(M.fullPath, ve({ scroll: g && b && b.scroll }, ge)) : r.push(M.fullPath, ge)),
      (c.value = M),
      nt(M, K, H, g),
      tt()
  }
  let L
  function G() {
    L ||
      (L = r.listen((M, K, H) => {
        if (!Cr.listening) return
        const Y = S(M),
          ge = O(Y)
        if (ge) {
          R(ve(ge, { replace: !0 }), Y).catch(Ds)
          return
        }
        f = Y
        const Ce = c.value
        Qn && Nb(Ba(Ce.fullPath, H.delta), eo()),
          T(Y, Ce)
            .catch(g =>
              jt(g, 12)
                ? g
                : jt(g, 2)
                  ? (R(g.to, Y)
                      .then(b => {
                        jt(b, 20) && !H.delta && H.type === ir.pop && r.go(-1, !1)
                      })
                      .catch(Ds),
                    Promise.reject())
                  : (H.delta && r.go(-H.delta, !1), q(g, Y, Ce)),
            )
            .then(g => {
              ;(g = g || A(Y, Ce, !1)),
                g && (H.delta && !jt(g, 8) ? r.go(-H.delta, !1) : H.type === ir.pop && jt(g, 20) && r.go(-1, !1)),
                I(Y, Ce, g)
            })
            .catch(Ds)
      }))
  }
  let X = xs(),
    U = xs(),
    Z
  function q(M, K, H) {
    tt(M)
    const Y = U.list()
    return Y.length ? Y.forEach(ge => ge(M, K, H)) : console.error(M), Promise.reject(M)
  }
  function xe() {
    return Z && c.value !== nn
      ? Promise.resolve()
      : new Promise((M, K) => {
          X.add([M, K])
        })
  }
  function tt(M) {
    return Z || ((Z = !M), G(), X.list().forEach(([K, H]) => (M ? H(M) : K())), X.reset()), M
  }
  function nt(M, K, H, Y) {
    const { scrollBehavior: ge } = e
    if (!Qn || !ge) return Promise.resolve()
    const Ce = (!H && Rb(Ba(M.fullPath, 0))) || ((Y || !H) && history.state && history.state.scroll) || null
    return En()
      .then(() => ge(M, K, Ce))
      .then(g => g && xb(g))
      .catch(g => q(g, M, K))
  }
  const st = M => r.go(M)
  let qn
  const Gn = new Set(),
    Cr = {
      currentRoute: c,
      listening: !0,
      addRoute: d,
      removeRoute: m,
      clearRoutes: t.clearRoutes,
      hasRoute: w,
      getRoutes: y,
      resolve: S,
      options: e,
      push: v,
      replace: E,
      go: st,
      back: () => st(-1),
      forward: () => st(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: l.add,
      onError: U.add,
      isReady: xe,
      install(M) {
        const K = this
        M.component('RouterLink', Zb),
          M.component('RouterView', nS),
          (M.config.globalProperties.$router = K),
          Object.defineProperty(M.config.globalProperties, '$route', { enumerable: !0, get: () => $e(c) }),
          Qn && !qn && c.value === nn && ((qn = !0), v(r.location).catch(ge => {}))
        const H = {}
        for (const ge in nn) Object.defineProperty(H, ge, { get: () => c.value[ge], enumerable: !0 })
        M.provide(to, K), M.provide(Cd, Al(H)), M.provide(il, c)
        const Y = M.unmount
        Gn.add(M),
          (M.unmount = function () {
            Gn.delete(M), Gn.size < 1 && ((f = nn), L && L(), (L = null), (c.value = nn), (qn = !1), (Z = !1)), Y()
          })
      },
    }
  function St(M) {
    return M.reduce((K, H) => K.then(() => C(H)), Promise.resolve())
  }
  return Cr
}
function sS(e, t) {
  const n = [],
    s = [],
    r = [],
    i = Math.max(t.matched.length, e.matched.length)
  for (let o = 0; o < i; o++) {
    const l = t.matched[o]
    l && (e.matched.find(f => bs(f, l)) ? s.push(l) : n.push(l))
    const c = e.matched[o]
    c && (t.matched.find(f => bs(f, c)) || r.push(c))
  }
  return [n, s, r]
}
function Q1() {
  return Tt(to)
}
function $t(e) {
  return ki() ? (_l(e), !0) : !1
}
const as = new WeakMap(),
  eE = (...e) => {
    var t
    const n = e[0],
      s = (t = Le()) == null ? void 0 : t.proxy
    if (s == null) throw new Error('injectLocal must be called in setup')
    return as.has(s) && n in as.get(s) ? as.get(s)[n] : Tt(...e)
  },
  tE = (e, t) => {
    var n
    const s = (n = Le()) == null ? void 0 : n.proxy
    if (s == null) throw new Error('provideLocal must be called in setup')
    as.has(s) || as.set(s, Object.create(null))
    const r = as.get(s)
    ;(r[e] = t), ls(e, t)
  }
function nE(e) {
  let t = 0,
    n,
    s
  const r = () => {
    ;(t -= 1), s && t <= 0 && (s.stop(), (n = void 0), (s = void 0))
  }
  return (...i) => ((t += 1), s || ((s = Au(!0)), (n = s.run(() => e(...i)))), $t(r), n)
}
function he(e) {
  return typeof e == 'function' ? e() : $e(e)
}
function sE(e) {
  if (!Te(e)) return ut(e)
  const t = new Proxy(
    {},
    {
      get(n, s, r) {
        return $e(Reflect.get(e.value, s, r))
      },
      set(n, s, r) {
        return Te(e.value[s]) && !Te(r) ? (e.value[s].value = r) : (e.value[s] = r), !0
      },
      deleteProperty(n, s) {
        return Reflect.deleteProperty(e.value, s)
      },
      has(n, s) {
        return Reflect.has(e.value, s)
      },
      ownKeys() {
        return Object.keys(e.value)
      },
      getOwnPropertyDescriptor() {
        return { enumerable: !0, configurable: !0 }
      },
    },
  )
  return ut(t)
}
const Hn = typeof window < 'u' && typeof document < 'u'
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope
const rS = e => typeof e < 'u',
  iS = e => e != null,
  oS = Object.prototype.toString,
  lS = e => oS.call(e) === '[object Object]',
  tu = () => +Date.now(),
  us = () => {},
  cS = aS()
function aS() {
  var e, t
  return (
    Hn &&
    ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) &&
    (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) ||
      (((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 &&
        /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent)))
  )
}
function Ad(e, t) {
  function n(...s) {
    return new Promise((r, i) => {
      Promise.resolve(e(() => t.apply(this, s), { fn: t, thisArg: this, args: s }))
        .then(r)
        .catch(i)
    })
  }
  return n
}
const mc = e => e()
function uS(e = mc) {
  const t = z(!0)
  function n() {
    t.value = !1
  }
  function s() {
    t.value = !0
  }
  const r = (...i) => {
    t.value && e(...i)
  }
  return { isActive: Nt(t), pause: n, resume: s, eventFilter: r }
}
function fS(e, t) {
  var n
  if (typeof e == 'number') return e + t
  const s = ((n = e.match(/^-?\d+\.?\d*/)) == null ? void 0 : n[0]) || '',
    r = e.slice(s.length),
    i = Number.parseFloat(s) + t
  return Number.isNaN(i) ? e : i + r
}
function rE(e, t, n = !1) {
  return Object.fromEntries(Object.entries(e).filter(([s, r]) => (!n || r !== void 0) && !t.includes(s)))
}
function hS(e) {
  return Le()
}
function dS(...e) {
  if (e.length !== 1) return Ku(...e)
  const t = e[0]
  return typeof t == 'function' ? Nt(Hi(() => ({ get: t, set: us }))) : z(t)
}
function pS(e, t, n = {}) {
  const { eventFilter: s = mc, ...r } = n
  return fe(e, Ad(s, t), r)
}
function mS(e, t, n = {}) {
  const { eventFilter: s, ...r } = n,
    { eventFilter: i, pause: o, resume: l, isActive: c } = uS(s)
  return { stop: pS(e, t, { ...r, eventFilter: i }), pause: o, resume: l, isActive: c }
}
function gS(e, t = {}) {
  if (!Te(e)) return Wu(e)
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {}
  for (const s in e.value)
    n[s] = Hi(() => ({
      get() {
        return e.value[s]
      },
      set(r) {
        var i
        if ((i = he(t.replaceRef)) != null ? i : !0)
          if (Array.isArray(e.value)) {
            const l = [...e.value]
            ;(l[s] = r), (e.value = l)
          } else {
            const l = { ...e.value, [s]: r }
            Object.setPrototypeOf(l, Object.getPrototypeOf(e.value)), (e.value = l)
          }
        else e.value[s] = r
      },
    }))
  return n
}
function ws(e, t = !0, n) {
  hS() ? wn(e, n) : t ? e() : En(e)
}
function yS(e, t = 1e3, n = {}) {
  const { immediate: s = !0, immediateCallback: r = !1 } = n
  let i = null
  const o = z(!1)
  function l() {
    i && (clearInterval(i), (i = null))
  }
  function c() {
    ;(o.value = !1), l()
  }
  function f() {
    const u = he(t)
    u <= 0 || ((o.value = !0), r && e(), l(), (i = setInterval(e, u)))
  }
  if ((s && Hn && f(), Te(t) || typeof t == 'function')) {
    const u = fe(t, () => {
      o.value && Hn && f()
    })
    $t(u)
  }
  return $t(c), { isActive: o, pause: c, resume: f }
}
function iE(e = !1, t = {}) {
  const { truthyValue: n = !0, falsyValue: s = !1 } = t,
    r = Te(e),
    i = z(e)
  function o(l) {
    if (arguments.length) return (i.value = l), i.value
    {
      const c = he(n)
      return (i.value = i.value === c ? he(s) : c), i.value
    }
  }
  return r ? o : [i, o]
}
function oE(e, t, n = {}) {
  const { eventFilter: s = mc, ...r } = n,
    i = Ad(s, t)
  let o, l, c
  if (r.flush === 'sync') {
    const f = z(!1)
    ;(l = () => {}),
      (o = u => {
        ;(f.value = !0), u(), (f.value = !1)
      }),
      (c = fe(
        e,
        (...u) => {
          f.value || i(...u)
        },
        r,
      ))
  } else {
    const f = [],
      u = z(0),
      a = z(0)
    ;(l = () => {
      u.value = a.value
    }),
      f.push(
        fe(
          e,
          () => {
            a.value++
          },
          { ...r, flush: 'sync' },
        ),
      ),
      (o = h => {
        const d = a.value
        h(), (u.value += a.value - d)
      }),
      f.push(
        fe(
          e,
          (...h) => {
            const d = u.value > 0 && u.value === a.value
            ;(u.value = 0), (a.value = 0), !d && i(...h)
          },
          r,
        ),
      ),
      (c = () => {
        f.forEach(h => h())
      })
  }
  return { stop: c, ignoreUpdates: o, ignorePrevAsyncUpdates: l }
}
function vS(e, t, n) {
  return fe(
    e,
    (r, i, o) => {
      r && t(r, i, o)
    },
    { ...n, once: !1 },
  )
}
const Be = Hn ? window : void 0,
  no = Hn ? window.document : void 0,
  bS = Hn ? window.navigator : void 0
function Ge(e) {
  var t
  const n = he(e)
  return (t = n == null ? void 0 : n.$el) != null ? t : n
}
function me(...e) {
  let t, n, s, r
  if ((typeof e[0] == 'string' || Array.isArray(e[0]) ? (([n, s, r] = e), (t = Be)) : ([t, n, s, r] = e), !t)) return us
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s])
  const i = [],
    o = () => {
      i.forEach(u => u()), (i.length = 0)
    },
    l = (u, a, h, d) => (u.addEventListener(a, h, d), () => u.removeEventListener(a, h, d)),
    c = fe(
      () => [Ge(t), he(r)],
      ([u, a]) => {
        if ((o(), !u)) return
        const h = lS(a) ? { ...a } : a
        i.push(...n.flatMap(d => s.map(m => l(u, d, m, h))))
      },
      { immediate: !0, flush: 'post' },
    ),
    f = () => {
      c(), o()
    }
  return $t(f), f
}
let nu = !1
function lE(e, t, n = {}) {
  const { window: s = Be, ignore: r = [], capture: i = !0, detectIframe: o = !1 } = n
  if (!s) return us
  cS &&
    !nu &&
    ((nu = !0),
    Array.from(s.document.body.children).forEach(d => d.addEventListener('click', us)),
    s.document.documentElement.addEventListener('click', us))
  let l = !0
  const c = d =>
      he(r).some(m => {
        if (typeof m == 'string')
          return Array.from(s.document.querySelectorAll(m)).some(y => y === d.target || d.composedPath().includes(y))
        {
          const y = Ge(m)
          return y && (d.target === y || d.composedPath().includes(y))
        }
      }),
    f = d => {
      const m = Ge(e)
      if (!(!m || m === d.target || d.composedPath().includes(m))) {
        if ((d.detail === 0 && (l = !c(d)), !l)) {
          l = !0
          return
        }
        t(d)
      }
    }
  let u = !1
  const a = [
    me(
      s,
      'click',
      d => {
        u ||
          ((u = !0),
          setTimeout(() => {
            u = !1
          }, 0),
          f(d))
      },
      { passive: !0, capture: i },
    ),
    me(
      s,
      'pointerdown',
      d => {
        const m = Ge(e)
        l = !c(d) && !!(m && !d.composedPath().includes(m))
      },
      { passive: !0 },
    ),
    o &&
      me(s, 'blur', d => {
        setTimeout(() => {
          var m
          const y = Ge(e)
          ;((m = s.document.activeElement) == null ? void 0 : m.tagName) === 'IFRAME' &&
            !(y != null && y.contains(s.document.activeElement)) &&
            t(d)
        }, 0)
      }),
  ].filter(Boolean)
  return () => a.forEach(d => d())
}
function SS(e) {
  return typeof e == 'function'
    ? e
    : typeof e == 'string'
      ? t => t.key === e
      : Array.isArray(e)
        ? t => e.includes(t.key)
        : () => !0
}
function cE(...e) {
  let t,
    n,
    s = {}
  e.length === 3
    ? ((t = e[0]), (n = e[1]), (s = e[2]))
    : e.length === 2
      ? typeof e[1] == 'object'
        ? ((t = !0), (n = e[0]), (s = e[1]))
        : ((t = e[0]), (n = e[1]))
      : ((t = !0), (n = e[0]))
  const { target: r = Be, eventName: i = 'keydown', passive: o = !1, dedupe: l = !1 } = s,
    c = SS(t)
  return me(
    r,
    i,
    u => {
      ;(u.repeat && he(l)) || (c(u) && n(u))
    },
    o,
  )
}
function _S() {
  const e = z(!1),
    t = Le()
  return (
    t &&
      wn(() => {
        e.value = !0
      }, t),
    e
  )
}
function Sr(e) {
  const t = _S()
  return ie(() => (t.value, !!e()))
}
function Od(e, t, n = {}) {
  const { window: s = Be, ...r } = n
  let i
  const o = Sr(() => s && 'MutationObserver' in s),
    l = () => {
      i && (i.disconnect(), (i = void 0))
    },
    c = ie(() => {
      const h = he(e),
        d = (Array.isArray(h) ? h : [h]).map(Ge).filter(iS)
      return new Set(d)
    }),
    f = fe(
      () => c.value,
      h => {
        l(), o.value && h.size && ((i = new MutationObserver(t)), h.forEach(d => i.observe(d, r)))
      },
      { immediate: !0, flush: 'post' },
    ),
    u = () => (i == null ? void 0 : i.takeRecords()),
    a = () => {
      f(), l()
    }
  return $t(a), { isSupported: o, stop: a, takeRecords: u }
}
function aE(e = {}) {
  var t
  const { window: n = Be, deep: s = !0, triggerOnRemoval: r = !1 } = e,
    i = (t = e.document) != null ? t : n == null ? void 0 : n.document,
    o = () => {
      var f
      let u = i == null ? void 0 : i.activeElement
      if (s)
        for (; u != null && u.shadowRoot; )
          u = (f = u == null ? void 0 : u.shadowRoot) == null ? void 0 : f.activeElement
      return u
    },
    l = z(),
    c = () => {
      l.value = o()
    }
  return (
    n &&
      (me(
        n,
        'blur',
        f => {
          f.relatedTarget === null && c()
        },
        !0,
      ),
      me(n, 'focus', c, !0)),
    r &&
      Od(
        i,
        f => {
          f.filter(u => u.removedNodes.length)
            .map(u => Array.from(u.removedNodes))
            .flat()
            .forEach(u => {
              u === l.value && c()
            })
        },
        { childList: !0, subtree: !0 },
      ),
    c(),
    l
  )
}
function ES(e, t = {}) {
  const { immediate: n = !0, fpsLimit: s = void 0, window: r = Be } = t,
    i = z(!1),
    o = s ? 1e3 / s : null
  let l = 0,
    c = null
  function f(h) {
    if (!i.value || !r) return
    l || (l = h)
    const d = h - l
    if (o && d < o) {
      c = r.requestAnimationFrame(f)
      return
    }
    ;(l = h), e({ delta: d, timestamp: h }), (c = r.requestAnimationFrame(f))
  }
  function u() {
    !i.value && r && ((i.value = !0), (l = 0), (c = r.requestAnimationFrame(f)))
  }
  function a() {
    ;(i.value = !1), c != null && r && (r.cancelAnimationFrame(c), (c = null))
  }
  return n && u(), $t(a), { isActive: Nt(i), pause: a, resume: u }
}
function Nn(e, t = {}) {
  const { window: n = Be } = t,
    s = Sr(() => n && 'matchMedia' in n && typeof n.matchMedia == 'function')
  let r
  const i = z(!1),
    o = f => {
      i.value = f.matches
    },
    l = () => {
      r && ('removeEventListener' in r ? r.removeEventListener('change', o) : r.removeListener(o))
    },
    c = Ff(() => {
      s.value &&
        (l(),
        (r = n.matchMedia(he(e))),
        'addEventListener' in r ? r.addEventListener('change', o) : r.addListener(o),
        (i.value = r.matches))
    })
  return (
    $t(() => {
      c(), l(), (r = void 0)
    }),
    i
  )
}
const uE = { sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 }
function fE(e, t = {}) {
  function n(u, a) {
    let h = he(e[he(u)])
    return a != null && (h = fS(h, a)), typeof h == 'number' && (h = `${h}px`), h
  }
  const { window: s = Be, strategy: r = 'min-width' } = t
  function i(u) {
    return s ? s.matchMedia(u).matches : !1
  }
  const o = u => Nn(() => `(min-width: ${n(u)})`, t),
    l = u => Nn(() => `(max-width: ${n(u)})`, t),
    c = Object.keys(e).reduce(
      (u, a) => (
        Object.defineProperty(u, a, { get: () => (r === 'min-width' ? o(a) : l(a)), enumerable: !0, configurable: !0 }),
        u
      ),
      {},
    )
  function f() {
    const u = Object.keys(e).map(a => [a, o(a)])
    return ie(() => u.filter(([, a]) => a.value).map(([a]) => a))
  }
  return Object.assign(c, {
    greaterOrEqual: o,
    smallerOrEqual: l,
    greater(u) {
      return Nn(() => `(min-width: ${n(u, 0.1)})`, t)
    },
    smaller(u) {
      return Nn(() => `(max-width: ${n(u, -0.1)})`, t)
    },
    between(u, a) {
      return Nn(() => `(min-width: ${n(u)}) and (max-width: ${n(a, -0.1)})`, t)
    },
    isGreater(u) {
      return i(`(min-width: ${n(u, 0.1)})`)
    },
    isGreaterOrEqual(u) {
      return i(`(min-width: ${n(u)})`)
    },
    isSmaller(u) {
      return i(`(max-width: ${n(u, -0.1)})`)
    },
    isSmallerOrEqual(u) {
      return i(`(max-width: ${n(u)})`)
    },
    isInBetween(u, a) {
      return i(`(min-width: ${n(u)}) and (max-width: ${n(a, -0.1)})`)
    },
    current: f,
    active() {
      const u = f()
      return ie(() => (u.value.length === 0 ? '' : u.value.at(-1)))
    },
  })
}
function wS(e) {
  return JSON.parse(JSON.stringify(e))
}
const jr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  Ur = '__vueuse_ssr_handlers__',
  TS = CS()
function CS() {
  return Ur in jr || (jr[Ur] = jr[Ur] || {}), jr[Ur]
}
function AS(e, t) {
  return TS[e] || t
}
function hE(e) {
  return Nn('(prefers-color-scheme: dark)', e)
}
function OS(e) {
  return e == null
    ? 'any'
    : e instanceof Set
      ? 'set'
      : e instanceof Map
        ? 'map'
        : e instanceof Date
          ? 'date'
          : typeof e == 'boolean'
            ? 'boolean'
            : typeof e == 'string'
              ? 'string'
              : typeof e == 'object'
                ? 'object'
                : Number.isNaN(e)
                  ? 'any'
                  : 'number'
}
const xS = {
    boolean: { read: e => e === 'true', write: e => String(e) },
    object: { read: e => JSON.parse(e), write: e => JSON.stringify(e) },
    number: { read: e => Number.parseFloat(e), write: e => String(e) },
    any: { read: e => e, write: e => String(e) },
    string: { read: e => e, write: e => String(e) },
    map: { read: e => new Map(JSON.parse(e)), write: e => JSON.stringify(Array.from(e.entries())) },
    set: { read: e => new Set(JSON.parse(e)), write: e => JSON.stringify(Array.from(e)) },
    date: { read: e => new Date(e), write: e => e.toISOString() },
  },
  su = 'vueuse-storage'
function NS(e, t, n, s = {}) {
  var r
  const {
      flush: i = 'pre',
      deep: o = !0,
      listenToStorageChanges: l = !0,
      writeDefaults: c = !0,
      mergeDefaults: f = !1,
      shallow: u,
      window: a = Be,
      eventFilter: h,
      onError: d = T => {
        console.error(T)
      },
      initOnMounted: m,
    } = s,
    y = (u ? ur : z)(typeof t == 'function' ? t() : t)
  if (!n)
    try {
      n = AS('getDefaultStorage', () => {
        var T
        return (T = Be) == null ? void 0 : T.localStorage
      })()
    } catch (T) {
      d(T)
    }
  if (!n) return y
  const w = he(t),
    S = OS(w),
    _ = (r = s.serializer) != null ? r : xS[S],
    { pause: p, resume: v } = mS(y, () => O(y.value), { flush: i, deep: o, eventFilter: h })
  a &&
    l &&
    ws(() => {
      n instanceof Storage ? me(a, 'storage', x) : me(a, su, C), m && x()
    }),
    m || x()
  function E(T, I) {
    if (a) {
      const A = { key: e, oldValue: T, newValue: I, storageArea: n }
      a.dispatchEvent(n instanceof Storage ? new StorageEvent('storage', A) : new CustomEvent(su, { detail: A }))
    }
  }
  function O(T) {
    try {
      const I = n.getItem(e)
      if (T == null) E(I, null), n.removeItem(e)
      else {
        const A = _.write(T)
        I !== A && (n.setItem(e, A), E(I, A))
      }
    } catch (I) {
      d(I)
    }
  }
  function R(T) {
    const I = T ? T.newValue : n.getItem(e)
    if (I == null) return c && w != null && n.setItem(e, _.write(w)), w
    if (!T && f) {
      const A = _.read(I)
      return typeof f == 'function' ? f(A, w) : S === 'object' && !Array.isArray(A) ? { ...w, ...A } : A
    } else return typeof I != 'string' ? I : _.read(I)
  }
  function x(T) {
    if (!(T && T.storageArea !== n)) {
      if (T && T.key == null) {
        y.value = w
        return
      }
      if (!(T && T.key !== e)) {
        p()
        try {
          ;(T == null ? void 0 : T.newValue) !== _.write(y.value) && (y.value = R(T))
        } catch (I) {
          d(I)
        } finally {
          T ? En(v) : v()
        }
      }
    }
  }
  function C(T) {
    x(T.detail)
  }
  return y
}
function RS(e = {}) {
  const { document: t = no } = e
  if (!t) return z('visible')
  const n = z(t.visibilityState)
  return (
    me(t, 'visibilitychange', () => {
      n.value = t.visibilityState
    }),
    n
  )
}
function dE(e, t = {}) {
  var n, s
  const {
      pointerTypes: r,
      preventDefault: i,
      stopPropagation: o,
      exact: l,
      onMove: c,
      onEnd: f,
      onStart: u,
      initialValue: a,
      axis: h = 'both',
      draggingElement: d = Be,
      containerElement: m,
      handle: y = e,
      buttons: w = [0],
    } = t,
    S = z((n = he(a)) != null ? n : { x: 0, y: 0 }),
    _ = z(),
    p = x => (r ? r.includes(x.pointerType) : !0),
    v = x => {
      he(i) && x.preventDefault(), he(o) && x.stopPropagation()
    },
    E = x => {
      var C
      if (!he(w).includes(x.button) || he(t.disabled) || !p(x) || (he(l) && x.target !== he(e))) return
      const T = he(m),
        I = (C = T == null ? void 0 : T.getBoundingClientRect) == null ? void 0 : C.call(T),
        A = he(e).getBoundingClientRect(),
        L = {
          x: x.clientX - (T ? A.left - I.left + T.scrollLeft : A.left),
          y: x.clientY - (T ? A.top - I.top + T.scrollTop : A.top),
        }
      ;(u == null ? void 0 : u(L, x)) !== !1 && ((_.value = L), v(x))
    },
    O = x => {
      if (he(t.disabled) || !p(x) || !_.value) return
      const C = he(m),
        T = he(e).getBoundingClientRect()
      let { x: I, y: A } = S.value
      ;(h === 'x' || h === 'both') &&
        ((I = x.clientX - _.value.x), C && (I = Math.min(Math.max(0, I), C.scrollWidth - T.width))),
        (h === 'y' || h === 'both') &&
          ((A = x.clientY - _.value.y), C && (A = Math.min(Math.max(0, A), C.scrollHeight - T.height))),
        (S.value = { x: I, y: A }),
        c == null || c(S.value, x),
        v(x)
    },
    R = x => {
      he(t.disabled) || !p(x) || (_.value && ((_.value = void 0), f == null || f(S.value, x), v(x)))
    }
  if (Hn) {
    const x = { capture: (s = t.capture) != null ? s : !0 }
    me(y, 'pointerdown', E, x), me(d, 'pointermove', O, x), me(d, 'pointerup', R, x)
  }
  return {
    ...gS(S),
    position: S,
    isDragging: ie(() => !!_.value),
    style: ie(() => `left:${S.value.x}px;top:${S.value.y}px;`),
  }
}
function xd(e, t, n = {}) {
  const { window: s = Be, ...r } = n
  let i
  const o = Sr(() => s && 'ResizeObserver' in s),
    l = () => {
      i && (i.disconnect(), (i = void 0))
    },
    c = ie(() => {
      const a = he(e)
      return Array.isArray(a) ? a.map(h => Ge(h)) : [Ge(a)]
    }),
    f = fe(
      c,
      a => {
        if ((l(), o.value && s)) {
          i = new ResizeObserver(t)
          for (const h of a) h && i.observe(h, r)
        }
      },
      { immediate: !0, flush: 'post' },
    ),
    u = () => {
      l(), f()
    }
  return $t(u), { isSupported: o, stop: u }
}
function pE(e, t = {}) {
  const { reset: n = !0, windowResize: s = !0, windowScroll: r = !0, immediate: i = !0, updateTiming: o = 'sync' } = t,
    l = z(0),
    c = z(0),
    f = z(0),
    u = z(0),
    a = z(0),
    h = z(0),
    d = z(0),
    m = z(0)
  function y() {
    const S = Ge(e)
    if (!S) {
      n &&
        ((l.value = 0),
        (c.value = 0),
        (f.value = 0),
        (u.value = 0),
        (a.value = 0),
        (h.value = 0),
        (d.value = 0),
        (m.value = 0))
      return
    }
    const _ = S.getBoundingClientRect()
    ;(l.value = _.height),
      (c.value = _.bottom),
      (f.value = _.left),
      (u.value = _.right),
      (a.value = _.top),
      (h.value = _.width),
      (d.value = _.x),
      (m.value = _.y)
  }
  function w() {
    o === 'sync' ? y() : o === 'next-frame' && requestAnimationFrame(() => y())
  }
  return (
    xd(e, w),
    fe(
      () => Ge(e),
      S => !S && w(),
    ),
    Od(e, w, { attributeFilter: ['style', 'class'] }),
    r && me('scroll', w, { capture: !0, passive: !0 }),
    s && me('resize', w, { passive: !0 }),
    ws(() => {
      i && w()
    }),
    { height: l, bottom: c, left: f, right: u, top: a, width: h, x: d, y: m, update: w }
  )
}
function mE(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: s = Be, box: r = 'content-box' } = n,
    i = ie(() => {
      var a, h
      return (h = (a = Ge(e)) == null ? void 0 : a.namespaceURI) == null ? void 0 : h.includes('svg')
    }),
    o = z(t.width),
    l = z(t.height),
    { stop: c } = xd(
      e,
      ([a]) => {
        const h =
          r === 'border-box' ? a.borderBoxSize : r === 'content-box' ? a.contentBoxSize : a.devicePixelContentBoxSize
        if (s && i.value) {
          const d = Ge(e)
          if (d) {
            const m = d.getBoundingClientRect()
            ;(o.value = m.width), (l.value = m.height)
          }
        } else if (h) {
          const d = Array.isArray(h) ? h : [h]
          ;(o.value = d.reduce((m, { inlineSize: y }) => m + y, 0)),
            (l.value = d.reduce((m, { blockSize: y }) => m + y, 0))
        } else (o.value = a.contentRect.width), (l.value = a.contentRect.height)
      },
      n,
    )
  ws(() => {
    const a = Ge(e)
    a &&
      ((o.value = 'offsetWidth' in a ? a.offsetWidth : t.width),
      (l.value = 'offsetHeight' in a ? a.offsetHeight : t.height))
  })
  const f = fe(
    () => Ge(e),
    a => {
      ;(o.value = a ? t.width : 0), (l.value = a ? t.height : 0)
    },
  )
  function u() {
    c(), f()
  }
  return { width: o, height: l, stop: u }
}
const ru = [
  'fullscreenchange',
  'webkitfullscreenchange',
  'webkitendfullscreen',
  'mozfullscreenchange',
  'MSFullscreenChange',
]
function gE(e, t = {}) {
  const { document: n = no, autoExit: s = !1 } = t,
    r = ie(() => {
      var S
      return (S = Ge(e)) != null ? S : n == null ? void 0 : n.querySelector('html')
    }),
    i = z(!1),
    o = ie(() =>
      [
        'requestFullscreen',
        'webkitRequestFullscreen',
        'webkitEnterFullscreen',
        'webkitEnterFullScreen',
        'webkitRequestFullScreen',
        'mozRequestFullScreen',
        'msRequestFullscreen',
      ].find(S => (n && S in n) || (r.value && S in r.value)),
    ),
    l = ie(() =>
      [
        'exitFullscreen',
        'webkitExitFullscreen',
        'webkitExitFullScreen',
        'webkitCancelFullScreen',
        'mozCancelFullScreen',
        'msExitFullscreen',
      ].find(S => (n && S in n) || (r.value && S in r.value)),
    ),
    c = ie(() =>
      ['fullScreen', 'webkitIsFullScreen', 'webkitDisplayingFullscreen', 'mozFullScreen', 'msFullscreenElement'].find(
        S => (n && S in n) || (r.value && S in r.value),
      ),
    ),
    f = ['fullscreenElement', 'webkitFullscreenElement', 'mozFullScreenElement', 'msFullscreenElement'].find(
      S => n && S in n,
    ),
    u = Sr(() => r.value && n && o.value !== void 0 && l.value !== void 0 && c.value !== void 0),
    a = () => (f ? (n == null ? void 0 : n[f]) === r.value : !1),
    h = () => {
      if (c.value) {
        if (n && n[c.value] != null) return n[c.value]
        {
          const S = r.value
          if ((S == null ? void 0 : S[c.value]) != null) return !!S[c.value]
        }
      }
      return !1
    }
  async function d() {
    if (!(!u.value || !i.value)) {
      if (l.value)
        if ((n == null ? void 0 : n[l.value]) != null) await n[l.value]()
        else {
          const S = r.value
          ;(S == null ? void 0 : S[l.value]) != null && (await S[l.value]())
        }
      i.value = !1
    }
  }
  async function m() {
    if (!u.value || i.value) return
    h() && (await d())
    const S = r.value
    o.value && (S == null ? void 0 : S[o.value]) != null && (await S[o.value](), (i.value = !0))
  }
  async function y() {
    await (i.value ? d() : m())
  }
  const w = () => {
    const S = h()
    ;(!S || (S && a())) && (i.value = S)
  }
  return (
    me(n, ru, w, !1),
    me(() => Ge(r), ru, w, !1),
    s && $t(d),
    { isSupported: u, isFullscreen: i, enter: m, exit: d, toggle: y }
  )
}
function yE(e, t, n = {}) {
  const { window: s = Be } = n
  return NS(e, t, s == null ? void 0 : s.localStorage, n)
}
const IS = {
  ctrl: 'control',
  command: 'meta',
  cmd: 'meta',
  option: 'alt',
  up: 'arrowup',
  down: 'arrowdown',
  left: 'arrowleft',
  right: 'arrowright',
}
function vE(e = {}) {
  const { reactive: t = !1, target: n = Be, aliasMap: s = IS, passive: r = !0, onEventFired: i = us } = e,
    o = ut(new Set()),
    l = {
      toJSON() {
        return {}
      },
      current: o,
    },
    c = t ? ut(l) : l,
    f = new Set(),
    u = new Set()
  function a(y, w) {
    y in c && (t ? (c[y] = w) : (c[y].value = w))
  }
  function h() {
    o.clear()
    for (const y of u) a(y, !1)
  }
  function d(y, w) {
    var S, _
    const p = (S = y.key) == null ? void 0 : S.toLowerCase(),
      E = [(_ = y.code) == null ? void 0 : _.toLowerCase(), p].filter(Boolean)
    p && (w ? o.add(p) : o.delete(p))
    for (const O of E) u.add(O), a(O, w)
    p === 'meta' && !w
      ? (f.forEach(O => {
          o.delete(O), a(O, !1)
        }),
        f.clear())
      : typeof y.getModifierState == 'function' &&
        y.getModifierState('Meta') &&
        w &&
        [...o, ...E].forEach(O => f.add(O))
  }
  me(n, 'keydown', y => (d(y, !0), i(y)), { passive: r }),
    me(n, 'keyup', y => (d(y, !1), i(y)), { passive: r }),
    me('blur', h, { passive: !0 }),
    me('focus', h, { passive: !0 })
  const m = new Proxy(c, {
    get(y, w, S) {
      if (typeof w != 'string') return Reflect.get(y, w, S)
      if (((w = w.toLowerCase()), w in s && (w = s[w]), !(w in c)))
        if (/[+_-]/.test(w)) {
          const p = w.split(/[+_-]/g).map(v => v.trim())
          c[w] = ie(() => p.every(v => he(m[v])))
        } else c[w] = z(!1)
      const _ = Reflect.get(y, w, S)
      return t ? he(_) : _
    },
  })
  return m
}
const PS = {
  page: e => [e.pageX, e.pageY],
  client: e => [e.clientX, e.clientY],
  screen: e => [e.screenX, e.screenY],
  movement: e => (e instanceof Touch ? null : [e.movementX, e.movementY]),
}
function bE(e = {}) {
  const {
    type: t = 'page',
    touch: n = !0,
    resetOnTouchEnds: s = !1,
    initialValue: r = { x: 0, y: 0 },
    window: i = Be,
    target: o = i,
    scroll: l = !0,
    eventFilter: c,
  } = e
  let f = null
  const u = z(r.x),
    a = z(r.y),
    h = z(null),
    d = typeof t == 'function' ? t : PS[t],
    m = E => {
      const O = d(E)
      ;(f = E), O && (([u.value, a.value] = O), (h.value = 'mouse'))
    },
    y = E => {
      if (E.touches.length > 0) {
        const O = d(E.touches[0])
        O && (([u.value, a.value] = O), (h.value = 'touch'))
      }
    },
    w = () => {
      if (!f || !i) return
      const E = d(f)
      f instanceof MouseEvent && E && ((u.value = E[0] + i.scrollX), (a.value = E[1] + i.scrollY))
    },
    S = () => {
      ;(u.value = r.x), (a.value = r.y)
    },
    _ = c ? E => c(() => m(E), {}) : E => m(E),
    p = c ? E => c(() => y(E), {}) : E => y(E),
    v = c ? () => c(() => w(), {}) : () => w()
  if (o) {
    const E = { passive: !0 }
    me(o, ['mousemove', 'dragover'], _, E),
      n && t !== 'movement' && (me(o, ['touchstart', 'touchmove'], p, E), s && me(o, 'touchend', S, E)),
      l && t === 'page' && me(i, 'scroll', v, { passive: !0 })
  }
  return { x: u, y: a, sourceType: h }
}
function SE(e, t = {}) {
  const n = dS(e),
    { threshold: s = 50, onSwipe: r, onSwipeEnd: i, onSwipeStart: o, disableTextSelect: l = !1 } = t,
    c = ut({ x: 0, y: 0 }),
    f = (R, x) => {
      ;(c.x = R), (c.y = x)
    },
    u = ut({ x: 0, y: 0 }),
    a = (R, x) => {
      ;(u.x = R), (u.y = x)
    },
    h = ie(() => c.x - u.x),
    d = ie(() => c.y - u.y),
    { max: m, abs: y } = Math,
    w = ie(() => m(y(h.value), y(d.value)) >= s),
    S = z(!1),
    _ = z(!1),
    p = ie(() =>
      w.value ? (y(h.value) > y(d.value) ? (h.value > 0 ? 'left' : 'right') : d.value > 0 ? 'up' : 'down') : 'none',
    ),
    v = R => {
      var x, C, T
      const I = R.buttons === 0,
        A = R.buttons === 1
      return (T = (C = (x = t.pointerTypes) == null ? void 0 : x.includes(R.pointerType)) != null ? C : I || A) != null
        ? T
        : !0
    },
    E = [
      me(e, 'pointerdown', R => {
        if (!v(R)) return
        _.value = !0
        const x = R.target
        x == null || x.setPointerCapture(R.pointerId)
        const { clientX: C, clientY: T } = R
        f(C, T), a(C, T), o == null || o(R)
      }),
      me(e, 'pointermove', R => {
        if (!v(R) || !_.value) return
        const { clientX: x, clientY: C } = R
        a(x, C), !S.value && w.value && (S.value = !0), S.value && (r == null || r(R))
      }),
      me(e, 'pointerup', R => {
        v(R) && (S.value && (i == null || i(R, p.value)), (_.value = !1), (S.value = !1))
      }),
    ]
  ws(() => {
    var R, x, C, T, I, A, L, G
    ;(x = (R = n.value) == null ? void 0 : R.style) == null || x.setProperty('touch-action', 'none'),
      l &&
        ((T = (C = n.value) == null ? void 0 : C.style) == null || T.setProperty('-webkit-user-select', 'none'),
        (A = (I = n.value) == null ? void 0 : I.style) == null || A.setProperty('-ms-user-select', 'none'),
        (G = (L = n.value) == null ? void 0 : L.style) == null || G.setProperty('user-select', 'none'))
  })
  const O = () => E.forEach(R => R())
  return { isSwiping: Nt(S), direction: Nt(p), posStart: Nt(c), posEnd: Nt(u), distanceX: h, distanceY: d, stop: O }
}
let MS = 0
function _E(e, t = {}) {
  const n = z(!1),
    { document: s = no, immediate: r = !0, manual: i = !1, id: o = `vueuse_styletag_${++MS}` } = t,
    l = z(e)
  let c = () => {}
  const f = () => {
      if (!s) return
      const a = s.getElementById(o) || s.createElement('style')
      a.isConnected || ((a.id = o), t.media && (a.media = t.media), s.head.appendChild(a)),
        !n.value &&
          ((c = fe(
            l,
            h => {
              a.textContent = h
            },
            { immediate: !0 },
          )),
          (n.value = !0))
    },
    u = () => {
      !s || !n.value || (c(), s.head.removeChild(s.getElementById(o)), (n.value = !1))
    }
  return r && !i && ws(f), i || $t(u), { id: o, css: l, unload: u, load: f, isLoaded: Nt(n) }
}
function EE(e = {}) {
  const { controls: t = !1, offset: n = 0, immediate: s = !0, interval: r = 'requestAnimationFrame', callback: i } = e,
    o = z(tu() + n),
    l = () => (o.value = tu() + n),
    c = i
      ? () => {
          l(), i(o.value)
        }
      : l,
    f = r === 'requestAnimationFrame' ? ES(c, { immediate: s }) : yS(c, r, { immediate: s })
  return t ? { timestamp: o, ...f } : o
}
function wE(e, t, n, s = {}) {
  var r, i, o
  const { clone: l = !1, passive: c = !1, eventName: f, deep: u = !1, defaultValue: a, shouldEmit: h } = s,
    d = Le(),
    m =
      n ||
      (d == null ? void 0 : d.emit) ||
      ((r = d == null ? void 0 : d.$emit) == null ? void 0 : r.bind(d)) ||
      ((o = (i = d == null ? void 0 : d.proxy) == null ? void 0 : i.$emit) == null
        ? void 0
        : o.bind(d == null ? void 0 : d.proxy))
  let y = f
  t || (t = 'modelValue'), (y = y || `update:${t.toString()}`)
  const w = p => (l ? (typeof l == 'function' ? l(p) : wS(p)) : p),
    S = () => (rS(e[t]) ? w(e[t]) : a),
    _ = p => {
      h ? h(p) && m(y, p) : m(y, p)
    }
  if (c) {
    const p = S(),
      v = z(p)
    let E = !1
    return (
      fe(
        () => e[t],
        O => {
          E || ((E = !0), (v.value = w(O)), En(() => (E = !1)))
        },
      ),
      fe(
        v,
        O => {
          !E && (O !== e[t] || u) && _(O)
        },
        { deep: u },
      ),
      v
    )
  } else
    return ie({
      get() {
        return S()
      },
      set(p) {
        _(p)
      },
    })
}
function TE(e = {}) {
  const { navigator: t = bS, document: n = no } = e,
    s = z(!1),
    r = ur(null),
    i = RS({ document: n }),
    o = Sr(() => t && 'wakeLock' in t),
    l = ie(() => !!r.value && i.value === 'visible')
  o.value &&
    (me(r, 'release', () => {
      var a, h
      s.value = (h = (a = r.value) == null ? void 0 : a.type) != null ? h : !1
    }),
    vS(
      () => i.value === 'visible' && (n == null ? void 0 : n.visibilityState) === 'visible' && s.value,
      a => {
        ;(s.value = !1), c(a)
      },
    ))
  async function c(a) {
    var h
    await ((h = r.value) == null ? void 0 : h.release()), (r.value = o.value ? await t.wakeLock.request(a) : null)
  }
  async function f(a) {
    i.value === 'visible' ? await c(a) : (s.value = a)
  }
  async function u() {
    s.value = !1
    const a = r.value
    ;(r.value = null), await (a == null ? void 0 : a.release())
  }
  return { sentinel: r, isSupported: o, isActive: l, request: f, forceRequest: c, release: u }
}
function CE(e = {}) {
  const { window: t = Be } = e
  if (!t) return z(!1)
  const n = z(t.document.hasFocus())
  return (
    me(t, 'blur', () => {
      n.value = !1
    }),
    me(t, 'focus', () => {
      n.value = !0
    }),
    n
  )
}
function AE(e = {}) {
  const {
      window: t = Be,
      initialWidth: n = Number.POSITIVE_INFINITY,
      initialHeight: s = Number.POSITIVE_INFINITY,
      listenOrientation: r = !0,
      includeScrollbar: i = !0,
      type: o = 'inner',
    } = e,
    l = z(n),
    c = z(s),
    f = () => {
      t &&
        (o === 'outer'
          ? ((l.value = t.outerWidth), (c.value = t.outerHeight))
          : i
            ? ((l.value = t.innerWidth), (c.value = t.innerHeight))
            : ((l.value = t.document.documentElement.clientWidth), (c.value = t.document.documentElement.clientHeight)))
    }
  if ((f(), ws(f), me('resize', f, { passive: !0 }), r)) {
    const u = Nn('(orientation: portrait)')
    fe(u, () => f())
  }
  return { width: l, height: c }
}
function OE(...e) {
  return ie(() => e.every(t => he(t)))
}
function xE(e) {
  return ie(() => !he(e))
}
function NE(...e) {
  return ie(() => e.some(t => he(t)))
}
function wo(e) {
  if (e === null || typeof e != 'object') return !1
  const t = Object.getPrototypeOf(e)
  return (t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null) || Symbol.iterator in e
    ? !1
    : Symbol.toStringTag in e
      ? Object.prototype.toString.call(e) === '[object Module]'
      : !0
}
function ol(e, t, n = '.', s) {
  if (!wo(t)) return ol(e, {}, n, s)
  const r = Object.assign({}, t)
  for (const i in e) {
    if (i === '__proto__' || i === 'constructor') continue
    const o = e[i]
    o != null &&
      ((s && s(r, i, o, n)) ||
        (Array.isArray(o) && Array.isArray(r[i])
          ? (r[i] = [...o, ...r[i]])
          : wo(o) && wo(r[i])
            ? (r[i] = ol(o, r[i], (n ? `${n}.` : '') + i.toString(), s))
            : (r[i] = o)))
  }
  return r
}
function kS(e) {
  return (...t) => t.reduce((n, s) => ol(n, s, '', e), {})
}
const FS = kS()
function Nd(e) {
  return ki() ? (_l(e), !0) : !1
}
function gc(e) {
  return typeof e == 'function' ? e() : $e(e)
}
const LS = typeof window < 'u' && typeof document < 'u'
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope
const DS = e => e != null,
  VS = Object.prototype.toString,
  xi = e => VS.call(e) === '[object Object]',
  ei = () => {}
function $S(e) {
  return Le()
}
function BS(e, t) {
  $S() && dr(e, t)
}
function $s(e) {
  var t
  const n = gc(e)
  return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const Rd = LS ? window : void 0
function kt(...e) {
  let t, n, s, r
  if ((typeof e[0] == 'string' || Array.isArray(e[0]) ? (([n, s, r] = e), (t = Rd)) : ([t, n, s, r] = e), !t)) return ei
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s])
  const i = [],
    o = () => {
      i.forEach(u => u()), (i.length = 0)
    },
    l = (u, a, h, d) => (u.addEventListener(a, h, d), () => u.removeEventListener(a, h, d)),
    c = fe(
      () => [$s(t), gc(r)],
      ([u, a]) => {
        if ((o(), !u)) return
        const h = xi(a) ? { ...a } : a
        i.push(...n.flatMap(d => s.map(m => l(u, d, m, h))))
      },
      { immediate: !0, flush: 'post' },
    ),
    f = () => {
      c(), o()
    }
  return Nd(f), f
}
function HS() {
  const e = z(!1),
    t = Le()
  return (
    t &&
      wn(() => {
        e.value = !0
      }, t),
    e
  )
}
function jS(e) {
  const t = HS()
  return ie(() => (t.value, !!e()))
}
function US(e, t, n = {}) {
  const { root: s, rootMargin: r = '0px', threshold: i = 0.1, window: o = Rd, immediate: l = !0 } = n,
    c = jS(() => o && 'IntersectionObserver' in o),
    f = ie(() => {
      const m = gc(e)
      return (Array.isArray(m) ? m : [m]).map($s).filter(DS)
    })
  let u = ei
  const a = z(l),
    h = c.value
      ? fe(
          () => [f.value, $s(s), a.value],
          ([m, y]) => {
            if ((u(), !a.value || !m.length)) return
            const w = new IntersectionObserver(t, { root: $s(y), rootMargin: r, threshold: i })
            m.forEach(S => S && w.observe(S)),
              (u = () => {
                w.disconnect(), (u = ei)
              })
          },
          { immediate: l, flush: 'post' },
        )
      : ei,
    d = () => {
      u(), h(), (a.value = !1)
    }
  return (
    Nd(d),
    {
      isSupported: c,
      isActive: a,
      pause() {
        u(), (a.value = !1)
      },
      resume() {
        a.value = !0
      },
      stop: d,
    }
  )
}
const Id = (1 / 60) * 1e3,
  WS = typeof performance < 'u' ? () => performance.now() : () => Date.now(),
  Pd = typeof window < 'u' ? e => window.requestAnimationFrame(e) : e => setTimeout(() => e(WS()), Id)
function KS(e) {
  let t = [],
    n = [],
    s = 0,
    r = !1,
    i = !1
  const o = new WeakSet(),
    l = {
      schedule: (c, f = !1, u = !1) => {
        const a = u && r,
          h = a ? t : n
        return f && o.add(c), h.indexOf(c) === -1 && (h.push(c), a && r && (s = t.length)), c
      },
      cancel: c => {
        const f = n.indexOf(c)
        f !== -1 && n.splice(f, 1), o.delete(c)
      },
      process: c => {
        if (r) {
          i = !0
          return
        }
        if (((r = !0), ([t, n] = [n, t]), (n.length = 0), (s = t.length), s))
          for (let f = 0; f < s; f++) {
            const u = t[f]
            u(c), o.has(u) && (l.schedule(u), e())
          }
        ;(r = !1), i && ((i = !1), l.process(c))
      },
    }
  return l
}
const qS = 40
let ll = !0,
  or = !1,
  cl = !1
const fs = { delta: 0, timestamp: 0 },
  _r = ['read', 'update', 'preRender', 'render', 'postRender'],
  so = _r.reduce((e, t) => ((e[t] = KS(() => (or = !0))), e), {}),
  al = _r.reduce((e, t) => {
    const n = so[t]
    return (e[t] = (s, r = !1, i = !1) => (or || YS(), n.schedule(s, r, i))), e
  }, {}),
  GS = _r.reduce((e, t) => ((e[t] = so[t].cancel), e), {})
_r.reduce((e, t) => ((e[t] = () => so[t].process(fs)), e), {})
const zS = e => so[e].process(fs),
  Md = e => {
    ;(or = !1),
      (fs.delta = ll ? Id : Math.max(Math.min(e - fs.timestamp, qS), 1)),
      (fs.timestamp = e),
      (cl = !0),
      _r.forEach(zS),
      (cl = !1),
      or && ((ll = !1), Pd(Md))
  },
  YS = () => {
    ;(or = !0), (ll = !0), cl || Pd(Md)
  },
  kd = () => fs
function Fd(e, t) {
  var n = {}
  for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var r = 0, s = Object.getOwnPropertySymbols(e); r < s.length; r++)
      t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
  return n
}
var iu = function () {}
const ul = (e, t, n) => Math.min(Math.max(n, e), t),
  To = 0.001,
  JS = 0.01,
  XS = 10,
  ZS = 0.05,
  QS = 1
function e_({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: s = 1 }) {
  let r,
    i,
    o = 1 - t
  ;(o = ul(ZS, QS, o)),
    (e = ul(JS, XS, e / 1e3)),
    o < 1
      ? ((r = f => {
          const u = f * o,
            a = u * e,
            h = u - n,
            d = fl(f, o),
            m = Math.exp(-a)
          return To - (h / d) * m
        }),
        (i = f => {
          const a = f * o * e,
            h = a * n + n,
            d = Math.pow(o, 2) * Math.pow(f, 2) * e,
            m = Math.exp(-a),
            y = fl(Math.pow(f, 2), o)
          return ((-r(f) + To > 0 ? -1 : 1) * ((h - d) * m)) / y
        }))
      : ((r = f => {
          const u = Math.exp(-f * e),
            a = (f - n) * e + 1
          return -To + u * a
        }),
        (i = f => {
          const u = Math.exp(-f * e),
            a = (n - f) * (e * e)
          return u * a
        }))
  const l = 5 / e,
    c = n_(r, i, l)
  if (((e = e * 1e3), isNaN(c))) return { stiffness: 100, damping: 10, duration: e }
  {
    const f = Math.pow(c, 2) * s
    return { stiffness: f, damping: o * 2 * Math.sqrt(s * f), duration: e }
  }
}
const t_ = 12
function n_(e, t, n) {
  let s = n
  for (let r = 1; r < t_; r++) s = s - e(s) / t(s)
  return s
}
function fl(e, t) {
  return e * Math.sqrt(1 - t * t)
}
const s_ = ['duration', 'bounce'],
  r_ = ['stiffness', 'damping', 'mass']
function ou(e, t) {
  return t.some(n => e[n] !== void 0)
}
function i_(e) {
  let t = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1 }, e)
  if (!ou(e, r_) && ou(e, s_)) {
    const n = e_(e)
    ;(t = Object.assign(Object.assign(Object.assign({}, t), n), { velocity: 0, mass: 1 })),
      (t.isResolvedFromDuration = !0)
  }
  return t
}
function yc(e) {
  var { from: t = 0, to: n = 1, restSpeed: s = 2, restDelta: r } = e,
    i = Fd(e, ['from', 'to', 'restSpeed', 'restDelta'])
  const o = { done: !1, value: t }
  let { stiffness: l, damping: c, mass: f, velocity: u, duration: a, isResolvedFromDuration: h } = i_(i),
    d = lu,
    m = lu
  function y() {
    const w = u ? -(u / 1e3) : 0,
      S = n - t,
      _ = c / (2 * Math.sqrt(l * f)),
      p = Math.sqrt(l / f) / 1e3
    if ((r === void 0 && (r = Math.min(Math.abs(n - t) / 100, 0.4)), _ < 1)) {
      const v = fl(p, _)
      ;(d = E => {
        const O = Math.exp(-_ * p * E)
        return n - O * (((w + _ * p * S) / v) * Math.sin(v * E) + S * Math.cos(v * E))
      }),
        (m = E => {
          const O = Math.exp(-_ * p * E)
          return (
            _ * p * O * ((Math.sin(v * E) * (w + _ * p * S)) / v + S * Math.cos(v * E)) -
            O * (Math.cos(v * E) * (w + _ * p * S) - v * S * Math.sin(v * E))
          )
        })
    } else if (_ === 1) d = v => n - Math.exp(-p * v) * (S + (w + p * S) * v)
    else {
      const v = p * Math.sqrt(_ * _ - 1)
      d = E => {
        const O = Math.exp(-_ * p * E),
          R = Math.min(v * E, 300)
        return n - (O * ((w + _ * p * S) * Math.sinh(R) + v * S * Math.cosh(R))) / v
      }
    }
  }
  return (
    y(),
    {
      next: w => {
        const S = d(w)
        if (h) o.done = w >= a
        else {
          const _ = m(w) * 1e3,
            p = Math.abs(_) <= s,
            v = Math.abs(n - S) <= r
          o.done = p && v
        }
        return (o.value = o.done ? n : S), o
      },
      flipTarget: () => {
        ;(u = -u), ([t, n] = [n, t]), y()
      },
    }
  )
}
yc.needsInterpolation = (e, t) => typeof e == 'string' || typeof t == 'string'
const lu = e => 0,
  Ld = (e, t, n) => {
    const s = t - e
    return s === 0 ? 1 : (n - e) / s
  },
  vc = (e, t, n) => -n * e + n * t + e,
  Dd = (e, t) => n => Math.max(Math.min(n, t), e),
  Bs = e => (e % 1 ? Number(e.toFixed(5)) : e),
  lr = /(-)?([\d]*\.?[\d])+/g,
  hl =
    /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  o_ =
    /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i
function Er(e) {
  return typeof e == 'string'
}
const wr = { test: e => typeof e == 'number', parse: parseFloat, transform: e => e },
  Hs = Object.assign(Object.assign({}, wr), { transform: Dd(0, 1) }),
  Wr = Object.assign(Object.assign({}, wr), { default: 1 }),
  bc = e => ({
    test: t => Er(t) && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`,
  }),
  An = bc('deg'),
  js = bc('%'),
  re = bc('px'),
  cu = Object.assign(Object.assign({}, js), { parse: e => js.parse(e) / 100, transform: e => js.transform(e * 100) }),
  Sc = (e, t) => n => !!((Er(n) && o_.test(n) && n.startsWith(e)) || (t && Object.prototype.hasOwnProperty.call(n, t))),
  Vd = (e, t, n) => s => {
    if (!Er(s)) return s
    const [r, i, o, l] = s.match(lr)
    return { [e]: parseFloat(r), [t]: parseFloat(i), [n]: parseFloat(o), alpha: l !== void 0 ? parseFloat(l) : 1 }
  },
  Pn = {
    test: Sc('hsl', 'hue'),
    parse: Vd('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: s = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      js.transform(Bs(t)) +
      ', ' +
      js.transform(Bs(n)) +
      ', ' +
      Bs(Hs.transform(s)) +
      ')',
  },
  l_ = Dd(0, 255),
  Co = Object.assign(Object.assign({}, wr), { transform: e => Math.round(l_(e)) }),
  fn = {
    test: Sc('rgb', 'red'),
    parse: Vd('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: n, alpha: s = 1 }) =>
      'rgba(' + Co.transform(e) + ', ' + Co.transform(t) + ', ' + Co.transform(n) + ', ' + Bs(Hs.transform(s)) + ')',
  }
function c_(e) {
  let t = '',
    n = '',
    s = '',
    r = ''
  return (
    e.length > 5
      ? ((t = e.substr(1, 2)), (n = e.substr(3, 2)), (s = e.substr(5, 2)), (r = e.substr(7, 2)))
      : ((t = e.substr(1, 1)),
        (n = e.substr(2, 1)),
        (s = e.substr(3, 1)),
        (r = e.substr(4, 1)),
        (t += t),
        (n += n),
        (s += s),
        (r += r)),
    { red: parseInt(t, 16), green: parseInt(n, 16), blue: parseInt(s, 16), alpha: r ? parseInt(r, 16) / 255 : 1 }
  )
}
const dl = { test: Sc('#'), parse: c_, transform: fn.transform },
  ot = {
    test: e => fn.test(e) || dl.test(e) || Pn.test(e),
    parse: e => (fn.test(e) ? fn.parse(e) : Pn.test(e) ? Pn.parse(e) : dl.parse(e)),
    transform: e => (Er(e) ? e : e.hasOwnProperty('red') ? fn.transform(e) : Pn.transform(e)),
  },
  $d = '${c}',
  Bd = '${n}'
function a_(e) {
  var t, n, s, r
  return (
    isNaN(e) &&
    Er(e) &&
    ((n = (t = e.match(lr)) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0) +
      ((r = (s = e.match(hl)) === null || s === void 0 ? void 0 : s.length) !== null && r !== void 0 ? r : 0) >
      0
  )
}
function Hd(e) {
  typeof e == 'number' && (e = `${e}`)
  const t = []
  let n = 0
  const s = e.match(hl)
  s && ((n = s.length), (e = e.replace(hl, $d)), t.push(...s.map(ot.parse)))
  const r = e.match(lr)
  return r && ((e = e.replace(lr, Bd)), t.push(...r.map(wr.parse))), { values: t, numColors: n, tokenised: e }
}
function jd(e) {
  return Hd(e).values
}
function Ud(e) {
  const { values: t, numColors: n, tokenised: s } = Hd(e),
    r = t.length
  return i => {
    let o = s
    for (let l = 0; l < r; l++) o = o.replace(l < n ? $d : Bd, l < n ? ot.transform(i[l]) : Bs(i[l]))
    return o
  }
}
const u_ = e => (typeof e == 'number' ? 0 : e)
function f_(e) {
  const t = jd(e)
  return Ud(e)(t.map(u_))
}
const Tr = { test: a_, parse: jd, createTransformer: Ud, getAnimatableNone: f_ },
  h_ = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
function d_(e) {
  let [t, n] = e.slice(0, -1).split('(')
  if (t === 'drop-shadow') return e
  const [s] = n.match(lr) || []
  if (!s) return e
  const r = n.replace(s, '')
  let i = h_.has(t) ? 1 : 0
  return s !== n && (i *= 100), t + '(' + i + r + ')'
}
const p_ = /([a-z-]*)\(.*?\)/g,
  pl = Object.assign(Object.assign({}, Tr), {
    getAnimatableNone: e => {
      const t = e.match(p_)
      return t ? t.map(d_).join(' ') : e
    },
  })
function Ao(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  )
}
function au({ hue: e, saturation: t, lightness: n, alpha: s }) {
  ;(e /= 360), (t /= 100), (n /= 100)
  let r = 0,
    i = 0,
    o = 0
  if (!t) r = i = o = n
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      c = 2 * n - l
    ;(r = Ao(c, l, e + 1 / 3)), (i = Ao(c, l, e)), (o = Ao(c, l, e - 1 / 3))
  }
  return { red: Math.round(r * 255), green: Math.round(i * 255), blue: Math.round(o * 255), alpha: s }
}
const m_ = (e, t, n) => {
    const s = e * e,
      r = t * t
    return Math.sqrt(Math.max(0, n * (r - s) + s))
  },
  g_ = [dl, fn, Pn],
  uu = e => g_.find(t => t.test(e)),
  Wd = (e, t) => {
    let n = uu(e),
      s = uu(t),
      r = n.parse(e),
      i = s.parse(t)
    n === Pn && ((r = au(r)), (n = fn)), s === Pn && ((i = au(i)), (s = fn))
    const o = Object.assign({}, r)
    return l => {
      for (const c in o) c !== 'alpha' && (o[c] = m_(r[c], i[c], l))
      return (o.alpha = vc(r.alpha, i.alpha, l)), n.transform(o)
    }
  },
  y_ = e => typeof e == 'number',
  v_ = (e, t) => n => t(e(n)),
  Kd = (...e) => e.reduce(v_)
function qd(e, t) {
  return y_(e) ? n => vc(e, t, n) : ot.test(e) ? Wd(e, t) : zd(e, t)
}
const Gd = (e, t) => {
    const n = [...e],
      s = n.length,
      r = e.map((i, o) => qd(i, t[o]))
    return i => {
      for (let o = 0; o < s; o++) n[o] = r[o](i)
      return n
    }
  },
  b_ = (e, t) => {
    const n = Object.assign(Object.assign({}, e), t),
      s = {}
    for (const r in n) e[r] !== void 0 && t[r] !== void 0 && (s[r] = qd(e[r], t[r]))
    return r => {
      for (const i in s) n[i] = s[i](r)
      return n
    }
  }
function fu(e) {
  const t = Tr.parse(e),
    n = t.length
  let s = 0,
    r = 0,
    i = 0
  for (let o = 0; o < n; o++) s || typeof t[o] == 'number' ? s++ : t[o].hue !== void 0 ? i++ : r++
  return { parsed: t, numNumbers: s, numRGB: r, numHSL: i }
}
const zd = (e, t) => {
    const n = Tr.createTransformer(t),
      s = fu(e),
      r = fu(t)
    return s.numHSL === r.numHSL && s.numRGB === r.numRGB && s.numNumbers >= r.numNumbers
      ? Kd(Gd(s.parsed, r.parsed), n)
      : o => `${o > 0 ? t : e}`
  },
  S_ = (e, t) => n => vc(e, t, n)
function __(e) {
  if (typeof e == 'number') return S_
  if (typeof e == 'string') return ot.test(e) ? Wd : zd
  if (Array.isArray(e)) return Gd
  if (typeof e == 'object') return b_
}
function E_(e, t, n) {
  const s = [],
    r = n || __(e[0]),
    i = e.length - 1
  for (let o = 0; o < i; o++) {
    let l = r(e[o], e[o + 1])
    if (t) {
      const c = Array.isArray(t) ? t[o] : t
      l = Kd(c, l)
    }
    s.push(l)
  }
  return s
}
function w_([e, t], [n]) {
  return s => n(Ld(e, t, s))
}
function T_(e, t) {
  const n = e.length,
    s = n - 1
  return r => {
    let i = 0,
      o = !1
    if ((r <= e[0] ? (o = !0) : r >= e[s] && ((i = s - 1), (o = !0)), !o)) {
      let c = 1
      for (; c < n && !(e[c] > r || c === s); c++);
      i = c - 1
    }
    const l = Ld(e[i], e[i + 1], r)
    return t[i](l)
  }
}
function Yd(e, t, { clamp: n = !0, ease: s, mixer: r } = {}) {
  const i = e.length
  iu(i === t.length),
    iu(!s || !Array.isArray(s) || s.length === i - 1),
    e[0] > e[i - 1] && ((e = [].concat(e)), (t = [].concat(t)), e.reverse(), t.reverse())
  const o = E_(t, s, r),
    l = i === 2 ? w_(e, o) : T_(e, o)
  return n ? c => l(ul(e[0], e[i - 1], c)) : l
}
const ro = e => t => 1 - e(1 - t),
  _c = e => t => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  C_ = e => t => Math.pow(t, e),
  Jd = e => t => t * t * ((e + 1) * t - e),
  A_ = e => {
    const t = Jd(e)
    return n => ((n *= 2) < 1 ? 0.5 * t(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))))
  },
  Xd = 1.525,
  O_ = 4 / 11,
  x_ = 8 / 11,
  N_ = 9 / 10,
  Zd = e => e,
  Ec = C_(2),
  R_ = ro(Ec),
  Qd = _c(Ec),
  ep = e => 1 - Math.sin(Math.acos(e)),
  tp = ro(ep),
  I_ = _c(tp),
  wc = Jd(Xd),
  P_ = ro(wc),
  M_ = _c(wc),
  k_ = A_(Xd),
  F_ = 4356 / 361,
  L_ = 35442 / 1805,
  D_ = 16061 / 1805,
  Ni = e => {
    if (e === 1 || e === 0) return e
    const t = e * e
    return e < O_
      ? 7.5625 * t
      : e < x_
        ? 9.075 * t - 9.9 * e + 3.4
        : e < N_
          ? F_ * t - L_ * e + D_
          : 10.8 * e * e - 20.52 * e + 10.72
  },
  V_ = ro(Ni),
  $_ = e => (e < 0.5 ? 0.5 * (1 - Ni(1 - e * 2)) : 0.5 * Ni(e * 2 - 1) + 0.5)
function B_(e, t) {
  return e.map(() => t || Qd).splice(0, e.length - 1)
}
function H_(e) {
  const t = e.length
  return e.map((n, s) => (s !== 0 ? s / (t - 1) : 0))
}
function j_(e, t) {
  return e.map(n => n * t)
}
function ti({ from: e = 0, to: t = 1, ease: n, offset: s, duration: r = 300 }) {
  const i = { done: !1, value: e },
    o = Array.isArray(t) ? t : [e, t],
    l = j_(s && s.length === o.length ? s : H_(o), r)
  function c() {
    return Yd(l, o, { ease: Array.isArray(n) ? n : B_(o, n) })
  }
  let f = c()
  return {
    next: u => ((i.value = f(u)), (i.done = u >= r), i),
    flipTarget: () => {
      o.reverse(), (f = c())
    },
  }
}
function U_({
  velocity: e = 0,
  from: t = 0,
  power: n = 0.8,
  timeConstant: s = 350,
  restDelta: r = 0.5,
  modifyTarget: i,
}) {
  const o = { done: !1, value: t }
  let l = n * e
  const c = t + l,
    f = i === void 0 ? c : i(c)
  return (
    f !== c && (l = f - t),
    {
      next: u => {
        const a = -l * Math.exp(-u / s)
        return (o.done = !(a > r || a < -r)), (o.value = o.done ? f : f + a), o
      },
      flipTarget: () => {},
    }
  )
}
const hu = { keyframes: ti, spring: yc, decay: U_ }
function W_(e) {
  if (Array.isArray(e.to)) return ti
  if (hu[e.type]) return hu[e.type]
  const t = new Set(Object.keys(e))
  return t.has('ease') || (t.has('duration') && !t.has('dampingRatio'))
    ? ti
    : t.has('dampingRatio') ||
        t.has('stiffness') ||
        t.has('mass') ||
        t.has('damping') ||
        t.has('restSpeed') ||
        t.has('restDelta')
      ? yc
      : ti
}
function np(e, t, n = 0) {
  return e - t - n
}
function K_(e, t, n = 0, s = !0) {
  return s ? np(t + -e, t, n) : t - (e - t) + n
}
function q_(e, t, n, s) {
  return s ? e >= t + n : e <= -n
}
const G_ = e => {
  const t = ({ delta: n }) => e(n)
  return { start: () => al.update(t, !0), stop: () => GS.update(t) }
}
function sp(e) {
  var t,
    n,
    {
      from: s,
      autoplay: r = !0,
      driver: i = G_,
      elapsed: o = 0,
      repeat: l = 0,
      repeatType: c = 'loop',
      repeatDelay: f = 0,
      onPlay: u,
      onStop: a,
      onComplete: h,
      onRepeat: d,
      onUpdate: m,
    } = e,
    y = Fd(e, [
      'from',
      'autoplay',
      'driver',
      'elapsed',
      'repeat',
      'repeatType',
      'repeatDelay',
      'onPlay',
      'onStop',
      'onComplete',
      'onRepeat',
      'onUpdate',
    ])
  let { to: w } = y,
    S,
    _ = 0,
    p = y.duration,
    v,
    E = !1,
    O = !0,
    R
  const x = W_(y)
  !((n = (t = x).needsInterpolation) === null || n === void 0) &&
    n.call(t, s, w) &&
    ((R = Yd([0, 100], [s, w], { clamp: !1 })), (s = 0), (w = 100))
  const C = x(Object.assign(Object.assign({}, y), { from: s, to: w }))
  function T() {
    _++,
      c === 'reverse'
        ? ((O = _ % 2 === 0), (o = K_(o, p, f, O)))
        : ((o = np(o, p, f)), c === 'mirror' && C.flipTarget()),
      (E = !1),
      d && d()
  }
  function I() {
    S.stop(), h && h()
  }
  function A(G) {
    if ((O || (G = -G), (o += G), !E)) {
      const X = C.next(Math.max(0, o))
      ;(v = X.value), R && (v = R(v)), (E = O ? X.done : o <= 0)
    }
    m == null || m(v), E && (_ === 0 && (p ?? (p = o)), _ < l ? q_(o, p, f, O) && T() : I())
  }
  function L() {
    u == null || u(), (S = i(A)), S.start()
  }
  return (
    r && L(),
    {
      stop: () => {
        a == null || a(), S.stop()
      },
    }
  )
}
function rp(e, t) {
  return t ? e * (1e3 / t) : 0
}
function z_({
  from: e = 0,
  velocity: t = 0,
  min: n,
  max: s,
  power: r = 0.8,
  timeConstant: i = 750,
  bounceStiffness: o = 500,
  bounceDamping: l = 10,
  restDelta: c = 1,
  modifyTarget: f,
  driver: u,
  onUpdate: a,
  onComplete: h,
  onStop: d,
}) {
  let m
  function y(p) {
    return (n !== void 0 && p < n) || (s !== void 0 && p > s)
  }
  function w(p) {
    return n === void 0 ? s : s === void 0 || Math.abs(n - p) < Math.abs(s - p) ? n : s
  }
  function S(p) {
    m == null || m.stop(),
      (m = sp(
        Object.assign(Object.assign({}, p), {
          driver: u,
          onUpdate: v => {
            var E
            a == null || a(v), (E = p.onUpdate) === null || E === void 0 || E.call(p, v)
          },
          onComplete: h,
          onStop: d,
        }),
      ))
  }
  function _(p) {
    S(Object.assign({ type: 'spring', stiffness: o, damping: l, restDelta: c }, p))
  }
  if (y(e)) _({ from: e, velocity: t, to: w(e) })
  else {
    let p = r * t + e
    typeof f < 'u' && (p = f(p))
    const v = w(p),
      E = v === n ? -1 : 1
    let O, R
    const x = C => {
      ;(O = R),
        (R = C),
        (t = rp(C - O, kd().delta)),
        ((E === 1 && C > v) || (E === -1 && C < v)) && _({ from: C, to: v, velocity: t })
    }
    S({
      type: 'decay',
      from: e,
      velocity: t,
      timeConstant: i,
      power: r,
      restDelta: c,
      modifyTarget: f,
      onUpdate: y(p) ? x : void 0,
    })
  }
  return { stop: () => (m == null ? void 0 : m.stop()) }
}
const ip = (e, t) => 1 - 3 * t + 3 * e,
  op = (e, t) => 3 * t - 6 * e,
  lp = e => 3 * e,
  Ri = (e, t, n) => ((ip(t, n) * e + op(t, n)) * e + lp(t)) * e,
  cp = (e, t, n) => 3 * ip(t, n) * e * e + 2 * op(t, n) * e + lp(t),
  Y_ = 1e-7,
  J_ = 10
function X_(e, t, n, s, r) {
  let i,
    o,
    l = 0
  do (o = t + (n - t) / 2), (i = Ri(o, s, r) - e), i > 0 ? (n = o) : (t = o)
  while (Math.abs(i) > Y_ && ++l < J_)
  return o
}
const Z_ = 8,
  Q_ = 0.001
function e1(e, t, n, s) {
  for (let r = 0; r < Z_; ++r) {
    const i = cp(t, n, s)
    if (i === 0) return t
    const o = Ri(t, n, s) - e
    t -= o / i
  }
  return t
}
const ni = 11,
  Kr = 1 / (ni - 1)
function t1(e, t, n, s) {
  if (e === t && n === s) return Zd
  const r = new Float32Array(ni)
  for (let o = 0; o < ni; ++o) r[o] = Ri(o * Kr, e, n)
  function i(o) {
    let l = 0,
      c = 1
    const f = ni - 1
    for (; c !== f && r[c] <= o; ++c) l += Kr
    --c
    const u = (o - r[c]) / (r[c + 1] - r[c]),
      a = l + u * Kr,
      h = cp(a, e, n)
    return h >= Q_ ? e1(o, a, e, n) : h === 0 ? a : X_(o, l, l + Kr, e, n)
  }
  return o => (o === 0 || o === 1 ? o : Ri(i(o), t, s))
}
const Oo = {}
var n1 = Object.defineProperty,
  s1 = (e, t, n) => (t in e ? n1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
  r1 = (e, t, n) => (s1(e, t + '', n), n)
class i1 {
  constructor() {
    r1(this, 'subscriptions', new Set())
  }
  add(t) {
    return this.subscriptions.add(t), () => this.subscriptions.delete(t)
  }
  notify(t, n, s) {
    if (this.subscriptions.size) for (const r of this.subscriptions) r(t, n, s)
  }
  clear() {
    this.subscriptions.clear()
  }
}
var o1 = Object.defineProperty,
  l1 = (e, t, n) => (t in e ? o1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
  Ft = (e, t, n) => (l1(e, typeof t != 'symbol' ? t + '' : t, n), n)
function du(e) {
  return !Number.isNaN(Number.parseFloat(e))
}
class c1 {
  constructor(t) {
    Ft(this, 'current'),
      Ft(this, 'prev'),
      Ft(this, 'timeDelta', 0),
      Ft(this, 'lastUpdated', 0),
      Ft(this, 'updateSubscribers', new i1()),
      Ft(this, 'stopAnimation'),
      Ft(this, 'canTrackVelocity', !1),
      Ft(this, 'updateAndNotify', n => {
        ;(this.prev = this.current), (this.current = n)
        const { delta: s, timestamp: r } = kd()
        this.lastUpdated !== r && ((this.timeDelta = s), (this.lastUpdated = r)),
          al.postRender(this.scheduleVelocityCheck),
          this.updateSubscribers.notify(this.current)
      }),
      Ft(this, 'scheduleVelocityCheck', () => al.postRender(this.velocityCheck)),
      Ft(this, 'velocityCheck', ({ timestamp: n }) => {
        this.canTrackVelocity || (this.canTrackVelocity = du(this.current)),
          n !== this.lastUpdated && (this.prev = this.current)
      }),
      (this.prev = this.current = t),
      (this.canTrackVelocity = du(this.current))
  }
  onChange(t) {
    return this.updateSubscribers.add(t)
  }
  clearListeners() {
    this.updateSubscribers.clear()
  }
  set(t) {
    this.updateAndNotify(t)
  }
  get() {
    return this.current
  }
  getPrevious() {
    return this.prev
  }
  getVelocity() {
    return this.canTrackVelocity
      ? rp(Number.parseFloat(this.current) - Number.parseFloat(this.prev), this.timeDelta)
      : 0
  }
  start(t) {
    return (
      this.stop(),
      new Promise(n => {
        const { stop: s } = t(n)
        this.stopAnimation = s
      }).then(() => this.clearAnimation())
    )
  }
  stop() {
    this.stopAnimation && this.stopAnimation(), this.clearAnimation()
  }
  isAnimating() {
    return !!this.stopAnimation
  }
  clearAnimation() {
    this.stopAnimation = null
  }
  destroy() {
    this.updateSubscribers.clear(), this.stop()
  }
}
function a1(e) {
  return new c1(e)
}
const { isArray: u1 } = Array
function f1() {
  const e = z({}),
    t = s => {
      const r = i => {
        e.value[i] && (e.value[i].stop(), e.value[i].destroy(), delete e.value[i])
      }
      s ? (u1(s) ? s.forEach(r) : r(s)) : Object.keys(e.value).forEach(r)
    },
    n = (s, r, i) => {
      if (e.value[s]) return e.value[s]
      const o = a1(r)
      return o.onChange(l => (i[s] = l)), (e.value[s] = o), o
    }
  return BS(t), { motionValues: e, get: n, stop: t }
}
function h1(e) {
  return Array.isArray(e)
}
function On() {
  return { type: 'spring', stiffness: 500, damping: 25, restDelta: 0.5, restSpeed: 10 }
}
function xo(e) {
  return { type: 'spring', stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restDelta: 0.01, restSpeed: 10 }
}
function d1(e) {
  return { type: 'spring', stiffness: 550, damping: e === 0 ? 100 : 30, restDelta: 0.01, restSpeed: 10 }
}
function No() {
  return { type: 'keyframes', ease: 'linear', duration: 300 }
}
function p1(e) {
  return { type: 'keyframes', duration: 800, values: e }
}
const pu = {
  default: d1,
  x: On,
  y: On,
  z: On,
  rotate: On,
  rotateX: On,
  rotateY: On,
  rotateZ: On,
  scaleX: xo,
  scaleY: xo,
  scale: xo,
  backgroundColor: No,
  color: No,
  opacity: No,
}
function ap(e, t) {
  let n
  return h1(t) ? (n = p1) : (n = pu[e] || pu.default), { to: t, ...n(t) }
}
const mu = { ...wr, transform: Math.round },
  up = {
    color: ot,
    backgroundColor: ot,
    outlineColor: ot,
    fill: ot,
    stroke: ot,
    borderColor: ot,
    borderTopColor: ot,
    borderRightColor: ot,
    borderBottomColor: ot,
    borderLeftColor: ot,
    borderWidth: re,
    borderTopWidth: re,
    borderRightWidth: re,
    borderBottomWidth: re,
    borderLeftWidth: re,
    borderRadius: re,
    radius: re,
    borderTopLeftRadius: re,
    borderTopRightRadius: re,
    borderBottomRightRadius: re,
    borderBottomLeftRadius: re,
    width: re,
    maxWidth: re,
    height: re,
    maxHeight: re,
    size: re,
    top: re,
    right: re,
    bottom: re,
    left: re,
    padding: re,
    paddingTop: re,
    paddingRight: re,
    paddingBottom: re,
    paddingLeft: re,
    margin: re,
    marginTop: re,
    marginRight: re,
    marginBottom: re,
    marginLeft: re,
    rotate: An,
    rotateX: An,
    rotateY: An,
    rotateZ: An,
    scale: Wr,
    scaleX: Wr,
    scaleY: Wr,
    scaleZ: Wr,
    skew: An,
    skewX: An,
    skewY: An,
    distance: re,
    translateX: re,
    translateY: re,
    translateZ: re,
    x: re,
    y: re,
    z: re,
    perspective: re,
    transformPerspective: re,
    opacity: Hs,
    originX: cu,
    originY: cu,
    originZ: re,
    zIndex: mu,
    filter: pl,
    WebkitFilter: pl,
    fillOpacity: Hs,
    strokeOpacity: Hs,
    numOctaves: mu,
  },
  Tc = e => up[e]
function ml(e, t) {
  return t && typeof e == 'number' && t.transform ? t.transform(e) : e
}
function m1(e, t) {
  let n = Tc(e)
  return n !== pl && (n = Tr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const g1 = {
  linear: Zd,
  easeIn: Ec,
  easeInOut: Qd,
  easeOut: R_,
  circIn: ep,
  circInOut: I_,
  circOut: tp,
  backIn: wc,
  backInOut: M_,
  backOut: P_,
  anticipate: k_,
  bounceIn: V_,
  bounceInOut: $_,
  bounceOut: Ni,
}
function gu(e) {
  if (Array.isArray(e)) {
    const [t, n, s, r] = e
    return t1(t, n, s, r)
  } else if (typeof e == 'string') return g1[e]
  return e
}
function y1(e) {
  return Array.isArray(e) && typeof e[0] != 'number'
}
function yu(e, t) {
  return e === 'zIndex'
    ? !1
    : !!(typeof t == 'number' || Array.isArray(t) || (typeof t == 'string' && Tr.test(t) && !t.startsWith('url(')))
}
function v1(e) {
  return Array.isArray(e.to) && e.to[0] === null && ((e.to = [...e.to]), (e.to[0] = e.from)), e
}
function b1({ ease: e, times: t, delay: n, ...s }) {
  const r = { ...s }
  return t && (r.offset = t), e && (r.ease = y1(e) ? e.map(gu) : gu(e)), n && (r.elapsed = -n), r
}
function S1(e, t, n) {
  return (
    Array.isArray(t.to) && (e.duration || (e.duration = 800)),
    v1(t),
    _1(e) || (e = { ...e, ...ap(n, t.to) }),
    { ...t, ...b1(e) }
  )
}
function _1({ delay: e, repeat: t, repeatType: n, repeatDelay: s, from: r, ...i }) {
  return !!Object.keys(i).length
}
function E1(e, t) {
  return e[t] || e.default || e
}
function w1(e, t, n, s, r) {
  const i = E1(s, e)
  let o = i.from === null || i.from === void 0 ? t.get() : i.from
  const l = yu(e, n)
  o === 'none' && l && typeof n == 'string' && (o = m1(e, n))
  const c = yu(e, o)
  function f(a) {
    const h = { from: o, to: n, velocity: s.velocity ? s.velocity : t.getVelocity(), onUpdate: d => t.set(d) }
    return i.type === 'inertia' || i.type === 'decay'
      ? z_({ ...h, ...i })
      : sp({
          ...S1(i, h, e),
          onUpdate: d => {
            h.onUpdate(d), i.onUpdate && i.onUpdate(d)
          },
          onComplete: () => {
            r && r(), a && a()
          },
        })
  }
  function u(a) {
    return t.set(n), r && r(), a && a(), { stop: () => {} }
  }
  return !c || !l || i.type === !1 ? u : f
}
function T1() {
  const { motionValues: e, stop: t, get: n } = f1()
  return {
    motionValues: e,
    stop: t,
    push: (r, i, o, l = {}, c) => {
      const f = o[r],
        u = n(r, f, o)
      if (l && l.immediate) {
        u.set(i)
        return
      }
      const a = w1(r, u, i, l, c)
      u.start(a)
    },
  }
}
function C1(e, t = {}, { motionValues: n, push: s, stop: r } = T1()) {
  const i = $e(t),
    o = z(!1)
  fe(
    n,
    a => {
      o.value = Object.values(a).filter(h => h.isAnimating()).length > 0
    },
    { immediate: !0, deep: !0 },
  )
  const l = a => {
      if (!i || !i[a]) throw new Error(`The variant ${a} does not exist.`)
      return i[a]
    },
    c = a => {
      typeof a == 'string' && (a = l(a))
      const h = Object.entries(a)
        .map(([m, y]) => {
          if (m !== 'transition') return new Promise(w => s(m, y, e, a.transition || ap(m, a[m]), w))
        })
        .filter(Boolean)
      async function d() {
        var m, y
        await Promise.all(h), (y = (m = a.transition) == null ? void 0 : m.onComplete) == null || y.call(m)
      }
      return Promise.all([d()])
    }
  return {
    isAnimating: o,
    apply: c,
    set: a => {
      const h = xi(a) ? a : l(a)
      Object.entries(h).forEach(([d, m]) => {
        d !== 'transition' && s(d, m, e, { immediate: !0 })
      })
    },
    leave: async a => {
      let h
      if ((i && (i.leave && (h = i.leave), !i.leave && i.initial && (h = i.initial)), !h)) {
        a()
        return
      }
      await c(h), a()
    },
    stop: r,
  }
}
const Cc = typeof window < 'u',
  A1 = () => Cc && (window.onpointerdown === null || void 0),
  O1 = () => Cc && (window.ontouchstart === null || void 0),
  x1 = () => Cc && (window.onmousedown === null || void 0)
function N1({ target: e, state: t, variants: n, apply: s }) {
  const r = $e(n),
    i = z(!1),
    o = z(!1),
    l = z(!1),
    c = ie(() => {
      let u = [...Object.keys(t.value || {})]
      return (
        r &&
          (r.hovered && (u = [...u, ...Object.keys(r.hovered)]),
          r.tapped && (u = [...u, ...Object.keys(r.tapped)]),
          r.focused && (u = [...u, ...Object.keys(r.focused)])),
        u
      )
    }),
    f = ie(() => {
      const u = {}
      Object.assign(u, t.value),
        i.value && r.hovered && Object.assign(u, r.hovered),
        o.value && r.tapped && Object.assign(u, r.tapped),
        l.value && r.focused && Object.assign(u, r.focused)
      for (const a in u) c.value.includes(a) || delete u[a]
      return u
    })
  r.hovered &&
    (kt(e, 'mouseenter', () => (i.value = !0)),
    kt(e, 'mouseleave', () => {
      ;(i.value = !1), (o.value = !1)
    })),
    r.tapped &&
      (x1() && (kt(e, 'mousedown', () => (o.value = !0)), kt(e, 'mouseup', () => (o.value = !1))),
      A1() && (kt(e, 'pointerdown', () => (o.value = !0)), kt(e, 'pointerup', () => (o.value = !1))),
      O1() && (kt(e, 'touchstart', () => (o.value = !0)), kt(e, 'touchend', () => (o.value = !1)))),
    r.focused && (kt(e, 'focus', () => (l.value = !0)), kt(e, 'blur', () => (l.value = !1))),
    fe([i, o, l], () => {
      s(f.value)
    })
}
function R1({ set: e, target: t, variants: n, variant: s }) {
  const r = $e(n)
  fe(
    () => t,
    () => {
      r && (r.initial && (e('initial'), (s.value = 'initial')), r.enter && (s.value = 'enter'))
    },
    { immediate: !0, flush: 'pre' },
  )
}
function I1({ state: e, apply: t }) {
  fe(
    e,
    n => {
      n && t(n)
    },
    { immediate: !0 },
  )
}
function fp({ target: e, variants: t, variant: n }) {
  const s = $e(t)
  s &&
    (s.visible || s.visibleOnce) &&
    US(e, ([{ isIntersecting: r }]) => {
      s.visible
        ? r
          ? (n.value = 'visible')
          : (n.value = 'initial')
        : s.visibleOnce &&
          (r && n.value !== 'visibleOnce' ? (n.value = 'visibleOnce') : n.value || (n.value = 'initial'))
    })
}
function P1(e, t = { syncVariants: !0, lifeCycleHooks: !0, visibilityHooks: !0, eventListeners: !0 }) {
  t.lifeCycleHooks && R1(e), t.syncVariants && I1(e), t.visibilityHooks && fp(e), t.eventListeners && N1(e)
}
function hp(e = {}) {
  const t = ut({ ...e }),
    n = z({})
  return (
    fe(
      t,
      () => {
        const s = {}
        for (const [r, i] of Object.entries(t)) {
          const o = Tc(r),
            l = ml(i, o)
          s[r] = l
        }
        n.value = s
      },
      { immediate: !0, deep: !0 },
    ),
    { state: t, style: n }
  )
}
function Ac(e, t) {
  fe(
    () => $s(e),
    n => {
      n && t(n)
    },
    { immediate: !0 },
  )
}
const M1 = { x: 'translateX', y: 'translateY', z: 'translateZ' }
function dp(e = {}, t = !0) {
  const n = ut({ ...e }),
    s = z('')
  return (
    fe(
      n,
      r => {
        let i = '',
          o = !1
        if (t && (r.x || r.y || r.z)) {
          const l = [r.x || 0, r.y || 0, r.z || 0].map(c => ml(c, re)).join(',')
          ;(i += `translate3d(${l}) `), (o = !0)
        }
        for (const [l, c] of Object.entries(r)) {
          if (t && (l === 'x' || l === 'y' || l === 'z')) continue
          const f = Tc(l),
            u = ml(c, f)
          i += `${M1[l] || l}(${u}) `
        }
        t && !o && (i += 'translateZ(0px) '), (s.value = i.trim())
      },
      { immediate: !0, deep: !0 },
    ),
    { state: n, transform: s }
  )
}
const k1 = ['', 'X', 'Y', 'Z'],
  F1 = ['perspective', 'translate', 'scale', 'rotate', 'skew'],
  pp = ['transformPerspective', 'x', 'y', 'z']
F1.forEach(e => {
  k1.forEach(t => {
    const n = e + t
    pp.push(n)
  })
})
const L1 = new Set(pp)
function Oc(e) {
  return L1.has(e)
}
const D1 = new Set(['originX', 'originY', 'originZ'])
function mp(e) {
  return D1.has(e)
}
function V1(e) {
  const t = {},
    n = {}
  return (
    Object.entries(e).forEach(([s, r]) => {
      Oc(s) || mp(s) ? (t[s] = r) : (n[s] = r)
    }),
    { transform: t, style: n }
  )
}
function $1(e) {
  const { transform: t, style: n } = V1(e),
    { transform: s } = dp(t),
    { style: r } = hp(n)
  return s.value && (r.value.transform = s.value), r.value
}
function B1(e, t) {
  let n, s
  const { state: r, style: i } = hp()
  return (
    Ac(e, o => {
      s = o
      for (const l of Object.keys(up)) o.style[l] === null || o.style[l] === '' || Oc(l) || mp(l) || (r[l] = o.style[l])
      n && Object.entries(n).forEach(([l, c]) => (o.style[l] = c)), t && t(r)
    }),
    fe(
      i,
      o => {
        if (!s) {
          n = o
          return
        }
        for (const l in o) s.style[l] = o[l]
      },
      { immediate: !0 },
    ),
    { style: r }
  )
}
function H1(e) {
  const t = e.trim().split(/\) |\)/)
  if (t.length === 1) return {}
  const n = s =>
    s.endsWith('px') || s.endsWith('deg') ? Number.parseFloat(s) : Number.isNaN(Number(s)) ? Number(s) : s
  return t.reduce((s, r) => {
    if (!r) return s
    const [i, o] = r.split('('),
      c = o.split(',').map(u => n(u.endsWith(')') ? u.replace(')', '') : u.trim())),
      f = c.length === 1 ? c[0] : c
    return { ...s, [i]: f }
  }, {})
}
function j1(e, t) {
  Object.entries(H1(t)).forEach(([n, s]) => {
    const r = ['x', 'y', 'z']
    if (n === 'translate3d') {
      if (s === 0) {
        r.forEach(i => (e[i] = 0))
        return
      }
      s.forEach((i, o) => (e[r[o]] = i))
      return
    }
    if (((s = Number.parseFloat(`${s}`)), n === 'translateX')) {
      e.x = s
      return
    }
    if (n === 'translateY') {
      e.y = s
      return
    }
    if (n === 'translateZ') {
      e.z = s
      return
    }
    e[n] = s
  })
}
function U1(e, t) {
  let n, s
  const { state: r, transform: i } = dp()
  return (
    Ac(e, o => {
      ;(s = o), o.style.transform && j1(r, o.style.transform), n && (o.style.transform = n), t && t(r)
    }),
    fe(
      i,
      o => {
        if (!s) {
          n = o
          return
        }
        s.style.transform = o
      },
      { immediate: !0 },
    ),
    { transform: r }
  )
}
function W1(e) {
  return Object.entries(e)
}
function K1(e, t) {
  const n = ut({}),
    s = o => Object.entries(o).forEach(([l, c]) => (n[l] = c)),
    { style: r } = B1(e, s),
    { transform: i } = U1(e, s)
  return (
    fe(
      n,
      o => {
        W1(o).forEach(([l, c]) => {
          const f = Oc(l) ? i : r
          ;(f[l] && f[l] === c) || (f[l] = c)
        })
      },
      { immediate: !0, deep: !0 },
    ),
    Ac(e, () => t),
    { motionProperties: n, style: r, transform: i }
  )
}
function q1(e = {}) {
  const t = $e(e),
    n = z()
  return {
    state: ie(() => {
      if (n.value) return t[n.value]
    }),
    variant: n,
  }
}
function G1(e, t = {}, n) {
  const { motionProperties: s } = K1(e),
    { variant: r, state: i } = q1(t),
    o = C1(s, t),
    l = { target: e, variant: r, variants: t, state: i, motionProperties: s, ...o }
  return P1(l, n), l
}
const gp = ['delay', 'duration'],
  z1 = ['initial', 'enter', 'leave', 'visible', 'visible-once', 'visibleOnce', 'hovered', 'tapped', 'focused', ...gp]
function Y1(e) {
  return gp.includes(e)
}
function J1(e, t) {
  const n = e.props ? e.props : e.data && e.data.attrs ? e.data.attrs : {}
  if (n) {
    n.variants && xi(n.variants) && (t.value = { ...t.value, ...n.variants })
    for (let s of z1)
      if (!(!n || !n[s])) {
        if (Y1(s) && typeof n[s] == 'number') {
          for (const r of ['enter', 'visible', 'visibleOnce']) {
            const i = t.value[r]
            i != null && (i.transition ?? (i.transition = {}), (i.transition[s] = n[s]))
          }
          continue
        }
        if (xi(n[s])) {
          const r = n[s]
          s === 'visible-once' && (s = 'visibleOnce'), (t.value[s] = r)
        }
      }
  }
}
function RE(e, t = !1) {
  return {
    created: (r, i, o) => {
      const l = i.value && typeof i.value == 'string' ? i.value : o.key
      l && Oo[l] && Oo[l].stop()
      const c = t ? structuredClone(ce(e) || {}) : {},
        f = z(c)
      typeof i.value == 'object' && (f.value = i.value), J1(o, f)
      const a = G1(r, f, { eventListeners: !0, lifeCycleHooks: !0, syncVariants: !0, visibilityHooks: !1 })
      ;(r.motionInstance = a), l && (Oo[l] = a)
    },
    mounted: (r, i, o) => {
      r.motionInstance && fp(r.motionInstance)
    },
    getSSRProps(r, i) {
      let { initial: o } = r.value || (i && (i == null ? void 0 : i.props)) || {}
      o = $e(o)
      const l = FS({}, {}, o || {})
      return !l || Object.keys(l).length === 0 ? void 0 : { style: $1(l) }
    },
  }
}
export {
  vE as $,
  th as A,
  $e as B,
  Tt as C,
  Ff as D,
  fe as E,
  Ve as F,
  qi as G,
  cf as H,
  lf as I,
  Le as J,
  wn as K,
  Al as L,
  dr as M,
  ut as N,
  ur as O,
  Qm as P,
  Q1 as Q,
  nE as R,
  NE as S,
  hE as T,
  yE as U,
  iE as V,
  Hn as W,
  EE as X,
  ce as Y,
  fE as Z,
  AE as _,
  Mm as a,
  gE as a0,
  aE as a1,
  uE as a2,
  pE as a3,
  lE as a4,
  CE as a5,
  eE as a6,
  RE as a7,
  Z1 as a8,
  X1 as a9,
  tE as aA,
  og as aB,
  dE as aC,
  rE as aD,
  Xt as aE,
  Pe as aF,
  mn as aG,
  Wl as aa,
  wE as ab,
  Ku as ac,
  oE as ad,
  Fm as ae,
  bi as af,
  lg as ag,
  bE as ah,
  tg as ai,
  Te as aj,
  SE as ak,
  tu as al,
  TE as am,
  me as an,
  iv as ao,
  ig as ap,
  Ay as aq,
  yS as ar,
  Jy as as,
  ah as at,
  OE as au,
  xE as av,
  cE as aw,
  sE as ax,
  mE as ay,
  _E as az,
  ey as b,
  di as c,
  fr as d,
  Ul as e,
  ag as f,
  ry as g,
  cr as h,
  ar as i,
  lv as j,
  Il as k,
  Ee as l,
  Gf as m,
  En as n,
  Xs as o,
  Pm as p,
  Np as q,
  rg as r,
  qf as s,
  z as t,
  zo as u,
  zi as v,
  km as w,
  Tu as x,
  ju as y,
  ie as z,
}
