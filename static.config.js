// Though this file is optional, there are SO MANY COOL THINGS you can do here.
// Read the docs at https://github.com/nozzle/react-static/blob/master/README.md to learn more!

// Routing:
// https://github.com/nozzle/react-static/blob/master/docs/api.md#getroutes
// https://github.com/nozzle/react-static/blob/master/examples/custom-routing/static.config.js

export default {
  siteRoot: 'https://yourownmood.nl',
  getRoutes: async () => {
    return [
      {
        path: '/'
      },
      {
        path: '/contact'
      }
    ]
  }
}
