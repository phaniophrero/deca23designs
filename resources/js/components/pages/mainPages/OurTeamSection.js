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
import profileImg1 from "../../../../../public/images/frontend_img/avatar1.png";
import profileImg2 from "../../../../../public/images/frontend_img/avatar2.png";
import profileImg3 from "../../../../../public/images/frontend_img/avatar3.png";
import profileImg4 from "../../../../../public/images/frontend_img/avatar4.png";
import profileImg5 from "../../../../../public/images/frontend_img/avatar5.png";

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
                            <Link to="/courses">
                                <img src={arrowDown} alt="arrow down" />
                            </Link>
                        </div>
                        <div className="back-text">
                            <Link to="/courses">Back</Link>
                        </div>
                    </div>
                    <div className="nav-links-wrapper nav-links-wrapper2 nav-links-ourteam">
                        <motion.div
                            className="dot dot1 dot1-apps"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "46%" }}
                            animate={{
                                top: pathname === "/our-team" ? "46%" : "0%"
                            }}
                        />

                        <motion.div
                            className="dot dot2 dot2-apps"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "49%" }}
                            animate={{
                                top: pathname === "/our-team" ? "49%" : "0%"
                            }}
                        />
                        <motion.div
                            className="dot dot3 dot3-apps"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "52%" }}
                            animate={{
                                top: pathname === "/our-team" ? "52%" : "0%"
                            }}
                        />
                        <motion.div
                            className="dot dot4 dot4-apps"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "55%" }}
                            animate={{
                                top: pathname === "/our-team" ? "55%" : "0%"
                            }}
                        />
                        <motion.div
                            className="nav-links nav-links2"
                            transition={{ duration: 0.75 }}
                            initial={{ top: "62%" }}
                            animate={{
                                top: pathname === "/our-team" ? "62%" : "0%"
                            }}
                        >
                            <span className="nr-span">04</span>
                            <motion.div
                                className="left-line-courses"
                                transition={{ duration: 0.75 }}
                                initial={{ height: "0%" }}
                                animate={{
                                    height:
                                        pathname === "/our-team" ? "4rem" : "0%"
                                }}
                            />
                            <Link to="/our-team" className="link-name">
                                Echipa Noastra
                            </Link>
                        </motion.div>
                    </div>
                </div>
                <div className="mainContent">
                    <div className="heading heading-apps-section">
                        <div className="page-nr page-nr-apps">
                            <h2>04</h2>
                        </div>
                        <h1 className="title">Echipa Noastra</h1>
                        <h2 className="ourteam-subheading">Development</h2>
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
                    <div className="profile-images-container">
                        <div className="profile-image profile-image1">
                            <img src={profileImg1} alt="course image" />
                        </div>
                        <div className="profile-image profile-image2">
                            <img src={profileImg2} alt="course image" />
                        </div>
                        <div className="profile-image profile-image3">
                            <img src={profileImg3} alt="course image" />
                        </div>
                        <div className="profile-image profile-image4">
                            <img src={profileImg4} alt="course image" />
                        </div>
                        <div className="profile-image profile-image5">
                            <img src={profileImg5} alt="course image" />
                        </div>
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
                    <Link className="footer-link" to="/founders">
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
export default CoursesSection;
