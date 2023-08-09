import { Link } from "react-router-dom"
import "./ItemCard.scss" 



export const ItemCard = ({item, categoryId}) => {

    return (
        <div className="itemCard">
            <h5 className="titleCard">{item.nombre}</h5>
            <img src={item.img} alt={item.nombre} className="ImgCard"/>
            <p className="textCard">{item.descripcion}</p>
            <p className="PriceCard">Precio: ${item.precio}</p>
            {
            item.stock <8 && <p className="AlertCard">¡Ultimas {item.stock} unidades!</p>
            }
            <Link to={`/categorias/${categoryId}/${item.id}`} className='btn btn-primary'>Ver más</Link>
            <hr/>
        </div>
    )
}