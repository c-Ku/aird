export default {
  path: '/',
  component: require('@/views/Layout/Layout').default,
  indexRoute: { component: require('@/views/Home/Home').default },
  childRoutes: [
    {
      path: 'docs',
      childRoutes: [
        require('./components').default
      ]
    },
    {
      path: '*',
      indexRoute: { component: require('@/views/NotFound/NotFound').default }
    }
  ]
}
