import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    console.log(cart);

    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
    }

    const eliminarDelCarrito = (id) => {
        setCart( cart.filter((item) => item.id !== id) )
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const totalCompra = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.counter, 0)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const totalCantidad = () => {
        return cart.reduce((acc, item) => acc + item.counter, 0)
    }

    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCompra,
            vaciarCarrito,
            totalCantidad,
            eliminarDelCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}