// @flow

import React from 'react'
import { shallow } from 'enzyme'

import About from './About'

describe('About view', () => {
  it('should render without crashing', () => {
    const component = shallow(<About />)
    expect(component.find('.App').length).toBe(1)
  })
})
