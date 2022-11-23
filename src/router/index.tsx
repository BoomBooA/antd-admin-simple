import { createBrowserRouter } from 'react-router-dom'
import Authorized from '@/components/Authorized'
import Root from '@/components/Root'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'
import IndexPage from '../pages/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Authorized>
        <Root />
      </Authorized>
    ),
    children: [
      {
        path: '',
        element: <IndexPage />
      },
      {
        path: 'dashboard'
      },
      {
        path: 'settings',
        children: [
          {
            path: 'basic'
          },
          {
            path: 'password'
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router
