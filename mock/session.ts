import { MockMethod } from 'vite-plugin-mock'
import { errorResponse, successResponse } from './_utils'

export default [
  {
    url: '/api/login',
    method: 'post',
    timeout: 1000,
    response: ({ body }: any) => {
      const {
        username,
        password
      } = body

      if (username === 'admin' && password === '123456') {
        return successResponse()
      }

      return errorResponse('Invalid password')
    }
  },
  {
    url: '/api/logout',
    method: 'get',
    response: () => {
      return successResponse()
    }
  }
] as MockMethod[]
