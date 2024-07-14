import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import { Customer } from './pages/Customer'
import { NotFound } from './pages/NotFound'
import ApiProvider from './context/ApiProvider'

const App = () => {

  const routes = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        { path: "/", element: <Home /> },
        { path: "/customer/:id", element: <Customer /> },
        { path: "*", element: <NotFound /> }
      ]
    }
  ])

  return (
    <ApiProvider>
      <RouterProvider router={routes} />
    </ApiProvider>
  )
}

export default App