// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Profile from './Profile'

const props = {
  url: '/profile/lorem',
  name: 'Name',
  location: {}
}

describe('Profile view', () => {
  it('should render without crashing', () => {
    const component = shallow(<Profile {...props} />)
    expect(component.find('.App').length).toBe(1)
  })
})
