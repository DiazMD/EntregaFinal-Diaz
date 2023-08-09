import { useState } from "react"



export const  ItemCount = ({max, counter, setCounter, agregar}) => {

    const handleRestar = () => {
        counter > 1 && setCounter(counter - 1)
    }

    const handleSumar = () => {
        counter < max && setCounter(counter + 1)
    }

    return (
        <div>
            <button onClick={handleRestar}
            className={counter === 1 ? "btn btn-outline-secondaryr" : "btn btn-outline-primary"}
            disabled={counter === 1}>
                -
            </button>
            <span className="mx-2">{counter}</span>
            <button onClick={handleSumar}
            className={counter === max ? "btn btn-outline-secondary" : "btn btn-outline-primary"}
            disabled={counter === max}>
                +
            </button>
            <br /> <br />
            <button onClick={agregar} className="btn btn-primary">Agregar</button>
        </div>
    )
}