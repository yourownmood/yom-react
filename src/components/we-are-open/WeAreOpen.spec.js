// @flow

import React from 'react'
import { shallow } from 'enzyme'

import WeAreOpen from './WeAreOpen'

const props = {
  title: 'Title',
  children: 'Text<br/>Text'
}

describe('WeAreOpen', () => {
  it('should render without crashing', () => {
    const component = shallow(<WeAreOpen {...props} />)
    expect(component.find('.we-are-open').length).toBe(1)
  })
})
