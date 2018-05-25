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

  it('should update state on page change', () => {
    const component = shallow(<Project {...props} />)
    const spyUpdateState = jest.spyOn(component.instance(), 'updateState')
    component.setProps({ location: { pathname: '/about' } })
    expect(spyUpdateState).toHaveBeenCalled()
  })
})
