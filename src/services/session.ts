import request from '../utils/request'

/**
 * login method
 * @param data
 */
export function login(data: any) {
  return request('/api/login', {
    method: 'POST',
    data
  })
}

/**
 * Get user session
 */
export function getSession() {
  return request('/api/getSession', {
    method: 'GET'
  })
}
