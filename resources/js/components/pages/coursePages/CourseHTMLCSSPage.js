import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimationLeft } from "../../animations";
// Import Local Icon
import arrowLeft from "../../../../../public/images/frontend_img/arrow-l.svg";
import courseImg1 from "../../../../../public/images/frontend_img/html.png";
import courseImg2 from "../../../../../public/images/frontend_img/css.png";
import courseImg3 from "../../../../../public/images/frontend_img/js.png";
// import courseImg4 from "../../../../public/images/frontend_img/";
// import courseImg5 from "../../../../public/images/frontend_img/";

const CourseHTMLCSSPage = () => {
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
                        <h1 className="title">HTML5 / CSS3 / Sass</h1>
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
                        <h2 className="course-video-title">VEZI</h2>
                        <h2 className="course-video-title2">VIDEO</h2>
                        <div className="shape-rectangle-bg1" />
                        <div className="shape-course-bg shape-course-sass" />
                        <div className="course-image course-sass-image1">
                            <img src={courseImg3} alt="course image" />
                        </div>
                        <h2 className="course-title1">SASS</h2>
                        <div className="shape-rectangle-bg2" />
                        <div className="shape-course-bg shape-course-html" />
                        <div className="course-image course-html-image2">
                            <img src={courseImg1} alt="course image" />
                        </div>
                        <h2 className="course-title2">HTML5</h2>
                        <div className="shape-course-bg shape-course-css" />
                        <div className="course-image course-css-image3">
                            <img src={courseImg2} alt="course image" />
                        </div>
                        <h2 className="course-title3">CSS3</h2>
                        <div className="price-container">
                            <div className="price">$13</div>
                            <Link to="/checkout" className="buy-btn">
                                Cumpara
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <nav className="main-links">
                    <Link
                        className="footer-link footer-link-active"
                        to="/html-css-sass-course"
                    >
                        HTML / CSS / SASS
                    </Link>
                    <Link className="footer-link" to="/javascript-react-course">
                        Javascript / React js
                    </Link>
                </nav>
            </div>
        </motion.div>
    );
};
export default CourseHTMLCSSPage;
