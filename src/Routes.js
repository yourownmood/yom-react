// @flow

import * as React from 'react'
import { Router, Route, Switch } from 'react-static'

import Home from './views/home/Home'
import Contact from './views/contact/Contact'

type Props = {}

class Routes extends React.Component<Props> {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Router>
    )
  }
}

export default Routes
