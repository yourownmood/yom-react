// @flow

import React from 'react'
import { shallow } from 'enzyme'

import ScrollBox from './ScrollBox'

const props = {
  onToggleClick: jest.fn()
}

describe('ScrollBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<ScrollBox {...props} />)
    expect(component.find('.scroll-box').length).toBe(1)
  })
})
