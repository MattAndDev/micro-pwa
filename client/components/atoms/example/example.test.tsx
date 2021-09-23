import { h } from 'preact'
import { render } from '@testing-library/preact'
import { Example } from './example'

it('renders correctly', () => {
  const { container } = render(<Example type="button">Oh hi!</Example>)
  expect(container.firstChild).toMatchSnapshot()
})
