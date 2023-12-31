import { CartWidget } from "../CartWidget/CartWidget"
import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import "./navBar.scss"
import { Link } from 'react-router-dom'


export const NavBar = () => {

    return (
        <div className="navbar">
            <ul>
                <Link className="navbarLink" to="/"> Inicio </Link>
                <Link className="navbarLink" to="/categorias/pantalones">Pantalones</Link>
                <Link className="navbarLink" to="/categorias/camisas">Camisas</Link>
                <Link className="navbarLink" to="/categorias/sweaters">Sweaters</Link>
                <Link to="#" className="navbarLink">Contacto</Link>
            </ul>
        <CartWidget /> 
        </div>
    )
}