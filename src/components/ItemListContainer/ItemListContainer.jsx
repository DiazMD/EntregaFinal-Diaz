import { useState, useEffect } from "react"
import "./ItemListContainer.scss"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import { getData } from "../../helpers/getData"



export const ItemListContainer = () => {

    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        getData()
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
                    : <ItemList productos={productos} categoryId={categoryId}/> 
            }
        </div>
    )
}