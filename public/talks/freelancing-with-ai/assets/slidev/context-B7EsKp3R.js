import { a6 as t, ac as a, t as j, z as m, aD as $ } from '../modules/vue-BITYyB3i.js'
import {
  R as f,
  ab as C,
  ad as x,
  aa as R,
  a8 as S,
  a9 as p,
  a7 as v,
  a6 as T,
  ae as E,
  af as D,
} from '../index-BivI_MQ5.js'
function A() {
  const n = t(x),
    o = a(n, 'nav'),
    e = t(R).value,
    s = a(e, 'current'),
    c = t(S),
    i = t(p),
    r = t(v, {}),
    l = t(T, void 0),
    u = t(f, j(1)),
    d = t(
      C,
      m(() => 1),
    )
  return {
    $slidev: n,
    $nav: o,
    $clicksContext: e,
    $clicks: s,
    $page: c,
    $route: l,
    $renderContext: i,
    $frontmatter: r,
    $scale: u,
    $zoom: d,
  }
}
function L(n, o) {
  return { ...$(n, o === 0 ? E : D), frontmatter: n }
}
export { L as f, A as u }
