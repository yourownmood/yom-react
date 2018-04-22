// @flow

import * as React from 'react'
import { Route, Switch } from 'react-static'
import { withRouter, type Location } from 'react-router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Header from './components/header/Header'
import Home from './views/home/Home'
import About from './views/about/About'
import Contact from './views/contact/Contact'
import Project from './views/project/Project'
import Profile from './views/profile/Profile'

type Props = {
  location: Location
}

class Routes extends React.Component<Props> {
  render () {
    const current = this.props.location.pathname.split('/')[1]
    const className = current !== 'project' ? 'page-transition' : ''

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={current}
            timeout={1000}
            classNames={className}
            mountOnEnter
            unmountOnExit
          >
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/project/:client' component={Project} />
              <Route exact path='/profile/:profile' component={Profile} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
}

export { Routes }
export default withRouter(Routes)
