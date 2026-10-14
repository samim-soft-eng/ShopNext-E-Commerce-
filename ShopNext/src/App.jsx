import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Productdetails from './pages/ProductDetails'
import Registration from './pages/Registration'
import Login from './pages/Login'
import { GoogleOAuthProvider } from '@react-oauth/google'

function App() {
  return (
    <div>
      <GoogleOAuthProvider clientId='1080680452047-t59r0qchriffnk1aavvg8q1rdmdvqka7.apps.googleusercontent.com'>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<Productdetails />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>

        </BrowserRouter>
      </GoogleOAuthProvider>
    </div>
  )
}

export default App