import { createBrowserRouter } from 'react-router-dom'
import Root from '@/components/Root'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'
import IndexPage from '../pages/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <IndexPage />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router
