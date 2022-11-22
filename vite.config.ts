import {
  defineConfig,
  UserConfigExport,
  ConfigEnv
} from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import react from '@vitejs/plugin-react'

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      react(),
      viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: command === 'serve'
      })
    ],
    server: {
      port: 3000
    }
  }
}
