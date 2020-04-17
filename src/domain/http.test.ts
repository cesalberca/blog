import { FileLoader } from './file-loader'
import { Fetcher } from './fetcher'

describe('FileLoader', () => {
  it('should get a file as text', async () => {
    const { fetcher, fileLoader } = setup()

    await fileLoader.loadFrom('foo')

    expect(fetcher.fetch).toHaveBeenCalledWith('foo')
  })
})

function setup() {
  const fetcher: Fetcher = {
    fetch: jest.fn().mockResolvedValue({ text: () => {}, status: 200, ok: true })
  }

  return {
    fetcher,
    fileLoader: new FileLoader(fetcher)
  }
}
