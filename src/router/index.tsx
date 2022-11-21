import { createBrowserRouter } from 'react-router-dom'
import IndexPage from '../pages/index'
import NotFound from '../pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
    errorElement: <NotFound />
  }
])

export default router
