// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'

const props = {
  pathname: '/contact'
}

describe('Header', () => {
  it('should render without crashing', () => {
    const component = shallow(<Header {...props} />)
    expect(component.find('.header').length).toBe(1)
  })

  describe('projectIsOpen', () => {
    it('should toggle CSSTransition when projectIsOpen', () => {
      const component = shallow(<Header {...props} />)
      component.setState({ projectIsOpen: true })
      expect(component.find('CSSTransition')).toHaveLength(1)
      component.setState({ projectIsOpen: false })
      expect(component.find('CSSTransition')).toHaveLength(0)
    })

    it('should handleProjectToggle correctly', () => {
      const component = shallow(<Header {...props} />)
      component.instance().handleProjectToggle()
      expect(component.state()).toHaveProperty('projectIsOpen', true)
      component.instance().handleProjectToggle()
      expect(component.state()).toHaveProperty('projectIsOpen', false)
    })

    it('should setState for projectIsOpen after a route change', () => {
      const component = shallow(<Header {...props} />)
      component.setState({ isOpen: true })
      component.setProps({ pathname: '/about' })
      expect(component.state()).toHaveProperty('projectIsOpen', false)
    })
  })
  describe('hamburgerIsOpen', () => {
    it('should toggle CSSTransition when projectIsOpen', () => {
      const component = shallow(<Header {...props} />)
      component.setState({ hamburgerIsOpen: true })
      expect(component.find('Navigation')).toHaveLength(2)
      component.setState({ hamburgerIsOpen: false })
      expect(component.find('Navigation')).toHaveLength(1)
    })

    it('should handleHamburgerToggle correctly', () => {
      const component = shallow(<Header {...props} />)
      component.instance().handleHamburgerToggle()
      expect(component.state()).toHaveProperty('hamburgerIsOpen', true)
      component.instance().handleHamburgerToggle()
      expect(component.state()).toHaveProperty('hamburgerIsOpen', false)
    })
  })
})
