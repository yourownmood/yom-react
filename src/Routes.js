// @flow

import * as React from 'react'
import { Route, Switch } from 'react-static'

import Home from './views/home/Home'
import Project from './views/project/Project'
import Contact from './views/contact/Contact'

type Props = {}

class Routes extends React.Component<Props> {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/project/:client' component={Project} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    )
  }
}

export default Routes
