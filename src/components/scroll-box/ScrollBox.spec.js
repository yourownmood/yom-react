// @flow

import React from 'react'
import { shallow } from 'enzyme'

import ScrollBox from './ScrollBox'

describe('ScrollBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<ScrollBox />)
    expect(component.find('.scroll-box').length).toBe(1)
  })
})
