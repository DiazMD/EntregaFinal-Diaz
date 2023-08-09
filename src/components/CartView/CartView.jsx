import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import "../ItemDetail/ItemDetail.scss"
import { Link } from "react-router-dom"




export const CartView = () => {
    const {cart, totalCompra, vaciarCarrito, eliminarDelCarrito} = useContext(CartContext)

    if(cart.length === 0) {
        return (
            <div className="cardDetail">
                <h2>Tu carrito esta vacío :(</h2>
                <hr/>
                <Link to="/" className="btn btn-success">Ir a comprar</Link>
            </div>
        )
    }

    return (
        <div className="cardDetail">
            <h2>Tu compra</h2>
            <hr />
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h3 className="titleDetail">{item.nombre}</h3>
                        <img src={item.img} alt={item.nombre} className="imgDetail"/>
                        <p className="priceDetail">Precio: ${item.precio * item.counter}</p>
                        <p>Cantidad: {item.counter}</p>
                        <button onClick={() => eliminarDelCarrito(item.id)} className="btn btn-danger">Eliminar producto</button>
                    </div>
                ))
            }

            <h4>Total: ${totalCompra()}</h4>
            <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar Carrito</button>       
        </div>
    )
}