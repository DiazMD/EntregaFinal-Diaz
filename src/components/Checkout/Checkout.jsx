import { useContext, useState } from "react"
import { CartContext } from "../CartContext/CartContext"
import { collection, addDoc, getDocs, writeBatch, query, where, documentId } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link, Navigate } from "react-router-dom"

export const Checkout = () => {

    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [ordenId, setOrdenId] = useState(null)
    const [values, setValues] = useState({
        nombre: "",
        direccion: "",
        email: ""
    })

    const handleInputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(values);

        const orden = {
            cliente: values,
            items: cart.map(item => ({id: item.id, nombre: item.nombre, cantidad: item.counter, precio: item.precio })),
            total: totalCompra(),
            fyh: new Date()
        }

        console.log(orden);

        const batch = writeBatch(db)
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where (documentId(), "in", cart.map(item => item.id)))
        const ordenRef = collection(db, "ordenes")

        const productos = await getDocs(q)
        const outOfStock = []

        productos.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id)
            const stock = doc.data().stock

            if (stock >= item.counter) {
                batch.update(doc.ref, {
                    stock: stock - item.counter
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()
            const doc = await  addDoc(ordenRef, orden)
            vaciarCarrito()
            setOrdenId(doc.id)
        } else {
            alert("Producto sin stock")
            console.log(outOfStock)
        }

        /*const ordenRef = collection(db, "ordenes")
        addDoc(ordenRef, orden)
            .then((doc) => {
                console.log(doc.id);
                vaciarCarrito()
                setOrdenId(doc.id)
            })*/
    }

    if (ordenId) {
        return (
            <div className="container my-5">
                <h2 className="text-4x1">Tu compra se registro exitosamente</h2>
                <hr />
                <p>Tu numero de orden es: <strong>{ordenId}</strong></p>
                <Link to="/">Volver al inicio</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div>
            <h2>Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                onChange={handleInputChange}
                value={values.nombre}
                type="text"
                className="form-control my-2"
                placeholder="Nombre"
                name="nombre"/>

                <input
                onChange={handleInputChange}
                value={values.direccion}
                type="text"
                className="form-control my-2"
                placeholder="Direccion"
                name="direccion"/>

                <input
                onChange={handleInputChange}
                value={values.email}
                type="text"
                className="form-control my-2"
                placeholder="Email"
                name="email"/>  

                <button className="btn btn-success">Enviar</button>
            </form>
        </div>
    )
}