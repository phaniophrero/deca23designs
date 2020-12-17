import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animations";
// Import Components
import Social from "../../layouts/Social";
// Import Local Icon
import arrowDown from "../../../../../public/images/frontend_img/arrow-down.svg";
import arrowRight from "../../../../../public/images/frontend_img/arrow-r.svg";
import logoImg from "../../../../../public/images/frontend_img/logo2.png";

const Home = () => {
    const { pathname } = useLocation();
    return (
        <div>
            <nav className="logo">
                <Link className="logo-link" to="/">
                    <img src={logoImg} alt="logo brand" />
                </Link>
            </nav>

            <motion.div
                id="homeLayout"
                variants={pageAnimation}
                initial="hidden"
                animate="show"
                exit="exit"
            >
                <div className="main">
                    <div className="nav-left">
                        <div className="nav-links-wrapper">
                            <div className="nav-links">
                                <span>0</span>
                                <motion.div
                                    className="left-line"
                                    transition={{ duration: 0.75 }}
                                    initial={{ height: "0%" }}
                                    animate={{
                                        height: pathname === "/" ? "4rem" : "0%"
                                    }}
                                />
                                <p>Home</p>
                            </div>
                            <div className="dot" />
                            <div className="dot" />
                            <div className="dot" />
                            <div className="dot" />
                        </div>
                        <div className="next-arrow">
                            <div className="next-text">
                                <Link to="/website">Next</Link>
                            </div>
                            <div className="arrow-down">
                                <Link to="/website">
                                    <img src={arrowDown} alt="arrow down" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mainContent">
                        <div className="heading">
                            <h1 className="title">Galery</h1>
                            <div className="description-container">
                                <h2 className="subHeading">Web Site</h2>
                                <div className="line" />
                                <p className="description">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nemo tenetur quae et illum
                                    nulla dolor mollitia earum libero eveniet
                                    quisquam basass. <br />
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Adipisci quisquam nisi, at
                                    ab quibusdam omnis. Mollitia accusamus
                                    nostrum pariatur alias.
                                </p>
                            </div>
                        </div>
                        <div className="images">
                            <div className="img-wrapper" />
                            <div className="img-wrapper2" />
                            <div className="img-wrapper3" />
                            <div className="square-bg" />
                        </div>
                    </div>
                    <Social />
                </div>
                <div id="footer">
                    <div className="arrow-container">
                        <div className="arrow-r">
                            <Link to="/">
                                <img src={arrowRight} alt="arrow right" />
                            </Link>
                        </div>
                        <Link className="arrow-text" to="/">
                            intra si vezi
                        </Link>
                    </div>
                    <nav className="main-links">
                        <Link className="footer-link active" to="/">
                            Home
                        </Link>
                        <Link className="footer-link" to="/">
                            Ecommerce
                        </Link>
                        <Link className="footer-link" to="/">
                            Blog
                        </Link>
                        <Link className="footer-link" to="/">
                            Gallery
                        </Link>
                        <Link className="footer-link" to="/">
                            Photo & Video
                        </Link>
                        <Link className="footer-link" to="/">
                            Concept Designs
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
        </div>
    );
};
export default Home;
