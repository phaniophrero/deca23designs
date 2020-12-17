import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <nav className="logo">
                <Link to="/">CA 23 Designs</Link>
            </nav>
        </div>
    );
};

export default Nav;
