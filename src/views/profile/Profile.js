// @flow

import * as React from 'react'

import profilesData from '../../feeds/profiles.json'
import Header from '../../components/header/Header'

type Props = {
  location: Object,
}

type State = {
  url: string,
  name: string
}

class Profile extends React.Component<Props, State> {
  state = {
    url: '',
    name: ''
  }

  componentWillMount () {
    this.updateState()
  }

  componentDidUpdate (nextProps: Props, nextState: State) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.updateState()
    }
  }

  updateState = () => {
    const profile = profilesData.filter(profile => profile.url === this.props.location.pathname)
    this.setState(...profile)
  }

  render () {
    const { name } = this.state

    return (
      <div className='App'>
        <Header />
        <header className='App-header'>
          <h1 className='App-title'>Profile: {name}</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default Profile
