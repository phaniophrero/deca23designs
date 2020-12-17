import React from "react";
import { Link } from "react-router-dom";
//Import React Icons
import { FaArchive, FaUserAlt, FaSignInAlt } from "react-icons/fa";

const NavLogin = () => {
    return (
        <nav className="nav-login">
            <Link to="/">My Courses</Link>
            <Link to="/">All Courses</Link>
            <Link to="/" className="nav-icon">
                <FaArchive />
            </Link>
            {/* to="/register-login" asta de jos cu userAlt */}
            <Link to="/" className="nav-icon">
                <FaUserAlt />
            </Link>
            <Link to="/" className="nav-icon">
                <FaSignInAlt />
            </Link>
        </nav>
    );
};

export default NavLogin;
