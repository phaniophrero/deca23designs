import React from "react";
// Import React Icons
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Social = () => {
    return (
        <div className="social">
            <a href="#">
                <FaYoutube />
            </a>
            <a href="#">
                <FaTwitter />
            </a>
            <a href="#">
                <FaInstagram />
            </a>
            <a href="#">
                <FaFacebookF />
            </a>
        </div>
    );
};

export default Social;
