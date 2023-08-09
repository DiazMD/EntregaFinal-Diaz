import "./Header.scss"
import { NavBar } from "../NavBar/NavBar";
import { Link } from "react-router-dom";

export const Header = () => {

    return (
    <header className="header">
        <div className="headerContainer">
        <Link to="/" className="headerLink">
            <h1 className="headerLogo">
                ReactJs E-Commerce
            </h1>
        </Link>
            <NavBar />
        </div>
    </header>
    )
}