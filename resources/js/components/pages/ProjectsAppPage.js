import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimationLeft } from "../animations";
// Import Local Icon
import arrowLeft from "../../../../public/images/frontend_img/arrow-l.svg";
// import courseImg1 from "../../../../public/images/frontend_img/html.png";
// import courseImg2 from "../../../../public/images/frontend_img/css.png";
// import courseImg3 from "../../../../public/images/frontend_img/js.png";

const ProjectsAppPage = () => {
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
                            <Link to="/apps">
                                <img src={arrowLeft} alt="arrow left" />
                            </Link>
                        </div>
                        <div className="back-text">
                            <Link to="/apps">inapoi</Link>
                        </div>
                    </div>
                </div>
                <div className="mainContent">
                    <div className="heading-hmtl-css-course">
                        <h1 className="title-app-projects">Projects</h1>
                        <div className="desc-container-app-projects">
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
                    <div className="projects-app-container">
                        <div className="shape-bg-project1" />
                        <div className="project-image1">
                            {/* <img src="" alt=""/> */}
                        </div>
                        <div className="shape-bg-project2" />
                        <div className="project-image2">
                            {/* <img src="" alt=""/> */}
                        </div>
                        <div className="shape-bg-project3" />
                        <div className="project-image3">
                            {/* <img src="" alt=""/> */}
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <nav className="main-links">
                    <Link
                        className="footer-link footer-link-active"
                        to="/app-projects"
                    >
                        Projects
                    </Link>
                </nav>
            </div>
        </motion.div>
    );
};
export default ProjectsAppPage;
