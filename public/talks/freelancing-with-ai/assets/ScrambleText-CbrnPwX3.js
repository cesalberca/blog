import { t as n, E as b, K as d, M as h, o as I, b as g, x as S } from './modules/vue-BITYyB3i.js'
import { u as R } from './slidev/context-B7EsKp3R.js'
const m = 2,
  p = 50,
  T = 1e4,
  k = {
    __name: 'ScrambleText',
    props: { text: { type: String, required: !0 } },
    setup(x) {
      R()
      const o = x,
        s = n(''),
        l = n(0),
        u = n(!1),
        c = n(!1),
        i = n(!1)
      let t = null
      const v = n(null),
        E = e => {
          const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
          return Array.from({ length: e }, () => a[Math.floor(Math.random() * a.length)]).join('')
        },
        f = () => {
          if (c.value || !i.value) return
          const e = l.value + 1,
            a = o.text
              .split('')
              .map((r, _) => (e / m > _ ? r : r === ' ' ? ' ' : E(1)))
              .join('')
          ;(s.value = a),
            (l.value = e),
            e >= o.text.length * m &&
              ((s.value = o.text),
              (l.value = 0),
              (u.value = !0),
              (c.value = !0),
              setTimeout(() => {
                ;(c.value = !1), (u.value = !1), (i.value = !0), (t = setInterval(f, p))
              }, T))
        }
      return (
        b(u, e => {
          e && t && (clearInterval(t), (t = null))
        }),
        d(() => {
          s.value = ''
          const e = new IntersectionObserver(
            a => {
              a.forEach(r => {
                r.isIntersecting && ((i.value = !0), (t = setInterval(f, p)), e.unobserve(r.target))
              })
            },
            { threshold: 0.1 },
          )
          v.value && e.observe(v.value)
        }),
        h(() => {
          t && clearInterval(t)
        }),
        (e, a) => (
          I(),
          g(
            'span',
            { class: 'scramble-text relative font-mono font-black', ref_key: 'textRef', ref: v },
            S(s.value),
            513,
          )
        )
      )
    },
  }
export { k as _ }
