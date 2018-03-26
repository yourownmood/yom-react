// @flow

import * as React from 'react'

import projectsData from '../../feeds/projects.json'
import ScrollBoxItem from '../scroll-box-item/ScrollBoxItem'

type Props = {
  onToggleClick: () => void
}

class ScrollBox extends React.PureComponent<Props> {
  scrollBox: ?HTMLDivElement

  componentDidMount () {
    this.scrollToEnd()
  }

  scrollToEnd = () => {
    const element = this.scrollBox
    if (element) {
      element.scrollLeft = element.scrollWidth
      const scrollStep = -element.scrollLeft / (750 / 15)

      const scrollInterval = setInterval(function () {
        if (element.scrollLeft !== 0) {
          element.scrollLeft += scrollStep
        } else {
          clearInterval(scrollInterval)
        }
      }, 15)
    }
  }

  render () {
    const { onToggleClick } = this.props

    return (
      <div className='scroll-box' ref={(scrollBox) => { this.scrollBox = scrollBox }}>
        {projectsData && projectsData.length &&
          <ul className='scroll-box__list'>
            {projectsData.map((project, i) => (
              <ScrollBoxItem
                key={`${project.url}${i}`}
                title={project.projectTitle}
                client={project.projectClient}
                url={project.url}
                color={project.projectColor}
                thumb={project.projectThumb}
                thumbPosition={project.projectThumbPosition}
                logo={project.projectLogo}
                onToggleClick={onToggleClick}
              />
            ))}
          </ul>
        }
      </div>
    )
  }
}

export default ScrollBox
