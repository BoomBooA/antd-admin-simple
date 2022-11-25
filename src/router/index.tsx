import { createBrowserRouter } from 'react-router-dom'
import Authorized from '@/components/Authorized'
import Root from '@/components/Root'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'
import IndexPage from '../pages/index'
import SalesPage from '../pages/Dashboard/Sales'
import SettingBasic from '../pages/Settings/Basic'
import SettingPassword from '../pages/Settings/Password'

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
        path: 'dashboard',
        children: [
          {
            path: 'sales',
            element: <SalesPage />
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: 'basic',
            element: <SettingBasic />
          },
          {
            path: 'password',
            element: <SettingPassword />
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
