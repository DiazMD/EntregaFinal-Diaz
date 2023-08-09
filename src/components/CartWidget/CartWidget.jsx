import "./CartWidget.scss"
import reactIcon from "../../assets/basket3.svg"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"

export const CartWidget = () => {
    const  { totalCantidad } = useContext(CartContext)

    return (
        <Link to="/cart" className="cartWidget">
                <img src={reactIcon} alt="" srcSet="" className="cartStyle"/>
                <p className="cartCounter"><sup>{totalCantidad()}</sup></p>     
        </Link>
    )
}