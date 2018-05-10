// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Navigation from './Navigation'

describe('Navigation', () => {
  it('should render without crashing', () => {
    const component = shallow(<Navigation handleToggle={jest.fn()} />)
    expect(component.find('.navigation').length).toBe(1)
  })
})
