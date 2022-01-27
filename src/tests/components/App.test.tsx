import React from 'react'
import { render } from '@testing-library/react'

import App from '../../components/App'

test('Should render h1 element with expected text', () => {
  const { getByText } = render(<App />)
  expect(getByText('3 Column Preview Card Component')).toBeTruthy()
})
