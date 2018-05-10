// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Logo from './Logo'

describe('Logo', () => {
  it('should render without crashing', () => {
    const component = shallow(<Logo />)
    expect(component.find('.logo').length).toBe(1)
  })
})
