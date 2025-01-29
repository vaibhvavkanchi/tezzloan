import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import { Box } from "@mui/material";
import FullScreenLoading from "../../component/FullScreenLoading";
import { UserContext } from "../../context/User";
// import SettingsContext from "src/context/";

const useStyles = {
  main: {
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",

    position: "relative",
    height: "100vh",
  },

  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflowX: "hidden",
    overflowY: "auto",
    backgroundColor: "#F8FAFB",
    paddingTop: "96px",
    minHeight: "calc(100vh - 75px)",
    paddingRight: "10px !important",
    "@media (min-width: 900px)": {
      paddingLeft: "280px",
      width: "100%",
      maxWidth: "calc(100% - 0px)",
    },
    "@media (max-width:767px)": {
      paddingTop: "70px !important",
      paddingRight: "10px !important",
      paddingLeft: "10px !important",
    },
  },

  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    background: "#FAFAFA",
  },
};

const DashboardLayout = ({ children }) => {
  const classes = useStyles;
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const userData = useContext(UserContext);

  console.log(isMobileNavOpen, "status");

  const handleMobileNavClose = () => {
    console.log(isMobileNavOpen, "status2");
    setMobileNavOpen((preve) => !preve);
  };
  return (
    <Box sx={classes.main}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={handleMobileNavClose}
        openMobile={isMobileNavOpen}
      />
      {userData.loading ? (
        <FullScreenLoading open={userData.loading} />
      ) : (
        <Box sx={classes.wrapper}>{children}</Box>
      )}
    </Box>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

export default DashboardLayout;
