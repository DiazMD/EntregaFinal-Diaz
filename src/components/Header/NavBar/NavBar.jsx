import { CartWidget } from "../CartWidget/CartWidget"
import "./navBar.scss"


export const NavBar = () => {

    return (
        <div className="navbar">
            <ul>
                <a href="#" className="navbarLink">Inicio</a>
                <a href="#" className="navbarLink">Productos</a>
                <a href="#" className="navbarLink">Contacto</a>
            </ul>
        <CartWidget /> 
        </div>
    )
}