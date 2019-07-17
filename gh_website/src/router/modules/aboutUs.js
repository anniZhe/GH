import layout from '@/pages/layout'
import aboutUs from '@/pages/about-us'
export default[
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/aboutUs',
        name: 'aboutUs',
        component: aboutUs
      }
    ]
  }
]
