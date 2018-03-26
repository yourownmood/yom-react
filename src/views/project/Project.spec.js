// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Project from './Project'

const props = {
  url: '/project/lorem',
  heroTitle: 'heroTitle',
  location: {}
}

describe('Project view', () => {
  it('should render without crashing', () => {
    const component = shallow(<Project {...props} />)
    expect(component.find('.App').length).toBe(1)
  })
})
