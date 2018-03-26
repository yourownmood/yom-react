// @flow

import * as React from 'react'
import { Route, Switch } from 'react-static'

import Home from './views/home/Home'
import About from './views/about/About'
import Contact from './views/contact/Contact'
import Project from './views/project/Project'
import Profile from './views/profile/Profile'

type Props = {}

class Routes extends React.Component<Props> {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/project/:client' component={Project} />
        <Route exact path='/profile/:profile' component={Profile} />
      </Switch>
    )
  }
}

export default Routes
