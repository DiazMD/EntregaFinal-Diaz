import "./ItemDetail.scss"


export const ItemDetail = ({item}) => {

    const handleAgregar = () => {
        console.log("Item a agregar", {
            ...item,
        })
    }

    
    return (
        <div className="cardDetail">
            <h2 className="titleDetail">{item.nombre}</h2>
            <img src={item.img} alt={item.nombre} className="imgDetail"/>
            <p className="textDetail">{item.descripcion}</p>
            <p className="priceDetail">Precio: ${item.precio}</p>
            <button onClick={handleAgregar} className="btn btn-primary">Agregar</button>
        </div>
    )
}