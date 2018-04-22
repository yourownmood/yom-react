// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { createMemoryHistory } from 'history'

import { Header } from './Header'

describe('Header', () => {
  it('should render without crashing', () => {
    const history = createMemoryHistory('/home')
    const component = shallow(<Header history={history} />)
    expect(component.find('.header').length).toBe(1)
  })
})
