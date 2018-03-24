// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Home from './Home'

describe('Home view', () => {
  it('should render without crashing', () => {
    const component = shallow(<Home />)
    expect(component.find('.App').length).toBe(1)
  })
})
