import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Home from "./pages/mainPages/Home";
import WebsiteSection from "./pages/mainPages/WebsiteSection";
import ApplicationSection from "./pages/mainPages/ApplicationSection";
import CoursesSection from "./pages/mainPages/CoursesSection";
import OurTeamSection from "./pages/mainPages/OurTeamSection";
// Secondary Pages
import NavigatorPage from "./pages/webSiteComponentsPages/NavigatorPage";
import ContentPage from "./pages//webSiteComponentsPages/ContentPage";
import AsidePage from "./pages//webSiteComponentsPages/AsidePage";
import FooterPage from "./pages//webSiteComponentsPages/FooterPage";
import DashboardPage from "./pages//webSiteComponentsPages/DashboardPage";
// Team Pages
import FoundersPage from "./pages/teamPages/FoundersPage";
import TeamPage from "./pages/teamPages/TeamPage";
// Courses Pages
import CourseHTMLCSSPage from "./pages/coursePages/CourseHTMLCSSPage";
import CourseJSReactPage from "./pages/coursePages/CourseJSReactPage";
import ProjectsAppPage from "./pages/ProjectsAppPage";
import RegisterLoginPage from "./pages/RegisterLoginPage";
import LoginPage from "./pages/authentication/LoginPage";
import RegisterPage from "./pages/authentication/RegisterPage";
// Import Messenger Chat
import MessengerCustomerChat from "react-messenger-customer-chat";

const App = () => {
    return (
        <Router>
            <>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/website" exact component={WebsiteSection} />
                    <Route path="/apps" exact component={ApplicationSection} />
                    <Route path="/courses" exact component={CoursesSection} />
                    <Route path="/our-team" exact component={OurTeamSection} />
                    <Route path="/navigator" exact component={NavigatorPage} />
                    <Route path="/content" exact component={ContentPage} />
                    <Route path="/aside" exact component={AsidePage} />
                    <Route path="/footer" exact component={FooterPage} />
                    <Route path="/dashboard" exact component={DashboardPage} />
                    <Route path="/founders" exact component={FoundersPage} />
                    <Route path="/team" exact component={TeamPage} />
                    <Route
                        path="/html-css-sass-course"
                        exact
                        component={CourseHTMLCSSPage}
                    />
                    <Route
                        path="/javascript-react-course"
                        exact
                        component={CourseJSReactPage}
                    />
                    <Route
                        path="/app-projects"
                        exact
                        component={ProjectsAppPage}
                    />
                    <Route
                        path="/register-login"
                        exact
                        component={RegisterLoginPage}
                    />
                    <Route path="/login" exact component={LoginPage} />
                    <Route path="/register" exact component={RegisterPage} />
                </Switch>
                <MessengerCustomerChat pageId="595165694283631" />
            </>
        </Router>
    );
};

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
