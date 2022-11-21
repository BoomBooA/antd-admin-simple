import { createBrowserRouter } from 'react-router-dom'
import IndexPage from '../pages/index'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
    errorElement: <NotFound />
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router
