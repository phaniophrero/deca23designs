import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimationDown } from "../../animations";
import Social from "../../layouts/Social";
// Import Local Icon
import arrowLeft from "../../../../../public/images/frontend_img/arrow-l.svg";
import founderL from "../../../../../public/images/frontend_img/avatar1.png";
import founderR from "../../../../../public/images/frontend_img/avatar2.png";

const TeamPage = () => {
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
                        <h1 className="title">Echipa</h1>
                        <h2 className="founders-subHeading">Deca23designs</h2>
                        <div className="description-container">
                            <div className="line" />
                            <p className="description">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nemo tenetur quae et illum
                                nulla dolor mollitia earum libero eveniet
                                quisquam basass. <br />
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <div className="team-images-container">
                        <div className="team-image team-image-l-top">
                            <img src={founderL} alt="founder image" />
                        </div>
                        <div className="team-image team-image-l-bottom">
                            <img src={founderR} alt="founder image" />
                        </div>
                        <div className="team-image team-image-r-top">
                            <img src={founderR} alt="founder image" />
                        </div>
                        <div className="team-image team-image-r-bottom">
                            <img src={founderL} alt="founder image" />
                        </div>
                    </div>
                </div>
                <Social />
            </div>
            <div id="footer">
                <nav className="main-links">
                    <Link className="footer-link" to="/founders">
                        Fondatori
                    </Link>
                    <Link className="footer-link footer-link-active" to="/team">
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
export default TeamPage;
