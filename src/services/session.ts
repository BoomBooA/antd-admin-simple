import request from '../utils/request'

export function login(data: any) {
  return request('/api/login', {
    method: 'POST',
    data
  })
}
