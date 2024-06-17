import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import GlobalStyled from './GlobalStyled'
import Auth from './pages/Auth/Auth'
import Cadastrar from './pages/Cadastrar/Cadastrar'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth /> 
  },

  {
    path: '/cadastrar',
    element: <Cadastrar /> 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
