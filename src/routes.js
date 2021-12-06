import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const ButtonPage = React.lazy(() => import('./views/button/ButtonPage'))
const InputPage = React.lazy(() => import('./views/input/InputPage'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/button', name: 'Button', component: ButtonPage },
  { path: '/input', name: 'Input', component: InputPage },
]

export default routes