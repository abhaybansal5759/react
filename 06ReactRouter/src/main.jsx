import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import Layout from './Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/contact.jsx'
import Github from './components/Github/github.jsx'

const router = createBrowserRouter([
  {
    path :'/',
    element: <Layout/>,
    children: [
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"github",
        element:<Github/>
      }
    ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router ={router} />
  </StrictMode>,
)
