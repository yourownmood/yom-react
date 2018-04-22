// @flow

import * as React from 'react'

import projectsData from '../../feeds/projects.json'

type Props = {
  location: Object
}

type State = {
  url: string,
  heroTitle: string
}

class Project extends React.Component<Props, State> {
  state = {
    url: '',
    heroTitle: ''
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
    const project = projectsData.filter(project => project.url === this.props.location.pathname)
    this.setState(...project)
  }

  render () {
    const { heroTitle } = this.state

    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Project: {heroTitle}</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default Project
