import layout from '@/pages/layout'
import coreBusiness from '@/pages/core-business'
export default[
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/coreBusiness',
        name: 'coreBusiness',
        component: coreBusiness
      }
    ]
  }
]
