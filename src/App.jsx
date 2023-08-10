import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Error404 } from './components/Error404/Error404'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Footer } from './components/Footer/Footer'
import { CartContextProvider } from './components/CartContext/CartContext'
import { CartView } from './components/CartView/CartView'
import { Checkout } from './components/Checkout/Checkout'

function App() {

  return (

    <CartContextProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={ <ItemListContainer />}/>
          <Route path="/categorias/:categoryId" element={ <ItemListContainer />}/>
          <Route path="/categorias/:categoryId/:itemId" element={ <ItemDetailContainer />}/>
          <Route path="/cart" element={ <CartView />}/>
          <Route path="/checkout" element={ <Checkout />}/>
          <Route path="*" element={ <Error404 />}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartContextProvider>
    
  )
}

export default App
