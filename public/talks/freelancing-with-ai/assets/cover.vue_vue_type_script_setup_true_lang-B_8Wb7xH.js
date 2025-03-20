import { d as a, z as l, o as c, b as i, e as d, f as u, h as f } from './modules/vue-BITYyB3i.js'
import { u as p } from './slidev/context-B7EsKp3R.js'
function n(e) {
  return e.startsWith('/') ? '/talks/freelancing-with-ai/' + e.slice(1) : e
}
function m(e, s = !1) {
  const t = e && ['#', 'rgb', 'hsl'].some(r => e.indexOf(r) === 0),
    o = {
      background: t ? e : void 0,
      color: e && !t ? 'white' : void 0,
      backgroundImage: t ? void 0 : e ? (s ? `linear-gradient(#0005, #0008), url(${n(e)})` : `url("${n(e)}")`) : void 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }
  return o.background || delete o.background, o
}
const v = { class: 'my-auto w-full' },
  _ = a({
    __name: 'cover',
    props: { background: { default: 'https://source.unsplash.com/collection/94734566/1920x1080' } },
    setup(e) {
      p()
      const s = e,
        t = l(() => m(s.background, !0))
      return (o, r) => (
        c(),
        i(
          'div',
          { class: 'slidev-layout cover text-center', style: f(t.value) },
          [d('div', v, [u(o.$slots, 'default')])],
          4,
        )
      )
    },
  })
export { _ }
