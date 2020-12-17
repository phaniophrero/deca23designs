import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimationDown } from "../../animations";
import Social from "../../layouts/Social";
// Import Local Icon
import arrowLeft from "../../../../../public/images/frontend_img/arrow-l.svg";
import founderL from "../../../../../public/images/frontend_img/avatar1.png";
import founderR from "../../../../../public/images/frontend_img/avatar2.png";

const FoundersPage = () => {
    // const { pathname } = useLocation();
    return (
        <motion.div
            className="register-login-section"
            variants={pageAnimationDown}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <div className="main main-website-section">
                <div className="nav-left-course">
                    <div className="back-arrow-course">
                        <div className="arrow-left">
                            <Link to="/our-team">
                                <img src={arrowLeft} alt="arrow left" />
                            </Link>
                        </div>
                        <div className="back-text">
                            <Link to="/our-team">inapoi</Link>
                        </div>
                    </div>
                </div>
                <div className="mainContent">
                    <div className="heading-founders">
                        <h1 className="title">Fondatori</h1>
                        <h2 className="founders-subHeading">Deca23designs</h2>
                        <div className="decription-container">
                            <div className="line" />
                            <p className="description">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nemo tenetur quae et illum
                                nulla dolor mollitia earum libero eveniet
                                quisquam basass. <br />
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Adipisci quisquam nisi, at ab
                                quibusdam omnis. Mollitia accusamus nostrum
                                pariatur alias.
                            </p>
                        </div>
                    </div>
                    <div className="founders-images-container">
                        <h2 className="founders-name founder-name-l">
                            Mr. <span>Robert M.</span>
                        </h2>
                        <div className="shape-founders-bg shape-founders-l" />
                        <div className="founders-image founder-image-l">
                            <img src={founderL} alt="founder image" />
                        </div>
                        <h2 className="founders-name founder-name-r">
                            Mr. <span>Alexandru S.</span>
                        </h2>
                        <div className="shape-founders-bg shape-founders-r" />
                        <div className="founders-image founder-image-r">
                            <img src={founderR} alt="founder image" />
                        </div>
                    </div>
                </div>
                <Social />
            </div>
            <div id="footer">
                <nav className="main-links">
                    <Link
                        className="footer-link footer-link-active"
                        to="/founders"
                    >
                        Fondatori
                    </Link>
                    <Link className="footer-link" to="/team">
                        Echipa
                    </Link>
                </nav>
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
export default FoundersPage;
