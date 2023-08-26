import { IMG_LOGO_URL } from "../constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";
import userContext from "./utils/userContext";
import { useSelector } from "react-redux";


// HEADER COMPONENTS
const Title = () => {
    return <img className="logo w-24" alt="logo" src={IMG_LOGO_URL} />;
};

const NavBar = () => {
    const [loginStatus, setLoginStatus] = useState(false);
    const handleToggleLogin = () => {
        setLoginStatus((prevLoginStatus) => !prevLoginStatus);
    };
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <ul className="flex gap-8 items-center">
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/about">
                <li>About</li>
            </Link>
            <Link to="contact">
                <li>Contact</li>
            </Link>
            <Link to='/cart'>
                <li>Cart - {cartItems.length}</li>
            </Link>
            <Link to="/instamart">
                <li>Instamart</li>
            </Link>
            <button
                className="border-2 bg-black text-white rounded-md px-2 py-1 text-sm"
                onClick={handleToggleLogin}>
                {loginStatus ? "Logout" : "Login"}
            </button>
        </ul>
    );
};

const Header = () => {
    return (
        <div className="header flex items-center justify-between px-48 shadow-md">
            <Title />
            <NavBar />
        </div>
    );
};

export default Header;
