import React, { useEffect } from "react";
import PropTypes from "prop-types";
import TopBar from "./TopBar";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const useStyles = {
  root: {
    height: "100%",
    width: "100%",
    background: "#F5F5F5",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    backgroundPosition: "unset",
    backgroundSize: "cover",
    minHeight: "100vh",
  },

  homeWrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    backgroundPosition: "unset",
    backgroundSize: "cover",
    minHeight: "100vh",
    paddingTop: "64px",
  },

  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "hidden",
  },
};

export default function HomeLayout({ children }) {
  const classes = useStyles;
  const location = useLocation();
  AOS.init();
  let homeRoute = location.pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div style={classes.root}>
      <TopBar />
      <div style={homeRoute ? classes.homeWrapper : classes.wrapper}>
        <div style={classes.contentContainer}>
          <div style={classes.content}>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.node,
};
