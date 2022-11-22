import {
  ConfigEnv,
  UserConfigExport
} from 'vite'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import react from '@vitejs/plugin-react'

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      react(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve',
        injectCode: `
          import { setupProdMockServer } from './mock';
          setupProdMockServer();
        `
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      port: 3000
    }
  }
}
