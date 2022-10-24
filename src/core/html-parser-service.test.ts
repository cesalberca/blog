import { HtmlParserService } from './html-parser-service'
import { jest } from '@jest/globals'
import type { Global } from './global'

describe('HtmlParserService', () => {
  it('should parse html', () => {
    const { htmlParserService, parseFromStringMock } = setup()
    parseFromStringMock.mockReturnValue({
      body: {
        textContent: 'foo',
      },
    })

    const actual = htmlParserService.parseToPlainText('text')

    expect(actual).toBe('foo')
  })

  it('should get default value', () => {
    const { htmlParserService, parseFromStringMock } = setup()
    parseFromStringMock.mockReturnValue({
      body: {
        textContent: null,
      },
    })

    const actual = htmlParserService.parseToPlainText('text')

    expect(actual).toBe('')
  })
})

function setup() {
  const parseFromStringMock = jest.fn().mockReturnValue({
    body: {
      textContent: 'foo',
    },
  })
  const htmlParserService = new HtmlParserService({
    DOMParser: class {
      parseFromString = parseFromStringMock
    },
  } as unknown as Global)
  return { parseFromStringMock, htmlParserService }
}
