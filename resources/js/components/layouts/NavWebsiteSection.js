import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavWebsiteSection = () => {
    const [navLinks, setNavLinks] = useState([
        {
            name: "Website",
            route: "/",
            id: 1
        },
        {
            name: "Navigator",
            route: "/navigator",
            id: 2
        },
        {
            name: "Content",
            route: "/content",
            id: 3
        },
        {
            name: "Aside",
            route: "/aside",
            id: 4
        },
        {
            name: "Footer",
            route: "/footer",
            id: 5
        },
        {
            name: "Dashboard",
            route: "/dashboard",
            id: 6
        }
    ]);

    return (
        <nav className="main-links">
            {navLinks.map(navLink => (
                <li key={navLink.id}>
                    <Link className="footer-link" to={navLink.route}>
                        {navLink.name}
                    </Link>
                </li>
            ))}
        </nav>
    );
};

export default NavWebsiteSection;
