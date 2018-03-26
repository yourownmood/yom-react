import * as React from 'react'
// Though this file is optional, there are SO MANY COOL THINGS you can do here.
// Read the docs at https://github.com/nozzle/react-static/blob/master/README.md to learn more!

// Routing:
// https://github.com/nozzle/react-static/blob/master/docs/api.md#getroutes
// https://github.com/nozzle/react-static/blob/master/examples/custom-routing/static.config.js

import projectsData from './src/feeds/projects.json'
const projectPages = projectsData.map(project => ({ path: `/project/${project.url}` }))

export default {
  siteRoot: 'https://yourownmood.nl',
  publicPath: '/',
  getRoutes: async () => {
    return [
      {
        path: '/'
      },
      {
        path: '/contact'
      },
      ...projectPages
    ]
  },
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang='en'>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Domine:400,700' rel='stylesheet' />
      </Head>
      <Body>{children}</Body>
    </Html>
  )
}
