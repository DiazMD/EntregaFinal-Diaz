import { useState, useEffect } from "react"
import "./ItemListContainer.scss"
import { pedirDatos } from "../../helpers/getData"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'



export const ItemListContainer = () => {

    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then(r => {
                if (categoryId) {
                    setProductos( r.filter(prod => prod.category === categoryId) )
                } else {
                    setProductos(r)
                }
            })
            .catch(e => console.log(e))
            .finally(() => {
                setLoading(false)
            })
        }, [categoryId])

    return (
        <div className="catalogoContainer">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList productos={productos}/> 
            }
        </div>
    )
}