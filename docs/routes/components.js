export default {
  path: 'components',
  component: require('@/views/Docs/Components/ComponentsLayout/ComponentsLayout.jsx').default,
  indexRoute: { onEnter: (nextState, replace) => replace('/docs/components/button') },
  childRoutes: [
    {
      path: 'button',
      component: require('@/views/Docs/Components/Button/Button.jsx').default
    }
  ]
}
