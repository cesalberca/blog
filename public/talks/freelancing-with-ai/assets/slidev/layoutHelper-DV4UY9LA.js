function r(e) {
  return e.startsWith('/') ? '/talks/freelancing-with-ai/' + e.slice(1) : e
}
function s(e, o = !1, n = 'cover') {
  const t = e && (e[0] === '#' || e.startsWith('rgb')),
    i = {
      background: t ? e : void 0,
      color: e && !t ? 'white' : void 0,
      backgroundImage: t ? void 0 : e ? (o ? `linear-gradient(#0005, #0008), url(${r(e)})` : `url("${r(e)}")`) : void 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: n,
    }
  return (i.background || delete i.background, i)
}
export { s as h }
