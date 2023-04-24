import { render } from '@testing-library/react-native'

import App from '../App'

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = render(<App />).toJSON()
    // const tree = render.create(<App />).toJSON()
    expect(tree.children.length).toBe(1)
  })

  it('renders correctly', () => {
    // const tree = render.create(<App />).toJSON()
    const tree = render(<App />)
    expect(tree).toMatchSnapshot()
  })
})
