
import { useContext, useState } from "react"
import { ItemCount } from "../ItermCount/ItemCount"
import "./ItemDetail.scss"
import { CartContext } from "../CartContext/CartContext"
import { Link } from "react-router-dom"


export const ItemDetail = ({item}) => {
    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    const [counter, setCounter] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            counter
        }

        agregarAlCarrito(newItem)
    }
    
    
    return (
        <div className="cardDetail">
            <h2 className="titleDetail">{item.nombre}</h2>
            <img src={item.img} alt={item.nombre} className="imgDetail"/>
            <p className="textDetail">{item.descripcion}</p>
            <p className="priceDetail">Precio: ${item.precio}</p>

            {
                isInCart(item.id)
                ? <Link className="btn btn-success" to="/cart">Terminar mi compra</Link>
                :<ItemCount 
                max={item.stock}
                counter={counter}
                setCounter={setCounter}
                agregar={handleAgregar}/>
            }
        </div>
    )
}