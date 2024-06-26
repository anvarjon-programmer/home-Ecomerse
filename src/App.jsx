import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Fragment } from 'react'
import {Footer, Navbar, Sidebar} from './components'
import { About, Cart, Error, Home, Products } from './pages'
function App() {

  return (
  <BrowserRouter>
    <Fragment>
      <Navbar/>
      {/* <Sidebar/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path = '/about' element = { <About/> } />
          <Route path = '/cart' element = { <Cart/> } />
          <Route path = '/products' element = { <Products/> } />
          <Route path = '*' element = { <Error/> } />
        </Routes>
        <Footer/>
    </Fragment>
  </BrowserRouter>
  )
}

export default App
