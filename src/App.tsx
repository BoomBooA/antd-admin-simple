import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import router from './router'
import './locales'
import './App.css'

function App() {
  useEffect(() => {

  }, [])

  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider
          router={createBrowserRouter(router)}
        />
      </Provider>
    </React.StrictMode>
  )
}

export default App
