import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import GlobalStyled from './GlobalStyled'
import Auth from './pages/Auth/Auth'
import Cadastrar from './pages/Cadastrar/Cadastrar'
import Home from './pages/Home/Home'
import ProtectedRoute from '../src/components/ProtectedRoute/ProtectedRoute'
import Pedido from './pages/Pedido/Pedido'

const router = createBrowserRouter([
  {
    path: '/Auth',
    element: <Auth /> 
  },

  {
    path: '/Cadastrar',
    element: <Cadastrar /> 
  },
  
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
          path: '/Home/:categoria',
          element: <Home />, 
      },

      {
        path: '/Home/:categoria/Pedido',
        element: <Pedido />, 
      }
    ]
  },

  {
    path: '/not-authorized',
    element: <div>Você não tem permissão para acessar esta página</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
