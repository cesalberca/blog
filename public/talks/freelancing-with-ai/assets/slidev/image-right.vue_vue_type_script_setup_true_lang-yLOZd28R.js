import { d as o, z as r, o as n, b as i, e as s, f as c, i as d, h as u } from '../modules/vue-BITYyB3i.js'
import { h as f } from './layoutHelper-DV4UY9LA.js'
const m = { class: 'grid grid-cols-2 w-full h-full auto-rows-fr' },
  _ = o({
    __name: 'image-right',
    props: { image: { type: String }, class: { type: String }, backgroundSize: { type: String, default: 'cover' } },
    setup(a) {
      const e = a,
        l = r(() => f(e.image, !1, e.backgroundSize))
      return (t, p) => (
        n(),
        i('div', m, [
          s('div', { class: d(['slidev-layout default', e.class]) }, [c(t.$slots, 'default')], 2),
          s('div', { class: 'w-full h-full', style: u(l.value) }, null, 4),
        ])
      )
    },
  })
export { _ }
