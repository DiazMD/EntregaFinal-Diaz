import './App.css'
import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <div>
        <Header />
        <ItemListContainer proyecto={"Pre-entrega 1 - Diaz Matias"}/>
      </div>  
    </>
  )
}

export default App
