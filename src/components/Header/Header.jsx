import "./Header.scss"
import { NavBar } from "./NavBar/NavBar";

export const Header = () => {

    return (
    <header className="header">
        <div className="headerContainer">
        <a href="#" className="headerLink">
            <h1 className="headerLogo">
                ReactJs E-Commerce
            </h1>
        </a>
            <NavBar />
        </div>
    </header>
    )
}