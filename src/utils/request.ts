import axios, { AxiosRequestConfig } from 'axios'

const request = async (url: string, options: AxiosRequestConfig = {}) => {
  try {
    const response = await axios(url, {
      ...options
    })

    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    throw error
  }
}

export default request
