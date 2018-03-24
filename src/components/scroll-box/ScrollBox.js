// @flow

import * as React from 'react'

import './ScrollBox.css'

import projectsData from '../../feeds/projects.json'
import ScrollBoxItem from '../scroll-box-item/ScrollBoxItem'

type Props = {}

class ScrollBox extends React.PureComponent<Props> {
  render () {
    return (
      <div className='scroll-box'>
        {projectsData && projectsData.length &&
          <ul>
            {projectsData.map((project, i) => (
              <ScrollBoxItem
                key={`${project.url}${i}`}
                title={project.heroTitle}
              />
            ))}
          </ul>
        }
      </div>
    )
  }
}

export default ScrollBox
