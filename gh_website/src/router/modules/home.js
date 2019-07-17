import layout from '@/pages/layout'
import Home from '@/pages/home'
export default[
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      }
    ]
  }
]
