import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimationDown } from "../animations";
// Import Components
import NavLogin from "../layouts/NavLogin";
// Import Local Icon
import arrowLeft from "../../../../public/images/frontend_img/arrow-l.svg";
// import courseImg4 from "../../../../public/images/frontend_img/";
// import courseImg5 from "../../../../public/images/frontend_img/";

const RegisterLoginPage = () => {
    // const { pathname } = useLocation();
    const hoverLogin = () => {
        const loginContainer = document.querySelector(".login-square");
        loginContainer.style.opacity = "0.5";
    };
    const hoverRegister = () => {
        const registerContainer = document.querySelector(".register-square");
        registerContainer.style.opacity = "0.5";
    };
    const clearHoverLogin = () => {
        const loginContainerClear = document.querySelector(".login-square");
        loginContainerClear.style.opacity = "1";
    };
    const clearHoverRegister = () => {
        const registerContainerClear = document.querySelector(
            ".register-square"
        );
        registerContainerClear.style.opacity = "1";
    };
    return (
        <motion.div
            className="register-login-section"
            variants={pageAnimationDown}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <NavLogin />
            <div className="main-login-register-section">
                <div className="welcome-container">
                    <div className="heading-welcome-container">
                        <div className="image-bg-welcome">
                            {/* <img src="" alt=""/> */}
                        </div>
                        <h1 className="title-welcome">
                            <span>Bu</span>n venit
                        </h1>
                        <h2 className="titlesubHeading">Acum</h2>
                        <p className="desc-login-register">
                            te rugam sa te autentifici, sau sa te inregistrezi.
                        </p>
                    </div>
                    <div className="back-arrow-container">
                        <div className="arrow-left">
                            <Link to="/courses">
                                <img src={arrowLeft} alt="arrow left" />
                            </Link>
                        </div>
                        <div className="back-text">
                            <Link to="/courses">inapoi</Link>
                        </div>
                    </div>
                </div>
                <div className="content-login-register">
                    <div className="question-wrapper1">
                        <h2>
                            <span>Ai</span> deja cont ?
                        </h2>
                    </div>
                    <div className="register-login-container">
                        <div className="login-square-border" />
                        <div
                            className="login-square"
                            onMouseOver={hoverRegister}
                            onMouseOut={clearHoverRegister}
                        >
                            {/* <img src="" alt=""/> */}
                            <Link to="/login" className="login-link1">
                                Autentifica-te
                            </Link>
                            <Link to="/login" className="login-link2">
                                Acum
                            </Link>
                        </div>
                        <div className="register-square-border" />
                        <div
                            className="register-square"
                            onMouseOver={hoverLogin}
                            onMouseOut={clearHoverLogin}
                        >
                            {/* <img src="" alt=""/> */}
                            <div className="square-blur" />
                            <Link to="/register" className="register-link1">
                                Inscriete
                            </Link>
                            <Link to="/register" className="register-link2">
                                Acum
                            </Link>
                        </div>
                    </div>
                    <div className="question-wrapper2">
                        <h2>
                            <span>Doresti</span> sa te inscrii la cursurile
                            noastre ?
                        </h2>
                    </div>
                </div>
            </div>
            <div className="course-labels-container">
                <div className="label label-html">
                    <Link to="/html-css-sass-course">HTML5</Link>
                </div>
                <div className="label label-css">
                    <Link to="/html-css-sass-course">CSS3</Link>
                </div>
                <div className="label label-sass">
                    <Link to="/html-css-sass-course">SASS</Link>
                </div>
                <div className="label label-js">
                    <Link to="/javascript-react-course">JavaScript</Link>
                </div>
                <div className="label label-react">
                    <Link to="/javascript-react-course">React</Link>
                </div>
            </div>
            <div id="footer">
                <div className="right-links">
                    <Link className="footer-link-right" to="/">
                        Privacy
                    </Link>
                    <Link className="footer-link-right" to="/">
                        Terms
                    </Link>
                    <Link className="footer-link-right" to="/">
                        Contact
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};
export default RegisterLoginPage;
