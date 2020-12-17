import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimationDown } from "../../animations";
// Import Local Icon
import arrowLeft from "../../../../../public/images/frontend_img/arrow-l.svg";

const RegisterPage = () => {
    return (
        <motion.div
            className="login-page-content"
            variants={pageAnimationDown}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <div className="nav-left-course">
                <div className="back-arrow-course">
                    <div className="arrow-left">
                        <Link to="/register-login">
                            <img src={arrowLeft} alt="arrow left" />
                        </Link>
                    </div>
                    <div className="back-text">
                        <Link to="/register-login">inapoi</Link>
                    </div>
                </div>
            </div>
            <form className="login-form" action="/login">
                <div className="login-form-container">
                    <div className="form-heading">
                        <h2>Inregistreaza-te</h2>
                    </div>
                    <div className="inputs-wrapper">
                        <input
                            className="form-input first-name-input"
                            id="first-name"
                            name="first-name"
                            type="text"
                            placeholder="First Name"
                        />
                        <input
                            className="form-input last-name-input"
                            id="last-name"
                            name="last-name"
                            type="text"
                            placeholder="Last Name"
                        />
                        <input
                            className="form-input email-input"
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Email Address"
                        />
                        <input
                            className="form-input password-input"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                        <button className="login-btn" type="submit">
                            Inregistrare
                        </button>
                    </div>
                </div>
                <div className="form-image form-image-register">
                    <h2 className="form-logo-text">DeCA23Designs</h2>
                    <p className="desc-form-image-register">
                        Inregistreaza-te pentru a putea studia cursurile
                        frontend web dev. Te asteapta o zi mare, grabeste-te sa
                        faci si tu parte din dezvoltarea web.
                    </p>
                </div>
            </form>
        </motion.div>
    );
};
export default RegisterPage;
