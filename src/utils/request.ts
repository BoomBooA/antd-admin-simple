import axios, { AxiosRequestConfig } from 'axios'

const request = (url: string, options: AxiosRequestConfig = {}) => {
  return axios({
    url,
    ...options
  })
}

export default request
