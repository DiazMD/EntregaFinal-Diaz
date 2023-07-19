import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Error404 } from './components/Error404/Error404'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={ <ItemListContainer />}/>
        <Route path="/categorias/:categoryId" element={ <ItemListContainer />}/>
        <Route path="/alfredo/:categoryId" element={ <ItemListContainer />}/>
        <Route path="*" element={ <Error404 />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
