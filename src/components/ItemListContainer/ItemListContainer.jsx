import "./ItemListContainer.scss"


export const ItemListContainer = ({proyecto}) => {
    return (
        <div className="catalogoContainer">
            <h2>{proyecto}</h2>
            <hr />
            <p>¡Muchas gracias!</p>
        </div>
    )
}