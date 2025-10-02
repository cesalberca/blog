import { d as s, z as l, o as r, b as n, f as c, h as i } from '../modules/vue-BITYyB3i.js'
import { h as m } from './layoutHelper-DV4UY9LA.js'
const f = s({
  __name: 'image',
  props: { image: { type: String }, backgroundSize: { type: String, default: 'cover' } },
  setup(a) {
    const e = a,
      o = l(() => m(e.image, !1, e.backgroundSize))
    return (t, p) => (
      r(),
      n('div', { class: 'slidev-layout w-full h-full', style: i(o.value) }, [c(t.$slots, 'default')], 4)
    )
  },
})
export { f as _ }
