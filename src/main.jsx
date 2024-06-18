import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import GlobalStyled from './GlobalStyled'
import Auth from './pages/Auth/Auth'
import Cadastrar from './pages/Cadastrar/Cadastrar'
import Home from './pages/Home/Home'

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Auth /> 
  },

  {
    path: '/cadastrar',
    element: <Cadastrar /> 
  },
  
  {
    path: '/home',
    element: <Home /> 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
