import { useCanonicalUrl } from './use-canonical-url'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/bar',
      locale: 'en',
    }
  },
}))

describe('useCanonicalUrl', () => {
  const env = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...env }
  })

  afterEach(() => {
    process.env = env
  })

  it('should set correct url', () => {
    process.env.NEXT_PUBLIC_URL = 'foo'

    const actual = useCanonicalUrl()

    expect(actual).toBe('foo/en/bar')
  })
})
