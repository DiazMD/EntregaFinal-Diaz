import "./CartWidget.scss"
import reactIcon from "../../../assets/basket3.svg"
export const CartWidget = () => {

    return (
        <button className="cartWidget">
                <img src={reactIcon} alt="" srcset="" className="cartStyle"/>
                <p className="cartCounter"><sup>0</sup></p>     
        </button>
    )
}