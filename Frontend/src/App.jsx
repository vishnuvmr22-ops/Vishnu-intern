//rafce-react arrow function component export

import Students from './components/Students'
import { Button } from '@/components/ui/button'
import Count from './hooks/Count'
import Register from './hooks/Register'
import Users from './hooks/Users'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/service" Component={Service} />
        <Route path="/contact" Component={Contact} />
        <Route path="/products" Component={Products} />
        <Route path="/productDetails/:id" Component={ProductDetails} />
      </Routes>
    </>
  )
}

export default App