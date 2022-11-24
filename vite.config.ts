import {
  ConfigEnv,
  UserConfigExport
} from 'vite'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import macrosPlugin from 'vite-plugin-babel-macros'
import react from '@vitejs/plugin-react'

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      react(),
      macrosPlugin(),
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
      host: '0.0.0.0',
      port: 3000
    }
  }
}
