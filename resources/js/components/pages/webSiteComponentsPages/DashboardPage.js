import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimationLeft } from "../../animations";
//Import Component
import NavWebsiteSection from "../../layouts/NavWebsiteSection";
import arrowRight from "../../../../../public/images/frontend_img/arrow-r.svg";

const DashboardPage = () => {
    const { pathname } = useLocation();

    return (
        <motion.div
            className="website-section"
            variants={pageAnimationLeft}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <div className="main main-website-section">
                <div className="nav-left">
                    <div className="nav-links-wrapper nav-links-wrapper2">
                        <motion.div
                            className="nav-links nav-links2"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "37%" }}
                            animate={{
                                top: pathname === "/dashboard" ? "37%" : "0%"
                            }}
                        >
                            <span className="nr-span">0</span>
                            <motion.div
                                className="left-line2"
                                transition={{ duration: 0.75 }}
                                initial={{ height: "0%" }}
                                animate={{
                                    height:
                                        pathname === "/dashboard"
                                            ? "4rem"
                                            : "0%"
                                }}
                            />
                            <Link to="/" className="link-name">
                                Home
                            </Link>
                        </motion.div>
                        <motion.div
                            className="dot dot1"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "43%" }}
                            animate={{
                                top: pathname === "/dashboard" ? "43%" : "0%"
                            }}
                        />
                        <motion.div
                            className="dot dot2"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "46%" }}
                            animate={{
                                top: pathname === "/dashboard" ? "46%" : "0%"
                            }}
                        />
                        <motion.div
                            className="dot dot3"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "49%" }}
                            animate={{
                                top: pathname === "/dashboard" ? "49%" : "0%"
                            }}
                        />
                        <motion.div
                            className="dot dot4"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "52%" }}
                            animate={{
                                top: pathname === "/dashboard" ? "52%" : "0%"
                            }}
                        />
                    </div>
                </div>
                <div className="mainContent">
                    <div className="heading heading-website-section">
                        <h1 className="title">Dashboard</h1>
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
                    <div className="navigator-stucture">
                        <h2 className="structure-title">Dashboard</h2>
                        <div className="line-dashboard-page" />
                        <div className="dashboard-example">
                            <div className="dashboard-rectangle" />
                        </div>
                        <div className="bg-shape-blue-dashboard1" />
                        <div className="bg-shape-blue-dashboard2" />
                    </div>
                </div>
            </div>
            <div id="footer">
                <div className="arrow-container">
                    <div className="arrow-r">
                        <Link to="/dashboard">
                            <img src={arrowRight} alt="arrow right" />
                        </Link>
                    </div>
                    <Link className="arrow-text" to="/dashboard">
                        intra si vezi
                    </Link>
                </div>
                <NavWebsiteSection />
                <div className="right-links">
                    <Link className="footer-link-right" to="/privacy">
                        Privacy
                    </Link>
                    <Link className="footer-link-right" to="/terms">
                        Terms
                    </Link>
                    <Link className="footer-link-right" to="/contact">
                        Contact
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};
export default DashboardPage;
