import React from 'react'
import { shallow } from 'enzyme'

import Contact from './Contact'

describe('Contact view', () => {
  it('should render without crashing', () => {
    const component = shallow(<Contact />)
    expect(component.find('.App').length).toBe(1)
  })
})
