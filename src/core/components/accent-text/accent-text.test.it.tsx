import { describe, it, expect } from 'vitest'
import { render } from 'vitest-browser-react'
import { AccentText } from '@/core/components/accent-text/accent-text'

describe('AccentText', () => {
  it('renders the provided text', async () => {
    const screen = render(<AccentText>Hello world</AccentText>)

    const el = await screen.findByText('Hello world')

    await expect.element(el).toHaveTextContent('Hello world')
  })
})
