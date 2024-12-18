import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/login.jsx'
import RegisterPage from './Pages/register.jsx'
import Homepage from './Pages/home.jsx'
import ErrorPage from './Pages/404.jsx'
import ProductPage from './Pages/products.jsx'
import ContactPage from './Pages/contact.jsx'
import DetailProductPage from './Pages/detailproduct.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />  
  },
  {
    path: '/products',
    element: <ProductPage />  
  },
  {
    path: '/contact',
    element: <ContactPage />  
  },
  {
    path: '/product/:id',
    element: <DetailProductPage />  
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
