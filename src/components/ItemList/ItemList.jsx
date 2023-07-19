import { ItemCard } from "../ItemCard/ItemCard"
import "./ItemList.scss"



export const ItemList = ({productos, categoryId}) => {

    return (
       <div> 
        <div className="container-titulo">
            <h2>Productos</h2>
            <hr />
        </div>    

            <div className="container-cards">
                {
                    productos.map((prod) => <ItemCard key={prod.id} item={prod} categoryId={categoryId}/>)
                }
            </div>
        </div>
    )
}