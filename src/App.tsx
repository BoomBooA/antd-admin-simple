import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import router from './router'
import './locales'
import './App.css'

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  )
}

export default App
