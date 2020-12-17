import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimationLeft } from "../../animations";
// Import Local Icon
import arrowLeft from "../../../../../public/images/frontend_img/arrow-l.svg";
// import courseImg1 from "../../../../../public/images/frontend_img/html.png";
import courseImg2 from "../../../../../public/images/frontend_img/css.png";
import courseImg3 from "../../../../../public/images/frontend_img/js.png";
// import courseImg4 from "../../../../public/images/frontend_img/";
// import courseImg5 from "../../../../public/images/frontend_img/";

const CourseJSReactPage = () => {
    // const { pathname } = useLocation();
    return (
        <motion.div
            className="website-section"
            variants={pageAnimationLeft}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <div className="main main-website-section">
                <div className="nav-left-course">
                    <div className="back-arrow-course">
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
                <div className="mainContent">
                    <div className="heading-hmtl-css-course">
                        <h1 className="title">JavaScript / React js</h1>
                        <h2 className="html-css-subHeading">Despre Curs</h2>
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
                    <div className="course-video-container">
                        <h2 className="course-video-title3">VEZI</h2>
                        <h2 className="course-video-title4">VIDEO</h2>
                        <div className="shape-rectangle-bg3" />
                        <div className="shape-rectangle-bg4" />
                        <h2 className="course-title5">JavaScript</h2>
                        <div className="shape-course-bg shape-course-js" />
                        <div className="course-image course-html-image2">
                            <img src={courseImg3} alt="course image" />
                        </div>
                        <h2 className="course-title4">React js</h2>
                        <div className="shape-course-bg shape-course-react" />
                        <div className="course-image course-css-image3">
                            <img src={courseImg2} alt="course image" />
                        </div>
                        <div className="price-container">
                            <div className="price">$18</div>
                            <Link to="/checkout" className="buy-btn">
                                Cumpara
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <nav className="main-links">
                    <Link className="footer-link" to="/html-css-sass-course">
                        HTML / CSS / SASS
                    </Link>
                    <Link
                        className="footer-link footer-link-active"
                        to="/javascript-react-course"
                    >
                        Javascript / React js
                    </Link>
                </nav>
            </div>
        </motion.div>
    );
};
export default CourseJSReactPage;
