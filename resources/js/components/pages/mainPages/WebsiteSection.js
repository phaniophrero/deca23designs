import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimationDown } from "../../animations";
// Import Components
import Social from "../../layouts/Social";
import NavWebsiteSection from "../../layouts/NavWebsiteSection";
// Import Local Icon
import arrowDown from "../../../../../public/images/frontend_img/arrow-down.svg";
import arrowRight from "../../../../../public/images/frontend_img/arrow-r.svg";

const WebsiteSection = () => {
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
                            <Link to="/">
                                <img src={arrowDown} alt="arrow down" />
                            </Link>
                        </div>
                        <div className="back-text">
                            <Link to="/">Back</Link>
                        </div>
                    </div>
                    <div className="nav-links-wrapper nav-links-wrapper2">
                        <motion.div
                            className="dot dot1"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "41%" }}
                            animate={{
                                top: pathname === "/website" ? "41%" : "0%"
                            }}
                        />
                        <motion.div
                            className="nav-links nav-links2"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "52%" }}
                            animate={{
                                top: pathname === "/website" ? "52%" : "0%"
                            }}
                        >
                            <span className="nr-span">01</span>
                            <motion.div
                                className="left-line2"
                                transition={{ duration: 0.75 }}
                                initial={{ height: "0%" }}
                                animate={{
                                    height:
                                        pathname === "/website" ? "4rem" : "0%"
                                }}
                            />
                            <Link to="/website" className="link-name">
                                WebSite
                            </Link>
                        </motion.div>
                        <motion.div
                            className="dot dot2"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "62%" }}
                            animate={{
                                top: pathname === "/website" ? "62%" : "0%"
                            }}
                        />
                        <motion.div
                            className="dot dot3"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "66%" }}
                            animate={{
                                top: pathname === "/website" ? "66%" : "0%"
                            }}
                        />
                        <motion.div
                            className="dot dot4"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "70%" }}
                            animate={{
                                top: pathname === "/website" ? "70%" : "0%"
                            }}
                        />
                    </div>
                    <div className="next-arrow2 next-arrow-bottom">
                        <div className="next-text">
                            <Link to="/apps">Next</Link>
                        </div>
                        <div className="arrow-down">
                            <Link to="/apps">
                                <img src={arrowDown} alt="arrow down" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mainContent">
                    <div className="heading heading-website-section">
                        <div className="page-nr">
                            <h2>01</h2>
                        </div>
                        <h1 className="title">WebSite</h1>
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
                    <div className="website-stucture">
                        <h2 className="structure-title">Website</h2>
                        <h3 className="body-tag">&lt; body &gt;</h3>
                        <h3 className="header-tag">&lt; header &gt;</h3>
                        <h3 className="main-tag">&lt; main &gt;</h3>
                        <h3 className="footer-tag">&lt; footer &gt;</h3>
                        <div className="top-line" />
                        <div className="rectangles-structure">
                            <div className="nav-rectangle">
                                <div className="dash-rectangle dash-rect-white">
                                    <h3>&lt; nav &gt;</h3>
                                </div>
                            </div>
                            <div className="middle-content">
                                <div className="aside-rectangle">
                                    <div className="dash-rectangle">
                                        <h3>&lt; aside &gt;</h3>
                                    </div>
                                </div>
                                <div className="section-rectangle">
                                    <div className="dash-rectangle">
                                        <h3>&lt; section &gt;</h3>
                                    </div>
                                </div>
                                <div className="aside-rectangle">
                                    <div className="dash-rectangle">
                                        <h3>&lt; aside &gt;</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-rectangle">
                                <div className="dash-rectangle dash-rect-white">
                                    <h3>&lt; footer &gt;</h3>
                                </div>
                            </div>
                        </div>
                        <div className="middle-line" />
                        <div className="middle-line2" />
                        <div className="bottom-line" />
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
                <NavWebsiteSection />
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
export default WebsiteSection;
