import React from 'react'
import Header from './components/Header'
import { Routes , Route} from 'react-router-dom'
import Cart from './pages/Cart'
import Product from './pages/Product'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/" element={<Product/>} />
      </Routes>
    </div>
  )
}

export default App