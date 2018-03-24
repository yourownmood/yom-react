// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'

describe('Header', () => {
  it('should render without crashing', () => {
    const component = shallow(<Header />)
    expect(component.find('.header').length).toBe(1)
  })
})
