import React from 'react'

const ButtonPage = React.lazy(() => import('./views/button/ButtonPage'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/button', name:'Button', component:ButtonPage },
]

export default routes