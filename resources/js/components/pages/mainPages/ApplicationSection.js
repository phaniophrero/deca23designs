import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimationDown } from "../../animations";
// Import Components
import Social from "../../layouts/Social";
// Import Local Icon
import arrowDown from "../../../../../public/images/frontend_img/arrow-down.svg";
import arrowRight from "../../../../../public/images/frontend_img/arrow-r.svg";
import phoneApp from "../../../../../public/images/frontend_img/phone-icon.png";

const ApplicationSection = () => {
    const { pathname } = useLocation();
    return (
        <motion.div
            className="website-section"
            variants={pageAnimationDown}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <div className="main main-website-section">
                <div className="nav-left">
                    <div className="next-arrow2 next-arrow-top">
                        <div className="arrow-up">
                            <Link to="/website">
                                <img src={arrowDown} alt="arrow down" />
                            </Link>
                        </div>
                        <div className="back-text">
                            <Link to="/website">Back</Link>
                        </div>
                    </div>
                    <div className="nav-links-wrapper nav-links-wrapper2 nav-links-apps">
                        <motion.div
                            className="dot dot1 dot1-apps"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "42%" }}
                            animate={{
                                top: pathname === "/apps" ? "42%" : "0%"
                            }}
                        />

                        <motion.div
                            className="dot dot2 dot2-apps"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "46%" }}
                            animate={{
                                top: pathname === "/apps" ? "46%" : "0%"
                            }}
                        />
                        <motion.div
                            className="nav-links nav-links2"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "56%" }}
                            animate={{
                                top: pathname === "/apps" ? "56%" : "0%"
                            }}
                        >
                            <span className="nr-span">02</span>
                            <motion.div
                                className="left-line-apps"
                                transition={{ duration: 0.75 }}
                                initial={{ height: "0%" }}
                                animate={{
                                    height: pathname === "/apps" ? "4rem" : "0%"
                                }}
                            />
                            <Link to="/apps" className="link-name">
                                Apps
                            </Link>
                        </motion.div>
                        <motion.div
                            className="dot dot3 dot3-apps"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "65%" }}
                            animate={{
                                top: pathname === "/apps" ? "65%" : "0%"
                            }}
                        />
                        <motion.div
                            className="dot dot4 dot4-apps"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "69%" }}
                            animate={{
                                top: pathname === "/apps" ? "69%" : "0%"
                            }}
                        />
                    </div>
                    <div className="next-arrow2 next-arrow-bottom">
                        <div className="next-text">
                            <Link to="/courses">Next</Link>
                        </div>
                        <div className="arrow-down">
                            <Link to="/courses">
                                <img src={arrowDown} alt="arrow down" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mainContent">
                    <div className="heading-apps-section">
                        <div className="page-nr page-nr-apps">
                            <h2>02</h2>
                        </div>
                        <h1 className="title">Apps</h1>
                        <div className="description-container">
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
                    <div className="phoneApp-container">
                        <div className="phoneApp">
                            <img src={phoneApp} alt="phone app" />
                        </div>
                        <div className="square-blue1" />
                        <div className="rectangle-bg" />
                        <div className="square-blue2" />
                    </div>
                </div>
                <Social />
            </div>
            <div id="footer">
                <div className="arrow-container">
                    <div className="arrow-r">
                        <Link to="/founders">
                            <img src={arrowRight} alt="arrow right" />
                        </Link>
                    </div>
                    <Link className="arrow-text" to="/founders">
                        intra si vezi
                    </Link>
                </div>
                <nav className="main-links">
                    <Link className="footer-link" to="/app-projects">
                        Projects
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
export default ApplicationSection;
