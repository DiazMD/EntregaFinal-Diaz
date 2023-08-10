import { useEffect, useState } from "react"
import { getData } from "../../helpers/getData"
import { Navigate, useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import "../ItemListContainer/ItemListContainer.scss"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Error404 } from "../Error404/Error404"




export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    console.log(item);
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    
    useEffect(() => {
        setLoading(true)

        const itemRef = doc(db, "productos", itemId)
        getDoc(itemRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch( e => console.log(e))
            .finally(() => setLoading(false))
        
    }, [])

    if (item)
        if (item.nombre == undefined){
            return (
                <Error404 />
            )
        }

    return (
        <div className="catalogoContainer">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}