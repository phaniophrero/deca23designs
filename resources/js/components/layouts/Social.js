import React from "react";
// Import React Icons
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Social = () => {
    return (
        <div className="social">
            <a href="#">
                <FaYoutube />
            </a>
            <a href="https://twitter.com/deca23designs">
                <FaTwitter />
            </a>
            <a href="https://www.instagram.com/deca23designs/">
                <FaInstagram />
            </a>
            <a href="https://www.facebook.com/deca23designs">
                <FaFacebookF />
            </a>
        </div>
    );
};

export default Social;
