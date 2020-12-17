import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimationDown } from "../../animations";
// Import Components
import NavLogin from "../../layouts/NavLogin";
import Social from "../../layouts/Social";
// Import Local Icon
import arrowDown from "../../../../../public/images/frontend_img/arrow-down.svg";
import arrowRight from "../../../../../public/images/frontend_img/arrow-r.svg";
import courseImg1 from "../../../../../public/images/frontend_img/html.png";
import courseImg2 from "../../../../../public/images/frontend_img/css.png";
import courseImg3 from "../../../../../public/images/frontend_img/js.png";
// import courseImg4 from "../../../../public/images/frontend_img/";
// import courseImg5 from "../../../../public/images/frontend_img/";

const CoursesSection = () => {
    const { pathname } = useLocation();
    return (
        <motion.div
            className="website-section"
            variants={pageAnimationDown}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <NavLogin />
            <div className="main main-website-section">
                <div className="nav-left">
                    <div className="next-arrow2 next-arrow-top2">
                        <div className="arrow-up">
                            <Link to="/apps">
                                <img src={arrowDown} alt="arrow down" />
                            </Link>
                        </div>
                        <div className="back-text">
                            <Link to="/apps">Back</Link>
                        </div>
                    </div>
                    <div className="nav-links-wrapper nav-links-wrapper2 nav-links-courses">
                        <motion.div
                            className="dot dot1 dot1-apps"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "42%" }}
                            animate={{
                                top: pathname === "/courses" ? "42%" : "0%"
                            }}
                        />

                        <motion.div
                            className="dot dot2 dot2-apps"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "46%" }}
                            animate={{
                                top: pathname === "/courses" ? "46%" : "0%"
                            }}
                        />
                        <motion.div
                            className="dot dot3 dot3-apps"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "50%" }}
                            animate={{
                                top: pathname === "/courses" ? "50%" : "0%"
                            }}
                        />
                        <motion.div
                            className="nav-links nav-links2"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "60%" }}
                            animate={{
                                top: pathname === "/courses" ? "60%" : "0%"
                            }}
                        >
                            <span className="nr-span">03</span>
                            <motion.div
                                className="left-line-courses"
                                transition={{ duration: 0.75 }}
                                initial={{ height: "0%" }}
                                animate={{
                                    height:
                                        pathname === "/courses" ? "4rem" : "0%"
                                }}
                            />
                            <Link to="/courses" className="link-name">
                                Cursuri
                            </Link>
                        </motion.div>
                        <motion.div
                            className="dot dot4 dot4-apps"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "69%" }}
                            animate={{
                                top: pathname === "/courses" ? "69%" : "0%"
                            }}
                        />
                    </div>
                    <div className="next-arrow2 next-arrow-bottom">
                        <div className="next-text">
                            <Link to="/our-team">Next</Link>
                        </div>
                        <div className="arrow-down">
                            <Link to="/our-team">
                                <img src={arrowDown} alt="arrow down" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mainContent">
                    <div className="heading heading-apps-section">
                        <div className="page-nr page-nr-apps">
                            <h2>03</h2>
                        </div>
                        <h1 className="title">Cursuri Frontend</h1>
                        <h2 className="dev-subheading">Development</h2>
                        <div className="description-container">
                            <div className="line" />
                            <p className="description">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nemo tenetur quae et illum
                                nulla dolor mollitia earum libero eveniet
                                quisquam basass. <br />
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Adipisci quisquam nisi, at ab.
                            </p>
                        </div>
                    </div>
                    <div className="course-images-container">
                        <div className="shape-bg shape-html" />
                        <div className="course-image course-image1">
                            <img src={courseImg1} alt="course image" />
                        </div>
                        <div className="shape-bg shape-sass" />
                        <div className="course-image course-image2">
                            <img src={courseImg2} alt="course image" />
                        </div>
                        <div className="shape-bg shape-react" />
                        <div className="course-image course-image3">
                            <img src={courseImg3} alt="course image" />
                        </div>
                        <div className="shape-bg shape-css" />
                        <div className="course-image course-image4">
                            {/* <img src={courseImg4} alt="course image" /> */}
                        </div>
                        <div className="shape-bg shape-js" />
                        <div className="course-image course-image5">
                            {/* <img src={courseImg5} alt="course image" /> */}
                        </div>
                    </div>
                </div>
                <Social />
            </div>
            <div id="footer">
                <div className="arrow-container">
                    <div className="arrow-r">
                        <Link to="/html-css-sass-course">
                            <img src={arrowRight} alt="arrow right" />
                        </Link>
                    </div>
                    <Link className="arrow-text" to="/html-css-sass-course">
                        intra si vezi
                    </Link>
                </div>
                <nav className="main-links">
                    <Link className="footer-link" to="/app-projects">
                        Curs de Developer
                    </Link>
                    <Link className="footer-link" to="/html-css-sass-course">
                        HTML / CSS / SASS
                    </Link>
                    <Link className="footer-link" to="/javascript-react-course">
                        Javascript / React js
                    </Link>
                    <Link className="footer-link" to="/app-projects">
                        Dashboard
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
export default CoursesSection;
