
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Product from './pages/Product'
import View from './pages/View'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Pagenotfound from './pages/Pagenotfound'
import Footer from './Components/Footer'

function App() {

  return (
    <>
  
     <Routes>
      <Route path='/' element={<Product/>}/>
      <Route path='/product/:id' element={<View/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/*' element={<Pagenotfound/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
