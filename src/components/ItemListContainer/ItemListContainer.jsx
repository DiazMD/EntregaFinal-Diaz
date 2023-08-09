import { useState, useEffect } from "react"
import "./ItemListContainer.scss"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import { getData } from "../../helpers/getData"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"



export const ItemListContainer = () => {

    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)
    console.log(productos);
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = categoryId
            ? query(productosRef, where("category", "==", categoryId))
            : productosRef

        getDocs(q)
            .then((resp) => {
                const docs = resp.docs.map((doc) => {
                    return{
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setProductos(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
        }, [categoryId])

    return (
        <div className="catalogoContainer">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList productos={productos} categoryId={categoryId}/> 
            }
        </div>
    )
}