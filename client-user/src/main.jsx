import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from './router/index'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // {/* </React.StrictMode>, */}
)
